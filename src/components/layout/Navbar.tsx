"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/catalogue/bolsos', label: 'BOLSOS' },
  { href: '/catalogue/neceseres', label: 'NECESERES' },
  { href: '/catalogue/correas', label: 'CORREAS' },
  { href: '/catalogue/accesorios', label: 'ACCESORIOS' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full border-b border-stone-200 bg-white relative">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo / Nombre de la marca */}
        <Link href="/" className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tighter">
          PUNTADAS.
        </Link>

        {/* Botón Hamburguesa (solo mobile) */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Menú"
          >
            <span className={`w-6 h-0.5 bg-stone-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-stone-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-stone-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Menú Mobile (desplegable - a la derecha) */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-stone-200 rounded shadow-lg min-w-48 z-50">
              <div className="px-4 py-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={
                      isActive(item.href)
                        ? 'font-bold text-stone-900 text-sm underline underline-offset-4 text-right'
                        : 'font-medium text-stone-700 text-sm hover:text-stone-900 text-right'
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enlaces de navegación (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? 'font-bold text-stone-900 underline underline-offset-4 transition-all'
                  : 'hover:underline hover:underline-offset-4 transition-all'
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}