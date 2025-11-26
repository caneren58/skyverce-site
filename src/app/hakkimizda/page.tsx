"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Award, Target, Heart, Camera, Shield } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Tamamlanan Proje" },
    { number: "50+", label: "Kurumsal Müşteri" },
    { number: "8", label: "Yıllık Deneyim" },
    { number: "15", label: "Profesyonel Ekip" },
  ];

  const team = [
    {
      name: "Mehmet Yılmaz",
      role: "Kurucu & Baş Pilot",
      description: "10 yıllık havacılık deneyimi, 500+ başarılı çekim",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    },
    {
      name: "Ayşe Demir",
      role: "Görüntü Yönetmeni",
      description: "Sinema ve TV prodüksiyonlarında 8 yıl",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    },
    {
      name: "Can Öztürk",
      role: "Montaj Uzmanı",
      description: "Ödüllü video editor, uluslararası projeler",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
    },
    {
      name: "Zeynep Kaya",
      role: "Proje Koordinatörü",
      description: "Müşteri ilişkileri ve proje yönetimi uzmanı",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
    },
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

      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Hakkımızda
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            İstanbul'un gökyüzünden en güzel anlarını yakalayan, profesyonel drone çekim stüdyosu
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 !w-[1280px] !h-full !max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Sol Yazı Kısmı */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gold">Hikayemiz</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="!whitespace-pre-line">
                  SkyVerce by BC, 2016 yılında İstanbul'da kuruldu. Havacılık ve sinema
                  sektörlerinden gelen deneyimli ekibimiz, drone teknolojisinin sunduğu
                  sınırsız yaratıcı olanakları keşfetmek için bir araya geldi.
                </p>
                <p>
                  İlk yıllarımızda küçük projelerle başladık, ancak kalitemiz ve profesyonelliğimiz 
                  sayesinde hızla büyüdük. Bugün İstanbul'un en güvenilir ve tercih edilen drone 
                  çekim stüdyolarından biriyiz.
                </p>
                <p>
                  500'den fazla başarılı proje tamamladık; düğünlerden kurumsal tanıtımlara,
                  emlak projelerinden turizm filmlerine kadar geniş bir yelpazede hizmet verdik.
                </p>
              </div>
            </div>

            {/* Sağ — Düzeltilmiş Drone Görseli */}
            <div className="relative mx-auto aspect-square max-w-xl">
              <img
                src="https://images.unsplash.com/photo-1473986512647-3e477424a8f8?q=80&w=2070"
                alt="SkyVerce Drone Çekimi"
                className="h-full w-full rounded-lg object-cover"
              />

              {/* Altın çerçeve — tam hizalı */}
              <div className="pointer-events-none absolute inset-4 rounded-lg border-2 border-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* ALT KISIM - Aynen bıraktım */}
      <section className="border-y border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold !whitespace-pre-line">
              Rakamlarla SkyVerce by BC
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

      {/* EKİP — dokunulmadı */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold">Ekibimiz</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Alanında uzman, tutkulu ve deneyimli profesyonellerden oluşan ekibimiz
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1 text-xl font-semibold text-gold">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES - unchanged */}
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

      {/* ALT BÖLÜM — unchanged */}
      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gold">Misyonumuz</h2>
              <p className="text-lg text-muted-foreground">
                İstanbul'un eşsiz güzelliğini ve müşterilerimizin özel anlarını havadan yakalamak.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gold">Vizyonumuz</h2>
              <p className="text-lg text-muted-foreground">
                Türkiye'nin en büyük ve en profesyonel havadan görüntüleme platformu olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gold">Birlikte Çalışalım</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Projenizi hayata geçirmek için sabırsızlanıyoruz.
          </p>
          <Link href="/rezervasyon">
            <Button size="lg" className="bg-gold text-background hover:bg-gold-dark">
              <Camera className="mr-2 h-5 w-5" />
              Hemen Başlayalım
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
