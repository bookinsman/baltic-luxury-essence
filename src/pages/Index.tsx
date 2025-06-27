import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Story from '@/components/sections/Story';
import Gallery from '@/components/sections/Gallery';
import LoadingBubbles from '../components/ui/loading-bubbles';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language] = useState('lt'); // Keeping language state for now

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingBubbles />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Enhanced Premium Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-pearl to-platinum dark:from-midnight dark:via-deep-navy dark:to-charcoal transition-all duration-700"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)`
          }}></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-rich-gold/5 animate-pulse"
              style={{
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 120 + 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative">
        <Hero language={language} />
        <Products language={language} />
        <Story language={language} />
        <Gallery language={language} />
      </main>
    </div>
  );
};

export default Index;
