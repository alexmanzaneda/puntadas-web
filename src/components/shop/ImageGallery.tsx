'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Imagen principal */}
      <div className="flex items-center justify-center bg-stone-50 rounded-lg overflow-hidden h-96 md:h-auto md:aspect-square relative group">
        <div className="relative w-full h-full">
          <Image
            key={`image-${currentImageIndex}`}
            src={images[currentImageIndex]}
            alt={`${alt} - Imagen ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-900 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Imagen anterior"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-900 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Siguiente imagen"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Miniaturas (solo si hay más de 1 imagen) */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
                index === currentImageIndex
                  ? 'border-stone-900'
                  : 'border-stone-200 hover:border-stone-400'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${alt} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
