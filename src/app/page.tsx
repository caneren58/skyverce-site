"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Camera,
  Building2,
  Heart,
  Landmark,
  Briefcase,
  Clock,
  Shield,
  Award,
  Play,
  X,
} from "lucide-react";

function formatDateTR(iso: string) {
  // input: YYYY-MM-DD  -> output: DD.MM.YYYY
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d}.${m}.${y}`;
}

function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");
  const [note, setNote] = useState("");

  // Modal açılınca body scroll kilitle
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const previewMessage = useMemo(() => {
    const dateTR = formatDateTR(date);
    return (
      "Merhaba,\n" +
      "SkyVerse by BC’den teklif almak istiyorum.\n\n" +
      `• Hizmet: ${serviceType || "-"}\n` +
      `• Tarih: ${dateTR || "-"}\n` +
      `• Lokasyon: ${location || "-"}\n` +
      `• Kullanım: ${purpose || "-"}\n` +
      (note ? `• Not: ${note}\n` : "") +
      "\nUygunluk ve net fiyat bilgisini paylaşabilir misiniz?"
    );
  }, [serviceType, date, location, purpose, note]);

  const waLink = useMemo(() => {
    const phone = "905059467166";
    return `https://wa.me/${phone}?text=${encodeURIComponent(previewMessage)}`;
  }, [previewMessage]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Hızlı Teklif"
      style={{
        paddingTop: "calc(env(safe-area-inset-top) + 16px)",
        paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)",
      }}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-gold/20 bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-gold/10 px-6 py-4">
          <div>
            <h3 className="text-xl font-semibold text-gold">Hızlı Teklif</h3>
            <p className="text-sm text-muted-foreground">
              15 saniyede bilgileri gir, WhatsApp’a hazır teklif mesajı gitsin.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground hover:text-gold"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 px-6 py-5 md:grid-cols-2">
          {/* Hizmet Türü */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Hizmet Türü</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            >
              <option value="">Seçin</option>
              <option value="Düğün / Nişan">Düğün / Nişan</option>
              <option value="Emlak Tanıtımı">Emlak Tanıtımı</option>
              <option value="Turizm Çekimi">Turizm Çekimi</option>
              <option value="Kurumsal Çekim">Kurumsal Çekim</option>
              <option value="Etkinlik">Etkinlik</option>
            </select>
          </div>

          {/* Tarih */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Tarih</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* Lokasyon */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">Lokasyon</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Örn: Beşiktaş / İstanbul"
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* Kullanım Amacı */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">Kullanım Amacı</label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            >
              <option value="">Seçin</option>
              <option value="Sosyal Medya">Sosyal Medya</option>
              <option value="Reklam / Tanıtım">Reklam / Tanıtım</option>
              <option value="Kişisel Hatıra">Kişisel Hatıra</option>
              <option value="Web Sitesi">Web Sitesi</option>
              <option value="Etkinlik Arşivi">Etkinlik Arşivi</option>
            </select>
          </div>

          {/* Not */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">Not (opsiyonel)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Örn: Gün batımı çekimi, 2 lokasyon, hızlı teslim vb."
              className="min-h-[90px] w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* Preview */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">
              WhatsApp’a gidecek mesaj:
            </label>
            <pre className="whitespace-pre-wrap rounded-md border border-gold/10 bg-card p-3 text-xs text-muted-foreground">
              {previewMessage}
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-gold/10 px-6 py-4">
          <Button
            variant="outline"
            className="border-gold/40 text-gold hover:bg-gold/10"
            onClick={onClose}
          >
            Vazgeç
          </Button>

          <Button
            className="bg-gold text-background hover:bg-gold-dark"
            onClick={() => window.open(waLink, "_blank", "noopener,noreferrer")}
          >
            WhatsApp’tan Teklif Al
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const services = [
    {
      href: "/hizmetler#turizm",
      icon: <Landmark className="h-12 w-12 text-gold" />,
      title: "Turizm Çekimleri",
      description:
        "İstanbul'un tarihi ve turistik mekanlarını havadan çekerek tanıtım filmlerinizi oluşturuyoruz.",
    },
    {
      href: "/hizmetler#dugun",
      icon: <Heart className="h-12 w-12 text-gold" />,
      title: "Düğün & Nişan",
      description:
        "Hayatınızın en özel günlerini sinematik drone görüntüleriyle ölümsüzleştiriyoruz.",
    },
    {
      href: "/hizmetler#emlak",
      icon: <Building2 className="h-12 w-12 text-gold" />,
      title: "Emlak Tanıtımı",
      description:
        "Gayrimenkullerinizi profesyonel havadan çekimlerle en iyi şekilde tanıtıyoruz.",
    },
    {
      href: "/hizmetler#kurumsal",
      icon: <Briefcase className="h-12 w-12 text-gold" />,
      title: "Kurumsal Çekimler",
      description:
        "İşletmenizi, projenizi veya etkinliğinizi profesyonel drone görüntüleriyle tanıtın.",
    },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: "Profesyonel Hizmet",
      description: "Lisanslı pilotlar ve güvenli operasyon süreçleri",
    },
    {
      icon: <Camera className="h-8 w-8 text-gold" />,
      title: "Son Teknoloji Ekipman",
      description: "4K ve 8K çekim yapabilen profesyonel drone sistemleri",
    },
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: "Sigortalı ve Yasal",
      description: "Tüm izinler ve sigortalar eksiksiz şekilde sağlanır",
    },
    {
      icon: <Clock className="h-8 w-8 text-gold" />,
      title: "Hızlı Teslimat",
      description: "Çekim sonrası hızlı montaj ve teslimat süreci",
    },
  ];

  const workflow = [
    { step: "1", title: "İletişim", description: "Bize WhatsApp üzerinden ulaşın" },
    { step: "2", title: "Planlama", description: "Çekim planını birlikte oluşturalım" },
    {
      step: "3",
      title: "Çekim",
      description: "Planlanan çekimi profesyonel ekipmanlarla gerçekleştiriyoruz",
    },
    { step: "4", title: "Montaj", description: "Görüntüleri düzenleyip size sunuyoruz" },
    { step: "5", title: "Teslimat", description: "Final dosyalarınızı teslim ediyoruz" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-24 sm:pt-28">
        {/* Background katmanı */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero.jpg"
            alt="İstanbul drone çekimi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
            <h1 className="text-4xl font-bold leading-tight text-gold gold-glow sm:text-5xl md:text-6xl lg:text-7xl">
              İstanbul’da Profesyonel Drone Çekimi
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
              Düğün, emlak, turizm ve kurumsal projeler için premium drone video & fotoğraf.
              WhatsApp’tan yazın, size en doğru paketi ben yönlendireyim.
            </p>

            {/* PC/TABLET CTA (mobilde gizli) */}
            <div className="hidden sm:flex flex-col items-center justify-center gap-4 sm:flex-row pt-4 pb-6">
              <Button
                size="lg"
                className="bg-gold text-background hover:bg-gold-dark"
                onClick={() => setQuoteOpen(true)}
                aria-label="WhatsApp’tan teklif al"
              >
                <Camera className="mr-2 h-5 w-5" />
                WhatsApp’tan Teklif Al
              </Button>

              <Link href="/portfoy" aria-label="Portföyümüzü inceleyin">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Portföyümüzü İnceleyin
                </Button>
              </Link>
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              Ortalama dönüş süresi:{" "}
              <span className="font-medium text-foreground">5–15 dakika</span> · Teklif ve
              planlama WhatsApp üzerinden
            </p>

            <p className="mt-4 text-xs text-muted-foreground">
              İletişime geçerek{" "}
              <Link href="/kvkk" className="underline hover:text-gold">
                KVKK Aydınlatma Metni
              </Link>
              ’ni kabul etmiş sayılırsınız.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">
              Hizmetlerimiz
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              İhtiyacınıza özel profesyonel drone çekim hizmetleri
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block focus:outline-none"
                aria-label={`${service.title} fiyat & paketlerini incele`}
              >
                <Card className="gold-border-glow transition-transform hover:scale-105 hover:border-gold/60 active:scale-[1.02] cursor-pointer">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>

                    <p className="mt-4 text-sm font-medium text-gold">
                      Fiyat & Paketleri Gör →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">
              Neden Bizi Seçmelisiniz?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">
              Çalışma Sürecimiz
            </h2>
          </div>

          <div className="space-y-10">
            {workflow.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold text-gold">
                  {item.step}. {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* ✅ SEO Link (düşük profilli – Google için sinyal) */}
      <div className="container mx-auto px-4 pb-6">
        <p className="text-center text-[11px] text-muted-foreground/70">
          <Link href="/istanbul-drone-cekimi" className="hover:underline">
            İstanbul Drone Çekimi
          </Link>
        </p>
      </div>


      <Footer />

      {/* ✅ Mobile Sticky CTA Bar (sadece mobil) */}
      {!quoteOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden">
          <div
            className="border-t border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
            style={{
              paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)",
            }}
          >
            <div className="mx-auto flex max-w-2xl gap-3 px-4 pt-3">
              {/* 1) Fiyat & Paketler (mobil) */}
              <Link href="/hizmetler" className="flex-1">
                <Button className="w-full bg-gold text-background hover:bg-gold-dark">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Fiyat & Paketler
                </Button>
              </Link>

              {/* 2) Portföy (mobil) */}
              <Link href="/portfoy" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold/10"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Portföy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Modal en dış katmanda */}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
