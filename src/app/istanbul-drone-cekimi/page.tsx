"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import QuickQuoteModal, {
  type QuickQuotePrefill,
} from "@/components/QuickQuoteModal";

const FAQ = [
  {
    q: "İstanbul’da drone çekimi fiyatları neye göre belirlenir?",
    a: "Fiyat; çekim süresi, lokasyon, teslim formatı (ham/kurgu), ekipman, uçuş planı ve gerekli izin süreçlerine göre belirlenir. En hızlı yöntem, projenizi kısaca yazıp teklif istemenizdir.",
  },
  {
    q: "Teslimat nasıl yapılıyor?",
    a: "Çekimlere göre WhatsApp, Google Drive veya AirDrop ile teslim edebiliriz. İsterseniz sosyal medya formatlarına (Reels/Shorts) uygun versiyonlar da hazırlanır.",
  },
  {
    q: "Hangi tür projelerde hizmet veriyorsunuz?",
    a: "Düğün/nişan, emlak & rezidans tanıtımı, otel & turizm, kurumsal tanıtım, etkinlik & festival ve şehir estetiği çekimleri.",
  },
  {
    q: "İstanbul’un hangi bölgelerinde çekim yapıyorsunuz?",
    a: "Boğaz hattı başta olmak üzere Beşiktaş, Sarıyer, Kadıköy, Galata ve Tarihi Yarımada dahil İstanbul genelinde hizmet veriyoruz.",
  },
];

