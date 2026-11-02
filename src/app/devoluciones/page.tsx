import type { Metadata } from 'next';
import LegalPage from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Devoluciones | Puntadas',
  description: 'Cómo actuamos si tu pieza llega con un defecto. Las piezas se hacen por encargo y no admiten devolución.',
};

export default function DevolucionesPage() {
  return (
    <LegalPage
      title="Devoluciones"
      intro="Cada pieza se cose por encargo, para ti. Por eso no admitimos devoluciones, pero sí respondemos de cualquier defecto."
      sections={[
        {
          title: 'Piezas por encargo',
          body: (
            <p>
              Todas las piezas se confeccionan a mano según lo que nos pides. Una vez hecha, la pieza es única y está
              pensada para ti, así que <strong>no aceptamos devoluciones</strong> de piezas ya confeccionadas.
            </p>
          ),
        },
        {
          title: 'Si algo no está bien',
          body: (
            <>
              <p>
                Si al recibirla encuentras un <strong>defecto de confección, un material que no corresponde</strong> o
                algo que no se ajusta a lo acordado, escríbenos por WhatsApp con fotos de la pieza.
              </p>
              <p>
                Miramos cada caso por separado y buscamos la mejor solución: un arreglo, una reparación o, si hace
                falta, rehacer la pieza.
              </p>
            </>
          ),
        },
        {
          title: 'Cómo hacerlo',
          body: (
            <ol className="list-decimal space-y-3 pl-5 marker:text-muted">
              <li>Escríbenos por WhatsApp en las 48 horas siguientes a recibir la pieza.</li>
              <li>Envíanos fotos de la pieza y del defecto, con buena luz.</li>
              <li>Revisamos tu caso y te proponemos una solución.</li>
            </ol>
          ),
        },
      ]}
      note="Trabajar por encargo es una relación directa. Si tienes cualquier duda antes o después de recibir tu pieza, pregúntanos."
    />
  );
}
