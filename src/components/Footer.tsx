
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Vanshika</h3>
            <p className="text-gray-400">Web Developer & Designer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4">
              <SocialLinks />
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vanshika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
