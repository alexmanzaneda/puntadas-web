const faqs = [
  {
    question: 'Cuanto tarda el envio?',
    answer: 'El tiempo estimado de envio es de 2 a 5 dias laborables en peninsula.',
  },
  {
    question: 'Puedo cambiar un producto?',
    answer: 'Si, aceptamos cambios dentro de los 14 dias posteriores a la entrega.',
  },
  {
    question: 'Los productos son artesanales?',
    answer: 'Si. Cada pieza se revisa y finaliza de forma manual antes del envio.',
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-stone-500">AYUDA</p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-900">Preguntas frecuentes</h1>
      <div className="mt-10 space-y-8">
        {faqs.map((faq) => (
          <article key={faq.question} className="border-b border-stone-200 pb-6">
            <h2 className="text-xl font-medium text-stone-900">{faq.question}</h2>
            <p className="mt-2 text-stone-700">{faq.answer}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
