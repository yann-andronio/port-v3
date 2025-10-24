import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Zap, Code, Monitor, ExternalLink, ArrowRight, BookOpen } from "lucide-react";
import ProjectModal from "../Modal/ProjectModal";
import type { BestProjectI } from "../../../data/DataProjects";

export default function ProjectCard({ project }: { project: BestProjectI }) {
  const [isOpen, setIsOpen] = useState(false);

  const ProjectIcon =
    project.projectType === "Collaboratif"
      ? Users
      : project.projectType === "Expérimental"
      ? Zap
      : Code;

  // Couleurs pour les accents
  const colorMap = {
    Web: { primary: 'sky', secondary: 'blue' },
    Mobile: { primary: 'emerald', secondary: 'teal' },
    Desktop: { primary: 'indigo', secondary: 'purple' },
    'Jeux Vidéo': { primary: 'rose', secondary: 'pink' },
    Outil: { primary: 'amber', secondary: 'yellow' },
    gray: { primary: 'gray', secondary: 'slate' },
  };

  const colors = colorMap[project.category] || colorMap.gray;
  
  // Classe de dégradé ajustée pour le badge (semi-transparent)
  const categoryGradient = `from-${colors.primary}-600/90 to-${colors.secondary}-700/90 dark:from-${colors.primary}-500/90 dark:to-${colors.secondary}-600/90`;

  // Utilisation d'une couleur d'accent pour le texte
  const accentTextColor = `text-${colors.primary}-600 dark:text-${colors.primary}-400`;
  
  // Utilisation d'une ombre thématique pour le hover
  const hoverShadow = `hover:shadow-${colors.primary}-500/40 dark:hover:shadow-${colors.primary}-800/60`;

  return (
    <>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }} 
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`
          group relative flex flex-col overflow-hidden rounded-3xl cursor-pointer 
          shadow-lg ${hoverShadow} transition-all duration-500
          
          // Style de fond "Nébuleux" / Épuré
          bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/70
        `}
      >
        {/* IMAGE */}
        <div className="relative h-56 overflow-hidden">
          <img
                src={`./images/projet/${project.mainImage.url}.png`}
            alt={project.mainImage.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.85]"
          />

          {/* Overlay / CTA DÉCOUVRIR */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
            
            <div className="p-4 rounded-full bg-white/95 text-gray-900 shadow-xl transition-transform hover:scale-110">
              <BookOpen className="w-6 h-6" /> 
            </div>
            
            <p className="mt-3 text-lg font-bold text-white tracking-widest border-b-2 border-white/50">
              DÉCOUVRIR
            </p>
          </div>

          {/* Type du projet (Badge VISIBLE EN TOUTES CIRCONSTANCES) */}
          <div className={`
            absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase text-white shadow-lg
            
            // Fond semi-transparent avec flou garantissant le détachement de l'image
            bg-white/10 ${categoryGradient} backdrop-blur-lg 
            
            // Bordure subtile pour un effet de profondeur
            border border-white/50 dark:border-white/20 
          `}>
            <ProjectIcon className="w-3.5 h-3.5 inline-block mr-1" />
            {project.projectType}
          </div>
        </div>

        {/* CONTENU TEXTUEL */}
        <div className="p-6 flex flex-col gap-2">
            
          {/* Catégorie (Accent) */}
          <div className={`flex items-center gap-1 text-sm font-medium ${accentTextColor}`}>
            <Monitor className="w-4 h-4" /> {project.category}
          </div>
            
          {/* Titre (Lisibilité optimale) */}
          <h3 className={`text-xl font-extrabold text-gray-900 dark:text-gray-100 truncate`}>
            {project.text}
          </h3>

          {/* Description (Lisibilité optimale) */}
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1 min-h-[40px]">
            {project.description}
          </p>

          {/* Langages (Badges épurés) */}
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

          {/* Boutons liens (Lisibilité et UX) */}
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
      </motion.div>

      {isOpen && <ProjectModal project={project} onClose={() => setIsOpen(false)} />}
    </>
  );
}