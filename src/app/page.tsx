"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Video,
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
  // WhatsApp Conversion
  const WHATSAPP_NUMBER = "905059467166";
  const waText = encodeURIComponent(
    "Merhaba, SkyVerce by BC web sitesinden yazıyorum.\n\n" +
      "Teklif almak istiyorum:\n" +
      "1) Hizmet: (Düğün / Emlak / Turizm / Kurumsal)\n" +
      "2) Tarih/Saat:\n" +
      "3) Lokasyon:\n" +
      "4) İstenen çıktı: (Video / Fotoğraf / İkisi)\n" +
      "5) Kısa not:\n"
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  const services = [
    {
      icon: <Landmark className="h-12 w-12 text-gold" />,
      title: "Turizm Çekimleri",
      description: "İstanbul’un tarihi ve turistik mekanlarını havadan profesyonel şekilde tanıtıyoruz.",
    },
    {
      icon: <Heart className="h-12 w-12 text-gold" />,
      title: "Düğün & Nişan",
      description: "En özel günlerinizi sinematik drone çekimleriyle ölümsüzleştiriyoruz.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-gold" />,
      title: "Emlak Tanıtımı",
      description: "Gayrimenkullerinizi etkileyici havadan görüntülerle öne çıkarıyoruz.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-gold" />,
      title: "Kurumsal Çekimler",
      description: "Markanız için profesyonel drone video ve fotoğraf çözümleri sunuyoruz.",
    },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: "Profesyonel Hizmet",
      description: "Lisanslı pilotlar ve güvenli uçuş planları",
    },
    {
      icon: <Camera className="h-8 w-8 text-gold" />,
      title: "Üst Düzey Ekipman",
      description: "4K & 8K çözünürlüklü profesyonel çekimler",
    },
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: "Yasal & Sigortalı",
      description: "Tüm uçuşlar yasal izinler kapsamında yapılır",
    },
    {
      icon: <Clock className="h-8 w-8 text-gold" />,
      title: "Hızlı Teslimat",
      description: "Çekim sonrası hızlı montaj ve teslim",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
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
              Düğün, emlak, turizm ve kurumsal projeler için premium drone video & fotoğraf.
              WhatsApp’tan yazın, size en doğru paketi ben yönlendireyim.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp’tan teklif al"
              >
                <Button size="lg" className="bg-gold text-background hover:bg-gold-dark">
                  <Camera className="mr-2 h-5 w-5" />
                  WhatsApp’tan Teklif Al
                </Button>
              </a>

              <Link href="/portfoy">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Portföyü İncele
                </Button>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground">
              Ortalama dönüş süresi: <span className="font-medium text-foreground">5–15 dakika</span>
            </p>

            <p className="text-xs text-muted-foreground">
              İletişime geçerek{" "}
              <Link href="/kvkk" className="underline hover:text-gold">
                KVKK Aydınlatma Metni
              </Link>
              ’ni kabul etmiş sayılırsınız.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gold md:text-5xl">Hizmetlerimiz</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="rounded-xl border border-gold/20 bg-card p-6 text-center transition hover:scale-105"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
