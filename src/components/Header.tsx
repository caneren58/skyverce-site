"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Portföy", href: "/portfoy" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "SSS", href: "/sss" },
  { name: "Güvenlik & Yasal", href: "/guvenlik" }];


  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-8 w-8 text-gold" />
          <span className="text-2xl font-bold text-gold gold-glow !whitespace-pre-line">SkyVerce by BC

          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) =>
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-foreground transition-colors hover:text-gold">

              {item.name}
            </Link>
          )}
          <Link href="/rezervasyon">
            <Button className="bg-gold text-background hover:bg-gold-dark">
              Rezervasyon
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

          {mobileMenuOpen ?
          <X className="h-6 w-6 text-gold" /> :

          <Menu className="h-6 w-6 text-gold" />
          }
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="border-t border-gold/20 bg-card lg:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) =>
          <Link
            key={item.name}
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-gold"
            onClick={() => setMobileMenuOpen(false)}>

                {item.name}
              </Link>
          )}
            <Link href="/rezervasyon" onClick={() => setMobileMenuOpen(false)}>
              <Button className="mt-4 w-full bg-gold text-background hover:bg-gold-dark">
                Rezervasyon
              </Button>
            </Link>
          </div>
        </div>
      }
    </header>);

}