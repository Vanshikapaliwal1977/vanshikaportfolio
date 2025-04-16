
import { Github, Linkedin, Instagram } from "lucide-react";

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLink = ({ platform, url, icon }: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
      aria-label={platform}
    >
      {icon}
    </a>
  );
};

const SocialLinks = () => {
  const socialPlatforms = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/your-username",
      icon: <Linkedin size={20} />,
    },
    {
      platform: "GitHub",
      url: "https://github.com/your-username",
      icon: <Github size={20} />,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/your-username",
      icon: <Instagram size={20} />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialPlatforms.map((social) => (
        <SocialLink
          key={social.platform}
          platform={social.platform}
          url={social.url}
          icon={social.icon}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
