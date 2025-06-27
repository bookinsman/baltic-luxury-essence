import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface GalleryProps {
  language: string;
}

const Gallery = ({ language }: GalleryProps) => {
  const content = {
    en: {
      title: "A Glimpse of Excellence",
      subtitle: "Explore the world of Limoncello through our curated gallery.",
    },
    lt: {
      title: "Žvilgsnis į Išskirtinumą",
      subtitle: "Atraskite Limoncello pasaulį per mūsų kuruojamą galeriją.",
    },
    ru: {
      title: "Взгляд на Совершенство",
      subtitle: "Исследуйте мир Limoncello через нашу галерею.",
    },
  };

  const text = content[language as keyof typeof content] || content.en;

  const images = [
    { src: "/gallery-new.png", alt: "A new addition to the gallery" },
    { src: "/gallery-1.png", alt: "Limoncello gallery image 1" },
    { src: "/gallery-2.png", alt: "Limoncello gallery image 2" },
    { src: "/gallery-3.png", alt: "Limoncello gallery image 3" },
    { src: "/gallery-5.png", alt: "Limoncello gallery image 5" },
    { src: "/gallery-6.png", alt: "Limoncello gallery image 6" },
    { src: "/gallery-7.png", alt: "Limoncello gallery image 7" },
    { src: "/gallery-8.png", alt: "Limoncello gallery image 8" },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-32 px-6 bg-cream dark:bg-midnight">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-deep-navy dark:text-pearl mb-6">
            {text.title}
          </h2>
          <p className="text-2xl text-charcoal/80 dark:text-platinum/80 font-light max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>
        <Carousel 
          className="w-full"
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-0 shadow-xl bg-transparent">
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                      <img 
                        src={image.src.startsWith('photo-') ? `https://images.unsplash.com/${image.src}?q=80&w=1000&h=750` : image.src}
                        alt={image.alt} 
                        className="w-full h-full object-cover" 
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default Gallery; 