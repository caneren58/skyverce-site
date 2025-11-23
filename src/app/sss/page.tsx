"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Genel Sorular",
      questions: [
        {
          question: "Drone çekimi yasal mı?",
          answer: "Evet, tamamen yasal. SkyView Istanbul olarak tüm gerekli SHGM (Sivil Havacılık Genel Müdürlüğü) izinlerine sahibiz. Pilotlarımız lisanslıdır ve her çekim için gerekli uçuş izinlerini alıyoruz. Ayrıca 5 milyon TL'ye kadar sorumluluk sigortamız bulunmaktadır.",
        },
        {
          question: "Çekim için hava durumu önemli mi?",
          answer: "Evet, çok önemli. Güvenli ve kaliteli çekim yapabilmek için rüzgar hızının 10 m/s'nin altında olması, yağmur, sis veya yoğun bulutluluk olmaması gerekir. Hava durumu uygun değilse, müşterimizle birlikte alternatif bir tarih belirleriz. Hava durumu takibi ve yedek tarih planlaması hizmetimize dahildir.",
        },
        {
          question: "İstanbul'un hangi bölgelerinde çekim yapabilirsiniz?",
          answer: "İstanbul'un hemen her bölgesinde çekim yapabiliyoruz. Ancak havalimanları yakını, askeri bölgeler ve bazı hassas noktalarda özel izinler gerekebilir. Çekim yapmak istediğiniz lokasyonu bize bildirin, izin durumunu hızlıca kontrol edip size bilgi verelim. Boğaz, tarihi yarımada, Çamlıca gibi popüler lokasyonlarda düzenli olarak çalışıyoruz.",
        },
        {
          question: "Çekim ne kadar sürer?",
          answer: "Proje tipine göre değişir. Basit bir emlak çekimi 1-2 saat sürerken, büyük bir etkinlik ya da düğün çekimi 4-8 saat sürebilir. Detaylı paketlerimizde çekim süreleri belirtilmiştir. İhtiyacınıza göre esnek çözümler de sunabiliriz.",
        },
      ],
    },
    {
      category: "Fiyatlandırma & Ödeme",
      questions: [
        {
          question: "Fiyatlar neleri kapsıyor?",
          answer: "Paket fiyatlarımız; çekim, profesyonel düzenleme, renk düzeltme, müzik ekleme, belirtilen sayıda fotoğraf/video teslimatını kapsar. Ek olarak uçuş izinleri, sigorta ve ekipman maliyetleri de dahildir. Ekstra revizyon, acil teslimat gibi özel talepler için ek ücret alınır.",
        },
        {
          question: "Ödeme nasıl yapılır?",
          answer: "Rezervasyon sırasında %30 kapora alınır. Kalan tutar çekim gününden önce veya çekim günü tamamlanır. Havale/EFT, kredi kartı ve nakit ödeme kabul edilir. Kurumsal müşteriler için fatura ve sözleşme düzenlenir.",
        },
        {
          question: "İptal durumunda ne olur?",
          answer: "Çekim tarihinden 7 gün öncesine kadar yapılan iptallerde kapora iadesi yapılır. Son 7 gün içindeki iptallerde kapora iade edilmez ancak yeni bir tarih planlanabilir. Hava şartları nedeniyle iptal durumunda tüm ücret iade edilir veya yeni tarih belirlenir.",
        },
        {
          question: "Özel paket oluşturabilir miyim?",
          answer: "Kesinlikle! Web sitemizdeki paketler standart çözümlerimizdir. İhtiyacınıza özel, bütçenize uygun paketler oluşturabiliriz. Bize iletişim formundan veya WhatsApp'tan ulaşın, size özel teklif hazırlayalım.",
        },
      ],
    },
    {
      category: "Çekim Süreci",
      questions: [
        {
          question: "Çekim öncesi ne yapmam gerekir?",
          answer: "Rezervasyon yaptıktan sonra ekibimiz sizinle iletişime geçer ve çekim detaylarını planlar. Lokasyon, saat, istekleriniz gibi konuları görüşürüz. Çekim günü belirtilen saatte hazır olmanız yeterli. Gerekli tüm izinleri biz alırız.",
        },
        {
          question: "Çekim sırasında ne olur?",
          answer: "Profesyonel ekibimiz lokasyona gelir, ekipmanı kurar ve güvenlik kontrolleri yapar. Drone uçuşu sırasında istediğiniz açıları ve kareleri yakalarız. Çekim sırasında görüş ve önerilerinizi alabiliriz. Tüm süreç profesyonel ve güvenli şekilde yürütülür.",
        },
        {
          question: "Teslimat ne kadar sürer?",
          answer: "Standart teslimat süresi 7-10 iş günüdür. Acil teslimat hizmeti ile 2-3 iş günü içinde teslimat yapılabilir (ek ücret karşılığı). Ham görüntüler istenirse çekim sonrası 24 saat içinde paylaşılır.",
        },
        {
          question: "Dosyalar nasıl teslim edilir?",
          answer: "Tamamlanan fotoğraf ve videolar yüksek çözünürlüklü olarak Google Drive, WeTransfer veya USB ile teslim edilir. Sosyal medya için optimize edilmiş versiyonlar da istek üzerine hazırlanır. Tüm dosyalar sizin özel arşivinizde 1 yıl süreyle de saklanır.",
        },
      ],
    },
    {
      category: "Teknik Sorular",
      questions: [
        {
          question: "Hangi ekipmanları kullanıyorsunuz?",
          answer: "DJI Mavic 3 Pro, DJI Inspire 3 ve FPV drone'larımız ile 4K, 6K ve 8K çekim yapabiliyoruz. Hasselblad kamera sistemleri ve gimbal stabilizasyon teknolojisi kullanıyoruz. Yedek batarya ve yedek drone'larımız her zaman hazırdır.",
        },
        {
          question: "Gece çekimi yapabiliyor musunuz?",
          answer: "Evet, gece ve gün batımı çekimleri yapabiliyoruz. Düşük ışık performansı yüksek kameralarımız ve özel aydınlatma ekipmanlarımız sayesinde gece çekimlerde de kaliteli sonuçlar elde ediyoruz. Özellikle şehir ışıkları ve gün batımı çekimleri çok etkileyici oluyor.",
        },
        {
          question: "Video çözünürlüğü nedir?",
          answer: "Standart olarak 4K (3840x2160) çözünürlükte çekim yapıyoruz. Talep üzerine 6K ve 8K çekim de yapabiliyoruz. Tüm videolar 30fps veya 60fps kare hızında, profesyonel renk profilleri ile kaydedilir. İstenirse RAW format da kullanılabilir.",
        },
        {
          question: "Kapalı alanda çekim yapabiliyor musunuz?",
          answer: "Evet, büyük kapalı mekanlarda (fabrika, salon, galeri vb.) özel drone'larımızla çekim yapabiliyoruz. Ancak mekanın yeterince geniş ve yüksek olması gerekir. Güvenlik için mekan incelemesi yapıyoruz.",
        },
      ],
    },
    {
      category: "Güvenlik & Yasal",
      questions: [
        {
          question: "Drone uçurmak güvenli mi?",
          answer: "Profesyonel ekibimiz ve modern ekipmanlarımız sayesinde çok güvenli. Pilotlarımız 500+ saatlik uçuş deneyimine sahip ve SHGM lisanslıdır. Her çekimde güvenlik protokollerimizi uyguluyoruz. 5 milyon TL sorumluluk sigortamız bulunmaktadır.",
        },
        {
          question: "İzin belgeleriniz var mı?",
          answer: "Evet, SHGM'den alınmış işletme belgesi, pilotlarımızın SİHA lisansları ve gerekli tüm izinler mevcuttur. Her çekim öncesi o lokasyon için özel uçuş izni başvurusu yapılır. Tüm belgeler güncel tutulur.",
        },
        {
          question: "Kişisel verilerim güvende mi?",
          answer: "Kesinlikle. KVKK (Kişisel Verilerin Korunması Kanunu) uyarınca tüm kişisel bilgileriniz güvenli şekilde saklanır ve üçüncü kişilerle paylaşılmaz. Çekim görüntüleriniz de izniniz olmadan kullanılmaz.",
        },
        {
          question: "Komşular veya çevredekiler şikayet eder mi?",
          answer: "Profesyonel ekibimiz tüm yasal gerekliliklere uyar. Gerekli durumlarda çevre bilgilendirmesi yapılır. Gürültü seviyesi düşük olan drone'larımız ve etik çekim yaklaşımımız sayesinde şikayet olması çok nadirdir.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Sıkça Sorulan Sorular
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Drone video ve fotoğraf çekimi hakkında merak ettiğiniz her şey burada. 
            Cevabını bulamadığınız sorular için bize ulaşın.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="mb-6 text-3xl font-bold text-gold">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`item-${categoryIndex}-${questionIndex}`}
                      className="rounded-lg border border-gold/20 bg-card px-6"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-gold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gold">Sorunuza Cevap Bulamadınız mı?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Başka sorularınız varsa çekinmeden bize ulaşın. Ekibimiz size yardımcı olmaktan 
            mutluluk duyacaktır.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/rezervasyon">
              <Button size="lg" className="bg-gold text-background hover:bg-gold-dark">
                <MessageCircle className="mr-2 h-5 w-5" />
                Bize Ulaşın
              </Button>
            </Link>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                WhatsApp ile İletin
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
