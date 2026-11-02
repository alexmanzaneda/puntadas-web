import { products } from '@/data/products';
import type { ProductCategory, PublicProduct } from '@/types';

// Única puerta de entrada al catálogo. Las páginas nunca importan src/data/products.ts:
// cuando migremos a Supabase solo cambia este archivo (leerá de la vista `catalog`).
// Usar solo desde componentes de servidor; a los de cliente se les pasan los datos ya filtrados.

// El precio es dato interno: se quita aquí para que nunca llegue al HTML ni al JavaScript del navegador
function toPublic({ price: _price, ...product }: (typeof products)[number]): PublicProduct {
  return product;
}

export async function getProducts(): Promise<PublicProduct[]> {
  return products.map(toPublic);
}

export async function getProductsByCategory(category: ProductCategory): Promise<PublicProduct[]> {
  return products.filter((p) => p.category === category).map(toPublic);
}

export async function getProductById(id: string): Promise<PublicProduct | null> {
  const product = products.find((p) => p.id === id);
  return product ? toPublic(product) : null;
}
