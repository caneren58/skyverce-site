"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "905059467166";

function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}

export type QuickQuotePrefill = {
  category?: string;
  purpose?: string;
  location?: string;
  note?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  prefill?: QuickQuotePrefill;
};

export default function QuickQuoteModal({ open, onClose, prefill }: Props) {
  const [mounted, setMounted] = useState(false);

  const [category, setCategory] = useState(prefill?.category ?? "");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState(prefill?.location ?? "");
  const [purpose, setPurpose] = useState(prefill?.purpose ?? "");
  const [note, setNote] = useState(prefill?.note ?? "");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prefill değişirse senkronla
  useEffect(() => {
    if (!prefill) return;
    if (prefill.category !== undefined) setCategory(prefill.category);
    if (prefill.location !== undefined) setLocation(prefill.location);
    if (prefill.purpose !== undefined) setPurpose(prefill.purpose);
    if (prefill.note !== undefined) setNote(prefill.note);
  }, [prefill]);

  // Modal açılınca body scroll kilidi (iOS/Safari dahil)
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    // (opsiyonel) scrollbar kaymasını azaltmak için
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // iOS: modal dışı touchmove scroll'u tamamen engelle
    const onTouchMove = (e: TouchEvent) => {
      const target = e.target as Node | null;
      const scroller = scrollRef.current;

      // Scrollable alanın içindeyse izin ver
      if (scroller && target && scroller.contains(target)) return;

      // Modal dışı tüm touchmove'ları engelle
      e.preventDefault();
    };

    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", onTouchMove as any);

      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overflow = prev.overflow;
      document.body.style.paddingRight = prev.paddingRight;

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const message = useMemo(() => {
    const dateTR = date
      ? (() => {
          const [y, m, d] = date.split("-");
          return y && m && d ? `${d}.${m}.${y}` : date;
        })()
      : "";

    return (
      "Merhaba,\n" +
      "SkyVerce by BC’den teklif almak istiyorum.\n\n" +
      `• Hizmet: ${category || "-"}\n` +
      `• Tarih: ${dateTR || "-"}\n` +
      `• Lokasyon: ${location || "-"}\n` +
      `• Kullanım: ${purpose || "-"}\n` +
      (note ? `• Not: ${note}\n` : "") +
      "\nUygunluk ve net fiyat bilgisini paylaşabilir misiniz?"
    );
  }, [category, date, location, purpose, note]);

  const canSubmit = useMemo(() => {
    return Boolean(category) && Boolean(location);
  }, [category, location]);

  if (!open || !mounted) return null;

  const modalUI = (
    <div
      className="fixed inset-0 z-[10000] bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Hızlı Teklif"
      // overlay tıkı kapatsın (card dışı)
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-auto flex h-[calc(100dvh-2rem)] max-w-xl items-center justify-center">
        {/* Modal Card */}
        <div className="flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-gold/20 p-5">
            <div>
              <h3 className="text-xl font-semibold text-gold">Hızlı Teklif</h3>
              <p className="mt-1 text-sm text-muted-foreground">
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

          {/* CONTENT (tek scroll alanı) */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 p-5 overflow-y-auto overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Hizmet Türü */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Hizmet Türü</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-md border border-gold/20 bg-background px-3 py-2 text-sm outline-none focus:border-gold"
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
                className="w-full rounded-md border border-gold/20 bg-background px-3 py-2 text-sm outline-none focus:border-gold"
              />
            </div>

            {/* Lokasyon */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Lokasyon</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Örn: Beşiktaş / İstanbul"
                className="w-full rounded-md border border-gold/20 bg-background px-3 py-2 text-sm outline-none focus:border-gold"
              />
            </div>

            {/* Kullanım Amacı */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Kullanım Amacı</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full rounded-md border border-gold/20 bg-background px-3 py-2 text-sm outline-none focus:border-gold"
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
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Not (opsiyonel)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Örn: Gün batımı çekimi, 2 lokasyon, hızlı teslim vb."
                className="min-h-[90px] w-full rounded-md border border-gold/20 bg-background px-3 py-2 text-sm outline-none focus:border-gold"
              />
            </div>

            {/* Preview */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                WhatsApp’a gidecek mesaj:
              </label>
              <pre className="whitespace-pre-wrap rounded-md border border-gold/10 bg-background p-3 text-xs text-muted-foreground">
{message}
              </pre>
            </div>

            {/* iOS safe-area boşluğu (çok kısa ekranlarda footer üstüne binmesin) */}
            <div
              className="h-2"
              style={{ height: "calc(env(safe-area-inset-bottom) + 0.5rem)" }}
            />
          </div>

          {/* FOOTER (sticky) */}
          <div
            className="sticky bottom-0 flex flex-col gap-3 border-t border-gold/20 bg-card p-5 md:flex-row md:justify-end"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
          >
            <Button
              variant="outline"
              className="border-gold/40 text-gold hover:bg-gold/10"
              onClick={onClose}
            >
              Vazgeç
            </Button>

            <a
              href={buildWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
              onClick={(e) => {
                if (!canSubmit) e.preventDefault();
              }}
            >
              <Button
                className="w-full bg-gold text-background hover:bg-gold-dark md:w-auto"
                disabled={!canSubmit}
              >
                WhatsApp’tan Teklif Al
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalUI, document.body);
}
