import Image from 'next/image';
import CategoryProducts from '@/components/shop/CategoryProducts';
import Footer from '@/components/layout/Footer';
import { getProductsByCategory } from '@/lib/catalog';
import type { ProductCategory } from '@/types';

interface CategoryPageProps {
  category: ProductCategory;
  title: string;
  subtitle: string;
  // Foto panorámica opcional bajo el título (p. ej. el colgador de correas)
  banner?: { src: string; alt: string; width: number; height: number };
}

// Página de categoría: título centrado, foto panorámica opcional, filtros y rejilla
export default async function CategoryPage({ category, title, subtitle, banner }: CategoryPageProps) {
  const categoryProducts = await getProductsByCategory(category);

  return (
    <>
      <main>
        <header className="px-gutter pb-12 pt-10 text-center md:pb-16 md:pt-16">
          <h1 className="text-head" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
            {title}
          </h1>
          <p
            className="mx-auto mt-5 max-w-[48ch] text-body"
            data-reveal
            style={{ '--delay': '160ms' } as React.CSSProperties}
          >
            {subtitle}
          </p>
        </header>

        {banner && (
          <div className="mb-12 px-gutter md:mb-16" data-reveal>
            <div className="group relative aspect-[2/1] overflow-hidden bg-stone md:aspect-[3/1]">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority
                sizes="100vw"
                className="img-zoom object-cover"
              />
            </div>
          </div>
        )}

        <CategoryProducts products={categoryProducts} />
      </main>
      <Footer />
    </>
  );
}
