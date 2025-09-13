import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";
import WhatsAppFAB from "@/components/common/WhatsAppFAB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Cambia al dominio real de tu sitio
  metadataBase: new URL("https://www.animalijos.com"),
  applicationName: "Animalijos",
  title: {
    default: "Animalijos",
    template: "%s | Animalijos",
  },
  description:
    "Estética para mascotas, alimentos, accesorios, snacks y catálogos profesionales para veterinarios.",
  keywords: [
    "estética canina",
    "estética felina",
    "alimento para mascotas",
    "accesorios para mascotas",
    "snacks para perros",
    "snacks para gatos",
    "catálogos veterinarios",
    "Monterrey",
    "veterinaria",
  ],
  authors: [{ name: "Animalijos" }],
  creator: "Animalijos",
  publisher: "Animalijos",
  category: "pets",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Animalijos",
    url: "https://www.animalijos.com/",
    title: "Animalijos",
    description:
      "Estética para mascotas, alimentos, accesorios, snacks y catálogos profesionales para veterinarios.",
    locale: "es_MX",
    images: [
      {
        url: "/og.jpeg", // coloca un 1200x630 en /public/og.jpg
        width: 1200,
        height: 630,
        alt: "Animalijos - Estética y productos para mascotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@animalijos", // si no tienes, puedes quitar esta línea
    creator: "@animalijos",
    title: "Animalijos",
    description:
      "Estética para mascotas, alimentos, accesorios, snacks y catálogos profesionales para veterinarios.",
    images: ["/og.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, // fix sizes
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  // Si usas verificación, descomenta y coloca tus tokens
  // verification: {
  //   google: "tu-token-de-search-console",
  //   yandex: "",
  //   other: { me: ["mailto:hola@animalijos.com"] },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Animalijos",
    url: "https://www.animalijos.com/",
    logo: "https://www.animalijos.com/og.jpeg",
    sameAs: [
      // agrega tus redes si las tienes
      // "https://www.facebook.com/animalijos",
      // "https://www.instagram.com/animalijos",
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Animalijos",
    url: "https://www.animalijos.com/",
    inLanguage: "es-MX",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.animalijos.com/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="es-MX" suppressHydrationWarning>
      <head>
        {/* Preconnects útiles */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://stats.g.doubleclick.net" />

        {/* Favicon & manifest (dejamos también aquí por compatibilidad) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD: Organization + WebSite */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB
          phone="524423676804"
          message="Hola, vengo del sitio de Animalijos y quiero una cotización."
          position="bottom-right"
          utm={{ source: "website", medium: "fab", campaign: "whatsapp_leads" }}
        />
      </body>
    </html>
  );
}
