import React from "react";
import { Github, ExternalLink, Monitor, Zap, Code } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";
import { ModalHeader } from "./ModalHeader";
import { ModalContentSection } from "./ModalContentSection";
import { ModalInfoSection } from "./ModalInfoSection";

interface ProjectModalProps {
  project: ProjectI;
  onClose: () => void;
}

export const colorMap = {
  Web: { accent: "sky", categoryIcon: Monitor },
  Mobile: { accent: "emerald", categoryIcon: Monitor },
  Desktop: { accent: "indigo", categoryIcon: Monitor },
  "Jeux Vidéo": { accent: "rose", categoryIcon: Zap },
  Outil: { accent: "amber", categoryIcon: Code },
  gray: { accent: "gray", categoryIcon: Monitor },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { accent } = colorMap[project.category] || colorMap.gray;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const accentText = `text-${accent}-600 dark:text-${accent}-400`;

 const isCollaborative: boolean = project.projectType === "Collaboratif" && !!(project.collaborators && project.collaborators.length > 0);

  // Classes pour masquer la scrollbar 
  const hideScrollbarClass = "scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-2xl"
      onClick={handleBackdropClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-[95vw] max-w-7xl
          h-[90vh] md:w-11/12 lg:h-[90vh]
          bg-white dark:bg-[#060010] rounded-3xl shadow-2xl flex flex-col
          border border-gray-200 dark:border-gray-800
          overflow-hidden
        `}
      >
        <ModalHeader project={project} onClose={onClose} accent={accent} />

        <div className={`flex-grow overflow-y-auto p-4 md:p-6 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12${hideScrollbarClass}`}>
          <ModalContentSection project={project} accentText={accentText} />

          <ModalInfoSection
            project={project}
            accentText={accentText}
            isCollaborative={isCollaborative}
          />
        </div>

        <div className={` hidden lg:flex justify-end items-center gap-4 p-5  border-t border-gray-300 dark:border-gray-700  bg-white/95 dark:bg-[#060010] shadow-2xl shrink-0 z-10 `}>
        
        {/*   {project.detailPageLink && (
            <a
              href={project.detailPageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-500 transition-all font-semibold"
            >
              <MoreHorizontal className="w-5 h-5" /> Détails Complémentaires
            </a>
          )} */}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-500 transition-all font-semibold"
            >
              <ExternalLink className="w-5 h-5" /> Voir la Démo
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 border border-purple-500 ${accentText} rounded-xl hover:bg-purple-500/10 transition-all font-semibold dark:hover:bg-purple-500/20`}
            >
              <Github className="w-5 h-5" /> Code Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}