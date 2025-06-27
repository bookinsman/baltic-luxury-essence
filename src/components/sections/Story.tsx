import { useEffect, useRef, useState } from 'react';

interface StoryProps {
  language: string;
}

const Story = ({ language }: StoryProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const content = {
    en: {
      title: "Legacy of Craftsmanship",
      subtitle: "Five Generations of Excellence",
      timeline: [
        {
          year: "1",
          title: "The Foundation",
          description: "Established in Vilnius by master distiller Antanas Balčiūnas, beginning a legacy of uncompromising quality and traditional craftsmanship.",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          year: "2",
          title: "Innovation Meets Tradition",
          description: "Expanded operations while preserving ancestral techniques. Introduced Italian methods to complement our Baltic heritage.",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          year: "3",
          title: "Renaissance Era",
          description: "Emerged as Lithuania's premier luxury spirits producer, combining centuries-old traditions with modern refinement.",
          image: "photo-1500673922987-e212871fec22"
        },
        {
          year: "4",
          title: "Global Recognition",
          description: "Today, we stand as the pinnacle of Baltic luxury spirits, celebrated by connoisseurs across continents.",
          image: "photo-1569529465841-dfecdab7503b"
        }
      ]
    },
    lt: {
      title: "Meistriškumo Paveldas",
      subtitle: "Penkios Kartos Tobulumo",
      timeline: [
        {
          year: "1",
          title: "Pagrindas",
          description: "Įkurta Vilniuje meistro distiliatoriaus Antano Balčiūno, pradėjus nekompromisinio kokybės ir tradicinio meistriškumo paveldą.",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          year: "2",
          title: "Inovacijos Sutinka Tradiciją",
          description: "Išplėsta veikla, išsaugant prosenelių metodus. Pristatyti itališki metodai papildant mūsų Baltijos paveldą.",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          year: "3",
          title: "Renesanso Era",
          description: "Tapome pirmaujančiu Lietuvos prabangių gėrimų gamintoju, derinant šimtmečių tradicijas su šiuolaikišku rafinuotumu.",
          image: "photo-1500673922987-e212871fec22"
        },
        {
          year: "4",
          title: "Pasaulinis Pripažinimas",
          description: "Šiandien esame Baltijos prabangių gėrimų viršūnė, švenčiama žinovų visuose žemynuose.",
          image: "photo-1569529465841-dfecdab7503b"
        }
      ]
    },
    ru: {
      title: "Наследие Мастерства",
      subtitle: "Пять Поколений Совершенства",
      timeline: [
        {
          year: "1",
          title: "Основание",
          description: "Основано в Вильнюсе мастером-дистиллятором Антанасом Балчюнасом, начав наследие бескомпромиссного качества.",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          year: "2",
          title: "Инновации Встречают Традиции",
          description: "Расширили операции, сохранив древние техники. Внедрили итальянские методы в дополнение к балтийскому наследию.",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          year: "3",
          title: "Эпоха Возрождения",
          description: "Стали ведущим производителем элитных спиртных напитков Литвы, сочетая вековые традиции с современным изяществом.",
          image: "photo-1500673922987-e212871fec22"
        },
        {
          year: "4",
          title: "Мировое Признание",
          description: "Сегодня мы - вершина балтийских элитных спиртных напитков, признанная знатоками всех континентов.",
          image: "photo-1569529465841-dfecdab7503b"
        }
      ]
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
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-32 px-6 bg-pearl dark:bg-charcoal">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-24">
          <h2 
            ref={el => itemRefs.current[0] = el}
            className={`font-display text-6xl md:text-7xl font-bold text-deep-navy dark:text-pearl mb-6 transition-all duration-700 ${
              visibleItems.includes(0) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            {text.title}
          </h2>
          <p 
            ref={el => itemRefs.current[1] = el}
            className={`text-2xl md:text-3xl text-charcoal/80 dark:text-platinum/80 font-light transition-all duration-700 ${
              visibleItems.includes(1) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {text.subtitle}
          </p>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-12">
          {text.timeline.map((item, index) => (
            <div 
              key={index} 
              ref={el => itemRefs.current[index + 2] = el}
              className={`transition-all duration-700 ${
                visibleItems.includes(index + 2) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="flex items-start space-x-6">
                {/* Year */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-rich-gold/20 border-2 border-rich-gold flex items-center justify-center">
                  <span className="text-rich-gold font-bold text-sm">{item.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-deep-navy dark:text-pearl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/80 dark:text-platinum/80 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${item.image}?q=80&w=400&h=225`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Centered Timeline with Proper Alternating Layout */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-rich-gold/40"></div>
            
            <div className="space-y-32">
              {text.timeline.map((item, index) => (
                <div 
                  key={index} 
                  ref={el => itemRefs.current[index + 6] = el}
                  className={`relative flex items-center transition-all duration-700 ${
                    visibleItems.includes(index + 6) 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-12'
                  }`}
                >
                  {/* Left Side */}
                  <div className="w-1/2 pr-16">
                    {index % 2 === 0 ? (
                      // Even index: Content on left
                      <div className="text-right">
                        <h3 className="font-display text-2xl font-bold text-deep-navy dark:text-pearl mb-4">
                          {item.title}
                        </h3>
                        <p className="text-charcoal/80 dark:text-platinum/80 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      // Odd index: Photo on left
                      <div className="flex justify-end">
                        <div className="w-80 h-60 rounded-lg overflow-hidden shadow-xl">
                          <img 
                            src={`https://images.unsplash.com/${item.image}?q=80&w=500&h=375`}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Center Year Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-20 h-20 rounded-full bg-rich-gold text-midnight font-bold text-lg flex items-center justify-center shadow-xl border-4 border-pearl dark:border-midnight">
                    {item.year}
                  </div>
                  
                  {/* Right Side */}
                  <div className="w-1/2 pl-16">
                    {index % 2 === 0 ? (
                      // Even index: Photo on right
                      <div className="flex justify-start">
                        <div className="w-80 h-60 rounded-lg overflow-hidden shadow-xl">
                          <img 
                            src={`https://images.unsplash.com/${item.image}?q=80&w=500&h=375`}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      // Odd index: Content on right
                      <div className="text-left">
                        <h3 className="font-display text-2xl font-bold text-deep-navy dark:text-pearl mb-4">
                          {item.title}
                        </h3>
                        <p className="text-charcoal/80 dark:text-platinum/80 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
