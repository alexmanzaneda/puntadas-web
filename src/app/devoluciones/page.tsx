import Footer from '@/components/layout/Footer';

export default function DevolucionesPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-stone-500">ATENCION AL CLIENTE</p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-900">Política de Devoluciones</h1>
      
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Productos Personalizados</h2>
          <p className="text-stone-700 leading-8">
            Todos nuestros productos son confeccionados artesanalmente y personalizados según tu solicitud. 
            Por esta razón, <span className="font-semibold">no aceptamos devoluciones una vez producido el artículo</span>, 
            ya que cada pieza es única y se elabora específicamente para ti.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Excepciones: Defectos o Inconvenientes</h2>
          <p className="text-stone-700 leading-8">
            Si al recibir tu producto identificas algún <span className="font-semibold">defecto de fabricación, 
            material inadecuado o cualquier inconveniente</span> que no se ajuste a lo acordado, 
            te animamos a contactarnos immediatamente por WhatsApp con fotos del producto.
          </p>
          <p className="mt-4 text-stone-700 leading-8">
            Evaluaremos cada caso de forma individual y buscaremos la mejor solución, 
            que puede incluir ajustes, reparación o, en última instancia, reemplazo del producto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Cómo Proceder</h2>
          <ol className="text-stone-700 leading-8 space-y-2">
            <li><span className="font-semibold">1. Contacta con nosotros</span> por WhatsApp en máximo 48 horas desde la recepción</li>
            <li><span className="font-semibold">2. Envía fotos detalladas</span> del producto y del defecto o inconveniente</li>
            <li><span className="font-semibold">3. Evaluaremos</span> tu caso y nos pondremos en contacto con una solución</li>
          </ol>
        </section>

        <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200">
          <p className="text-sm text-stone-600">
            <span className="font-semibold">Nota:</span> Entendemos que trabajar con nosotros es una relación directa y personalizada. 
            Tu satisfacción es importante, así que siempre estamos abiertos a conversar sobre cualquier duda o inconveniente.
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
