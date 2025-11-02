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
  langage: string[];
  // isFeatured?: boolean;
}


export const DataProjects: ProjectI[] = [
 {
  id: "1",
  text: "Magic Auto",
description: "Conception et développement d'une **application de gestion de lavage et de parking** permettant la réservation de places selon une **date de début et une date de fin**, la réservation en **temps réel** selon l'heure d'entrée et de sortie, ainsi qu'une gestion complète du **lavage automobile**.",
  category: "Web",
  projectType: "Collaboratif",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751037/2_ugdkul.png",
    alt: "Page d'accueil de Magic Auto"
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751033/1_y99zma.png", alt: "Page de connexion" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751019/3_yyglqp.png", alt: "Réservation multi-étapes avec calendrier" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751022/4_bis3gd.png", alt: "Section de vérification des informations" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751018/5_mmnf5m.png", alt: "Interface / dashboard admin" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751020/6_neqyiq.png", alt: "Gestion des parkings en temps réel" }
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend et intégrateur", link: "https://github.com/yann-andronio" },
    { name: "Martino Dora", role: "Développeur Backend (CodeIgniter)", link: "https://github.com/martinorakotomanga" },
    { name: "Sammy", role: "Designer UX/UI", link: "#" }
  ],
/*   liveLink: "https://superu-ecommerce.com",*/ 
 githubLink: "https://github.com/yann-andronio/Magic-Auto-Admin",
  langage: ["React.js", "TypeScript", "Tailwind CSS", "CodeIgniter", "MySQL (Laragon)", "API REST"],
}
,
{
  id: "2",
  text: "HKB Tech (Portfolio d'une entreprise)",
  description: "Développement d'un **portfolio interactif pour une entreprise** mettant en avant ses services, produits et réalisations. Le site inclut une interface utilisateur fluide et des animations modernes pour offrir une expérience agréable aux visiteurs.",
  category: "Web",
  projectType: "Collaboratif",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751015/1_fvo3sj.png",
    alt: "HKB Tech Page d'accueil"
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751013/2_xuk6ns.png", alt: "Vue de FAQ" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751012/5_ouyodl.png", alt: "section info" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/3_jbk06f.png", alt: "footer" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751016/4_hmd36m.png", alt: "Hero section" }
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend", link: "https://github.com/yann-andronio" },
    { name: "Tahina", role: "Ajout de la traduction", link: "https://github.com/TahinaHKB" }
  ],
  liveLink: "https://hkb-tech.netlify.app/",
githubLink: "https://github.com/yann-andronio/HKB-tech",
  langage: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
}
,
{
  id: "3",
  text: "Hiaigny",
  description: "Conception et développement d’un **site intelligent de gestion médicale** destiné à un docteur. L’application intègre un **système de diagnostic basé sur l’IA**, capable d’analyser les symptômes courants (maux de tête, fatigue, etc.) et de **proposer des traitements adaptés** selon les analyses. Elle comprend également la **gestion des rendez-vous**, une **messagerie patient-docteur** et une **interface moderne, fluide et réactive**.",
  category: "Web",
  projectType: "Solo",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751011/1_ktr0p1.png",
    alt: "Hiaigny – Page d'accueil du site médical intelligent"
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751009/3_ccyxsb.png", alt: "Page de connexion" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751010/2_mfc6pn.png", alt: "Page d'inscription utilisateur" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/1_ktr0p1.png", alt: "Interface d'accueil utilisateur" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/4_v2w8xf.png", alt: "Page de diagnostic IA" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751011/6_nhfqfb.png", alt: "Page de messagerie" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751009/5_zjlirp.png", alt: "Page de réservation de rendez-vous" }
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend et intégrateur", link: "https://github.com/yann-andronio" },
  ],
  liveLink: "https://hiaigny.com",
  githubLink: "https://github.com/monprofil/hiaigny-service-site",
  langage: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
}

