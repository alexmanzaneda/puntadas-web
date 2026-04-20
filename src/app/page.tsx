import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import Footer from '@/components/layout/Footer';
import { palette } from '@/lib/palette';
import type { ProductCategory } from '@/types';

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[350px] sm:h-[600px] lg:h-[700px] overflow-hidden">
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

      {/* NUEVA COLECCIÓN DESTACADA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <p className={`text-xs tracking-[0.2em] ${palette.secondaryText} mb-4 opacity-60 uppercase`}>Novedad</p>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${palette.secondaryText} tracking-wide mb-6`}>
              Descubre Nuestra Nueva Colección
            </h2>
          </div>

          {/* Productos de Nueva Colección */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 mb-12">
            {products
              .filter((p) => p.category === 'Bolso' && p.type === 'Nueva colección')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="text-center">
            <Link
              href="/catalogue/bolsos"
              className={`inline-block px-8 py-3 ${palette.primaryText} font-medium border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-colors`}
            >
              Ver todos los bolsos →
            </Link>
          </div>
        </div>
      </section>

      {/* OTRAS CATEGORÍAS */}
      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <p className={`text-xs tracking-[0.2em] ${palette.secondaryText} mb-4 opacity-60 uppercase`}>Explora</p>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${palette.secondaryText} tracking-wide`}>
              Nuestras Otras Colecciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Neceseres */}
            {products.filter((p) => p.category === 'Neceser').length > 0 && (
              <div className="group">
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-semibold ${palette.secondaryText} mb-3`}>Neceseres</h3>
                  <p className={`${palette.secondaryText} opacity-70 mb-5 text-sm`}>
                    Organiza tus esenciales con estilo artesanal
                  </p>
                  <Link
                    href="/catalogue/neceseres"
                    className={`inline-block text-sm font-medium ${palette.primaryText} hover:text-emerald-900 transition-colors`}
                  >
                    Explorar neceseres →
                  </Link>
                </div>
                <div className="md:hidden grid grid-cols-2 gap-8">
                  {products
                    .filter((p) => p.category === 'Neceser')
                    .slice(0, 2)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="hidden md:block">
                  <ProductCard product={products.filter((p) => p.category === 'Neceser')[1]} />
                </div>
              </div>
            )}

            {/* Correas */}
            {products.filter((p) => p.category === 'Correa').length > 0 && (
              <div className="group">
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-semibold ${palette.secondaryText} mb-3`}>Correas</h3>
                  <p className={`${palette.secondaryText} opacity-70 mb-5 text-sm`}>
                    Accesorios funcionales para tu móvil
                  </p>
                  <Link
                    href="/catalogue/correas-movil"
                    className={`inline-block text-sm font-medium ${palette.primaryText} hover:text-emerald-900 transition-colors`}
                  >
                    Explorar correas →
                  </Link>
                </div>
                <div className="md:hidden grid grid-cols-2 gap-8">
                  {products
                    .filter((p) => p.category === 'Correa')
                    .slice(0, 2)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="hidden md:block">
                  <ProductCard product={products.filter((p) => p.category === 'Correa')[0]} imageIndex={1} />
                </div>
              </div>
            )}

            {/* Accesorios */}
            {products.filter((p) => p.category === 'Accesorio').length > 0 && (
              <div className="group">
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-semibold ${palette.secondaryText} mb-3`}>Accesorios</h3>
                  <p className={`${palette.secondaryText} opacity-70 mb-5 text-sm`}>
                    Detalles que marcan la diferencia
                  </p>
                  <Link
                    href="/catalogue/accesorios"
                    className={`inline-block text-sm font-medium ${palette.primaryText} hover:text-emerald-900 transition-colors`}
                  >
                    Explorar accesorios →
                  </Link>
                </div>
                <div className="md:hidden grid grid-cols-2 gap-8">
                  {products
                    .filter((p) => p.category === 'Accesorio')
                    .slice(0, 2)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="hidden md:block">
                  <ProductCard product={products.filter((p) => p.category === 'Accesorio')[0]} imageIndex={1} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONOCE LA HISTORIA DE LA MARCA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className={`text-xs tracking-[0.2em] ${palette.secondaryText} mb-4 opacity-60 uppercase`}>Sobre nosotros</p>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${palette.secondaryText} tracking-wide mb-6 leading-tight`}>
                Conoce la Historia de Puntadas
              </h2>
              <p className={`text-base sm:text-lg ${palette.secondaryText} opacity-80 mb-8 leading-relaxed`}>
                Cada pieza que creamos es resultado de pasión, dedicación y amor por el trabajo artesanal. 
                Desde nuestro inicio, nos comprometemos con crear bolsos y accesorios únicos que reflejen 
                tu personalidad y estilo de vida.
              </p>
              <Link
                href="/nosotros"
                className={`inline-block px-8 py-3 ${palette.primaryText} font-medium border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-colors`}
              >
                Descubre nuestra historia →
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mx-auto">
              <Image
                src="/images/Foto-inicial.jpg"
                alt="Historia de Puntadas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER INFORMATIVO */}
      <Footer />
    </main>
  );
}