
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductsProps {
  language: string;
}

const Products = ({ language }: ProductsProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const content = {
    en: {
      title: "Our Premium Collection",
      subtitle: "Three Masterpieces of Baltic Craftsmanship",
      products: [
        {
          name: "Baltijos Grappa",
          type: "Premium Grappa",
          description: "Distilled from the finest Baltic grape pomace, aged in oak barrels for exceptional smoothness and complex flavor profiles.",
          notes: ["Rich amber color", "Notes of vanilla & honey", "42% ABV", "Limited edition"],
          image: "photo-1721322800607-8c38375eef04"
        },
        {
          name: "Žolelių Likeriai",
          type: "Herbal Liqueurs",
          description: "Traditional Lithuanian herbal liqueurs crafted with 25 carefully selected herbs and spices from the Baltic region.",
          notes: ["Deep golden hue", "Herbal complexity", "35% ABV", "Family recipe"],
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          name: "Citrusų Limoncello",
          type: "Artisan Limoncello",
          description: "Handcrafted limoncello using organic lemons and traditional Italian methods, perfected with Baltic precision.",
          notes: ["Bright yellow color", "Zesty citrus burst", "28% ABV", "Artisan crafted"],
          image: "photo-1500673922987-e212871fec22"
        }
      ]
    },
    lt: {
      title: "Mūsų Premium Kolekcija",
      subtitle: "Trys Baltijos Meistriškumo Šedevrai",
      products: [
        {
          name: "Baltijos Grappa",
          type: "Premium Grappa",
          description: "Distiliuota iš geriausių Baltijos vynuogių išspaudų, brandintos ąžuolo statinėse išskirtiniam švelnumui ir sudėtingam skoniui.",
          notes: ["Turtinga gintaro spalva", "Vanilės ir medaus natos", "42% ABV", "Riboto leidimo"],
          image: "photo-1721322800607-8c38375eef04"
        },
        {
          name: "Žolelių Likeriai",
          type: "Žolelių Likeriai",
          description: "Tradiciniai lietuviški žolelių likeriai, pagaminti iš 25 kruopščiai parinktų žolių ir prieskonių iš Baltijos regiono.",
          notes: ["Gilus aukso atspalvis", "Žolelių sudėtingumas", "35% ABV", "Šeimos receptas"],
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          name: "Citrusų Limoncello",
          type: "Meistro Limoncello",
          description: "Rankomis gamintas limoncello iš ekologiškų citrinų ir tradicinių italų metodų, tobulėjant Baltijos tikslumu.",
          notes: ["Ryški geltona spalva", "Citrusinė gaiva", "28% ABV", "Meistro darbas"],
          image: "photo-1500673922987-e212871fec22"
        }
      ]
    },
    ru: {
      title: "Наша Премиальная Коллекция",
      subtitle: "Три Шедевра Балтийского Мастерства",
      products: [
        {
          name: "Балтийская Граппа",
          type: "Премиум Граппа",
          description: "Дистиллированная из лучшего балтийского виноградного жмыха, выдержанная в дубовых бочках для исключительной мягкости.",
          notes: ["Насыщенный янтарный цвет", "Ноты ванили и меда", "42% ABV", "Лимитированная серия"],
          image: "photo-1721322800607-8c38375eef04"
        },
        {
          name: "Травяные Ликеры",
          type: "Травяные Ликеры",
          description: "Традиционные литовские травяные ликеры, созданные из 25 тщательно отобранных трав и специй Балтийского региона.",
          notes: ["Глубокий золотой оттенок", "Травяная сложность", "35% ABV", "Семейный рецепт"],
          image: "photo-1470071459604-3b5ec3a7fe05"
        },
        {
          name: "Цитрусовый Лимончелло",
          type: "Артизанский Лимончелло",
          description: "Ручной лимончелло из органических лимонов и традиционных итальянских методов, усовершенствованный балтийской точностью.",
          notes: ["Яркий желтый цвет", "Цитрусовый взрыв", "28% ABV", "Ремесленная работа"],
          image: "photo-1500673922987-e212871fec22"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-burgundy dark:text-gold mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-burgundy/80 dark:text-gold/80 max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {text.products.map((product, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/20 dark:bg-black/30 backdrop-blur-sm border-white/30 dark:border-gold/20 hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/${product.image}?q=80&w=800&h=1200')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent transition-opacity duration-300 ${
                  hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="text-sm text-gold font-medium tracking-wider uppercase">
                    {product.type}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">
                  {product.name}
                </h3>
                
                <div className={`transition-all duration-300 ${
                  hoveredProduct === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <p className="text-sm text-white/90 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.notes.map((note, noteIndex) => (
                      <span key={noteIndex} className="text-xs text-gold bg-white/10 px-2 py-1 rounded">
                        {note}
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
