"use client";

import { useQuote } from "@/components/QuoteProvider";

export default function QuoteFloatingButton() {
  const { openQuote } = useQuote();

  return (
    <button
      type="button"
      onClick={() => openQuote({})}
      aria-label="WhatsApp’tan teklif al"
      className="fixed right-4 bottom-24 md:bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M16.001 2.003c-7.732 0-14 6.268-14 14 0 2.469.646 4.885 1.875 7.016L2 30l7.191-1.875A13.933 13.933 0 0 0 16 30c7.732 0 14-6.268 14-14s-6.268-13.997-13.999-13.997zm0 25.497c-2.23 0-4.424-.587-6.357-1.697l-.455-.26-4.266 1.113 1.139-4.16-.297-.43a11.454 11.454 0 0 1-1.883-6.362c0-6.347 5.165-11.513 11.52-11.513 6.347 0 11.513 5.166 11.513 11.513 0 6.355-5.166 11.52-11.513 11.52z" />
      </svg>
    </button>
  );
}
