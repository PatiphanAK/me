import { useState } from "react";
import { Github, ExternalLink, Code, Layers, Database, Server, Smartphone, Shield, Users, Calendar } from "lucide-react";

// Tech stack icons mapping - อัปเดตสีให้รองรับ dark mode
const techIcons = {
  Django: { icon: Server, color: "text-green-600 dark:text-green-400" },
  Vue: { icon: Layers, color: "text-green-500 dark:text-green-400" },
  "Vue 3": { icon: Layers, color: "text-green-500 dark:text-green-400" },
  Fiber: { icon: Code, color: "text-blue-500 dark:text-blue-400" },
  Go: { icon: Code, color: "text-blue-600 dark:text-blue-400" },
  Websocket: { icon: Database, color: "text-orange-500 dark:text-orange-400" },
  "Nuxt 3": { icon: Layers, color: "text-green-400 dark:text-green-300" },
  OAuth: { icon: Shield, color: "text-red-500 dark:text-red-400" },
  REST: { icon: Database, color: "text-purple-500 dark:text-purple-400" },
  API: { icon: Database, color: "text-indigo-500 dark:text-indigo-400" }
};

const projects = [
    {
        id: 1,
        title: "Lend System",
        description: `A comprehensive system for lending and borrowing items. Built with Django Rest Framework and Vue 3, featuring a monolithic architecture with REST API integration. Perfect for managing item loans with user authentication and tracking.`,
        image: "https://picsum.photos/seed/lend/400/250",
        githubURL: "https://github.com/PatiphanAK/lend_sys",
        techStack: ["Django", "Vue 3", "REST", "API"],
        status: "Legacy",
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Quiz App",
        description: `An interactive quiz application inspired by Kahoot. Developed with Go Fiber backend, Gorilla WebSocket for real-time interactions, and Nuxt 3 frontend. Features Google OAuth2.0 authentication with secure HTTP cookie implementation.`,
        image: "assets/project/quiz.png",
        githubURL: "https://github.com/PatiphanAK/leauge-of-quiz",
        techStack: ["Go", "Fiber", "Websocket", "Nuxt 3", "OAuth"],
        status: "Active",
        category: "Real-time App"
    }
];

function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Status badge */}
            <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    project.status === 'Active' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700' 
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700'
                }`}>
                    {project.status}
                </span>
            </div>

            {/* Image section */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category badge on image */}
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 dark:text-gray-200">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content section */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => {
                            const techConfig = techIcons[tech] || { icon: Code, color: "text-gray-600 dark:text-gray-400" };
                            const IconComponent = techConfig.icon;
                            
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-3 py-1 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors duration-200"
                                    style={{
                                        transform: isHovered ? 'translateY(0)' : 'translateY(5px)',
                                        opacity: isHovered ? 1 : 0.8,
                                        transitionDelay: `${index * 50}ms`
                                    }}
                                >
                                    <IconComponent className={`w-4 h-4 ${techConfig.color}`} />
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                    <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                    >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                    </a>
                    <button className="flex items-center justify-center px-4 py-3 bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 dark:from-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}

export default function Project() {
    return (
        <div className="py-16 px-4 min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-2xl shadow-lg">
                            <Layers className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 dark:from-gray-100 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Showcasing my journey through different technologies and frameworks
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                animationDelay: `${index * 200}ms`,
                                opacity: 0,
                                animation: 'fadeInUp 0.8s ease forwards'
                            }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <Calendar className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">More projects coming soon...</span>
                    </div>
                </div>
            </div>
            <style>{`
            @keyframes fadeInUp {
                from {
                opacity: 0;
                transform: translateY(30px);
                }
                to {
                opacity: 1;
                transform: translateY(0);
                }
            }

            .line-clamp-4 {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            `}</style>

        </div>
    );
}