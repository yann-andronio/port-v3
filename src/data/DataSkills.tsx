// DataSkills.ts

import { Code, Server, GitBranch, Figma, type LucideIcon } from "lucide-react";

export interface DataSkillsI {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: string;
  iconBg: string;
  textHover: string;
}

export const DataSkills: DataSkillsI[] = [
  {
    icon: Code,
    title: "Frontend & UI/UX",
    items: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
       "React Native", "Electron.js",
      "Design Responsive",
      "Intégration API"
    ],
    color: "cyan",
    iconBg: "bg-cyan-600",
    textHover: "hover:bg-cyan-700",
  },
  {
    icon: Server,
    title: "Backend & Base de Données",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    color: "emerald",
    iconBg: "bg-emerald-600",
    textHover: "hover:bg-emerald-700",
  },
  {
    icon: GitBranch,
    title: "Outils & Workflow",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel / Netlify"],
    color: "indigo",
    iconBg: "bg-indigo-600",
    textHover: "hover:bg-indigo-700",
  },
  {
    icon: Figma,
    title: "Design & Collaboration",
    items: ["Figma", "Photoshop" ,"github projects", "jira" ],
    color: "orange",
    iconBg: "bg-orange-600",
    textHover: "hover:bg-orange-700",
  },
];
