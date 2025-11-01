import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-white dark:bg-[#060010] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-6 mx-auto" />

        <div className="text-sm space-y-2">
            
          <p className="text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Yann Andronio. {t("footer.all_rights")}
          </p>
          
          <p className="text-xs text-gray-400 dark:text-gray-600 italic">
            {t("footer.quote")}
          </p>
        </div>
        
      </div>
    </footer>
  );
}
