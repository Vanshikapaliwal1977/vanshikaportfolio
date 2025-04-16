
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "../SectionTitle";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 hover:text-indigo-600"
          >
            <Github className="w-4 h-4 mr-1" />
            <span className="text-sm">Code</span>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 hover:text-indigo-600"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, cart functionality, and payment integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality.",
      image: "/placeholder.svg",
      tags: ["React", "TailwindCSS", "Firebase"],
      githubUrl: "https://github.com/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that fetches real-time data from a weather API.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "CSS", "API Integration"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <SectionTitle title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          These are sample projects. Actual project data will be fetched from Supabase once integrated.
        </p>
      </div>
    </div>
  );
};

export default Projects;
