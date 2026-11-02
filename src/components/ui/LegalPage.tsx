import type { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';

export interface LegalSection {
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  intro?: ReactNode;
  sections: LegalSection[];
  note?: ReactNode;
}

// Plantilla de las páginas de texto (devoluciones, privacidad, cookies):
// título del apartado a la izquierda y el texto a la derecha, separados por líneas finas
export default function LegalPage({ title, intro, sections, note }: LegalPageProps) {
  return (
    <>
      <main>
        <PageHeader title={title} intro={intro} />

        <div className="px-gutter">
          {sections.map((section) => (
            <section
              key={section.title}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-x-8 md:py-14"
              data-reveal
            >
              <h2 className="text-lead md:col-span-4">{section.title}</h2>
              <div className="prose-puntadas md:col-span-7 md:col-start-6">{section.body}</div>
            </section>
          ))}

          {note && (
            <div className="border-t border-line py-10 md:grid md:grid-cols-12 md:gap-x-8">
              <p className="text-small text-muted md:col-span-7 md:col-start-6">{note}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
