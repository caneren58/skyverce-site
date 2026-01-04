"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import QuickQuoteModal, { type QuickQuotePrefill } from "@/components/QuickQuoteModal";
import {
  Landmark,
  Heart,
  Building2,
  BriefcaseBusiness,
  BadgeCheck,
  Camera,
  Shield,
  Clock,
  Play,
} from "lucide-react";

export default function HomePage() {
  // ✅ GARANTİ: senin public içinde var
  const HERO_BG = "/og.jpg";

  // QuickQuote modal state (anasayfa CTA)
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuickQuotePrefill>({});

  function openQuote(prefill: QuickQuotePrefill = {}) {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#050816] text-white">
        {/* HERO */}
        <section className="relative pt-28">
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${HERO_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#050816]/75" />
          {/* Soft vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050816]" />

          <div className="relative container mx-auto px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gold gold-glow md:text-6xl">
                İstanbul’da Profesyonel
                <br />
                Drone Çekimi
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 md:text-lg">
                2021’den bu yana drone video ve fotoğraf çekimiyle; markalar ve bireyler için
                etkileyici görsel prodüksiyonlar üretiyoruz. WhatsApp’tan yazın, size en doğru paketi
                ben yönlendireyim.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {/* ✅ Eskiden direkt WhatsApp’a gidiyordu — artık MODAL açıyor */}
                <Button
                  className="bg-gold text-background hover:bg-gold-dark"
                  onClick={() =>
                    openQuote({
                      source: "home-hero",
                    })
                  }
                >
                  WhatsApp’tan Teklif Al
                </Button>

                <Link href="/portfoy" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-gold/30 text-white hover:bg-white/5"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Portföyümüzü İnceleyin
                  </Button>
                </Link>
              </div>

              <div className="mt-6 text-sm text-white/55">
                Ortalama dönüş süresi: <span className="font-semibold text-white/80">5–15 dakika</span>
                <span className="mx-2">•</span>
                Teklif ve planlama WhatsApp üzerinden
              </div>

              <div className="mt-4 text-xs text-white/40">
                İletişime geçerek{" "}
                <Link href="/kvkk" className="underline underline-offset-4 hover:text-white/70">
                  KVKK Aydınlatma Metni
                </Link>
                ’ni kabul etmiş sayılırsınız.
              </div>
            </div>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className="container mx-auto px-4 py-16 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gold md:text-5xl">
            Hizmetlerimiz
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Landmark className="h-10 w-10 text-gold" />}
              title="Turizm Çekimleri"
              desc="İstanbul’un tarihi ve turistik mekanlarını havadan profesyonel şekilde tanıtıyoruz."
            />
            <ServiceCard
              icon={<Heart className="h-10 w-10 text-gold" />}
              title="Düğün & Nişan"
              desc="En özel günlerinizi sinematik drone çekimleriyle ölümsüzleştiriyoruz."
            />
            <ServiceCard
              icon={<Building2 className="h-10 w-10 text-gold" />}
              title="Emlak Tanıtımı"
              desc="Gayrimenkullerinizi etkileyici havadan görüntülerle öne çıkarıyoruz."
            />
            <ServiceCard
              icon={<BriefcaseBusiness className="h-10 w-10 text-gold" />}
              title="Kurumsal Çekimler"
              desc="Markanız için profesyonel drone video ve fotoğraf çözümleri sunuyoruz."
            />
          </div>

          {/* ÖZELLİKLER */}
          <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            <FeatureItem
              icon={<BadgeCheck className="h-7 w-7 text-gold" />}
              title="Profesyonel Hizmet"
              desc="Lisanslı pilotlar ve güvenli uçuş planları"
            />
            <FeatureItem
              icon={<Camera className="h-7 w-7 text-gold" />}
              title="Üst Düzey Ekipman"
              desc="4K & 8K çözünürlüklü profesyonel çekimler"
            />
            <FeatureItem
              icon={<Shield className="h-7 w-7 text-gold" />}
              title="Yasal & Sigortalı"
              desc="Tüm uçuşlar yasal izinler kapsamında yapılır"
            />
            <FeatureItem
              icon={<Clock className="h-7 w-7 text-gold" />}
              title="Hızlı Teslimat"
              desc="Çekim sonrası hızlı montaj ve teslim"
            />
          </div>
        </section>

        <Footer />
      </main>

      {/* ✅ Modal */}
      <QuickQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefill={quotePrefill}
      />
    </>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-2 text-center text-lg font-semibold text-white">{title}</h3>
      <p className="text-center text-sm text-white/60">{desc}</p>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-2">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-white/[0.03]">
        {icon}
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="text-sm text-white/55">{desc}</div>
    </div>
  );
}
