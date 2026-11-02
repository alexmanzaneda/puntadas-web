import CategoryPage from '@/components/shop/CategoryPage';

export default function CorreasPage() {
  return (
    <CategoryPage
      category="Correa"
      title="Correas"
      subtitle="Correas para el móvil, lanyards, llaveros y chupeteros, fruncidos o lisos, en las telas del taller."
      banner={{
        src: '/images/correa/colgador-correas.webp',
        alt: 'Decenas de correas y lanyards de Puntadas colgadas en fila, en vichy, flores y volantes',
        width: 1600,
        height: 519,
      }}
    />
  );
}
