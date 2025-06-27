import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface CTAProps {
  language: string;
}

const CTA = ({ language }: CTAProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const content = {
    en: {
      title: "Experience Baltic Luxury",
      subtitle: "Join the Circle of Excellence",
      description: "Discover our exclusive collection and become part of a distinguished community that appreciates the finest expressions of craft and heritage.",
      primaryCta: "Explore Collection",
      secondaryCta: "Private Consultation",
      footer: {
        brand: "Limoncello",
        tagline: "Crafted with precision, enjoyed with passion",
        copyright: "© 2024 Limoncello. All rights reserved.",
        contactInfo: {
          title: "You can find us:",
          address: "Ukmergės g. 308, Vilnius",
          hoursTitle: "Working Hours",
          hours: "Monday - Saturday",
          hoursTime: "10:00 - 20:00",
          contactTitle: "Contacts",
          phone: "+37065554319",
          email: "info@koliziejus.com",
        }
      }
    },
    lt: {
      title: "Patirti Baltijos Prabangą",
      subtitle: "Prisijunk prie Tobulumo Rate",
      description: "Limoncello su pasididžiavimu pristato Koliziejus – jūsų patikimas prekių ženklas Lietuvoje, žinomas dėl autentiškų itališkų produktų, o dabar siūlantis ir aukščiausios kokybės gėrimus.",
      primaryCta: "Tyrinėti Kolekciją",
      secondaryCta: "Privati Konsultacija",
      footer: {
        brand: "Limoncello",
        tagline: "Sukurta su tikslumu, mėgaujamasi su aistra",
        copyright: "© 2024 Limoncello. Visos teisės saugomos.",
        contactInfo: {
          title: "Mus galite rasti:",
          address: "Ukmergės g. 308, Vilnius",
          hoursTitle: "Darbo valandos",
          hours: "Pirmadienis - Šeštadienis",
          hoursTime: "10:00 - 20:00",
          contactTitle: "Kontaktai",
          phone: "+37065554319",
          email: "info@koliziejus.com",
        }
      }
    },
    ru: {
      title: "Испытайте Балтийскую Роскошь",
      subtitle: "Присоединяйтесь к Кругу Совершенства",
      description: "Откройте нашу эксклюзивную коллекцию и станьте частью выдающегося сообщества, ценящего лучшие проявления мастерства и наследия.",
      primaryCta: "Исследовать Коллекцию",
      secondaryCta: "Частная Консультация",
      footer: {
        brand: "Limoncello",
        tagline: "Создано с точностью, наслаждаются с страстью",
        copyright: "© 2024 Limoncello. Все права защищены.",
        contactInfo: {
          title: "Вы можете нас найти:",
          address: "ул. Укмергес 308, Вильнюс",
          hoursTitle: "Рабочее время",
          hours: "Понедельник - Суббота",
          hoursTime: "10:00 - 20:00",
          contactTitle: "Контакты",
          phone: "+37065554319",
          email: "info@koliziejus.com",
        }
      }
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <>
      {/* CTA Section */}
      <section className="py-32 px-6" style={{ backgroundColor: 'rgb(161 131 42 / 63%)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 
              ref={el => itemRefs.current[0] = el}
              className={`font-display text-5xl md:text-6xl font-bold text-deep-navy dark:text-pearl mb-6 transition-all duration-700 ${
                visibleItems.includes(0) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              {text.title}
            </h2>
            <h3 
              ref={el => itemRefs.current[1] = el}
              className={`text-2xl md:text-3xl text-luxury-gradient font-light mb-8 transition-all duration-700 ${
                visibleItems.includes(1) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {text.subtitle}
            </h3>
            <p 
              ref={el => itemRefs.current[2] = el}
              className={`text-lg text-charcoal/80 dark:text-platinum/80 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
                visibleItems.includes(2) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              {text.description}
            </p>
          </div>

          <div 
            ref={el => itemRefs.current[3] = el}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-700 ${
              visibleItems.includes(3) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <Button
              size="lg"
              className="bg-luxury-gradient hover:scale-105 text-midnight font-semibold px-12 py-6 text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-rich-gold/25 relative overflow-hidden group"
            >
              {text.primaryCta}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 skew-x-12 animate-luxury-shimmer"></div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-rich-gold/50 text-rich-gold hover:bg-rich-gold/10 hover:border-rich-gold font-semibold px-12 py-6 text-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              {text.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight text-pearl py-16">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div 
              ref={el => itemRefs.current[4] = el}
              className={`lg:col-span-2 transition-all duration-700 ${
                visibleItems.includes(4) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-display font-light text-rich-gold mb-2 tracking-wider">
                  {text.footer.brand}
                </h3>
                <p className="text-platinum/80 italic text-lg">
                  {text.footer.tagline}
                </p>
              </div>
              <p className="text-platinum/70 leading-relaxed">
                {text.description}
              </p>
            </div>

            {/* New Contact Info Block */}
            <div
              ref={el => itemRefs.current[5] = el}
              className={`lg:col-span-2 transition-all duration-700 ${
                visibleItems.includes(5)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h3 className="font-serif text-4xl text-pearl mb-4">
                {text.footer.contactInfo.title}
              </h3>
              <p className="text-platinum/80 text-lg mb-8">
                {text.footer.contactInfo.address}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg">
                <div>
                  <h4 className="font-bold text-platinum mb-2">{text.footer.contactInfo.hoursTitle}</h4>
                  <p className="text-platinum/80">{text.footer.contactInfo.hours}</p>
                  <p className="text-platinum/80">{text.footer.contactInfo.hoursTime}</p>
                </div>
                <div>
                  <h4 className="font-bold text-platinum mb-2">{text.footer.contactInfo.contactTitle}</h4>
                  <p className="text-platinum/80">{text.footer.contactInfo.phone}</p>
                  <p>
                    <a href={`mailto:${text.footer.contactInfo.email}`} className="text-platinum/80 hover:text-rich-gold transition-colors">
                      {text.footer.contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div 
            ref={el => itemRefs.current[6] = el}
            className={`border-t border-rich-gold/20 pt-8 transition-all duration-700 ${
              visibleItems.includes(6) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-platinum/60 text-sm">
                {text.footer.copyright}
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-platinum/60 hover:text-rich-gold transition-colors duration-200 text-sm">
                  Privatumo politika
                </a>
                <a href="#" className="text-platinum/60 hover:text-rich-gold transition-colors duration-200 text-sm">
                  Naudojimo sąlygos
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div 
            ref={el => itemRefs.current[7] = el}
            className={`mt-8 flex justify-center space-x-4 opacity-30 transition-all duration-700 ${
              visibleItems.includes(7) 
                ? 'opacity-30 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-px h-12 bg-gradient-to-t from-transparent via-rich-gold to-transparent animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTA;
