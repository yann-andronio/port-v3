import { heroItemSlideUpVariants } from "../../utils/framerVariantsAnimation";
import { AuroraText } from "../ui/aurora-text";
import type { JSX } from "react";
import { motion } from "framer-motion";

interface HeroTextProps {
  isDark: boolean;
}

export default function HeroText({ isDark }: HeroTextProps): JSX.Element {
  const auroraColors = isDark ? ["#7C3AED", "#10B981", "#3B82F6", "#FFEE58"] : ["#1D4ED8", "#4F46E5", "#059669", "#EF4444"];

  return (
    <>
      <motion.h1
        variants={heroItemSlideUpVariants}
        className={`text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tighter ${
          isDark ? "text-white" : "text-gray-900"
        } max-w-5xl`}
      >
        <span
          className={`block text-transparent bg-clip-text mb-2 sm:mb-3 ${
            isDark
              ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500"
              : "bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500"
          }`}
        >
          Salut, je suis Yann Andronio{" "}
          <span className="inline-block text-3xl sm:text-5xl lg:text-6xl align-top">
            👋
          </span>
        </span>

        <span className="block">
          Je crée des{" "}
          <AuroraText colors={auroraColors}>expériences modernes</AuroraText>
          <br className="hidden sm:block" />
          sur le web, mobile et desktop.
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 text-xl sm:text-2xl font-light max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300"
        variants={heroItemSlideUpVariants}
      >
        <span className="font-semibold block mb-2">
          Développeur Full-Stack & UI/UX.
        </span>
        <span className="block">
          J’allie design et performance pour donner vie à vos idées.
        </span>
      </motion.p>
    </>
  );
}
