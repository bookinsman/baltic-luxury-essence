
import { Button } from '@/components/ui/button';
import { ChevronDown, Play } from 'lucide-react';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      tagline: "BALTICA",
      subtitle: "Heritage of Excellence",
      description: "Discover the pinnacle of Baltic luxury. Three masterpieces born from tradition, perfected through generations.",
      cta: "Explore Collection",
      videoCta: "Watch Story"
    },
    lt: {
      tagline: "BALTICA",
      subtitle: "Išskirtingumo Paveldas",
      description: "Atraskite Baltijos prabangos viršūnę. Trys šedevrai, gimę iš tradicijų, tobulinti per kartas.",
      cta: "Tyrinėti Kolekciją",
      videoCta: "Žiūrėti Istoriją"
    },
    ru: {
      tagline: "BALTICA",
      subtitle: "Наследие Совершенства",
      description: "Откройте вершину балтийской роскоши. Три шедевра, рожденные из традиций, усовершенствованные поколениями.",
      cta: "Исследовать Коллекцию",
      videoCta: "Смотреть Историю"
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-deep-navy to-charcoal"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=4000&h=2667')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-midnight/50"></div>
      </div>

      {/* Floating Luxury Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rich-gold/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 border border-rich-gold/30 rounded-full mb-8">
            <span className="text-rich-gold text-sm font-medium tracking-[0.3em] uppercase">
              Est. 1892
            </span>
          </div>
        </div>
        
        <h1 className="font-display text-7xl md:text-9xl font-bold text-pearl mb-4 tracking-tight">
          {text.tagline}
        </h1>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-gradient mb-8 font-light tracking-wide">
          {text.subtitle}
        </h2>
        
        <p className="text-xl md:text-2xl text-platinum/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {text.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-luxury-gradient hover:scale-105 text-midnight font-semibold px-12 py-6 text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-rich-gold/25 relative overflow-hidden group"
          >
            {text.cta}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 skew-x-12 animate-luxury-shimmer"></div>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-rich-gold/50 text-rich-gold hover:bg-rich-gold/10 hover:border-rich-gold font-semibold px-12 py-6 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Play className="w-5 h-5 mr-3" />
            {text.videoCta}
          </Button>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-rich-gold mb-2"></div>
          <ChevronDown className="w-6 h-6 text-rich-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
