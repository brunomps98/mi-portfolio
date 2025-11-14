import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const SERVICE_ID = "service_8x59k9f";
  const TEMPLATE_ID = "template_4o04zcx";
  const PUBLIC_KEY = "G2zdmOAZUCgHl6Kna";

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    setStatusMessage('Enviando...');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Email enviado con éxito!', result.text);
          setStatusMessage('¡Mensaje enviado con éxito!');
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          console.error('Falló el envío del email.', error.text);
          setStatusMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
      });
  };

  return (
    <section id="contacto" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Contacto</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            ¿Interesado en mi perfil o tienes alguna pregunta? 
            ¡No dudes en contactarme!
          </p>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 text-left">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm p-3 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                placeholder="Tu Nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 text-left">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm p-3 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                placeholder="tu.email@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 text-left">Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm p-3 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
                placeholder="Tu mensaje..."
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>

          {statusMessage && (
            <p className={`mt-4 text-lg ${statusMessage.includes('éxito') ? 'text-green-400' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;