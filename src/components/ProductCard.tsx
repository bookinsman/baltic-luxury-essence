import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  volume: string;
  strength: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, volume, strength }) => {
  return (
    <Card className="bg-white/50 border-rich-gold/20 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-display text-2xl text-deep-navy mb-2">{name}</CardTitle>
        <p className="text-charcoal/80 font-light text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex justify-between items-center w-full text-sm text-charcoal">
          <span>{volume}</span>
          <span>{strength}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard; 