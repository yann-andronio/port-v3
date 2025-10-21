import { useState } from "react";
import { DataStat, type StatItemType } from "../../data/DataStat";
import AboutStatCard from "./AboutStatCard";
import { useTranslation } from "react-i18next";

interface AboutStatsPropsI {
  isDark: boolean;
}


export default function AboutStats({ isDark }: AboutStatsPropsI) {
  const {t} = useTranslation()

  const [statData] = useState<StatItemType[]>(DataStat);
  const titleGradientClass = isDark ? "from-cyan-400 via-purple-400 to-pink-400" : "from-blue-600 via-indigo-600 to-purple-600";
  
  return (
    <div className={`font-sans py-20 lg:py-28 relative z-10 transition-colors duration-300`}>
      <div className="lg:max-w-[90%] mx-auto lg:px-6">
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h2
            className={`font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter mb-4 
              bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass}`}
          >
             {t("my_expertise_universe")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {statData.map((stat, index) => (
           <AboutStatCard stat={stat} key={index} ind={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}
