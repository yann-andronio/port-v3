import { useTheme } from "../../context/ThemeContext";
import { FaCode, FaArrowRight } from 'react-icons/fa'; 

const photoProfil1 = './images/fin.png'; 
const photoProfil2 = './images/fin2.png'; 


export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const softTextColor = isDark ? "text-gray-300" : "text-gray-700"; 
  const accentColor = isDark ? "text-cyan-400" : "text-indigo-600";
  const titleGradientClass = isDark ? "from-cyan-400 to-purple-400" : "from-indigo-600 to-gray-800"; 

  const primaryButtonClass = `inline-flex items-center px-8 py-3 rounded-full text-white font-semibold 
                              ${isDark ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-indigo-600 hover:bg-indigo-700'} 
                              transition duration-300 shadow-lg`;
  const secondaryButtonClass = `inline-flex items-center px-8 py-3 rounded-full font-semibold 
                                ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-700'} 
                                border-2 ${isDark ? 'border-cyan-600 hover:border-cyan-500' : 'border-indigo-600 hover:border-indigo-500'} 
                                transition duration-300 ml-4`;

  const currentPhoto = isDark ? photoProfil2 : photoProfil1;

  return (
    <section id="about" className={`relative w-full min-h-screen  bg-white dark:bg-[#060010] py-28 overflow-hidden flex items-center`}>
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            
          <div className="lg:col-span-2 lg:order-none order-2 space-y-6 text-left"> 
                
              <div className="space-y-4">
                    <p className={`text-lg font-medium text-purple-700" dark:text-purple-400`}>
                        Je suis Yann Andronio
                    </p>
                    
                    <h2 className={`text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass}`}>
                      FULL STACK
                      <br/>
                      ENGINEERING
                    </h2>
                    
                    <p className={`text-lg md:text-xl leading-relaxed max-w-xl ${softTextColor}`}>
                        Fort de mes compétences en **React/Next.js** et **Node.js/Express**, je transforme des idées complexes en **solutions web performantes et intuitives**. Mon approche combine rigueur technique et créativité pour des interfaces utilisateur qui captivent et des architectures qui évoluent.
                    </p>

                    <div className="py-4">
                        <hr className={`border-t ${isDark ? 'border-cyan-400/20' : 'border-gray-300'} w-1/3`} />
                        <div className={`mt-4 ${softTextColor} opacity-90 flex items-center`}>
                            <FaCode className={`mr-3 ${accentColor}`} />
                            <span className="font-bold mr-2">Spécialisations :</span> 
                            <span className="tracking-wider">Performance • Scalabilité • UX/UI • MERN Stack</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center mt-8">
                        <button className={primaryButtonClass}>
                            Voir mes Projets
                        </button>
                        <button className={secondaryButtonClass}>
                            Me Contacter <FaArrowRight className="ml-2" />
                        </button>
                    </div>   
              </div>     
          </div>

          <div className=" order-1 lg:order-none lg:col-span-1 flex justify-center lg:justify-end flex-shrink-0 relative">
    
              <div className="w-full h-full">
                    <img 
                        src={currentPhoto} 
                        alt="Portrait professionnel de Yann Andronio, Développeur Full Stack" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                    />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}