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

const WHATSAPP_NUMBER = "905059467166";

const WHATSAPP_PREFILL = encodeURIComponent(
  `Merhaba, SkyVerce by BC web sitesinden yazıyorum.\n\n` +
  `Teklif almak istiyorum:\n` +
  `1) Hizmet: (Düğün / Emlak / Turizm / Kurumsal)\n` +
  `2) Tarih/Saat: (Belirli / Esnek)\n` +
  `3) Lokasyon: (İlçe / Semt)\n` +
  `4) İstenen çıktı: (Video / Fotoğraf / İkisi)\n` +
  `5) Kısa not:`
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL}`;

export default function Footer() {
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

            <div className="flex gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (şimdilik WhatsApp ile iletişim)"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (şimdilik WhatsApp ile iletişim)"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube (şimdilik WhatsApp ile iletişim)"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Youtube className="h-5 w-5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (şimdilik WhatsApp ile iletişim)"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Linkedin className="h-5 w-5" />
              </a>
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

              {/* Telefon tıklanınca arama */}
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

              {/* Mail tıklanınca mail */}
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

              {/* Ek: WhatsApp hızlı erişim (metinli, kirlilik yapmaz) */}
              <li className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-gold/30 px-3 py-2 text-sm text-gold transition-colors hover:bg-gold/10"
                  aria-label="WhatsApp ile teklif iste"
                >
                  WhatsApp ile Teklif İste
                </a>
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
