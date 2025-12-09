"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Play, Image as ImageIcon, X } from "lucide-react";
import VideoModal from "@/components/VideoModal";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedPhotos, setSelectedPhotos] = useState<string[] | null>(null);

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
      videoUrl:
        "https://raw.githubusercontent.com/caneren58/drone-videos/main/190885-888554424_small.mp4",
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
      videoUrl:
        "https://raw.githubusercontent.com/caneren58/drone-videos/main/51915-467145012_medium.mp4",
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
      photoUrls: [
        "/images/modern-rezidans/1.jpg",
        "/images/modern-rezidans/2.jpg",
        "/images/modern-rezidans/3.jpg",
        "/images/modern-rezidans/4.jpg",
        "/images/modern-rezidans/5.jpg",
      ],
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
      videoUrl:
        "https://raw.githubusercontent.com/caneren58/drone-videos/main/19187231-uhd_3840_2160_25fps.mp4",
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
      videoUrl:
        "https://raw.githubusercontent.com/caneren58/drone-videos/main/267747_medium.mp4",
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
      videoUrl:
        "https://raw.githubusercontent.com/caneren58/drone-videos/main/215610_tiny.mp4",
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
      videoUrl:
        "https://raw.githubusercontent.com/caneren58/drone-videos/main/Filmim.mp4",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="border-b border-gold/20 bg-card py-20 pt-32 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
          Portföyümüz
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          Profesyonel drone çekimlerimizden örnekleri keşfedin.
        </p>
      </section>

      {/* ⭐ GRID - KARTLAR */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) =>
              item.type === "video" ? (
                // VİDEO → Video modal
                <div
                  key={item.id}
                  onClick={() => setSelectedVideo(item.videoUrl)}
                  className="group relative overflow-hidden rounded-lg border border-gold/20 bg-card transition-transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 backdrop-blur-sm transition-transform group-hover:scale-110">
                        <Play className="ml-1 h-8 w-8 text-background" />
                      </div>
                    </div>

                    {item.duration && (
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-black/70 text-white">
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
              ) : (
                // FOTOĞRAF → Foto galeri modal
                <div
                  key={item.id}
                  onClick={() =>
                    item.photoUrls && setSelectedPhotos(item.photoUrls)
                  }
                  className="group relative overflow-hidden rounded-lg border border-gold/20 bg-card transition-transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

                    <div className="absolute right-4 top-4">
                      <Badge className="bg-gold/90 text-background">
                        <ImageIcon className="mr-1 h-3 w-3" />
                        {item.photos} Fotoğraf
                      </Badge>
                    </div>
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
              )
            )}
          </div>
        </div>
      </section>

      {/* 🎬 VİDEO MODAL */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* 🖼️ FOTO GALERİ MODAL */}
      {selectedPhotos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-[95vw] max-w-5xl overflow-y-auto rounded-xl bg-[#050816] p-4">
            {/* Kapat butonu */}
            <button
              onClick={() => setSelectedPhotos(null)}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 p-1.5 text-white hover:bg-black"
            >
              <X className="h-4 w-4" />
            </button>

            <h2 className="mb-4 text-xl font-semibold text-gold">
              Fotoğraf Galerisi
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {selectedPhotos.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-white/10 bg-black/40"
                >
                  <img
                    src={src}
                    alt={`Fotoğraf ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
