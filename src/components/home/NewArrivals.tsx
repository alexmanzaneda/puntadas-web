import Link from 'next/link';
import ProductCard from '@/components/shop/ProductCard';
import { getCategoryRoute } from '@/lib/categories';
import type { PublicProduct } from '@/types';

interface NewArrivalsProps {
  products: PublicProduct[];
}

// Novedades: cuatro piezas en fila, todas del mismo tamaño para que se vean enteras
export default function NewArrivals({ products }: NewArrivalsProps) {
  if (products.length === 0) return null;

  return (
    <section className="pt-section" aria-labelledby="novedades-title">
      <div className="flex items-end justify-between gap-6 px-gutter">
        <div>
          <h2 id="novedades-title" className="text-head" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
            Novedades
          </h2>
        </div>
        <Link href={getCategoryRoute('Bolso')} className="label link-line shrink-0" data-reveal>
          Ver todo
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 px-gutter md:mt-16 md:grid-cols-4 md:gap-x-5">
        {products.slice(0, 4).map((product, i) => (
          <li key={product.id} data-reveal style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}>
            <ProductCard product={product} sizes="(min-width: 768px) 25vw, 50vw" />
          </li>
        ))}
      </ul>
    </section>
  );
}
