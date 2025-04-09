import { useState, useEffect } from 'react'

const messages = [
    `Hello I'm "Ta"`,
    "I interested in Software Development",
    "I really love Mathematics",
    "I love to learn new things",
]

export default function TypingText() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = messages[wordIndex]
    const baseTypingSpeed = 110   // Time per character when typing
    const baseDeletingSpeed = 55  // Time per character when deleting
    const pauseBeforeDelete = 1500 // Pause time after completing typing
    const pauseBeforeNextWord = 700 // Pause time after deleting before next word
    
    // Add slight random variation for more natural typing
    const getVariableSpeed = (baseSpeed) => {
      return baseSpeed + (Math.random() * 30 - 15)
    }
    
    // Calculate actual speed for this update
    let typeSpeed = isDeleting ? 
      getVariableSpeed(baseDeletingSpeed) : 
      getVariableSpeed(baseTypingSpeed)
    
    // For pauses between actions
    if (isPaused) {
      typeSpeed = isDeleting ? pauseBeforeNextWord : pauseBeforeDelete
    }

    const timeout = setTimeout(() => {
      // Handle paused state
      if (isPaused) {
        setIsPaused(false)
        
        // After pause when typing is complete, start deleting
        if (!isDeleting) {
          setIsDeleting(true)
        } 
        // After pause when deleting is complete, move to next word
        else {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % messages.length)
        }
        return
      }

      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        // If we've completed typing the word
        if (charIndex + 1 === currentWord.length) {
          setIsPaused(true)  // Pause before deleting
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        // If we've completed deleting the word
        if (charIndex - 1 === 0) {
          setIsPaused(true)  // Pause before next word
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, isPaused])

  return (
    <h2 className="text-3xl font-semibold text-center mt-8">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  )
}