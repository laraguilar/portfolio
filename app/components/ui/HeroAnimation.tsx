'use client';
import { Code2, Database, Infinity } from "lucide-react";
import { useState } from "react";


const HeroAnimation = () => {
  const [showTooltip, setShowTooltip] = useState(false);


  return (
    <div className="relative hidden md:flex h-[500px] w-full items-center justify-center">


      {/* Fundo com gradiente radial verde para transparente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.25)_0%,_rgba(34,197,94,0.15)_25%,_rgba(34,197,94,0.05)_50%,_transparent_75%)]" />


      {/* Container Principal da Composição */}
      <div className="relative w-[350px] h-[450px] flex items-center justify-center z-10">
        {/* Glow mais concentrado atrás do SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.6),_transparent_70%)] blur-[80px]" />
        </div>


        {/* Moldura Verde / SVG de fundo */}
        <div className="absolute transform -translate-y-4 z-0 w-[280px] h-auto">
          <img
            src="/background-developer.svg"
            alt="background-developer"
            className="z-4"
          />
        </div>


        {/* Retrato */}
        <div
          className="relative z-10 w-[400px] h-[400px] flex items-center justify-center overflow-visible -translate-x-14"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a href="#about">
            <img
              src="/developer.png"
              alt="Retrato de Lara Aguilar"
              className="w-full h-full object-cover object-center drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            />
          </a>

          {/* Balão de diálogo */}
          <div
            className={`
              absolute -bottom-20 left-1/2 -translate-x-1/2
              bg-green-500 text-white px-6 py-3 rounded-2xl
              font-medium text-sm whitespace-nowrap
              shadow-lg shadow-green-500/50
              transition-all duration-300 ease-out
              ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
            `}
          >
            Clique para saber mais sobre mim!


            {/* Pontinha do balão apontando para cima */}
            <div
              className="
                absolute -top-2 left-1/4 -translate-x-1/2
                w-0 h-0
                border-l-[8px] border-l-transparent
                border-r-[8px] border-r-transparent
                border-b-[8px] border-b-green-500
              "
            />
          </div>
        </div>


        {/* Ícones */}
        <div className="absolute -top-6 -left-8 z-20 animate-float-slow">
          <div className="bg-gray-900 p-3 rounded-2xl border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.6)]">
            <Code2 className="w-8 h-8 text-green-400" />
          </div>
        </div>


        <div className="absolute bottom-12 -right-6 z-20 animate-float-medium delay-700">
          <div className="bg-gray-900 p-3 rounded-2xl border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.6)]">
            <Database className="w-8 h-8 text-green-400" />
          </div>
        </div>


        <div className="absolute top-8 -right-10 z-20 animate-float-fast delay-300">
          <div className="bg-gray-900 p-2.5 rounded-2xl border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.6)]">
            <Infinity className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroAnimation;
