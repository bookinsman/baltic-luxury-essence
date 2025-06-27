import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  volume: string;
  strength: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, volume, strength }) => {
  return (
    <div className="bg-white/50 dark:bg-midnight/20 border border-rich-gold/10 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-rich-gold/20">
      <div className="overflow-hidden p-4 bg-white/30 dark:bg-midnight/10">
        <img src={image} alt={name} className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-deep-navy dark:text-pearl font-display mb-2">{name}</h3>
        <p className="text-charcoal/80 dark:text-platinum/80 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <div className="mt-auto border-t border-rich-gold/10 pt-4 flex justify-between items-center text-sm text-charcoal/80 dark:text-platinum/80 font-semibold">
          <span>{volume}</span>
          <span>{strength}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 