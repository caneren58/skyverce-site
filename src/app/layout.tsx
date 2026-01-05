import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

import QuoteProvider from "@/components/QuoteProvider";
import QuoteFloatingButton from "@/components/QuoteFloatingButton";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://skyverce-site-l5ln.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SkyVerce by BC Istanbul - Profesyonel Drone Video & Fotoğraf Çekimi",
    template: "%s | SkyVerce by BC",
  },
  description:
    "İstanbul'un en profesyonel drone video ve fotoğraf stüdyosu. Düğün, emlak, turizm ve kurumsal çekimler.",
  applicationName: "SkyVerce by BC",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "SkyVerce by BC Istanbul - Profesyonel Drone Video & Fotoğraf Çekimi",
    description:
      "İstanbul'un en profesyonel drone video ve fotoğraf stüdyosu. Düğün, emlak, turizm ve kurumsal çekimler.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SkyVerce by BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyVerce by BC Istanbul",
    description:
      "İstanbul'da profesyonel drone video ve fotoğraf çekimi. Düğün, emlak, turizm ve kurumsal.",
    images: ["/og.jpg"],
  },
};

// ✅ iOS/Safari safe-area için kritik (env(safe-area-inset-*) düzgün çalışır)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="antialiased">
        <ErrorReporter />

        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "SkyVerce by BC", "version": "1.0.0"}'
        />

        {/* ✅ Global quote system */}
        <QuoteProvider>
          {children}

          {/* ✅ Mobile floating button now opens the same modal */}
          <QuoteFloatingButton />
        </QuoteProvider>

        <VisualEditsMessenger />
      </body>
    </html>
  );
}
