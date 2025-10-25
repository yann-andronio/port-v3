import { useTheme } from "../../context/ThemeContext";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ChoiceLanguage from "../ui/ChoiceLangage";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { navbarVariants } from "../../utils/framerVariantsAnimation";
import { Menu, X } from "lucide-react";
import NavbarMobile from "./NavbarMobile";

export interface NavigationMenuesI {
  name: string;
  link: string;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [openChoiceLanguage, setOpenChoiceLanguage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavigationMenues: NavigationMenuesI[] = [
    { name: "home", link: "home" },
    { name: "about", link: "about" },
    { name: "projects", link: "projects" },
    { name: "skills", link: "skills" },
    { name: "contact", link: "contact" },
  ];

  const navbarClasses = isScrolled
    ? "bg-white dark:bg-[#060010] border-b border-gray-200 dark:border-gray-800 shadow-xl py-2"
    : "bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-md py-3";

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 px-2 sm:px-4 py-2 transition-all duration-500"
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between 
        rounded-full px-4 py-1 transition-all duration-300 ${navbarClasses}`}
      >
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-400 dark:to-pink-500 bg-clip-text text-transparent select-none cursor-pointer whitespace-nowrap">
          Yann
          <span className="font-extrabold text-gray-900 dark:text-white">
            Andronio
          </span>
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          {NavigationMenues.map((item, index) => (
            <ScrollLink
              key={index}
              smooth={true}
              duration={500}
              offset={-70}
              to={item.link}
              className="relative text-gray-800 dark:text-gray-200 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-yellow-400 cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(item.name)}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => setOpenChoiceLanguage((prev) => !prev)}
              aria-label="Changer la langue"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200"
            >
              <FaGlobe size={18} className="sm:size-5" />
            </button>
            <AnimatePresence>
              {openChoiceLanguage && (
                <ChoiceLanguage onSelect={() => setOpenChoiceLanguage(false)} />
              )}
            </AnimatePresence>
          </div>

          <AnimatedThemeToggler
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 text-gray-800 dark:text-gray-200 shadow-sm"
            isDark={theme === "dark"}
            toggleTheme={toggleTheme}
          />

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu de navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <NavbarMobile
            NavigationMenues={NavigationMenues}
            closeMenu={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>{" "}
    </motion.header>
  );
}
