import type { ProjectCategory } from "../../data/DataProjects";
interface ProjectCategoryFiltersProps {
  activeCategory: ProjectCategory | "Tous";
  setActiveCategory: (category: ProjectCategory | "Tous") => void;
  categoryFilters: (ProjectCategory | "Tous")[];
}

export const ProjectCategoryFilters = ({
  activeCategory,
  setActiveCategory,
  categoryFilters,
}: ProjectCategoryFiltersProps) => {
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
          onClick={() => setActiveCategory(category)}
          className={`
            flex-shrink-0
            px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base
            rounded-full font-bold transition-all duration-300
            border-2
            
            ${
              activeCategory === category
                ? "bg-indigo-600 border-indigo-600 text-white shadow-xl  transform -translate-y-[1px]"
                : "bg-transparent border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:border-indigo-400 dark:hover:border-indigo-500"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
