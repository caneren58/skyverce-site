"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Landmark, Heart, Building2, Briefcase, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const serviceCategories = [
  {
    icon: <Landmark className="h-16 w-16 text-gold" />,
    category: "Turizm Çekimleri",
    description: "İstanbul'un tarihi ve turistik yerlerini havadan tanıtın",
    packages: [
    {
      name: "Temel Paket",
      price: "₺2.500",
      duration: "1 saat \xE7ekim",
      features: [
      "1 lokasyon çekimi",
      "4K video çekim",
      "15 adet düzenlenmiş fotoğraf",
      "30 saniyelik tanıtım videosu",
      "Temel renk düzeltme"]

    },
    {
      name: "Premium Paket",
      price: "₺5.000",
      duration: "3 saat \xE7ekim",
      features: [
      "3 lokasyon çekimi",
      "4K/6K video çekim",
      "40 adet profesyonel fotoğraf",
      "1-2 dakikalık sinematik video",
      "Profesyonel montaj ve müzik",
      "360° panoramik görüntüler",
      "Temel renk düzenleme",
      "Sosyal medya içerik"],

      popular: true
    }]

  },
  {
    icon: <Heart className="h-16 w-16 text-gold" />,
    category: "Düğün & Nişan",
    description: "Hayatınızın en özel gününü havadan ölümsüzleştirin",
    packages: [
    {
      name: "Masallar Paketi",
      price: "₺6.000",
      duration: "3 saat \xE7ekim",
      features: [
      "Tüm gün havadan görüntüleme",
      "Konvoy çekimi",
      "50+ profesyonel fotoğraf",
      "2-3 dakikalık sinematik film",
      "Gün batımı özel çekimi",
      "Havai fişek gösterisi çekimi",
      "Premium montaj ve efektler",
      "Özel albüm hazırlama",
      "Gelin-damat portre çekimi"],

      popular: true
    }]

  },
  {
    icon: <Building2 className="h-16 w-16 text-gold" />,
    category: "Emlak Tanıtımı",
    description: "Gayrimenkullerinizi en iyi açıdan tanıtın",
    packages: [
    {
      name: "Profesyonel Paket",
      price: "₺3.500",
      duration: "1 saat \xE7ekim",
      features: [
      "Tam bina/site görüntüleme",
      "Gün-gece çekimleri",
      "40+ profesyonel fotoğraf",
      "1-2 dakikalık tanıtım filmi",
      "360° interaktif tur",
      "Sosyal mekan çekimleri",
      "İç mekan sanal turu",
      "Çevre ve konum görüntüleri"],

      popular: true
    }]

  },
  {
    icon: <Briefcase className="h-16 w-16 text-gold" />,
    category: "Kurumsal Çekimler",
    description: "İşletmenizi, etkinliğinizi profesyonelce tanıtın",
    packages: [
    {
      name: "Kurumsal Temel",
      price: "\u20BA2.500",
      duration: "2 saat çekim",
      features: [
      "İşyeri/fabrika genel çekim",
      "Ekip ve çalışma alanları",
      "25 adet fotoğraf",
      "1 dakikalık tanıtım videosu"]

    },
    {
      name: "Etkinlik Paketi",
      price: "₺4.500",
      duration: "4 saat çekim",
      features: [
      "Festival/konser/fuar çekimi",
      "Kalabalık görüntüleme",
      "50+ profesyonel fotoğraf",
      "2 dakikalık highlight video",
      "Canlı yayın desteği (opsiyonel)",
      "Sosyal medya içerik paketi",
      "Özel etkinlik çekimleri"],

      popular: true
    }]

  }];


  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Hizmetlerimiz
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            İhtiyacınıza uygun profesyonel drone video ve fotoğraf çekim paketlerimizi inceleyin. 
            Her bütçeye uygun, her ihtiyaca özel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) =>
      <section key={categoryIndex} className="border-b border-gold/20 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-6 flex justify-center">{category.icon}</div>
              <h2 className="mb-4 text-4xl font-bold text-gold">{category.category}</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {category.description}
              </p>
            </div>

            <div className={`grid gap-8 ${category.packages.length === 1 ? 'lg:grid-cols-1 max-w-2xl mx-auto' : category.packages.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'}`}>
              {category.packages.map((pkg, pkgIndex) =>
            <Card
              key={pkgIndex}
              className={`relative flex flex-col ${pkg.popular ? 'border-gold gold-border-glow' : ''}`}>

                  {pkg.popular &&
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background">
                      En Popüler
                    </Badge>
              }
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{pkg.duration}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gold !whitespace-pre-line">{pkg.price}</span>
                      <span className="text-muted-foreground"> / proje</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) =>
                  <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                          <span className="text-sm">{feature}</span>
                        </li>
                  )}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link href="/rezervasyon">
                      <Button
                    className={`w-full ${pkg.popular ? 'bg-gold text-background hover:bg-gold-dark' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}>

                        Rezervasyon Yap
                      </Button>
                    </Link>
                  </div>
                </Card>
            )}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gold">Özel Paket mi İstiyorsunuz?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Yukarıdaki paketler standart çözümlerimizdir. İhtiyacınıza özel paket oluşturabiliriz. 
            Bizimle iletişime geçin, projenizi anlatalım.
          </p>
          <Link href="/rezervasyon">
            <Button size="lg" className="bg-gold text-background hover:bg-gold-dark">
              Özel Teklif İsteyin
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>);

}