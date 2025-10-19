import i18n from "../../i18n";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineCheck } from "react-icons/md";
import { motion, } from "framer-motion";
import { dropdownChoiceLanguageVariants } from "../../utils/framerVariantsAnimation";

interface LanguageOption {
  code: string;
  label: string;
}

interface ChoiceLanguageProps {
  onSelect: (lang: string) => void;
}


export default function ChoiceLanguage({ onSelect }: ChoiceLanguageProps) {
  const languages: LanguageOption[] = [
    { code: "fr", label: "Français" },
    { code: "en", label: "Anglais" },
  ];

  const activeLang = i18n.language;

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    onSelect(lang);
  };

  return (
    <motion.div
      variants={dropdownChoiceLanguageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      
      className={`
        absolute right-0 mt-5 w-40 p-2 flex flex-col gap-1 z-50 rounded-xl shadow-2xl border 
        ${activeLang === "fr" ? "shadow-blue-500/30" : "shadow-pink-500/30"}
        dark:bg-gray-900/80 dark:backdrop-blur-sm dark:border-gray-700 bg-white/90 border-gray-200
    `}
    >
      {languages.map((lang) => {
        const isActive = lang.code === activeLang;

        const buttonClasses = isActive? `
            dark:bg-indigo-600 dark:text-white dark:shadow-md dark:shadow-indigo-500/50
            bg-blue-600 text-white shadow-md shadow-blue-500/50
          `
          : `
            text-gray-700 dark:text-gray-300
            hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200
          `;

        return (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`flex items-center justify-between px-3 py-2 rounded-lg font-medium text-sm ${buttonClasses}`}
          >
            <div className="flex items-center gap-2">
              <FaGlobe size={14} />
              {lang.label}
            </div>
            {isActive && <MdOutlineCheck size={18} />}
          </button>
        );
      })}
    </motion.div>
  );
}