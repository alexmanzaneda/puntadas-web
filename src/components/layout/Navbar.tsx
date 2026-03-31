"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/catalogue/bolsos', label: 'BOLSOS' },
  { href: '/catalogue/neceseres', label: 'NECESERES' },
  { href: '/catalogue/correas-movil', label: 'CORREAS MOVIL' },
  { href: '/catalogue/accesorios', label: 'ACCESORIOS' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-stone-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Nombre de la marca */}
        <Link href="/" className="text-2xl font-bold text-stone-900 tracking-tighter">
          PUNTADAS.
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex items-center gap-8 text-sm font-medium text-stone-600">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'font-bold text-stone-900 underline underline-offset-4 transition-all'
                    : 'hover:underline hover:underline-offset-4 transition-all'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}