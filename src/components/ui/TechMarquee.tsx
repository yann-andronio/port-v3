import Marquee from "react-fast-marquee";
import { useTheme } from "../../context/ThemeContext";

import {
  SiVercel,
  SiNextdotjs,
  SiFigma,
  SiAdobephotoshop,
  SiRive,
  SiGit,
  SiPostgresql,
  SiGithub,
  SiFramer,
} from "react-icons/si";

const partnersAndTools = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiAdobephotoshop, name: "Photoshop" },
  { icon: SiRive, name: "Rive" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

export default function PartnerMarquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gradientColor = isDark ? "#060010" : "white";

  const itemBaseClass ="flex items-center space-x-2 text-4xl mx-10 transition-colors duration-300 transform cursor-pointer";

  const logoColorClass = isDark
    ? "text-gray-300 hover:text-cyan-400"  
    : "text-gray-500 hover:text-indigo-600"; 

  const nameColorClass = isDark
    ? "dark:text-gray-400 text-gray-700" 
    : "text-gray-700";
    
  const containerBorderClass = isDark
    ? "border-t border-b border-cyan-400/20" 
    : "border-t border-b border-gray-300/80"; 

  return (
    <div
      className={`w-full py-6 md:py-8 overflow-hidden ${containerBorderClass} transform skew-y-[-1deg] translate-y-[-1px] relative z-10`}
    >
      
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-400/30 dark:bg-cyan-400/50"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-400/30 dark:bg-cyan-400/50"></div>
      
      <div className="transform skew-y-[1deg] w-full">
        <Marquee
          gradient={true}
          gradientColor={gradientColor}
          gradientWidth={100} 
          speed={55} 
          pauseOnHover={true}
        >
          {partnersAndTools.map((item, index) => (
            <div key={index} className={itemBaseClass}>
              <item.icon className={`text-5xl ${logoColorClass}`} />
              
          
              <span className={`text-base font-medium opacity-80 hidden sm:inline ${nameColorClass}`}>
                {item.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}