import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { getCategoryRoute } from '@/lib/categories';

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-[70svh] flex-col items-center justify-center px-gutter text-center">
        <h1 className="text-head">Esta página no existe</h1>
        <p className="mt-5 max-w-[42ch] text-body">
          Puede que el enlace sea antiguo o que la pieza ya no esté en el catálogo.
        </p>
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <Link href="/" className="btn">
            Volver al inicio
          </Link>
          <Link href={getCategoryRoute('Bolso')} className="label link-line">
            Ver el catálogo
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
