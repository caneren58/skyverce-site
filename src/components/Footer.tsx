"use client";

import Link from "next/link";
import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-gold" />
              <span className="text-xl font-bold text-gold !whitespace-pre-line">SkyVerce by BC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              İstanbul'un en profesyonel drone video ve fotoğraf stüdyosu. 
              Havadan çekim hizmetlerinde uzman ekibimizle yanınızdayız.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
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
              <li>
                <Link href="/guvenlik" className="text-muted-foreground transition-colors hover:text-gold">
                  Güvenlik & Yasal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">Hizmetler</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Turizm Çekimleri</li>
              <li className="text-muted-foreground">Düğün & Nişan</li>
              <li className="text-muted-foreground">Emlak Tanıtımı</li>
              <li className="text-muted-foreground">Kurumsal Çekimler</li>
              <li className="text-muted-foreground">Boğaz Turu</li>
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
                <span className="!whitespace-pre-line">+90 505 946 71 66</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-gold" />
                <span className="!whitespace-pre-line">info@skyvercebybc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SkyView Istanbul. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>);

}