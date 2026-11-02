'use client';

import type { ProductType } from '@/types';

interface FilterButtonsProps {
  filters: ProductType[];
  selectedFilter: ProductType | null;
  onFilterChange: (filter: ProductType | null) => void;
}

// Filtros como pestañas de texto: mayúsculas pequeñas con el subrayado fino en la activa
export default function FilterButtons({ filters, selectedFilter, onFilterChange }: FilterButtonsProps) {
  if (filters.length === 0) return null;

  const options: { value: ProductType | null; label: string }[] = [
    { value: null, label: 'Todo' },
    ...filters.map((filter) => ({ value: filter, label: filter })),
  ];

  return (
    <div role="group" aria-label="Filtrar por tipo" className="-mx-gutter overflow-x-auto px-gutter">
      <ul className="flex gap-x-7 whitespace-nowrap md:flex-wrap md:gap-y-3">
        {options.map((option) => {
          const isActive = selectedFilter === option.value;
          return (
            <li key={option.label}>
              <button
                type="button"
                onClick={() => onFilterChange(option.value)}
                aria-pressed={isActive}
                className={`label link-line py-2 transition-colors duration-300 ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {option.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
