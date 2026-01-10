"use client";

import { useQuote } from "@/components/QuoteProvider";
import { Button } from "@/components/ui/button";

export default function CtaButtons() {
  const { openQuote } = useQuote();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button
        className="bg-gold text-background hover:bg-gold-dark"
        onClick={() =>
          openQuote({
            service: "İstanbul Drone Çekimi",
            message: "İstanbul’da drone çekimi için teklif almak istiyorum.",
          })
        }
      >
        Hemen Teklif Al
      </Button>

      <Button
        variant="outline"
        className="border-gold/40 text-gold hover:bg-gold/10"
        onClick={() =>
          openQuote({
            service: "İstanbul Drone Çekimi",
            message: "Drone çekimi fiyat teklifi almak istiyorum.",
          })
        }
      >
        Drone Çekimi Fiyat Teklifi Al
      </Button>
    </div>
  );
}
