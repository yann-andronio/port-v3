import { useTranslation } from "react-i18next";
import AboutButton from "./AboutButton";

interface AboutTextPropsI {
  isDark: boolean;
}

export default function AboutText({ isDark }: AboutTextPropsI) {
  const { t } = useTranslation();

  const softTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const primaryColor = isDark ? "blue" : "blue";

  const highlightColor = isDark
    ? "text-cyan-400 hover:text-cyan-300"
    : "text-blue-600 hover:text-blue-500";
  const titleGradientClass = isDark
    ? "from-cyan-400 to-purple-400"
    : "from-indigo-600 to-gray-800";

  return (
    <div className="space-y-5 md:space-y-6 font-sans">
      <h2
        className={`text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass}`}
      >
        {t("about_title_line1")}
        <br />
        {t("about_title_line2")}
        <br />
        <span>{t("about_title_line3")}</span>
      </h2>

      <p className={`text-base sm:text-xl md:text-2xl leading-relaxed lg:max-w-xl ${softTextColor}`}>
        {t("about_paragraph_intro")}{" "}
        <span className={highlightColor}>{t("about_paragraph_stack")}</span>.{" "}
        {t("about_paragraph_idea")}{" "}
        <span className={highlightColor}>{t("about_paragraph_solutions")}</span>{" "}
        {t("about_paragraph_interface")}{" "}
        <span className={highlightColor}>{t("about_paragraph_experience")}</span>.
      </p>

      {/* tsipika */}
      <div className="py-3">
        <hr
          className={`border-t-2 ${
            isDark ? `border-${primaryColor}-400/30` : "border-gray-300"
          } lg:max-w-xs`}
        />
      </div>

      <AboutButton isDark={isDark} primaryColor={primaryColor} />
    </div>
  );
}
