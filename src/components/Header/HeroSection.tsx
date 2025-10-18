import LightRays from "../LightRays/LightRays";
import {  useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-screen bg-white dark:bg-[#060010]">
      <LightRays
        raysOrigin="top-center"
        //9f7fff
        raysColor={theme === "dark" ? "#ffffff" : "#00d4ff"} 
        raysSpeed={1.5}
        rayLength={1.2}
        followMouse
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="mt-4 text-lg text-center text-gray-800 dark:text-gray-200">
          Découvrez mes projets et mon parcours
        </p>
      </div>
    </div>
  );
}
