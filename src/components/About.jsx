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
    `I believe in architecture as abstraction, not language.
Hexagonal architecture, OOP, or Functional Programming are mental models that can be expressed in any Turing-complete language 
— it's not about syntax, it's about system design and reasoning.`,
    `I enjoy exploring the philosophical aspects of mathematics and computer science, 
    particularly how they relate to logic, reasoning, and the nature of computation. 
    I believe that understanding these concepts deeply enhances my ability to solve complex problems.`,
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
                        <span className="text-2xl">📖</span>
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
                {/* Left Column - Profile Card + Credly */}
                <div className="w-full xl:w-[30%] flex flex-col items-center space-y-6">
                    {/* Profile Card */}
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <ProfileCard
                            title={me.title}
                            description={cardDescription}
                            image={me.image}
                        />
                    </div>
                    
                    {/* Credly Certifications */}
                    <div className="w-full max-w-sm text-center">
                        <div className="flex items-center justify-center mb-4">
                            <img 
                                src="https://images.credly.com/images/32d4008d-1fa0-4a79-8375-4857b0306dc5/blob.png" 
                                alt="Credly" 
                                className="h-16"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                            Digital Credentials
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Verified professional certifications and achievements
                        </p>
                        <a 
                            href="https://www.credly.com/users/patiphan-akkahadsri.41c7b44d" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            <span>View Badges</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                    {/* Optional: Skills or Quick Stats */}
                    {/* <div className="w-full max-w-sm">
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800">
                            <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-3 text-center">
                                🎯 Core Expertise
                            </h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700 dark:text-gray-300">Machine Learning</span>
                                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-emerald-500 h-2 rounded-full w-[90%]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700 dark:text-gray-300">Data Science</span>
                                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700 dark:text-gray-300">Mathematics</span>
                                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full w-[95%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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