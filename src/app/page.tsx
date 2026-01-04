"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Camera,
  Building2,
  Heart,
  Landmark,
  Briefcase,
  Clock,
  Shield,
  Award,
  Play,
  X,
} from "lucide-react";

/* ---------------- helpers ---------------- */

function formatDateTR(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}.${m}.${y}` : iso;
}

/* ---------------- Modal ---------------- */

function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const previewMessage = useMemo(() => {
    return (
      "Merhaba,\n" +
      "SkyVerce by BC’den teklif almak istiyorum.\n\n" +
      `• Hizmet: ${serviceType || "-"}\n` +
      `• Tarih: ${formatDateTR(date) || "-"}\n` +
      `• Lokasyon: ${location || "-"}\n` +
      `• Kullanım: ${purpose || "-"}\n` +
      (note ? `• Not: ${note}\n` : "") +
      "\nUygunluk ve net fiyat bilgisini paylaşabilir misiniz?"
    );
  }, [serviceType, date, location, purpose, note]);

  const waLink = `https://wa.me/905059467166?text=${encodeURIComponent(
    previewMessage
  )}`;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/70 p-4">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-2xl max-h-[calc(100dvh-2rem)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gold/20 p-5">
          <div>
            <h3 className="text-xl font-semibold text-gold">Hızlı Teklif</h3>
            <p className="text-sm text-muted-foreground">
              WhatsApp’a hazır mesaj oluşturulur
            </p>
          </div>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gold" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-5 overflow-y-auto max-h-[calc(100dvh-240px)]">
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full rounded-md border border-gold/20 bg-background px-3 py-2"
          >
            <option value="">Hizmet Türü</option>
            <option>Düğün / Nişan</option>
            <option>Emlak Tanıtımı</option>
            <option>Turizm Çekimi</option>
            <option>Kurumsal Çekim</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border border-gold/20 bg-background px-3 py-2"
          />

          <input
            placeholder="Lokasyon"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-md border border-gold/20 bg-background px-3 py-2"
          />

          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full rounded-md border border-gold/20 bg-background px-3 py-2"
          >
            <option value="">Kullanım Amacı</option>
            <option>Sosyal Medya</option>
            <option>Reklam / Tanıtım</option>
            <option>Web Sitesi</option>
          </select>

          <textarea
            placeholder="Not (opsiyonel)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[90px] w-full rounded-md border border-gold/20 bg-background px-3 py-2"
          />

          <pre className="rounded-md border border-gold/10 bg-background p-3 text-xs whitespace-pre-wrap">
            {previewMessage}
          </pre>
        </div>

        {/* Footer */}
        <div
          className="sticky bottom-0 border-t border-gold/20 bg-card p-5"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
        >
          <Button
            className="w-full bg-gold text-background hover:bg-gold-dark"
            onClick={() => window.open(waLink, "_blank")}
          >
            WhatsApp’tan Teklif Al
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO – DÜZELTİLDİ */}
      <section className="relative flex min-h-[100dvh] items-start justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2070"
            alt="Drone çekimi"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center space-y-6">
          <h1 className="text-4xl font-bold text-gold sm:text-5xl md:text-6xl lg:text-7xl">
            İstanbul’da Profesyonel Drone Çekimi
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            WhatsApp’tan yazın, size en doğru paketi ben yönlendireyim.
          </p>

          <div
            className="flex flex-col items-center gap-4 sm:flex-row justify-center pt-4"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)" }}
          >
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold-dark"
              onClick={() => setQuoteOpen(true)}
            >
              <Camera className="mr-2 h-5 w-5" />
              WhatsApp’tan Teklif Al
            </Button>

            <Link href="/portfoy">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Portföyü İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
