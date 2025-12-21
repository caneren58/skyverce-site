"use client";

const steps = [
  {
    title: "İletişim",
    desc: "Bize ulaşın ve projenizi anlatın.",
  },
  {
    title: "Planlama",
    desc: "Çekim planını birlikte oluşturalım.",
  },
  {
    title: "Çekim",
    desc: "Profesyonel ekibimizle çekim yapıyoruz.",
  },
  {
    title: "Montaj",
    desc: "Görüntüleri düzenleyip size sunuyoruz.",
  },
  {
    title: "Teslimat",
    desc: "Final dosyalarınızı teslim ediyoruz.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-[#050816] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative border-l border-[#d4af37]/40 pl-8 md:pl-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative mb-10 md:mb-16"
            >
              {/* Numara dairesi */}
              <div className="absolute -left-5 md:-left-7 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#050816] text-[#d4af37] text-base font-semibold">
                {index + 1}
              </div>

              {/* Başlık + açıklama */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#d4af37]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-md text-sm md:text-base text-gray-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
