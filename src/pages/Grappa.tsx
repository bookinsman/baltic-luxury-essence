import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const grappaPosts = [
  {
    category: 'Istorija',
    title: 'Nuo Vargšų Stalo Iki Elito',
    content: 'Grappa, gimusi iš poreikio ir išradingumo, iš kuklaus valstiečių gėrimo virto visame pasaulyje vertinamu spiritu, simbolizuojančiu itališką meistrystę.',
    wordCount: 85,
    readTime: 1,
  },
  {
    category: 'Gamyba',
    title: 'Gamybos Paslaptys',
    content: 'Unikalus grappos skonis gimsta distiliuojant vynuogių išspaudas. Partijinė distiliacija variniuose katiluose leidžia išgauti kokybiškiausią ir aromatingiausią rezultatą.',
    wordCount: 78,
    readTime: 1,
  },
  {
    category: 'Rūšys',
    title: 'Atraskite Savąją Grappa',
    content: 'Nuo jaunos ir aštrios Grappa Bianca iki brandintos ir sudėtingos Invecchiata – kiekviena rūšis siūlo unikalią skonių ir aromatų paletę.',
    wordCount: 72,
    readTime: 1,
  },
  {
    category: 'Kultūra',
    title: 'Ritualas Taurėje',
    content: 'Grappa tradiciškai geriama kaip digestivo po sočios vakarienės. Norint pajusti visą puokštę, svarbi tinkama taurė ir temperatūra.',
    wordCount: 68,
    readTime: 1,
  },
  {
    category: 'Derinimas',
    title: 'Grappa ir Maistas',
    content: 'Šis gėrimas puikiai dera su stipraus skonio sūriais, juoduoju šokoladu arba tiesiog puodeliu stiprios espresso, kurią paverčia "caffè corretto".',
    wordCount: 65,
    readTime: 1,
  },
  {
    category: 'Šiandiena',
    title: 'Modernios Interpretacijos',
    content: 'Šiuolaikiniai miksologai iš naujo atranda grappą, naudodami ją kaip pagrindą inovatyviems ir netikėtiems kokteiliams, kurie laužo stereotipus.',
    wordCount: 75,
    readTime: 1,
  }
];

const GrappaPage = () => {
  return (
    <div className="bg-cream text-charcoal min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-4 font-display">
            Apie Grappa
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 font-light max-w-3xl mx-auto">
            Atradimai ir istorijos iš vynuogių pasaulio.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grappaPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrappaPage; 