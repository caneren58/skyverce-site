"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Briefcase, Play, X } from "lucide-react";

function formatDateTR(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d}.${m}.${y}`;
}

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");
  const [note, setNote] = useState("");

  // Modal açılınca body scroll kilitle
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const previewMessage = useMemo(() => {
    const dateTR = formatDateTR(date);
    return (
      "Merhaba,\n" +
      "SkyVerce by BC’den teklif almak istiyorum.\n\n" +
      `• Hizmet: ${serviceType || "-"}\n` +
      `• Tarih: ${dateTR || "-"}\n` +
      `• Lokasyon: ${location || "-"}\n` +
      `• Kullanım: ${purpose || "-"}\n` +
      (note ? `• Not: ${note}\n` : "") +
      "\nUygunluk ve net fiyat bilgisini paylaşabilir misiniz?"
    );
  }, [serviceType, date, location, purpose, note]);

  const waLink = useMemo(() => {
    const phone = "905059467166";
    return `https://wa.me/${phone}?text=${encodeURIComponent(previewMessage)}`;
  }, [previewMessage]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Hızlı Teklif"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-[92%] max-w-2xl rounded-2xl border border-gold/20 bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-gold/10 px-6 py-4">
          <div>
            <h3 className="text-xl font-semibold text-gold">Hızlı Teklif</h3>
            <p className="text-sm text-muted-foreground">
              15 saniyede bilgileri gir, WhatsApp’a hazır teklif mesajı gitsin.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground hover:text-gold"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 px-6 py-5 md:grid-cols-2">
          {/* Hizmet Türü */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Hizmet Türü</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            >
              <option value="">Seçin</option>
              <option value="Düğün / Nişan">Düğün / Nişan</option>
              <option value="Emlak Tanıtımı">Emlak Tanıtımı</option>
              <option value="Turizm Çekimi">Turizm Çekimi</option>
              <option value="Kurumsal Çekim">Kurumsal Çekim</option>
              <option value="Etkinlik">Etkinlik</option>
            </select>
          </div>

          {/* Tarih */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Tarih</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* Lokasyon */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">Lokasyon</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Örn: Beşiktaş / İstanbul"
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* Kullanım Amacı */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">Kullanım Amacı</label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            >
              <option value="">Seçin</option>
              <option value="Sosyal Medya">Sosyal Medya</option>
              <option value="Reklam / Tanıtım">Reklam / Tanıtım</option>
              <option value="Kişisel Hatıra">Kişisel Hatıra</option>
              <option value="Web Sitesi">Web Sitesi</option>
              <option value="Etkinlik Arşivi">Etkinlik Arşivi</option>
            </select>
          </div>

          {/* Not */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">Not (opsiyonel)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Örn: Gün batımı çekimi, 2 lokasyon, hızlı teslim vb."
              className="min-h-[90px] w-full rounded-md border border-gold/20 bg-card px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* Preview */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm text-muted-foreground">
              WhatsApp’a gidecek mesaj:
            </label>
            <pre className="whitespace-pre-wrap rounded-md border border-gold/10 bg-card p-3 text-xs text-muted-foreground">
              {previewMessage}
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-gold/10 px-6 py-4">
          <Button
            variant="outline"
            className="border-gold/40 text-gold hover:bg-gold/10"
            onClick={onClose}
          >
            Vazgeç
          </Button>

          <Button
            className="bg-gold text-background hover:bg-gold-dark"
            onClick={() => window.open(waLink, "_blank", "noopener,noreferrer")}
          >
            WhatsApp’tan Teklif Al
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function HomeClient() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      {/* PC/TABLET CTA (mobilde gizli) */}
      <div
        className="hidden sm:flex flex-col items-center justify-center gap-4 sm:flex-row pt-4 pb-6"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)" }}
      >
        <Button
          size="lg"
          className="bg-gold text-background hover:bg-gold-dark"
          onClick={() => setQuoteOpen(true)}
          aria-label="WhatsApp’tan teklif al"
        >
          <Camera className="mr-2 h-5 w-5" />
          WhatsApp’tan Teklif Al
        </Button>

        <Link href="/portfoy" aria-label="Portföyümüzü inceleyin">
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10"
          >
            <Play className="mr-2 h-5 w-5" />
            Portföyümüzü İnceleyin
          </Button>
        </Link>
      </div>

      {/* ✅ Mobile Sticky CTA Bar (sadece mobil) */}
      {!quoteOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden">
          <div
            className="border-t border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
            style={{
              paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)",
            }}
          >
            <div className="mx-auto flex max-w-2xl gap-3 px-4 pt-3">
              {/* 1) Hizmetler (mobil) */}
              <Link href="/hizmetler" className="flex-1">
                <Button className="w-full bg-gold text-background hover:bg-gold-dark">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Hizmetler
                </Button>
              </Link>

              {/* 2) Portföy (mobil) */}
              <Link href="/portfoy" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold/10"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Portföy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
