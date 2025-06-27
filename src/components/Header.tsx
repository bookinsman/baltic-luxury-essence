import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
  languages: { [key: string]: string };
}

const Header = ({ isDark, toggleTheme, language, toggleLanguage, languages }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'backdrop-blur-xl bg-cream/60 dark:bg-midnight/70 border-b border-rich-gold/15 shadow-lg shadow-rich-gold/8' 
        : 'backdrop-blur-sm bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-display font-light tracking-wider transition-all duration-500 ${
          scrolled 
            ? 'text-deep-navy dark:text-pearl' 
            : 'text-pearl drop-shadow-lg'
        }`}>
          Limoncello
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`transition-all duration-500 text-sm font-medium text-rich-gold hover:opacity-80 ${scrolled ? 'dark:text-warm-gold' : 'drop-shadow-md'}`}>Pradžia</Link>
          <Link to="/grappa" className={`transition-all duration-500 text-sm font-medium text-rich-gold hover:opacity-80 ${scrolled ? 'dark:text-warm-gold' : 'drop-shadow-md'}`}>Grappa</Link>
          <Link to="/likeriai" className={`transition-all duration-500 text-sm font-medium text-rich-gold hover:opacity-80 ${scrolled ? 'dark:text-warm-gold' : 'drop-shadow-md'}`}>Likeriai</Link>
          <Link to="/asortimentas" className={`transition-all duration-500 text-sm font-medium text-rich-gold hover:opacity-80 ${scrolled ? 'dark:text-warm-gold' : 'drop-shadow-md'}`}>Asortimentas</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={`transition-all duration-500 text-sm font-medium ${
              scrolled
                ? 'text-deep-navy dark:text-pearl hover:bg-rich-gold/10 hover:text-rich-gold'
                : 'text-pearl/90 hover:bg-pearl/10 hover:text-pearl drop-shadow-md'
            }`}
          >
            <Globe className="w-4 h-4 mr-1.5" />
            {languages[language]}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`transition-all duration-500 ${
              scrolled
                ? 'text-deep-navy dark:text-pearl hover:bg-rich-gold/10 hover:text-rich-gold'
                : 'text-pearl/90 hover:bg-pearl/10 hover:text-pearl drop-shadow-md'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header; 