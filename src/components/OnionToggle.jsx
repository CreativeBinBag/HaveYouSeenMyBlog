import React from 'react';

const BASE_URL = import.meta.env.BASE_URL; 

export default function OnionToggle() {

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="group flex items-center gap-2 focus:outline-none"
      aria-label="Toggle Theme"
    >

      <div className="text-right font-pixel text-[10px] md:text-sm tracking-widest uppercase leading-tight">
        <span className="block dark:hidden text-gray-500 group-hover:text-p-pink transition-colors">
          Dim the<br className="block md:hidden"/> bulb 
        </span>
        
        <span className="hidden dark:block text-p-mint group-hover:text-white transition-colors">
          Light the<br className="block md:hidden"/> bulb
        </span>
      </div>

      <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">
        <img 
          src={`${BASE_URL}/onion-light.png`} 
          alt="Light Mode Onion" 
          className="w-full h-full rendering-pixelated block dark:hidden absolute inset-0" 
        />
        <img 
          src={`${BASE_URL}/onion-dark.png`} 
          alt="Dark Mode Onion" 
          className="w-full h-full rendering-pixelated hidden dark:block absolute inset-0" 
        />
      </div>
    </button>
  );
}