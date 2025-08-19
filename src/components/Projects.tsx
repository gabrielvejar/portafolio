import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Viva Leer Copec',
      description: 'Plataforma de Viva Leer Copec, programa de fomento lector implementado por Copec desde 2011, comprometidos con la lectura en Chile.',
      image: '/assets/vlc.png',
      technologies: ['React', 'Node.js', 'TailwindCSS', 'Wordpress', 'TypeScript'],
      liveUrl: 'https://vivaleercopec.cl/',
      featured: true
    },
    {
      title: 'Fintesk CRM',
      description: 'Un Gestión de Relaciones con Clientes (Customer Relationship Management) enfocado en las PYMES de Chile y Latinoamérica, con funcionalidades avanzadas de gestión de clientes y ventas.',
      image: '/assets/fintesk.png',
      technologies: ['React', 'Python', 'MongoDB', 'Redux', 'Cypress'],
      liveUrl: 'https://fintesk.com/',
      featured: true
    },
    {
      title: 'Dinos Dinosaurio',
      description: 'Viva Leer Copec. Cuento digital para niños, con animaciones, narración de voz y actividades interactivas, diseñado para fomentar la lectura y la creatividad.',
      image: '/assets/dino.png',
      technologies: ['GSAP', 'Javascript', 'CSS', 'HTML'],
      liveUrl: 'https://vivaleercopec.cl/cuentos/cuento/dinos-dinosaurio/',
      featured: false
    },
    {
      title: 'Ilusia Store',
      description: 'Tienda online de productos de todo tipo, con un enfoque en la experiencia del usuario y el diseño atractivo.',
      image: '/assets/ilusia.png',
      technologies: ['Angular', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://angular-signal-store.vercel.app/',
      featured: false
    },
    {
      title: 'La Ciudad en que Nací',
      description: 'Viva Leer Copec. Cuento digital para niños, con animaciones, narración de voz y actividades interactivas, diseñado para fomentar la lectura y la creatividad.',
      image: '/assets/ciudad.jpg',
      technologies: ['GSAP', 'Javascript', 'CSS', 'HTML'],
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Rick and Morty 100 years',
      description: 'Aplicación web que muestra información de los personajes, episodios y ubicaciones de la serie Rick and Morty, con un diseño moderno y responsivo.',
      image: '/assets/rickandmorty.png',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS'],
      liveUrl: 'https://rickandmortynext13.vercel.app/',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes que demuestran mis habilidades 
            en desarrollo full stack y diseño de experiencias de usuario.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proyectos Destacados</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    {/* {project.githubUrl && <a
                      href={project.githubUrl}
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>} */}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Otros Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver proyecto
                    </a>
                    {/* {project.githubUrl && <a
                      href={project.githubUrl}
                      className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-gray-600" />
                    </a>} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}