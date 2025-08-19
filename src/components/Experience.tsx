import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'HF Solutions',
      location: 'Santiago, Chile',
      period: '2024 - Presente',
      description: [
        'Lidero el desarrollo de interfaces de usuario para aplicaciones web complejas utilizando React y TypeScript',
        'Cambio de imagen (look and feel) de la portal Viva Leer Copec, mejorando la experiencia del usuario, dinamismo y la accesibilidad',
        'Creación de cuentos digitales interactivos  de altísima calidad para la plataforma de lectura infantil Viva Leer Copec',
        'Desarrollo de nueva aplicación móvil para importante cliente de la industria energética, mejorando la eficiencia operativa',
      ]
    },
    {
      type: 'work',
      title: 'Frontend React Developer',
      company: 'Fintesk',
      location: 'Santiago, Chile',
      period: '2020 -2023',
      description: [
        'Desarrollé interfaces de usuario intuitivas y responsivas utilizando React.js y TypeScript',
        'Implementé pruebas automatizadas con Cypress para garantizar la calidad del código y la experiencia del usuario',
        'Colaboré en la integración de APIs RESTful y GraphQL para mejorar la funcionalidad de las aplicaciones',
        'Participé en la migración de aplicaciones legadas a tecnologías modernas como Next.js y Tailwind CSS',
        'Mejoré el rendimiento de las aplicaciones mediante optimizaciones de código y técnicas de lazy loading',
        'Colaboré con diseñadores UX/UI para implementar diseños atractivos y accesibles',
        'Participé en la planificación y ejecución de sprints ágiles, contribuyendo a la mejora continua del proceso de desarrollo',
        'Mentor de nuevos desarrolladores, ayudándoles a adaptarse al stack tecnológico y las mejores prácticas del equipo'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Facturación.cl',
      location: 'Santiago, Chile',
      period: '2017 - 2019',
      description: [
        'Desarrollé interfaces de usuario utilizando HTML/CSS y JavaScript siguiendo las mejores prácticas de la industria, optimizadas para velocidad y escalabilidad',
        'Utilicé PHP para el desarrollo tanto del front-end como del back-end, integrándolo sin problemas con plantillas HTML para crear aplicaciones web dinámicas e interactivas',
        'Aproveché PostgreSQL como sistema de gestión de bases de datos, diseñando e implementando funciones, procedimientos almacenados y otros componentes a nivel de base de datos para optimizar la recuperación, manipulación y almacenamiento de datos para nuestras aplicaciones web',
        'Implementé soluciones de facturación electrónica cumpliendo con las normativas locales y mejorando la eficiencia del proceso de facturación para nuestros clientes',
        'Colaboré con equipos multidisciplinarios para definir requisitos, diseñar arquitecturas de software y garantizar la entrega de productos de alta calidad',
      ]
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Técnico en Programación y Análisis de Sistemas',
      company: 'Instituto Profesional San Sebastián',
      location: 'Chile',
      period: '2021 - 2023',
      description: [
        'Enfoque en desarrollo de software, estructuras de datos y algoritmos',
        'Proyecto de tesis: Aplicación web para gestión educativa',
      ]
    },
    {
      type: 'education',
      title: 'Ingeniería en Telecomunicaciones, Conectividad y Redes',
      company: 'Universidad Tecnológica de Chile INACAP',
      location: 'Chile',
      period: '2013 - 2017',
      description: [
        'Formación en redes de telecomunicaciones, conectividad y administración de sistemas',
        'Proyecto final: Implementación de una red empresarial segura y escalable en zonas rurales',
      ]
    },
    {
      type: 'education',
      title: 'Diplomado Analista Desarrollador de Aplicaciones de Software',
      company: 'Duoc UC',
      location: 'Chile',
      period: '2017',
      description: [
        'Diplomado en desarrollo de aplicaciones web y escritorio',
        'Enfoque en metodologías ágiles y mejores prácticas de desarrollo',
      ]
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    // Simple sorting by year (extracting year from period)
    const getYear = (period: string) => {
      const years = period.match(/\d{4}/g);
      return years ? Math.max(...years.map(Number)) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experiencia y Educación
          </h2>
          <p className="text-xl text-gray-600">
            Mi trayectoria profesional y formación académica en el mundo del desarrollo web.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 md:left-1/2 md:transform md:-translate-x-px"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md md:left-1/2 md:transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          item.type === 'work' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-green-100 text-green-600'
                        }`}>
                          {item.type === 'work' ? (
                            <Briefcase className="w-5 h-5" />
                          ) : (
                            <GraduationCap className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 font-semibold">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-600 text-sm flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Quieres conocer más sobre mi experiencia?
            </h3>
            <p className="text-gray-600 mb-6">
              Descarga mi CV completo o conectemos para discutir oportunidades de colaboración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://drive.google.com/file/d/1Kl-1tKxL_ekaBKuHFdYCfIYB-1UAzQ8p/view" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Descargar CV
                </button>
              </a>
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Contáctame
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}