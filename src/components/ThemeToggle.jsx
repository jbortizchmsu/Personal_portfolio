import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle Component
 * Allows users to toggle between Light and Dark mode.
 * Persists user preference in localStorage and respects system settings by default.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Fallback to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2 rounded-lg text-navy-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:bg-navy-100/50 dark:hover:bg-navy-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12 text-navy-800" />
      )}
    </button>
  );
}
