"use client";
import OrbitingSkills from "../Orbitingskills/OrbitingSkills";
import AboutSkillsCard from "./AboutSkillsCard";
import { DataSkills } from "../../data/DataSkills";
import { useTheme } from "../../context/ThemeContext";

export default function SkillsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className={`relative  md:py-12 overflow-hidden `}>
      <div className="text-center mb-16 sm:mb-20 px-4 max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Compétences &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Expertise
          </span>
        </h2>
      </div>

      <div className="lg:max-w-[100%] mx-auto  grid grid-cols-1 lg:grid-cols-2   items-center">
        <div className=" hidden lg:flex justify-end items-center order-1 lg:order-2">
          <OrbitingSkills />
        </div>

        <div className="grid  mt-10 grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
          {DataSkills.map((competences, index) => (
            <AboutSkillsCard key={index} competences={competences} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
