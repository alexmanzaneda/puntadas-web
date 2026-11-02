'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

// Galería de la ficha: en móvil, carrusel con deslizamiento y contador; en escritorio, las fotos una debajo de otra
export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // La foto activa es la que ocupa más carril al deslizar
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setCurrent(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div>
      {/* Móvil: carrusel */}
      <div className="relative md:hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={`Fotos de ${alt}`}
        >
          {images.map((src, index) => (
            <div key={src} className="relative aspect-[4/5] w-full shrink-0 snap-center bg-stone">
              <div className="blend absolute inset-0">
                <Image
                  src={src}
                  alt={`${alt}, foto ${index + 1} de ${images.length}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <p className="label absolute bottom-4 right-gutter bg-paper px-2 py-1 tabular-nums" aria-live="polite">
            {current + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Escritorio: cada foto cabe entera en la pantalla. Una sola, centrada y limitada a la altura
          de la ventana; varias, en dos columnas */}
      {images.length === 1 ? (
        <div className="hidden md:flex md:justify-center">
          <div className="group relative aspect-[4/5] h-[calc(100svh-var(--header)-3rem)] max-w-full overflow-hidden bg-stone">
            <div className="blend absolute inset-0">
              <Image
                src={images[0]}
                alt={alt}
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="img-zoom object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden gap-4 md:grid md:grid-cols-2">
          {images.map((src, index) => (
            <div key={src} className="group relative aspect-[4/5] overflow-hidden bg-stone">
              <div className="blend absolute inset-0">
                <Image
                  src={src}
                  alt={`${alt}, foto ${index + 1} de ${images.length}`}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 768px) 28vw, 100vw"
                  className="img-zoom object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
