export type ProductCategory =
  | 'Bolso'
  | 'Neceser'
  | 'Correa'
  | 'Accesorio';

export type BolsoType = 'Nueva colección' | 'Ganchillo' | 'Letras' | 'Denim' | 'Volantes' | 'Classic' | 'Chupetero' | 'Fundas' | 'Collares';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array de imágenes del producto
  category: ProductCategory;
  type?: BolsoType; // Tipo de producto dentro de la categoría
  inStock: boolean;
}