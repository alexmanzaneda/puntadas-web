export type ProductCategory =
  | 'Bolso'
  | 'Neceser'
  | 'Correa'
  | 'Accesorio';

export type ProductType = 
  | 'Nueva colección'
  | 'Ganchillo'
  | 'Letras'
  | 'Denim'
  | 'Correas móvil'
  | 'Chupeteros'
  | 'Collares'
  | 'Fundas';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array de imágenes del producto
  category: ProductCategory;
  type?: ProductType; // Tipo de producto dentro de la categoría
  inStock: boolean;
}