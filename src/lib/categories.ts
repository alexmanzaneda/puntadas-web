import type { ProductCategory } from '@/types';

export const categoryRoutes: Record<ProductCategory, string> = {
  Bolso: '/catalogue/bolsos',
  Neceser: '/catalogue/neceseres',
  Correa: '/catalogue/correas',
  Accesorio: '/catalogue/accesorios',
};

export function getCategoryRoute(category: ProductCategory): string {
  return categoryRoutes[category];
}

// Portada de cada categoría (menú y home), en el orden en que se muestran
export const categoryCovers: {
  category: ProductCategory;
  label: string;
  image: string;
  description: string;
  // false si la portada es una foto con fondo propio (no un recorte sobre blanco)
  blend?: boolean;
}[] = [
  {
    category: 'Bolso',
    label: 'Bolsos',
    image: '/images/home/cat-bolsos.webp',
    description:
      'Totes de vichy, pana o rayas, ganchillo y denim reciclado. Algunos se personalizan con un nombre o tus letras.',
  },
  {
    category: 'Neceser',
    label: 'Neceseres',
    image: '/images/home/cat-neceseres.webp',
    description: 'Forrados por dentro, en vichy, ikat, toile o flores. También en packs y con discos desmaquillantes.',
  },
  {
    category: 'Correa',
    label: 'Correas',
    image: '/images/home/cat-correas.webp',
    blend: false,
    description: 'Correas para el móvil, lanyards, llaveros y chupeteros, con volantes, flores o vichy.',
  },
  {
    category: 'Accesorio',
    label: 'Accesorios',
    image: '/images/home/cat-accesorios.webp',
    description: 'Collares de tela, fundas para portátil y tablet, monederos, coleteros y hasta collar para tu perro.',
  },
];
