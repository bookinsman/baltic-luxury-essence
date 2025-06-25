
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      tagline: "Crafted Excellence",
      subtitle: "From Baltic Heritage",
      description: "Discover our premium collection of Grappa, Likeriai, and Limoncello - where tradition meets luxury in every bottle.",
      cta: "Explore Collection"
    },
    lt: {
      tagline: "Išskirtinis Meistriškumas",
      subtitle: "Iš Baltijos Paveldo",
      description: "Atraskite mūsų premium Grappa, Likerių ir Limoncello kolekciją - kur tradicijos susitinka su prabanga kiekvienoje butelyje.",
      cta: "Tyrinėti Kolekciją"
    },
    ru: {
      tagline: "Мастерство Совершенства",
      subtitle: "Из Балтийского Наследия",
      description: "Откройте для себя нашу премиальную коллекцию Граппы, Ликеров и Лимончелло - где традиции встречаются с роскошью в каждой бутылке.",
      cta: "Исследовать Коллекцию"
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Poster Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-burgundy/40 to-emerald/30 dark:from-black/80 dark:via-burgundy/60 dark:to-emerald/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=4896&h=3264')] bg-cover bg-center opacity-30 dark:opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 tracking-wide">
          {text.tagline}
        </h1>
        <h2 className="font-serif text-2xl md:text-4xl text-gold mb-8 tracking-wider">
          {text.subtitle}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          {text.description}
        </p>
        
        <Button
          size="lg"
          className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/25 group"
        >
          {text.cta}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 skew-x-12 animate-shimmer"></div>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  );
};

export default Hero;
