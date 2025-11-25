import { Project } from "@/app/shared/types";
import ProjectCard from "./ui/ProjectCard";

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gerenciamento Portuário',
      category: 'FULL STACK',
      description: 'Plataforma de inovação tecnológica para gestão portuária com análise de requisitos, prototipação e desenvolvimento completo.',
      tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
      image: '/placeholder-port.jpg'
    },
    {
      id: 2,
      title: 'Sistema de Gerenciamento de Estacionamento',
      category: 'BACK END',
      description: 'API REST robusta para controle de estacionamento rotativo com autenticação e processamento em tempo real.',
      tech: ['Node.js', 'PostgreSQL', 'Docker'],
      image: '/placeholder-parking.jpg'
    },
    {
      id: 3,
      title: 'Dashboard Administrativo Empresarial',
      category: 'FRONT END',
      description: 'Interface administrativa completa com visualização de dados, relatórios e gerenciamento de usuários.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/placeholder-dashboard.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-green-500">_</span>Projetos<span className="text-green-500">_</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Conheça alguns dos meus trabalhos recentes</p>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/projetos"
            className="inline-block border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 font-semibold px-8 py-3 rounded-lg transition"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
