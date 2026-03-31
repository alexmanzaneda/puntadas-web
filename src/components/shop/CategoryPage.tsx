import ProductCard from '@/components/shop/ProductCard';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import type { ProductCategory } from '@/types';

interface CategoryPageProps {
  category: ProductCategory;
  title: string;
  subtitle: string;
}

export default function CategoryPage({
  category,
  title,
  subtitle,
}: CategoryPageProps) {
  const categoryProducts = products.filter((product) => product.category === category);

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <header className="border-b border-stone-200 pb-8">
        <p className="text-xs tracking-[0.2em] text-stone-500">PUNTADAS STUDIO</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[0.08em] text-stone-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-stone-600 sm:text-base">{subtitle}</p>
      </header>

      <section className="pt-10">
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
      </section>
      </main>
      <Footer />
    </>
  );
}
