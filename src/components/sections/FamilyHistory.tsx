import React, { useState, useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '@/App';

const content = {
  lt: {
    title: "Inga šeima",
    subtitle: "spiritinių gėrimų ir likerių gamybos tradicija",
    description: "<span className='text-rich-gold'>Penkias kartas</span> Inga šeima buvo įsipareigojusi tęsti tvirtą aukštos kokybės spiritinių gėrimų ir likerių gamybos tradiciją. Pirmieji vaistažolių eliksyrai buvo sukurti <span className='text-rich-gold'>1832 m.</span> Tai yra kilmės data, momentas, kai šiandieninės įmonės protėviai jau pradėjo eksperimentuoti su užpilais, kurie iki šiol yra įmonės dalis. Senovės ir valstiečių žinios, kurios pasiekia XX amžiaus vartus – laikotarpį, kai <span className='text-rich-gold'>Gaetano Inga</span> darbas brendžio ir Marsalos vyno gamyboje tampa žinomas Noto provincijoje."
  },
  en: {
    title: "La famiglia Inga",
    subtitle: "a tradition of spirits and liqueur production",
    description: "For <span className='text-rich-gold'>five generations</span>, the Inga family has been committed to carrying on a solid tradition in the production of high quality spirits and liqueurs. The first elixirs of medicinal herbs were elaborated in <span className='text-rich-gold'>1832</span>. That is the date of origin, the moment in which the ancestors of today's company already began to experiment with the infusions that are still part of the company today. An ancient and peasant knowledge that reaches up to the gates of the twentieth century – a period in which the work of <span className='text-rich-gold'>Gaetano Inga</span> in the production of brandy and Marsala wine becomes known in the province of Noto."
  }
}

const FamilyHistory = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language as keyof typeof content] || content.en;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/family.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto max-w-4xl text-center relative">
        <h2
          className={`text-4xl md:text-5xl font-display font-bold text-rich-gold mb-2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {text.title}
        </h2>
        <h3
          className={`text-xl md:text-2xl font-display italic text-pearl/90 mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {text.subtitle}
        </h3>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-rich-gold to-transparent mx-auto mb-8"></div>
        <p
          className={`text-lg md:text-xl text-pearl/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
          dangerouslySetInnerHTML={{ __html: text.description }}
        />
      </div>
    </section>
  );
};

export default FamilyHistory; 