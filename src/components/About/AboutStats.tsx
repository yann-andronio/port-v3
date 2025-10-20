import CountUp from "react-countup";
import { motion, type Variants } from "framer-motion";
import { FaTrophy, FaStar, FaCodeBranch } from "react-icons/fa6";

interface AboutStatsPropsI {
  isDark: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function AboutStats({ isDark }: AboutStatsPropsI) {
  const accentColor = isDark ? "text-cyan-400" : "text-indigo-600";
  const primaryText = isDark ? "text-white" : "text-gray-900";

  const titleGradientClass = isDark
    ? "from-cyan-400 via-purple-400 to-pink-400"
    : "from-blue-600 via-indigo-600 to-purple-600";

  const cardBaseClass = `
    relative group p-8 rounded-3xl border text-center
    transition-all duration-500 transform hover:-translate-y-2
  `;

  const cardBgClass = isDark
    ? "bg-gradient-to-br from-[#0a0a12]/90 via-[#111122]/80 to-[#1a1a24]/80 border-indigo-800/40 backdrop-blur-xl"
    : "bg-gradient-to-br from-white/80 via-gray-50/70 to-indigo-50/60 border-gray-200 backdrop-blur-md";

  const hoverGlow = isDark
    ? "hover:shadow-[0_0_35px_5px_rgba(56,189,248,0.15)] hover:border-cyan-500/50"
    : "hover:shadow-[0_0_25px_5px_rgba(99,102,241,0.15)] hover:border-indigo-400/50";

  const iconWrapper = isDark
    ? "bg-gradient-to-br from-cyan-500/20 to-purple-600/10 border border-cyan-400/40"
    : "bg-gradient-to-br from-indigo-100 to-purple-50 border border-indigo-300/50";

  const stats = [
    {
      icon: FaTrophy,
      main: 2,
      unit: "Mois d'Expérience",
    },
    {
      icon: FaCodeBranch,
      main: 17,
      unit: "Projets Personnels",
    },
    {
      icon: FaStar,
      main: 2,
      unit: "Projets Clients",
    },
  ];

  return (
    <div
      className={`font-sans py-20 lg:py-28 relative z-10 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h2
            className={`font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter mb-4 
              bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass}`}
          >
            Mon Univers d’Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={itemVariants}
              className={`${cardBaseClass} ${cardBgClass} ${hoverGlow}`}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

              <div
                className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center ${iconWrapper} transition-transform duration-500 group-hover:scale-110`}
              >
                <stat.icon className={`w-7 h-7 ${accentColor}`} />
              </div>

              <p
                className={`text-6xl font-black tracking-tight mb-2 ${accentColor}`}
              >
                <CountUp
                  start={0}
                  end={stat.main}
                  duration={4}
                  suffix={stat.main > 10 ? "+" : ""}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </p>

              <h4
                className={`text-lg font-semibold uppercase mb-3 ${primaryText}`}
              >
                {stat.unit}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
