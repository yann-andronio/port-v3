// components/ProjectModal/ProjectModal.jsx

import React from "react";
import {
  Github,
  ExternalLink,
  X,
  Monitor,
  Code,
  MoreHorizontal,
  Users, // Pour "Collaboratif"
  Zap, // Pour "Expérimental"
} from "lucide-react";
import type { BestProjectI } from "../../../data/DataProjects";
import { CollaboratorItem } from "./CollaboratorItem"; 
// Assurez-vous que CollaboratorItem existe et gère les styles de petite carte

interface ProjectModalProps {
  project: BestProjectI;
  onClose: () => void;
}

// Map de couleurs complète (inchangée)
const colorMap = {
  Web: { accent: "sky", categoryIcon: Monitor },
  Mobile: { accent: "emerald", categoryIcon: Monitor },
  Desktop: { accent: "indigo", categoryIcon: Monitor },
  "Jeux Vidéo": { accent: "rose", categoryIcon: Zap },
  Outil: { accent: "amber", categoryIcon: Code },
  gray: { accent: "gray", categoryIcon: Monitor },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { accent, categoryIcon: CategoryIcon } =
    colorMap[project.category] || colorMap.gray;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Classes de couleur complètes pour l'accentuation
  const headerGradientClass = `from-${accent}-700 to-${accent}-900 dark:from-${accent}-300 dark:to-${accent}-500`;
  const accentBorder = `border-${accent}-500 dark:border-${accent}-400`;
  const accentText = `text-${accent}-600 dark:text-${accent}-400`;

  // Icône dynamique pour le projectType dans le header
  const ProjectTypeIcon =
    project.projectType === "Collaboratif"
      ? Users
      : project.projectType === "Expérimental"
      ? Zap
      : Code; // Default to Code for other types

  const isCollaborative =
    project.projectType === "Collaboratif" &&
    project.collaborators &&
    project.collaborators.length > 0;

  // Classes pour masquer la scrollbar
  const hideScrollbarClass =
    "scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

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
          bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col
          border border-gray-200 dark:border-gray-800
          overflow-hidden
        `}
      >
        {/* EN-TÊTE FIXE (avec Titre et Méta) */}
        <div
          className={`
            relative shrink-0 p-4 md:p-6 flex items-center justify-between
            lg:border-b-4 ${accentBorder}
            bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
            shadow-lg z-10 
        `}
        >
          {/* TITRE & MÉTA-INFO du PROJET */}
          <div className="flex flex-col">
            <h2
              className={`
                text-xl sm:text-3xl font-extrabold leading-tight mb-1
                text-transparent bg-clip-text bg-gradient-to-r ${headerGradientClass}
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

          {/* BOUTON FERMER (Icône X) */}
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-all shadow-xl"
            aria-label="Fermer la fenêtre modale"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* CONTENU PRINCIPAL SCROLLABLE (Mobile: 1 colonne, Desktop: 3 colonnes) */}
        <div
          className={`
            flex-grow overflow-y-auto p-4 md:p-6 
            lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12
            ${hideScrollbarClass}
        `}
        >
          {/* SECTION 1: VISUELS & DESCRIPTION (Priorité sur mobile) */}
          <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-7 lg:h-full"> {/* Espacement général réduit */}
            {/* 1. IMAGE PRINCIPALE */}
            <div className="shrink-0 h-40 sm:h-64 lg:h-[45vh]">
              <img
                src={`./images/projet/${project.mainImage.url}.png`}
                alt={project.mainImage.alt}
                className="w-full h-full object-cover rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700"
              />
            </div>

            {/* 2. DESCRIPTION (Espace ajusté et taille de texte) */}
            <div className="shrink-0">
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
              >
                <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6" /> À Propos du Projet
              </h3>
              {/* Suppression du mt-2/mt-4 sur la description pour réduire l'espace */}
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* 3. GALERIE SECONDAIRE / CAPTURES ADDITIONNELLES */}
            {project.images && project.images.length > 0 && (
              <div className="shrink-0 hidden md:block">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
                >
                  Captures Additionnelles
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {project.images.slice(0, 6).map((img, i) => (
                    <img
                      key={i}
                      src={`./images/projet/${img.url}.png`}
                      alt={img.alt}
                      className="w-full h-32 object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 2: INFOS COMPLÉMENTAIRES & ACTION */}
          <div className="lg:col-span-1  lg:mt-0 flex flex-col gap-5 sm:gap-7 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 lg:pl-8 pt-6 lg:pt-0">
            {/* 1. TAGS TECHNIQUES */}
            <div className="shrink-0">
              <h3
                className={`text-xl sm:text-2xl font-bold mb-3 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
              >
                Technologies Clés
              </h3>
              <div className="flex flex-wrap gap-2 mt-3"> {/* Espacement réduit ici */}
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

            {/* 2. COLLABORATEURS (Revert à la liste verticale simple) */}
            {isCollaborative && (
              <div className="shrink-0">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" /> Équipe de Projet
                </h3>
                
                {/* REVERT : Retour à la liste verticale classique */}
                <div className="flex flex-col gap-3 mt-3"> {/* Espacement réduit ici */}
                  {project.collaborators!.map((col, i) => (
                    // La carte CollaboratorItem doit avoir des styles compacts
                    <CollaboratorItem key={i} collaborator={col} />
                  ))}
                </div>
              </div>
            )}

            {/* 3. Boutons d'action (Pour mobile et petite vue - Reprise du footer) */}
            <div className="flex flex-col gap-3 mt-6 lg:hidden">
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${accentText} border-b border-gray-200 dark:border-gray-700 pb-2`}
              >
                Actions
              </h3>
              <div className="flex flex-col gap-3 mt-3"> {/* Espacement réduit ici */}
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
                {project.detailPageLink && (
                  <a
                    href={project.detailPageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-500 transition-all font-semibold text-sm`}
                  >
                    <MoreHorizontal className="w-5 h-5" /> Détails Complémentaires
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* PIED DE PAGE FIXE (Boutons d'action pour Desktop - Z-index pour assurer la visibilité) */}
        <div
          className={`
            hidden lg:flex justify-end items-center gap-4 p-5 
            border-t border-gray-300 dark:border-gray-700 
            bg-white/95 dark:bg-gray-900/95 shadow-2xl shrink-0 z-10 
        `}
        >
          {project.detailPageLink && (
            <a
              href={project.detailPageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-500 transition-all font-semibold"
            >
              <MoreHorizontal className="w-5 h-5" /> Détails Complémentaires
            </a>
          )}

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