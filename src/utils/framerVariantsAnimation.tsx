import {  type Variants } from "framer-motion"; 

export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
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