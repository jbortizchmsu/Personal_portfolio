import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * Renders portfolio sections in the exact order specified by the wireframe:
 * 1. Navbar (sticky)
 * 2. Hero
 * 3. About
 * 4. Projects
 * 5. Skills
 * 6. Experience & education
 * 7. Contact
 * 8. Footer
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-navy-900 dark:bg-navy-950 dark:text-[#FAF8F3] transition-colors duration-300 relative selection:bg-teal-500 selection:text-navy-950 bg-grid-pattern">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Projects Section */}
        <Projects />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Experience & Education Section */}
        <Experience />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
