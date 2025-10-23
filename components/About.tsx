import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceItem: React.FC<{ title: string; company: string; period: string; children: React.ReactNode }> = ({ title, company, period, children }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-blue-400">{title}</h4>
    <p className="text-gray-400 font-medium">{company} | {period}</p>
    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
      {children}
    </ul>
  </div>
);

const About: React.FC = () => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: isContentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div 
          ref={contentRef}
          className={`flex flex-col lg:flex-row items-center justify-center gap-12 transition-all duration-1200 ease-out ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${
            isContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 blur-lg opacity-75"></div>
            <img 
              src="/Generated Image October.png" 
              alt="Bashir Garguom"
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl object-cover border-4 border-black"
            />
          </div>
          
          <div className={`max-w-3xl text-center lg:text-left transition-all duration-1000 delay-500 ${
            isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <p className="text-xl font-semibold text-blue-400">Higher Diploma in Information Technology</p>
                <p className="text-gray-400">Ain Shams Higher Institute – Libya</p>
                <p className="text-gray-500">Graduated: October 2023</p>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
                <ExperienceItem title="Photographer, Filmmaker, Video Editor" company="Baseline Agency" period="2024 – Present">
                  <li>Producing commercial visual content and covering events.</li>
                  <li>Collaborating with creative teams in photography and editing.</li>
                </ExperienceItem>
                <ExperienceItem title="Photographer and Visual Content Creator" company="More Projects" period="2021 – Present">
                  <li>Documented training and events for WHO.</li>
                  <li>Created documentary video content for WFP.</li>
                  <li>Worked with diverse clients like Geant Hypermarket & Birniq Airways.</li>
                </ExperienceItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;