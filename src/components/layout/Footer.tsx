import Link from 'next/link';
import { categoryCovers, getCategoryRoute } from '@/lib/categories';
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

const helpLinks = [
  { href: '/nosotros', label: 'El taller' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '/devoluciones', label: 'Devoluciones' },
  { href: '/contacto', label: 'Contacto' },
];

const legalLinks = [
  { href: '/politica-privacidad', label: 'Privacidad' },
  { href: '/politica-cookies', label: 'Cookies' },
];

// Cierre sobrio: un escalón de tono (piedra), columnas de enlaces y la línea legal
export default function Footer() {
  return (
    <footer className="mt-section bg-stone">
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 px-gutter pt-16 md:grid-cols-12 md:gap-x-8 md:pt-24">
        <div className="col-span-2 md:col-span-4">
          <p className="max-w-[24ch] font-display text-lead">Cosido a mano en Barcelona, una pieza cada vez.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-line mt-8 inline-block text-body">
            Escríbenos por WhatsApp
          </a>
        </div>

        <nav aria-label="Catálogo" className="md:col-span-2 md:col-start-6">
          <h2 className="font-sans text-small text-muted">Catálogo</h2>
          <ul className="mt-5 space-y-3">
            {categoryCovers.map((cover) => (
              <li key={cover.category}>
                <Link href={getCategoryRoute(cover.category)} className="link-line text-small">
                  {cover.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Ayuda" className="md:col-span-2">
          <h2 className="font-sans text-small text-muted">Ayuda</h2>
          <ul className="mt-5 space-y-3">
            {helpLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-line text-small">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="font-sans text-small text-muted">Síguenos</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-line text-small">
                Instagram
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-line text-small">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex md:mt-24 flex-col gap-4 px-gutter pb-8 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-small text-muted">© {new Date().getFullYear()} Puntadas · Barcelona</p>
        <ul className="flex gap-8">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-line text-small text-muted">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
