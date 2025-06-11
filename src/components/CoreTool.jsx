import ProgrammingLanguageCard from "./Cards/ProgrammingCards";

const programmingLanguages = [
    { id: 1, name: 'Python',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png', 
        proficiency: 75,
        description: "I know about basic syntax, data types, control flow, functions, and modules. I have experience with libraries like NumPy, Pandas, SciPy, OpenCV, Pytorch, and Matplotlib. I also have some experience with web frameworks like FastAPI and Django.",
        color: "from-blue-500 to-green-500"
    },
    { id: 2, name: 'JavaScript', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 
        proficiency: 40,
        description: "I have a good understanding of JavaScript, and a little bit of ES6 ECMA6. I have used frameworks like React and Vue.js for building UI.",
        color: "from-yellow-400 to-orange-500"
    },
    { id: 3, name: 'Go', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg', 
        proficiency: 60,
        description: "Basic syntax, structs, pointers, methods, generics, goroutines, interfaces, channels, and mutexes, alongside practical experience with the Fiber and Gorilla Mux frameworks and file system I/O",
        color: "from-cyan-400 to-blue-600"
    },
    { id: 4, name: 'Bash & Shell Script', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png', 
        proficiency: 25,
        description: `Proficient in Bash and shell scripting for Linux, 
        automating tasks like file manipulation, 
        cron job scheduling, 
        and dynamic file generation to optimize workflows.`,
        color: "from-green-500 to-emerald-600"
    },
    {
        id: 5, name: 'C',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png',
        proficiency: 25,
        description: `Hands-on experience utilizing POSIX unistd.h and the GNU C Library (glibc) for low-level file system interactions, 
        memory allocation, and process management.`,
        color: "from-gray-600 to-blue-800"
    },
    {
        id: 6, name: "Rust",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
        proficiency: 40,
        description: `
        Familiar with Rust's core syntax, 
        algebraic data types, and Cargo package management. 
        Actively developing proficiency in Rust's ownership and borrowing system
        `,
        color: "from-orange-600 to-red-600"
    }
];

const getProficiencyLevel = (proficiency) => {
    if (proficiency >= 90) return { level: "Expert", color: "text-emerald-600" };
    if (proficiency >= 80) return { level: "Advanced", color: "text-blue-600" };
    if (proficiency >= 60) return { level: "Intermediate", color: "text-yellow-600" };
    return { level: "Beginner", color: "text-orange-600" };
};

export default function CoreTool() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-20 
            dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/50 space-y-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                        Programming Skills
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A showcase of my programming language proficiency and experience
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programmingLanguages.map((language, index) => {
                        const proficiencyInfo = getProficiencyLevel(language.proficiency);
                        
                        return (
                            <ProgrammingLanguageCard
                            language={language}
                            index={index}
                            key={language.id}
                            getProficiencyLevel={getProficiencyLevel}
                            />
                        );
                    })}
                </div>

                {/* Footer Stats */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{programmingLanguages.length}</div>
                            <div className="text-sm text-gray-600">Languages</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">
                                {Math.round(programmingLanguages.reduce((acc, lang) => acc + lang.proficiency, 0) / programmingLanguages.length)}%
                            </div>
                            <div className="text-sm text-gray-600">Avg. Proficiency</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                                {programmingLanguages.filter(lang => lang.proficiency >= 80).length}
                            </div>
                            <div className="text-sm text-gray-600">Advanced+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
