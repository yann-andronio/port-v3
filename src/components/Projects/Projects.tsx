import { useState, useMemo, useRef, useEffect } from "react";
import ProjectCard from "./Card/ProjectCard";
import { DataProjects } from "../../data/DataProjects";
import type { ProjectCategory } from "../../data/DataProjects";
import { ProjectCategoryFilters } from "./ProjectCategoryFilters";
import { ProjectEmptyState } from "./ProjectEmptyState";
import ProjectTitle from "./ProjectTitle";
import { ChevronDown } from "lucide-react";

const categoryFilters: (ProjectCategory | "Tous")[] = [
  "Tous",
  "Web",
  "Mobile",
  "Desktop",
  "Jeux Vidéo",
  "Outil",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "Tous"
  >("Tous");

  const [visibleCount, setVisibleCount] = useState(6);

  const projectsListRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return DataProjects;
    return DataProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-5  text-gray-900 dark:text-white">
      <div
        ref={projectsListRef}
        className="lg:max-w-7xl max-w-full mx-auto lg:px-4"
      >
        <ProjectTitle />

        <div
          className={`
            sticky z-40 top-18 
            rounded-b-lg py-3 mb-10 md:py-4 md:mb-16 
            bg-white/90 dark:bg-gray-900/90 backdrop-blur-md 
            shadow-md dark:shadow-xl dark:shadow-gray-900/50 
        `}
        >
          <ProjectCategoryFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categoryFilters={categoryFilters}
            projectsContainerRef={projectsListRef}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <ProjectEmptyState activeCategory={activeCategory} />
        )}

        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 6, filteredProjects.length),
                )
              }
              className=" inline-flex items-center gap-2 px-6 py-3 rounded-xl  bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700  text-gray-700 dark:text-gray-200 font-medium text-sm  hover:border-sky-400  hover:text-sky-600  dark:hover:border-sky-500  dark:hover:text-sky-400 shadow-sm hover:shadow-md transition-colors duration-200 cursor-pointer "
            >
              Voir plus de projets
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
