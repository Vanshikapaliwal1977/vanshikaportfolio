
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
    { name: "HTML", iconPath: "/images/html.svg" },
    { name: "CSS", iconPath: "/images/css.svg" },
    { name: "JavaScript", iconPath: "/images/javascript.svg" },
    { name: "ReactJS", iconPath: "/images/react.svg" },
    { name: "TailwindCSS", iconPath: "/images/tailwind.svg" },
  ];

  const backendSkills = [
    { name: "NodeJS", iconPath: "/images/nodejs.svg" },
    { name: "Express", iconPath: "/images/express.svg" },
  ];

  const databaseSkills = [
    { name: "MongoDB", iconPath: "/images/mongodb.svg" },
    { name: "Supabase", iconPath: "/images/supabase.svg" },
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
