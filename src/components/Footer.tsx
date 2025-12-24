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

const WHATSAPP_NUMBER = "+905059467166";
const EMAIL = "skyverce@gmail.com";

// Şimdilik placeholder: hesapların yoksa linkler WhatsApp'a yönlendirir.
// Sonra gerçek linkleri buraya yazarsın.
const SOCIAL_LINKS = {
  instagram: `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
    "Merhaba! Instagram hesabınızı öğrenebilir miyim?"
  )}`,
  facebook: `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
    "Merhaba! Facebook sayfanızın linkini alabilir miyim?"
  )}`,
  youtube: `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
    "Merhaba! YouTube kanal linkinizi paylaşır mısınız?"
  )}`,
  linkedin: `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
    "Merhaba! LinkedIn profilinizi/sayfanızı paylaşır mısınız?"
  )}`,
};

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-gold" aria-hidden="true" />
              <span className="text-xl font-bold text-gold !whitespace-pre-line">
                SkyVerce by BC
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              İstanbul&apos;un profesyonel drone video ve fotoğraf stüdyosu.
              Havadan çekim hizmetlerinde yaratıcı ve güvenilir çözümler sunar.
            </p>

            <div className="flex gap-4" aria-label="Sosyal medya bağlantıları">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (geçici: WhatsApp üzerinden iste)"
                title="Instagram"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (geçici: WhatsApp üzerinden iste)"
                title="Facebook"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube (geçici: WhatsApp üzerinden iste)"
                title="YouTube"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (geçici: WhatsApp üzerinden iste)"
                title="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hizmetler"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/portfoy"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  Portföy
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/sss"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
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
                <Link
                  href="/kvkk"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link
                  href="/gizlilik-politikasi"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/cerez-politikasi"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
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
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>Beşiktaş, İstanbul, Türkiye</span>
              </li>

              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(
                    "Merhaba! SkyVerce by BC için bilgi almak istiyorum."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!whitespace-pre-line hover:text-gold transition-colors"
                  aria-label="WhatsApp ile iletişime geç"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>

              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="!whitespace-pre-line hover:text-gold transition-colors"
                  aria-label="E-posta gönder"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SkyVerce by BC. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
