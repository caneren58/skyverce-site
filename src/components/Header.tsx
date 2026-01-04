"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/components/QuoteProvider";

function DroneIcon({ className = "h-7 w-7 text-gold" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* body */}
      <rect x="9" y="10" width="6" height="6" rx="2" />
      <path d="M9 13h6" />
      <path d="M10 15h4" />
      {/* arms */}
      <path d="M9 11L5 9" />
      <path d="M15 11l4-2" />
      <path d="M9 15l-4 2" />
      <path d="M15 15l4 2" />
      {/* props */}
      <circle cx="4.5" cy="9" r="1.5" />
      <circle cx="19.5" cy="9" r="1.5" />
      <circle cx="4.5" cy="17" r="1.5" />
      <circle cx="19.5" cy="17" r="1.5" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuote } = useQuote();

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
          {/* ✅ Plane yerine Drone */}
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

          {/* ✅ İletişim butonu modala bağlı (doğru) */}
          <Button
            className="bg-gold text-background hover:bg-gold-dark"
            onClick={() => openQuote({ source: "header" })}
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

            <Button
              className="mt-4 w-full bg-gold text-background hover:bg-gold-dark"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote({ source: "header" });
              }}
            >
              İletişime Geçin
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
