import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { CrtOverlay } from "@/components/CrtOverlay";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Teletexto Portfolio - David Jesús Montalba",
  description: "Portfolio interactivo estilo teletexto con efectos CRT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${vt323.variable} antialiased bg-black text-white`}
      >
        <CrtOverlay />
        <div className="relative min-h-screen font-[var(--font-vt323)]">
          {children}
        </div>
      </body>
    </html>
  );
}
