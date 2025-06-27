import { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Story from '@/components/sections/Story';
import Gallery from '@/components/sections/Gallery';
import CTA from '@/components/sections/CTA';
import LoadingBubbles from '../components/ui/loading-bubbles';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('lt'); // Default to Lithuanian
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const languages = {
    en: 'English',
    lt: 'Lietuvių',
    ru: 'Русский'
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle header scroll effect
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    const langs = Object.keys(languages);
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  if (isLoading) {
    return <LoadingBubbles />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Enhanced Premium Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-pearl to-platinum dark:from-midnight dark:via-deep-navy dark:to-charcoal transition-all duration-700"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)`
          }}></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-rich-gold/5 animate-pulse"
              style={{
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 120 + 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Ultra-Smooth Invisible Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'backdrop-blur-xl bg-cream/60 dark:bg-midnight/70 border-b border-rich-gold/15 shadow-lg shadow-rich-gold/8' 
          : 'backdrop-blur-sm bg-transparent border-b border-transparent'
      }`}>
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className={`text-2xl font-display font-light tracking-wider transition-all duration-500 ${
            scrolled 
              ? 'text-deep-navy dark:text-pearl' 
              : 'text-pearl drop-shadow-lg'
          }`}>
            Limoncello
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

      {/* Main Content */}
      <main className="relative">
        <Hero language={language} />
        <Products language={language} />
        <Story language={language} />
        <Gallery language={language} />
        <CTA language={language} />
      </main>
    </div>
  );
};

export default Index;
