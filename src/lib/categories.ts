import type { ProductCategory } from '@/types';

export const categoryRoutes: Record<ProductCategory, string> = {
  Bolso: '/catalogue/bolsos',
  Neceser: '/catalogue/neceseres',
  Correa: '/catalogue/correas-movil',
  Accesorio: '/catalogue/accesorios',
};

export function getCategoryRoute(category: ProductCategory): string {
  return categoryRoutes[category];
}
