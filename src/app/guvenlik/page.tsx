"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Scale, Lock, AlertTriangle, CheckCircle } from "lucide-react";

export default function SafetyLegalPage() {
  const safetyMeasures = [
    {
      icon: <Shield className="h-10 w-10 text-gold" />,
      title: "Lisanslı Pilotlar",
      description: "Tüm pilotlarımız SHGM onaylı SİHA Pilot Lisansına sahiptir. Düzenli eğitim ve sertifikasyon yenilemeleri yapılır.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-gold" />,
      title: "Sigorta Kapsamı",
      description: "5 milyon TL'ye kadar sorumluluk sigortası. Üçüncü şahıs hasar ve kazalara karşı tam kapsam.",
    },
    {
      icon: <FileText className="h-10 w-10 text-gold" />,
      title: "Uçuş İzinleri",
      description: "Her çekim için SHGM'den gerekli uçuş izinleri alınır. İzin süreçleri bizim sorumluluğumuzdadır.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-gold" />,
      title: "Risk Değerlendirmesi",
      description: "Her çekim öncesi detaylı risk analizi yapılır. Güvenli olmayan koşullarda çekim yapılmaz.",
    },
  ];

  const regulations = [
    {
      title: "Uçuş Kuralları",
      items: [
        "Maksimum uçuş yüksekliği: 120 metre (izin durumuna göre değişebilir)",
        "İnsanlardan minimum 30 metre uzaklık",
        "Görüş mesafesi içinde uçuş (VLOS - Visual Line of Sight)",
        "Havalimanlarına 9 km yakınlık yasağı (özel izin gerekli)",
        "Askeri bölgelerde uçuş yasağı",
        "Gece uçuşları için özel izin gereklidir",
      ],
    },
    {
      title: "Yasal Gereklilikler",
      items: [
        "SHGM'den alınmış İHA İşletmeci Belgesi",
        "Pilotların SİHA Pilot Lisansı",
        "Her çekim için özel uçuş izin belgesi",
        "Sorumluluk sigortası poliçesi",
        "Drone kayıt ve tescil belgesi",
        "Elektronik takip sistemi (e-İzin) kullanımı",
      ],
    },
    {
      title: "Kişisel Veri Güvenliği",
      items: [
        "KVKK (Kişisel Verilerin Korunması Kanunu) uyumlu çalışma",
        "Müşteri bilgilerinin şifreli saklanması",
        "Çekim görüntülerinin izinsiz kullanılmaması",
        "Özel hayatın gizliliğine saygı",
        "Veri paylaşımında müşteri onayı alınması",
        "Güvenli bulut depolama sistemleri",
      ],
    },
    {
      title: "Çekim Etik Kuralları",
      items: [
        "Özel mülkiyete saygı, izinsiz çekim yapılmaması",
        "Komşuluk haklarına dikkat edilmesi",
        "Gürültü kirliliğinin minimize edilmesi",
        "Çevre ve doğaya zarar verilmemesi",
        "Diğer hava araçlarına öncelik tanınması",
        "Acil durum protokollerine uyum",
      ],
    },
  ];

  const prohibitedAreas = [
    "Havalimanları ve çevresi (9 km)",
    "Askeri bölgeler ve tesisler",
    "Saray, köşk gibi devlet binaları",
    "Nükleer santraller",
    "Hapishaneler",
    "Stadyumlar (etkinlik sırasında)",
    "Kalabalık alanlar (izinsiz)",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Güvenlik & Yasal Uyumluluk
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            SkyView Istanbul olarak güvenlik ve yasal mevzuatlara tam uyumlu çalışıyoruz. 
            Her çekim profesyonel standartlarda ve yasalara uygun şekilde gerçekleştirilir.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold">Güvenlik Önlemlerimiz</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {safetyMeasures.map((measure, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{measure.icon}</div>
                  <CardTitle className="text-xl">{measure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold">Yasal Düzenlemeler ve Uyum</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Türkiye'de drone uçuşları Sivil Havacılık Genel Müdürlüğü (SHGM) tarafından 
              düzenlenmektedir. Tüm mevzuatlara tam uyum sağlıyoruz.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {regulations.map((regulation, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Scale className="h-6 w-6 text-gold" />
                    {regulation.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {regulation.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gold">Uçuş Yasağı Olan Bölgeler</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Aşağıdaki bölgelerde drone uçuşu yasaktır veya özel izin gerektirir
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                  Yasak ve Kısıtlı Bölgeler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {prohibitedAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                      <span className="text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  Not: Bu bölgelerde özel izin alınarak çekim yapılabilir. İzin süreçleri 
                  2-4 hafta sürebilir ve onay garantisi yoktur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-center text-4xl font-bold text-gold">Acil Durum Protokolleri</h2>
          </div>
          
          <div className="mx-auto max-w-4xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gold" />
                  Ekipman Arızası
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Drone üzerinde arıza tespit edildiğinde, otomatik olarak güvenli bir şekilde 
                eve dönüş (Return to Home) sistemi devreye girer. Yedek drone'larımız sayesinde 
                çekim kesintisiz devam eder.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gold" />
                  Hava Koşulları
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Çekim sırasında hava koşulları kötüleşirse, drone anında güvenli bir alana 
                indirilir. Çekim ertelenir ve müşteri ile yeni tarih planlanır.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gold" />
                  Kaza ve Hasar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Olası bir kaza durumunda sorumluluk sigortamız devreye girer. Müşteri hiçbir 
                masrafla karşılaşmaz. Olay yerinde gerekli tüm resmi prosedürler ekibimiz 
                tarafından yerine getirilir.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gold">Belgelerimiz</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Tüm yasal belgelerimiz günceldir ve talep edildiğinde gösterilir. 
              SHGM İşletmeci Belge No: <span className="font-semibold text-gold">2024/IST/XXX</span>
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-lg border border-gold/20 bg-card p-4">
                <FileText className="mb-2 h-6 w-6 text-gold" />
                <h3 className="mb-1 font-semibold">SHGM İşletmeci Belgesi</h3>
                <p className="text-sm text-muted-foreground">Güncel ve aktif</p>
              </div>
              <div className="rounded-lg border border-gold/20 bg-card p-4">
                <FileText className="mb-2 h-6 w-6 text-gold" />
                <h3 className="mb-1 font-semibold">Pilot Lisansları</h3>
                <p className="text-sm text-muted-foreground">Tüm pilotlar lisanslı</p>
              </div>
              <div className="rounded-lg border border-gold/20 bg-card p-4">
                <FileText className="mb-2 h-6 w-6 text-gold" />
                <h3 className="mb-1 font-semibold">Sorumluluk Sigortası</h3>
                <p className="text-sm text-muted-foreground">5M TL kapsam</p>
              </div>
              <div className="rounded-lg border border-gold/20 bg-card p-4">
                <FileText className="mb-2 h-6 w-6 text-gold" />
                <h3 className="mb-1 font-semibold">Drone Kayıtları</h3>
                <p className="text-sm text-muted-foreground">Tüm cihazlar kayıtlı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
