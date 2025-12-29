
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
      className="hover:scale-110 transition-transform duration-200 focus:outline-none relative w-10 h-10"
      aria-label="Toggle Theme"
    >
      <img 
        src={`${BASE_URL}/onion-light.png`} 
        alt="Light Mode Onion" 
        className="w-10 h-10 rendering-pixelated block dark:hidden absolute inset-0" 
      />

      <img 
        src={`${BASE_URL}/onion-dark.png`} 
        alt="Dark Mode Onion" 
        className="w-10 h-10 rendering-pixelated hidden dark:block absolute inset-0" 
      />
    </button>
  );
}