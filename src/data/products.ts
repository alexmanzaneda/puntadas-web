import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'bolso-ganchillo-blanco',
    name: 'Ganfi',
    description: 'Ganchillo con hilo fino, forrado y asas de polipiel',
    price: 50.00,
    imageUrl: '/images/bolso/ganchillo_blanco.png',
    category: 'Bolso',
    inStock: true,
  },
  {
    id: 'bolso-ganchillo-rosa',
    name: 'Pink',
    description: 'Bolso de ganchillo...',
    price: 40.00,
    imageUrl: '/images/bolso/ganchillo_rosa.png',
    category: 'Bolso',
    inStock: true,
  },
  {
    id: 'bolso-personalizado-letras',
    name: 'Bolso personalizado con iniciales',
    description: 'Unico',
    price: 60.00,
    imageUrl: '/images/bolso/letras.png',
    category: 'Bolso',
    inStock: true,
  },
  {
    id: 'neceser-cuadros-rojo',
    name: 'Neceser de cuadros',
    description: 'Neceser de cuadros en distintos colores',
    price: 25.00,
    imageUrl: '/images/neceser/cuadros_rojo.png',
    category: 'Neceser',
    inStock: true,
  },
  {
    id: 'neceser-limones',
    name: 'Neceser estampado limones',
    description: 'Neceser estilo veraniego',
    price: 25.00,
    imageUrl: '/images/neceser/limones.png',
    category: 'Neceser',
    inStock: true,
  }
];