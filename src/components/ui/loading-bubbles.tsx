import React from 'react';

const LoadingBubbles = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream via-pearl to-platinum dark:from-midnight dark:via-deep-navy dark:to-charcoal">
      {/* Main loading content */}
      <div className="relative z-10 text-center animate-fade-in">
        <div className="mb-8">
          <div className="text-4xl font-display font-light text-deep-navy dark:text-pearl tracking-wider mb-4">
            Limoncello
          </div>
          <p className="text-lg text-charcoal/80 dark:text-platinum/80 font-light">
            Kraunama...
          </p>
        </div>

        {/* Simple loading dots animation */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-rich-gold rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.4s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingBubbles; 