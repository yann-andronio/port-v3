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
    titre: "parcoursAcademicInfoCard.bac.titre",
    etablissement: "parcoursAcademicInfoCard.bac.etablissement",
    description: "parcoursAcademicInfoCard.bac.description",
    icon: GraduationCap,
  },
  {
    annee: "2023",
    titre: "parcoursAcademicInfoCard.delf.titre",
    etablissement: "parcoursAcademicInfoCard.delf.etablissement",
    description: "parcoursAcademicInfoCard.delf.description",
    icon: Globe2,
  },
  {
    annee: "2023 - présent",
    titre: "parcoursAcademicInfoCard.licence.titre",
    etablissement: "parcoursAcademicInfoCard.licence.etablissement",
    description: "parcoursAcademicInfoCard.licence.description",
    icon: BookOpen,
  },
];
