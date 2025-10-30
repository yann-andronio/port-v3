import type { DataSkillsI } from "../../data/DataSkills";
import { getGradientColor, getShadowColor } from "../../utils/colorSkillCard";

interface AboutSkillsCardProps {
  competences: DataSkillsI;
  isDark: boolean;
}

/* bg-gray-800/60 for first div bg-card*/
export default function AboutSkillsCard({ competences, isDark }: AboutSkillsCardProps) {
  
  return (
    <div
      className={`
        relative group p-6 rounded-3xl border 
        overflow-hidden transition-all duration-500 ease-out 
        hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] 
        ${isDark ? "border-gray-800 bg-[#060010]" : "border-gray-200 bg-white/80"}
      `}
    >
      {/* jiro kely in hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
        bg-linear-to-br ${getGradientColor(competences.color)} to-transparent`}
      />

      <div className="flex items-center gap-4 mb-5 relative z-10">
        <div
          className={`p-4 rounded-2xl ${competences.iconBg} flex items-center justify-center shadow-md ${getShadowColor(
            competences.color
          )}`}
        >
          <competences.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <h4
          className={`text-xl sm:text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {competences.title}
        </h4>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
        {competences.items.map((skill, i) => (
          <span
            key={i}
            className={`
              px-3 py-1.5 rounded-full text-sm sm:text-base font-medium 
              transition-all duration-300 cursor-default
              ${
                isDark
                  ? "bg-gray-700/80 text-gray-200 hover:bg-cyan-600"
                  : "bg-gray-100 text-gray-800 hover:bg-indigo-500 hover:text-white"
              }
            `}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
