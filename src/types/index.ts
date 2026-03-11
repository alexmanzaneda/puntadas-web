export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Aquí pondremos la ruta de la foto
  category: string;
  inStock: boolean;
}