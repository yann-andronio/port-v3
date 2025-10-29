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
    id: "4",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Mobile",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751037/2_ugdkul.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751033/1_y99zma.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751019/3_yyglqp.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751022/4_bis3gd.png", alt: "Page de checkout" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751018/5_mmnf5m.png", alt: "Interface utilisateur" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751020/6_neqyiq.png", alt: "Vue du panier" },
    
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
    id: "3",
    text: "HKB tech",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751015/1_fvo3sj.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751013/2_xuk6ns.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751012/5_ouyodl.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751011/3_jbk06f.png", alt: "Page de checkout" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751016/4_hmd36m.png", alt: "Interface utilisateur" },
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
    id: "2",
    text: "Hiaigny",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751011/1_ktr0p1.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
       { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751009/3_ccyxsb.png", alt: "Page produit" },
        { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751010/2_mfc6pn.png", alt: "Interface utilisateur" },
            { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751011/1_ktr0p1.png", alt: "Interface utilisateur" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751011/4_v2w8xf.png", alt: "Vue du panier" },
     
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751011/6_nhfqfb.png", alt: "Page de checkout" },
 
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751009/5_zjlirp.png", alt: "Interface utilisateur" },
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
    id: "6",
    text: "portlfolio 2",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751038/1_yfkp36.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751038/4_xaorsm.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751033/2_mmk7bl.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751036/5_gupqdc.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751042/6_mh1l5y.png", alt: "Page produit" },
  
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
    id: "1",
    text: "Super U E-commerce (Web)",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751008/1_c5ech9.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751008/2_fmyawe.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751007/4_t8ntkf.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751009/Capture_d_%C3%A9cran_2025-10-26_184944_den3n5.png", alt: "Page de checkout" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751007/3_rlblie.png", alt: "Interface utilisateur" },
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
    id: "5",
    text: "portlfolio 1",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751038/1_aoeu3k.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751034/3_wfeyns.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751026/2_ztmtvo.png", alt: "Page produit" },
  
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
    id: "7",
    text: "QuizLang",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751047/1_dhtzp7.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751042/2_s68bvz.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751039/3_hkkrgn.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751039/4_wii4uv.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751040/5_qyfohs.png", alt: "Page produit" },
  
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
    id: "8",
    text: "gestion d' école",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751041/3_zn0jd3.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751042/2_fohsim.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751043/4_sw58dd.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751043/1_vmkduv.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751041/5_iqawdc.png", alt: "Page produit" },
  
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
    id: "9",
    text: "Super U",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751048/1_t9qvbq.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751047/5_icwno2.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751046/2_hb2chu.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751047/6_yocrxq.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751044/3_off8lh.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751046/4_qnv1pq.png", alt: "Page produit" },
  
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
    id: "10",
    text: "Timer engine",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751048/1_haxrwu.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751047/2_tv4z0e.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751047/3_b4crca.png", alt: "Page produit" }
  
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
    id: "11",
    text: "Trifako",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751050/1_ohe2mu.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751050/2_rxjxgh.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751050/4_avmscw.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751048/5_dg0rcc.png", alt: "Page produit" },
  
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
    id: "12",
    text: "Webster",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751052/1_v5jbzp.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751051/2_puikwh.png", alt: "Vue du panier" },
  
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
    id: "13",
    text: "vahoaka miteny",
    description: "Plateforme de vente en ligne moderne et fluide, optimisée pour la conversion, avec filtrage avancé, recherche instantanée et un panier interactif sans rechargement.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/v1761751060/1_ix47l9.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751060/1_ix47l9.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751056/2_jxjoa4.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751054/3_dkix5l.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/v1761751054/4_syqzpn.png", alt: "Vue du panier" },
   
  
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