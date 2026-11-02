'use client';

import { useId, useState, type ReactNode } from 'react';

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number | null;
}

// Lista desplegable con líneas finísimas: una pregunta abierta cada vez
export default function Accordion({ items, defaultOpen = null }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.title} className="border-b border-line">
            <h3 className="font-sans">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className="text-body font-normal">{item.title}</span>
                <span aria-hidden="true" className="relative h-3 w-3 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-3 bg-ink" />
                  <span
                    className={`absolute left-1/2 top-0 h-3 w-px bg-ink transition-transform duration-500 ${
                      isOpen ? 'scale-y-0' : 'scale-y-100'
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-[62ch] pb-6 text-body">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
