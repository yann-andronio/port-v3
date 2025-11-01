import { Code2, Monitor, Smartphone, Database } from "lucide-react";

export interface DataExperienceI {
  id: string;
  titre: string;
  type: string;
  duree: string;
  icon: React.ComponentType<any>;
  taches: string[];
  langage: string[];
}

export const DataExperience: DataExperienceI[] = [
  {
    id: "exp-1",
    titre: "experience.exp1.title",
    type: "experience.exp1.type",
    duree: "experience.exp1.duration",
    icon: Monitor,
    taches: [
      "experience.exp1.task1",
      "experience.exp1.task2",
      "experience.exp1.task3",
      "experience.exp1.task4",
    ],
    langage: ["Electron.js", "TypeScript", "Tailwind CSS", "Front-End", "UI/UX Design"],
  },
  {
    id: "exp-2",
    titre: "experience.exp2.title",
    type: "experience.exp2.type",
    duree: "experience.exp2.duration",
    icon: Code2,
    taches: [
      "experience.exp2.task1",
      "experience.exp2.task2",
      "experience.exp2.task3",
    ],
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Firebase", "Netlify"],
  },
  {
    id: "exp-3",
    titre: "experience.exp3.title",
    type: "experience.exp3.type",
    duree: "experience.exp3.duration",
    icon: Smartphone,
    taches: [
      "experience.exp3.task1",
      "experience.exp3.task2",
      "experience.exp3.task3",
    ],
    langage: ["React Native", "TypeScript", "API REST", "UX/UI Design", "Performance Mobile"],
  },
  {
    id: "exp-4",
    titre: "experience.exp4.title",
    type: "experience.exp4.type",
    duree: "experience.exp4.duration",
    icon: Database,
    taches: [
      "experience.exp4.task1",
      "experience.exp4.task2",
      "experience.exp4.task3",
      "experience.exp4.task4",
    ],
    langage: [
      "MongoDB",
      "Express.js",
      "Electron.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "API REST",
    ],
  },
];
