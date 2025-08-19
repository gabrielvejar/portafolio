import React from 'react';
import { Code, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/gabrielvejar',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gabrielvejar/',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:g.vejarperez@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Gabriel Vejar DevPortfolio</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Desarrollador Full Stack apasionado por crear experiencias web 
                extraordinarias que combinan diseño elegante con código limpio 
                y funcionalidad robusta.
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navegación</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400">Email:</p>
                  <a
                    href="mailto:g.vejarperez@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    g.vejarperez@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Teléfono:</p>
                  <a
                    href="tel:+56934941393"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    +56 9 3494 1393
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Ubicación:</p>
                  <p className="text-white">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Gabriel Vejar DevPortfolio.</span>
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>en Chile</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Desarrollado con React + TypeScript
              </span>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="Volver al inicio"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}