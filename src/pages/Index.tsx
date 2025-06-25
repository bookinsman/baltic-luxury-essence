
import { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Story from '@/components/sections/Story';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('en');

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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    const langs = Object.keys(languages);
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-champagne to-soft-gray dark:from-burgundy-900 dark:via-emerald-900 dark:to-black transition-all duration-500">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-gold/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-burgundy dark:text-gold">
            BALTICA
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-burgundy dark:text-gold hover:bg-gold/20"
            >
              <Globe className="w-4 h-4 mr-2" />
              {languages[language]}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-burgundy dark:text-gold hover:bg-gold/20"
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
        <Testimonials language={language} />
        <CTA language={language} />
      </main>
    </div>
  );
};

export default Index;
