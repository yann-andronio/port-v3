import React, { useState } from "react";
import { Monitor, ExternalLink, Code, Info } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";
import { LinkUnavailableModal } from "../Modal/LinkUnavailableModal"; 

interface ProjectCardContentProps {
  project: ProjectI;
  accentTextColor: string;
}

export const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ project, accentTextColor }) => {
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

 const handleLinkClick = (e: React.MouseEvent,type: "live" | "code") => {
  e.stopPropagation();
  const hasLink = type === "live" ? project.liveLink : project.githubLink;
  const setModalOpen = type === "live" ? setIsLiveModalOpen : setIsCodeModalOpen;

  if (!hasLink) {
    e.preventDefault();
    setModalOpen(true);
  }
};


  const commonLinkClasses = "inline-flex items-center gap-1 text-sm font-semibold hover:opacity-80 transition-opacity";
  
  const availableLiveClasses = `${commonLinkClasses} ${accentTextColor}`;
  const unavailableLiveClasses = `${commonLinkClasses} text-gray-400 dark:text-gray-600 cursor-pointer`; 

  const availableCodeClasses = `${commonLinkClasses} text-gray-600 dark:text-gray-400`;
  const unavailableCodeClasses = `${commonLinkClasses} text-gray-400 dark:text-gray-600 cursor-pointer`; 

  return (
    <>
      <div className="p-6 flex flex-col gap-2">
        <div className={`flex items-center gap-1 text-sm font-medium ${accentTextColor}`}>
          <Monitor className="w-4 h-4" /> {project.category}
        </div>

        <h3 className={`text-xl font-extrabold text-gray-900 dark:text-gray-100 truncate`}>
          {project.text}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1 min-h-10">
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
          {/* lien live */}
          <a
            href={project.liveLink || "#"}
            target={project.liveLink ? "_blank" : "_self"}
            rel={project.liveLink ? "noopener noreferrer" : undefined}
            onClick={(e) => handleLinkClick(e, "live")}
            className={project.liveLink ? availableLiveClasses : unavailableLiveClasses}
          >
            {project.liveLink ? <ExternalLink className="w-4 h-4" /> : <Info className="w-4 h-4" />} Live
          </a>
          
          {/* LIEN CODE */}
          <a
            href={project.githubLink || "#"}
            target={project.githubLink ? "_blank" : "_self"}
            rel={project.githubLink ? "noopener noreferrer" : undefined}
            onClick={(e) => handleLinkClick(e, "code")}
            className={project.githubLink ? availableCodeClasses : unavailableCodeClasses}
          >
            {project.githubLink ? <Code className="w-4 h-4" /> : <Info className="w-4 h-4" />} Code
          </a>
        </div>
      </div>
      
      <LinkUnavailableModal 
        isOpen={isLiveModalOpen} 
        onClose={() => setIsLiveModalOpen(false)} 
        type="live"
        projectText={project.text}
      />
      <LinkUnavailableModal 
        isOpen={isCodeModalOpen} 
        onClose={() => setIsCodeModalOpen(false)} 
        type="code"
        projectText={project.text}
      />
    </>
  );
};