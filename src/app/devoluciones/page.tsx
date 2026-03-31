import Footer from '@/components/layout/Footer';

export default function DevolucionesPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-stone-500">ATENCION AL CLIENTE</p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-900">Devoluciones</h1>
      <p className="mt-6 text-stone-700 leading-8">
        Puedes solicitar una devolucion en un plazo de 14 dias naturales desde la recepcion
        del pedido. El producto debe estar sin uso, en perfecto estado y con su embalaje original.
      </p>
      <p className="mt-4 text-stone-700 leading-8">
        Para iniciar el proceso, escribe a nuestro equipo con tu numero de pedido y motivo de
        devolucion. Te responderemos con las instrucciones y direccion de envio.
      </p>
      <p className="mt-4 text-sm text-stone-500">Esta informacion es orientativa y esta en revision.</p>
      </main>
      <Footer />
    </>
  );
}
