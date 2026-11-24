import Image from 'next/image';
import Link from 'next/link';
import { getCategoryRoute } from '@/lib/categories';

// Primera pantalla: la portada panorámica entera (sin recortar ni ampliar) y, debajo, el titular sobre el fondo hueso.
// Si cambias la foto, actualiza width/height con sus medidas reales para que no se deforme.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="settle bg-stone">
        <Image
          src="/images/Portada.webp"
          alt="Correas de tela colgadas en una barra del taller, con neceseres de vichy, ikat, toile y flores encima y debajo"
          width={2880}
          height={1148}
          priority
          quality={90}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="grid gap-6 px-gutter pt-8 md:grid-cols-12 md:items-end md:gap-x-8 md:pt-8">
        <h1 id="hero-title" className="text-head md:col-span-7" data-reveal>
          Bolsos y accesorios cosidos a mano en Barcelona
        </h1>
        <div className="md:col-span-5 md:justify-self-end" data-reveal style={{ '--delay': '120ms' } as React.CSSProperties}>
          <p className="max-w-[40ch] text-body">
            Cada pieza se corta y se cose en casa, una a una, y casi todas se pueden encargar en la tela que tú elijas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href={getCategoryRoute('Bolso')} className="btn">
              Ver la colección
            </Link>
            <Link href="/#personaliza" className="link-line text-small">
              Personalizar una pieza
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
