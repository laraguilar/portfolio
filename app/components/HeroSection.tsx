import { ChevronDown } from "lucide-react";
import HeroAnimation from "./ui/HeroAnimation";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-400 text-lg">OLÁ, EU SOU A</p>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-green-500">Lara Aguilar</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
              Desenvolvedora Full Stack
              <br />
              <span className="text-green-400">& Web Designer</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Especializada em React, Next.js e TypeScript. Transformo ideias em soluções digitais elegantes e funcionais.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a 
              href="#contact" 
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Contrate meu serviço
            </a>
            <a 
              href="#projects" 
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 font-semibold px-8 py-3 rounded-lg transition"
            >
              Veja meus trabalhos →
            </a>
          </div>
        </div>
        <HeroAnimation />
      </div>
      <a href="#skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-green-500" />
      </a>
    </section>
  );
};

export default HeroSection;