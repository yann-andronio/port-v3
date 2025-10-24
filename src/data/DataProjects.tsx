export type ProjectCategory = "Web" | "Mobile" | "Desktop" | "Jeux Vidéo" | "Outil";
export type ProjectType = "Solo" | "Collaboratif" | "Open Source" | "Expérimental";

export interface ProjectImageI {
  url: string;
  alt: string;
}

export interface CollaboratorI {
  name: string;
  role: string;
  link?: string;
}

export interface BestProjectI {
  id: string;
  text: string;
  description: string;
  category: ProjectCategory;
  projectType: ProjectType;
  mainImage: ProjectImageI;
  images: ProjectImageI[];
  collaborators?: CollaboratorI[];
  liveLink?: string;
  githubLink?: string;
  detailPageLink?: string;
  langage: string[];
  // isFeatured?: boolean; <-- CHAMP RETIRÉ
}

// =========================================================================

export const DataProjects: BestProjectI[] = [
  {
    id: "proj-ecommerce-u",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "1",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "5", alt: "Vue du panier" },
      { url: "2", alt: "Page produit" },
      { url: "3", alt: "Page de checkout" },
      { url: "4", alt: "Interface utilisateur" },
    ],
    collaborators: [ // AJOUT DES COLLABORATEURS
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
     
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
    // isFeatured: true, <-- CHAMP RETIRÉ
    detailPageLink: "/projects/ecommerce-u"
  },
  {
    id: "proj-ecommerce-u",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "1",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "5", alt: "Vue du panier" },
      { url: "2", alt: "Page produit" },
      { url: "3", alt: "Page de checkout" },
      { url: "4", alt: "Interface utilisateur" },
    ],
    collaborators: [ // AJOUT DES COLLABORATEURS
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
    // isFeatured: true, <-- CHAMP RETIRÉ
    detailPageLink: "/projects/ecommerce-u"
  },
  {
    id: "proj-ecommerce-u",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "1",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "5", alt: "Vue du panier" },
      { url: "2", alt: "Page produit" },
      { url: "3", alt: "Page de checkout" },
      { url: "4", alt: "Interface utilisateur" },
    ],
    collaborators: [ // AJOUT DES COLLABORATEURS
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
    // isFeatured: true, <-- CHAMP RETIRÉ
    detailPageLink: "/projects/ecommerce-u"
  },
  {
    id: "proj-ecommerce-u",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "1",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "5", alt: "Vue du panier" },
      { url: "2", alt: "Page produit" },
      { url: "3", alt: "Page de checkout" },
      { url: "4", alt: "Interface utilisateur" },
    ],
    collaborators: [ // AJOUT DES COLLABORATEURS
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
    // isFeatured: true, <-- CHAMP RETIRÉ
    detailPageLink: "/projects/ecommerce-u"
  },
  {
    id: "proj-ecommerce-u",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "1",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "5", alt: "Vue du panier" },
      { url: "2", alt: "Page produit" },
      { url: "3", alt: "Page de checkout" },
      { url: "4", alt: "Interface utilisateur" },
    ],
    collaborators: [ // AJOUT DES COLLABORATEURS
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
      { name: "Alice Dupont", role: "Designer UX/UI", link: "#" },
      { name: "Bob Martin", role: "Dev Backend (Node.js)", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
    // isFeatured: true, <-- CHAMP RETIRÉ
    detailPageLink: "/projects/ecommerce-u"
  },
  {
    id: "proj-portfolio-3d",
    text: "Portfolio 3D WebGL",
    description: "Mon portfolio personnel immersif, utilisant le rendu WebGL pour des transitions fluides et des animations basées sur des physiques réalistes (OGL/Three.js).",
    category: "Web",
    projectType: "Solo",
    mainImage: {
      url: "https://images.unsplash.com/photo-1522202195463-8c5ae23a1b90?auto=format&fit=crop&w=800&q=80",
      alt: "Capture d'écran du portfolio 3D",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1507238691741-ad9016e78077?auto=format&fit=crop&w=400&q=80", alt: "Vue de la navigation 3D" },
    ],
    liveLink: "https://portfolio-3d-live.com",
    githubLink: "https://github.com/monprofil/portfolio-3d",
    langage: ["WebGL", "Three.js", "OGL", "Performance", "Créatif"],
    detailPageLink: "/projects/portfolio-3d"
  },
  // ... autres projets
];