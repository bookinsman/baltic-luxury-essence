import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
              <NavLink to="/" className={`text-lg font-serif font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-rich-gold' : 'text-rich-gold hover:text-rich-gold/80'}`}>Pradžia</NavLink>
              <a href="/#asortimentas-section" className={`text-lg font-serif font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-rich-gold' : 'text-rich-gold hover:text-rich-gold/80'}`}>Asortimentas</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
        className={`md:hidden fixed top-20 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className="text-2xl font-serif font-medium text-rich-gold transition-colors duration-300 hover:text-rich-gold/80"
            >
              Pradžia
            </NavLink>
            <a
              href="/#asortimentas-section"
              onClick={handleLinkClick}
              className="text-2xl font-serif font-medium text-rich-gold transition-colors duration-300 hover:text-rich-gold/80"
            >
              Asortimentas
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header; 