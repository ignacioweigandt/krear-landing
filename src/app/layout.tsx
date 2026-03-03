import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KREAR - Digital Architecture Studio",
  description: "Tech Studio dedicado a la arquitectura lógica y diseño de ecosistemas digitales de alto nivel. Elevamos el estándar del desarrollo global.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-display antialiased overflow-x-hidden ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
