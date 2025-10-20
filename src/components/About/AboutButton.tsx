import { FaArrowRight, FaCode } from "react-icons/fa";
interface AboutButtonI {
  isDark: boolean;
  primaryColor: string;
}

export default function AboutButton({ isDark, primaryColor }: AboutButtonI) {
  const baseButtonClass =
    "inline-flex justify-center items-center text-center w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition duration-300 shadow-xl transform hover:-translate-y-0.5 focus:ring-4 focus:outline-none";
  const primaryButtonClass = `${baseButtonClass} bg-${primaryColor}-600 hover:bg-${primaryColor}-700 focus:ring-${primaryColor}-500/50 text-white`;
  const secondaryButtonClass = `inline-flex justify-center items-center text-center w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold border-2 
                                ${
                                  isDark ? "text-cyan-400" : "text-indigo-600"
                                } border-${primaryColor}-600 
                                hover:border-${primaryColor}-500 
                                hover:text-${primaryColor}-500 
                                transition duration-300 ml-0 sm:ml-6 mt-3 sm:mt-0 bg-transparent 
                                ${
                                  isDark
                                    ? "hover:bg-cyan-900/30"
                                    : "hover:bg-indigo-50/10"
                                }
                                focus:ring-${primaryColor}-500/50 focus:outline-none`;
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center lg:justify-normal pt-6">
      <button className={primaryButtonClass}>
        <FaCode className="mr-2" />
        Voir mes Projets
      </button>
      <button className={secondaryButtonClass}>
        Me Contacter <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}
