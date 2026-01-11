import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Drone Çekimi | SkyVerse by BC",
  description:
    "İstanbul’da profesyonel drone çekimi: düğün, emlak/rezidans, otel-turizm ve kurumsal tanıtımlar. 4K/60fps, hızlı teslim ve teklif.",
  alternates: {
    canonical: "/istanbul-drone-cekimi",
  },
  openGraph: {
    title: "İstanbul Drone Çekimi | SkyVerse by BC",
    description:
      "İstanbul’da profesyonel drone çekimi: düğün, emlak/rezidans, otel-turizm ve kurumsal tanıtımlar.",
    url: "/istanbul-drone-cekimi",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "İstanbul’da drone çekimi fiyatları neye göre belirlenir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiyat; çekim süresi, lokasyon, teslim formatı (ham/kurgu), ekipman, uçuş planı ve gerekli izin süreçlerine göre belirlenir. En hızlı yöntem, projenizi kısaca yazıp teklif istemenizdir.",
      },
    },
    {
      "@type": "Question",
      name: "Teslimat nasıl yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Çekimlere göre WhatsApp, Google Drive veya AirDrop ile teslim edebiliriz. İsterseniz sosyal medya formatlarına (Reels/Shorts) uygun versiyonlar da hazırlanır.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi tür projelerde hizmet veriyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Düğün/nişan, emlak & rezidans tanıtımı, otel & turizm, kurumsal tanıtım, etkinlik & festival ve şehir estetiği çekimleri.",
      },
    },
    {
      "@type": "Question",
      name: "İstanbul’un hangi bölgelerinde çekim yapıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boğaz hattı başta olmak üzere Beşiktaş, Sarıyer, Kadıköy, Galata ve Tarihi Yarımada dahil İstanbul genelinde hizmet veriyoruz.",
      },
    },
  ],
};

// ✅ LocalBusiness (ProfessionalService) — güvenli/minimal
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SkyVerse by BC",
  url: "https://skyverse.studio/istanbul-drone-cekimi",
  areaServed: [
    {
      "@type": "City",
      name: "İstanbul",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
    },
  ],
  serviceType: [
    "Drone çekimi",
    "Drone video çekimi",
    "Drone fotoğraf çekimi",
    "Emlak drone çekimi",
    "Düğün drone çekimi",
    "Kurumsal tanıtım drone çekimi",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drone Çekim Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Düğün / Nişan Drone Çekimi" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Emlak / Rezidans Tanıtımı" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Otel / Turizm Tanıtım Videoları",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kurumsal Firma Tanıtımı",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Etkinlik / Festival" },
      },
    ],
  },
};

// ✅ BreadcrumbList
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://skyverse.studio/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "İstanbul Drone Çekimi",
      item: "https://skyverse.studio/istanbul-drone-cekimi",
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
