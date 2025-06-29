import { useContext } from 'react';
import { ArrowDown } from 'lucide-react';
import { LanguageContext } from '@/App';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  // To change the blur intensity, modify the value below (in pixels).
  // A good range is typically between 0 (no blur) and 20.
  const blurIntensity = 3;

  const content = {
    lt: {
      tagline: "Limoncello",
      subtitle: "Autentiški Skoniai iš Italijos",
      description: "Pristatome aukščiausios kokybės Grappą, Limoncellą ir kitus likerius iš garsios <span class='text-luxury-gradient'>Inga Lorenzo</span> Itališkos distilerijos",
      est: "Įkurta 2022"
    },
    en: {
      tagline: "Limoncello",
      subtitle: "Authentic Flavors from Italy",
      description: "Presenting the highest quality Grappa, Limoncello, and other liqueurs from prominent <span class='text-luxury-gradient'>Inga Lorenzo</span> Italian distillery.",
      est: "Est. 2022"
    }
  };

  const text = content[language as keyof typeof content] || content.lt;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Black Overlay */}
      <div className="absolute inset-0">
        {/* Your specific background image */}
        <div 
          className="absolute inset-0 bg-[url('/background.webp')] bg-cover bg-center"
          style={{ filter: `blur(${blurIntensity}px)` }}
        ></div>
        
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
              {text.est}
            </span>
          </div>
        </div>
        
        <h1 className="font-display text-7xl md:text-9xl font-bold text-pearl mb-4 tracking-tight drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {text.tagline}
        </h1>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-gradient mb-8 font-light tracking-wide drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {text.subtitle}
        </h2>
        
        <p 
          className="text-xl md:text-2xl text-pearl/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md animate-fade-in" 
          style={{ animationDelay: '0.8s' }}
          dangerouslySetInnerHTML={{ __html: text.description }}
        />
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#products-section" aria-label="Scroll down">
            <ArrowDown className="w-10 h-10 mx-auto text-rich-gold animate-float transition-colors hover:text-rich-gold/80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
