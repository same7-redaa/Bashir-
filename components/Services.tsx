import React from 'react';
import { SERVICES } from '../constants';
import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationMultiple();

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-1c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              What I <span className="text-white">Do</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Specialized in creating compelling visual narratives that captivate audiences and deliver powerful messages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              ref={setRef(index)}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl text-center transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-3 border border-gray-700/50 hover:border-blue-500/50 ${
                isVisible(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative flex justify-center mb-8">
                <div className="relative">
                  {/* Icon Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150"></div>
                  
                  {/* Icon Circle */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-full transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:scale-110 border-2 border-gray-600 group-hover:border-transparent">
                    <service.icon className="w-12 h-12 text-blue-400 transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
            <span className="text-gray-300">Ready to bring your vision to life?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105">
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;