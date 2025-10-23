import React from 'react';
import { SKILLS, LANGUAGES } from '../constants';
import type { Skill } from '../types';
import { useInView } from '../hooks/useInView';

const SkillBar: React.FC<{ skill: Skill; inView: boolean }> = ({ skill, inView }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-blue-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: inView ? `${skill.percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">My <span className="text-blue-500">Skills</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div ref={ref} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6">Technical Skills</h3>
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} skill={skill} inView={inView} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6">Languages</h3>
            <div className="bg-gray-800 rounded-lg p-6">
                <ul className="space-y-4">
                {LANGUAGES.map((lang) => (
                    <li key={lang.name} className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{lang.name}</span>
                        <span className="px-3 py-1 text-sm font-semibold text-blue-300 bg-blue-900/50 rounded-full">{lang.level}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;