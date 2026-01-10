import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Çekim Portföyü | İstanbul Profesyonel Drone Video & Fotoğraf",
  description:
    "İstanbul’da düğün, turizm, emlak ve kurumsal drone çekimlerinden seçilmiş profesyonel portföyümüzü inceleyin.",
  alternates: {
    canonical: "/portfoy",
  },
  openGraph: {
    title: "Drone Çekim Portföyü | Skyverse Studio",
    description:
      "İstanbul’da düğün, turizm, emlak ve kurumsal drone çekimlerinden seçilmiş portföy.",
    url: "/portfoy",
    type: "website",
  },
};

export default function PortfoyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
