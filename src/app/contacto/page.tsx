export default function ContactoPage() {
  const whatsappUrl = 'https://wa.me/34600000000?text=Hola%20Puntadas%2C%20me%20interesa%20realizar%20un%20pedido';

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.2em] text-zinc-600">CONTACTO</p>
        <h1 className="mt-3 text-4xl font-bold text-zinc-950">Diseñado para ti</h1>
        <p className="mt-6 text-lg text-zinc-800 leading-8">
          Cada producto Puntadas es hecho a mano y personalizado. Por eso, gestionamos todos nuestros pedidos de forma 
          <span className="font-semibold"> 100% personalizada</span> a través de WhatsApp.
        </p>
      </div>

      {/* Main CTA Section */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">¿Quieres hacer un pedido?</h2>
          <p className="text-zinc-100 mb-8 leading-7">
            Escríbenos por WhatsApp con los detalles de lo que te interesa: qué producto, colores, tamaño o personalizaciones. 
            Nos encargaremos de:
          </p>
          <ul className="space-y-3 mb-8 text-zinc-100">
            <li className="flex items-center">
              <span className="mr-3 text-lg">✓</span>
              Confirmar disponibilidad
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-lg">✓</span>
              Enviarte fotos y detalles personalizados
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-lg">✓</span>
              Coordinar el pedido, pago y envío
            </li>
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-3 rounded-md font-semibold hover:bg-zinc-100 transition-colors"
          >
            <span>💬</span>
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Details */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-zinc-950 mb-8">Formas de contacto</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* WhatsApp */}
          <div className="p-6 border border-zinc-200 rounded-lg">
            <h3 className="text-lg font-semibold text-zinc-950 mb-2">WhatsApp (Recomendado)</h3>
            <p className="text-sm text-zinc-700 mb-4">La forma más rápida y personal de hacer tu pedido</p>
            <p className="text-2xl font-bold text-zinc-950 mb-4">+34 600 000 000</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-zinc-950 font-medium hover:text-zinc-800 underline"
            >
              Abrir WhatsApp →
            </a>
          </div>

          {/* Instagram */}
          <div className="p-6 border border-zinc-200 rounded-lg">
            <h3 className="text-lg font-semibold text-zinc-950 mb-2">Instagram</h3>
            <p className="text-sm text-zinc-700 mb-4">Síguenos para ver nuevos diseños y tendencias</p>
            <p className="text-2xl font-bold text-zinc-950 mb-4">@puntadas_pc</p>
            <a
              href="https://instagram.com/puntadas_pc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-zinc-950 font-medium hover:text-zinc-800 underline"
            >
              Visitar perfil →
            </a>
          </div>
        </div>

        <div className="mt-8 p-6 bg-zinc-50 rounded-lg border border-zinc-200">
          <p className="text-sm text-zinc-800 mb-2">
            <span className="font-semibold">Horario de atención:</span> Lunes a Viernes, 10:00 - 18:00
          </p>
          <p className="text-sm text-zinc-800">
            Nos esforzamos por responder en menos de 24 horas
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-950 mb-8">Cómo es el proceso</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-zinc-950 mb-1">Escribe tu idea</h3>
                <p className="text-zinc-800">Cuéntanos qué producto te interesa, colores, personalizaciones o cualquier detalle especial</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-zinc-950 mb-1">Confirmamos disponibilidad</h3>
                <p className="text-zinc-800">Te confirmamos si tenemos el producto disponible o si necesita producción personalizada</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-zinc-950 mb-1">Te enviamos detalles</h3>
                <p className="text-zinc-800">Fotos, medidas exactas, precio final y opciones de pago y envío</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-zinc-950 mb-1">Finaliza tu compra</h3>
                <p className="text-zinc-800">Una vez confirmado, coordinamos el pago y envío. Tu producto llega en aproximadamente una semana</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white border border-zinc-200 rounded-lg">
            <p className="text-sm text-zinc-950">
              <span className="font-semibold">⏱️ Plazo aproximado:</span> Todo el proceso (desde que contactas hasta recibir tu producto) toma alrededor de <span className="font-semibold">una semana</span>, dependiendo de la complejidad y disponibilidad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
