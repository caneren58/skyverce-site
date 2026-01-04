"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CamlicaNisanGallery() {
  const images = Array.from(
    { length: 35 }, // 33–67 arası = 35 foto
    (_, i) => `/images/camlica-nisan/${33 + i}.jpg`
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-10">
      {/* ✅ Back button */}
      <div className="mb-6">
        <Link
          href="/portfoy"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Portföye Dön
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Çamlıca Tepesi Nişan
      </h1>
      <p className="text-sm md:text-base text-gray-300 mb-8">
        Panoramik İstanbul manzarasıyla çekilmiş profesyonel nişan fotoğrafları.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-white/10 bg-black/40"
          >
            <img
              src={src}
              alt={`Çamlıca fotoğraf ${33 + index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
