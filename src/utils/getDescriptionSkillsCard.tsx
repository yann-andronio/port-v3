  export const getDescription = (title: string) => {
    switch (title) {
      case "Frontend & UI/UX":
        return "Je crée des interfaces web et mobiles fluides, intuitives et accessibles, en mettant l'accent sur l'expérience utilisateur et l'esthétique.";
      case "Backend & Base de Données":
        return "Je développe l'architecture côté serveur, les APIs RESTful et gère les bases de données (NoSQL/SQL) pour assurer la performance.";
      case "Outils & Workflow":
        return "Maîtrise des outils de collaboration, de la gestion de version (Git) et des processus de déploiement continu pour un workflow professionnel.";
      case "Design & Collaboration":
        return "Je conçois des prototypes visuels et collabore étroitement avec les équipes produit/design pour transformer les idées en réalité.";
      default:
        return "Détails techniques de l'expertise.";
    }
  };
