import { GraduationCap, BookOpen, Globe2 } from "lucide-react";
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
    annee: "2022",
    titre: "Baccalauréat Série D",
    etablissement: "Lycée Saint Joseph de Cluny, Antananarivo",
    description: "Obtention du baccalauréat scientifique.",
    icon: GraduationCap,
  },
  {
    annee: "2023",
    titre: "DELF & DALF B1 - B2",
    etablissement: "Alliance Française de Madagascar",
    description:
      "Certifications officielles en langue française, niveaux B1 et B2.",
    icon: Globe2,
  },
  {
    annee: "2023 - présent",
    titre: "Licence en Informatique (L3 en cours)",
    etablissement: "Université d’Antananarivo",
    description:
      "Préparation de la licence en informatique, spécialisation en développement web et technologies modernes.",
    icon: BookOpen,
  },
];
