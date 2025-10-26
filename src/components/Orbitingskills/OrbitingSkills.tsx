import { useEffect, useState, useRef, memo, useMemo, useCallback } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaTerminal,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// 🧩 Types
type IconType = "html" | "css" | "javascript" | "react" | "node" | "tailwind";
type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
  color: string;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor: GlowColor;
  animationDelay?: number;
}

// 🎨 Icônes
const iconComponents = {
  html: { component: FaHtml5, color: "#E34F26" },
  css: { component: FaCss3Alt, color: "#1572B6" },
  javascript: { component: FaJs, color: "#F7DF1E" },
  react: { component: FaReact, color: "#61DAFB" },
  node: { component: FaNodeJs, color: "#339933" },
  tailwind: { component: SiTailwindcss, color: "#06B6D4" },
};

// 💡 Icône centrale
const SkillIcon = memo(({ type, color }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return (
    <div className="w-full h-full flex items-center justify-center">
      {IconComponent ? (
        <IconComponent style={{ width: "70%", height: "70%" }} color={color} />
      ) : (
        <FaTerminal style={{ width: "70%", height: "70%" }} color="#FFF" />
      )}
    </div>
  );
});
SkillIcon.displayName = "SkillIcon";

// 🪐 Élément orbitant
const OrbitingSkill = memo(
  ({ config, isHovered, onHover, onLeave }: OrbitingSkillProps) => {
    const { size, iconType, label } = config;
    const iconColor = iconComponents[iconType]?.color || "#FFFFFF";

    return (
      <div
        className="orbiting-skill absolute top-1/2 left-1/2"
        style={{
          width: size,
          height: size,
          transform: "translate(-50%, -50%)",
          zIndex: isHovered ? 20 : 10,
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div
          className={`relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"
          }`}
          style={{
            boxShadow: isHovered
              ? `0 0 30px ${iconColor}40, 0 0 60px ${iconColor}20`
              : undefined,
          }}
        >
          <SkillIcon type={iconType} color={iconColor} />
          {isHovered && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 rounded text-xs text-white whitespace-nowrap pointer-events-none">
              {label}
            </div>
          )}
        </div>
      </div>
    );
  }
);
OrbitingSkill.displayName = "OrbitingSkill";

// ✨ Orbits lumineuses
const GlowingOrbitPath = memo(
  ({ radius, glowColor, animationDelay = 0 }: GlowingOrbitPathProps) => {
    const glowColors: Record<
      GlowColor,
      { primary: string; secondary: string; border: string }
    > = {
      cyan: {
        primary: "rgba(6,182,212,0.4)",
        secondary: "rgba(6,182,212,0.2)",
        border: "rgba(6,182,212,0.3)",
      },
      purple: {
        primary: "rgba(147,51,234,0.4)",
        secondary: "rgba(147,51,234,0.2)",
        border: "rgba(147,51,234,0.3)",
      },
    };
    const colors = glowColors[glowColor];

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animationDelay: `${animationDelay}s`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// 🧭 Configs
const skillsConfig: SkillConfig[] = [
  {
    id: "html",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "JavaScript",
  },
  {
    id: "react",
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "node",
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: "node",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "purple",
    label: "Node.js",
  },
  {
    id: "tailwind",
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: "tailwind",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "purple",
    label: "Tailwind CSS",
  },
];

// 🚀 Composant principal
export default function OrbitingSkills() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(0);
const orbitConfigs: { radius: number; glowColor: GlowColor; delay: number }[] = useMemo(() => [
  { radius: 100, glowColor: 'cyan', delay: 0 },
  { radius: 180, glowColor: 'purple', delay: 1.5 },
], []);


  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // 💨 Animation sans re-render
  useEffect(() => {
    if (isPaused) return;
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      timeRef.current += deltaTime;

      const container = containerRef.current;
      if (container) {
        const children =
          container.querySelectorAll<HTMLDivElement>(".orbiting-skill");
        children.forEach((child, index) => {
          const skill = skillsConfig[index];
          const angle = timeRef.current * skill.speed + skill.phaseShift;
          const x = Math.cos(angle) * skill.orbitRadius;
          const y = Math.sin(angle) * skill.orbitRadius;
          child.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <main className="w-full flex items-center justify-end overflow-hidden">
      {/* 🌌 Arrière-plan */}
      <div className="absolute opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* 🪐 Conteneur */}
      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] max-w-[450px] max-h-[450px] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {/* Centre */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="relative z-10" style={{ color: "#06B6D4" }}>
            <FaTerminal size={36} />
          </div>
        </div>

        {/* Cercles lumineux */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Compétences orbitantes */}
        {skillsConfig.map((config) => (
          <OrbitingSkill
            key={config.id}
            config={config}
            isHovered={hoveredId === config.id}
            onHover={() => setHoveredId(config.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </main>
  );
}
