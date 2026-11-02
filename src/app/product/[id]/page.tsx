import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import ImageGallery from '@/components/shop/ImageGallery';
import ProductCard from '@/components/shop/ProductCard';
import ShareButton from '@/components/shop/ShareButton';
import Accordion from '@/components/ui/Accordion';
import { getProductById, getProductsByCategory } from '@/lib/catalog';
import { categoryCovers, getCategoryRoute } from '@/lib/categories';
import { whatsappLink } from '@/lib/constants';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Metadatos por producto para buscadores y vista previa al compartir. Sin precio: es bajo consulta.
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return { title: 'Pieza no encontrada | Puntadas' };
  }

  const title = `${product.name} | Puntadas`;
  const description =
    product.description.length > 155
      ? `${product.description.slice(0, 152).trimEnd()}…`
      : product.description;
  const url = `/product/${product.id}`;
  const images = product.images.slice(0, 1).map((src) => ({ url: src, alt: product.name }));

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: 'Puntadas',
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((image) => image.url),
    },
  };
}

// Información común a todas las piezas (sale de las preguntas frecuentes)
const details = [
  {
    title: 'Hecha por encargo',
    content:
      'Cada pieza se confecciona desde la tela cuando la pides: se corta, se cose, se forra y se remata a mano. No hay dos iguales.',
  },
  {
    title: 'Personalización',
    content:
      'Puedes cambiar colores, telas o tamaño, y añadir iniciales, un nombre o un mensaje. Lo hablamos por WhatsApp y te enseñamos opciones antes de empezar.',
  },
  {
    title: 'Plazo y envío',
    content:
      'El plazo mínimo es de una semana, según la pieza y lo que personalices. Después, el envío a la península tarda de 2 a 5 días laborables.',
  },
  {
    title: 'Pago',
    content: 'Bizum, transferencia o PayPal. Lo acordamos contigo una vez confirmado el encargo.',
  },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = (await getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const categoryLabel = categoryCovers.find((c) => c.category === product.category)?.label ?? product.category;
  const orderMessage = `Hola, me interesa la pieza «${product.name}» de Puntadas: https://puntadasbcn.com/product/${product.id}`;

  return (
    <>
      <main>
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-8 md:px-gutter md:pt-6">
          {/* Fotos */}
          <div className="md:col-span-7">
            <ImageGallery images={product.images} alt={product.name} />
          </div>

          {/* Información: se queda fija mientras pasan las fotos */}
          <div className="px-gutter md:col-span-5 md:px-0">
            <div className="md:sticky md:top-28 md:pl-6 lg:pl-12">
              <nav aria-label="Ruta" className="label text-muted">
                <Link href="/" className="link-line">
                  Inicio
                </Link>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
                <Link href={getCategoryRoute(product.category)} className="link-line">
                  {categoryLabel}
                </Link>
              </nav>

              <h1 className="mt-6 text-head">{product.name}</h1>
              <p className="label mt-4 text-muted">{product.inStock ? 'Disponible por encargo' : 'Agotado'}</p>

              <p className="mt-8 max-w-[46ch] text-body">{product.description}</p>

              <div className="mt-10 flex flex-col gap-5">
                <a
                  href={whatsappLink(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full"
                >
                  Encargar por WhatsApp
                </a>
                <p className="text-small text-muted">Precio bajo consulta. Te respondemos con el precio y el plazo.</p>
                <div className="flex items-center gap-8">
                  <ShareButton productName={product.name} productId={product.id} />
                  <Link href="/contacto" className="label link-line">
                    Hacer una pregunta
                  </Link>
                </div>
              </div>

              <div className="mt-12">
                <Accordion items={details} />
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="pt-section" aria-labelledby="relacionados-title">
            <div className="flex items-end justify-between gap-6 px-gutter">
              <h2 id="relacionados-title" className="text-head">
                Más {categoryLabel.toLowerCase()}
              </h2>
              <Link href={getCategoryRoute(product.category)} className="label link-line shrink-0">
                Ver todo
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-12 px-gutter md:mt-14 md:grid-cols-4 md:gap-x-5">
              {relatedProducts.map((related) => (
                <li key={related.id}>
                  <ProductCard product={related} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
