import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KvkkPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-16 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-gold gold-glow">
          KVKK Aydınlatma Metni
        </h1>

        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p>
            SkyVerse by BC (“Veri Sorumlusu”) olarak, 6698 sayılı Kişisel Verilerin
            Korunması Kanunu (“KVKK”) kapsamında, kişisel verilerinizin güvenliğine önem veriyoruz.
          </p>

          <p>
            Bu aydınlatma metni; web sitemiz, WhatsApp hattımız ve e-posta iletişim kanallarımız
            üzerinden tarafımıza ilettiğiniz kişisel verilerin hangi amaçlarla işlendiğini açıklamak amacıyla hazırlanmıştır.
          </p>

          <h2>İşlenen Kişisel Veriler</h2>
          <p>
            Tarafınızdan paylaşılan ad-soyad, telefon numarası, e-posta adresi, mesaj içeriği ve talep bilgileri işlenebilmektedir.
          </p>

          <h2>Kişisel Verilerin İşlenme Amaçları</h2>
          <ul>
            <li>İletişim taleplerinin yanıtlanması</li>
            <li>Hizmetler hakkında bilgi verilmesi</li>
            <li>Teklif süreçlerinin yürütülmesi</li>
            <li>Müşteri memnuniyeti ve hizmet kalitesinin artırılması</li>
          </ul>

          <h2>Veri Toplama Yöntemi ve Hukuki Sebep</h2>
          <p>
            Kişisel verileriniz; web sitemiz, WhatsApp hattımız (+90 505 946 71 66) ve e-posta (info@skyverse.studio)
            aracılığıyla, KVKK’nın 5/2 maddesi uyarınca “bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması”
            ve “meşru menfaat” hukuki sebeplerine dayanarak işlenmektedir.
          </p>

          <h2>Verilerin Aktarılması</h2>
          <p>Kişisel verileriniz üçüncü kişilerle paylaşılmaz, yurt dışına aktarılmaz.</p>

          <h2>Haklarınız</h2>
          <p>
            KVKK’nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
            eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.
          </p>

          <p>
            Taleplerinizi <strong>info@skyverse.studio</strong> adresine yazılı olarak iletebilirsiniz.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
