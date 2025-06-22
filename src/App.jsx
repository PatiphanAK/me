import './App.css'
import Navbar from './components/Navbar'
import { Hero, About, Skill, Project, Education, Contact } from './components'

const sections = [
  { id: "home", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "skill", component: <Skill /> },
  { id: "project", component: <Project /> },
  { id: "education", component: <Education /> },
  { id: "contact", component: <Contact /> },
]

function App() {
  return (
    <>
        <Navbar/>
        <main className="scroll-smooth">
          {sections.map(({ id, component }) => (
            <section 
              id={id} 
              key={id} 
              className={id === "home" ? "" : "py-8"}
            >
              {component}
            </section>
          ))}
        </main>
    </>
  )
}

export default App