export default function IstanbulDroneCekimiPage() {
  // ✅ Modal state
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuickQuotePrefill>({});

  function openQuote(prefill: QuickQuotePrefill = {}) {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  }

  // ✅ FAQ Schema (JSON-LD) - Google için
  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };
  }, [/* FAQ sabit; linter uyarısı olmasın diye explicit bırakıyoruz */]);

  return (
    <div className="min-h-screen">
      {/* ✅ FAQ JSON-LD (görünmez, Google okur) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      {/* HERO */}
      <section className="border-b border-gold/20 bg-card pt-32">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            {/* ✅ Tek H1 */}
            <h1 className="text-4xl font-bold text-gold gold-glow md:text-5xl">
              İstanbul Profesyonel Drone Çekimi
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Düğün, emlak/rezidans, otel-turizm ve kurumsal tanıtımlar için
              İstanbul’da profesyonel drone video & fotoğraf çekimi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* ✅ Modal */}
              <Button
                size="lg"
                className="bg-gold text-background hover:bg-gold-dark"
                onClick={() =>
                  openQuote({
                    service: "İstanbul Drone Çekimi",
                    message:
                      "İstanbul’da drone çekimi için teklif almak istiyorum.",
                  })
                }
              >
                Hemen Teklif Al
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                <Link href="/portfoy">Portföyü Gör</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "4K/60fps, sinematik kurgu opsiyonu",
                "SHGM süreçlerine uygun operasyon",
                "Hızlı teslim (WhatsApp / Drive / AirDrop)",
                "İstanbul genelinde çekim",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* ✅ İç linkleme (SEO) */}
            <p className="mt-6 text-sm text-muted-foreground">
              Daha fazla örnek için{" "}
              <Link href="/portfoy" className="underline hover:text-gold">
                portföy sayfamızı
              </Link>{" "}
              inceleyebilir, hizmet detayları için{" "}
              <Link href="/hizmetler" className="underline hover:text-gold">
                hizmetler
              </Link>{" "}
              sayfasına göz atabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">
            İstanbul’da Drone Çekim Hizmetleri
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            İhtiyaca göre uçuş planı, çekim senaryosu ve teslim formatını birlikte
            belirliyoruz.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Düğün / Nişan Drone Çekimi",
                desc: "Ortaköy, Boğaz hattı, dış mekân konseptleri.",
              },
              {
                title: "Emlak / Rezidans Tanıtımı",
                desc: "Site, rezidans, villa, şantiye ve proje tanıtımları.",
              },
              {
                title: "Otel / Turizm Tanıtım Videoları",
                desc: "Otel, beach, etkinlik ve tur rotaları.",
              },
              {
                title: "Kurumsal Firma Tanıtımı",
                desc: "Ofis, fabrika, kampüs ve etkinlik çekimleri.",
              },
              {
                title: "Etkinlik / Festival",
                desc: "Sahne, kalabalık, atmosfer ve mekân plan çekimleri.",
              },
              {
                title: "Boğaz / Şehir Estetiği",
                desc: "İstanbul silüeti, tarihi yarımada, köprüler.",
              },
            ].map((x) => (
              <Card key={x.title} className="border-gold/20 bg-card">
                <CardContent className="p-6">
                  {/* ✅ H3’ler: alt başlıklar */}
                  <h3 className="text-lg font-semibold text-gold">{x.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FİYAT & TEKLİF SÜRECİ (SEO güçlendirici H2) */}
      <section className="border-t border-gold/20 bg-card py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">
            İstanbul Drone Çekimi Fiyatları ve Teklif Süreci
          </h2>

          <p className="mt-3 max-w-3xl text-muted-foreground">
            Drone çekimi fiyatları; çekim süresi, lokasyon, teslim formatı (ham
            görüntü/kurgu), çekim saati ve gerekli operasyonel süreçlere göre
            değişir. En doğru fiyatı, projenizin kısa özetine göre netleştiririz.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1) Bilgi Alıyoruz",
                desc: "Hizmet türü, lokasyon, süre ve teslim formatını öğreniyoruz.",
              },
              {
                title: "2) Planı Netleştiriyoruz",
                desc: "Uçuş planı, çekim akışı ve teslim tarihini belirliyoruz.",
              },
              {
                title: "3) Hızlı Teslim",
                desc: "Videoları WhatsApp / Drive / AirDrop ile paylaşıyoruz.",
              },
            ].map((x) => (
              <Card key={x.title} className="border-gold/20 bg-background/40">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gold">{x.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold-dark"
              onClick={() =>
                openQuote({
                  service: "İstanbul Drone Çekimi",
                  message: "Drone çekimi fiyat teklifi almak istiyorum.",
                })
              }
            >
              Drone Çekimi Fiyat Teklifi Al
            </Button>

            <p className="mt-3 text-xs text-muted-foreground">
              Teklif alarak{" "}
              <Link href="/kvkk" className="underline hover:text-gold">
                KVKK Aydınlatma Metni
              </Link>{" "}
              ve{" "}
              <Link
                href="/gizlilik-politikasi"
                className="underline hover:text-gold"
              >
                Gizlilik Politikası
              </Link>{" "}
              koşullarını kabul etmiş sayılırsınız.
            </p>
          </div>
        </div>
      </section>

      {/* BÖLGELER */}
      <section className="border-t border-gold/20 bg-card py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">
            İstanbul’un Her Bölgesinde Drone Çekimi
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Boğaz hattı, Beşiktaş, Sarıyer, Kadıköy, Galata ve Tarihi Yarımada
            dahil İstanbul genelinde drone çekimi hizmeti veriyoruz.
          </p>
        </div>
      </section>

      {/* SSS */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 grid gap-4">
            {FAQ.map((item) => (
              <Card key={item.q} className="border-gold/20 bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gold">{item.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold-dark"
              onClick={() =>
                openQuote({
                  service: "İstanbul Drone Çekimi",
                  message:
                    "İstanbul’da drone çekimi için teklif almak istiyorum.",
                })
              }
            >
              Hemen Teklif Al
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold/30 text-gold hover:bg-gold/10"
            >
              <Link href="/portfoy">Portföy Örneklerini İncele</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ✅ Modal */}
      <QuickQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefill={quotePrefill}
      />

      <Footer />
    </div>
  );
}
