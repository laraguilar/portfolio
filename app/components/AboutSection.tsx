import { Code2, Database, Palette } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-green-500">_</span>Sobre mim<span className="text-green-500">_</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-3xl flex items-center justify-center">
                <div className="space-y-4">
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
                    <Code2 className="w-16 h-16 text-green-400" />
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                      <Database className="w-12 h-12 text-green-400" />
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                      <Palette className="w-12 h-12 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Olá! Meu nome é <span className="text-green-500 font-semibold">Lara Aguilar</span> e tenho 19 anos. 
              Sou técnica em Informática para Internet formada pelo IFES e atualmente curso{' '}
              <span className="text-green-400">Bacharelado em Sistemas de Informação</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Trabalho como <span className="text-green-500 font-semibold">Desenvolvedora Web</span> na SS Brasil, 
              atuando em projetos de inovação tecnológica na área portuária. Tenho experiência completa no ciclo de 
              desenvolvimento, desde análise de requisitos até entrega final.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou apaixonada por criar soluções elegantes e funcionais, sempre buscando aprender novas tecnologias 
              e boas práticas de desenvolvimento. Valorizo código limpo, trabalho em equipe e entregas de qualidade.
            </p>
            <div className="pt-4">
              <a
                href="/cv-lara-aguilar.pdf"
                download
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;