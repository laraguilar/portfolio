'use client';
import { Code2, Database, Infinity } from "lucide-react";
import SkillCard from "./ui/SkillCard";
import { useState } from "react";
import { Skill } from "../shared/types";

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills: Record<string, Skill> = {
    frontend: {
      title: 'FRONT END',
      icon: <Code2 className="w-12 h-12" />,
      color: 'from-green-400 to-green-600',
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Figma', 'Prototipação', 'UI/UX', 'Design Responsivo']
    },
    backend: {
      title: 'BACK END & BD',
      icon: <Database className="w-12 h-12" />,
      color: 'from-green-500 to-green-700',
      items: ['Node.js', 'NestJS', 'Python', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB']
    },
    devops: {
      title: 'DEVOPS & TESTES',
      icon: <Infinity className="w-12 h-12" />,
      color: 'from-green-600 to-green-800',
      items: ['Docker', 'AWS', 'CI/CD', 'Jest', 'Testes Unitários', 'Testes de Integração']
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-green-500">&lt;</span> Habilidades <span className="text-green-500">/&gt;</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, skill]) => (
            <SkillCard
              key={key}
              skillKey={key}
              skill={skill}
              isActive={activeSkill === key}
              onHover={setActiveSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;