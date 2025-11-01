import { useTranslation } from "react-i18next";

export default function ParcoursTitle() {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-20">
      <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {t("parcoursAcademic.title1")}{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500">
          {t("parcoursAcademic.title2")}
        </span>{" "}
        {t("parcoursAcademic.title3")}
      </h2>

      <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
        {t("parcoursAcademic.description")}
      </p>
    </div>
  );
}
