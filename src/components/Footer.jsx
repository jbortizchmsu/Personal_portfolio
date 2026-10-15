import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  // Helper to render matching Lucide icon
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="py-8 border-t border-cream-200 dark:border-navy-800 bg-cream-50/70 dark:bg-navy-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Social Links matching wireframe 'Social links: LinkedIn / GitHub / Email' */}
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm font-medium text-navy-500 dark:text-slate-400">
              Social links:
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-navy-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded p-1"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Copyright matching wireframe '(c) Your Name' */}
          <div className="text-xs sm:text-sm text-navy-500 dark:text-slate-400">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
