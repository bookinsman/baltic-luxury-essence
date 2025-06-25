
import { Button } from '@/components/ui/button';

interface CTAProps {
  language: string;
}

const CTA = ({ language }: CTAProps) => {
  const content = {
    en: {
      title: "Experience Baltic Luxury",
      subtitle: "Join the Elite Circle",
      description: "Discover our exclusive collection and become part of a select community that appreciates the finest things in life.",
      primaryCta: "Discover Collection",
      secondaryCta: "Contact Sommelier"
    },
    lt: {
      title: "Patirti Baltijos Prabangą",
      subtitle: "Prisijunk prie Elito Rato",
      description: "Atrask mūsų išskirtinę kolekciją ir tapk dalimi išrankios bendruomenės, kuri vertina geriausius gyvenimo dalykus.",
      primaryCta: "Atrasti Kolekciją",
      secondaryCta: "Susisiekti su Someljė"
    },
    ru: {
      title: "Испытайте Балтийскую Роскошь",
      subtitle: "Присоединяйтесь к Элитному Кругу",
      description: "Откройте для себя нашу эксклюзивную коллекцию и станьте частью избранного сообщества, ценящего лучшие вещи в жизни.",
      primaryCta: "Открыть Коллекцию",
      secondaryCta: "Связаться с Сомелье"
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-burgundy/20 via-emerald/10 to-black/30 dark:from-burgundy/40 dark:via-emerald/20 dark:to-black/60">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-burgundy dark:text-gold mb-6">
            {text.title}
          </h2>
          <h3 className="text-2xl md:text-3xl text-gold mb-8 font-light">
            {text.subtitle}
          </h3>
          <p className="text-lg text-burgundy/80 dark:text-gold/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/25 group relative overflow-hidden"
          >
            {text.primaryCta}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 animate-shimmer"></div>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            {text.secondaryCta}
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-16 bg-gradient-to-t from-transparent via-gold to-transparent animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
