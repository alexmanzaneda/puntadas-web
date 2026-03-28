import type { Metadata } from "next";
// Asegúrate de importar la fuente que uses (por defecto suele ser Inter)
import { Inter } from "next/font/google"; 
import "./globals.css";

// Importamos nuestro componente nuevo
import Navbar from "@/components/layout/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-white`}>
        {/* Aquí va la Navbar para que se vea siempre */}
        <Navbar />
        
        {/* Aquí se renderiza el contenido de page.tsx */}
        {children}
      </body>
    </html>
  );
}