,
 {
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
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751038/4_xaorsm.png", alt: "page skills" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751033/2_mmk7bl.png", alt: "Page apropos" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751036/5_gupqdc.png", alt: "Page project" },
      { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751042/6_mh1l5y.png", alt: "Page map" },
  
    ],
    collaborators: [ 
         { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend", link: "https://github.com/yann-andronio" },

    ],
    liveLink: "https://yann-portfolio.netlify.app/",
    githubLink: "https://github.com/monprofil/portfolio-v2",
    langage: ["React.js", "TypeScript", "Styled Components", "Framer Motion" , "Tailwind css"],
  },


  {
  id: "5",
  text: "Food Shop Services",
  description:
    "Mini projet vitrine réalisé en **HTML, CSS, JavaScript et Bootstrap** durant ma deuxième année de licence. Le site simule un service de restauration en ligne avec un **système d’ajout au panier interactif via un modal** permettant de choisir la quantité. Une alerte confirme ensuite la commande réussie, offrant une **expérience utilisateur fluide et intuitive**.",
  category: "Web",
  projectType: "Solo",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751008/1_c5ech9.png",
    alt: "Food Shop Services – Page d'accueil",
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751008/2_fmyawe.png", alt: "Section plats du jour" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751007/4_t8ntkf.png", alt: "Section fast food" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751009/Capture_d_%C3%A9cran_2025-10-26_184944_den3n5.png", alt: "Fenêtre de commande (modal)" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751007/3_rlblie.png", alt: "Page d'accueil du site" },
  ],
  collaborators: [
    {
      name: "Yann Andronio",
      role: "Designer UX/UI, développeur frontend",
      link: "https://github.com/yann-andronio",
    },
  ],
  liveLink: "https://food-shop-service.netlify.app/",
  githubLink: "https://github.com/yann-andronio/food-shop-service",
  langage: ["HTML", "CSS", "JavaScript", "Bootstrap"],
}
,

  {
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
              { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend", link: "https://github.com/yann-andronio" },

    ],
    liveLink: "https://portfolio-v1.com",
    githubLink: "https://github.com/monprofil/portfolio-v1",
    langage: ["HTML", "CSS/SASS", "JavaScript"],
  },
  {
    id: "7",
    text: "QuizLang (App de Quiz Langues)",
    description: "Application interactive de quiz conçue pour l'apprentissage et l'évaluation des compétences linguistiques. Comprend un système de scoring en temps réel et des différents niveaux de difficulté.",
    category: "Web",
    projectType: "Solo",
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
             { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend", link: "https://github.com/yann-andronio" },

    ],
    liveLink: "https://quizlang.com",
    githubLink: "https://github.com/monprofil/quizlang-app",
  langage: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
  },
{
  id: "8",
  text: "Système de Gestion d'École (ERP)",
  description:
    "Conception et développement d’un **système ERP scolaire complet** permettant la gestion centralisée des étudiants, cours, enseignants et examens. L’application inclut un **tableau de bord administrateur interactif**, des fonctionnalités de **suivi académique**, ainsi qu’une **interface moderne et fluide** développée avec Electron.js et TypeScript.",
  category: "Desktop",
  projectType: "Collaboratif",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751041/3_zn0jd3.png",
    alt: "Tableau de bord du système de gestion d'école (ERP)",
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751042/2_fohsim.png", alt: "Interface de gestion des étudiants" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751043/4_sw58dd.png", alt: "Tableau de bord principal" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751043/1_vmkduv.png", alt: "Vue des cours et matières" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751041/5_iqawdc.png", alt: "Planification des examens" },
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend et intégrateur", link: "https://github.com/yann-andronio",},
    { name: "Brandon Fidelin", role: "Développeur backend (Laravel) et intégrateur", link: "https://github.com/branGitfox"},
  ],
 /*  liveLink: "https://gestion-ecole.com",
  githubLink: "https://github.com/monprofil/gestion-ecole-erp", */
  langage: [ "Electron.js", "TypeScript", "Tailwind CSS", "Redux", "API REST", "MySQL", "Laravel" ],
}
,
{
  id: "9",
  text: "Super U",
  description:
    "Développement d’un **mini projet e-commerce local** servant d’exercice pratique pour la maîtrise du **CRUD complet** (création, lecture, mise à jour, suppression). Le site inclut la **gestion du panier**, la **confirmation d’achat simulée**, ainsi que le **filtrage dynamique des produits par catégorie**. L’objectif du projet était de perfectionner les bases du développement front-end avec React et TypeScript.",
  category: "Web",
  projectType: "Solo",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751048/1_t9qvbq.png",
    alt: "Super U – Page d'accueil e-commerce",
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/5_icwno2.png", alt: "Section publicitaire" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751046/2_hb2chu.png", alt: "Filtrage des produits par catégorie" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/6_yocrxq.png", alt: "Section produits du site" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751044/3_off8lh.png", alt: "Page du panier" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751046/4_qnv1pq.png", alt: "Page de confirmation d’achat et paiement" },
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend et intégrateur", link: "https://github.com/yann-andronio",},
  ],
  liveLink: "https://superu-corporate.com",
  githubLink: "https://github.com/monprofil/super-u-corporate",
  langage: ["React.js", "TypeScript", "Tailwind CSS", "Librairies React diverses"],
}
,
  {
  id: "10",
  text: "Timer Engine (Outil de Productivité)",
  description:
    "Conception et développement d’un **outil de gestion du temps** destiné aux postes de travail d’un **cybercafé**. L’application permet de **suivre le temps d’utilisation de chaque poste**, de **calculer automatiquement le montant à payer** selon la durée, et d’afficher des **notifications en temps réel**. Elle intègre une interface moderne, fluide et intuitive pour faciliter la gestion du personnel et des clients.",
  category: "Outil",
  projectType: "Solo",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751048/1_haxrwu.png",
    alt: "Timer Engine – Application de gestion du temps en cybercafé",
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/2_tv4z0e.png", alt: "Interface de suivi du temps des postes" },
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751047/3_b4crca.png", alt: "Vue du tableau de contrôle du gestionnaire" },
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Designer UX/UI, développeur frontend et intégrateur", link: "https://github.com/yann-andronio"},
  ],
  liveLink: "https://timer-engine.com",
  githubLink: "https://github.com/monprofil/timer-engine",
  langage: ["React.js", "TypeScript", "Tailwind CSS"],
}
,
  {
  id: "11",
  text: "Trifako",
  description:
    "Logiciel multiplateforme de gestion des déchets plastiques, organiques et métalliques. Conçu avec Electron.js, Trifako facilite le tri, la collecte et le suivi des déchets grâce à un tableau de bord interactif, des statistiques en temps réel et une carte dynamique de Madagascar.",
  category: "Desktop",
  projectType: "Solo",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751050/1_ohe2mu.png",
    alt: "Interface principale du logiciel Trifako",
  },
  images: [
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751050/2_rxjxgh.png", alt: "Tableau de bord du logiciel Trifako",},
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751050/4_avmscw.png", alt: "Carte interactive de Madagascar intégrée dans Trifako",},
    { url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751048/5_dg0rcc.png", alt: "Page de gestion et suivi des déchets",},
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Concepteur UX/UI, développeur frontend et backend du logiciel", link: "https://github.com/yann-andronio"},
  ],
  liveLink: "https://trifako.com",
  githubLink: "https://github.com/monprofil/trifako-news-site",
  langage: ["Electron.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
},

  {
  id: "12",
  text: "Webster",
  description:"Landing page moderne et dynamique conçue pour une entreprise de services. Le site met en avant les offres clés avec un design épuré, un appel à l’action clair et des visuels percutants, optimisés pour l’engagement utilisateur.",
  category: "Web",
  projectType: "Collaboratif",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751052/1_v5jbzp.png",
    alt: "Page d’accueil de la landing page Webster",
  },
  images: [
    {url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751051/2_puikwh.png",alt: "Section de présentation de Webster"},
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Concepteur UX/UI et développeur frontend", link: "https://github.com/yann-andronio",},
    { name: "Iannis", role: "Développeur frontend", link: "https://github.com/IannisG10",},
    { name: "Sammy", role: "Designer UX/UI", link: "#",},
  ],
  liveLink: "https://webster-landing.com",
  githubLink: "https://github.com/monprofil/webster-landing-page",
  langage: ["React.js", "TypeScript", "Tailwind CSS"],
}
,
  {
  id: "13",
  text: "Vahoaka Miteny (Plateforme Communautaire)",
  description:
    "Plateforme communautaire interactive permettant aux utilisateurs de consulter et de discuter autour des lois malgaches. Développée en React.js et TypeScript dans un but d’entraînement et d’expérimentation d’un environnement temps réel.",
  category: "Web",
  projectType: "Solo",
  mainImage: {
    url: "https://res.cloudinary.com/desced84j/image/upload/w_800,c_fill,f_auto,q_auto/v1761751060/1_ix47l9.png",
    alt: "Page d’accueil de la plateforme Vahoaka Miteny",
  },
  images: [
    {url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751060/1_ix47l9.png",alt: "Interface principale de la plateforme",},
    {url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751056/2_jxjoa4.png",alt: "Vue d’un article de loi",},
    {url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751054/3_dkix5l.png",alt: "Espace de discussion communautaire",},
    {url: "https://res.cloudinary.com/desced84j/image/upload/w_400,c_fill,f_auto,q_auto/v1761751054/4_syqzpn.png",alt: "Section utilisateur de Vahoaka Miteny",},
  ],
  collaborators: [
    { name: "Yann Andronio", role: "Développeur frontend et intégrateur", link: "https://github.com/yann-andronio"},
    
  ],
  liveLink: "https://vahoaka-miteny.com",
  githubLink: "https://github.com/monprofil/vahoaka-miteny-forum",
  langage: ["React.js", "TypeScript", "Ruby on Rails", "PostgreSQL", "ActionCable (temps réel)"],
}

];