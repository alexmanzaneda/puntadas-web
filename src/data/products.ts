import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'bolso-tote-clasico',
    name: 'Tote Clásico Piel',
    description: 'Un bolso espacioso de cuero artesanal, ideal para llevar el portátil y tus básicos del día a día.',
    price: 125.00,
    imageUrl: '/images/BolsoMarron.png',
    category: 'Bolso',
    inStock: true,
  },
  {
    id: 'bandolera-mini-negra',
    name: 'Bandolera Mini Noche',
    description: 'Diseño compacto y elegante con correa ajustable. Perfecta para salir ligera.',
    price: 89.50,
    imageUrl: '/images/NeceserNavidad.png',
    category: 'Neceser',
    inStock: true,
  },
  {
    id: 'mochila-urbana-lona',
    name: 'Mochila Urbana',
    description: 'Resistente, ligera y con múltiples compartimentos interiores.',
    price: 110.00,
    imageUrl: '/images/PuntadasLogo.png',
    category: 'Accesorio',
    inStock: false,
  }
];