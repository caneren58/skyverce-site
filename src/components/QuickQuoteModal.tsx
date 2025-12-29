"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "905059467166";

function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}

export type QuickQuotePrefill = {
  category?: string;
  packageName?: string;
  priceLabel?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  prefill?: QuickQuotePrefill;
};

export default function QuickQuoteModal({ open, onClose, prefill }: Props) {
  const [serviceType, setServiceType] = useState(prefill?.category || "");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [usage, setUsage] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!open) return;
    setServiceType(prefill?.category || "");
    setDate("");
    setLocation("");
    setUsage("");
    setNote("");
  }, [open, prefill?.category]);

  const title = useMemo(() => {
    const p = prefill?.packageName ? ` · ${prefill.packageName}` : "";
    return prefill?.category ? `${prefill.category}${p}` : "Hızlı Teklif";
  }, [prefill?.category, prefill?.packageName]);

  const priceLine = prefill?.priceLabel ? `• Başlangıç Fiyatı: ${prefill.priceLabel}` : "";

  const canSubmit =
    (serviceType || prefill?.category) &&
    date.trim().length > 0 &&
    location.trim().length > 0 &&
    usage.trim().length > 0;

  const message = useMemo(() => {
    const lines = [
      "Merhaba,",
      "",
      "SkyVerse by BC’den teklif almak istiyorum.",
      "",
      `• Hizmet: ${serviceType || prefill?.category || "-"}`,
      prefill?.packageName ? `• Paket: ${prefill.packageName}` : "",
      priceLine,
      `• Tarih: ${date || "-"}`,
      `• Lokasyon: ${location || "-"}`,
      `• Kullanım: ${usage || "-"}`,
      note.trim() ? `• Not: ${note.trim()}` : "",
      "",
      "Uygunluk ve net fiyat bilgisini paylaşabilir misiniz?",
    ].filter(Boolean);

    return lines.join("\n");
  }, [serviceType, prefill?.category, prefill?.packageName, priceLine, date, location, usage, note]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
      onMouseDown={(e) => {
        // dışarı tıklayınca kapat
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-xl rounded-2xl border border-gold/20 bg-card shadow-2xl">
        <div className="flex items-start justify-between border-b border-gold/20 p-5">
          <div>
            <h3 className="text-xl font-semibold text-gold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              15 saniyede bilgileri gir, WhatsApp’a hazır teklif mesajı gitsin.
            </p>
          </div>
          <button
            className="rounded-md p-2 text-muted-foreground hover:text-gold"
            onClick={onClose}
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Hizmet Türü</label>
              <select
                className="h-11 w-full rounded-md border border-gold/20 bg-background px-3 text-sm outline-none focus:border-gold"
                value={serviceType || prefill?.category || ""}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="" disabled>
                  Seçin
                </option>
                <option value="Turizm Çekimleri">Turizm Çekimleri</option>
                <option value="Düğün & Nişan">Düğün & Nişan</option>
                <option value="Emlak Tanıtımı">Emlak Tanıtımı</option>
                <option value="Kurumsal Çekimler">Kurumsal Çekimler</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Tarih</label>
              <input
                type="date"
                className="h-11 w-full rounded-md border border-gold/20 bg-background px-3 text-sm outline-none focus:border-gold"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Lokasyon</label>
            <input
              placeholder="Örn: Beşiktaş / İstanbul"
              className="h-11 w-full rounded-md border border-gold/20 bg-background px-3 text-sm outline-none focus:border-gold"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Kullanım Amacı</label>
            <select
              className="h-11 w-full rounded-md border border-gold/20 bg-background px-3 text-sm outline-none focus:border-gold"
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
            >
              <option value="" disabled>
                Seçin
              </option>
              <option value="Sosyal Medya (Reels/Shorts)">Sosyal Medya (Reels/Shorts)</option>
              <option value="Web Sitesi">Web Sitesi</option>
              <option value="Emlak İlanı">Emlak İlanı</option>
              <option value="Reklam / Tanıtım">Reklam / Tanıtım</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Not (opsiyonel)</label>
            <textarea
              placeholder="Örn: Gün batımı çekimi, 2 lokasyon, hızlı teslim vb."
              className="min-h-[90px] w-full rounded-md border border-gold/20 bg-background px-3 py-2 text-sm outline-none focus:border-gold"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="rounded-xl border border-gold/20 bg-background/40 p-3 text-xs text-muted-foreground">
            <div className="font-medium text-foreground/90">WhatsApp’a gidecek mesaj:</div>
            <pre className="mt-2 whitespace-pre-wrap">{message}</pre>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gold/20 p-5 md:flex-row md:justify-end">
          <Button variant="outline" onClick={onClose}>
            Vazgeç
          </Button>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              // sadece gönderimden sonra kapat
              setTimeout(onClose, 150);
            }}
          >
            <Button className="w-full bg-gold text-background hover:bg-gold-dark md:w-auto" disabled={!canSubmit}>
              WhatsApp’tan Teklif Al
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
