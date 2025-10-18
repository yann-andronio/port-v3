import { useTheme } from "../../context/ThemeContext";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ChoiceLanguage from "../ui/ChoiceLangage";
import { Link as ScrollLink } from "react-scroll";

interface NavigationMenuesI {
  name: string;
  link: string;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [openChoiceLanguage, setOpenChoiceLanguage] = useState(false);

  const NavigationMenues: NavigationMenuesI[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/projet" },
    { name: "Skills", link: "/skills" },
  ];

  return (
    <section className="w-full fixed top-0 left-0 z-50   transition-colors duration-500">
      <div
        className="lg:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 
    bg-white/10 backdrop-blur-md rounded-full"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
          MyPortfolio
        </h1>

        <nav className="hidden md:flex gap-8">
          {NavigationMenues.map((item, index) => (
            <ScrollLink
              key={index}
              smooth={true}
              duration={500}
              offset={-70}
              to={item.link}
              className="text-gray-800 dark:text-gray-200 font-medium hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
            >
              {t(item.name)}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <button
              onClick={() => setOpenChoiceLanguage((prev) => !prev)}
              aria-label="Changer la langue"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200"
            >
              <FaGlobe size={22} />
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
        </div>
      </div>
    </section>
  );
}
