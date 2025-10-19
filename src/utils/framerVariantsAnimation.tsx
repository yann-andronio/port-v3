import {  type Variants } from "framer-motion"; 

/*** --- VARIANTS POUR LE navbar  ---*/

export const navbarVariants: Variants = {
  hidden: { y: -150, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20, 
      delay: 0.2 
    }
  },
};

 export const dropdownChoiceLanguageVariants: Variants = { 
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    } 
  },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } } 
};

/*** --- VARIANTS POUR LA SECTION HERO (title, btn, desc) ---*/

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export const heroItemSlideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    } 
  },
};


export const fuseEntranceVariants: Variants = {
    initial: { opacity: 0, x: 50, rotate: 10 },
    animate: { 
        opacity: 1, 
        x: 0, 
        rotate: 0, 
        transition: { 
            duration: 1, 
            delay: 1.5, 
            type: "spring", 
            stiffness: 50 
        } 
    },
};



export const timelineItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  },
};