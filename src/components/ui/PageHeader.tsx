import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  intro?: ReactNode;
  align?: 'left' | 'center';
}

// Cabecera de página interior: título en serif y una entradilla
export default function PageHeader({ title, intro, align = 'left' }: PageHeaderProps) {
  const centered = align === 'center';

  return (
    <header className={`px-gutter pb-12 pt-10 md:pb-20 md:pt-16 ${centered ? 'text-center' : ''}`}>
      <h1 className="text-head" data-reveal style={{ '--delay': '80ms' } as React.CSSProperties}>
        {title}
      </h1>
      {intro && (
        <div
          className={`mt-6 max-w-[52ch] text-body ${centered ? 'mx-auto' : ''}`}
          data-reveal
          style={{ '--delay': '160ms' } as React.CSSProperties}
        >
          {intro}
        </div>
      )}
    </header>
  );
}
