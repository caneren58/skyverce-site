"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Video, Building2, Heart, Landmark, Briefcase, CheckCircle, Clock, Shield, Award, Play } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Landmark className="h-12 w-12 text-gold" />,
      title: "Turizm Çekimleri",
      description: "İstanbul'un tarihi ve turistik mekanlarını havadan çekerek tanıtım filmlerinizi oluşturuyoruz.",
    },
    {
      icon: <Heart className="h-12 w-12 text-gold" />,
      title: "Düğün & Nişan",
      description: "Hayatınızın en özel günlerini sinematik drone görüntüleriyle ölümsüzleştiriyoruz.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-gold" />,
      title: "Emlak Tanıtımı",
      description: "Gayrimenkullerinizi profesyonel havadan çekimlerle en iyi şekilde tanıtıyoruz.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-gold" />,
      title: "Kurumsal Çekimler",
      description: "İşletmenizi, projenizi veya etkinliğinizi profesyonel drone görüntüleriyle tanıtın.",
    },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: "Profesyonel Ekip",
      description: "Alanında uzman, lisanslı pilotlar ve görüntü yönetmenleri",
    },
    {
      icon: <Camera className="h-8 w-8 text-gold" />,
      title: "Son Teknoloji Ekipman",
      description: "4K ve 8K çekim yapabilen profesyonel drone'lar",
    },
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: "Sigortalı ve Yasal",
      description: "Tüm izinler ve sigortalar bizden, güvenle çekim yapıyoruz",
    },
    {
      icon: <Clock className="h-8 w-8 text-gold" />,
      title: "Hızlı Teslimat",
      description: "Çekim sonrası hızlı montaj ve teslimat süreci",
    },
  ];

  const workflow = [
    { step: "1", title: "İletişim", description: "Bize ulaşın ve projenizi anlatın" },
    { step: "2", title: "Planlama", description: "Çekim planını birlikte oluşturalım" },
    { step: "3", title: "Çekim", description: "Profesyonel ekibimizle çekim yapıyoruz" },
    { step: "4", title: "Montaj", description: "Görüntüleri düzenleyip size sunuyoruz" },
    { step: "5", title: "Teslimat", description: "Final dosyalarınızı teslim ediyoruz" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gold gold-glow md:text-6xl lg:text-7xl">
              İstanbul'u Havadan Keşfedin
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground md:text-2xl">
              Profesyonel drone video ve fotoğraf çekimi ile işletmenizi, etkinliğinizi 
              veya özel anlarınızı en etkileyici şekilde görselleştiriyoruz.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/rezervasyon">
                <Button size="lg" className="bg-gold text-background hover:bg-gold-dark">
                  <Camera className="mr-2 h-5 w-5" />
                  Hemen Rezervasyon Yapın
                </Button>
              </Link>
              <Link href="/portfoy">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  <Play className="mr-2 h-5 w-5" />
                  Portföyümüzü İnceleyin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          
          <div className="mt-12 text-center">
            <Link href="/hizmetler">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                Tüm Hizmetleri Gör
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Workflow Timeline */}
      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold md:text-5xl">Çalışma Sürecimiz</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              5 adımda profesyonel drone çekimi
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gold/30 max-lg:left-8" />
            
            <div className="space-y-12">
              {workflow.map((item, index) => (
                <div key={index} className="relative flex items-center gap-8 max-lg:flex-col max-lg:items-start">
                  <div className="flex w-full items-center justify-end max-lg:justify-start lg:w-1/2">
                    <div className={`text-right max-lg:ml-20 max-lg:text-left ${index % 2 === 0 ? 'lg:block' : 'lg:hidden'}`}>
                      <h3 className="mb-2 text-2xl font-semibold text-gold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gold bg-background text-2xl font-bold text-gold max-lg:left-8">
                    {item.step}
                  </div>
                  
                  <div className="flex w-full items-center max-lg:hidden lg:w-1/2">
                    <div className={index % 2 !== 0 ? 'block' : 'hidden'}>
                      <h3 className="mb-2 text-2xl font-semibold text-gold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bosphorus Highlight */}
      <section className="relative border-t border-gold/20 py-32">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-4xl font-bold text-gold gold-glow md:text-5xl">
              Boğaz'ın Büyüsünü Havadan Yaşayın
            </h2>
            <p className="text-xl text-foreground">
              İstanbul Boğazı'nın eşsiz manzarasını profesyonel drone çekimleriyle keşfedin. 
              Tarihi yarımada, modern silüet ve mavi suların muhteşem uyumunu yakalıyoruz.
            </p>
            <Link href="/rezervasyon">
              <Button size="lg" className="bg-gold text-background hover:bg-gold-dark">
                Boğaz Çekimi İçin İletişime Geçin
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}