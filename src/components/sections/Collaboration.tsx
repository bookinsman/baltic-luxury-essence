import React, { useState, useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '@/App';

const content = {
  lt: {
    title: "Bendradarbiavimas",
    description: "Dėl bendradarbiavimo kreipkitės elektroniniu paštu arba skambinkite. Mielai atsiųsime visą mūsų asortimentą ir kainas."
  },
  en: {
    title: "Collaboration",
    description: "For collaboration inquiries, please contact us via email or phone. We will be happy to send you our full range of products and prices."
  }
}

const Collaboration = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language as keyof typeof content] || content.lt;
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-charcoal py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-repeat bg-center opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      <div className="container mx-auto max-w-4xl text-center relative">
        <h2
          className={`text-4xl md:text-5xl font-display font-bold text-rich-gold mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {text.title}
        </h2>
        <p
          className={`text-lg md:text-xl text-pearl/80 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {text.description}
        </p>
      </div>
    </section>
  );
};

export default Collaboration; 