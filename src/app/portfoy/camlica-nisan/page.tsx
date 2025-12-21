"use client";

export default function CamlicaNisanGallery() {
  const images = Array.from(
    { length: 35 },               // 33–67 arası = 33 foto
    (_, i) => `/images/camlica-nisan/${33 + i}.jpg`
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Çamlıca Tepesi Nişan</h1>
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
            />
          </div>
        ))}
      </div>
    </main>
  );
}
