import { heroItemSlideUpVariants } from "../../utils/framerVariantsAnimation";
import { AuroraText } from "../ui/aurora-text";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroTextProps {
  isDark: boolean;
}

export default function HeroText({ isDark }: HeroTextProps): JSX.Element {
 const auroraColors = isDark ? ["#7C3AED", "#10B981", "#3B82F6", "#FFEE58"] : ["#1D4ED8", "#4F46E5", "#059669", "#EF4444"];
  const { t } = useTranslation();
  

  return (
    <>
      <motion.h1
        variants={heroItemSlideUpVariants}
        className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter ${
          isDark ? "text-white" : "text-gray-900"
        } max-w-5xl px-4`} 
      >
        <span
          className={`block text-transparent bg-clip-text mb-2 sm:mb-3 ${
            isDark
              ? "bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500"
              : "bg-linear-to-r from-blue-600 via-indigo-500 to-pink-500"
          }`}
        >
          {t("hero_greeting")}{" "} 
          <span className="inline-block text-2xl sm:text-4xl lg:text-6xl align-top">
            👋
          </span>
        </span>

        <span className="block">
          {t("hero_main_verb")}{" "}
          <AuroraText colors={auroraColors}>{t("hero_highlight")}</AuroraText>
          <br className="hidden sm:block" />
          {t("hero_main_rest")}
        </span>
      </motion.h1>


      <motion.p
        className="mt-6 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300 px-4"
        variants={heroItemSlideUpVariants}
      >
        <span className="font-semibold block mb-2">{t("hero_role")}</span>
        <span className="hidden lg:block">{t("hero_slogan")}</span>
      </motion.p>
    </>
  );
}
