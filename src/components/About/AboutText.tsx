import { useTranslation } from "react-i18next";
import AboutButton from "./AboutButton";

interface AboutTextPropsI {
  isDark: boolean;
}

export default function AboutText({ isDark }: AboutTextPropsI) {
  const { t } = useTranslation();

  const softTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const primaryColor = isDark ? "cyan" : "indigo";
  const titleGradientClass = isDark
    ? "from-cyan-400 to-purple-400"
    : "from-indigo-600 to-gray-800";

 
  return (
    <div className="space-y-5 md:space-y-6 font-sans">
      <h2
        className={`text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tighter 
                    bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass}`}
      >
        DÉVELOPPEUR FULL-STACK
        <br />
        JAVASCRIPT & SPECIALISTE
        <br />
        <span className="">FRONT-END</span>
      </h2>

      <p
        className={`text-base sm:text-xl md:text-2xl leading-relaxed lg:max-w-xl ${softTextColor}`}
      >
        **Développeur Full Stack** passionné, je suis spécialisé dans le **MERN
        Stack** (MongoDB, Express, React, Node.js). Mon objectif est simple :
        transformer vos idées en **solutions web performantes** avec des
        **interfaces utilisateur intuitives** qui font la différence.
      </p>

      {/* tsipika*/}
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
