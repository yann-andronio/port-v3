import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { heroItemSlideUpVariants } from "../../utils/framerVariantsAnimation";
import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

interface HeroButtonProps {
  isDark: boolean;
}

export default function HeroButton({ isDark }: HeroButtonProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 sm:mt-12"
      variants={heroItemSlideUpVariants}
    >
      <ScrollLink
        to="projects"
        offset={-70}
        smooth={true}
        duration={500}
        className={`px-8 py-3 sm:px-10 sm:py-4 text-lg sm:text-xl font-extrabold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-2xl ${
          isDark
            ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-500 hover:to-blue-500 shadow-indigo-600/50"
            : "bg-gradient-to-r from-blue-700 to-purple-700 text-white hover:from-blue-600 hover:to-purple-600 shadow-blue-600/50"
        }`}
      >
        {t("cta_projects")}
      </ScrollLink>
      <a
        href="/Yann_Andronio_CV.pdf"
        download
        className={`px-8 py-3 sm:px-10 sm:py-4 text-lg sm:text-xl font-semibold rounded-full border-2 flex items-center justify-center transform hover:scale-105 active:scale-95 whitespace-nowrap transition-all duration-300 ${
          isDark
            ? "border-gray-600 text-gray-200 hover:bg-gray-800/50 backdrop-blur-sm"
            : "border-gray-400 text-gray-800 hover:bg-gray-100"
        }`}
      >
        <FaDownload size={16} className="mr-3" />
        {t("cta_download_cv")}
      </a>
    </motion.div>
  );
}
