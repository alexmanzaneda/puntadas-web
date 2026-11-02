import Image from 'next/image';
import Link from 'next/link';
import { categoryCovers } from '@/lib/categories';
import type { PublicProduct } from '@/types';

interface ProductCardProps {
  product: PublicProduct;
  imageIndex?: number;
  // Tamaño con el que se muestra (para que next/image sirva la resolución justa)
  sizes?: string;
  priority?: boolean;
  // En las páginas de categoría la etiqueta sobra
  showCategory?: boolean;
}

// Tarjeta de pieza: foto sobre piedra, categoría en mayúsculas pequeñas y nombre en serif. Sin precio.
export default function ProductCard({
  product,
  imageIndex = 0,
  sizes = '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw',
  priority = false,
  showCategory = true,
}: ProductCardProps) {
  const categoryLabel = categoryCovers.find((c) => c.category === product.category)?.label ?? product.category;

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <div className="blend absolute inset-0">
          <Image
            src={product.images[imageIndex] ?? product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            sizes={sizes}
            className="img-zoom object-cover"
          />
        </div>
        {!product.inStock && <span className="label absolute left-3 top-3 bg-paper px-2 py-1">Agotado</span>}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lead">
          <span className="link-line">{product.name}</span>
        </h3>
        {showCategory && <p className="label mt-1.5 text-muted">{categoryLabel}</p>}
      </div>
    </Link>
  );
}
