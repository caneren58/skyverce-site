"use client";

export default function GalataKulesiCevresiGallery() {
  const images = [
    "/images/galata-kulesi-cevresi/9.jpg",
    "/images/galata-kulesi-cevresi/10.jpg",
    "/images/galata-kulesi-cevresi/11.jpg",
    "/images/galata-kulesi-cevresi/12.jpg",
    "/images/galata-kulesi-cevresi/13.jpg",
    "/images/galata-kulesi-cevresi/14.jpg",
    "/images/galata-kulesi-cevresi/15.jpg",
    "/images/galata-kulesi-cevresi/16.jpg",
    "/images/galata-kulesi-cevresi/17.jpg",
    "/images/galata-kulesi-cevresi/18.jpg",
    "/images/galata-kulesi-cevresi/19.jpg",
    "/images/galata-kulesi-cevresi/20.jpg",
    "/images/galata-kulesi-cevresi/21.jpg",
    "/images/galata-kulesi-cevresi/22.jpg",
    "/images/galata-kulesi-cevresi/23.jpg",
    "/images/galata-kulesi-cevresi/24.jpg",
    "/images/galata-kulesi-cevresi/25.jpg",
    "/images/galata-kulesi-cevresi/26.jpg",
    "/images/galata-kulesi-cevresi/27.jpg",
    "/images/galata-kulesi-cevresi/28.jpg",
    "/images/galata-kulesi-cevresi/29.jpg",
    "/images/galata-kulesi-cevresi/30.jpg",
    "/images/galata-kulesi-cevresi/31.jpg",
    "/images/galata-kulesi-cevresi/32.jpg",
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
