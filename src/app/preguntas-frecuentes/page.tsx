import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Accordion from '@/components/ui/Accordion';
import PageHeader from '@/components/ui/PageHeader';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes | Puntadas',
  description: 'Plazos, personalización, pago y envíos de las piezas de Puntadas, cosidas a mano en Barcelona.',
};

const faqs = [
  {
    title: '¿Cuánto tarda mi pedido?',
    content:
      'Cada pieza se confecciona desde la tela. El plazo mínimo es de una semana, aunque puede variar según el diseño y lo que quieras personalizar. Después del envío, la entrega en la península tarda de 2 a 5 días laborables.',
  },
  {
    title: '¿Cómo se hace cada pieza?',
    content:
      'Elegimos y preparamos la tela, cortamos las piezas, cosemos, forramos, añadimos los detalles y rematamos a mano. No hay producción en serie: cada pieza es única.',
  },
  {
    title: '¿Puedo personalizar una pieza?',
    content:
      'Sí. Puedes pedir cambios de color, tela o tamaño, y añadir iniciales, un nombre o un mensaje. Lo hablamos por WhatsApp y te enseñamos opciones antes de empezar.',
  },
  {
    title: '¿Las piezas son artesanales?',
    content:
      'Todas. Cada una se confecciona desde la tela y se revisa y remata a mano. No hay dos iguales.',
  },
  {
    title: '¿Cómo puedo pagar?',
    content:
      'Por transferencia bancaria, Bizum o PayPal. Acordamos el que mejor te venga cuando confirmamos el encargo.',
  },
  {
    title: '¿Qué pasa si la pieza llega con un defecto?',
    content:
      'Como cada pieza se hace por encargo, no admitimos devoluciones en general. Pero si encuentras un defecto de confección o algo que no corresponde a lo acordado, escríbenos por WhatsApp con fotos y buscamos la mejor solución.',
  },
  {
    title: '¿Hay plazo para avisar de un problema?',
    content:
      'Sí: escríbenos en las 48 horas siguientes a recibir la pieza, con fotos detalladas, y te respondemos con una solución.',
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <main>
        <div className="md:grid md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-4">
            <PageHeader
              title="Preguntas frecuentes"
              intro={
                <>
                  ¿No encuentras lo que buscas?{' '}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-line text-ink">
                    Escríbenos por WhatsApp
                  </a>
                  .
                </>
              }
            />
          </div>
          <div className="px-gutter md:col-span-7 md:col-start-6 md:pt-16" data-reveal>
            <Accordion items={faqs} defaultOpen={0} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
