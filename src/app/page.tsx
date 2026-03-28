import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import type { ProductCategory } from '@/types';

const categories: ProductCategory[] = ['Bolso', 'Neceser', 'Correa smartphone', 'Accesorio'];

const categoryLabels: Record<ProductCategory, string> = {
  Bolso: 'BOLSOS',
  Neceser: 'NECESERES',
  'Correa smartphone': 'CORREAS PARA MOVIL',
  Accesorio: 'ACCESORIOS',
};

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="/images/default_image.png"
          alt="Puntadas - Bolsos Artesanales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            PUNTADAS
          </h1>
          <p className="text-md sm:text-lg lg:text-xl text-white/90 max-w-2xl font-light mb-8 tracking-wide">
            Bolsos artesanales de lujo. Cada pieza cuenta una historia.
          </p>
          <Link
            href="/catalogue"
            className="inline-block bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-sm font-medium tracking-wider transition-colors"
          >
            EXPLORAR CATÁLOGO
          </Link>
        </div>
      </section>

      {/* SECCIONES POR CATEGORÍA */}
      <div className="bg-white">
        {categories.map((category) => {
          const categoryProducts = products.filter((p) => p.category === category);

          if (categoryProducts.length === 0) return null;

          return (
            <section key={category} className="border-b border-stone-200 last:border-b-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-stone-500 mb-2">COLECCIÓN</p>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-wide">
                      {categoryLabels[category]}
                    </h2>
                  </div>
                  <Link
                    href="/catalogue"
                    className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Ver todo →
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
            ¿Buscas algo especial?
          </h3>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            Descubre toda nuestra colección de bolsos artesanales, neceseres exclusivos y accesorios únicos.
          </p>
          <Link
            href="/catalogue"
            className="inline-block border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-3 font-medium tracking-wider transition-colors"
          >
            VER CATALOGO COMPLETO
          </Link>
        </div>
      </section>
    </main>
  );
}