import { Users, Code, BookOpen } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";

interface ProjectCardImageProps {
  project: ProjectI;
  colors: { primary: string, secondary: string }; 
  ProjectIcon: typeof Users| typeof Code; 
  onLoad:()=>void
}

export const ProjectCardImage = ({ project, colors, ProjectIcon , onLoad }: ProjectCardImageProps) => {
  
  const categoryGradient = `from-${colors.primary}-600/90 to-${colors.secondary}-700/90 dark:from-${colors.primary}-500/90 dark:to-${colors.secondary}-600/90`;

  return (
    <div className="relative h-56 overflow-hidden">
      <img
        src={`${project.mainImage.url}`}
        alt={project.mainImage.alt}
        className="w-full h-full p-3 rounded-3xl transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.85]"
        onLoad={onLoad}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
        <div className="p-4 rounded-full bg-white/95 text-gray-900 shadow-xl transition-transform hover:scale-110">
          <BookOpen className="w-6 h-6" />
        </div>
        <p className="mt-3 text-lg font-bold text-white tracking-widest border-b-2 border-white/50">
          DÉCOUVRIR
        </p>
      </div>

      <div
        className={`
          absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase text-white shadow-lg
          bg-white/10 ${categoryGradient} backdrop-blur-lg 
          border border-white/50 dark:border-white/20 
        `}
      >
        <ProjectIcon className="w-3.5 h-3.5 inline-block mr-1" />
        {project.projectType}
      </div>
    </div>
  );
};