import { Code, Server, GitBranch, type LucideIcon } from "lucide-react";
export interface DataSkillsI {
  icon: LucideIcon;      
  title: string;           
  items: string[];         
  color: string;          
  iconBg: string;           
  textHover: string;        
}

export const DataSkills:DataSkillsI[] = [
  {
    icon: Code,
    title: "Frontend & UI/UX",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    color: "cyan",
    iconBg: "bg-cyan-600",
    textHover: "hover:bg-cyan-700",
  },
  {
    icon: Server,
    title: "Backend & DB",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "API REST"],
    color: "emerald",
    iconBg: "bg-emerald-600",
    textHover: "hover:bg-emerald-700",
  },
  {
    icon: GitBranch,
    title: "Outils & Workflow",
    items: ["Git", "Docker", "VS Code", "CI/CD", "Jest/Vitest"],
    color: "indigo",
    iconBg: "bg-indigo-600",
    textHover: "hover:bg-indigo-700",
  },
];
