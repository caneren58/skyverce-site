"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Target, Heart, Camera, Shield } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "250+", label: "Tamamlanan Proje (2021–2025)" }, // güncellendi
    { number: "50+", label: "Kurumsal Müşteri" },
    { number: "4", label: "Yıllık Deneyim" },
    { number: "4.9/5", label: "Müşteri Memnuniyeti" },
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-gold" />,
      title: "Mükemmellik",
      description: "Her projede en yüksek kalite standartlarını hedefliyoruz.",
    },
    {
      icon: <Heart className="h-12 w-12 text-gold" />,
      title: "Tutku",
      description: "İşimizi seviyoruz ve her çekime tutkuyla yaklaşıyoruz.",
    },
    {
      icon: <Shield className="h-12 w-12 text-gold" />,
      title: "Güvenilirlik",
      description: "Sözlerimizin arkasında duruyoruz, zamanında teslim ediyoruz.",
    },
    {
      icon: <Users className="h-12 w-12 text-gold" />,
      title: "Müşteri Odaklılık",
      description: "İhtiyaçlarınızı dinliyor, beklentilerinizi aşmaya çalışıyoruz.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Hakkımızda
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            İstanbul&apos;un gökyüzünden en güzel anlarını yakalayan, profesyonel drone çekim stüdyosu
          </p>
        </div>
      </section>

      {/* Hikayemiz + Görsel */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Sol Yazı */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gold">Hikayemiz</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="!whitespace-pre-line">
                  SkyVerse by BC, 2021 yılında İstanbul&apos;da kuruldu. Drone teknolojisini
                  yaratıcı prodüksiyon anlayışıyla birleştirerek, kısa sürede güçlü bir
                  referans portföyü oluşturduk.
                </p>
                <p>
                  2021–2025 yılları arasında, düğün çekimleri, kurumsal tanıtımlar,
                  emlak projeleri ve turizm filmleri dahil olmak üzere
                  <strong> 250&apos;den fazla projeyi </strong>
                  başarıyla tamamladık.
                </p>
                <p>
                  Her yıl artan proje hacmimizle, sürdürülebilir büyümeyi ve
                  uzun vadeli müşteri memnuniyetini odağımıza aldık.
                </p>
              </div>
            </div>

            {/* Sağ — Drone Görseli */}
            <div className="relative w-full max-w-xl mx-auto lg:mx-0">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/hakkimizda/drone1.jpg"
                  alt="SkyVerse Drone Çekimi"
                  className="h-full w-full object-cover object-[50%_35%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlar */}
      <section className="border-y border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold">
              Rakamlarla SkyVerse by BC
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-5xl font-bold text-gold">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold">Değerlerimiz</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
