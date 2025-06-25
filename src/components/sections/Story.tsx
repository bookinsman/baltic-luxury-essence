
interface StoryProps {
  language: string;
}

const Story = ({ language }: StoryProps) => {
  const content = {
    en: {
      title: "Heritage of Excellence",
      subtitle: "A Journey Through Time",
      timeline: [
        {
          year: "1892",
          title: "The Beginning",
          description: "Founded in the heart of Lithuania, our distillery begins its journey with traditional methods passed down through generations."
        },
        {
          year: "1920",
          title: "Expansion",
          description: "We expand our operations, introducing Italian techniques while maintaining our Baltic heritage and commitment to quality."
        },
        {
          year: "1995",
          title: "Renaissance",
          description: "After decades of tradition, we emerge as Lithuania's premier luxury spirit producer, combining heritage with modern innovation."
        },
        {
          year: "2024",
          title: "Today",
          description: "We continue to craft exceptional spirits that represent the finest of Baltic luxury, exported to discerning customers worldwide."
        }
      ]
    },
    lt: {
      title: "Išskirtingumo Paveldas",
      subtitle: "Kelionė Per Laiką",
      timeline: [
        {
          year: "1892",
          title: "Pradžia",
          description: "Įkurta Lietuvos širdyje, mūsų distilerija pradeda savo kelionę su tradiciniais metodais, perduodamais iš kartos į kartą."
        },
        {
          year: "1920",
          title: "Plėtra",
          description: "Plečiame veiklą, pristatydami itališkus metodus, tuo pačiu išlaikydami Baltijos paveldą ir įsipareigojimą kokybei."
        },
        {
          year: "1995",
          title: "Renesansas",
          description: "Po dešimtmečių tradicijų tampame pirmaujančiu Lietuvos prabangių gėrimų gamintoju, derindami paveldą su šiuolaikiškumu."
        },
        {
          year: "2024",
          title: "Šiandien",
          description: "Ir toliau kuriame išskirtinius gėrimus, atstovaujančius geriausiam Baltijos prabangai, eksportuojamus išrankiems klientams visame pasaulyje."
        }
      ]
    },
    ru: {
      title: "Наследие Совершенства",
      subtitle: "Путешествие Сквозь Время",
      timeline: [
        {
          year: "1892",
          title: "Начало",
          description: "Основанная в сердце Литвы, наша винокурня начинает свое путешествие с традиционными методами, передаваемыми из поколения в поколение."
        },
        {
          year: "1920",
          title: "Расширение",
          description: "Мы расширяем деятельность, внедряя итальянские техники, сохраняя при этом балтийское наследие и приверженность качеству."
        },
        {
          year: "1995",
          title: "Ренессанс",
          description: "После десятилетий традиций мы становимся ведущим производителем элитных спиртных напитков Литвы, сочетая наследие с современными инновациями."
        },
        {
          year: "2024",
          title: "Сегодня",
          description: "Мы продолжаем создавать исключительные спиртные напитки, представляющие лучшее балтийской роскоши, экспортируемые взыскательным клиентам по всему миру."
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white/5 to-burgundy/10 dark:from-black/20 dark:to-emerald/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-burgundy dark:text-gold mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-burgundy/80 dark:text-gold/80">
            {text.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-burgundy to-emerald opacity-30"></div>

          {text.timeline.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-xl">
                  <div className="text-gold font-bold text-lg mb-2">{item.year}</div>
                  <h3 className="font-serif text-2xl font-bold text-burgundy dark:text-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-burgundy/80 dark:text-gold/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white dark:border-black shadow-lg"></div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
