'use client';

import { useState } from 'react';
import ProductCard from '@/components/shop/ProductCard';
import FilterButtons from '@/components/shop/FilterButtons';
import type { ProductType, PublicProduct } from '@/types';

interface CategoryProductsProps {
  products: PublicProduct[];
}

// Parte interactiva de la página de categoría: filtros por tipo + rejilla de piezas
export default function CategoryProducts({ products }: CategoryProductsProps) {
  const [selectedFilter, setSelectedFilter] = useState<ProductType | null>(null);

  // Filtros únicos disponibles para esta categoría ("Nueva colección" siempre la primera)
  const uniqueFilters = Array.from(new Set(products.filter((p) => p.type).map((p) => p.type))) as ProductType[];
  const availableFilters = uniqueFilters.includes('Nueva colección')
    ? (['Nueva colección', ...uniqueFilters.filter((filter) => filter !== 'Nueva colección')] as ProductType[])
    : uniqueFilters;

  const filteredProducts = selectedFilter ? products.filter((p) => p.type === selectedFilter) : products;
  const count = filteredProducts.length;

  return (
    <section aria-label="Piezas">
      <div className="flex items-center justify-between gap-6 border-y border-line px-gutter py-4">
        <div className="min-w-0 flex-1">
          {availableFilters.length > 0 ? (
            <FilterButtons
              filters={availableFilters}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          ) : (
            <span className="label text-muted">Todo</span>
          )}
        </div>
        <p className="label hidden shrink-0 text-muted md:block" aria-live="polite">
          {count} {count === 1 ? 'pieza' : 'piezas'}
        </p>
      </div>

      {count > 0 ? (
        <ul className="grid grid-cols-2 gap-x-3 gap-y-12 px-gutter pt-10 md:grid-cols-3 md:gap-x-5 md:gap-y-16 md:pt-14 xl:grid-cols-4">
          {filteredProducts.map((product, i) => (
            <li key={product.id}>
              <ProductCard product={product} priority={i < 4} showCategory={false} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-gutter pt-14 text-body">
          {selectedFilter
            ? `Ahora mismo no hay piezas de «${selectedFilter}». Pregúntanos por WhatsApp: muchas se pueden encargar.`
            : 'Pronto habrá piezas nuevas en esta categoría.'}
        </p>
      )}
    </section>
  );
}
