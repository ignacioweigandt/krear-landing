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
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#C4FF0D',
  openGraph: {
    title: "KREAR - Digital Architecture Studio",
    description: "Tech Studio dedicado a la arquitectura lógica y diseño de ecosistemas digitales de alto nivel.",
    type: 'website',
    locale: 'es_AR',
    siteName: 'KREAR',
    images: [
      {
        url: '/Isotipo-sinfondo.png',
        width: 1200,
        height: 630,
        alt: 'KREAR - Digital Architecture Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "KREAR - Digital Architecture Studio",
    description: "Tech Studio dedicado a la arquitectura lógica y diseño de ecosistemas digitales de alto nivel.",
    images: ['/Isotipo-sinfondo.png'],
  },
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
