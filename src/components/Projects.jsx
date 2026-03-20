import ProjectCard from "./ProjectCard.jsx";

function Projects({ ProjectHeader }) {
    const projects = [
        { title: "Project 1", description: "This is the description of the project" },
        { title: "Project 2", description: "This is the description of the project" },
        { title: "Project 3", description: "This is the description of the project" },
        { title: "Project 4", description: "This is the description of the project" },
        { title: "Project 5", description: "This is the description of the project" },
    ];

    return (
        <section className="projects my-16">
            <h2 className="text-3xl font-semibold mb-10 text-center">{ProjectHeader}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;