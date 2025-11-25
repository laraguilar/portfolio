import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillSection";
import Footer from "./components/ui/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <div className="">
      <main className="">
 <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
      </main>
    </div>
  );
}
