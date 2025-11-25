import { Project } from "@/app/shared/types";
import ProjectCard from "./ui/ProjectCard";

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SafeSurvey - Solução para leitura de calado e arqueação de navios',
      category: 'FULL STACK',
      description: 'Projeto de inovação tecnológica na área portuária. Desenvolvimento ponta a ponta de uma aplicação web para otimização da leitura de calado e arqueação de navios, utilizando tecnologias modernas e práticas ágeis.',
      tech: ['ReactJS', 'Next.js', 'Typescript', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'Git', 'CI/CD', 'Jest', 'Testes Automatizados'],
      image: '/projects/safesurvey.png',
      externalLink: 'https://ssbrasil.com.br/safe-survey/'
    },
    {
      id: 2,
      title: 'Watchman - Leitor de notas fiscais',
      category: 'FRONT-END',
      description: 'Projeto desenvolvido para automatizar a leitura e extração de dados de notas fiscais eletrônicas (NF-e), melhorando a eficiência e precisão no processamento de documentos fiscais.',
      tech: ['VueJS', 'Typescript', 'TailwindCSS'],
      image: '/projects/watchman.png',
      externalLink: 'https://github.com/laraguilar/watchman-front'
    },
    {
      id: 3,
      title: 'Amorim Guincho - Empresa de guincho',
      category: 'FRONT-END',
      description: 'Landing page responsiva para empresa de guincho, desenvolvida com foco em usabilidade e design moderno para atrair e converter clientes.',
      tech: ['ReactJS', 'Typescript', 'TailwindCSS', 'Git', 'CI/CD', 'Jest'],
      image: '/projects/amorim-guincho.png',
      externalLink: 'https://amorimguincho.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-green-500">{"{"}</span> Projetos <span className="text-green-500">{"}"}</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Conheça alguns dos meus trabalhos</p>

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="/projetos"
            className="inline-block border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 font-semibold px-8 py-3 rounded-lg transition"
          >
            Ver todos os projetos
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
