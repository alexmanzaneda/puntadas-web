import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import Footer from '@/components/layout/Footer';
import { palette } from '@/lib/palette';
import type { ProductCategory } from '@/types';

const categories: ProductCategory[] = ['Bolso', 'Neceser', 'Correa', 'Accesorio'];

const categoryLabels: Record<ProductCategory, string> = {
  Bolso: 'BOLSOS',
  Neceser: 'NECESERES',
  Correa: 'CORREAS',
  Accesorio: 'ACCESORIOS',
};

const categoryRoutes: Record<ProductCategory, string> = {
  Bolso: '/catalogue/bolsos',
  Neceser: '/catalogue/neceseres',
  Correa: '/catalogue/correas-movil',
  Accesorio: '/catalogue/accesorios',
};

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="/images/Portada.png"
          alt="Puntadas - Bolsos Artesanales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4">
            PUNTADAS
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl font-light mb-8 tracking-wide">
            Bolsos y accesorios artesanales. Cada pieza cuenta una historia.
          </p>
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
                    <p className={`text-xs tracking-[0.2em] ${palette.secondaryText} mb-2 opacity-60`}>COLECCIÓN</p>
                    <h2 className={`text-3xl sm:text-4xl font-semibold ${palette.secondaryText} tracking-wide`}>
                      {categoryLabels[category]}
                    </h2>
                  </div>
                  <Link
                    href={categoryRoutes[category]}
                    className={`text-sm font-medium ${palette.primaryText} hover:text-emerald-900 transition-colors`}
                  >
                    Ver {categoryLabels[category].toLowerCase()} →
                  </Link>
                </div>

                {/* Mobile: 2 productos */}
                <div className="grid grid-cols-2 gap-8 lg:hidden">
                  {categoryProducts.slice(0, 2).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Desktop: 3 productos */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                  {categoryProducts.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* FOOTER INFORMATIVO */}
      <Footer />
    </main>
  );
}