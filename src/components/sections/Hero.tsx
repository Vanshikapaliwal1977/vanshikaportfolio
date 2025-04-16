
import SocialLinks from "@/components/SocialLinks";
import ResumeButton from "@/components/ResumeButton";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hey, I am <span className="text-indigo-600">Vanshika</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate web developer specializing in building modern, responsive web applications with ReactJS and NodeJS.
          </p>
          <div className="mb-8 flex justify-center">
            <SocialLinks />
          </div>
          <div className="flex justify-center">
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
