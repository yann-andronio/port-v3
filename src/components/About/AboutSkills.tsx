import { useState } from "react";
import { motion } from "framer-motion";
import { DataSkills } from "../../data/DataSkills";
import AboutSkillsCard from "./AboutSkillsCard";
import { useTranslation } from "react-i18next";

export default function AboutSkills() {
  const [activeSkill, setActiveSkill] = useState(DataSkills[0]);
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section
      id="skills"
      className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-white dark:bg-[#060010]"
    >
      <div className="text-center mb-16 sm:mb-20 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-gray-900 dark:text-white"
        >
          {t("skills_title_part1")}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">
            {t("skills_title_part2")}
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
        >
          {t("skills_intro")} <strong>{t("skills_hover")}</strong>{" "}
          {t("skills_reveal")}
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto lg:px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
        {/* ---- gauche --- */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {DataSkills.map((skill) => {
            const IconComponent = skill.icon;
            const isActive = activeSkill.title === skill.title;

            return (
              <motion.div
                key={skill.title}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                onMouseEnter={() => setActiveSkill(skill)}
                className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border border-gray-200 dark:border-gray-800 
                  hover:border-indigo-500/50 dark:hover:border-cyan-500/50
                  ${
                    isActive
                      ? `${skill.iconBg} text-white shadow-lg shadow-indigo-500/20`
                      : "bg-white dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 hover:bg-opacity-70"
                  }
                `}
              >
                <IconComponent className="w-6 h-6 mr-4" />
                <h3 className="text-lg font-semibold">{t(skill.title)}</h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- DROITE --- */}
        <AboutSkillsCard activeSkill={activeSkill} />
      </div>
    </section>
  );
}
