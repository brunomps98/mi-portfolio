import React from 'react';

const ProjectCard = ({ title, description, imageUrl, techStack, githubUrl, deployUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img 
        src={imageUrl} 
        alt={`Vista previa de ${title}`} 
        className="w-full h-48 object-cover" 
      />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Tecnologías Usadas:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-700 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-start gap-4 mt-auto pt-4">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-cyan-400 text-cyan-400 font-bold py-2 px-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors"
          >
            Ver Código
          </a>
          <a 
            href={deployUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Ver Deploy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;