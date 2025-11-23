"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Calendar as CalendarIcon, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export default function ReservationPage() {
  const [date, setDate] = useState<Date>();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    // Scroll to top to show confirmation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="border-b border-gold/20 bg-card py-20 pt-32">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gold gold-glow md:text-6xl">
            Rezervasyon & İletişim
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Projenizi gerçeğe dönüştürmek için bize ulaşın. Formu doldurun veya 
            doğrudan WhatsApp üzerinden iletişime geçin.
          </p>
        </div>
      </section>

      {showConfirmation &&
      <section className="border-b border-gold/20 bg-gold/10 py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Card className="border-gold">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gold">
                    <CheckCircle2 className="h-8 w-8" />
                    Rezervasyon Talebiniz Alındı!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Sayın <span className="font-semibold text-gold">{formData.name}</span>, 
                    rezervasyon talebiniz başarıyla alınmıştır.
                  </p>
                  <div className="rounded-lg bg-card p-4 space-y-2 text-sm">
                    <p><span className="font-semibold">Hizmet:</span> {formData.service}</p>
                    <p><span className="font-semibold">Tarih:</span> {date ? format(date, "dd MMMM yyyy", { locale: tr }) : "Belirtilmedi"}</p>
                    <p><span className="font-semibold">Lokasyon:</span> {formData.location}</p>
                    <p><span className="font-semibold">E-posta:</span> {formData.email}</p>
                    <p><span className="font-semibold">Telefon:</span> {formData.phone}</p>
                  </div>
                  <p className="text-muted-foreground">
                    Ekibimiz en kısa sürede sizinle iletişime geçecektir. Acil durumlar için 
                    WhatsApp hattımızdan bize ulaşabilirsiniz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      }

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gold">İletişim Bilgileri</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-muted-foreground !whitespace-pre-line">+90 505 946 7166</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-semibold">E-posta</p>
                      <p className="text-muted-foreground !whitespace-pre-line">info@skyvercebybc.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-semibold">Adres</p>
                      <p className="text-muted-foreground">
                        Beşiktaş, İstanbul<br />Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-gold gold-border-glow bg-gradient-to-br from-gold/10 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gold">
                    <MessageCircle className="h-6 w-6" />
                    WhatsApp İletişim
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Hızlı iletişim için WhatsApp hattımızdan bize ulaşın. 
                    Anında cevap alın ve projенizi hemen planlayalım.
                  </p>
                  <a
                    href="https://wa.me/905551234567?text=Merhaba, drone çekim hizmetiniz hakkında bilgi almak istiyorum."
                    target="_blank"
                    rel="noopener noreferrer">

                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E]">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp'tan Yaz
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gold">Çalışma Saatleri</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazartesi - Cuma:</span>
                    <span className="font-semibold !whitespace-pre-line">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cumartesi:</span>
                    <span className="font-semibold !whitespace-pre-line">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazar:</span>
                    <span className="font-semibold !whitespace-pre-line">10:00 - 22:00</span>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    * Çekim tarihleri hafta sonu ve resmi tatil günlerine ayarlanabilir.
                  </p>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gold">Rezervasyon Formu</CardTitle>
                  <p className="text-muted-foreground">
                    Formu doldurun, size en kısa sürede dönüş yapalım
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input
                          id="name"
                          placeholder="Adınız ve soyadınız"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)} />

                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ornek@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)} />

                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0555 123 4567"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)} />

                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Hizmet Türü *</Label>
                        <Select
                          required
                          value={formData.service}
                          onValueChange={(value) => handleInputChange("service", value)}>

                          <SelectTrigger id="service">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="turizm">Turizm Çekimleri</SelectItem>
                            <SelectItem value="dugun">Düğün & Nişan</SelectItem>
                            <SelectItem value="emlak">Emlak Tanıtımı</SelectItem>
                            <SelectItem value="kurumsal">Kurumsal Çekimler</SelectItem>
                            <SelectItem value="diger">Diğer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Tercih Edilen Tarih</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal">

                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "dd MMMM yyyy", { locale: tr }) : "Tarih seçiniz"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              locale={tr}
                              disabled={(date) => date < new Date()} />

                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Bütçe Aralığı</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleInputChange("budget", value)}>

                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1000-2500">₺1.000 - ₺2.500</SelectItem>
                            <SelectItem value="2500-5000">₺2.500 - ₺5.000</SelectItem>
                            <SelectItem value="5000-10000">₺5.000 - ₺10.000</SelectItem>
                            <SelectItem value="10000+">₺10.000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Çekim Lokasyonu *</Label>
                      <Input
                        id="location"
                        placeholder="Örn: Sultanahmet, Ortaköy, Beşiktaş..."
                        required
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)} />

                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesajınız</Label>
                      <Textarea
                        id="message"
                        placeholder="Projeniz hakkında detaylı bilgi verin..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)} />

                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-gold text-background hover:bg-gold-dark">

                        Rezervasyon Talebi Gönder
                      </Button>
                      <a
                        href="https://wa.me/905551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1">

                        <Button
                          type="button"
                          size="lg"
                          variant="outline"
                          className="w-full border-gold text-gold hover:bg-gold/10">

                          <MessageCircle className="mr-2 h-5 w-5" />
                          WhatsApp ile İletin
                        </Button>
                      </a>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      * İşaretli alanlar zorunludur. Kişisel bilgileriniz güvenle saklanır ve 
                      üçüncü kişilerle paylaşılmaz.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-card py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-gold">Sık Sorulan Sorular</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Rezervasyon ve çekim süreci hakkında sorularınız mı var?
            </p>
            <a href="/sss">
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/10">
                SSS Sayfasını İnceleyin
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}