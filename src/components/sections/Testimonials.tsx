
import { useState, useEffect } from 'react';

interface TestimonialsProps {
  language: string;
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
    en: {
      title: "What Connoisseurs Say",
      testimonials: [
        {
          text: "Baltica's Grappa is simply extraordinary. The depth of flavor and smoothness is unmatched in the Baltic region. A true masterpiece.",
          author: "Marcus Kellerman",
          title: "Wine & Spirits Critic",
          location: "Stockholm"
        },
        {
          text: "The herbal liqueurs transport you to the mystical forests of Lithuania. Each sip tells a story of tradition and craftsmanship.",
          author: "Elena Rossi",
          title: "Luxury Lifestyle Magazine",
          location: "Milano"
        },
        {
          text: "Their Limoncello rivals the finest Italian productions. The Baltic precision brings a unique character that's absolutely captivating.",
          author: "James Morrison",
          title: "Michelin Star Sommelier",
          location: "London"
        }
      ]
    },
    lt: {
      title: "Ką Sako Žinovai",
      testimonials: [
        {
          text: "Baltica Grappa yra tiesiog neįtikėtina. Skonio gylis ir švelnumas neturi konkurentų Baltijos regione. Tikras šedevras.",
          author: "Marcus Kellerman",
          title: "Vyno ir Stipriųjų Gėrimų Kritikas",
          location: "Stokholmas"
        },
        {
          text: "Žolelių likeriai nukelia į paslaptingus Lietuvos miškus. Kiekvienas gurkšnis pasakoja tradicijų ir meistriškumo istoriją.",
          author: "Elena Rossi",
          title: "Prabangos Gyvenimo Žurnalas",
          location: "Milanas"
        },
        {
          text: "Jų Limoncello konkuruoja su geriausiais italų produktais. Baltijos tikslumas suteikia unikalų charakterį, kuris tiesiog žavi.",
          author: "James Morrison",
          title: "Michelin Žvaigždės Someljė",
          location: "Londonas"
        }
      ]
    },
    ru: {
      title: "Что Говорят Знатоки",
      testimonials: [
        {
          text: "Граппа Baltica просто необыкновенна. Глубина вкуса и мягкость не имеют равных в Балтийском регионе. Истинный шедевр.",
          author: "Маркус Келлерман",
          title: "Критик Вин и Крепких Напитков",
          location: "Стокгольм"
        },
        {
          text: "Травяные ликеры переносят в мистические леса Литвы. Каждый глоток рассказывает историю традиций и мастерства.",
          author: "Елена Росси",
          title: "Журнал Роскошного Образа Жизни",
          location: "Милан"
        },
        {
          text: "Их Лимончелло соперничает с лучшими итальянскими образцами. Балтийская точность придает уникальный характер, который абсолютно пленителен.",
          author: "Джеймс Моррисон",
          title: "Сомелье Звезды Мишлен",
          location: "Лондон"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % text.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [text.testimonials.length]);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&h=4000')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-burgundy/60 to-emerald/40"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold mb-16 animate-fade-in">
          {text.title}
        </h2>

        <div className="relative h-80 flex items-center justify-center">
          {text.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentTestimonial
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-8">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-0.5 bg-gold mb-4"></div>
                <cite className="not-italic text-gold font-semibold text-lg">
                  {testimonial.author}
                </cite>
                <p className="text-white/80 text-sm mt-1">
                  {testimonial.title} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {text.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gold w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
