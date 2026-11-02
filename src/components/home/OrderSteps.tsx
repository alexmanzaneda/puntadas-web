import Image from 'next/image';

const steps = [
  {
    name: 'Eliges',
    text: 'Una pieza de la web, una tela o una idea tuya. Nos lo cuentas por WhatsApp o Instagram.',
    image: '/images/home/paso-eliges.webp',
    alt: 'Seis monederos en telas distintas: flores, vichy y estampados',
    tile: 'bg-stone',
    size: 'aspect-[4/3] md:aspect-auto md:h-[34vh]',
    span: 'md:col-span-3',
    position: 'object-contain',
  },
  {
    name: 'Se cose',
    text: 'Se corta, se cose, se forra y se remata a mano. Antes de empezar te decimos el precio y el plazo: una semana como mínimo.',
    image: '/images/home/paso-se-cose.webp',
    alt: 'Costura del volante marrón de la Tote Otoño, de cerca',
    tile: 'bg-sand',
    size: 'aspect-[4/3] md:aspect-auto md:h-[48vh]',
    span: 'md:col-span-4',
    position: 'object-cover',
  },
  {
    name: 'Es tuya',
    text: 'Te la enviamos a la península en 2 a 5 días laborables. Pagas por Bizum, transferencia o PayPal.',
    image: '/images/home/paso-es-tuya.webp',
    alt: 'Tote Vichy con su correa para el móvil a juego',
    tile: 'bg-stone',
    size: 'aspect-[4/5] md:aspect-auto md:h-[64vh]',
    span: 'md:col-span-5',
    position: 'object-contain',
  },
];

// Cómo se hace un encargo: tres fotos que crecen de izquierda a derecha, el orden lo marca el tamaño
export default function OrderSteps() {
  return (
    <section className="pt-section" aria-labelledby="encargo-title">
      <div className="relative px-gutter">
        <div className="md:absolute md:left-gutter md:top-0 md:max-w-[46vw]">
          <h2 id="encargo-title" className="text-head" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
            Así se hace un encargo
          </h2>
        </div>

        <ol className="mt-10 grid gap-12 md:mt-0 md:grid-cols-12 md:items-end md:gap-x-5">
          {steps.map((step, i) => (
            <li
              key={step.name}
              className={step.span}
              data-reveal
              style={{ '--delay': `${i * 100}ms` } as React.CSSProperties}
            >
              <div className={`group relative overflow-hidden ${step.tile} ${step.size}`}>
                <div className="blend absolute inset-0">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className={`img-zoom ${step.position}`}
                  />
                </div>
              </div>
              <h3 className="mt-5 text-lead">{step.name}</h3>
              <p className="mt-2 max-w-[40ch] text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
