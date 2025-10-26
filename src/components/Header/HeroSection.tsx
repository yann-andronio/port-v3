import LightRays from "../../components/LightRays/LightRays";
import { useTheme } from "../../context/ThemeContext";
import fuse from "../../assets/images/fusé.png";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.png";
import { motion } from "framer-motion";
import {
  heroContainerVariants,
  fuseEntranceVariants,
} from "../../utils/framerVariantsAnimation";
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      id="home"
      className="relative w-full min-h-screen bg-white dark:bg-[#060010] overflow-hidden  md:pt-0"
      initial="hidden"
      animate="visible"
      variants={heroContainerVariants}
    >
     {/*  {isDark ? (
        <LightRays
          raysOrigin="top-center"
          raysColor={theme === "dark" ? "#ffffff" : "#ffaa00"}
          raysSpeed={1.5}
          rayLength={1.2}
          followMouse={!isMobile}
          className="absolute inset-0 z-0 will-change-transform opacity-60 dark:opacity-30"
        />
      ) : (
        ""
      )} */}

      <motion.img
        src={isDark ? moon : sun}
        alt={isDark ? "Moon illustration" : "Sun illustration"}
        className="absolute hidden lg:block top-8 left-4 sm:top-10 sm:left-10 md:top-20 md:left-20 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 z-10 opacity-70 dark:opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isDark
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }
        }
        transition={
          isDark
            ? { duration: 1.5, delay: 2 }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <motion.div
        className="absolute bottom-5 right-5 md:bottom-10 md:right-20 z-20 pointer-events-none"
        variants={fuseEntranceVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-20 hidden lg:flex h-40 md:w-32 md:h-64 bg-transparent items-center justify-center">
          <motion.img
            src={fuse}
            alt="Fusée décollant"
            className="w-full h-full object-contain"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center w-full h-full text-center p-4 sm:p-6 z-30 max-w-6xl mx-auto absolute inset-0">
        <HeroText isDark={isDark} />
        <HeroButton isDark={isDark} />
      </div>
    </motion.div>
  );
}
