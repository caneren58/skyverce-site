"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuickQuoteModal, { type QuickQuotePrefill } from "@/components/QuickQuoteModal";
import { Landmark, Heart, Building2, Briefcase, Award, Camera, Shield, Clock, Play } from "lucide-react";

export default function HomePage() {
  // HERO background (görsel yolu sende farklıysa bunu değiştir)
  const HERO_BG = "/images/hero.jpg"; // örn: "/images/home-hero.jpg" veya "/images/istanbul-map.jpg"

  // QuickQuote modal state (ana sayfa CTA için)
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuickQuotePrefill>({});

  function openQuote(prefill: QuickQuotePrefill = {}) {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  }

  const services = [
    {
      title: "Turizm Çekimleri",
      desc: "İstanbul’un tarihi ve turistik mekanlarını havadan profesyonel şekilde tanıtıyoruz.",
      icon: Landmark,
      prefill: { service: "Turizm" },
    },
    {
      title: "Düğün & Nişan",
      desc: "En özel günlerinizi sinematik drone çekimleriyle ölümsüzleştiriyoruz.",
      icon: Heart,
      prefill: { service: "Düğün" },
    },
    {
      title: "Emlak Tanıtımı",
      desc: "Gayrimenkullerinizi etkileyici havadan görüntülerle öne çıkarıyoruz.",
      icon: Building2,
      prefill: { service: "Emlak" },
    },
    {
      title: "Kurumsal Çekimler",
      desc: "Markanız için profesyonel drone video ve fotoğraf çözümleri sunuyoruz.",
      icon: Briefcase,
      prefill: { service: "Kurumsal" },
    },
  ];

  const highlights = [
    {
      title: "Profesyonel Hizmet",
      desc: "Lisanslı pilotlar ve güvenli uçuş planları",
      icon: Award,
    },
    {
      title: "Üst Düzey Ekipman",
      desc: "4K & 8K çözünürlüklü profesyonel çekimler",
      icon: Camera,
    },
    {
      title: "Yasal & Sigortalı",
      desc: "Tüm uçuşlar yasal izinler kapsamında yapılır",
      icon: Shield,
    },
    {
      title: "Hızlı Teslimat",
      desc: "Çekim sonrası hızlı montaj ve teslim",
      icon: Clock,
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#050816] text-white">
        {/* HERO */}
        <section className="relative pt-24">
          <div
            className="relative min-h-[70vh] w-full overflow-hidden"
            style={{
              backgroundImage: `url('${HERO_BG}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-[#050816]/75" />

            <div className="relative z-10 container mx-auto px-4 py-16 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gold md:text-6xl">
                  İstanbul’da Profesyonel
                  <br />
                  Drone Çekimi
                </h1>

                <p className="mt-6 text-base text-gray-200 md:text-lg">
                  2021’den bu yana drone video ve fotoğraf çekimiyle; markalar ve bireyler için
                  etkileyici görsel prodüksiyonlar üretiyoruz. WhatsApp’tan yazın, size en doğru
                  paketi ben yönlendireyim.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {/* ANA SAYFA CTA: artık MODAL açıyor */}
                  <Button
                    className="bg-gold text-background hover:bg-gold-dark"
                    onClick={() => openQuote({})}
                  >
                    WhatsApp’tan Teklif Al
                  </Button>

                  <Link href="/portfoy">
                    <Button
                      variant="outline"
                      className="border-gold/30 text-white hover:bg-white/5"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Portföyümüzü İnceleyin
                    </Button>
                  </Link>
                </div>

                <p className="mt-6 text-sm text-gray-300">
                  Ortalama dönüş süresi: <span className="font-semibold text-white">5–15 dakika</span>
                  <span className="mx-2 text-gray-500">•</span>
                  Teklif ve planlama WhatsApp üzerinden
                </p>

                <p className="mt-4 text-xs text-gray-400">
                  İletişime geçerek <Link className="underline hover:text-white" href="/kvkk">KVKK Aydınlatma Metni</Link>’ni kabul etmiş sayılırsınız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className="container mx-auto px-4 py-16 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-gold md:text-5xl">Hizmetlerimiz</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.title}
                  onClick={() => openQuote(s.prefill)}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-sm transition hover:border-gold/30 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-gold opacity-90 transition group-hover:opacity-100" />
                  </div>

                  <h3 className="text-center text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-center text-sm text-gray-300">{s.desc}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* ÖNE ÇIKANLAR */}
        <section className="border-t border-gold/10 bg-white/[0.02]">
          <div className="container mx-auto px-4 py-12 lg:px-8">
            <div className="grid gap-10 md:grid-cols-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="text-center">
                    <Icon className="mx-auto h-8 w-8 text-gold" />
                    <h4 className="mt-4 text-lg font-semibold">{h.title}</h4>
                    <p className="mt-2 text-sm text-gray-300">{h.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ANA SAYFA MODAL */}
      <QuickQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefill={quotePrefill}
      />
    </>
  );
}
