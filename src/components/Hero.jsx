import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      
      <h2 className="text-2xl md:text-3xl text-gray-400">
        Hola, soy
      </h2>
      
      <h1 className="text-5xl md:text-7xl font-bold mt-2">
        Bruno Silvera
      </h1>
      
      <p className="text-3xl md:text-5xl font-bold mt-2">
        <span className="text-cyan-400">Desarrollador Full Stack.</span>
      </p>

      <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
        Transformo ideas en aplicaciones web robustas y escalables.
        Especializado en refactorizar y modernizar proyectos con React, Node.js y Docker.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a 
          href="#proyectos" 
          className="bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-300 transition-colors"
        >
          Ver mis Proyectos
        </a>
        <a 
          href="#contacto" 
          className="border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors"
        >
          Contactarme
        </a>
      </div>

    </section>
  );
};

export default Hero;