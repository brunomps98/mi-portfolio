import React from 'react';
// Importamos los íconos que necesitamos
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiJavascript, SiExpress, SiPostgresql, SiMongodb, SiJest, SiTailwindcss, SiCapacitor
} from "react-icons/si";

// --- Base de Datos de Habilidades con Íconos ---
// Ahora cada habilidad es un objeto con su nombre y el componente del ícono
const misHabilidades = [
  { nombre: "React", icono: <FaReact size={40} /> },
  { nombre: "Node.js", icono: <FaNodeJs size={40} /> },
  { nombre: "JavaScript", icono: <SiJavascript size={40} /> },
  { nombre: "Express", icono: <SiExpress size={40} /> },
  { nombre: "PostgreSQL", icono: <SiPostgresql size={40} /> },
  { nombre: "MongoDB", icono: <SiMongodb size={40} /> },
  { nombre: "Docker", icono: <FaDocker size={40} /> },
  { nombre: "Git", icono: <FaGitAlt size={40} /> },
  { nombre: "GitHub", icono: <FaGithub size={40} /> },
  { nombre: "Jest", icono: <SiJest size={40} /> },
  { nombre: "Capacitor", icono: <SiCapacitor size={40} /> },
  { nombre: "Tailwind CSS", icono: <SiTailwindcss size={40} /> },
  { nombre: "HTML5", icono: <FaHtml5 size={40} /> },
  { nombre: "CSS3", icono: <FaCss3Alt size={40} /> },
];
// -------------------------------------

const Skills = () => {
  return (
    <section id="habilidades" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        
        {/* Título de la Sección */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          Habilidades Técnicas
        </h2>
        
        {/* Línea decorativa */}
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

        {/* Grid de Habilidades */}
        <div className="max-w-4xl mx-auto">
          {/* Ahora usamos un grid para un look más ordenado */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
            
            {/* Mapeamos las habilidades y creamos una tarjeta de ícono para cada una */}
            {misHabilidades.map((skill) => (
              <div 
                key={skill.nombre} 
                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-colors"
              >
                <div className="text-cyan-400 mb-2">
                  {skill.icono}
                </div>
                <span className="text-white font-medium text-sm">
                  {skill.nombre}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;