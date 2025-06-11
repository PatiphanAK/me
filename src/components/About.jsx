import { MathematicalAnalysis } from "./Hyperbolic/MathAnalysis"
import { HyperbolicParaboloid } from "./Hyperbolic/Hyperbolic"
import { ProfileCard } from "./Cards/Card"

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
    `Throughout my time at KMITL, I've developed a strong interest in the mathematical foundations of computer science. I particularly enjoy subjects`,
    `Driven by curiosity, I've explored more advanced topics such as`,
    `I'm also familiar with Unix-based systems like macOS and Linux. 
    I often work in a dual-boot environment using both Windows and Arch Linux, 
    which gives me flexibility across different development ecosystems.`,
    `Not only I enjoy mathematics, but I also have a passion for coding.
    Not only do I enjoy mathematics, but I'm also passionate about coding.
I'm actively working on improving my skills by learning fundamental concepts like 
object-oriented programming (OOP), data structures, algorithms, functional programming, and web development.`,
    ` love diving into the underlying mechanics of how things work and understanding the reasons behind certain approaches not just how they work, but why we do things a certain way. 
This deeper understanding helps me not only apply what I learn but also innovate and make informed decisions in my coding journey.`
]

// Color palette for different topic categories
const topicColors = [
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    "bg-gradient-to-r from-green-500 to-teal-500 text-white", 
    "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
    "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
    "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
    "bg-gradient-to-r from-teal-500 to-green-500 text-white",
    "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
    "bg-gradient-to-r from-red-500 to-pink-500 text-white",
    "bg-gradient-to-r from-violet-500 to-purple-500 text-white",
    "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white",
]

function TopicBadge({ topic, colorClass }) {
    return (
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-200 ${colorClass}`}>
            {topic}
        </span>
    );
}


function AboutMeAdditionalInfo() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-3xl shadow-2xl space-y-8 border border-gray-100 dark:border-gray-700">
            {/* Header with gradient text */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[0]}</p>
            </div>

            {/* Mathematical Interests */}
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    {paragraphs[1]}
                </p>
                <div className="flex flex-wrap gap-2">
                    {favoriteTopic.slice(0, 4).map((topic, index) => (
                        <TopicBadge key={topic} topic={topic} colorClass={topicColors[index]} />
                    ))}
                </div>
            </div>

            {/* Advanced Topics */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    {paragraphs[2]}
                </p>
                <div className="flex flex-wrap gap-2">
                    {favoriteTopic.slice(4).map((topic, index) => (
                        <TopicBadge key={topic} topic={topic} colorClass={topicColors[index + 4]} />
                    ))}
                </div>
            </div>

            {/* Systems Experience */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💻</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[3]}</p>
                </div>
            </div>

            {/* Coding Passion */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[4]}</p>
                </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{paragraphs[5]}</p>
                </div>
            </div>

            {/* Decorative element */}
            <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"></div>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div className="px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-12">
            <div className="flex flex-col xl:flex-row xl:gap-8 gap-8 items-start justify-center">
                {/* Left Column - Profile Card */}
                <div className="w-full xl:w-[30%] flex justify-center">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <ProfileCard
                            title={me.title}
                            description={cardDescription}
                            image={me.image}
                        />
                    </div>
                </div>
                
                {/* Middle Column - About Me Text */}
                <div className="w-full xl:w-[35%] flex justify-center">
                    <AboutMeAdditionalInfo />
                </div>
                
                {/* Right Column - Mathematical Visualization */}
                <div className="w-full xl:w-[35%] space-y-6">
                    {/* 3D Visualization */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">
                            🌊 Interactive Hyperbolic Paraboloid
                        </h3>
                        <HyperbolicParaboloid />
                    </div>
                    
                    {/* Mathematical Analysis */}
                    <MathematicalAnalysis />
                </div>
            </div>
        </div>
    );
}