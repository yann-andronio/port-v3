export type ProjectCategory = "Web" | "Mobile" | "Desktop" | "Jeux Vidéo" | "Outil";
export type ProjectType = "Solo" | "Collaboratif" | "Open Source" ;

export interface ProjectImageI {
  url: string;
  alt: string;
}

export interface CollaboratorI {
  name: string;
  role: string;
  link?: string;
}

export interface ProjectI {
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
  // isFeatured?: boolean;
}


export const DataProjects: ProjectI[] = [
  {
    id: "proj-ecommerce-u",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Mobile",
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
      { url: "5", alt: "Vue du panier" },
      { url: "2", alt: "Page produit" },
      { url: "3", alt: "Page de checkout" },
      { url: "4", alt: "Interface utilisateur" },
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
     
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
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
    collaborators: [ 
      { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
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
    collaborators: [ 
      { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
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
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce",
    langage: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "UX/UI"],
    detailPageLink: "/projects/ecommerce-u"
  },
 
];