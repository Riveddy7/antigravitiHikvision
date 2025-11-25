import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IAMET | Integrador de Soluciones Hikvision",
  description: "Tecnología de Seguridad Industrial 2025. Ecosistema de Defensa Invisible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-bg-void text-text-primary font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
