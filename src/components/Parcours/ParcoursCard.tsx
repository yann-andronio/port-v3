import { motion } from "framer-motion";
import type { DataParcoursI } from "../../data/DataParcours";
import { useTranslation } from "react-i18next";

interface ParcoursCardProps {
  item: DataParcoursI;
}

export default function ParcoursCard({ item }: ParcoursCardProps) {
  const Icon = item.icon;
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white dark:bg-[#0A0016] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="absolute -top-6 left-6 w-12 h-12 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {t(item.titre)}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
          {t(item.etablissement)}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {t(item.description)}
        </p>
        <span className="text-sm text-indigo-600 dark:text-cyan-400 font-semibold mt-3 block">
          {item.annee}
        </span>
      </div>
    </motion.div>
  );
}
