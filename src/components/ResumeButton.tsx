
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface ResumeButtonProps {
  label?: string;
  className?: string;
}

const ResumeButton = ({ 
  label = "Download Resume", 
  className 
}: ResumeButtonProps) => {
  return (
    <Button 
      className={`bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 ${className}`}
    >
      <FileDown className="mr-2 h-4 w-4" /> {label}
    </Button>
  );
};

export default ResumeButton;
