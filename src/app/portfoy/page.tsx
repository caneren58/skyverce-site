"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "Tümü" },
    { id: "tourism", name: "Turizm" },
    { id: "wedding", name: "Düğün" },
    { id: "realestate", name: "Emlak" },
    { id: "corporate", name: "Kurumsal" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "tourism",
      type: "video",
      title: "Sultanahmet Tarihi Yarımada",
      description:
        "Ayasofya, Sultanahmet Camii ve Topkapı Sarayı'nın havadan görünümü",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071",
      duration: "2:30",
      video:
        "https://cdn.pixabay.com/video/2021/05/11/74569-544944089_large.mp4",
    },
    {
      id: 2,
      category: "wedding",
      type: "video",
      title: "Boğaz Kıyısında Düğün",
      description: "Ortaköy'de gerçekleşen romantik düğün töreni",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      duration: "3:15",
      video:
        "https://cdn.pixabay.com/video/2020/05/20/40372-424923260_large.mp4",
    },
    {
      id: 3,
      category: "realestate",
      type: "photo",
      title: "Modern Rezidans Projesi",
      description: "Beşiktaş'ta lüks konut projesi tanıtımı",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
      photos: 45,
    },
    {
      id: 4,
      category: "tourism",
      type: "video",
      title: "Boğaz Turu",
      description: "İstanbul Boğazı'nın tüm güzelliklerini keşfedin",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070",
      duration: "4:00",
      video:
        "https://cdn.pixabay.com/video/2019/08/27/27089-359700931_large.mp4",
    },
    {
      id: 5,
      category: "corporate",
      type: "video",
      title: "Teknoloji Şirketi Tanıtımı",
      description: "Maslak'ta modern ofis binası ve çalışma alanları",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      duration: "2:00",
      video:
        "https://cdn.pixabay.com/video/2023/08/24/176295-861289568_large.mp4",
    },
    {
      id: 6,
      category: "wedding",
      type: "photo",
      title: "Çamlıca Tepesi Nişan",
      description: "Panoramik İstanbul manzaralı nişan çekimi",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070",
      photos: 60,
    },
    {
      id: 7,
      category: "realestate",
      type: "video",
      title: "Sahil Villası",
      description: "Marmara kıyısında lüks villa tanıtımı",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      duration: "1:45",
      video:
        "https://cdn.pixabay.com/video/2019/05/30/23623-340557706_large.mp4",
    },
    {
      id: 8,
      category: "tourism",
      type: "photo",
      title: "Galata Kulesi & Çevresi",
      description: "Tarihi Galata bölgesinin havadan fotoğrafları",
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2080",
      photos: 35,
    },
    {
      id: 9,
      category: "corporate",
      type: "video",
      title: "Festival Etkinliği",
      description: "Harbiye'de gerçekleşen müzik festivali",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
      duration: "3:30",
      video:
        "https://cdn.pixabay.com/video/2020/09/17/50422-461223642_large.mp4",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen">
      <Header />

      {/* ÜST BAŞLIK */}
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Portföyümüz
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            İstanbul'un dört bir yanında gerçekleştirdiğimiz profesyonel drone
            çekimlerinden örnekleri keşfedin.
          </p>
        </div>
      </section>

      {/* FİLTRELER */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                variant={filter === cat.id ? "default" : "outline"}
                className={
                  filter === cat.id
                    ? "bg-gold text-background hover:bg-gold-dark"
                    : ""
                }
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* KARTLAR */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg border border-gold/20 bg-card transition-transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  if (item.type === "video" && item.video) {
                    setOpenVideo(item.video);
                  }
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

                  {item.type === "video" ? (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 backdrop-blur-sm transition-transform group-hover:scale-110">
                        <Play
                          className="ml-1 h-8 w-8 text-background"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute right-4 top-4">
                      <Badge className="bg-gold/90 text-background backdrop-blur-sm">
                        <ImageIcon className="mr-1 h-3 w-3" />
                        {item.photos} Fotoğraf
                      </Badge>
                    </div>
                  )}

                  {item.duration && (
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-background/80 text-foreground backdrop-blur-sm">
                        {item.duration}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-gold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl text-muted-foreground">
                Bu kategoride henüz içerik bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gold">
            Siz de Portföyümüze Katılın
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Projenizi havadan çekerek unutulmaz görüntüler elde edin.
          </p>
          <Link href="/rezervasyon">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold-dark"
            >
              Rezervasyon Yapın
            </Button>
          </Link>
        </div>
      </section>

      <Footer />

      {/* MODAL BURADA */}
      <VideoModal
        open={!!openVideo}
        videoUrl={openVideo ?? ""}
        onClose={() => setOpenVideo(null)}
      />
    </div>
  );
}
