'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Activa las entradas de [data-reveal] cuando aparecen en pantalla (una sola vez).
// El escalonado se marca en cada elemento con style={{ '--delay': '80ms' }}.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
