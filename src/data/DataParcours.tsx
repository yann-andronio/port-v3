import { GraduationCap, BookOpen, Award, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DataParcoursI {
  annee: string;
  titre: string;
  etablissement: string;
  description: string;
  icon: LucideIcon; 
}

export const DataParcours: DataParcoursI[] = [
  {
    annee: "2019",
    titre: "Baccalauréat Série D",
    etablissement: "Lycée Saint joseph de cluny, Antananarivo",
    description: "Obtention du baccalauréat scientifique avec mention.",
    icon: GraduationCap,
  },
  {
    annee: "2021",
    titre: "DELF & DALF B1 - B2",
    etablissement: "Alliance Française de Madagascar",
    description:
      "Certification officielle en langue française, niveaux B1 et B2.",
    icon: Globe2,
  },
  {
    annee: "2023",
    titre: "Licence en Informatique",
    etablissement: "Université d’Antananarivo",
    description:
      "Spécialisation en développement web, design d’interfaces et technologies modernes.",
    icon: BookOpen,
  },
  {
    annee: "2024",
    titre: "Formation MERN Stack",
    etablissement: "IT Training Center Madagascar",
    description:
      "Formation complète et certifiante sur le développement web full-stack (MongoDB, Express, React, Node.js).",
    icon: Award,
  },
];
