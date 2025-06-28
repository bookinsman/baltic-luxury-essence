import { useState, useEffect, useRef, useContext } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LanguageContext } from '@/App';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Artisan Collection",
      subtitle: "Three Expressions of Mastery",
      products: [
        {
          name: "GRAPPA DI BRUNELLO",
          type: "Premium Grappa",
          description: "Ekstra klasės grappa, destiliuota iš Sangiovese vynuogių.",
          details: "Išsiskiria vaisių aromatu ir vanilės bei laukinių uogų natomis",
          image: "/Grappa.jpg"
        },
        {
          name: "Žolelių Mystique",
          type: "Herbal Liqueur",
          description: "An ancient recipe featuring 27 carefully selected herbs from the pristine Baltic forests, creating an elixir of unmatched sophistication.",
          details: "Each bottle captures the essence of Lithuanian wilderness, with notes of juniper, elderflower, and wild honey.",
          image: "/liqour.jpg"
        },
        {
          name: "Citrus Royale",
          type: "Artisan Limoncello",
          description: "Stipresnė (30% alk.) nei tradicinis limoncello, šis likeris gaminamas iš Sicilijos citrinų žievelių ir sulčių.",
          details: "Intensyvus, bet elegantiškas - švelnios citrinų sultys harmoningai susilieja su žievelių kartumu.",
          image: "/limon.jpg"
        }
      ]
    },
    lt: {
      title: "KŪRYBOS TRILOGIJA",
      subtitle: "Trys Meistriškumo Išraiškos",
      products: [
        {
          name: "GRAPPA DI BRUNELLO",
          type: "Premium Grappa",
          description: "Ekstra klasės grappa, destiliuota iš Sangiovese vynuogių.",
          details: "Išsiskiria vaisių aromatu ir vanilės bei laukinių uogų natomis",
          image: "/Grappa.jpg"
        },
        {
          name: "Antico Amaro di Serravalle",
          type: "Žolelių Likeris",
          description: "Gaunamas užpilant daugiau nei 20 skirtingų žolelių, augalų, šaknų ir medžių žievių.",
          details: "Tai virškinimą gerinantis likeris, kuriuo geriausia mėgautis kaip aperityvu su ledu arba kaip kokteilio dalimi.",
          image: "/liqour.jpg"
        },
        {
          name: "My Limoncello",
          type: "Citrinų Esencė",
          description: "Stipresnė (30% alk.) nei tradicinis limoncello, šis likeris gaminamas iš Sicilijos citrinų žievelių ir sulčių.",
          details: "Intensyvus, bet elegantiškas - švelnios citrinų sultys harmoningai susilieja su žievelių kartumu",
          image: "/limon.jpg"
        }
      ]
    },
    ru: {
      title: "Коллекция Мастеров",
      subtitle: "Три Выражения Мастерства",
      products: [
        {
          name: "GRAPPA DI BRUNELLO",
          type: "Премиум Граппа",
          description: "Граппа экстра-класса, дистиллированная из винограда Санджовезе.",
          details: "Свидетельство нашего мастерства - эта граппа раскрывает слои ванили, меда и тонких пряных нот.",
          image: "/Grappa.jpg"
        },
        {
          name: "Травяная Мистика",
          type: "Травяной Ликер",
          description: "Древний рецепт с 27 тщательно отобранными травами из нетронутых балтийских лесов.",
          details: "Каждая бутылка передает сущность литовской природы с нотами можжевельника, бузины и дикого меда.",
          image: "/liqour.jpg"
        },
        {
          name: "Королевский Цитрус",
          type: "Артизанский Лимончелло",
          description: "Изготовлен вручную из органических лимонов Амальфи, усовершенствован балтийской точностью.",
          details: "Чистая элегантность в жидкой форме с яркими цитрусовыми нотами и шелковистым послевкусием.",
          image: "/limon.jpg"
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
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [itemRefs]);

  return (
    <section id="products-section" className="py-32 px-6" style={{ backgroundColor: 'hsl(29.8deg 94.88% 35.1% / 85%)' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
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
            className={`text-2xl text-charcoal/80 dark:text-platinum/80 font-light max-w-2xl mx-auto transition-all duration-700 ${
              visibleItems.includes(1) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {text.products.map((product, index) => (
            <Card
              key={index}
              ref={el => itemRefs.current[index + 2] = el}
              className={`group relative overflow-hidden glass-effect transition-all duration-500 hover:shadow-2xl cursor-pointer border-0 ${
                visibleItems.includes(index + 2) 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 0.2}s` }}
              onMouseEnter={() => setActiveProduct(index)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${product.image}')`
                  }}
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
              </div>

              <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-pearl">
                <div className="mb-3">
                  <span className="text-sm text-rich-gold font-medium tracking-wider uppercase">
                    {product.type}
                  </span>
                </div>
                
                <h3 className="font-display text-3xl font-bold mb-4">
                  {product.name}
                </h3>
                
                <p className="text-platinum/90 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className={`transition-all duration-500 ${
                  activeProduct === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <p className="text-sm text-platinum/80 mb-4 italic leading-relaxed">
                    {product.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 