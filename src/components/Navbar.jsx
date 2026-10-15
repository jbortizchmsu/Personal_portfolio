import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { personal, navLinks } = portfolioData;
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140; // Offset for sticky navbar

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // If at top
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-sm border-b border-cream-200 dark:border-navy-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name (Styled to match wireframe's framed name box) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center px-3.5 py-1.5 border-2 border-navy-900 dark:border-teal-300 rounded-md font-heading font-bold text-base sm:text-lg tracking-tight text-navy-900 dark:text-cream-100 hover:bg-navy-900 hover:text-white dark:hover:bg-teal-500 dark:hover:text-navy-950 dark:hover:border-teal-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label={`${personal.name} home`}
          >
            <span>{personal.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-teal-600 dark:text-teal-400 font-semibold'
                      : 'text-navy-800 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-500 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}

            {/* Dark / Light Mode Toggle */}
            <div className="ml-2 pl-2 border-l border-cream-300 dark:border-navy-800">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-navy-800 dark:text-slate-200 hover:bg-navy-100 dark:hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-navy-200 dark:border-navy-800 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold'
                    : 'text-navy-800 dark:text-slate-200 hover:bg-navy-100/60 dark:hover:bg-navy-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
