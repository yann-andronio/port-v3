import { useTranslation } from "react-i18next";
import type { ProjectCategory } from "../../data/DataProjects";
import type { RefObject } from "react"; 

interface ProjectCategoryFiltersProps {
  activeCategory: ProjectCategory | "Tous";
  setActiveCategory: (category: ProjectCategory | "Tous") => void;
  categoryFilters: (ProjectCategory | "Tous")[];
  //  Référence au conteneur des projets à remonter
  projectsContainerRef: RefObject<HTMLDivElement | null>; 
}

export const ProjectCategoryFilters = ({
  activeCategory,
  setActiveCategory,
  categoryFilters,
  projectsContainerRef, 
}: ProjectCategoryFiltersProps) => {

    const { t } = useTranslation();

  const handleFilterClick = (category: ProjectCategory | "Tous") => {
    setActiveCategory(category); 

    //  Faire défiler le conteneur des projets vers le haut
    if (projectsContainerRef.current) {
        projectsContainerRef.current.scrollIntoView({ 
            behavior: "smooth",
            block: "start"      
        });
    }
  };

  return (
    <div
      className={`
        flex justify-start md:justify-center
        gap-3 md:gap-4
        overflow-x-auto
        whitespace-nowrap
        pb-1.5 px-4
        // Classes pour masquer la barre de scroll :
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
      `}
    >
      {categoryFilters.map((category) => (
        <button
          key={category}
          onClick={() => handleFilterClick(category)} 
          className={`
            shrink-0
            px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base
            rounded-full font-bold transition-all duration-300
            border-2
            
            ${
              activeCategory === category
                ? "bg-indigo-600 border-indigo-600 text-white shadow-xl  transform -translate-y-px"
                : "bg-transparent border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:border-indigo-400 dark:hover:border-indigo-500"
            }
          `}
        >
          {t(category)}
        </button>
      ))}
    </div>
  );
};