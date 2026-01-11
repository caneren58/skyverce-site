import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Drone Çekimi | SkyVerse by BC",
  description:
    "İstanbul’da profesyonel drone çekimi: düğün, emlak/rezidans, otel-turizm ve kurumsal tanıtımlar. 4K/60fps, hızlı teslim ve teklif.",
  alternates: {
    canonical: "/istanbul-drone-cekimi",
  },
  openGraph: {
    title: "İstanbul Drone Çekimi | SkyVerse by BC",
    description:
      "İstanbul’da profesyonel drone çekimi: düğün, emlak/rezidans, otel-turizm ve kurumsal tanıtımlar.",
    url: "/istanbul-drone-cekimi",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
