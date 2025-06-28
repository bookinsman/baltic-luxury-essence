import React from 'react';
import ProductCard from '@/components/ProductCard';

const allProducts = [
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
  { name: 'Dovanų rinkinys: Limoncello + 2 keraminės taurelės', description: 'Viskas, ko reikia tobulam Limoncello ritualui. Stilinga dovana, kuri pradžiugins kiekvieną itališkų skonių gerbėją.', volume: '500 ml', strength: '30%', image: '/dovana.png', category: 'gift' },
];

const liqueurs = allProducts.filter(p => p.category === 'liqueur');
const grappas = allProducts.filter(p => p.category === 'grappa');
const gifts = allProducts.filter(p => p.category === 'gift');

const ProductSection: React.FC<{ title: string; products: typeof allProducts; introduction?: string }> = ({ title, products, introduction }) => (
  <section className="mb-20">
    <h2 className="text-4xl font-bold text-deep-navy mb-6 font-display border-l-4 border-rich-gold pl-4">
      {title}
    </h2>
    {introduction && (
      <p className="mb-8 text-lg text-charcoal/80 font-light max-w-3xl">
        {introduction}
      </p>
    )}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          image={product.image}
          volume={product.volume}
          strength={product.strength}
        />
      ))}
    </div>
  </section>
);

const AsortimentasPage = () => {
  return (
    <div 
      className="min-h-screen bg-cream text-charcoal"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          hsl(45, 25%, 90%),
          hsl(45, 25%, 90%) 1px,
          transparent 1px,
          transparent 25px
        )`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-4 font-display">
            Mūsų Asortimentas
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-rich-gold to-transparent mx-auto my-6"></div>
          <p className="text-lg md:text-xl text-charcoal/80 font-light max-w-3xl mx-auto">
            "Lorenzo Inga" prekinis ženklas apima rinktinius gėrimus, kurie yra Pjemonto ir kitų Italijos regionų pasididžiavimas. Kiekvienas iš šių produktų išlaiko senovinių, iš kartos į kartą perduodamų receptų dvasią.
          </p>
          <p className="text-lg md:text-xl text-charcoal/80 font-light max-w-3xl mx-auto mt-6">
            <strong>Atraskite "Baby" formatą!</strong> Miniatiūriniai buteliukai – puikus būdas išbandyti skonį be didelių įsipareigojimų. Jie taip pat yra tobula, nedidelė dovanėlė ar stalo akcentas.
          </p>
        </header>

        <div className="space-y-16">
          <ProductSection 
            title="Likeriai" 
            products={liqueurs}
            introduction="Ne tik citrinos! Apelsinų, melionų ir šokolado likeriai įrodo, kad Italija gali nustebinti skonių įvairove. Kuris taps jūsų mėgstamiausiu?"
          />
          <ProductSection 
            title="Grappa" 
            products={grappas}
            introduction="Grappa – itališkos dvasios esmė. Kiekviena rūšis turi savo unikalų charakterį, todėl puikiai tinka prie kavos, desertų ar kaip digestivas po vakarienės. Pasidalinkite savo patirtimi!"
          />
          <ProductSection title="Dovanų Rinkiniai" products={gifts} />
        </div>
      </div>
    </div>
  );
};

export default AsortimentasPage; 