
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductsProps {
  language: string;
}

const Products = ({ language }: ProductsProps) => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const content = {
    en: {
      title: "Artisan Collection",
      subtitle: "Three Expressions of Mastery",
      products: [
        {
          name: "Baltijos Grappa",
          type: "Premium Grappa",
          description: "Distilled from the finest Lithuanian grape pomace, aged in French oak barrels for unparalleled complexity and depth.",
          details: "A testament to our craft, this grappa reveals layers of vanilla, honey, and subtle spice notes that dance on the palate.",
          specs: ["42% ABV", "Aged 5 Years", "French Oak", "Limited Edition"],
          price: "€180",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          name: "Žolelių Mystique",
          type: "Herbal Liqueur",
          description: "An ancient recipe featuring 27 carefully selected herbs from the pristine Baltic forests, creating an elixir of unmatched sophistication.",
          details: "Each bottle captures the essence of Lithuanian wilderness, with notes of juniper, elderflower, and wild honey.",
          specs: ["35% ABV", "27 Herbs", "Wild Honey", "Traditional Recipe"],
          price: "€120",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          name: "Citrus Royale",
          type: "Artisan Limoncello",
          description: "Handcrafted using organic Amalfi lemons and traditional methods, elevated with Baltic precision and attention to detail.",
          details: "Pure elegance in liquid form, with bright citrus notes and a silky smooth finish that lingers beautifully.",
          specs: ["28% ABV", "Amalfi Lemons", "Hand Crafted", "Pure Elegance"],
          price: "€95",
          image: "photo-1500673922987-e212871fec22"
        }
      ]
    },
    lt: {
      title: "Menininkų Kolekcija",
      subtitle: "Trys Meistriškumo Išraiškos",
      products: [
        {
          name: "Baltijos Grappa",
          type: "Premium Grappa",
          description: "Distiliuota iš geriausių Lietuvos vynuogių išspaudų, brandintas prancūziškuose ąžuolo statinėse neprilygstamai sudėtingumui.",
          details: "Mūsų meistravimo įrodymas - ši grappa atskleidžia vanilės, medaus ir subtilių prieskonių sluoksnius.",
          specs: ["42% ABV", "Brandinta 5 m.", "Prancūzų Ąžuolas", "Ribota Serija"],
          price: "€180",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          name: "Žolelių Mystique",
          type: "Žolelių Likeris",
          description: "Senovinis receptas su 27 kruopščiai parinktomis žolelėmis iš nesugadintų Baltijos miškų.",
          details: "Kiekvienas butelis įkvepia Lietuvos gamtos esmę su kadagio, šeivamedžio ir laukinio medaus notomis.",
          specs: ["35% ABV", "27 Žolelės", "Laukinis Medus", "Tradicinis Receptas"],
          price: "€120",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          name: "Citrus Royale",
          type: "Meistro Limoncello",
          description: "Gamintas rankomis iš ekologiškų Amalfi citrinų, pakeliamas Baltijos tikslumu ir dėmesiu detalėms.",
          details: "Gryna elegancija skystos formos pavidalu, su ryškiomis citrusinėmis notomis ir švelniu finimu.",
          specs: ["28% ABV", "Amalfi Citrina", "Rankų Darbas", "Gryna Elegancija"],
          price: "€95",
          image: "photo-1500673922987-e212871fec22"
        }
      ]
    },
    ru: {
      title: "Коллекция Мастеров",
      subtitle: "Три Выражения Мастерства",
      products: [
        {
          name: "Балтийская Граппа",
          type: "Премиум Граппа",
          description: "Дистиллированная из лучшего литовского виноградного жмыха, выдержанная в французских дубовых бочках.",
          details: "Свидетельство нашего мастерства - эта граппа раскрывает слои ванили, меда и тонких пряных нот.",
          specs: ["42% ABV", "Выдержка 5 лет", "Французский Дуб", "Лимитированная Серия"],
          price: "€180",
          image: "photo-1569529465841-dfecdab7503b"
        },
        {
          name: "Травяная Мистика",
          type: "Травяной Ликер",
          description: "Древний рецепт с 27 тщательно отобранными травами из нетронутых балтийских лесов.",
          details: "Каждая бутылка передает сущность литовской природы с нотами можжевельника, бузины и дикого меда.",
          specs: ["35% ABV", "27 Трав", "Дикий Мед", "Традиционный Рецепт"],
          price: "€120",
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          name: "Королевский Цитрус",
          type: "Артизанский Лимончелло",
          description: "Изготовлен вручную из органических лимонов Амальфи, усовершенствован балтийской точностью.",
          details: "Чистая элегантность в жидкой форме с яркими цитрусовыми нотами и шелковистым послевкусием.",
          specs: ["28% ABV", "Лимоны Амальфи", "Ручная Работа", "Чистая Элегантность"],
          price: "€95",
          image: "photo-1500673922987-e212871fec22"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-cream to-pearl dark:from-midnight dark:to-deep-navy">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-deep-navy dark:text-pearl mb-6">
            {text.title}
          </h2>
          <p className="text-2xl text-charcoal/80 dark:text-platinum/80 font-light max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {text.products.map((product, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden glass-effect hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer border-0"
              onMouseEnter={() => setActiveProduct(index)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/${product.image}?q=80&w=800&h=1200')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
                
                {/* Premium Price Badge */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-luxury-gradient text-midnight font-bold px-4 py-2 text-lg">
                    {product.price}
                  </Badge>
                </div>
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
                  
                  <div className="grid grid-cols-2 gap-2">
                    {product.specs.map((spec, specIndex) => (
                      <span 
                        key={specIndex} 
                        className="text-xs text-rich-gold bg-rich-gold/10 px-3 py-2 rounded-full border border-rich-gold/20 text-center"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
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
