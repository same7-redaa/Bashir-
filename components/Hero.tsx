import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: isImageVisible } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-black via-gray-900 to-black relative pt-24 pb-12 md:pt-0 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            ref={heroRef}
            className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className={`text-blue-500 font-semibold tracking-wider transition-all duration-700 delay-200 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              HELLO!
            </span>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold my-4 leading-tight transition-all duration-900 delay-400 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              I'm Bashir Garguom
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">Filmmaker & Visual Storyteller</span>
            </h1>
            <p className={`text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 transition-all duration-1000 delay-600 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              I craft compelling visual narratives through cinematography and editing, bringing stories to life for commercial brands and international organizations.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-800 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
                 <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                    Let's talk
                </a>
            </div>
             <div className={`flex justify-center md:justify-start space-x-6 mt-8 transition-all duration-1000 delay-1000 ${
               isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
             }`}>
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 ${
                    isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${1200 + index * 100}ms` }}
                >
                  <link.icon className="w-8 h-8"/>
                </a>
              ))}
            </div>
          </div>

          <div 
            ref={imageRef}
            className={`md:w-1/2 flex justify-center mt-10 md:mt-0 transition-all duration-1200 ease-out ${
              isImageVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div className="relative">
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl transition-all duration-1500 ${
                isImageVisible ? 'animate-pulse opacity-100' : 'opacity-0'
              }`}></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-3xl p-2 bg-black">
                <img
                  src="/Generated Image October.png"
                  alt="Bashir Garguom"
                  className={`w-full h-full object-cover rounded-2xl transition-all duration-1000 ${
                    isImageVisible ? 'scale-100' : 'scale-110'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;