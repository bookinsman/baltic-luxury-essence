import React, { useContext } from 'react';
import Hero from '@/components/sections/Hero';
import Collaboration from '@/components/sections/Collaboration';
import HomePageAssortment from '@/components/sections/HomePageAssortment';
import Products from '@/components/sections/Products';
import { LanguageContext } from '@/App';
import SEO from '@/components/SEO';

const seoContent = {
  lt: {
    title: "Limoncello - Autentiški Itališki Likeriai ir Grappa",
    description: "Atraskite prabangų „Limoncello“ pasaulį. Siūlome platų autentiškų itališkų likerių, grappos ir dovanų rinkinių asortimentą. Kokybė ir tradicijos iš Italijos.",
    keywords: "Limoncello, Grappa, itališki likeriai, prabangūs gėrimai, Lorenzo Inga, dovanų rinkiniai, Amaretto, Arancello"
  },
  en: {
    title: "Limoncello - Authentic Italian Liqueurs and Grappa",
    description: "Discover the luxurious world of Limoncello. We offer a wide range of authentic Italian liqueurs, grappa, and gift sets. Quality and tradition from Italy.",
    keywords: "Limoncello, Grappa, Italian liqueurs, luxury spirits, Lorenzo Inga, gift sets, Amaretto, Arancello"
  }
}

const Index = () => {
  const { language } = useContext(LanguageContext);
  const text = seoContent[language as keyof typeof seoContent] || seoContent.lt;

  return (
    <div className="bg-pearl font-body">
      <SEO 
        title={text.title}
        description={text.description}
        keywords={text.keywords}
        canonicalUrl="https://your-domain.com/" // Replace with your actual domain
      />
      <main className="relative">
        <Hero />
        <Products />
        <HomePageAssortment />
        <Collaboration />
      </main>
    </div>
  );
};

export default Index;
