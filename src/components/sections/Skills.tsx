
import SkillLogo from "../SkillLogo";
import SectionTitle from "../SectionTitle";

interface SkillCategoryProps {
  title: string;
  skills: { name: string; iconPath: string }[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillLogo 
            key={skill.name} 
            name={skill.name} 
            iconPath={skill.iconPath} 
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", iconPath: "/placeholder.svg" },
    { name: "CSS", iconPath: "/placeholder.svg" },
    { name: "JavaScript", iconPath: "/placeholder.svg" },
    { name: "ReactJS", iconPath: "/placeholder.svg" },
    { name: "TailwindCSS", iconPath: "/placeholder.svg" },
  ];

  const backendSkills = [
    { name: "NodeJS", iconPath: "/placeholder.svg" },
    { name: "Express", iconPath: "/placeholder.svg" },
  ];

  const databaseSkills = [
    { name: "MongoDB", iconPath: "/placeholder.svg" },
    { name: "Supabase", iconPath: "/placeholder.svg" },
  ];

  return (
    <div className="container mx-auto px-6">
      <SectionTitle title="Skills" />

      <div className="max-w-5xl mx-auto">
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Database" skills={databaseSkills} />
      </div>
    </div>
  );
};

export default Skills;
