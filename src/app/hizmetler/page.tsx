"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickQuoteModal, { type QuickQuotePrefill } from "@/components/QuickQuoteModal";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Landmark, Heart, Building2, Briefcase, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuickQuotePrefill>({});

  function openQuote(prefill: QuickQuotePrefill) {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  }

  const serviceCategories = [
    {
      id: "turizm",
      icon: <Landmark className="h-16 w-16 text-gold" />,
      category: "Turizm Çekimleri",
      description: "İstanbul'un ikonik noktalarını havadan, sinematik bir dille anlatın.",
      packages: [
        {
          name: "Temel Paket",
          price: "₺3.750’den başlayan",
          duration: "45 dk planlı çekim · 1 lokasyon",
          features: [
            "4K sinematik hava görüntüleri",
            "Seçilmiş karelerden 15 düzenlenmiş fotoğraf",
            "Sosyal medya uyumlu 30 sn tanıtım videosu",
            "Temel renk düzenleme ve optimizasyon",
            "Teslim: WhatsApp / Drive (uygun format)",
          ],
        },
        {
          name: "Premium Paket",
          price: "₺7.900’den başlayan",
          duration: "90 dk planlı çekim · 2–3 lokasyon",
          features: [
            "4K/6K sinematik drone çekimi",
            "40 profesyonel fotoğraf (seçili kareler)",
            "1–2 dk sinematik video (storytelling kurgu)",
            "Profesyonel montaj + müzik (uygun kullanım)",
            "360° panoramik görüntü seçenekleri",
            "Sosyal medya içerik seti (Reels/Shorts uyumlu)",
          ],
          popular: true,
        },
      ],
    },
    {
      id: "dugun",
      icon: <Heart className="h-16 w-16 text-gold" />,
      category: "Düğün & Nişan",
      description: "Özel gününüzü estetik, güvenli ve sinematik bir dille ölümsüzleştirin.",
      packages: [
        {
          name: "Masallar Paketi",
          price: "₺9.900’den başlayan",
          duration: "2 saat aktif çekim · gün içine stratejik planlama",
          features: [
            "Konsept planlama + çekim akışı (ön görüşme)",
            "Konvoy ve giriş–çıkış anları (seçili sahneler)",
            "50+ profesyonel fotoğraf (seçili kareler)",
            "2–3 dk sinematik film (hikâye kurgusu)",
            "Gün batımı / ışık planına uygun özel sahneler",
            "Premium montaj ve estetik efektler",
            "Gelin–damat portre sahneleri",
            "Özel albüm opsiyonu (isteğe bağlı)",
          ],
          popular: true,
        },
      ],
    },
    {
      id: "emlak",
      icon: <Building2 className="h-16 w-16 text-gold" />,
      category: "Emlak Tanıtımı",
      description: "Gayrimenkulünüzü doğru açı, doğru ışık ve doğru kurgu ile öne çıkarın.",
      packages: [
        {
          name: "Profesyonel Paket",
          price: "₺5.500’den başlayan",
          duration: "45–60 dk planlı çekim · mekan keşfi dahil",
          features: [
            "Bina/site + çevre & konum perspektifleri",
            "Gün / altın saat planlaması (mümkünse)",
            "40+ profesyonel fotoğraf (ilan uyumlu)",
            "1–2 dk tanıtım filmi (ilan + web uyumlu)",
            "360° içerik opsiyonu (projeye göre)",
            "İç/dış mekan akış kurgusu (satış odaklı)",
          ],
          popular: true,
        },
      ],
    },
    {
      id: "kurumsal",
      icon: <Briefcase className="h-16 w-16 text-gold" />,
      category: "Kurumsal Çekimler",
      description: "Markanızı güçlü bir görsel anlatımla, premium bir sunumla konumlandırın.",
      packages: [
        {
          name: "Kurumsal Temel",
          price: "₺3.750’den başlayan",
          duration: "60 dk planlı çekim · tek lokasyon",
          features: [
            "İşyeri/fabrika genel plan çekimleri",
            "Ekip & çalışma alanları (kurumsal dil)",
            "25 düzenlenmiş fotoğraf (seçili kareler)",
            "60 sn tanıtım videosu (web + sosyal uyumlu)",
          ],
        },
        {
          name: "Etkinlik Paketi",
          price: "₺6.900’den başlayan",
          duration: "2 saat aktif çekim · opsiyonel ek süre",
          features: [
            "Etkinlik akışı: giriş–sahne–kalabalık–detay",
            "50+ profesyonel fotoğraf (seçili kareler)",
            "2 dk highlight video (tempo kurgusu)",
            "Sosyal medya içerik seti (Reels/Shorts)",
            "Canlı yayın desteği (opsiyonel)",
            "Etkinlik özel anları (konuşma/performans)",
          ],
          popular: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Fiyat & Paketler
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Paketlerimiz “başlangıç” kapsamını temsil eder. Lokasyon, teslim formatı ve proje ihtiyaçlarına göre
            en doğru teklifi birlikte netleştiriyoruz.
          </p>
        </div>
      </section>

      {/* Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          id={category.id}
          className="scroll-mt-28 border-b border-gold/20 py-20"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-6 flex justify-center">{category.icon}</div>
              <h2 className="mb-4 text-4xl font-bold text-gold">{category.category}</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {category.description}
              </p>
            </div>

            <div
              className={`grid gap-8 ${
                category.packages.length === 1
                  ? "lg:grid-cols-1 max-w-2xl mx-auto"
                  : category.packages.length === 2
                  ? "lg:grid-cols-2 max-w-4xl mx-auto"
                  : "lg:grid-cols-3"
              }`}
            >
              {category.packages.map((pkg, pkgIndex) => (
                <Card
                  key={pkgIndex}
                  className={`relative flex flex-col ${
                    pkg.popular ? "border-gold gold-border-glow" : ""
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background">
                      En Popüler
                    </Badge>
                  )}

                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.duration}</CardDescription>

                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gold">{pkg.price}</span>
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground">
                      *Fiyatlar başlangıç seviyesidir. Lokasyon, izin/rota ve teslim detaylarına göre netleştirilir.
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <div className="p-6 pt-0">
                    <Button
                      className={`w-full ${
                        pkg.popular ? "bg-gold text-background hover:bg-gold-dark" : ""
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() =>
                        openQuote({
                          category: category.category,
                          packageName: pkg.name,
                          priceLabel: pkg.price,
                        })
                      }
                    >
                      Özel Projeniz İçin Teklif Al
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              İletişime geçerek{" "}
              <Link href="/kvkk" className="underline hover:text-gold">
                KVKK Aydınlatma Metni
              </Link>
              ’ni kabul etmiş sayılırsınız.
            </p>
          </div>
        </section>
      ))}

      {/* Special offer */}
      <section className="border-b border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gold">
            Özel Paket mi İstiyorsunuz?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Projenizin hedefi, lokasyonu ve teslim ihtiyacına göre en doğru kapsamı birlikte belirleyelim.
            Size özel net bir teklif hazırlayalım.
          </p>

          <Button
            size="lg"
            className="bg-gold text-background hover:bg-gold-dark"
            onClick={() => openQuote({})}
          >
            Özel Teklif Al
          </Button>

          <p className="mx-auto mt-4 max-w-2xl text-xs text-muted-foreground">
            *Başlangıç fiyatları bilgilendirme amaçlıdır. Net fiyat; lokasyon, çekim izni/rota, içerik kapsamı ve teslim formatına göre belirlenir.
          </p>
        </div>
      </section>

      <QuickQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefill={quotePrefill}
      />

      <Footer />
    </div>
  );
}
