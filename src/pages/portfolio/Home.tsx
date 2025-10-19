import React from "react";
import HeroSection from "../../components/Header/HeroSection";
import About from "../../components/About/About";
import TechMarquee from "../../components/ui/TechMarquee";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection />
      </div>
      <div className="bg-white dark:bg-[#060010] ">
        <TechMarquee/>
      </div>
      <div>
        <About/>
      </div>
     
    </>
  );
}
