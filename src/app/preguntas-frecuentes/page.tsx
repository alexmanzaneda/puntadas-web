const faqs = [
  {
    question: '¿Cuánto tarda mi pedido?',
    answer: 'Cada producto se confecciona desde cero, comenzando desde la tela. El tiempo mínimo es de una semana, aunque puede variar según la complejidad del diseño y personalizaciones solicitadas. Después del envío, la entrega en península es de 2 a 5 días laborales.',
  },
  {
    question: '¿Cómo es el proceso de confección?',
    answer: 'Seleccionamos y preparamos la tela, cortamos las piezas, cosemos, forramos, agregamos detalles y finalizamos manualmente cada producto. Todo es hecho a mano con atención al detalle. No hacemos producción en masa, cada pieza es única.',
  },
  {
    question: 'Puedo cambiar un producto?',
    answer: 'Sí, aceptamos cambios dentro de los 14 días posteriores a la entrega. Contáctanos por WhatsApp para coordinar el proceso.',
  },
  {
    question: '¿Los productos son artesanales?',
    answer: '100% sí. Cada pieza se confecciona desde la tela, se revisa y finaliza de forma manual. No hay dos productos idénticos; cada uno tiene su propia personalidad.',
  },
  {
    question: '¿Puedo personalizar un producto?',
    answer: 'Por supuesto. Puedes solicitar cambios en colores, materiales, tamaño, agregar iniciales, mensajes o cualquier detalle especial. Discutimos tu idea con nosotros por WhatsApp y te presentamos opciones.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, Bizum y PayPal. Coordinaremos el método que más te convenga una vez confirmado tu pedido.',
  },
];

import Footer from '@/components/layout/Footer';

export default function PreguntasFrecuentesPage() {
  return (
    <>
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
      <Footer />
    </>
  );
}
