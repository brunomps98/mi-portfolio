import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com/brunomps98" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={30} /> 
          </a>
          <a 
            href="https://www.linkedin.com/in/bruno-silvera-21b197153/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={30} /> 
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bruno Silvera. Todos los derechos reservados.
        </p> 
        
        <p className="text-xs mt-1">
          Construido con React y Tailwind CSS.
        </p>

      </div>
    </footer>
  );
};

export default Footer;