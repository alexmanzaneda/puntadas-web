import Image from 'next/image';
import Link from 'next/link';

// El taller: retrato alto a un lado y el texto al otro, con aire
export default function About() {
  return (
    <section className="pt-section" aria-labelledby="sobre-title">
      <div className="grid gap-12 px-gutter md:grid-cols-12 md:items-center md:gap-x-8">
        <div className="group relative aspect-[4/5] overflow-hidden bg-stone md:col-span-4" data-reveal>
          <Image
            src="/images/conchi.webp"
            alt="La artesana de Puntadas en su terraza de Barcelona, con su perro"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="img-zoom object-cover object-[50%_30%]"
          />
        </div>

        <div className="md:col-span-6 md:col-start-6 lg:col-span-5 lg:col-start-7">
          <h2 id="sobre-title" className="text-head" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
            Cosido en casa, punto a punto
          </h2>

          <div className="mt-10 space-y-8 border-t border-line pt-8">
            <div data-reveal style={{ '--delay': '160ms' } as React.CSSProperties}>
              <h3 className="text-lead">Desde la tela</h3>
              <p className="mt-3 max-w-[44ch] text-body">
                Cada pieza empieza en la tela y se termina a mano. No hay producción en serie, así que no hay dos
                iguales.
              </p>
            </div>
            <div data-reveal style={{ '--delay': '240ms' } as React.CSSProperties}>
              <h3 className="text-lead">Hecha para ti</h3>
              <p className="mt-3 max-w-[44ch] text-body">
                Puedes cambiar colores, tamaño o telas, y añadir iniciales o un mensaje. Lo hablamos por WhatsApp y te
                enseñamos opciones.
              </p>
            </div>
          </div>

          <Link
            href="/nosotros"
            className="btn-outline mt-10"
            data-reveal
            style={{ '--delay': '320ms' } as React.CSSProperties}
          >
            Conoce el taller
          </Link>
        </div>
      </div>
    </section>
  );
}
