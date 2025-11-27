"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Play, Image as ImageIcon } from "lucide-react";
import VideoModal from "@/components/VideoModal";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      category: "tourism",
      type: "video",
      title: "Sultanahmet Tarihi Yarımada",
      description: "Ayasofya, Sultanahmet Camii ve Topkapı Sarayı'nın havadan görünümü",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071",
      duration: "2:30",
      videoUrl: https://player.vimeo.com/external/343189292.hd.mp4?s=211f589422e7b8ded7c5176bbd10b191cfd9b8f1&profile_id=175",

    },
    {
      id: 2,
      category: "wedding",
      type: "video",
      title: "Boğaz Kıyısında Düğün",
      description: "Ortaköy'de gerçekleşen romantik düğün töreni",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      duration: "3:15",
      videoUrl: https://player.vimeo.com/external/208566699.hd.mp4?s=b7b2e2c932c0f9e5a0e28c52f4a1517972ed18e8&profile_id=174",

    },
    {
      id: 3,
      category: "realestate",
      type: "photo",
      title: "Modern Rezidans Projesi",
      description: "Beşiktaş'ta lüks konut projesi tanıtımı",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
      photos: 45,
    },
    {
      id: 4,
      category: "tourism",
      type: "video",
      title: "Boğaz Turu",
      description: "İstanbul Boğazı'nın tüm güzelliklerini keşfedin",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070",
      duration: "4:00",
      videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-aerial-view-5731/1080p.mp4",
    },
    {
      id: 5,
      category: "corporate",
      type: "video",
      title: "Teknoloji Şirketi Tanıtımı",
      description: "Maslak'ta modern ofis binası ve çalışma alanları",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      duration: "2:00",
      videoUrl: "https://cdn.coverr.co/videos/coverr-manhattan-buildings-1133/1080p.mp4",
    },
    {
      id: 6,
      category: "wedding",
      type: "photo",
      title: "Çamlıca Tepesi Nişan",
      description: "Panoramik İstanbul manzaralı nişan çekimi",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070",
      photos: 60,
    },
    {
      id: 7,
      category: "realestate",
      type: "video",
      title: "Sahil Villası",
      description: "Marmara kıyısında lüks villa tanıtımı",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      duration: "1:45",
      videoUrl: "https://cdn.coverr.co/videos/coverr-aerial-of-a-coastal-house-3460/1080p.mp4",
    },
    {
      id: 8,
      category: "tourism",
      type: "photo",
      title: "Galata Kulesi & Çevresi",
      description: "Tarihi Galata bölgesinin havadan fotoğrafları",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2080",
      photos: 35,
    },
    {
      id: 9,
      category: "corporate",
      type: "video",
      title: "Festival Etkinliği",
      description: "Harbiye'de gerçekleşen müzik festivali",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
      duration: "3:30",
      videoUrl: "https://cdn.coverr.co/videos/coverr-concert-crowd-during-a-show-4210/1080p.mp4",
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

      {/* ⭐️ GRID - KARTLAR */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                onClick={() => item.type === "video" && setSelectedVideo(item.videoUrl)}
                className="group relative overflow-hidden rounded-lg border border-gold/20 bg-card transition-transform hover:scale-105 cursor-pointer"
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
                        <Play className="ml-1 h-8 w-8 text-background" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute right-4 top-4">
                      <Badge className="bg-gold/90 text-background">
                        <ImageIcon className="mr-1 h-3 w-3" />
                        {item.photos} Fotoğraf
                      </Badge>
                    </div>
                  )}

                  {item.duration && (
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/70 text-white">
                        {item.duration}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold text-gold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐️ MODAL VIDEO PLAYER */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      <Footer />
    </div>
  );
}
