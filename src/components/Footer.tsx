import React from 'react';
import { Brain, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-8 w-8 text-primary-400 mr-2" />
            <span className="text-xl font-bold">Hithesh S</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#project" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Project
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hithesh S. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;