function ProjectCard({ title, description }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                View Project
            </button>
        </div>
    );
}

export default ProjectCard;