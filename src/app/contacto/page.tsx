import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  whatsappLink,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto | Puntadas',
  description: 'Los encargos se hacen por WhatsApp. Te contamos telas, plazo y precio de cada pieza.',
};

const steps = [
  {
    name: 'Nos cuentas tu idea',
    text: 'Qué pieza te interesa, en qué tela o color, y si quieres añadir un nombre, unas iniciales o algún detalle.',
  },
  {
    name: 'Te confirmamos',
    text: 'Te decimos si la tenemos o si hay que confeccionarla, y te enseñamos telas y opciones.',
  },
  {
    name: 'Te enviamos los detalles',
    text: 'Fotos, medidas, precio final y las opciones de pago y envío.',
  },
  {
    name: 'Se cose y se envía',
    text: 'Una vez confirmado, la cosemos y te la enviamos. Todo el proceso suele llevar alrededor de una semana.',
  },
];

const channels = [
  { term: 'WhatsApp', value: WHATSAPP_DISPLAY, href: WHATSAPP_URL, note: 'La forma más rápida de encargar' },
  { term: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, note: 'Piezas nuevas y encargos recientes' },
  { term: 'Horario', value: 'Lunes a viernes, 10:00–18:00', note: 'Respondemos en menos de 24 horas' },
];

export default function ContactoPage() {
  return (
    <>
      <main>
        <PageHeader
          title="Hablemos de tu pieza"
          intro="Cada pieza se hace a mano y casi siempre por encargo, así que los pedidos los llevamos uno a uno, por WhatsApp."
        />

        <div className="grid gap-16 px-gutter md:grid-cols-12 md:gap-x-8">
          {/* Canales */}
          <section className="md:col-span-5" aria-labelledby="canales-title">
            <h2 id="canales-title" className="sr-only">
              Formas de contacto
            </h2>
            <dl className="border-t border-line">
              {channels.map((channel) => (
                <div key={channel.term} className="border-b border-line py-6" data-reveal>
                  <dt className="label text-muted">{channel.term}</dt>
                  <dd className="mt-3">
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line font-display text-lead tabular-nums"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span className="font-display text-lead">{channel.value}</span>
                    )}
                    <p className="mt-1 text-small text-muted">{channel.note}</p>
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={whatsappLink('Hola, me gustaría hacer un encargo a Puntadas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-10 w-full sm:w-auto"
              data-reveal
            >
              Escribir por WhatsApp
            </a>
          </section>

          {/* Proceso */}
          <section className="md:col-span-6 md:col-start-7" aria-labelledby="proceso-title">
            <h2 id="proceso-title" className="text-head" data-reveal>
              Cómo es el proceso
            </h2>
            <ol className="mt-10 border-t border-line">
              {steps.map((step, i) => (
                <li
                  key={step.name}
                  className="border-b border-line py-6"
                  data-reveal
                  style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
                >
                    <h3 className="text-lead">{step.name}</h3>
                    <p className="mt-2 max-w-[46ch] text-body">{step.text}</p>

                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
