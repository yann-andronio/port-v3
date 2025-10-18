import React, { useState } from 'react';
import { useTheme } from "../../context/ThemeContext";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler"; 
import { FaGlobe, FaDownload } from 'react-icons/fa'; 
import { Link as ScrollLink } from "react-scroll"; // Import de react-scroll

interface NavigationMenuI {
  name: string;
  link: string; // Doit correspondre à l'ID de la section cible
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [currentLang, setCurrentLang] = useState<'fr' | 'en'>('fr');

  // Les liens pointent vers l'ID des sections correspondantes (sans le #)
  const NavigationMenus: NavigationMenuI[] = [
    {
      name: currentLang === 'fr' ? "Travail" : "Work",
      link: "work", // L'ID de la section
    },
    {
      name: currentLang === 'fr' ? "À Propos" : "About",
      link: "about",
    },
    {
      name: currentLang === 'fr' ? "Compétences" : "Skills",
      link: "skills",
    },
    {
      name: currentLang === 'fr' ? "Contact" : "Contact",
      link: "contact",
    },
  ];
  
  const handleLangChange = () => {
      setCurrentLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* 1. Logo à Gauche (Utilise ScrollLink pour un retour en haut doux) */}
        <ScrollLink 
            to="home" // Assurez-vous que votre Hero Section a l'ID "home"
            smooth={true} 
            duration={500}
            className="text-xl cursor-pointer font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
            VotreNom.dev
        </ScrollLink>

        {/* 2. Navigation au Centre (Utilisation de ScrollLink) */}
        <nav className="hidden md:flex space-x-6">
          {NavigationMenus.map((item) => (
            <ScrollLink 
              key={item.link} 
              to={item.link} 
              smooth={true} // Activation du défilement doux
              duration={500} // Durée de l'animation en millisecondes
              offset={-64} // Compense la hauteur de la NavBar (16 * 4px = 64px)
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition duration-200 cursor-pointer"
              activeClass="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" // Classe quand la section est active
              spy={true} // Active l'espionnage (spy) pour marquer le lien actif
            > 
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* 3. Contrôles à Droite */}
        <div className="flex items-center space-x-3 sm:space-x-4">
            
          {/* Bouton de Traduction */}
          <button 
            onClick={handleLangChange}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label={`Changer de langue vers ${currentLang === 'fr' ? 'Anglais' : 'Français'}`}
          >
            <FaGlobe size={20} />
          </button>

          {/* Bouton Mode Sombre/Clair */}
          <AnimatedThemeToggler
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            isDark={theme === "dark"}
            toggleTheme={toggleTheme}
            aria-label="Basculer le thème clair/sombre"
          />

          {/* CTA (Bouton CV) */}
          <a
            href="/votre-cv.pdf"
            download
            className="hidden sm:flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/50"
          >
            <FaDownload size={14} className="mr-2" />
            {currentLang === 'fr' ? "Télécharger CV" : "Download CV"}
          </a>
        </div>
      </div>
    </header>
  );
}