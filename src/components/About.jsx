import React from 'react';

const About = () => {
  return (
    <section id="acerca-de-mi" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Acerca de Mí
        </h2>
        
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>

        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Soy un desarrollador apasionado por la tecnología y la resolución de problemas. 
            Mi formación como Técnico Superior en Programación me ha dado una base sólida, 
            pero mi verdadera pasión es convertir código existente en aplicaciones modernas, eficientes y escalables.
          </p>
          <p>
            Tuve la oportunidad de liderar la refactorización completa de un proyecto en mi práctica profesionalizante, 
            llevando una aplicación monolítica a una arquitectura Full Stack moderna con React, Node.js y Docker. Disfruto el desafío de optimizar el rendimiento y asegurar la calidad del código mediante testing.
          </p>
          <p>
            Estoy siempre aprendiendo, actualmente explorando nuevas arquitecturas de backend y 
            buscando mi próxima oportunidad para construir o reconstruir algo increíble.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;