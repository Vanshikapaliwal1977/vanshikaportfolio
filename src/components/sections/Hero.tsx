
import SocialLinks from "@/components/SocialLinks";
import ResumeButton from "@/components/ResumeButton";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hey, I am <span className="text-indigo-600">Vanshika</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            A passionate web developer specializing in building modern, responsive web applications with ReactJS and NodeJS.
          </p>
          <div className="mb-8">
            <SocialLinks />
          </div>
          <ResumeButton />
        </div>
        <div className="md:w-2/5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full p-4 shadow-lg">
            <div className="rounded-full overflow-hidden aspect-square bg-gray-200">
              {/* Will be replaced with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
