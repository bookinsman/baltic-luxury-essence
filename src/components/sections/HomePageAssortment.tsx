import React, { useState, useEffect, useRef, useContext } from 'react';
import ProductCard from '@/components/ProductCard';
import { LanguageContext } from '@/App';

const content = {
  lt: {
    title: "Mūsų Asortimentas",
    headerIntro1: `"Lorenzo Inga" prekinis ženklas apima rinktinius gėrimus, kurie yra Pjemonto ir kitų Italijos regionų pasididžiavimas. Kiekvienas iš šių produktų išlaiko senovinių, iš kartus į kartą perduodamų receptų dvasią.`,
    headerIntro2: `<strong>Atraskite "Baby" formatą!</strong> Miniatiūriniai buteliukai – puikus būdas išbandyti skonį be didelių įsipareigojimų. Jie taip pat yra tobula, nedidelė dovanėlė ar stalo akcentas.`,
    liqueursTitle: "Likeriai",
    liqueursIntro: "Ne tik citrinos! Apelsinų, melionų ir šokolado likeriai įrodo, kad Italija gali nustebinti skonių įvairove. Kuris taps jūsų mėgstamiausiu?",
    grappaTitle: "Grappa",
    grappaIntro: "Grappa – itališkos dvasios esmė. Kiekviena rūšis turi savo unikalų charakterį, todėl puikiai tinka prie kavos, desertų ar kaip digestivas po vakarienės. Pasidalinkite savo patirtimi!",
    giftsTitle: "Dovanų Rinkiniai",
    panareaTitle: "Panarea",
    panareaIntro: "Panarea – tai salų perlas, įkvėpęs sukurti išskirtinio skonio džiną ir degtinę. Viduržemio jūros gaiva ir unikalūs ingredientai.",
    products: [
        { name: 'My Limoncello', description: 'Šis tradicinis italų citrinų likeris – lyg saulėta diena Neapolio pakrantėje. Mėgaukitės atšaldytu, su ledu ar kaip kokteilių pagrindu.', volume: '500 ml', strength: '30%', image: '/My Limoncello.png', category: 'liqueur' },
        { name: 'My Limoncello baby', description: 'Mažesnis buteliukas – ta pati itališka saulė. Puikiai tinka dovanai ar tiesiog paragauti.', volume: '200 ml', strength: '30%', image: '/My Limoncello.png', category: 'liqueur' },
        { name: 'Limoncello originale', description: 'Klasikinis skonis, įkvėptas senųjų Italijos receptų. Tiems, kurie vertina autentiškumą ir tradicijas.', volume: '700 ml', strength: '25%', image: '/Limoncello originale.png', category: 'liqueur' },
        { name: 'Black Limoncello', description: 'Neįprasta, bet nepaprastai viliojanti citrinų likerio versija. Tamsus, paslaptingas, su subtiliu juodųjų citrinų arbatos poskoniu.', volume: '700 ml', strength: '30%', image: '/Black Limoncello.png', category: 'liqueur' },
        { name: 'My Arancello', description: 'Sicilijos apelsinų gaiva Jūsų taurėje. Saldus, bet su charakteriu – puikus aperityvas.', volume: '700 ml', strength: '17%', image: '/Arancello.png', category: 'liqueur' },
        { name: 'My Meloncelo', description: 'Vasaros skonis butelyje. Prinokusių melionų aromatas ir saldumas, kuris nukels į saulėtą Italijos popietę.', volume: '700 ml', strength: '17%', image: '/Meloncello.png', category: 'liqueur' },
        { name: 'Antico Amaro di Serravalle', description: 'Kartus, aromatingas žolelių likeris, kuris puikiai užbaigia valgį. Ne veltui italai jį vadina "digestivu" – tai tikra pagalba virškinimui.', volume: '500 ml', strength: '30%', image: '/Antico Amaro di Serravalle.png', category: 'liqueur' },
        { name: 'Antico Amaro baby', description: 'Išbandykite itališkų žolelių galią mažame formate. Tas pats sodrus skonis, idealus po sočios vakarienės.', volume: '200 ml', strength: '30%', image: '/Antico Amaro di Serravalle.png', category: 'liqueur' },
        { name: 'My Cioccolo baby', description: 'Kreminis šokolado malonumas. Tirštas, saldus ir tiesiog tirpstantis burnoje – desertas, kuriam nereikia lėkštės.', volume: '200 ml', strength: '17%', image: '/My Cioccolo baby.png', category: 'liqueur' },
        { name: 'Amaretto', description: 'Saldžiųjų migdolų ir abrikosų kauliukų harmonija. Klasikinis skonis, be kurio neįsivaizduojama itališka kava ar desertas.', volume: '500 ml', strength: '28%', image: '/Amaretto.png', category: 'liqueur' },
        { name: 'Lorenzo Inga Grappa Amarone', description: 'Pagaminta iš didingųjų Amarone vynuogių. Sodrus, kompleksiškas skonis su džiovintų vaisių natomis. Tikriems žinovams.', volume: '500 ml', strength: '40%', image: '/Lorenzo Inga Grappa Amarone.png', category: 'grappa' },
        { name: 'My Grappa Barrique baby', description: 'Ąžuolo statinėse brandinta grappa. Jaučiamas vanilės ir prieskonių poskonis. Mažas formatas – didelis atradimas.', volume: '200 ml', strength: '43%', image: '/My Grappa Barrique baby.png', category: 'grappa' },
        { name: 'My Grappa White Prosecco', description: 'Lengva ir gaivi, pagaminta iš Prosecco vynuogių. Švelnus gėlių ir vaisių aromatas. Puikus pasirinkimas pradedant pažintį su grappa.', volume: '500 ml', strength: '40%', image: '/My Grappa White Prosecco.png', category: 'grappa' },
        { name: 'My Grappa White Barolo', description: 'Griežtas ir solidus Barolo vynuogių charakteris. Intensyvus skonis, reikalaujantis pagarbos ir lėto mėgavimosi.', volume: '500 ml', strength: '40%', image: '/My Grappa White Barolo.png', category: 'grappa' },
        { name: 'Villa Serravalle Invecchiata', description: 'Distiliatas brandinamas 12 mėnesių prancūziško Limuzeno ąžuolo statinėse. Šio kruopštaus brandinimo proceso rezultatas – švelnus, gintaro spalvos brendis su vaisių, vanilės ir subtilių prieskonių užuominomis.', volume: '700 ml', strength: '40%', image: '/Villa Serravalle Invecchiata .png', category: 'grappa' },
        { name: 'Villa Serravalle Nebbiolo', description: 'Gintaro spalvą su auksiniais atspalviais lydi intensyvus ir taninų kupinas aromatas su pikantiškos vanilės natomis.', volume: '700 ml', strength: '40%', image: '/Villa Serravalle Nebbiolo.png', category: 'grappa' },
        { name: 'Maestro Cafè', description: 'Klasikinis kavos likeris su sodriu ir intensyviu espreso skoniu.', volume: '700 ml', strength: '25%', image: '/Maestro Cafè.png', category: 'liqueur' },
        { name: 'Panarea Vodka', description: 'Pagaminta iš gryno itališko grūdų spirito, Panarea degtinė turi Viduržemio jūros regiono aromatų, kurie puikiai dera su garsiais kokteiliais, tokiais kaip Vodka Martini.', volume: '700 ml', strength: '40%', image: '/Panarea Vodka.png', category: 'panarea' },
        { name: 'Panarea Island Gin', description: 'Citrusinis ir aštrus skonis puikiai dera su kitais alkoholiniais ir nealkoholiniais gėrimais. Alkoholio kiekis – 44%, o formulėje nėra glitimo, alergenų ar dirbtinių priedų.', volume: '700 ml', strength: '44%', image: '/Panarea Island.png', category: 'panarea' },
        { name: 'Panarea Sunset Gin', description: 'Gomuryje iš karto išsiskiria citrinų, apelsinų ir greipfrutų natos. Čia taip pat alkoholio kiekis yra 44%, ir nėra jokių alergenų ar dirbtinių priedų.', volume: '700 ml', strength: '44%', image: '/Panarea Sunset.png', category: 'panarea' },
        { name: 'Dovanų rinkinys: Limoncello + 2 keraminės taurelės', description: 'Viskas, ko reikia tobulam Limoncello ritualui. Stilinga dovana, kuri pradžiugins kiekvieną itališkų skonių gerėją.', volume: '500 ml', strength: '30%', image: '/dovana.png', category: 'gift' },
    ]
  },
  en: {
    title: "Our Assortment",
    headerIntro1: `The "Lorenzo Inga" brand includes a selection of drinks that are the pride of Piedmont and other Italian regions. Each of these products maintains the spirit of ancient recipes passed down from generation to generation.`,
    headerIntro2: `<strong>Discover the "Baby" format!</strong> Miniature bottles are a great way to try a taste without a big commitment. They also make a perfect, small gift or a table accent.`,
    liqueursTitle: "Liqueurs",
    liqueursIntro: "Not just lemons! Orange, melon, and chocolate liqueurs prove that Italy can surprise with a variety of flavors. Which will become your favorite?",
    grappaTitle: "Grappa",
    grappaIntro: "Grappa is the essence of the Italian spirit. Each type has its own unique character, making it perfect with coffee, desserts, or as a digestif after dinner. Share your experience!",
    giftsTitle: "Gift Sets",
    panareaTitle: "Panarea",
    panareaIntro: "Panarea is the pearl of the islands, inspiring the creation of a gin and vodka of exceptional taste. Mediterranean freshness and unique ingredients.",
    products: [
        { name: 'My Limoncello', description: 'This traditional Italian lemon liqueur is like a sunny day on the coast of Naples. Enjoy it chilled, with ice, or as a base for cocktails.', volume: '500 ml', strength: '30%', image: '/My Limoncello.png', category: 'liqueur' },
        { name: 'My Limoncello baby', description: 'A smaller bottle - the same Italian sun. Perfect for a gift or just to taste.', volume: '200 ml', strength: '30%', image: '/My Limoncello.png', category: 'liqueur' },
        { name: 'Limoncello originale', description: 'A classic taste inspired by old Italian recipes. For those who appreciate authenticity and tradition.', volume: '700 ml', strength: '25%', image: '/Limoncello originale.png', category: 'liqueur' },
        { name: 'Black Limoncello', description: 'An unusual but incredibly enticing version of lemon liqueur. Dark, mysterious, with a subtle aftertaste of black lemon tea.', volume: '700 ml', strength: '30%', image: '/Black Limoncello.png', category: 'liqueur' },
        { name: 'My Arancello', description: 'The freshness of Sicilian oranges in your glass. Sweet, but with character - a perfect aperitif.', volume: '700 ml', strength: '17%', image: '/Arancello.png', category: 'liqueur' },
        { name: 'My Meloncelo', description: 'The taste of summer in a bottle. The aroma and sweetness of ripe melons will transport you to a sunny Italian afternoon.', volume: '700 ml', strength: '17%', image: '/Meloncello.png', category: 'liqueur' },
        { name: 'Antico Amaro di Serravalle', description: 'A bitter, aromatic herbal liqueur that perfectly concludes a meal. No wonder the Italians call it a "digestivo" - it\'s real help for digestion.', volume: '500 ml', strength: '30%', image: '/Antico Amaro di Serravalle.png', category: 'liqueur' },
        { name: 'Antico Amaro baby', description: 'Try the power of Italian herbs in a small format. The same rich taste, ideal after a hearty dinner.', volume: '200 ml', strength: '30%', image: '/Antico Amaro di Serravalle.png', category: 'liqueur' },
        { name: 'My Cioccolo baby', description: 'Creamy chocolate pleasure. Thick, sweet, and just melts in your mouth - a dessert that doesn\'t need a plate.', volume: '200 ml', strength: '17%', image: '/My Cioccolo baby.png', category: 'liqueur' },
        { name: 'Amaretto', description: 'The harmony of sweet almonds and apricot kernels. A classic taste without which Italian coffee or dessert is unimaginable.', volume: '500 ml', strength: '28%', image: '/Amaretto.png', category: 'liqueur' },
        { name: 'Lorenzo Inga Grappa Amarone', description: 'Made from the magnificent Amarone grapes. A rich, complex taste with notes of dried fruit. For true connoisseurs.', volume: '500 ml', strength: '40%', image: '/Lorenzo Inga Grappa Amarone.png', category: 'grappa' },
        { name: 'My Grappa Barrique baby', description: 'Grappa aged in oak barrels. A noticeable aftertaste of vanilla and spices. A small format - a great discovery.', volume: '200 ml', strength: '43%', image: '/My Grappa Barrique baby.png', category: 'grappa' },
        { name: 'My Grappa White Prosecco', description: 'Light and refreshing, made from Prosecco grapes. A gentle aroma of flowers and fruits. A great choice for starting your acquaintance with grappa.', volume: '500 ml', strength: '40%', image: '/My Grappa White Prosecco.png', category: 'grappa' },
        { name: 'My Grappa White Barolo', description: 'The strict and solid character of Barolo grapes. An intense taste that demands respect and slow enjoyment.', volume: '500 ml', strength: '40%', image: '/My Grappa White Barolo.png', category: 'grappa' },
        { name: 'Villa Serravalle Invecchiata', description: 'The distillate is aged for 12 months in French Limousin oak barrels. The result of this laborious aging process is a smooth brandy, amber colored and with hints of fruit, vanilla, and delicate spices.', volume: '700 ml', strength: '40%', image: '/Villa Serravalle Invecchiata .png', category: 'grappa' },
        { name: 'Villa Serravalle Nebbiolo', description: 'The amber color with golden hues is accompanied by an intense and tannic aroma with hints of spiced vanilla.', volume: '700 ml', strength: '40%', image: '/Villa Serravalle Nebbiolo.png', category: 'grappa' },
        { name: 'Maestro Cafè', description: 'A classic coffee liqueur with a rich and intense espresso flavor.', volume: '700 ml', strength: '25%', image: '/Maestro Cafè.png', category: 'liqueur' },
        { name: 'Panarea Vodka', description: 'Distilled from pure Italian grain alcohol, Panarea Vodka contains Mediterranean aromas that go well with famous cocktails such as the Vodka Martini.', volume: '700 ml', strength: '40%', image: '/Panarea Vodka.png', category: 'panarea' },
        { name: 'Panarea Island Gin', description: 'The citrusy and spicy flavor interacts nicely with other alcoholic and non-alcoholic beverages. The alcohol content is 44% and the formula contains no gluten, allergens, or artificial additives.', volume: '700 ml', strength: '44%', image: '/Panarea Island.png', category: 'panarea' },
        { name: 'Panarea Sunset Gin', description: 'On the palate, notes of lemon, orange and grapefruit immediately stand out. Here too, the alcohol content is 44% and there is no trace of allergens or artificial additives.', volume: '700 ml', strength: '44%', image: '/Panarea Sunset.png', category: 'panarea' },
        { name: 'Gift Set: Limoncello + 2 Ceramic Cups', description: 'Everything you need for the perfect Limoncello ritual. A stylish gift that will delight any fan of Italian flavors.', volume: '500 ml', strength: '30%', image: '/dovana.png', category: 'gift' },
    ]
  }
};

