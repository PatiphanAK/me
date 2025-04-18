import { ProfileCard } from "./Card"

const me = {
    image: "assets/me.jpg",
    title: "Patiphan Akkahadsri",
}

const cardDescription = `I am a student at KMITL, majoring in Information Technology on Software Development module.`

const favoriteTopic = [
    "Linear Algebra",
    "Calculus",
    "Discrete Mathematics",
    "Probability and Statistics",
    "Differential Geometry",
    "Information Theory",
    "Vector Calculus",
    "Numerical Analysis",
    "Optimization",
    "Image Processing",
    "Computer Vision",
    "Digital Signal Processing",
]

const paragraphs = [
    "I am a currently a student at School of Information Technology, King Mongkut's Institute of Technology Ladkrabang (KMITL).",
    `Throughout my time at KMITL, I’ve developed a strong interest in the mathematical foundations of computer science. I particularly enjoy subjects`,
    `Driven by curiosity, I’ve explored more advanced topics such as`,
    `I'm also familiar with Unix-based systems like macOS and Linux. 
    I often work in a dual-boot environment using both Windows and Ubuntu, 
    which gives me flexibility across different development ecosystems.`,
    `Not only I enjoy mathematics, but I also have a passion for coding.
    Not only do I enjoy mathematics, but I’m also passionate about coding.
I'm actively working on improving my skills by learning fundamental concepts like 
object-oriented programming (OOP), data structures, algorithms, functional programming, and web development.`,
` love diving into the underlying mechanics of how things work and understanding the reasons behind certain approaches not just how they work, but why we do things a certain way. 
This deeper understanding helps me not only apply what I learn but also innovate and make informed decisions in my coding journey.`
]

function AboutMeAdditionalInfo() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{paragraphs[0]}</p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {paragraphs[1]} <span className="font-medium text-indigo-600 dark:text-indigo-400">{favoriteTopic.slice(0, 4).join(", ")}</span>.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {paragraphs[2]} <span className="font-medium text-indigo-600 dark:text-indigo-400">{favoriteTopic.slice(4).join(", ")}</span>.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{paragraphs[3]}</p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{paragraphs[4]}</p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{paragraphs[5]}</p>
      </div>
    );
}

export default function About() {
    return (
        <div className="px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row md:gap-4 gap-4 items-start justify-center">
                <div className="w-full md:w-[48%] flex justify-center">
                    <ProfileCard
                        title={me.title}
                        description={cardDescription}
                        image={me.image}
                    />
                </div>
                <div className="w-full md:w-[48%] flex justify-center">
                    <AboutMeAdditionalInfo />
                </div>
            </div>
        </div>
    );
}
