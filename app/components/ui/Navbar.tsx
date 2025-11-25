import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-green-500 rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-green-500" />
          </div>
          <span className="font-bold text-xl">Lara Aguilar</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-green-500 hover:text-green-400 transition">Home</a>
          <a href="#skills" className="hover:text-green-400 transition">Habilidades</a>
          <a href="#projects" className="hover:text-green-400 transition">Projetos</a>
          <a href="#about" className="hover:text-green-400 transition">Sobre mim</a>
          <a href="#contact" className="hover:text-green-400 transition">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;