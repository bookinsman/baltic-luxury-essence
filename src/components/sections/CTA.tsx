
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface CTAProps {
  language: string;
}

const CTA = ({ language }: CTAProps) => {
  const content = {
    en: {
      title: "Experience Baltic Luxury",
      subtitle: "Join the Circle of Excellence",
      description: "Discover our exclusive collection and become part of a distinguished community that appreciates the finest expressions of craft and heritage.",
      primaryCta: "Explore Collection",
      secondaryCta: "Private Consultation",
      contactInfo: {
        email: "concierge@baltica.lt",
        phone: "+370 5 123 4567",
        address: "Vilnius, Lithuania"
      }
    },
    lt: {
      title: "Patirti Baltijos Prabangą",
      subtitle: "Prisijunk prie Tobulumo Rate",
      description: "Atrask mūsų išskirtinę kolekciją ir tapk dalimi išskirtinės bendruomenės, kuri vertina geriausius meistravimo ir paveldo reiškimius.",
      primaryCta: "Tyrinėti Kolekciją",
      secondaryCta: "Privati Konsultacija",
      contactInfo: {
        email: "concierge@baltica.lt",
        phone: "+370 5 123 4567",
        address: "Vilnius, Lietuva"
      }
    },
    ru: {
      title: "Испытайте Балтийскую Роскошь",
      subtitle: "Присоединяйтесь к Кругу Совершенства",
      description: "Откройте нашу эксклюзивную коллекцию и станьте частью выдающегося сообщества, ценящего лучшие проявления мастерства и наследия.",
      primaryCta: "Исследовать Коллекцию",
      secondaryCta: "Частная Консультация",
      contactInfo: {
        email: "concierge@baltica.lt",
        phone: "+370 5 123 4567",
        address: "Вильнюс, Литва"
      }
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-cream via-pearl to-platinum dark:from-midnight dark:via-deep-navy dark:to-charcoal relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rich-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-warm-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bronze rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-deep-navy dark:text-pearl mb-6">
            {text.title}
          </h2>
          <h3 className="text-3xl md:text-4xl text-luxury-gradient mb-8 font-light font-serif">
            {text.subtitle}
          </h3>
          <p className="text-xl text-charcoal/80 dark:text-platinum/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
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

        {/* Premium Contact Information */}
        <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-rich-gold mb-2" />
              <span className="text-deep-navy dark:text-pearl font-medium">
                {text.contactInfo.email}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-rich-gold mb-2" />
              <span className="text-deep-navy dark:text-pearl font-medium">
                {text.contactInfo.phone}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-rich-gold mb-2" />
              <span className="text-deep-navy dark:text-pearl font-medium">
                {text.contactInfo.address}
              </span>
            </div>
          </div>
        </div>

        {/* Elegant Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-40">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-px h-20 bg-gradient-to-t from-transparent via-rich-gold to-transparent animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
