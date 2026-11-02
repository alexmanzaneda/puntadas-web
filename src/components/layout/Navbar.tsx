'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { categoryCovers, getCategoryRoute } from '@/lib/categories';
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

const infoLinks = [
  { href: '/#personaliza', label: 'Personaliza con tu nombre' },
  { href: '/nosotros', label: 'El taller' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '/contacto', label: 'Contacto' },
];

// Fondo de la cabecera: hueso translúcido para que se intuya lo que pasa por detrás
const BAR = 'border-b border-line bg-[rgba(249,246,240,0.78)] backdrop-blur-md';

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 22 12" className="h-3 w-[22px]">
      <path d="M0 .5h22M0 6h22M0 11.5h22" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
      <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Cabecera de tamaño fijo: desde 1280 px, las cuatro secciones a la izquierda y PUNTADAS en el centro;
// por debajo (móvil y tablet), el menú a pantalla completa con las fotos de cada categoría.
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Menú abierto: sin scroll de fondo, foco en cerrar y Escape para salir
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <header className={`sticky top-0 z-40 ${BAR}`}>
        <div className="grid h-header grid-cols-[1fr_auto_1fr] items-center px-gutter">
          {/* Escritorio: secciones */}
          <nav aria-label="Secciones" className="hidden xl:block">
            <ul className="flex gap-8 2xl:gap-10">
              {categoryCovers.map((cover) => {
                const href = getCategoryRoute(cover.category);
                return (
                  <li key={cover.category}>
                    <Link
                      href={href}
                      aria-current={pathname === href ? 'page' : undefined}
                      className="label link-line"
                    >
                      {cover.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Móvil: menú */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            className="flex h-11 w-11 items-center justify-self-start xl:hidden"
          >
            <MenuIcon />
            <span className="sr-only">Abrir menú</span>
          </button>

          <Link href="/" aria-label="Puntadas, inicio" className="font-display text-brand font-normal">
            PUNTADAS
          </Link>

          {/* A la derecha, de momento, nada */}
          <span aria-hidden="true" />
        </div>
      </header>

      {isOpen && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-50 overflow-y-auto bg-paper xl:hidden"
        >
          <div className={`sticky top-0 z-10 grid h-header grid-cols-[1fr_auto_1fr] items-center px-gutter ${BAR}`}>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 items-center justify-self-start"
            >
              <CloseIcon />
              <span className="sr-only">Cerrar menú</span>
            </button>
            <Link href="/" className="font-display text-brand font-normal">
              PUNTADAS
            </Link>
            <span aria-hidden="true" />
          </div>

          <nav className="px-gutter pb-20 pt-8">
            <ul className="grid grid-cols-2 gap-x-3 gap-y-8">
              {categoryCovers.map((cover, i) => (
                <li key={cover.category} data-menu-item style={{ animationDelay: `${i * 70}ms` }}>
                  <Link href={getCategoryRoute(cover.category)} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                      <div className={`absolute inset-0 ${cover.blend === false ? '' : 'blend'}`}>
                        <Image src={cover.image} alt="" fill sizes="50vw" className="img-zoom object-cover" />
                      </div>
                    </div>
                    <span className="label mt-4 block">{cover.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-14 border-t border-line">
              {infoLinks.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex min-h-16 items-center justify-between font-display text-lead"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="font-sans text-small transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="label link-line">
                WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="label link-line">
                Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
