import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pearl/60 dark:bg-midnight/70 backdrop-blur-xl border-t border-rich-gold/15 text-charcoal dark:text-platinum">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-lg font-semibold text-deep-navy dark:text-pearl mb-3 font-display">Limoncello</h3>
            <p className="text-xs font-light">
              Atraskite tikrąją Italijos dvasią. Mūsų gėrimai - tai tradicijos, kokybė ir nepamirštamas skonis.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-deep-navy dark:text-pearl mb-3 font-display">Navigacija</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><Link to="/" className="hover:text-rich-gold transition-colors">Pradžia</Link></li>
              <li><Link to="/grappa" className="hover:text-rich-gold transition-colors">Grappa</Link></li>
              <li><Link to="/likeriai" className="hover:text-rich-gold transition-colors">Likeriai</Link></li>
              <li><Link to="/asortimentas" className="hover:text-rich-gold transition-colors">Asortimentas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-deep-navy dark:text-pearl mb-3 font-display">Susisiekite</h3>
            <div className="text-xs font-light space-y-2">
              <p>UAB "Koliziejus"</p>
              <p>Įmonės kodas: 123456789</p>
              <p>Adresas: Gedimino pr. 9, Vilnius, Lietuva</p>
              <p>El. paštas: <a href="mailto:info@limoncello.lt" className="hover:text-rich-gold transition-colors">info@limoncello.lt</a></p>
            </div>
          </div>

        </div>
        <div className="mt-8 pt-6 border-t border-rich-gold/10 text-center">
          <p className="text-xs text-charcoal/60 dark:text-platinum/60">
            &copy; {currentYear} Limoncello. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 