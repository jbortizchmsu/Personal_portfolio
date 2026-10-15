import React, { useState } from 'react';
import { Code2, Database, Layout, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const { personal } = portfolioData;
  const { ref, isVisible } = useScrollReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 md:py-24 border-t border-dashed border-cream-300 dark:border-navy-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white inline-block relative">
            About
            <span className="block h-1 w-12 bg-teal-500 rounded-full mt-2" />
          </h2>
        </div>

        {/* Section Content: Image on left, Bio on right (matches wireframe) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="md:col-span-5">
            <div className="relative group overflow-hidden rounded-2xl bg-cream-100 dark:bg-navy-900 border border-cream-200 dark:border-navy-800 shadow-soft">
              {!imgError ? (
                <img
                  src={personal.aboutImage}
                  alt={`About ${personal.name}`}
                  onError={() => setImgError(true)}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                /* Fallback SVG illustration */
                <div className="w-full h-80 flex flex-col items-center justify-center bg-gradient-to-br from-cream-100 to-cream-200 dark:from-navy-800 dark:to-navy-900 text-navy-400 dark:text-teal-300 p-8 text-center">
                  <Layout className="w-16 h-16 mb-3 text-teal-500" />
                  <span className="font-heading font-semibold text-lg text-navy-900 dark:text-cream-200">
                    Developer & Creator
                  </span>
                  <span className="text-xs text-navy-500 dark:text-slate-400 mt-1">
                    Image Placeholder
                  </span>
                </div>
              )}

              {/* Subtle glass overlay corner badge */}
              <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg text-xs font-semibold text-navy-900 dark:text-cream-200 border border-cream-300 dark:border-teal-500/20 shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                <span>Crafting Digital Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Paragraphs & Highlights */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-navy-800/90 dark:text-slate-300 leading-relaxed">
              {Array.isArray(personal.bio) ? (
                personal.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{personal.bio}</p>
              )}
            </div>

            {/* Quick value props / highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-cream-200 dark:border-navy-800 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-300">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white text-sm">
                    Frontend Engineering
                  </h3>
                  <p className="text-xs text-navy-600 dark:text-slate-400 mt-0.5">
                    Interactive, semantic, and performant React applications.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-cream-200 dark:border-navy-800 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-300">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white text-sm">
                    Database Architecture
                  </h3>
                  <p className="text-xs text-navy-600 dark:text-slate-400 mt-0.5">
                    Relational schema design, normalization & query speed.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
