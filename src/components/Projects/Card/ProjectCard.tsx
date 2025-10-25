import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Code } from "lucide-react";
import ProjectModal from "../Modal/ProjectModal";
import type { ProjectI } from "../../../data/DataProjects";
import { ProjectCardImage } from "./ProjectCardImage";
import { ProjectCardContent } from "./ProjectCardContent";

export const colorMap = {
    Web: { primary: "sky", secondary: "blue" },
    Mobile: { primary: "emerald", secondary: "teal" },
    Desktop: { primary: "indigo", secondary: "purple" },
    "Jeux Vidéo": { primary: "rose", secondary: "pink" },
    Outil: { primary: "amber", secondary: "yellow" },
    gray: { primary: "gray", secondary: "slate" },
};

export default function ProjectCard({ project }: { project: ProjectI }) {
  const [isOpen, setIsOpen] = useState(false);

  const ProjectIcon = project.projectType === "Collaboratif" ? Users : Code;

  const colors = colorMap[project.category] || colorMap.gray;
  const accentTextColor = `text-${colors.primary}-600 dark:text-${colors.primary}-400`;
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
          bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700/70
        `}
      >
        <ProjectCardImage project={project} colors={colors} ProjectIcon={ProjectIcon} />

        <ProjectCardContent project={project} accentTextColor={accentTextColor} />
        
      </motion.div>

      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}