const AnimatedProductCard: React.FC<any> = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <ProductCard
        name={product.name}
        description={product.description}
        image={product.image}
        volume={product.volume}
        strength={product.strength}
      />
    </div>
  );
};

const ProductSection: React.FC<{ title: string; products: any[]; introduction?: string }> = ({ title, products, introduction }) => (
  <section className="mb-20">
    <h2 className="text-4xl font-bold text-deep-navy mb-6 font-display border-l-4 border-rich-gold pl-4">
      {title}
    </h2>
    {introduction && (
      <p className="mb-8 text-lg text-charcoal/80 font-light max-w-3xl">
        {introduction}
      </p>
    )}
    <div className="mobile-two-columns">
      {products.map((product, index) => (
        <AnimatedProductCard key={product.name} product={product} index={index} />
      ))}
    </div>
  </section>
);

const HomePageAssortment = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language as keyof typeof content] || content.lt;

  const allProducts = text.products;
  const liqueurs = allProducts.filter(p => p.category === 'liqueur');
  const grappas = allProducts.filter(p => p.category === 'grappa');
  const gifts = allProducts.filter(p => p.category === 'gift');
  const panarea = allProducts.filter(p => p.category === 'panarea');

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);

  return (
    <div 
      id="asortimentas-section"
      className="bg-cream text-charcoal py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 
            ref={el => (itemRefs.current[0] = el)}
            className={`text-5xl md:text-6xl font-bold text-deep-navy mb-4 font-display transition-all duration-700 ease-out ${visibleItems.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {text.title}
          </h1>
          <div 
             ref={el => (itemRefs.current[1] = el)}
            className={`w-48 h-1 bg-gradient-to-r from-transparent via-rich-gold to-transparent mx-auto my-6 transition-all duration-700 ease-out ${visibleItems.includes(1) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            style={{ transitionDelay: '150ms' }}
          ></div>
          <p 
            ref={el => (itemRefs.current[2] = el)}
            className={`text-lg md:text-xl text-charcoal/80 font-light max-w-3xl mx-auto transition-all duration-700 ease-out ${visibleItems.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
            dangerouslySetInnerHTML={{ __html: text.headerIntro1 }}
          >
          </p>
          <p 
            ref={el => (itemRefs.current[3] = el)}
            className={`text-lg md:text-xl text-charcoal/80 font-light max-w-3xl mx-auto mt-6 transition-all duration-700 ease-out ${visibleItems.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '450ms' }}
            dangerouslySetInnerHTML={{ __html: text.headerIntro2 }}
          >
          </p>
        </header>

        <div className="space-y-16">
          <ProductSection 
            title={text.liqueursTitle} 
            products={liqueurs}
            introduction={text.liqueursIntro}
          />
          <ProductSection 
            title={text.grappaTitle} 
            products={grappas}
            introduction={text.grappaIntro}
          />
          <ProductSection
            title={text.panareaTitle}
            products={panarea}
            introduction={text.panareaIntro}
          />
          <ProductSection title={text.giftsTitle} products={gifts} />
        </div>
      </div>
    </div>
  );
};

export default HomePageAssortment; 