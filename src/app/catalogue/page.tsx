import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import type { ProductCategory } from '@/types';

const categoryOrder: ProductCategory[] = [
  'Bolso',
  'Neceser',
  'Correa smartphone',
  'Accesorio',
];

const categoryMeta: Record<
  ProductCategory,
  { title: string; subtitle: string; anchor: string }
> = {
  Bolso: {
    title: 'BOLSOS',
    subtitle: 'Modelos principales de la colección.',
    anchor: 'bolsos',
  },
  Neceser: {
    title: 'NECESERES',
    subtitle: 'Piezas compactas para organizar y llevar esenciales.',
    anchor: 'neceseres',
  },
  'Correa smartphone': {
    title: 'CORREAS PARA MOVIL',
    subtitle: 'Comodidad diaria con un enfoque funcional y estético.',
    anchor: 'correas-smartphone',
  },
  Accesorio: {
    title: 'ACCESORIOS',
    subtitle: 'Detalles que elevan cada look.',
    anchor: 'accesorios',
  },
};

export default function CataloguePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <header className="border-b border-stone-200 pb-8">
        <p className="text-xs tracking-[0.2em] text-stone-500">PUNTADAS STUDIO</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[0.08em] text-stone-900 sm:text-4xl">
          CATALOGO
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-stone-600 sm:text-base">
          Coleccion organizada por categorias para una navegacion clara, visual y
          profesional.
        </p>
      </header>

      <nav className="sticky top-0 z-20 mt-8 border-y border-stone-200 bg-white/95 backdrop-blur">
        <ul className="flex gap-6 overflow-x-auto py-4 text-xs font-medium tracking-[0.16em] text-stone-700 sm:text-sm">
          {categoryOrder.map((category) => {
            const meta = categoryMeta[category];
            const count = products.filter((p) => p.category === category).length;

            return (
              <li key={category}>
                <a
                  href={`#${meta.anchor}`}
                  className="whitespace-nowrap transition-colors hover:text-stone-900"
                >
                  {meta.title} ({count})
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="space-y-16 pt-10">
        {categoryOrder.map((category) => {
          const meta = categoryMeta[category];
          const categoryProducts = products.filter((p) => p.category === category);

          return (
            <article
              key={category}
              id={meta.anchor}
              className="scroll-mt-28 border-b border-stone-200 pb-12 last:border-b-0"
            >
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-wide text-stone-900">
                    {meta.title}
                  </h2>
                  <p className="mt-2 text-sm text-stone-600">{meta.subtitle}</p>
                </div>
                <span className="text-xs tracking-[0.16em] text-stone-500 sm:text-sm">
                  {categoryProducts.length} MODELOS
                </span>
              </div>

              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="border border-dashed border-stone-300 px-4 py-6 text-sm text-stone-600">
                  Proximamente nuevos modelos en esta categoria.
                </p>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}