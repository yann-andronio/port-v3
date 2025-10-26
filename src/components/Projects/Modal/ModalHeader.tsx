import { X, Users,Code } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";
import { colorMap } from "./ProjectModal"; 

interface ModalHeaderProps {
  project: ProjectI;
  onClose: () => void;
  accent: string;
}

export const ModalHeader = ({ project, onClose, accent }: ModalHeaderProps) => {
  const { categoryIcon: CategoryIcon } = colorMap[project.category] || colorMap.gray;

  const headerGradientClass = `from-${accent}-700 to-${accent}-900 dark:from-${accent}-300 dark:to-${accent}-500`;
  const accentBorder = `border-${accent}-500 dark:border-${accent}-400`;
  const ProjectTypeIcon =project.projectType === "Collaboratif"? Users: Code;

/*   bg-gray-800/90  for first div*/
  return (
    <div
      className={`
        relative shrink-0 p-4 md:p-6 flex items-center justify-between
        lg:border-b-4 ${accentBorder}
        bg-white/90 dark:bg-[#060010] backdrop-blur-sm 
        shadow-lg z-10 
      `}
    >
      <div className="flex flex-col">
        <h2
          className={`text-black/80
            text-xl sm:text-3xl font-extrabold leading-tight mb-1
           bg-clip-text bg-gradient-to-r ${headerGradientClass}
            dark:text-white  
          `}
        >
          {project.text}
        </h2>
        <div className="flex flex-wrap items-center gap-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
          <span className="flex items-center gap-1">
            <CategoryIcon className="w-4 h-4" /> {project.category}
          </span>
          <span className="flex items-center gap-1">
            <ProjectTypeIcon className="w-4 h-4" /> {project.projectType}
          </span>
        </div>
      </div>

      <button
        onClick={onClose}
        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-all shadow-xl"
        aria-label="Fermer la fenêtre modale"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};