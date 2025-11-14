import React from 'react';
import ProjectCard from './ProjectCard'; 

const misProyectos = [
  {
    title: "Control de Flota SPER",
    description: "Aplicación Full Stack para la gestión de flota vehicular. Refactoricé una app monolítica a una arquitectura moderna con API REST, base de datos y despliegue en contenedores Docker.",
    imageUrl: "/images/control-de-flota-mockup.jpg",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Capacitor", "Jest"],
    githubUrl: "https://github.com/brunomps98/Control-de-Flota-SPER",
    deployUrl: "https://control-de-flota-sper.vercel.app",
  },

];

const Projects = () => {
  return (
    <section id="proyectos" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold mb-4 text-center">
          Mis Proyectos
        </h2>
        
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {misProyectos.map((proyecto) => (
            <ProjectCard
              key={proyecto.title}
              title={proyecto.title}
              description={proyecto.description}
              imageUrl={proyecto.imageUrl}
              techStack={proyecto.techStack}
              githubUrl={proyecto.githubUrl}
              deployUrl={proyecto.deployUrl}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;