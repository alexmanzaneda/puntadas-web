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
  | 'Fundas'
  | 'Mochilas'
  | 'Totes'
  | 'Lanyards y llaveros'
  | 'Monederos';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | null; // null = aún sin precio (en Supabase también puede ser null)
  images: string[]; // Array de imágenes del producto
  category: ProductCategory;
  type?: ProductType; // Tipo de producto dentro de la categoría
  inStock: boolean;
}

// Lo que ve la web: el producto sin precio (bajo consulta). Ver src/lib/catalog.ts
export type PublicProduct = Omit<Product, 'price'>;