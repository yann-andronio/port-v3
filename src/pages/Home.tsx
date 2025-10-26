import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Header/HeroSection";
import About from "../components/About/About";
import TechMarquee from "../components/ui/TechMarquee";
import Projects from "../components/Projects/Projects";
import ExperiencePro from "../components/ExpériencePro/ExperiencePro";
import Parcours from "../components/Parcours/Parcours";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div>
        <HeroSection />
      </div>
      <div className="bg-white dark:bg-[#060010]">
        <TechMarquee />
      </div>
      <div className="px-6 bg-white dark:bg-[#060010]">
        <About />
      </div>
      <div className="px-6 bg-white dark:bg-[#060010]">
        <Projects />
      </div>
      <div className="px-6 bg-white dark:bg-[#060010]">
        <ExperiencePro />
      </div>
      <div className="px-6 bg-white dark:bg-[#060010]">
        <Parcours />
      </div>
      <div className="px-6 bg-white dark:bg-[#060010]">
        <Contact />
      </div>
      <div className="px-6 bg-white dark:bg-[#060010]">
        <Footer />
      </div>
    </>
  );
}
