import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'bolso-ganchillo-blanco',
    name: 'Ganfi',
    description: 'Ganchillo con hilo fino, forrado y asas de polipiel',
    price: 50.00,
    imageUrl: '/images/Bolsos/ganchillo_blanco.png',
    category: 'Bolso',
    inStock: true,
  },
  {
    id: 'bolso-ganchillo-rosa',
    name: 'Pink',
    description: 'Bolso de ganchillo...',
    price: 40.00,
    imageUrl: '/images/Bolsos/ganchillo_rosa.png',
    category: 'Bolso',
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