import React, { useState } from 'react';
import { ArrowRight, Download, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  const { personal } = portfolioData;
  const { ref, isVisible } = useScrollReveal();
  const [imgError, setImgError] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-[82vh] flex items-center py-12 md:py-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-block px-3.5 py-1 rounded-full bg-cream-200/80 text-navy-900 border border-cream-300 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20 text-xs sm:text-sm font-semibold tracking-wide">
              👋 Available for Opportunities
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.15]">
                {personal.headline}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-teal-600 dark:text-teal-400">
                {personal.role}
              </p>
              <p className="text-base sm:text-lg text-navy-700/80 dark:text-slate-300 max-w-2xl leading-relaxed pt-1">
                {personal.heroTagline}
              </p>
            </div>

            {/* CTA Buttons (Exactly matching wireframe: 'View projects' and 'Download resume') */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400 font-medium text-sm sm:text-base shadow-sm hover:shadow-soft transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>View projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Jobert_Ortiz_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-navy-900 dark:border-teal-300 text-navy-900 dark:text-slate-100 hover:bg-cream-200/60 dark:hover:bg-navy-800/60 font-medium text-sm sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <Download className="w-4 h-4 text-teal-600 dark:text-teal-300" />
                <span>Download resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Profile Photo (Matching Wireframe circle 'Photo') */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Outer decorative ring using palette: #170C79 -> #56B6C6 -> #8ACBD0 */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-gradient-to-tr from-navy-900 via-teal-500 to-teal-300 dark:from-teal-400 dark:via-teal-300 dark:to-cream-200 shadow-soft-lg group-hover:shadow-glow transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-cream-100 dark:bg-navy-900 border-4 border-white dark:border-navy-950 flex items-center justify-center relative">
                  {!imgError ? (
                    <img
                      src={personal.photo}
                      alt={`${personal.name} profile`}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  ) : (
                    /* Fallback avatar SVG if external image fails */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cream-100 to-cream-200 dark:from-navy-800 dark:to-navy-900 text-navy-400 dark:text-teal-300">
                      <User className="w-24 h-24 mb-1" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Photo</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status indicator badge */}
              <div className="absolute bottom-2 right-4 bg-cream-50 dark:bg-navy-900 border-2 border-teal-500 rounded-full px-3 py-1 text-xs font-medium text-navy-900 dark:text-cream-200 shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span>Ready to build</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
