import { Skill } from "@/app/shared/types";

const SkillCard = ({ 
  skillKey, 
  skill, 
  isActive, 
  onHover 
}: { 
  skillKey: string; 
  skill: Skill; 
  isActive: boolean; 
  onHover: (key: string | null) => void;
}) => {
  return (
    <div
      className="bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-green-500 transition-all duration-300 cursor-pointer transform hover:scale-105"
      onMouseEnter={() => onHover(skillKey)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`bg-gradient-to-br ${skill.color} p-8 flex justify-center items-center`}>
        {skill.icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-500 mb-4 text-center">{skill.title}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {skill.items.map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;