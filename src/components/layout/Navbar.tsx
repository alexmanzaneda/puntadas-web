import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Nombre de la marca */}
        <Link href="/" className="text-2xl font-bold text-black tracking-tighter">
          PUNTADAS.
        </Link>

        {/* Enlaces de navegación */}
        <div className="space-x-6 text-sm font-medium text-gray-600">
          <Link href="/catalogo" className="hover:text-black transition-colors">
            Catálogo
          </Link>
          <Link href="/nosotros" className="hover:text-black transition-colors">
            La Marca
          </Link>
        </div>
      </div>
    </nav>
  );
}