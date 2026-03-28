export type ProductCategory =
  | 'Bolso'
  | 'Neceser'
  | 'Correa smartphone'
  | 'Accesorio';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Aquí pondremos la ruta de la foto
  category: ProductCategory;
  inStock: boolean;
}