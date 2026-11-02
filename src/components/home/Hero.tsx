import Image from 'next/image';
import Link from 'next/link';
import { getCategoryRoute } from '@/lib/categories';

// Primera pantalla: la portada a sangre bajo la cabecera translúcida y, encima, una tarjeta hueso con el titular
export default function Hero() {
  return (
    <section className="relative -mt-header h-[100svh] min-h-[600px] overflow-hidden" aria-labelledby="hero-title">
      <div className="settle absolute inset-0">
        <Image
          src="/images/Portada.webp"
          alt="Tote de ganchillo con rayas en beige y crudo sobre la mesa del taller, con ovillos y telas detrás"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_50%]"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 px-gutter pb-gutter md:pb-12">
        <div className="max-w-[38rem] bg-paper p-7 md:p-10" data-reveal>
          <h1 id="hero-title" className="text-head">
            Bolsos y accesorios cosidos a mano en Barcelona
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href={getCategoryRoute('Bolso')} className="btn">
              Ver la colección
            </Link>
            <Link href="/#personaliza" className="label link-line">
              Personalizar una pieza
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
