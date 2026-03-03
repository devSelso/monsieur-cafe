import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monsieur Café — O café levado a sério em São Paulo",
  description:
    "Monsieur é uma cafeteria sofisticada inspirada nos bistrôs parisienses. Experimente cafés de origem única, croissants artesanais e um ambiente que celebra a arte e a cultura do café.",
  keywords: [
    "cafeteria",
    "café especial",
    "bistrô",
    "São Paulo",
    "café de origem",
    "croissant",
    "Monsieur",
    "café artesanal",
    "specialty coffee",
    "café gourmet",
  ],
  authors: [{ name: "Monsieur Café" }],
  openGraph: {
    title: "Monsieur Café — O café levado a sério",
    description:
      "Uma experiência sensorial única inspirada nos bistrôs parisienses. Cafés de origem, doces artesanais e ambiente sofisticado em São Paulo.",
    url: "https://monsieucafe.com.br",
    siteName: "Monsieur Café",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Monsieur Café — Interior sofisticado com café sendo preparado por barista",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monsieur Café — O café levado a sério",
    description:
      "Uma experiência sensorial única inspirada nos bistrôs parisienses.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://monsieurcafe.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
