import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  language: string;
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
    en: {
      title: "Voices of Excellence",
      subtitle: "What connoisseurs say about our craft",
      testimonials: [
        {
          text: "Baltica represents the pinnacle of Baltic distillation. Their Grappa rivals the finest Italian expressions while maintaining a distinctly Northern European character that is absolutely captivating.",
          author: "Marcus Kellerman",
          title: "Master Sommelier",
          location: "Copenhagen",
          rating: 5,
          // Image URL: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128
          image: "photo-1507003211169-0a1dd7228f2d"
        },
        {
          text: "The herbal liqueur is a symphony of flavors that transports you to the ancient forests of Lithuania. Each sip reveals new layers of complexity - truly a masterpiece of the distiller's art.",
          author: "Elena Rossi",
          title: "Spirits Critic",
          location: "Milan",
          rating: 5,
          // Image URL: https://images.unsplash.com/photo-1494790108755-2616b332c2c2?q=80&w=128&h=128
          image: "photo-1494790108755-2616b332c2c2"
        },
        {
          text: "Their approach to Limoncello is revolutionary. The Baltic precision combined with traditional Italian methods creates something entirely unique - elegant, refined, and utterly delicious.",
          author: "James Morrison",
          title: "Michelin Star Sommelier",
          location: "London",
          rating: 5,
          // Image URL: https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&h=128
          image: "photo-1472099645785-5658abf4ff4e"
        }
      ]
    },
    lt: {
      title: "Tobulumo Balsai",
      subtitle: "Ką žinovai sako apie mūsų meistriškumą",
      testimonials: [
        {
          text: "Baltica atstovauja Baltijos distiliavimo viršūnei. Jų Grappa konkuruoja su geriausiais italų pavyzdžiais, išlaikydama savitą Šiaurės Europos charakterį.",
          author: "Marcus Kellerman",
          title: "Meistras Someljė",
          location: "Kopenhaga",
          rating: 5,
          // Image URL: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128
          image: "photo-1507003211169-0a1dd7228f2d"
        },
        {
          text: "Žolelių likeris yra skonių simfonija, nukelianti į senovės Lietuvos miškus. Kiekvienas gurkšnis atskleidžia naują sudėtingumo lygmenį.",
          author: "Elena Rossi",
          title: "Gėrimų Kritikė",
          location: "Milanas",
          rating: 5,
          // Image URL: https://images.unsplash.com/photo-1494790108755-2616b332c2c2?q=80&w=128&h=128
          image: "photo-1494790108755-2616b332c2c2"
        },
        {
          text: "Jų Limoncello požiūris yra revoliucinis. Baltijos tikslumas su tradiciniais italų metodais kuria kažką visiškai unikalaus.",
          author: "James Morrison",
          title: "Michelin Žvaigždės Someljė",
          location: "Londonas",
          rating: 5,
          image: "photo-1472099645785-5658abf4ff4e"
        }
      ]
    },
    ru: {
      title: "Голоса Совершенства",
      subtitle: "Что знатоки говорят о нашем мастерстве",
      testimonials: [
        {
          text: "Baltica представляет вершину балтийской дистилляции. Их Граппа соперничает с лучшими итальянскими образцами, сохраняя отчетливо северноевропейский характер.",
          author: "Маркус Келлерман",
          title: "Мастер Сомелье",
          location: "Копенгаген",
          rating: 5,
          image: "photo-1507003211169-0a1dd7228f2d"
        },
        {
          text: "Травяной ликер - это симфония вкусов, переносящая в древние леса Литвы. Каждый глоток раскрывает новые слои сложности.",
          author: "Елена Росси",
          title: "Критик Напитков",
          location: "Милан",
          rating: 5,
          image: "photo-1494790108755-2616b332c2c2"
        },
        {
          text: "Их подход к Лимончелло революционен. Балтийская точность в сочетании с традиционными итальянскими методами создает что-то совершенно уникальное.",
          author: "Джеймс Моррисон",
          title: "Сомелье Звезды Мишлен",
          location: "Лондон",
          rating: 5,
          image: "photo-1472099645785-5658abf4ff4e"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % text.testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [text.testimonials.length]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-deep-navy to-charcoal"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=4000&h=2667')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/70 to-midnight/95"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-pearl mb-6">
            {text.title}
          </h2>
          <p className="text-2xl text-platinum/80 font-light">
            {text.subtitle}
          </p>
        </div>

        <div className="relative h-96 flex items-center justify-center">
          {text.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentTestimonial
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
                <Quote className="w-12 h-12 text-rich-gold mx-auto mb-8" />
                
                <blockquote className="text-2xl md:text-3xl text-pearl font-light leading-relaxed mb-8 font-serif italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${testimonial.image}?q=80&w=128&h=128`}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-rich-gold text-rich-gold" />
                      ))}
                    </div>
                    <cite className="not-italic text-rich-gold font-semibold text-xl font-display">
                      {testimonial.author}
                    </cite>
                    <p className="text-platinum/80 text-sm">
                      {testimonial.title} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Indicators */}
        <div className="flex justify-center space-x-4 mt-12">
          {text.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-rich-gold w-12'
                  : 'bg-platinum/40 hover:bg-platinum/60 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
