import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
          {/* Brand Section - Left Column (Mobile) */}
          <div className="col-span-1 flex flex-col items-center justify-between md:items-start">
            <p className="max-w-xs text-xl sm:text-3xl leading-tight tracking-wide text-white/95 text-center md:text-left">
              Hecho a mano,
              <br />
              cuidando cada detalle
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-6">
              <a
                href="https://www.instagram.com/puntadasbcn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition-colors hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M7.5 2C4.467 2 2 4.467 2 7.5v9C2 19.533 4.467 22 7.5 22h9c3.033 0 5.5-2.467 5.5-5.5v-9C22 4.467 19.533 2 16.5 2h-9zm0 2h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="https://wa.me/34630550136"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-white/70 transition-colors hover:text-white w-7 h-7 flex items-center justify-center"
              >
                <img src="/icons/whatsapp-gris.svg" alt="WhatsApp" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Customer Service - Right Column Mobile / Center Desktop */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center">
            <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">Atención al cliente</h3>
            <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-3 text-sm sm:text-lg text-white/85">
              <li>
                <Link href="/nosotros" className="transition-colors hover:text-white">
                  La marca
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="transition-colors hover:text-white">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="transition-colors hover:text-white">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="transition-colors hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal - Right Column Desktop */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-end">
            <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">Información Legal</h3>
            <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-3 text-sm sm:text-lg text-white/85">
              <li>
                <Link href="/politica-privacidad" className="transition-colors hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="transition-colors hover:text-white">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-center text-xs sm:text-sm text-white/60">
            © {new Date().getFullYear()} Puntadas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
