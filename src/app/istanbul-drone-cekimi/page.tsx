import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "İstanbul Drone Çekimi | Profesyonel Drone Video & Fotoğraf Hizmeti",
  description:
    "İstanbul’da profesyonel drone çekimi hizmeti. Düğün, emlak, turizm ve kurumsal çekimler için lisanslı pilot ve sinematik videolar.",
};

export default function IstanbulDroneCekimiPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1>İstanbul Profesyonel Drone Çekimi Hizmeti</h1>

      <h2>Neden İstanbul’da Drone Çekimi İçin Bizi Tercih Etmelisiniz?</h2>
      <p>
        İstanbul Boğazı, düğün organizasyonları, emlak projeleri ve kurumsal
        tanıtımlar için lisanslı pilotlarla profesyonel drone çekimi hizmeti
        sunuyoruz.
      </p>

      <h2>İstanbul’da Sunduğumuz Drone Çekim Hizmetleri</h2>
      <ul>
        <li>Düğün drone çekimi</li>
        <li>Emlak ve rezidans drone çekimleri</li>
        <li>Otel ve turizm tanıtım videoları</li>
        <li>Kurumsal firma tanıtım çekimleri</li>
      </ul>

      <h2>İstanbul’un Her Bölgesinde Drone Çekimi</h2>
      <p>
        Boğaz, Beşiktaş, Sarıyer, Kadıköy, Galata ve Tarihi Yarımada dahil olmak
        üzere İstanbul’un her bölgesinde drone çekimi yapıyoruz.
      </p>

      <h2>Drone Çekimi Fiyat Teklifi Alın</h2>
      <p>
        İstanbul drone çekimi fiyatları ve detaylı bilgi için bizimle hemen
        iletişime geçin.
      </p>
    </main>
  );
}
