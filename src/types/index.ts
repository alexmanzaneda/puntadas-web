export type ProductCategory =
  | 'Bolso'
  | 'Neceser'
  | 'Correa'
  | 'Accesorio';

export type BolsoType = 'Ganchillo' | 'Letras' | 'Denim';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array de imágenes del producto
  category: ProductCategory;
  type?: BolsoType; // Solo para bolsos
  inStock: boolean;
}