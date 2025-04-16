
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <SectionTitle title="About Me" />
      
      <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6 animate-fade-in">
        <p>
          Hello! I'm Vanshika, a dedicated web developer passionate about creating
          interactive and responsive web applications. I enjoy turning complex problems
          into simple, beautiful, and intuitive designs.
        </p>
        <p>
          My journey in web development started during my university years, and I've
          been building my skills in both frontend and backend technologies ever since.
          I'm particularly drawn to the React ecosystem and modern JavaScript.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies, writing
          technical blogs, or contributing to open-source projects. I'm always open to
          new opportunities and collaborations.
        </p>
      </div>
    </div>
  );
};

export default About;
