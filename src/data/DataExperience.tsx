import {  Code2, Monitor, Smartphone, Database } from "lucide-react";

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
    titre: "Développeur Front-End & Intégrateur | La Rosette, Mananara",
    type: "Projet Professionnel",
    duree: "2023 — 2024",
    icon: Monitor,
    taches: [
      "Développement du front-end et intégration pour la gestion complète d’un établissement scolaire.",
      "Modules avancés : gestion des élèves, écolage, notes, factures (conversion PDF et impression).",
      "Gestion des employés, dashboard dynamique avec charts de bénéfice et perte mensuels.",
      "Utilisation de filtres avancés et d’un design responsive pour toutes les interfaces.",
    ],
    langage: ["Electron.js", "TypeScript", "Tailwind CSS", "Front-End", "UI/UX Design"],
  },
  {
    id: "exp-2",
    titre: "Développeur Front-End | Magic Lavage, Mananara",
    type: "Projet Professionnel",
    duree: "2023",
    icon: Code2,
    taches: [
      "Création d’une application web pour la gestion complète d’un centre de lavage et du personnel.",
      "Suivi des commandes, planning, historique des clients et employés.",
      "Déploiement frontend sur Netlify et intégration Firebase pour base de données et authentification.",
    ],
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Firebase", "Netlify"],
  },
  {
    id: "exp-3",
    titre: "Développeur Front-End & Intégrateur | Application mobile Itakalo",
    type: "Projet Personnel / Professionnel",
    duree: "2024",
    icon: Smartphone,
    taches: [
      "Développement front-end et intégration d’API pour messagerie, notifications et transactions.",
      "Optimisation UX/UI et performance sur différentes résolutions mobiles.",
      "Application mobile de vente, échange et donation d’objets.",
    ],
    langage: ["React Native", "TypeScript", "API REST", "UX/UI Design", "Performance Mobile"],
  },
  {
    id: "exp-4",
    titre: "Développeur Full-Stack MERN & Electron | Trifako (Gestion du triage des déchets)",
    type: "Projet Professionnel",
    duree: "2024",
    icon: Database,
    taches: [
      "Développement full-stack : backend en Express.js et MongoDB, front-end en Electron.js, TypeScript, Tailwind CSS et Framer Motion.",
      "Création de dashboard dynamique avec charts et filtres avancés.",
      "Manipulation de la carte de Madagascar pour suivi des zones de tri (bibliothèque map type OpenMap/Leaflet).",
      "Fonctionnalités avancées de recherche et intégration d’API météo.",
    ],
    langage: ["MongoDB", "Express.js", "Electron.js", "TypeScript", "Tailwind CSS", "Framer Motion", "API REST"],
  },

];
