import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
  const { projects } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-16 md:py-24 border-t border-dashed border-cream-300 dark:border-navy-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching wireframe */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white inline-block relative">
            Projects
            <span className="block h-1 w-12 bg-teal-500 rounded-full mt-2" />
          </h2>
          <p className="text-navy-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A curated showcase of recent full-stack applications, relational database projects, and frontend interfaces.
          </p>
        </div>

        {/* 3-Column Grid of ProjectCards matching wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
