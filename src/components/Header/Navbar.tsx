import { useTheme } from "../../context/ThemeContext";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ChoiceLanguage from "../ui/ChoiceLangage";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { navbarVariants } from "../../utils/framerVariantsAnimation";
import { Menu, X } from "lucide-react";

interface NavigationMenuesI {
  name: string;
  link: string;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [openChoiceLanguage, setOpenChoiceLanguage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavigationMenues: NavigationMenuesI[] = [
    { name: "Accueil", link: "home" },
    { name: "À propos", link: "about" },
    { name: "Projets", link: "projects" },
    { name: "Compétences", link: "skills" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-3 transition-all duration-500"
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between 
        bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 
        rounded-full px-6 py-2 shadow-md"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-400 dark:to-pink-500 bg-clip-text text-transparent select-none cursor-pointer">
          Yann<span className="font-extrabold text-gray-900 dark:text-white">Andronio</span>
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

        <div className="flex items-center gap-3 sm:gap-4">

          <div className="relative">
            <button
              onClick={() => setOpenChoiceLanguage((prev) => !prev)}
              aria-label="Changer la langue"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200"
            >
              <FaGlobe size={20} />
            </button>
            {openChoiceLanguage && (
              <ChoiceLanguage onSelect={() => setOpenChoiceLanguage(false)} />
            )}
          </div>

          <AnimatedThemeToggler
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 text-gray-800 dark:text-gray-200 shadow-sm"
            isDark={theme === "dark"}
            toggleTheme={toggleTheme}
          />

          {/* Burger menu (mobile) */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 mx-4 bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 overflow-hidden"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {NavigationMenues.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300"
              >
                {t(item.name)}
              </ScrollLink>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
