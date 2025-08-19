import React from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor,
  Globe,
  Settings
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Frontend',
      description: 'Interfaces modernas y responsivas',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'GSAP', level: 85 }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: 'Backend',
      description: 'APIs robustas y escalables',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GraphQL', level: 78 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: 'Bases de Datos',
      description: 'Gestión eficiente de datos',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 82 },
        { name: 'Supabase', level: 90 }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: 'DevOps & Cloud',
      description: 'Despliegue y escalabilidad',
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 78 },
        { name: 'Nginx', level: 80 }
      ]
    }
  ];

  const tools = [
    'Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress', 'Webpack', 'Vite'
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un conjunto completo de tecnologías modernas para crear 
            soluciones web de extremo a extremo.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Herramientas y Tecnologías
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications or Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              En constante aprendizaje
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              La tecnología evoluciona constantemente, y yo evoluciono con ella. 
              Dedico tiempo regularmente a aprender nuevas tecnologías, explorar 
              mejores prácticas y mantenerme actualizado con las últimas tendencias 
              del desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}