import { Briefcase, Code2, Monitor, Palette } from "lucide-react";
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
    titre: "Développeur Front-End React.js | E-commerce Super U",
    type: "Projet Personnel / Formation",
    duree: "2024 — 2025",
    icon: Code2,
    taches: [
      "Création d’un site e-commerce complet avec filtrage, recherche et panier.",
      "Utilisation de React, Headless UI, Framer Motion et React-use-cart.",
      "Design moderne et responsive basé sur Tailwind CSS.",
      "Optimisation des performances et de l’expérience utilisateur.",
    ],
    langage: ["React.js", "Tailwind CSS", "Framer Motion", "UX/UI", "JavaScript"],
  },
  {
    id: "exp-2",
    titre: "Développeur MERN Stack | Gestion d’hôtel",
    type: "Projet Académique",
    duree: "2023 — 2024",
    icon: Monitor,
    taches: [
      "Application MERN complète avec gestion des réservations et comptes utilisateurs.",
      "Création d’une API sécurisée et intégration front-end.",
      "Affichage météo en temps réel sur les destinations.",
    ],
    langage: ["MongoDB", "Express.js", "React.js", "Node.js", "API REST"],
  },
  {
    id: "exp-3",
    titre: "Responsable Design & Interface | Portfolio Pro",
    type: "Projet Personnel",
    duree: "2024",
    icon: Palette,
    taches: [
      "Création d’un portfolio moderne et immersif.",
      "Sections fluides avec animations Framer Motion.",
      "Optimisation UX/UI et identité visuelle.",
    ],
    langage: ["Figma", "Framer Motion", "UI/UX Design", "Responsive Design"],
  },
  {
    id: "exp-4",
    titre: "Développeur Front-End | Site de commande de repas",
    type: "Projet Personnel",
    duree: "2023",
    icon: Briefcase,
    taches: [
      "Développement d’un site web pour commandes de plats en ligne.",
      "Design attractif avec HTML, CSS et Bootstrap.",
      "Mise en avant des produits et catégories.",
    ],
    langage: ["HTML", "CSS", "Bootstrap", "Responsive Web Design"],
  },
];