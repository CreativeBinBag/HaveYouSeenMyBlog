import React, { useEffect, useState } from 'react';

export default function OnionToggle() {
  // 1. Lazy Initializer: Read the DOM immediately to set the correct icon on first render
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark'; // Fallback for server-side rendering
  });

  useEffect(() => {
    // Sync React state if the external script changed something (safety check)
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="hover:scale-110 transition-transform duration-200 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <img src="/onion-dark.png" alt="Dark Mode Onion" className="w-10 h-10 rendering-pixelated" />
      ) : (
        <img src="/onion-light.png" alt="Light Mode Onion" className="w-10 h-10 rendering-pixelated" />
      )}
    </button>
  );
}