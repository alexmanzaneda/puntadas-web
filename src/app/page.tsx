import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Colección Destacada</h1>
        <p className="mt-2 text-gray-600">Descubre nuestros bolsos artesanales más populares.</p>
      </div>

      {/* Grid responsivo: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}