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
    // ID: "1" (Super U E-commerce - Mobile)
    id: "1", 
    text: "Super U E-commerce (Mobile)",
    description: "Conception et développement d'une **application e-commerce mobile** réactive et conviviale, offrant une expérience d'achat complète avec navigation par catégories, gestion de panier interactive et processus de paiement optimisé.",
    category: "Mobile",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751037/2_ugdkul.png",
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751033/1_y99zma.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751019/3_yyglqp.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751022/4_bis3gd.png", alt: "Page de checkout" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751018/5_mmnf5m.png", alt: "Interface utilisateur" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751020/6_neqyiq.png", alt: "Vue du panier" },
    
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
     
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce-mobile",
    langage: ["React Native", "TypeScript", "Redux", "Node.js", "Express.js"],
    detailPageLink: "/projects/superu-mobile"
  },
  {
    // ID: "2" (HKB tech - Blog)
    id: "2",
    text: "HKB Tech (Plateforme Blog)",
    description: "Plateforme de contenu et de blog axée sur la technologie. Interface utilisateur moderne et épurée, avec des fonctionnalités d'édition riche et une organisation des articles par catégories pour une navigation intuitive.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751015/1_fvo3sj.png",
      alt: "HKB Tech Blog",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751013/2_xuk6ns.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751012/5_ouyodl.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/3_jbk06f.png", alt: "Page de checkout" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751016/4_hmd36m.png", alt: "Interface utilisateur" },
    ],
    collaborators: [ 
      { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    
    ],
    liveLink: "https://hkbtech.com",
    githubLink: "https://github.com/monprofil/hkb-tech-blog",
    langage: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi (CMS)", "MongoDB"],
    detailPageLink: "/projects/hkb-tech"
  },
  {
    // ID: "3" (Hiaigny - Landing Page/Services)
    id: "3",
    text: "Hiaigny (Site de Services)",
    description: "Site vitrine professionnel mettant en avant des services avec des sections dédiées (À Propos, Services, Témoignages). Design soigné avec des transitions fluides et un focus sur la conversion et l'accessibilité mobile.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751011/1_ktr0p1.png",
      alt: "Hiaigny site de services",
    },
    images: [
       { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751009/3_ccyxsb.png", alt: "Page produit" },
        { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751010/2_mfc6pn.png", alt: "Interface utilisateur" },
            { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/1_ktr0p1.png", alt: "Interface utilisateur" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/4_v2w8xf.png", alt: "Vue du panier" },
     
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/6_nhfqfb.png", alt: "Page de checkout" },
 
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751009/5_zjlirp.png", alt: "Interface utilisateur" },
    ],
    collaborators: [ 
      { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://hiaigny.com",
    githubLink: "https://github.com/monprofil/hiaigny-service-site",
    langage: ["Astro", "Tailwind CSS", "JavaScript", "GSAP (Animations)"],
    detailPageLink: "/projects/hiaigny-site"
  },
 {
    // ID: "4" (Portfolio 2 - Site personnel)
    id: "4",
    text: "Portfolio Personnel V2",
    description: "Seconde version d'un portfolio mettant l'accent sur la clarté et la présentation des projets. Utilisation de cartes et de galeries pour un affichage dynamique et responsive.",
    category: "Web",
    projectType: "Solo",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751038/1_yfkp36.png",
      alt: "Portfolio 2 page d'accueil",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751038/4_xaorsm.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751033/2_mmk7bl.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751036/5_gupqdc.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751042/6_mh1l5y.png", alt: "Page produit" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://portfolio-v2.com",
    githubLink: "https://github.com/monprofil/portfolio-v2",
    langage: ["React.js", "TypeScript", "Styled Components", "Framer Motion"],
    detailPageLink: "/projects/portfolio-v2"
  },


  {
    // ID: "5" (Super U E-commerce - Web)
    id: "5",
    text: "Super U E-commerce (Web)",
    description: "Développement d'une plateforme de vente en ligne complète. Inclut des fonctionnalités de filtrage, un moteur de recherche performant et une expérience utilisateur sans rechargement de page pour le panier.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751008/1_c5ech9.png", 
      alt: "Super U Page d'accueil E-commerce",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751008/2_fmyawe.png", alt: "Vue du panier" }, 
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751007/4_t8ntkf.png", alt: "Page produit" }, 
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751009/Capture_d_%C3%A9cran_2025-10-26_184944_den3n5.png", alt: "Page de checkout" }, 
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751007/3_rlblie.png", alt: "Interface utilisateur" }, 
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://superu-ecommerce.com",
    githubLink: "https://github.com/monprofil/super-u-ecommerce-web",
    langage: ["React.js", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
    detailPageLink: "/projects/superu-web"
  },

  {
    // ID: "6" (Portfolio 1 - Site personnel)
    id: "6",
    text: "Portfolio Personnel V1",
    description: "Première itération d'un portfolio personnel, axée sur un design minimaliste et une présentation claire des compétences et des expériences passées. Site statique avec intégration de médias.",
    category: "Web",
    projectType: "Solo",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751038/1_aoeu3k.png",
      alt: "Portfolio 1 page d'accueil",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751034/3_wfeyns.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751026/2_ztmtvo.png", alt: "Page produit" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://portfolio-v1.com",
    githubLink: "https://github.com/monprofil/portfolio-v1",
    langage: ["HTML", "CSS/SASS", "JavaScript", "JQuery"],
    detailPageLink: "/projects/portfolio-v1"
  },
  {
    // ID: "7" (QuizLang - Application Quiz)
    id: "7",
    text: "QuizLang (App de Quiz Langues)",
    description: "Application interactive de quiz conçue pour l'apprentissage et l'évaluation des compétences linguistiques. Comprend un système de scoring en temps réel et des différents niveaux de difficulté.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751047/1_dhtzp7.png",
      alt: "QuizLang Page d'accueil",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751042/2_s68bvz.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751039/3_hkkrgn.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751039/4_wii4uv.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751040/5_qyfohs.png", alt: "Page produit" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://quizlang.com",
    githubLink: "https://github.com/monprofil/quizlang-app",
    langage: ["Vue.js", "JavaScript", "SASS", "Firebase (BDD et Auth)"],
    detailPageLink: "/projects/quizlang"
  },
  {
    id: "8",
    text: "Système de Gestion d'École (ERP)",
    description: "Système de planification des ressources d'entreprise (ERP) pour la gestion scolaire. Tableau de bord administrateur permettant le suivi des étudiants, des cours et la planification des examens.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751041/3_zn0jd3.png",
      alt: "Tableau de bord de gestion d'école",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751042/2_fohsim.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751043/4_sw58dd.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751043/1_vmkduv.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751041/5_iqawdc.png", alt: "Page produit" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://gestion-ecole.com",
    githubLink: "https://github.com/monprofil/gestion-ecole-erp",
    langage: ["Angular", "RxJS", "C# (.NET Core)", "SQL Server"],
    detailPageLink: "/projects/gestion-ecole"
  },
  {
    id: "9",
    text: "Super U (Site d'Entreprise)",
    description: "Refonte du site vitrine institutionnel de l'entreprise. Présentation des valeurs, de l'équipe, des actualités et des points de vente via une carte interactive. Design axé sur l'identité de marque.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751048/1_t9qvbq.png",
      alt: "Super U Page d'accueil vitrine",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/5_icwno2.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751046/2_hb2chu.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/6_yocrxq.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751044/3_off8lh.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751046/4_qnv1pq.png", alt: "Page produit" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://superu-corporate.com",
    githubLink: "https://github.com/monprofil/super-u-corporate",
    langage: ["PHP (Laravel)", "Blade Template Engine", "MySQL", "Bootstrap"],
    detailPageLink: "/projects/superu-corporate"
  },
  {
    id: "10",
    text: "Timer Engine (Outil de Productivité)",
    description: "Développement d'un outil de productivité simple basé sur un système de minuterie (pomodoro ou autre). Interface utilisateur claire avec contrôle facile du temps et notifications.",
    category: "Outil",
    projectType: "Solo",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751048/1_haxrwu.png",
      alt: "Timer Engine application de minuterie",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/2_tv4z0e.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/3_b4crca.png", alt: "Page produit" }
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://timer-engine.com",
    githubLink: "https://github.com/monprofil/timer-engine",
    langage: ["Vanilla JavaScript", "HTML5", "CSS3"],
    detailPageLink: "/projects/timer-engine"
  },
  {
    id: "11",
    text: "Trifako (Site de Presse/Actualités)",
    description: "Plateforme d'actualités et de presse avec une mise en page style magazine. Comprend une gestion des rubriques, des articles en vedette et une section de commentaires modérée.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751050/1_ohe2mu.png",
      alt: "Trifako site d'actualités",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751050/2_rxjxgh.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751050/4_avmscw.png", alt: "Page produit" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751048/5_dg0rcc.png", alt: "Page produit" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://trifako.com",
    githubLink: "https://github.com/monprofil/trifako-news-site",
    langage: ["Django (Python)", "PostgreSQL", "JavaScript (Vanilla)"],
    detailPageLink: "/projects/trifako-news"
  },
  {
    id: "12",
    text: "Webster (Landing Page Marketing)",
    description: "Landing page minimaliste et hautement optimisée pour la conversion. Conception en une seule page pour présenter un produit ou un service avec un appel à l'action clair et des visuels impactants.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751052/1_v5jbzp.png",
      alt: "Webster landing page",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751051/2_puikwh.png", alt: "Vue du panier" },
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://webster-landing.com",
    githubLink: "https://github.com/monprofil/webster-landing-page",
    langage: ["Gatsby", "GraphQL", "Tailwind CSS"],
    detailPageLink: "/projects/webster-landing"
  },
  {
    id: "13",
    text: "Vahoaka Miteny (Plateforme Communautaire)",
    description: "Forum de discussion et plateforme communautaire permettant aux utilisateurs de créer des fils de discussion, de commenter et de noter le contenu. Forte insistance sur la modération et la gestion des utilisateurs.",
    category: "Web",
    projectType: "Collaboratif",
    mainImage: {
      url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751060/1_ix47l9.png",
      alt: "Vahoaka Miteny forum",
    },
    images: [
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751060/1_ix47l9.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751056/2_jxjoa4.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751054/3_dkix5l.png", alt: "Vue du panier" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751054/4_syqzpn.png", alt: "Vue du panier" },
   
  
    ],
    collaborators: [ 
       { name: "brandon", role: "Designer UX/UI", link: "#" },
      { name: "julio", role: "Dev Backend (Node.js)", link: "#" },
      { name: "sammy", role: "Designer UX/UI", link: "#" },
    ],
    liveLink: "https://vahoaka-miteny.com",
    githubLink: "https://github.com/monprofil/vahoaka-miteny-forum",
    langage: ["Ruby on Rails", "React.js", "PostgreSQL", "ActionCable (Real-time)"],
    detailPageLink: "/projects/vahoaka-miteny"
  },
 
 
];