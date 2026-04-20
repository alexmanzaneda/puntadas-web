'use client';

import { ProductType } from '@/types';

interface FilterButtonsProps {
  filters: ProductType[];
  selectedFilter: ProductType | null;
  onFilterChange: (filter: ProductType | null) => void;
}

export default function FilterButtons({
  filters,
  selectedFilter,
  onFilterChange,
}: FilterButtonsProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedFilter === null
            ? 'bg-stone-900 text-white'
            : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
        }`}
      >
        Todos
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedFilter === filter
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
