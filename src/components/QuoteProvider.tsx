"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import QuickQuoteModal, { type QuickQuotePrefill } from "@/components/QuickQuoteModal";

type QuoteContextType = {
  openQuote: (prefill?: QuickQuotePrefill) => void;
  closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextType | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}

export default function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<QuickQuotePrefill>({});

  const openQuote = (p: QuickQuotePrefill = {}) => {
    setPrefill(p);
    setOpen(true);
  };

  const closeQuote = () => setOpen(false);

  const value = useMemo(() => ({ openQuote, closeQuote }), []);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuickQuoteModal open={open} onClose={closeQuote} prefill={prefill} />
    </QuoteContext.Provider>
  );
}
