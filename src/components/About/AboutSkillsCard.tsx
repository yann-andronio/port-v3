import { motion, AnimatePresence } from "framer-motion";
import type { DataSkillsI } from "../../data/DataSkills";
import { getDescription } from "../../utils/getDescriptionSkillsCard";
import { useTranslation } from "react-i18next";

interface AboutSkillsCardPropsI {
  activeSkill: DataSkillsI;
}

export default function AboutSkillsCard({ activeSkill }: AboutSkillsCardPropsI) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="lg:col-span-2 relative min-h-[350px] flex flex-col justify-start p-5 rounded-3xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-white to-gray-50 
                 dark:from-gray-800/80 dark:to-gray-900/80 
                 shadow-lg dark:shadow-black/50"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSkill.title}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            {t(activeSkill.title)} 
          </h2>

          <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 border-b pb-4 border-gray-200 dark:border-gray-700">
            <strong>{t(getDescription(activeSkill.title))}</strong> 
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {activeSkill.items.map((item, index) => (
              <motion.span
                key={item}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full text-base font-semibold border 
                           bg-gray-100 dark:bg-gray-700/60 
                           text-gray-800 dark:text-gray-200 
                           border-gray-300 dark:border-gray-600 
                           hover:bg-indigo-500 dark:hover:bg-cyan-600/80 
                           hover:text-white transition-colors"
              >
                {t(item)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
