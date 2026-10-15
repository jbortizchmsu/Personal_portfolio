import React, { useState } from 'react';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

/**
 * ProjectCard Component
 * Displays a single project with screenshot, title, description, tech tags, and action buttons.
 * Implements subtle hover lift effect and smooth transitions.
 */
export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-navy-900 rounded-2xl overflow-hidden border border-cream-200/80 dark:border-navy-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300">
      
      {/* Screenshot / Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-cream-100 dark:bg-navy-800">
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          /* Fallback Screenshot placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center text-navy-400 dark:text-teal-300 bg-cream-100 dark:bg-navy-850 p-4">
            <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
            <span className="text-xs font-medium uppercase tracking-wider">Screenshot</span>
          </div>
        )}

        <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Tech Stack Tags using Cream and Teal */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cream-200/70 dark:bg-navy-800 text-navy-900 dark:text-teal-300 border border-cream-300 dark:border-teal-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-navy-700/85 dark:text-slate-300 leading-relaxed flex-grow mb-6">
          {project.description}
        </p>

        {/* Card Footer: 'View' button matching wireframe */}
        <div className="pt-4 border-t border-cream-200 dark:border-navy-800 flex items-center justify-between mt-auto">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400 font-medium text-xs sm:text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label={`View ${project.title} project`}
          >
            <span>View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-navy-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={`View ${project.title} source code on GitHub`}
              title="Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </article>
  );
}
