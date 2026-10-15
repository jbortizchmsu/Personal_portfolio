import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Skills() {
  const { skills } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 md:py-24 border-t border-dashed border-cream-300 dark:border-navy-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching wireframe */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white inline-block relative">
            Skills
            <span className="block h-1 w-12 bg-teal-500 rounded-full mt-2" />
          </h2>
          <p className="text-navy-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Key tools, frameworks, and core technical competencies I utilize across development workflows.
          </p>
        </div>

        {/* Skill Badges / Chips Grid matching wireframe pill layout */}
        <div className="flex flex-wrap gap-3 sm:gap-4 max-w-4xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 border-navy-900 dark:border-teal-300 bg-white dark:bg-navy-900 text-navy-900 dark:text-cream-100 font-medium text-sm sm:text-base shadow-sm hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-300 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <CheckCircle2 className="w-4 h-4 text-teal-500 group-hover:scale-110 transition-transform" />
              <span>{skill.name}</span>
              {skill.level && (
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-cream-200 text-navy-900 dark:bg-navy-800 dark:text-teal-300 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {skill.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
