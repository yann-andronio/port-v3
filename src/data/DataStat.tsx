import type { IconType } from 'react-icons'; 
import { FaCodeBranch, FaStar, FaTrophy } from "react-icons/fa";

export type StatItemType = {
  icon: IconType;
  main: number;
  unit: string;
};

export const DataStat: StatItemType[] = [
  {
    icon: FaTrophy,
    main: 2,
    unit: "Mois d'Expérience",
  },
  {
    icon: FaCodeBranch,
    main: 17,
    unit: "Projets Personnels",
  },
  {
    icon: FaStar,
    main: 2,
    unit: "Projets Clients",
  },
];
