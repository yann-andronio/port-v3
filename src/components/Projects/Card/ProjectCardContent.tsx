import { Monitor, ExternalLink, Code } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";

interface ProjectCardContentProps {
  project: ProjectI;
  accentTextColor: string;
}

export const ProjectCardContent = ({ project, accentTextColor }: ProjectCardContentProps) => {
  return (
    <div className="p-6 flex flex-col gap-2">
      <div className={`flex items-center gap-1 text-sm font-medium ${accentTextColor}`}>
        <Monitor className="w-4 h-4" /> {project.category}
      </div>

      <h3 className={`text-xl font-extrabold text-gray-900 dark:text-gray-100 truncate`}>
        {project.text}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1 min-h-[40px]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/50">
        {project.langage.slice(0, 3).map((lang, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md shadow-inner shadow-gray-200/50 dark:shadow-black/20"
          >
            {lang}
          </span>
        ))}
        {project.langage.length > 3 && (
          <span className={`text-xs px-2 py-1 font-medium ${accentTextColor}`}>
            +{project.langage.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 mt-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1 text-sm font-semibold ${accentTextColor} hover:opacity-80 transition-opacity`}
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:opacity-80 transition-opacity"
          >
            <Code className="w-4 h-4" /> Code
          </a>
        )}
      </div>
    </div>
  );
};