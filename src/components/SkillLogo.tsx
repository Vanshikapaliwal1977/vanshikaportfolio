
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SkillLogoProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  iconPath: string;
  className?: string;
}

const SkillLogo = ({ name, iconPath, className, ...props }: SkillLogoProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center animate-fade-in",
        className
      )}
      {...props}
    >
      <div className="bg-white p-4 rounded-lg shadow-md mb-3 w-16 h-16 flex items-center justify-center transition-transform hover:scale-110">
        <img src={iconPath} alt={name} className="w-10 h-10" />
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default SkillLogo;
