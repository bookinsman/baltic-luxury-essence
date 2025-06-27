import { Button } from '@/components/ui/button';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      tagline: "BALTICA",
      subtitle: "Heritage of Excellence",
      description: "Discover the pinnacle of Baltic luxury. Three masterpieces born from tradition, perfected through generations.",
      cta: "Explore Collection"
    },
    lt: {
      tagline: "BALTICA",
      subtitle: "Autentiški Skoniai iš Italijos",
      description: "Pristatome aukščiausios kokybės Grappą, Limoncellą ir kitus likerius iš garsių Italijos distilerijų",
      cta: "Tyrinėti Kolekciją"
    },
    ru: {
      tagline: "BALTICA",
      subtitle: "Наследие Совершенства",
      description: "Откройте вершину балтийской роскоши. Три шедевра, рожденные из традиций, усовершенствованные поколениями.",
      cta: "Исследовать Коллекцию"
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Black Overlay */}
      <div className="absolute inset-0">
        {/* Your specific background image */}
        <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2018/05/02/17/46/alcohol-3369212_1280.jpg')] bg-cover bg-center"></div>
        
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Subtle luxury shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rich-gold/3 to-transparent animate-luxury-shimmer"></div>
      </div>

      {/* Floating Luxury Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-rich-gold/20 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content - Animated */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block px-8 py-3 border border-rich-gold/40 rounded-full mb-8 backdrop-blur-sm bg-rich-gold/10">
            <span className="text-rich-gold text-sm font-medium tracking-[0.3em] uppercase">
              Est. 2022
            </span>
          </div>
        </div>
        
        <h1 className="font-display text-7xl md:text-9xl font-bold text-pearl mb-4 tracking-tight drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {text.tagline}
        </h1>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-gradient mb-8 font-light tracking-wide drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {text.subtitle}
        </h2>
        
        <p className="text-xl md:text-2xl text-pearl/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {text.description}
        </p>
        
        {/* Centered Explore Collection Button */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button
            size="lg"
            className="bg-luxury-gradient hover:scale-105 text-midnight font-semibold px-16 py-8 text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-rich-gold/25 relative overflow-hidden group"
          >
            {text.cta}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 skew-x-12 animate-luxury-shimmer"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
