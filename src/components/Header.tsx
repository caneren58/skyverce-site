"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuickQuoteModal, { type QuickQuotePrefill } from "@/components/QuickQuoteModal";

// lucide-react sürümüne göre Drone ikonu olmayabilir.
// Varsa otomatik kullan, yoksa Plane ile devam et.
let DroneIcon: any = Plane;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lucide = require("lucide-react");
  if (lucide?.Drone) DroneIcon = lucide.Drone;
} catch {
  // ignore, fallback Plane
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // QuickQuote modal state
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuickQuotePrefill>({});

  function openQuote(prefill: QuickQuotePrefill = {}) {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  }

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Portföy", href: "/portfoy" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "SSS", href: "/sss" },
    { name: "Güvenlik", href: "/guvenlik" },
    { name: "Yasal", href: "/kvkk" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <DroneIcon className="h-7 w-7 text-gold" />
          <span className="text-2xl font-bold text-gold gold-glow !whitespace-pre-line">
            SkyVerce by BC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
            >
              {item.name}
            </Link>
          ))}

          {/* Header CTA -> Modal */}
          <Button
            className="bg-gold text-background hover:bg-gold-dark"
            onClick={() => openQuote({})}
          >
            İletişime Geçin
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gold" />
          ) : (
            <Menu className="h-6 w-6 text-gold" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gold/20 bg-card lg:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA -> Modal */}
            <Button
              className="mt-4 w-full bg-gold text-background hover:bg-gold-dark"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote({});
              }}
            >
              İletişime Geçin
            </Button>
          </div>
        </div>
      )}

      {/* Modal (Header scope) */}
      <QuickQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefill={quotePrefill}
      />
    </header>
  );
}
