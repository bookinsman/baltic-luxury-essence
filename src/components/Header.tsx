import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LanguageContext } from '@/App';

const LanguageSwitcher = ({ isScrolled }: { isScrolled: boolean }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 text-lg font-serif font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-rich-gold' : 'text-rich-gold hover:text-rich-gold/80'}`}
      >
        <span>{language.toUpperCase()}</span>
        <ChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-24 bg-pearl rounded-md shadow-lg z-10">
          <button
            onClick={() => toggleLanguage('lt')}
            className="w-full text-left px-4 py-2 text-charcoal hover:bg-rich-gold/10"
          >
            LT
          </button>
          <button
            onClick={() => toggleLanguage('en')}
            className="w-full text-left px-4 py-2 text-charcoal hover:bg-rich-gold/10"
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const { language } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = {
    lt: {
      home: 'Pradžia',
      assortment: 'Asortimentas',
      contacts: 'Kontaktai',
    },
    en: {
      home: 'Home',
      assortment: 'Assortment',
      contacts: 'Contacts',
    }
  };

  const currentLinks = navLinks[language as keyof typeof navLinks] || navLinks.lt;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-3xl font-bold font-display text-deep-navy">
                Limoncello
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={`text-lg font-serif font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-rich-gold' : 'text-rich-gold hover:text-rich-gold/80'}`}>{currentLinks.home}</NavLink>
              <a href="/#asortimentas-section" className={`text-lg font-serif font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-rich-gold' : 'text-rich-gold hover:text-rich-gold/80'}`}>{currentLinks.assortment}</a>
              <a href="/#kontaktai-section" className={`text-lg font-serif font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-rich-gold' : 'text-rich-gold hover:text-rich-gold/80'}`}>{currentLinks.contacts}</a>
              <LanguageSwitcher isScrolled={isScrolled} />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher isScrolled={isScrolled} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 hover:bg-rich-gold/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rich-gold ${isScrolled ? 'text-charcoal' : 'text-rich-gold'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className="flex h-full items-center justify-center text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center space-y-8">
            <NavLink to="/" onClick={handleLinkClick} className="text-3xl font-serif text-pearl hover:text-rich-gold transition-colors">{currentLinks.home}</NavLink>
            <a href="/#asortimentas-section" onClick={handleLinkClick} className="text-3xl font-serif text-pearl hover:text-rich-gold transition-colors">{currentLinks.assortment}</a>
            <a href="/#kontaktai-section" onClick={handleLinkClick} className="text-3xl font-serif text-pearl hover:text-rich-gold transition-colors">{currentLinks.contacts}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 