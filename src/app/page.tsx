"use client";

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
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Landmark className="h-12 w-12 text-gold" />,
      title: "Turizm Çekimleri",
      description:
        "İstanbul'un tarihi ve turistik mekanlarını havadan çekerek tanıtım filmlerinizi oluşturuyoruz.",
    },
    {
      icon: <Heart className="h-12 w-12 text-gold" />,
      title: "Düğün & Nişan",
      description:
        "Hayatınızın en özel günlerini sinematik drone görüntüleriyle ölümsüzleştiriyoruz.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-gold" />,
      title: "Emlak Tanıtımı",
      description:
        "Gayrimenkullerinizi profesyonel havadan çekimlerle en iyi şekilde tanıtıyoruz.",
    },
    {
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

  // ✅ WhatsApp yönlendirme (direkt gider)
  const openWhatsAppQuote = () => {
    const phone = "905059467166";
    const text =
      "Merhaba, SkyVerce by BC için teklif almak istiyorum. Çekim türü: (Turizm/Düğün/Emlak/Kurumsal). Tarih ve konum: ";
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    if (typeof window !== "undefined") {
      window.open(waLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2070"
            alt="İstanbul drone çekimi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gold gold-glow md:text-6xl lg:text-7xl">
              İstanbul’da Profesyonel Drone Çekimi
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground md:text-2xl">
              2021’den bu yana drone video ve fotoğraf çekimiyle, markalar ve bireyler
              için etkileyici görsel prodüksiyonlar üretiyoruz. WhatsApp’tan yazın, size
              en doğru paketi ben yönlendireyim.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* ✅ Direkt WhatsApp */}
              <Button
                size="lg"
                className="bg-gold text-background hover:bg-gold-dark"
                onClick={openWhatsAppQuote}
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
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">Hizmetlerimiz</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              İhtiyacınıza özel profesyonel drone çekim hizmetleri
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="gold-border-glow transition-transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">Neden Bizi Seçmelisiniz?</h2>
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
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">Çalışma Sürecimiz</h2>
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

      <Footer />
    </div>
  );
}
