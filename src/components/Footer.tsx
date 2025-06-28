import React, { useContext } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LanguageContext } from '@/App';

const content = {
  lt: {
    brandSlogan: "Prabanga, tradicija ir itališka saulė kiekviename laše.",
    locationTitle: "Mus galite rasti:",
    addressLine1: "Ukmergės g. 308, Vilnius",
    addressLine2: `Domus Pro, parduotuvė "Koliziejus"`,
    hoursTitle: "Darbo valandos",
    hoursDays: "Pirmadienis - Šeštadienis",
    hoursTime: "10:00 - 20:00",
    contactsTitle: "Kontaktai",
    copyright: `© ${new Date().getFullYear()} Limoncello. Visos teisės saugomos.`,
  },
  en: {
    brandSlogan: "Luxury, tradition, and Italian sun in every drop.",
    locationTitle: "You can find us at:",
    addressLine1: "Ukmergės g. 308, Vilnius",
    addressLine2: `Domus Pro, "Koliziejus" store`,
    hoursTitle: "Opening Hours",
    hoursDays: "Monday - Saturday",
    hoursTime: "10:00 - 20:00",
    contactsTitle: "Contacts",
    copyright: `© ${new Date().getFullYear()} Limoncello. All rights reserved.`,
  }
};

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language as keyof typeof content] || content.lt;

  return (
    <footer className="bg-deep-navy text-pearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Brand */}
          <div>
            <h4 className="font-display font-bold text-rich-gold mb-4 text-xl">Limoncello</h4>
            <p className="text-pearl/80 font-light text-sm">
              {text.brandSlogan}
            </p>
          </div>
          
          {/* Column 2: Location */}
          <div>
            <h4 className="font-display font-semibold text-rich-gold mb-4 text-lg">{text.locationTitle}</h4>
            <div className="flex items-start space-x-3 font-light">
              <MapPin className="w-5 h-5 text-rich-gold/80 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p>{text.addressLine1}</p>
                <p className="text-xs text-pearl/80">{text.addressLine2}</p>
              </div>
            </div>
          </div>
          
          {/* Column 3: Hours */}
          <div>
            <h4 className="font-display font-semibold text-rich-gold mb-4 text-lg">{text.hoursTitle}</h4>
            <div className="flex items-start space-x-3 font-light">
              <Clock className="w-5 h-5 text-rich-gold/80 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p>{text.hoursDays}</p>
                <p>{text.hoursTime}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contacts */}
          <div id="kontaktai-section">
            <h4 className="font-display font-semibold text-rich-gold mb-4 text-lg">{text.contactsTitle}</h4>
            <div className="space-y-3 font-light text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rich-gold/80 flex-shrink-0" />
                <a href="tel:+37065554319" className="hover:text-rich-gold transition-colors">+37065554319</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rich-gold/80 flex-shrink-0" />
                <a href="mailto:info@koliziejus.com" className="hover:text-rich-gold transition-colors underline">info@koliziejus.com</a>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-6 border-t border-rich-gold/20 text-center text-pearl/60 font-light text-xs">
          <p>{text.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 