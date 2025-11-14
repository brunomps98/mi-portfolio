import React, { useState } from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      
      <div className="container mx-auto flex justify-between items-center">
        
        <a href="#inicio" className="text-2xl font-bold text-cyan-400" onClick={closeMenu}>
          Bruno Silvera
        </a>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#inicio" className="hover:text-cyan-400">Inicio</a></li>
          <li><a href="#acerca-de-mi" className="hover:text-cyan-400">Acerca de mí</a></li>
          <li><a href="#proyectos" className="hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#habilidades" className="hover:text-cyan-400">Habilidades</a></li>
          <li><a href="#contacto" className="hover:text-cyan-400">Contacto</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
      </div>
      <ul className={`
        md:hidden flex flex-col items-center space-y-4
        absolute w-full left-0 bg-gray-800
        transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-screen py-6' : 'max-h-0'}
        overflow-hidden
      `}>
        <li><a href="#inicio" className="hover:text-cyan-400" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#acerca-de-mi" className="hover:text-cyan-400" onClick={closeMenu}>Acerca de mí</a></li>
        <li><a href="#proyectos" className="hover:text-cyan-400" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#habilidades" className="hover:text-cyan-400" onClick={closeMenu}>Habilidades</a></li>
        <li><a href="#contacto" className="hover:text-cyan-400" onClick={closeMenu}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;