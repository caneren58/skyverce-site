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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ✅ FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        // Next.js güvenli ekleme
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
