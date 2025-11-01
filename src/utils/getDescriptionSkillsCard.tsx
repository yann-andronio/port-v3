export const getDescription = (title: string) => {
  switch (title) {
    case "Frontend & UI/UX":
      return "skills_desc_frontend";
    case "Backend & Base de Données":
      return "skills_desc_backend";
    case "Outils & Workflow":
      return "skills_desc_tools";
    case "Design & Collaboration":
      return "skills_desc_design";
    default:
      return "skills_desc_default";
  }
};
