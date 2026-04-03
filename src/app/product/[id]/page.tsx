import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import ShareButton from '@/components/shop/ShareButton';
import { products } from '@/data/products';
import { getCategoryRoute } from '@/lib/categories';
import ImageGallery from '@/components/shop/ImageGallery';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-stone-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-sm text-stone-600">
          <Link href="/" className="hover:text-stone-900">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href={getCategoryRoute(product.category)} className="hover:text-stone-900">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900 font-medium">{product.name}</span>
        </div>
      </nav>

      {/* Contenedор principal */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Galería de imágenes del producto */}
          <ImageGallery images={product.images} alt={product.name} />

          {/* Información del producto */}
          <div className="flex flex-col justify-start">
            {/* Nombre y categoría */}
            <div className="mb-4">
              <p className="text-sm font-medium text-stone-600 uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-stone-900">{product.name}</h1>
            </div>

            {/* Disponibilidad */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                  ✓ En stock
                </div>
              ) : (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm font-medium">
                  Agotado
                </div>
              )}
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-stone-900 mb-3">Descripción</h2>
              <p className="text-stone-700 leading-relaxed">{product.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <Link
                href="/contacto"
                className="flex-1 px-6 py-3 rounded-md bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors text-center"
              >
                Solicitar información
              </Link>
              <ShareButton productName={product.name} productId={product.id} />
            </div>

            {/* Info adicional */}
            <div className="space-y-4 pt-8 border-t border-stone-200">
              <p className="text-sm text-stone-600">Contáctanos para conocer más detalles y realizar tu pedido personalizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Productos relacionados (ejemplo) */}
      <section className="bg-stone-50 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Más productos de {product.category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white transition-all hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden bg-stone-100">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold text-stone-900">{relatedProduct.name}</h3>
                    <p className="mt-1 text-sm text-stone-600 line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
