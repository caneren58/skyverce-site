"use client";

export default function GalataKulesiCevresiGallery() {
  const images = [
    "/images/galata/9.jpg",
    "/images/galata/10.jpg",
    "/images/galata/11.jpg",
    "/images/galata/12.jpg",
    "/images/galata/13.jpg",
    "/images/galata/14.jpg",
    "/images/galata/15.jpg",
    "/images/galata/16.jpg",
    "/images/galata/17.jpg",
    "/images/galata/18.jpg",
    "/images/galata/19.jpg",
    "/images/galata/20.jpg",
    "/images/galata/21.jpg",
    "/images/galata/22.jpg",
    "/images/galata/23.jpg",
    "/images/galata/24.jpg",
    "/images/galata/25.jpg",
    "/images/galata/26.jpg",
    "/images/galata/27.jpg",
    "/images/galata/28.jpg",
    "/images/galata/29.jpg",
    "/images/galata/30.jpg",
    "/images/galata/31.jpg",
    "/images/galata/32.jpg",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Galata Kulesi & Çevresi
      </h1>

      <p className="text-sm md:text-base text-gray-300 mb-8">
        Tarihi Galata bölgesinin havadan çekilmiş profesyonel fotoğrafları.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-white/10 bg-black/40"
          >
            <img
              src={src}
              alt={`Galata fotoğraf ${index + 9}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
