import CountUp from "react-countup";
import type { StatItemType } from "../../data/DataStat";
import { useTranslation } from "react-i18next";

interface AboutStatCardI {
  isDark: boolean;
  stat: StatItemType;
  ind: number;
}

export default function AboutStatCard({ stat, isDark, ind }: AboutStatCardI) {
  const { t } = useTranslation();

  const accentColor = isDark ? "text-cyan-400" : "text-indigo-600";
  const primaryText = isDark ? "text-white" : "text-gray-900";

  const cardBaseClass = `relative group py-4 px-4 rounded-3xl border text-center transition-all duration-500 transform hover:-translate-y-2`;

  const cardBgClass = isDark
    ? "bg-gradient-to-br from-[#0a0a12]/90 via-[#111122]/80 to-[#1a1a24]/80 border-indigo-800/40 backdrop-blur-xl"
    : "bg-gradient-to-br from-white/80 via-gray-50/70 to-indigo-50/60 border-gray-200 backdrop-blur-md";

  const hoverGlow = isDark
    ? "hover:shadow-[0_0_35px_5px_rgba(56,189,248,0.15)] hover:border-cyan-500/50"
    : "hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.15)] hover:border-indigo-400/50";

  const iconWrapper = isDark
    ? "bg-gradient-to-br from-cyan-500/20 to-purple-600/10 border border-cyan-400/40"
    : "bg-gradient-to-br from-indigo-100 to-purple-50 border border-indigo-300/50";

  const aosDelay = (ind * 150).toString();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-easing="ease-out"
      className={`${cardBaseClass} ${cardBgClass} ${hoverGlow}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

      <div
        className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center ${iconWrapper} transition-transform duration-500 group-hover:scale-110`}
      >
        <stat.icon className={`w-7 h-7 ${accentColor}`} />
      </div>

      <p className={`text-6xl font-black tracking-tight mb-2 ${accentColor}`}>
        <CountUp
          start={0}
          end={stat.main ?? 0}
          duration={4}
          suffix={stat.main && stat.main > 10 ? "+" : ""}
        />
      </p>

      <h4 className={`text-lg font-semibold uppercase mb-3 ${primaryText}`}>
        {t(stat.unit)}
      </h4>
    </div>
  );
}
