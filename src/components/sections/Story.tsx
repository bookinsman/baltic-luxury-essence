
interface StoryProps {
  language: string;
}

const Story = ({ language }: StoryProps) => {
  const content = {
    en: {
      title: "Legacy of Craftsmanship",
      subtitle: "Five Generations of Excellence",
      timeline: [
        {
          year: "1892",
          title: "The Foundation",
          description: "Established in Vilnius by master distiller Antanas Balčiūnas, beginning a legacy of uncompromising quality and traditional craftsmanship.",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          year: "1920",
          title: "Innovation Meets Tradition",
          description: "Expanded operations while preserving ancestral techniques. Introduced Italian methods to complement our Baltic heritage.",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          year: "1995",
          title: "Renaissance Era",
          description: "Emerged as Lithuania's premier luxury spirits producer, combining centuries-old traditions with modern refinement.",
          image: "photo-1500673922987-e212871fec22"
        },
        {
          year: "2024",
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
          year: "1892",
          title: "Pagrindas",
          description: "Įkurta Vilniuje meistro distiliatoriaus Antano Balčiūno, pradėjus nekompromisinio kokybės ir tradicinio meistriškumo paveldą.",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          year: "1920",
          title: "Inovacijos Sutinka Tradiciją",
          description: "Išplėsta veikla, išsaugant prosenelių metodus. Pristatyti itališki metodai papildant mūsų Baltijos paveldą.",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          year: "1995",
          title: "Renesanso Era",
          description: "Tapome pirmaujančiu Lietuvos prabangių gėrimų gamintoju, derinant šimtmečių tradicijas su šiuolaikišku rafinuotumu.",
          image: "photo-1500673922987-e212871fec22"
        },
        {
          year: "2024",
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
          year: "1892",
          title: "Основание",
          description: "Основано в Вильнюсе мастером-дистиллятором Антанасом Балчюнасом, начав наследие бескомпромиссного качества.",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          year: "1920",
          title: "Инновации Встречают Традиции",
          description: "Расширили операции, сохранив древние техники. Внедрили итальянские методы в дополнение к балтийскому наследию.",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          year: "1995",
          title: "Эпоха Возрождения",
          description: "Стали ведущим производителем элитных спиртных напитков Литвы, сочетая вековые традиции с современным изяществом.",
          image: "photo-1500673922987-e212871fec22"
        },
        {
          year: "2024",
          title: "Мировое Признание",
          description: "Сегодня мы - вершина балтийских элитных спиртных напитков, признанная знатоками всех континентов.",
          image: "photo-1569529465841-dfecdab7503b"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pearl to-cream dark:from-deep-navy dark:to-midnight">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-deep-navy dark:text-pearl mb-6">
            {text.title}
          </h2>
          <p className="text-2xl text-charcoal/80 dark:text-platinum/80 font-light">
            {text.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Elegant Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-rich-gold via-warm-gold to-bronze"></div>

          {text.timeline.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-20 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-rich-gold font-bold text-2xl mb-3 font-display">
                    {item.year}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-deep-navy dark:text-pearl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/80 dark:text-platinum/80 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-luxury-gradient rounded-full border-4 border-pearl dark:border-midnight shadow-lg"></div>

              {/* Image */}
              <div className="w-5/12">
                <div className={`${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://images.unsplash.com/${item.image}?q=80&w=600&h=600`}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
