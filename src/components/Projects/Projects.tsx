import React, { useState, useMemo } from 'react';
import ProjectCard from './Card/ProjectCard';
import { DataProjects } from '../../data/DataProjects';
import type { ProjectCategory } from '../../data/DataProjects'; 
import { useTheme } from "../../context/ThemeContext";

const categoryFilters: (ProjectCategory | 'Tous')[] = ["Tous", "Web", "Mobile", "Desktop", "Jeux Vidéo", "Outil"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'Tous'>("Tous");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return DataProjects;
    return DataProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 md:py-36 text-gray-900 dark:text-white">
      <div className="lg:max-w-7xl max-w-[100%] mx-auto lg:px-4">
        
        {/* TITRE (inchangé) */}
        <div className="text-center mb-16 sm:mb-20">
            <p className={`text-xl font-medium tracking-wide ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Jetez un œil aux preuves concrètes de mon savoir-faire.
            </p>
            <h2 
                className={`text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mt-2 ${
                    isDark ? "text-gray-100" : "text-gray-900"
                }`}
            >
                Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                    Réalisations
                </span> Mémorables
            </h2>
        </div>

        {/* ========================================================== */}
        {/* FILTRES STICKY (Horizontal Scroll sur Mobile) */}
        {/* ========================================================== */}
        <div className={`
            sticky z-40 top-[4.5rem] 
            rounded-xl
            // Padding et Marges optimisés pour la hauteur
            py-3 mb-10 md:py-4 md:mb-16 
            
            // Fond et Ombre
            bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
            shadow-md dark:shadow-xl dark:shadow-gray-900/50 
        `}>
            {/* Conteneur des Boutons: Horizontal Scroll Menu sur mobile */}
            <div className={`
                flex justify-start md:justify-center // Aligner à gauche sur mobile, centrer sur desktop
                gap-3 md:gap-4 // Espacement réduit sur mobile
                overflow-x-auto // PERMET LE DÉFILEMENT HORIZONTAL
                whitespace-nowrap // Empêche les retours à la ligne
                pb-1.5 px-4 // Ajout d'un padding horizontal pour l'esthétique du défilement
                // Classes optionnelles pour masquer la barre de scroll :
                // [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            `}>
                {categoryFilters.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        // Ajout de flex-shrink-0 pour s'assurer qu'ils ne rétrécissent pas
                        className={`
                            flex-shrink-0 // Empêche les boutons de se compresser
                            px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base 
                            rounded-full font-bold transition-all duration-300
                            border-2
                            
                            ${activeCategory === category
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-500/50 transform -translate-y-[1px]'
                            : 'bg-transparent border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:border-indigo-400 dark:hover:border-indigo-500'
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
        {/* ========================================================== */}
        {/* FIN DU FILTRE STICKY */}
        {/* ========================================================== */}


        {/* GRILLE DE PROJETS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-12 p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl max-w-xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Oups ! Aucun projet classé dans cette catégorie ({activeCategory}).
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
                Revenez à **"Tous"** pour voir l'ensemble des réalisations ou découvrez mes autres expertises.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}