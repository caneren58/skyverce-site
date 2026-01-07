import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-16 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-gold gold-glow">
          Gizlilik Politikası
        </h1>

        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p>
            SkyVerse by BC, ziyaretçilerinin gizliliğini korumayı taahhüt eder. Web sitemizi ziyaret ettiğinizde
            veya bizimle iletişime geçtiğinizde paylaştığınız bilgiler gizli tutulur.
          </p>

          <p>
            Toplanan bilgiler yalnızca; hizmet sunumu, iletişim kurulması, talep ve teklif süreçlerinin yürütülmesi amaçlarıyla kullanılır.
          </p>

          <p>
            Kişisel bilgileriniz satılmaz, kiralanmaz ve üçüncü kişilerle paylaşılmaz.
          </p>

          <p>
            Web sitemiz üzerinden başka sitelere yönlendirme yapılması halinde, ilgili sitelerin gizlilik politikalarından
            SkyVerse by BC sorumlu değildir.
          </p>

          <p>
            Gizlilik politikamızda yapılacak güncellemeler bu sayfa üzerinden duyurulur.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
