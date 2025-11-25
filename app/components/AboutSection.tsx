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
            <div className="relative w-full max-w-md">
              <img
                src="/developer2.png"
                alt="Developer illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Atuo no desenvolvimento <span className="font-semibold">end-to-end</span>, desde a criação de interfaces e componentes reutilizáveis até APIs REST, integrações entre sistemas e otimizações de performance. Gosto de transformar requisitos complexos em soluções claras, eficientes e escaláveis.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Acredito que <span className="text-green-500 font-semibold">tecnologia é meio, não fim  </span>, e a linguagem é apenas uma ferramenta para resolver problemas reais. Busco sempre escrever código limpo, evoluir minhas práticas e contribuir de forma colaborativa para entregar produtos de qualidade.
            </p>
            <div className="pt-4">
              <a
                href="/CV-LARA-AGUILAR-Full-Stack-Pleno.pdf"
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

