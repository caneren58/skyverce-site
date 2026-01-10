"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import QuickQuoteModal, {
  type QuickQuotePrefill,
} from "@/components/QuickQuoteModal";

export default function IstanbulDroneCekimiPage() {
  // ✅ Modal state
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuickQuotePrefill>({});

  function openQuote(prefill: QuickQuotePrefill = {}) {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="border-b border-gold/20 bg-card pt-32">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gold gold-glow md:text-5xl">
              İstanbul Profesyonel Drone Çekimi
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Düğün, emlak/rezidans, otel-turizm ve kurumsal tanıtımlar için
              lisanslı pilotlarla İstanbul’un her bölgesinde profesyonel drone
              çekimi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* ✅ 404 yerine MODAL aç */}
              <Button
                size="lg"
                className="bg-gold text-background hover:bg-gold-dark"
                onClick={() => openQuote({})}
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
                "Hızlı teslim (WhatsApp / Drive)",
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
                  <h3 className="text-lg font-semibold text-gold">{x.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BÖLGELER */}
      <section className="border-t border-gold/20 bg-card py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">
            İstanbul’un Her Bölgesinde Çekim
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Boğaz hattı, Beşiktaş, Sarıyer, Kadıköy, Galata ve Tarihi Yarımada
            dahil.
          </p>

          <div className="mt-8">
            {/* ✅ 404 yerine MODAL aç */}
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold-dark"
              onClick={() => openQuote({})}
            >
              Drone Çekimi Fiyat Teklifi Al
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
