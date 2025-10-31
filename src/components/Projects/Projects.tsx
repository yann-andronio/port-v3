import { useState, useMemo, useRef } from "react";
import ProjectCard from "./Card/ProjectCard";
import { DataProjects } from "../../data/DataProjects";
import type { ProjectCategory } from "../../data/DataProjects";
import { ProjectCategoryFilters } from "./ProjectCategoryFilters";
import { ProjectEmptyState } from "./ProjectEmptyState";
import ProjectTitle from "./ProjectTitle";

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

  const projectsListRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return DataProjects;
    return DataProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="py-5  text-gray-900 dark:text-white"
    >
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
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <ProjectEmptyState activeCategory={activeCategory} />
        )}
      </div>
    </section>
  );
}
