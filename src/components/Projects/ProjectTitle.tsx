import { useTranslation } from "react-i18next";

export default function ProjectTitle() {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-10 sm:mb-20">
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mt-2 dark:text-gray-100 text-gray-900">
        {t("projectsTitle")}
      </h2>
      <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
        {t("projectsSubtitle")}
      </p>
    </div>
  );
}
