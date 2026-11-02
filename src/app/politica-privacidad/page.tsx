import type { Metadata } from 'next';
import LegalPage from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Privacidad | Puntadas',
  description: 'Esta web no recoge datos personales. Lo que compartes por WhatsApp solo se usa para tu encargo.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage
      title="Privacidad"
      intro="Esta web es un catálogo. No tiene formularios ni guarda datos tuyos."
      sections={[
        {
          title: 'Recogida de datos',
          body: (
            <p>
              Puntadas no recoge datos personales a través de esta web. No hay formularios, cuentas de usuario ni
              sistemas que almacenen información sobre ti.
            </p>
          ),
        },
        {
          title: 'Comunicación por WhatsApp',
          body: (
            <p>
              Cuando nos escribes por WhatsApp, los datos que compartes (nombre, teléfono, lo que quieres encargar) los
              gestionamos solo nosotros y WhatsApp, y únicamente para atender tu encargo.{' '}
              <strong>No los compartimos con terceros</strong> ni los usamos para otra cosa.
            </p>
          ),
        },
        {
          title: 'Seguimiento y análisis',
          body: (
            <p>
              Usamos <strong>Vercel Web Analytics</strong> para conocer de forma agregada cuántas visitas recibe la web,
              qué páginas se ven y desde dónde se llega a ellas. No usa cookies ni nos permite identificarte, y no usamos
              Google Analytics ni otros sistemas de seguimiento publicitario.
            </p>
          ),
        },
        {
          title: 'Tus derechos',
          body: (
            <p>
              Si nos has dado datos por WhatsApp y quieres que los borremos, pídenoslo por el mismo canal y lo haremos lo
              antes posible.
            </p>
          ),
        },
      ]}
      note="Última actualización: 2 de noviembre de 2026."
    />
  );
}
