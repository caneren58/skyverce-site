"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function QuickQuoteModal({
  open,
  onClose,
  phoneE164 = "905059467166",
  brand = "SkyVerce by BC",
}: {
  open: boolean;
  onClose: () => void;
  phoneE164?: string; // başında + olmadan: 905...
  brand?: string;
}) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [usage, setUsage] = useState("");
  const [note, setNote] = useState("");

  const message = useMemo(() => {
    const lines = [
      `Merhaba, ${brand} web sitesinden yazıyorum.`,
      ``,
      `Teklif almak istiyorum:`,
      `1) Hizmet: ${service || "(Düğün / Emlak / Turizm / Kurumsal)"}`,
      `2) Tarih/Saat: ${date || "(Belirli / Esnek)"}`,
      `3) Lokasyon: ${location || "(İlçe / Semt)"}`,
      `4) Kullanım: ${usage || "(Sosyal Medya / Web / Reklam / Arşiv)"}`,
      `5) Kısa not: ${note || "-"}`,
    ];
    return lines.join("\n");
  }, [brand, service, date, location, usage, note]);

  const goWhatsApp = () => {
    const url = `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* overlay */}
      <button
        aria-label="Kapat"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* modal */}
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl border border-gold/20 bg-[#0b1224] shadow-2xl">
          <div className="flex items-start justify-between gap-4 border-b border-gold/15 px-6 py-4">
            <div>
              <div className="text-lg font-semibold text-gold">Hızlı Teklif</div>
              <div className="text-sm text-muted-foreground">
                15 saniyede bilgileri girin, WhatsApp’a hazır teklif mesajı gitsin.
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-white/5"
            >
              ✕
            </button>
          </div>

          {/* scroll area */}
          <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-foreground/90">Hizmet Türü</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-gold/20 bg-black/30 px-3 py-2 text-sm outline-none focus:border-gold/50"
                >
                  <option value="">Seçin</option>
                  <option value="Düğün">Düğün</option>
                  <option value="Emlak">Emlak</option>
                  <option value="Turizm">Turizm</option>
                  <option value="Kurumsal">Kurumsal</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/90">Tarih</label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Örn: 12.01.2026 / 18:00 (veya Esnek)"
                  className="w-full rounded-xl border border-gold/20 bg-black/30 px-3 py-2 text-sm outline-none focus:border-gold/50"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm text-foreground/90">Lokasyon</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Örn: Beşiktaş / İstanbul"
                  className="w-full rounded-xl border border-gold/20 bg-black/30 px-3 py-2 text-sm outline-none focus:border-gold/50"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm text-foreground/90">Kullanım Amacı</label>
                <select
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  className="w-full rounded-xl border border-gold/20 bg-black/30 px-3 py-2 text-sm outline-none focus:border-gold/50"
                >
                  <option value="">Seçin</option>
                  <option value="Sosyal Medya">Sosyal Medya</option>
                  <option value="Web Sitesi">Web Sitesi</option>
                  <option value="Reklam / Kampanya">Reklam / Kampanya</option>
                  <option value="Arşiv">Arşiv</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm text-foreground/90">Not (opsiyonel)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Örn: Gün batımı çekimi, 2 lokasyon, hızlı teslim vb."
                  className="min-h-[96px] w-full rounded-xl border border-gold/20 bg-black/30 px-3 py-2 text-sm outline-none focus:border-gold/50"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm text-foreground/90">WhatsApp’a gidecek mesaj</label>
                <pre className="whitespace-pre-wrap rounded-xl border border-gold/15 bg-black/25 p-4 text-xs text-foreground/90">
{message}
                </pre>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-gold/15 px-6 py-4">
            <Button
              variant="outline"
              className="border-gold/25 bg-transparent text-foreground hover:bg-white/5"
              onClick={onClose}
            >
              Vazgeç
            </Button>
            <Button className="bg-gold text-background hover:bg-gold-dark" onClick={goWhatsApp}>
              WhatsApp’tan Teklif Al
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [qqOpen, setQqOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* HERO (senin mevcut hero yapın neyse onu bozmayacağım; sadece CTA'yı modala bağladım) */}
      <section className="relative">
        {/* ... hero background / overlay vs. sende zaten var ... */}

        <div className="container mx-auto px-4 py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gold gold-glow md:text-6xl">
              İstanbul’da Profesyonel Drone Çekimi
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Düğün, emlak, turizm ve kurumsal projeler için premium drone video & fotoğraf.
              WhatsApp’tan yazın, size en doğru paketi yönlendireyim.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* ESKİ: wa.me linkiydi. YENİ: modal */}
              <Button
                className="bg-gold text-background hover:bg-gold-dark"
                onClick={() => setQqOpen(true)}
              >
                WhatsApp’tan Teklif Al
              </Button>

              <Link href="/portfoy">
                <Button
                  variant="outline"
                  className="border-gold/25 bg-transparent text-foreground hover:bg-white/5"
                >
                  Portföyü İncele
                </Button>
              </Link>
            </div>

            <div className="mt-6 text-sm text-foreground/60">
              Ortalama dönüş süresi: <span className="text-foreground/80">5–15 dakika</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sayfanın devamı sende neyse kalsın... */}

      <QuickQuoteModal open={qqOpen} onClose={() => setQqOpen(false)} />
    </main>
  );
}
