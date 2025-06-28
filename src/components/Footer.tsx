import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-pearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-display font-bold text-rich-gold mb-4">Limoncello</h3>
          <p className="text-pearl/80 font-light max-w-md mx-auto">
            Prabanga, tradicija ir itališka saulė kiekviename laše.
          </p>
        </div>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-rich-gold/50 to-transparent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="md:col-span-1">
            <h3 className="text-3xl font-display font-semibold text-rich-gold mb-6">Mus galite rasti:</h3>
            <div className="flex items-start justify-center md:justify-start space-x-3 font-light">
              <MapPin className="w-5 h-5 text-rich-gold/80 flex-shrink-0 mt-1" />
              <div className="text-lg">
                <p>Ukmergės g. 308, Vilnius</p>
                <p className="text-base text-pearl/80">Domus Pro, parduotuvė "Koliziejus"</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-rich-gold mb-4">Darbo valandos</h3>
            <div className="flex items-center justify-center md:justify-start space-x-3 font-light">
              <Clock className="w-5 h-5 text-rich-gold/80 flex-shrink-0 mt-1" />
              <div>
                <p>Pirmadienis - Šeštadienis</p>
                <p className="text-lg">10:00 - 20:00</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-rich-gold mb-4">Kontaktai</h3>
            <div className="space-y-3 font-light">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-rich-gold/80 flex-shrink-0" />
                <a href="tel:+37065554319" className="hover:text-rich-gold transition-colors">+37065554319</a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-rich-gold/80 flex-shrink-0" />
                <a href="mailto:info@koliziejus.com" className="hover:text-rich-gold transition-colors underline">info@koliziejus.com</a>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-rich-gold/20 text-center text-pearl/60 font-light">
          <p>&copy; {new Date().getFullYear()} Limoncello. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 