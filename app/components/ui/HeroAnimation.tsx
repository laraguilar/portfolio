'use client';
import { Code2, Database, Infinity } from "lucide-react";


const HeroAnimation = () => {


  return (
    <div className="relative hidden md:flex h-[500px] w-full items-center justify-center overflow-hidden">

      {/* Container Principal da Composição */}
      <div className="relative w-[350px] h-[350px] flex items-center justify-center z-10">

         {/* Moldura Verde / SVG com glow formato portal */}
        <div className="absolute transform -2translate-y-2 z-0 w-[400px] h-[400px]">

          {/* SEU SVG ORIGINAL */}
          <img
            src="/background-developer2.svg"
            alt="background-developer"
            className="absolute inset-0 w-full h-full z-10"
          />
        </div>

        {/* Retrato */}
        <div
          className="relative z-10 w-[400px] h-[400px] flex items-center justify-center overflow-visible -translate-x-14"
        >
            <img
              src="/developer.png"
              alt="Retrato de Lara Aguilar"
              className="w-full h-full object-cover object-center drop-shadow-2xl transition-transform duration-700 ease-out"
            />


        {/* Ícones */}
        <div className="absolute -top-2 left-4 z-20 animate-float-slow">
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
    </div>
  );
};


export default HeroAnimation;