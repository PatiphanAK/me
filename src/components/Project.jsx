import ProjectCard from "./Card"

const projects = [
    {
        title: "Lend System",
        description: `A system for lending and borrowing items. developed with Django Rest and Vue 3.
        This project is monolithic and using Rest API. It is a simple system for lending and borrowing items. this code is not good so I will rewrite it in the future.`,
        image: "https://picsum.photos/seed/picsum/200/300",
        githubURL: "https://github.com/PatiphanAK/lend_sys"
    },
    {
        title: "Quiz App",
        description: `A quiz application inspired by Kahoot. Developed with Fiber, Gorilla Websocket and Nuxt 3. connect with Google OAuth2.0
         Implemented secure authentication via HTTP cookies.`,
        image: "/assets/project/quizz.png",
        githubURL: "https://github.com/PatiphanAK/leauge-of-quiz"
    }
]

export default function Project() {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4 px-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image}
                        githubURL={project.githubURL}
                    />
                ))}
            </div>
        </div>
    )
}