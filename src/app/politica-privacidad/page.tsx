import Footer from '@/components/layout/Footer';

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-stone-500">INFORMACION LEGAL</p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-900">Politica de Privacidad</h1>
      <p className="mt-6 text-stone-700 leading-8">
        En Puntadas tratamos tus datos personales con la finalidad de gestionar pedidos,
        resolver consultas y mejorar la experiencia de compra.
      </p>
      <p className="mt-4 text-stone-700 leading-8">
        No compartimos tus datos con terceros salvo obligacion legal o proveedores
        estrictamente necesarios para prestar el servicio.
      </p>
      <p className="mt-4 text-sm text-stone-500">Documento legal en construccion. Version provisional.</p>
      </main>
      <Footer />
    </>
  );
}
