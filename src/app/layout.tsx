import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://skyverce-site-2j942fwkw-elvis-projects-4e6b42dd.vercel.app"),
  title: {
    default: "SkyVerce by BC Istanbul - Profesyonel Drone Video & Fotoğraf Çekimi",
    template: "%s | SkyVerce by BC",
  },
  description:
    "İstanbul'un profesyonel drone video ve fotoğraf stüdyosu. Düğün, emlak, turizm ve kurumsal çekimler.",
  applicationName: "SkyVerce by BC",
  keywords: [
    "drone çekimi",
    "drone video",
    "drone fotoğraf",
    "İstanbul drone",
    "düğün çekimi",
    "emlak çekimi",
    "turizm çekimi",
    "kurumsal tanıtım",
    "hava çekimi",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "SkyVerce by BC",
    title: "SkyVerce by BC Istanbul - Profesyonel Drone Video & Fotoğraf Çekimi",
    description:
      "İstanbul'un profesyonel drone video ve fotoğraf stüdyosu. Düğün, emlak, turizm ve kurumsal çekimler.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SkyVerce by BC - Drone Video & Fotoğraf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyVerce by BC Istanbul - Profesyonel Drone Video & Fotoğraf Çekimi",
    description:
      "İstanbul'un profesyonel drone video ve fotoğraf stüdyosu. Düğün, emlak, turizm ve kurumsal çekimler.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "SkyVerce by BC Istanbul - Profesyonel Drone Video & Fotoğraf Çekimi",
  description:
    "İstanbul'un en profesyonel drone video ve fotoğraf stüdyosu. Düğün, emlak, turizm ve kurumsal çekimler.",
  openGraph: {
    title: "SkyVerce by BC Istanbul",
    description:
      "Profesyonel drone video ve fotoğraf çekimi. İstanbul merkezli premium prodüksiyon.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "SkyVerce by BC",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};
