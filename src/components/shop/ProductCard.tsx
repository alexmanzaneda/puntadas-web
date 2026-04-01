import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white transition-all hover:shadow-lg cursor-pointer h-full">
        {/* Contenedor de la imagen */}
        <div className="relative aspect-square overflow-hidden bg-stone-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Información del producto */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">{product.name}</h3>
          <p className="mt-1 text-sm text-stone-600 line-clamp-2">{product.description}</p>
          
          <div className="mt-auto pt-4 flex items-center justify-between">
            {!product.inStock && (
              <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded">
                Agotado
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}