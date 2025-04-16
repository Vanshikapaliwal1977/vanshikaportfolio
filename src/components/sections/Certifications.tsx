
import { Eye } from "lucide-react";
import SectionTitle from "../SectionTitle";

interface CertificationCardProps {
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  link?: string;
}

const CertificationCard = ({ title, issuer, issueDate, image, link }: CertificationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 overflow-hidden relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform group-hover:scale-105"
        />
        {link && (
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Certificate
            </a>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{issuer}</p>
        <p className="text-sm text-gray-500">Issued: {issueDate}</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      issueDate: "June 2022",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      issuer: "Coursera",
      issueDate: "September 2022",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: 3,
      title: "MongoDB for JavaScript Developers",
      issuer: "MongoDB University",
      issueDate: "January 2023",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <SectionTitle title="Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            title={certification.title}
            issuer={certification.issuer}
            issueDate={certification.issueDate}
            image={certification.image}
            link={certification.link}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          These are sample certifications. Actual certification data will be fetched from Supabase once integrated.
        </p>
      </div>
    </div>
  );
};

export default Certifications;
