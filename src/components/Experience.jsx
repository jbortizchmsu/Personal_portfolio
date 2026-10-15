import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Experience() {
  const { timeline } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 md:py-24 border-t border-dashed border-cream-300 dark:border-navy-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching wireframe */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white inline-block relative">
            Experience & education
            <span className="block h-1 w-12 bg-teal-500 rounded-full mt-2" />
          </h2>
          <p className="text-navy-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            My professional career path, software engineering roles, and academic achievements.
          </p>
        </div>

        {/* Vertical Timeline List matching wireframe's horizontal split & dotted divider structure */}
        <div className="space-y-0 divide-y divide-dotted divide-cream-300 dark:divide-navy-700">
          {timeline.map((item) => (
            <div
              key={item.id}
              className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              {/* Left Column: Dates & Type */}
              <div className="md:col-span-4 flex items-center md:items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cream-200/80 text-navy-900 dark:bg-navy-800 dark:text-teal-300 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-200 shadow-sm shrink-0">
                  {item.type === 'Education' ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="text-xs text-navy-500 dark:text-slate-400 mt-0.5">
                    {item.type}
                  </div>
                </div>
              </div>

              {/* Right Column: Role, Organization & Description */}
              <div className="md:col-span-8 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.role}
                </h3>
                <div className="text-sm font-medium text-navy-700 dark:text-slate-300">
                  {item.organization}
                </div>
                <p className="text-sm sm:text-base text-navy-600 dark:text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
