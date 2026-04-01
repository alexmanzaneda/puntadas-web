import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <main className="w-full">
        {/* HERO SECTION - Error 404 */}
        <section className="relative w-full bg-gradient-to-br from-stone-50 to-stone-100 min-h-[500px] flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* Número 404 grande */}
            <div className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-stone-900 mb-4">
              404
            </div>

            {/* Mensaje principal */}
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
              ¡Oops! Página no encontrada
            </h1>

            {/* Descripción */}
            <p className="text-lg sm:text-xl text-stone-700 mb-8 leading-relaxed">
              Esta página se perdió entre las puntadas. 
              No te preocupes, volveremos a encontrar lo que buscas.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-800 transition-colors text-lg"
              >
                ← Volver al inicio
              </Link>
              <Link
                href="/catalogue/bolsos"
                className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 font-semibold rounded-md hover:bg-stone-50 transition-colors text-lg"
              >
                Ver catálogo →
              </Link>
            </div>

            {/* Extra info */}
            <p className="mt-12 text-sm text-stone-600">
              Si crees que debería existir esta página, 
              <Link href="/contacto" className="font-semibold hover:text-emerald-700 ml-1">
                cuéntanos
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
