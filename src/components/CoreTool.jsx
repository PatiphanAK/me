const programmingLanguages = [
    { id: 1, name: 'Python',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png', 
        proficiency: 80,
        description: "I know about basic syntax, data types, control flow, functions, and modules. I have experience with libraries like NumPy, Pandas, SciPy, OpenCV, Pytorch ,and Matplotlib. I also have some experience with web frameworks like FastAPI and Django."
    },
    { id: 2, name: 'JavaScript', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 
        proficiency: 40,
        description: "I have a good understanding of JavaScript, and a little bit of ES6 ECMA6. I have used frameworks like React and Vue.js for building user interfaces."},
    { id: 3, name: 'Go', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg', 
        proficiency: 35,
        description: `After hand-on a little bit of Go, I interested in Go because of its simplicity and performance. 
        So I have been learning Go for a while by Tour of Go and Coding it from scratch to work with file system.`
    },
    { id: 4, name: 'Bash & Shell Script', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png', 
        proficiency: 15 ,
        description: "Linux is my main OS. So I was using bash and shell script to automate my work such as basic commands, file manipulation, cornjob,and scripting."
    },
    {
        id:5, name: 'C',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png',
        proficiency: 20,
        description: `
        At school and 42Bangkok, I learned C programming, using unixstd.h and libc to interact with the file system. This helped me understand how file systems and the kernel work at a low level.
        `
    },
    {
        id:6, name: "Rust",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
        proficiency: 8,
        description: `After the trend of rewriting system 
        I start learning rust from scratch because of I interestend on it performane green software engineering  `
    }
];

export default function CoreTool() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {programmingLanguages.map((language) => (
                    <div key={language.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <img 
                                src={language.logoUrl} 
                                alt={`${language.name} logo`} 
                                className="h-16 w-auto"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-2">{language.name}</h3>
                        
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <span className="text-sm font-semibold">{language.name}</span>
                                <span className="text-sm font-semibold">{language.proficiency}%</span>
                            </div>
                            <div className="flex mb-2">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: `${language.proficiency}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm ">{language.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
