import Footer from '@/components/layout/Footer';
import About from '@/components/home/About';
import CategoryList from '@/components/home/CategoryList';
import ContactCard from '@/components/home/ContactCard';
import Hero from '@/components/home/Hero';
import NewArrivals from '@/components/home/NewArrivals';
import OrderSteps from '@/components/home/OrderSteps';
import PersonalizePreview from '@/components/home/PersonalizePreview';
import { getProducts } from '@/lib/catalog';

// Piezas de la sesión de fotos nueva que se enseñan en "Novedades" (se muestran las cuatro primeras)
const NEW_ARRIVAL_IDS = [
  'bolso-tote-pana-blanca',
  'neceser-toile-rojo',
  'accesorio-funda-tablet-vichy',
  'correa-pack-vichy-fucsia',
  'neceser-ikat-azul',
];

export default async function Home() {
  const products = await getProducts();

  const newArrivals = NEW_ARRIVAL_IDS.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is (typeof products)[number] => Boolean(p)
  );

  return (
    <>
      <main>
        <Hero />
        <NewArrivals products={newArrivals} />
        <CategoryList />
        <PersonalizePreview />
        <OrderSteps />
        <About />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}
