import { useTheme } from "../../context/ThemeContext";
import AboutText from "./AboutText";
import AboutStats from "./AboutStats";
import AboutSkills from "./AboutSkills";
import { useState } from "react";
import AboutImageSkeleton from "../skeleton/AboutImageSkeleton";

const photoProfil1 = "/images/fin.png";
const photoProfil2 = "/images/fin2b.png";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentPhoto = isDark ? photoProfil2 : photoProfil1;
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white dark:bg-[#060010] py-28 overflow-hidden flex items-center"
    >
      <div className="mx-auto sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mx-auto sm:px-6 lg:px-6 lg:mx-6 relative z-10 w-full">
          
          <div className="lg:col-span-2 lg:order-0 order-2 space-y-6 text-center lg:text-left justify-center md:text-center">
            <AboutText isDark={isDark} />
          </div>

          <div className="order-1 lg:order-0 lg:col-span-1 flex justify-center lg:justify-end shrink-0 relative">
            <div className="w-full h-full relative">
              {!loaded && (
                <div className="absolute inset-0">
                  <AboutImageSkeleton />
                </div>
              )}

              <img
                src={currentPhoto}
                alt="Portrait professionnel de Yann Andronio, Développeur Full Stack"
                className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl ${
                  loaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </div>

        {/* Stats + Skills */}
        <div className="mt-24">
          <AboutStats isDark={isDark} />
        </div>
        <div>
          <AboutSkills />
        </div>
      </div>
    </section>
  );
}
