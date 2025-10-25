import { Users, ExternalLink, Github, MoreHorizontal } from "lucide-react";
import type { ProjectI } from "../../../data/DataProjects";
import { CollaboratorItem } from "./CollaboratorItem"; 

interface ModalInfoSectionProps {
  project: ProjectI;
  accentText: string;
  isCollaborative: boolean;
}

export const ModalInfoSection = ({ project, accentText, isCollaborative }: ModalInfoSectionProps) => (
  <div className="lg:col-span-1 lg:mt-0 flex flex-col gap-5 sm:gap-7 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 lg:pl-8 pt-6 lg:pt-0">
    
    <div className="shrink-0">
      <h3
        className={`text-xl sm:text-2xl font-bold mb-3 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
      >
        Technologies Clés
      </h3>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.langage.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs sm:text-sm rounded-full font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-inner dark:shadow-black/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {isCollaborative && (
      <div className="shrink-0">
        <h3
          className={`text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
        >
          <Users className="w-5 h-5 sm:w-6 sm:h-6" /> Équipe de Projet
        </h3>
        <div className="flex flex-col gap-3 mt-3">
          {project.collaborators!.map((col, i) => (
            <CollaboratorItem key={i} collaborator={col} />
          ))}
        </div>
      </div>
    )}

    <div className="flex flex-col gap-3 mt-6 lg:hidden">
      <h3
        className={`text-xl sm:text-2xl font-bold mb-2 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
      >
        Actions
      </h3>
      <div className="flex flex-col gap-3 mt-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-xl shadow-lg hover:bg-cyan-500 transition-all font-semibold text-sm`}
          >
            <ExternalLink className="w-5 h-5" /> Voir la Démo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-6 py-3 border border-purple-500 ${accentText} rounded-xl hover:bg-purple-500/10 transition-all font-semibold text-sm dark:hover:bg-purple-500/20`}
          >
            <Github className="w-5 h-5" /> Code Source
          </a>
        )}
       {/*  {project.detailPageLink && (
          <a
            href={project.detailPageLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-500 transition-all font-semibold text-sm`}
          >
            <MoreHorizontal className="w-5 h-5" /> Détails Complémentaires
          </a>
        )} */}
      </div>
    </div>
  </div>
);