import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const liqueursPosts = [
  {
    category: 'Kultūra',
    title: 'Aperitivo ir Digestivo Ritualai',
    content: 'Italijoje gėrimo laikas yra menas. Aperitivo sužadina apetitą prieš valgį, o digestivo ramina ir užbaigia vakarienę – tai esminė itališko gyvenimo dalis.',
    wordCount: 88,
    readTime: 1,
  },
  {
    category: 'Amaro',
    title: 'Karčioji Italijos Širdis',
    content: 'Amaro – tai ne vienas gėrimas, o visa karčiųjų žolelių likerių šeima. Nuo švelnaus Montenegro iki galingo Fernet-Branca, kiekvienas atspindi savo regioną.',
    wordCount: 76,
    readTime: 1,
  },
  {
    category: 'Citrusai',
    title: 'Saulė Butelyje: Limoncello',
    content: 'Tiesiai iš Amalfio pakrantės – gaivus, aromatingas ir intensyviai citrininis. Limoncello geriausia mėgautis lediniame šaltyje kaip tikru saulės gurkšniu.',
    wordCount: 70,
    readTime: 1,
  },
  {
    category: 'Desertiniai',
    title: 'Saldieji Riešutų Aromatai',
    content: 'Nuo migdolinio Amaretto, puikiai tinkančio prie kavos, iki sodraus graikinių riešutų Nocino – šie likeriai yra tobulas desertas taurėje.',
    wordCount: 79,
    readTime: 1,
  },
  {
    category: 'Kokteiliai',
    title: 'Aperityvo Žvaigždės',
    content: 'Ryškiai raudonas Campari ir oranžinis Aperol yra visame pasaulyje garsių kokteilių, tokių kaip Negroni ir Aperol Spritz, nepakeičiama siela.',
    wordCount: 73,
    readTime: 1,
  },
  {
    category: 'Atradimai',
    title: 'Anapus Žinomų Skonių',
    content: 'Italijos likerių pasaulis beribis. Išdrįskite paragauti artišokų Cynar ar Sardinijos mirtų Mirto ir atraskite naujas skonių dimensijas. Salute!',
    wordCount: 68,
    readTime: 1,
  }
];

const LiqueursPage = () => {
  return (
    <div className="min-h-screen bg-pearl dark:bg-deep-navy text-charcoal dark:text-pearl">
      <div className="container mx-auto px-6 lg:px-12 py-32">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-deep-navy dark:text-pearl mb-4 font-display">
            Likeriai: Italijos Skonių Mozaika
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 dark:text-platinum/80 font-light max-w-3xl mx-auto">
            Nuo gaivaus Limoncello iki sodraus Amaro – kiekvienas likeris pasakoja savo regiono istoriją.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liqueursPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiqueursPage; 