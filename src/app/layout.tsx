import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google"; 
import "./globals.css";

import Navbar from "@/components/layout/Navbar"; 

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
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
    <html lang="es">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </head>
      <body className={`${poppins.className} ${playfair.variable} bg-white`}>
        {/* Navbar siempre visible */}
        <Navbar />
        
        {/* Contenido de la página */}
        {children}
      </body>
    </html>
  );
}