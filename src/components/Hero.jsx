import TypingText from "./TypingText"


export default function Hero() {
    return (
        <div className="flex flex-col">
            <div className="hero min-h-[60vh] bg-base-200" style={{
                backgroundImage: 'url(/me/assets/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            </div>   
            <div className="-mt-1">
                <TypingText/>   
            </div>
        </div>
    )
}