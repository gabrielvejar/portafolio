import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Código Limpio',
      description: 'Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas de la industria.'
    },
    {
      icon: <Palette className="w-8 h-8 text-green-600" />,
      title: 'Diseño Centrado en el Usuario',
      description: 'Creo interfaces intuitivas que priorizan la experiencia del usuario y la accesibilidad.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: 'Rendimiento Optimizado',
      description: 'Desarrollo aplicaciones rápidas y eficientes utilizando las últimas tecnologías y optimizaciones.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Pasión por la Innovación',
      description: 'Me encanta explorar nuevas tecnologías y encontrar soluciones creativas a problemas complejos.'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre mí
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Soy un desarrollador full stack apasionado por crear soluciones digitales 
                  que impacten positivamente en la vida de las personas. Con más de 9 años 
                  de experiencia en el desarrollo web, he trabajado con startups y empresas 
                  consolidadas para llevar sus visiones al mundo digital.
                </p>
                <p>
                  Mi enfoque se centra en combinar la funcionalidad robusta con diseños 
                  elegantes y experiencias de usuario excepcionales. Me especializo en 
                  tecnologías modernas como Next.js, Node.js, TypeScript y bases de datos 
                  tanto SQL como NoSQL.
                </p>
                <p>
                  Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, 
                  contribuyendo a proyectos open source, o disfrutando de un buen café 
                  mientras leo sobre las últimas tendencias en desarrollo web.
                </p>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-500">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">8+</div>
                <div className="text-sm text-gray-500">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-500">Clientes satisfechos</div>
              </div>
            </div> */}
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
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