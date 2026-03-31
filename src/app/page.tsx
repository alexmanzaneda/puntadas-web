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

const categoryRoutes: Record<ProductCategory, string> = {
  Bolso: '/catalogue/bolsos',
  Neceser: '/catalogue/neceseres',
  'Correa smartphone': '/catalogue/correas-movil',
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            PUNTADAS
          </h1>
          <p className="text-md sm:text-lg lg:text-xl text-white/90 max-w-2xl font-light mb-8 tracking-wide">
            Bolsos artesanales de lujo. Cada pieza cuenta una historia.
          </p>
          <Link
            href="/catalogue/bolsos"
            className="inline-block bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-sm font-medium tracking-wider transition-colors"
          >
            EXPLORAR COLECCION
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
                    href={categoryRoutes[category]}
                    className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Ver {categoryLabels[category].toLowerCase()} →
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

      {/* FOOTER INFORMATIVO */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div>
              <p className="max-w-xs text-3xl leading-tight tracking-wide text-white/95">
                El gusto por lo exclusivo.
                <br />
                El placer de lo practico
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/puntadas_pc/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M7.5 2C4.467 2 2 4.467 2 7.5v9C2 19.533 4.467 22 7.5 22h9c3.033 0 5.5-2.467 5.5-5.5v-9C22 4.467 19.533 2 16.5 2h-9zm0 2h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M12 2a9.9 9.9 0 0 0-8.6 14.8L2 22l5.4-1.4A10 10 0 1 0 12 2zm0 18.2c-1.4 0-2.7-.4-3.9-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8.2 8.2 0 1 1 6.7 3.9zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.3-.1-.5.1l-.7.8c-.1.1-.3.2-.5.1-1.1-.5-2.1-1.3-2.8-2.3-.2-.2 0-.4.1-.5l.5-.6c.1-.1.2-.3.3-.4.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.8.7-1.2 1.7-1.2 2.7 0 .2 0 .5.1.7.3 1.3 1 2.4 1.9 3.4 1.3 1.5 3 2.6 4.9 3.1.7.2 1.5.2 2.2 0 .4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.1-.5-.2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Atencion al cliente</h3>
              <ul className="mt-5 space-y-3 text-lg text-white/85">
                <li>
                  <Link href="/nosotros" className="transition-colors hover:text-white">La marca</Link>
                </li>
                <li>
                  <Link href="/preguntas-frecuentes" className="transition-colors hover:text-white">Preguntas frecuentes</Link>
                </li>
                <li>
                  <Link href="/devoluciones" className="transition-colors hover:text-white">Devoluciones</Link>
                </li>
                <li>
                  <Link href="/contacto" className="transition-colors hover:text-white">Contacto</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Informacion Legal</h3>
              <ul className="mt-5 space-y-3 text-lg text-white/85">
                <li>
                  <Link href="/politica-privacidad" className="transition-colors hover:text-white">Politica de Privacidad</Link>
                </li>
                <li>
                  <Link href="/politica-cookies" className="transition-colors hover:text-white">Politica de cookies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}