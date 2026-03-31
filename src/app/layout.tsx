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
  title: "Puntadas | Bolsos Artesanales",
  description: "Tienda exclusiva de bolsos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} ${playfair.variable} bg-white`}>
        {/* Aquí va la Navbar para que se vea siempre */}
        <Navbar />
        
        {/* Aquí se renderiza el contenido de page.tsx */}
        {children}
      </body>
    </html>
  );
}