import type { Metadata } from 'next';
import LegalPage from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Cookies | Puntadas',
  description: 'Esta web no usa cookies, ni analítica, ni píxeles de publicidad.',
};

export default function PoliticaCookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      intro="Esta web no usa cookies. Por eso tampoco verás ningún aviso para aceptarlas."
      sections={[
        {
          title: 'Uso de cookies',
          body: (
            <p>
              Esta web <strong>no usa cookies</strong>. No guardamos información de seguimiento en tu navegador ni
              seguimos tus sesiones.
            </p>
          ),
        },
        {
          title: 'Herramientas de análisis',
          body: (
            <p>
              No usamos Google Analytics, Meta Pixel ni ningún otro sistema de analítica web. Tu visita a Puntadas no se
              registra.
            </p>
          ),
        },
        {
          title: 'Publicidad',
          body: (
            <p>
              No usamos cookies ni píxeles de seguimiento para publicidad. Lo que haces aquí no se usa para enseñarte
              anuncios.
            </p>
          ),
        },
        {
          title: 'Servicios externos',
          body: (
            <p>
              Las imágenes y archivos de la web se sirven desde nuestro alojamiento (Vercel). Ese servicio puede guardar
              datos técnicos mínimos, como registros del servidor, pero nosotros no los usamos para seguimiento.
            </p>
          ),
        },
      ]}
      note="En resumen: sin cookies, sin seguimiento y sin publicidad personalizada. Solo tu encargo, cuando nos escribas."
    />
  );
}
