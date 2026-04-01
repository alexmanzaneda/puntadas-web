import Footer from '@/components/layout/Footer';

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-stone-500">INFORMACION LEGAL</p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-900">Política de Privacidad</h1>
      
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Recogida de Datos</h2>
          <p className="text-stone-700 leading-8">
            En Puntadas no recopilamos datos personales a través de esta web. 
            Esta página es un catálogo informativo sin formularios ni sistemas de almacenamiento de datos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Comunicación por WhatsApp</h2>
          <p className="text-stone-700 leading-8">
            Cuando te comuniques con nosotros por WhatsApp, los datos que compartas (nombre, teléfono, requisitos del pedido) 
            son gestionados únicamente por WhatsApp y por nosotros para procesar tu solicitud. 
            <span className="font-semibold"> Estos datos no se comparten con terceros</span> ni se utilizan para otra finalidad.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Seguimiento y Análisis</h2>
          <p className="text-stone-700 leading-8">
            Esta web <span className="font-semibold">no utiliza Google Analytics ni ningún sistema de tracking</span>. 
            No almacenamos información sobre tu navegación, IP, o comportamiento en el sitio.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Tus Derechos</h2>
          <p className="text-stone-700 leading-8">
            Si has compartido datos con nosotros y deseas que sean eliminados, 
            siempre puedes solicitarlo contactándonos por WhatsApp. 
            Responderemos a tu solicitud en la mayor brevedad posible.
          </p>
        </section>

        <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200">
          <p className="text-sm text-stone-600">
            Última actualización: 1 de abril de 2026
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
