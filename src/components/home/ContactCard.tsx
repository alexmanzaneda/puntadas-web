import Image from 'next/image';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
} from '@/lib/constants';

const details = [
  { term: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
  { term: 'Taller', value: 'Barcelona' },
  { term: 'Envíos', value: 'Península, 2–5 días' },
];

// Cierre de la home: las telas del taller a sangre y una tarjeta con lo necesario para encargar
export default function ContactCard() {
  return (
    <section className="relative mt-section" aria-labelledby="contacto-title">
      <div className="relative h-[70svh] overflow-hidden md:h-[100svh]">
        <Image
          src="/images/home/telas.webp"
          alt="Pilas de telas dobladas sobre la mesa del taller: vichy, flores, cuadros y leopardo"
          fill
          sizes="100vw"
          className="drift object-cover object-[50%_45%]"
        />
      </div>

      <div
        className="relative mx-gutter -mt-24 bg-paper p-7 md:absolute md:left-gutter md:top-16 md:mx-0 md:mt-0 md:w-[420px] md:p-10"
        data-reveal
      >
        <h2 id="contacto-title" className="text-head">
          Encarga la tuya
        </h2>
        <p className="mt-4 text-body">Escríbenos y te contamos telas, plazo y precio. Sin compromiso.</p>

        <dl className="mt-8 border-t border-line">
          {details.map((item) => (
            <div key={item.term} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
              <dt className="label text-muted">{item.term}</dt>
              <dd className="text-small">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-line tabular-nums">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={whatsappLink('Hola, me gustaría encargar una pieza de Puntadas.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-8 w-full"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
