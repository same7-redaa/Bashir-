import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-lg opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            
            {/* Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};


const Footer: React.FC = () => {
  const { ref: footerRef, isVisible: isFooterVisible } = useScrollAnimation();

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-400 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div 
        ref={footerRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ease-out ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Brand Section */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Bashir Garguom
          </h3>
          <p className="text-gray-300 max-w-md mx-auto">
            Creating compelling visual narratives that inspire and engage audiences worldwide.
          </p>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 delay-400 ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/20 group-hover:to-cyan-400/20 transition-all duration-300"></div>
              
              {/* Icon */}
              <link.icon className="w-6 h-6 relative z-10 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"/>
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className={`w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6 transition-all duration-1000 delay-600 ${
          isFooterVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>

        {/* Copyright */}
        <div className={`text-gray-500 text-sm transition-all duration-1000 delay-800 ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p>© 2025 Bashir Garguom. All Rights Reserved.</p>
          <p className="mt-2">Crafted with passion for visual storytelling</p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;