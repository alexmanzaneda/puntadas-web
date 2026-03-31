import Image from 'next/image';
import Footer from '@/components/layout/Footer';

export default function NosotrosPage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-stone-100 shadow-sm">
            <Image
              src="/images/conchi.jpeg"
              alt="Conchi, fundadora de Puntadas"
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-stone-500">PUNTADAS STUDIO</p>
            <h1 className="mt-3 text-4xl font-semibold text-stone-900">La marca</h1>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              En Puntadas, cada producto se crea a mano con delicadeza y amor, cuidando cada
              puntada y cada acabado para ofrecer piezas de calidad, bonitas y funcionales.
              Creemos en una artesanía que transmite cercanía y refleja dedicación en cada detalle.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Nuestros diseños están pensados para ser prácticos y adaptables a todo tipo de
              momentos: desde el día a día hasta ocasiones especiales. Al estar hechos a mano,
              cada bolso es una pieza exclusiva con identidad propia.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
