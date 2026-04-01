import Footer from '@/components/layout/Footer';

export default function PoliticaCookiesPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-stone-500">INFORMACION LEGAL</p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-900">Política de Cookies</h1>
      
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Uso de Cookies</h2>
          <p className="text-stone-700 leading-8">
            Esta web <span className="font-semibold">no utiliza cookies</span>. 
            No almacenamos información de seguimiento en tu navegador ni tracking de sesiones.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Herramientas de Análisis</h2>
          <p className="text-stone-700 leading-8">
            No usamos Google Analytics, Meta Pixel, o ningún otro sistema de analítica web. 
            Tu navegación en Puntadas es completamente privada y no es rastreada.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Publicidad Retargeting</h2>
          <p className="text-stone-700 leading-8">
            No utilizamos cookies ni píxeles de seguimiento para publicidad retargeting. 
            Tu actividad no es registrada para mostrarte anuncios personalizados.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-stone-900 mb-3">Tecnologías Externas</h2>
          <p className="text-stone-700 leading-8">
            Las imágenes y recursos de esta web se sirven desde servidores propios o servicios 
            estándar de alojamiento (como Vercel). Estos servicios pueden recopilar datos técnicos 
            mínimos (como logs de servidor), pero no controlamos ni utilizamos esa información para seguimiento.
          </p>
        </section>

        <div className="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200">
          <p className="text-sm text-stone-600">
            <span className="font-semibold">En resumen:</span> Navegas Puntadas sin preocupaciones. 
            No hay cookies, no hay tracking, no hay publicidad personalizada. Solo tu pedido personalizado cuando nos contactes.
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
