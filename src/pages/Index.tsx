
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
    <div className="min-h-screen bg-gradient-to-br from-cream via-pearl to-platinum dark:from-midnight dark:via-deep-navy dark:to-charcoal transition-all duration-700">
      {/* Premium Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-rich-gold/10">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-3xl font-display font-bold text-deep-navy dark:text-pearl">
            BALTICA
          </div>
          
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-deep-navy dark:text-pearl hover:bg-rich-gold/10 hover:text-rich-gold transition-all duration-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              {languages[language]}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-deep-navy dark:text-pearl hover:bg-rich-gold/10 hover:text-rich-gold transition-all duration-300"
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
