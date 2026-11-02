import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import RevealObserver from "@/components/layout/RevealObserver";

// Serif fina para el nombre de la marca y los títulos (se mantiene); sans geométrica y ligera para leer (ver DESIGN.md)
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const text = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puntadasbcn.com"),
  title: "Puntadas | Bolsos y Accesorios Artesanales Hechos a Mano",
  description: "Bolsos, accesorios y neceseres artesanales hechos a mano en Barcelona. Cada pieza es única y confeccionada con cuidado especial. Personalización disponible.",
  keywords: ["bolsos artesanales", "bolsos barcelona", "accesorios hechos a mano", "neceseres personalizados", "correas para móvil", "bolsos ganchillo"],
  authors: [{ name: "Puntadas" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://puntadasbcn.com",
    siteName: "Puntadas",
    title: "Puntadas | Bolsos Artesanales",
    description: "Bolsos, accesorios y neceseres artesanales hechos a mano. Cada pieza es única.",
    // La imagen al compartir sale de src/app/opengraph-image.jpg (1200×630)
  },
  twitter: {
    card: "summary_large_image",
    title: "Puntadas | Bolsos Artesanales",
    description: "Bolsos, accesorios y neceseres hechos a mano en Barcelona",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Organization
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://puntadasbcn.com",
    name: "Puntadas",
    description: "Tienda de bolsos, accesorios y neceseres artesanales hechos a mano",
    url: "https://puntadasbcn.com",
    logo: {
      "@type": "ImageObject",
      url: "https://puntadasbcn.com/logo.png",
      width: 512,
      height: 512,
    },
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
        addressRegion: "Barcelona",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://puntadasbcn.com/contacto",
    },
  };

  return (
    <html lang="es" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que hay JavaScript: solo entonces se ocultan los elementos que entran con animación */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body className="bg-paper font-sans text-body text-ink">
        {/* Navbar siempre visible */}
        <Navbar />

        {/* Contenido de la página */}
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}