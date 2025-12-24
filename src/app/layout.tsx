import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const waHref =
    "https://wa.me/905059467166?text=" +
    encodeURIComponent(
      "Merhaba, SkyVerce by BC web sitesinden yazıyorum.\n\n" +
        "Teklif almak istiyorum:\n" +
        "1) Hizmet: (Düğün / Emlak / Turizm / Kurumsal)\n" +
        "2) Tarih/Saat:\n" +
        "3) Lokasyon:\n" +
        "4) İstenen çıktı: (Video / Fotoğraf / İkisi)\n" +
        "5) Kısa not:"
    );

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

        {children}

        {/* Mobile WhatsApp Floating CTA (mobile only) */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile teklif al"
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path d="M16.001 2.003c-7.732 0-14 6.268-14 14 0 2.469.646 4.885 1.875 7.016L2 30l7.191-1.875A13.933 13.933 0 0 0 16 30c7.732 0 14-6.268 14-14s-6.268-13.997-13.999-13.997zm0 25.497c-2.23 0-4.424-.587-6.357-1.697l-.455-.26-4.266 1.113 1.139-4.16-.297-.43a11.454 11.454 0 0 1-1.883-6.362c0-6.347 5.165-11.513 11.52-11.513 6.347 0 11.513 5.166 11.513 11.513 0 6.355-5.166 11.52-11.513 11.52z" />
          </svg>
        </a>

        <VisualEditsMessenger />
      </body>
    </html>
  );
}
