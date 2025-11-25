import { Project } from "@/app/shared/types";
import { Code2, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-[1.02]">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-700/50 h-64 md:h-auto flex items-center justify-center">
          <Code2 className="w-24 h-24 text-gray-600" />
        </div>
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
          <span className="text-green-500 font-semibold text-sm mb-2">{project.category}</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-green-400 px-4 py-1 rounded-full text-sm border border-green-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="#"
            className="text-green-500 hover:text-green-400 font-semibold flex items-center gap-2 w-fit group"
          >
            Ver mais detalhes
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;