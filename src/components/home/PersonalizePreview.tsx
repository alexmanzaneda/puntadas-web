'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { whatsappLink } from '@/lib/constants';

const DEFAULT_NAME = 'Vera';
const MAX_LENGTH = 12;

// Solo letras (con tildes y ñ) y espacios, con la primera en mayúscula
function cleanName(value: string): string {
  const letters = value.replace(/[^A-Za-zÁÉÍÓÚÜÑÇáéíóúüñç ]/g, '').replace(/\s+/g, ' ').slice(0, MAX_LENGTH);
  return letters.charAt(0).toUpperCase() + letters.slice(1);
}

// Lo único que se puede tocar en la home: escribes un nombre y lo ves bordado en la Tote Dinos
export default function PersonalizePreview() {
  const [name, setName] = useState(DEFAULT_NAME);
  const inputId = useId();
  const shown = name.trim() || DEFAULT_NAME;
  // El bordado ocupa como mucho el ancho de la franja amarilla: los nombres largos se hacen más pequeños
  const fontSize = Math.min(10, 44 / (shown.length * 0.42));

  return (
    <section id="personaliza" className="mt-section scroll-mt-20 bg-sand" aria-labelledby="personaliza-title">
      <div className="grid gap-12 px-gutter py-16 md:grid-cols-12 md:gap-x-8 md:py-28">
        {/* La tote sobre piedra, con el nombre bordado encima */}
        <div className="bg-stone md:col-span-6" data-reveal>
          <div className="blend relative [container-type:inline-size]">
            <Image
              src="/images/home/tote-dinos-sin-nombre.webp"
              alt={`Tote Dinos con el nombre ${shown} bordado en rojo sobre la franja amarilla`}
              width={1400}
              height={1400}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <span
              aria-hidden="true"
              className="name-embroidery absolute left-1/2 top-[82%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              // Nunca más grande que el nombre de la marca en la cabecera
              style={{ fontSize: `min(${fontSize}cqw, var(--step-brand))` }}
            >
              {shown}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
          <h2 id="personaliza-title" className="text-head" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
            Con su nombre
          </h2>
          <p className="mt-6 max-w-[44ch] text-body" data-reveal style={{ '--delay': '160ms' } as React.CSSProperties}>
            Escribe un nombre y mira cómo queda en la Tote Dinos. Se borda a mano, punto a punto; la tela y el color del
            hilo los eliges con nosotros por WhatsApp.
          </p>

          <div className="mt-10" data-reveal style={{ '--delay': '240ms' } as React.CSSProperties}>
            <label htmlFor={inputId} className="label block">
              El nombre
            </label>
            <input
              id={inputId}
              type="text"
              autoComplete="off"
              autoCapitalize="words"
              spellCheck={false}
              maxLength={MAX_LENGTH}
              value={name}
              onChange={(e) => setName(cleanName(e.target.value))}
              placeholder={DEFAULT_NAME}
              className="mt-3 w-full border-b border-ink bg-transparent pb-3 font-display text-head italic placeholder:text-muted focus:outline-none focus-visible:border-b-2"
            />
            <a
              href={whatsappLink(`Hola, me gustaría la Tote Dinos con el nombre ${shown} bordado.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 w-full sm:w-auto"
            >
              Pedirla con «{shown}»
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
