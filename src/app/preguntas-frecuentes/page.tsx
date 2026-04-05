'use client';

import { useState } from 'react';
import Footer from '@/components/layout/Footer';

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
    question: '¿Qué pasa si no me gusta el producto o tiene defectos?',
    answer: 'Como todos nuestros productos son personalizados y confeccionados específicamente para ti, no aceptamos devoluciones en general. Sin embargo, si identificas algún defecto de fabricación, material inadecuado o inconveniente, contáctanos inmediatamente por WhatsApp con fotos. Evaluaremos cada caso individualmente y buscaremos la mejor solución.',
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
  {
    question: '¿Hay tiempo límite para reportar un problema?',
    answer: 'Sí, por favor contacta dentro de las 48 horas desde la recepción del producto si identificas algún defecto o inconveniente. Envía fotos detalladas y te responderemos con una solución.',
  },
];

export default function PreguntasFrecuentesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.2em] text-stone-500">AYUDA</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900">Preguntas frecuentes</h1>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-stone-200 rounded-lg overflow-hidden">
              {/* Pregunta - Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-stone-50 transition-colors text-left"
              >
                <h2 className="text-lg font-medium text-stone-900">{faq.question}</h2>
                <svg
                  className={`w-5 h-5 text-stone-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {/* Respuesta - Desplegable */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-stone-50 border-t border-stone-200">
                  <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
