import Image from 'next/image';
import Link from 'next/link';
import { categoryCovers, getCategoryRoute } from '@/lib/categories';
// El catálogo por categorías: cuatro fotos altas con su nombre y una flecha para entrar
export default function CategoryList() {
  return (
    <section className="pt-section" aria-labelledby="categorias-title">
      <div className="px-gutter md:grid md:grid-cols-12 md:gap-x-8">
        <h2 id="categorias-title" className="text-head md:col-span-5" data-reveal>
          Qué hay en el taller
        </h2>
        <p
          className="mt-5 max-w-[46ch] text-body md:col-span-5 md:col-start-8 md:mt-3"
          data-reveal
          style={{ '--delay': '80ms' } as React.CSSProperties}
        >
          Bolsos, neceseres, correas y accesorios. Cada pieza se corta, se cose y se remata a mano, y casi todas se
          pueden encargar en otra tela.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 px-gutter md:mt-16 md:grid-cols-4 md:gap-x-5">
        {categoryCovers.map((cover, i) => (
          <li key={cover.category} data-reveal style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}>
            <Link href={getCategoryRoute(cover.category)} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                <div className={`absolute inset-0 ${cover.blend === false ? '' : 'blend'}`}>
                  <Image
                    src={cover.image}
                    alt={`${cover.label} de Puntadas`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="img-zoom object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <span className="font-display text-lead">
                  <span className="link-line">{cover.label}</span>
                </span>
                <span aria-hidden="true" className="text-small transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-2 hidden max-w-[34ch] text-small text-muted md:block">{cover.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
