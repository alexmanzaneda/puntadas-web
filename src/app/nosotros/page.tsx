import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { getCategoryRoute } from '@/lib/categories';

export const metadata: Metadata = {
  title: 'El taller | Puntadas',
  description: 'Puntadas cose a mano en Barcelona bolsos, neceseres, correas y accesorios, una pieza cada vez.',
};

const process = [
  {
    name: 'La tela',
    text: 'Todo empieza en la mesa del taller: vichy, pana, ikat, toile, flores. Eliges la tela y a partir de ahí se corta la pieza.',
    image: '/images/home/telas.webp',
    alt: 'Pilas de telas dobladas sobre la mesa del taller',
    blend: false,
  },
  {
    name: 'La costura',
    text: 'Se corta, se cose, se forra y se remata a mano. Los volantes, los bordes y las asas se rematan uno a uno.',
    image: '/images/home/paso-se-cose.webp',
    alt: 'Costura del volante marrón de la Tote Otoño, de cerca',
    blend: true,
  },
  {
    name: 'El detalle',
    text: 'Cada pieza lleva su etiqueta y se revisa y remata a mano. Si lleva nombre o iniciales, se bordan también a mano.',
    image: '/images/bolso/tote/tote-blanca-detalle2.webp',
    alt: 'Interior de la Tote Pana con su forro de rayas beige',
    blend: true,
  },
];

export default function NosotrosPage() {
  return (
    <>
      <main>
        {/* Retrato a la izquierda (cabe entero en pantalla) y el texto a la derecha */}
        <section className="grid gap-10 px-gutter pt-10 md:grid-cols-12 md:items-center md:gap-x-8 md:pt-14">
          <div
            className="group relative aspect-[4/5] overflow-hidden bg-stone md:col-span-5 md:h-[calc(100svh-var(--header)-7rem)] md:max-h-[760px] md:w-auto md:max-w-full lg:col-span-4"
            data-reveal
          >
            <Image
              src="/images/conchi.webp"
              alt="La artesana de Puntadas en su terraza de Barcelona, con su perro"
              fill
              priority
              sizes="(min-width: 768px) 35vw, 100vw"
              className="img-zoom object-cover object-[50%_30%]"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-6">
            <h1 className="text-head" data-reveal>
              Cosido a mano en Barcelona
            </h1>
            <p className="mt-6 max-w-[52ch] text-body" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
              Puntadas es un taller pequeño. Cada bolso, neceser o correa se cose en casa, una pieza cada vez, y casi
              todo se hace por encargo.
            </p>
            <div className="prose-puntadas mt-8 border-t border-line pt-8" data-reveal style={{ '--delay': '160ms' } as React.CSSProperties}>
              <p>
                En Puntadas cada pieza se hace a mano, con cuidado en cada costura y en cada acabado. Buscamos piezas
                bonitas, que duren y que se usen todos los días.
              </p>
              <p>
                Los diseños están pensados para la vida diaria y para los días especiales. Al estar hechos a mano, no
                hay dos iguales: cada uno tiene algo propio, y muchos se pueden personalizar con un nombre, unas
                iniciales o la tela que elijas.
              </p>
            </div>
            <Link href={getCategoryRoute('Bolso')} className="btn-outline mt-10" data-reveal>
              Ver las piezas
            </Link>
          </div>
        </section>

        {/* El proceso, en tres fotos */}
        <section className="pt-section" aria-labelledby="proceso-title">
          <h2 id="proceso-title" className="px-gutter text-head" data-reveal>
            Cómo se hace
          </h2>
          <ol className="mt-10 grid gap-12 px-gutter md:mt-14 md:grid-cols-3 md:gap-x-5">
            {process.map((step, i) => (
              <li key={step.name} data-reveal style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-stone">
                  <div className={`absolute inset-0 ${step.blend ? 'blend' : ''}`}>
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="img-zoom object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-lead">{step.name}</h3>
                <p className="mt-2 max-w-[40ch] text-body">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
