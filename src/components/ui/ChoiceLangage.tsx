import i18n from "../../i18n";
import { FaGlobe } from "react-icons/fa";

interface LanguageOption {
  code: string;
  label: string;
}

interface ChoiceLanguageProps {
  onSelect: (lang: string) => void;
}

export default function ChoiceLanguage({ onSelect }: ChoiceLanguageProps) {
  const languages: LanguageOption[] = [
    { code: "fr", label: "French" },
    { code: "en", label: "English" },
  ];

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    onSelect(lang);
  };

  return (
    <div className="absolute right-0 mt-10 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 flex flex-col gap-2 z-50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelect(lang.code)}
          className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <FaGlobe />
          {lang.label}
        </button>
      ))}
    </div>
  );
}
