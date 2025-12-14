import { useSelector } from "react-redux"

const Projects = () => {
  const projects = useSelector((state) => state.projectState.projects);

    return (
        <section id="projects" className="py-20">
      
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
 
            <div className="h-48 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-3">
                    {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs border border-purple-300 text-purple-600 dark:border-purple-800 dark:text-purple-300 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-white font-medium hover:text-purple-600 underline"
                    >
                        Github
                    </a>
                    <a 
                        href={project.site} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-800 dark:text-white font-medium hover:text-purple-600 underline"
                    >
                        View Site
                    </a>
                </div>
            </div>

          </div>
        ))}
      </div>

    </section>
    )
}
export default Projects;