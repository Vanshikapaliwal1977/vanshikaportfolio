
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className, ...props }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-16", className)} {...props}>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
