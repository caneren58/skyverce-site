// src/app/portfoy/modern-rezidans/page.tsx

const images = [
  "/images/modern-rezidans/1.jpg",
  // ileride 2, 3, 4 eklersen:
  // "/images/modern-rezidans/2.jpg",
  // "/images/modern-rezidans/3.jpg",
];

export default function ModernRezidansGallery() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Modern Rezidans Projesi
      </h1>
      <p className="text-sm md:text-base text-gray-300 mb-8">
        Beşiktaş'ta lüks konut projesi için çekilmiş fotoğraflar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-white/10 bg-black/40"
          >
            <img
              src={src}
              alt={`Modern Rezidans fotoğraf ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
