"use client";

import Link from "next/link";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { useQuote } from "@/components/QuoteProvider";

export default function Footer() {
  const { openQuote } = useQuote();

  return (
    <footer className="border-t border-gold/20 bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-gold" />
              <span className="text-xl font-bold text-gold !whitespace-pre-line">
                SkyVerce by BC
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              İstanbul&apos;un profesyonel drone video ve fotoğraf stüdyosu.
              Havadan çekim hizmetlerinde yaratıcı ve güvenilir çözümler sunar.
            </p>

            {/* Sosyal ikonlar şimdilik modal açsın (placeholder). Sonra gerçek link verirsin. */}
            <div className="flex gap-4">
              <button
                onClick={() => openQuote({})}
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-gold"
                type="button"
              >
                <Instagram className="h-5 w-5" />
              </button>

              <button
                onClick={() => openQuote({})}
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-gold"
                type="button"
              >
                <Facebook className="h-5 w-5" />
              </button>

              <button
                onClick={() => openQuote({})}
                aria-label="YouTube"
                className="text-muted-foreground transition-colors hover:text-gold"
                type="button"
              >
                <Youtube className="h-5 w-5" />
              </button>

              <button
                onClick={() => openQuote({})}
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-gold"
                type="button"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hizmetler" className="text-muted-foreground transition-colors hover:text-gold">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/portfoy" className="text-muted-foreground transition-colors hover:text-gold">
                  Portföy
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-muted-foreground transition-colors hover:text-gold">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-muted-foreground transition-colors hover:text-gold">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">Yasal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kvkk" className="text-muted-foreground transition-colors hover:text-gold">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-muted-foreground transition-colors hover:text-gold">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="text-muted-foreground transition-colors hover:text-gold">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>Beşiktaş, İstanbul, Türkiye</span>
              </li>

              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-gold" />
                <a
                  href="tel:+905059467166"
                  className="transition-colors hover:text-gold !whitespace-pre-line"
                  aria-label="Telefonla ara: +90 505 946 71 66"
                >
                  +90 505 946 71 66
                </a>
              </li>

              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-gold" />
                <a
                  href="mailto:skyverce@gmail.com"
                  className="transition-colors hover:text-gold !whitespace-pre-line"
                  aria-label="E-posta gönder: skyverce@gmail.com"
                >
                  skyverce@gmail.com
                </a>
              </li>

              {/* ✅ Footer CTA -> Modal */}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => openQuote({})}
                  className="inline-flex items-center justify-center rounded-md border border-gold/30 px-3 py-2 text-sm text-gold transition-colors hover:bg-gold/10"
                  aria-label="WhatsApp’tan teklif iste"
                >
                  WhatsApp’tan Teklif Al
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SkyVerce by BC. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
