import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-16 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-gold gold-glow">
          Çerez Politikası
        </h1>

        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p>
            SkyVerse by BC web sitesinde, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılmaktadır.
          </p>

          <h2>Çerez Nedir?</h2>
          <p>
            Çerezler, web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük veri dosyalarıdır.
          </p>

          <h2>Kullanılan Çerez Türleri</h2>
          <ul>
            <li>Zorunlu çerezler (site işleyişi için)</li>
            <li>Analitik çerezler (istatistik ve performans ölçümü)</li>
          </ul>

          <p>
            Çerezler aracılığıyla kişisel veri toplanmaz ve kimliğiniz doğrudan tespit edilmez.
          </p>

          <p>
            Tarayıcı ayarlarınızı değiştirerek çerezleri engelleyebilir veya silebilirsiniz. Ancak bu durumda
            web sitesinin bazı bölümleri düzgün çalışmayabilir.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
