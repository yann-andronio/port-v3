import { useTranslation } from "react-i18next";
import type { ProjectCategory } from "../../data/DataProjects"; 

interface ProjectEmptyStateProps {
  activeCategory: ProjectCategory | "Tous";
}

export const ProjectEmptyState = ({ activeCategory }: ProjectEmptyStateProps) => {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-12 p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl max-w-xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
        {t("Oups")} ! {t("Aucun projet classé dans cette catégorie")} ({t(activeCategory)})
      </p>
      <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
        {t('Revenez à "Tous" pour voir l\'ensemble des réalisations ou découvrez mes autres expertises.')}
      </p>
    </div>
  );
};
