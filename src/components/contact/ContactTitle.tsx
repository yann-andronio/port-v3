import { useTranslation } from "react-i18next";

function ContactTitle() {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <p className="text-gray-600 dark:text-gray-400 font-medium tracking-wide">
        {t("contactes.idea")}
      </p>
      <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {t("contactes.title")}
      </h2>
    </div>
  );
}

export default ContactTitle;
