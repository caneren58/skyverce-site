"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Users,
  TrendingUp,
  DollarSign,
  Camera,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
} from "lucide-react";

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    {
      icon: <Calendar className="h-6 w-6 text-gold" />,
      label: "Toplam Rezervasyon",
      value: "247",
      change: "+12%",
      trend: "up",
    },
    {
      icon: <Users className="h-6 w-6 text-gold" />,
      label: "Aktif Müşteri",
      value: "156",
      change: "+8%",
      trend: "up",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-gold" />,
      label: "Aylık Gelir",
      value: "₺145.000",
      change: "+23%",
      trend: "up",
    },
    {
      icon: <Camera className="h-6 w-6 text-gold" />,
      label: "Bu Ay Çekim",
      value: "32",
      change: "+5%",
      trend: "up",
    },
  ];

  const bookings = [
    {
      id: "RES-001",
      customer: "Ahmet Yılmaz",
      service: "Düğün & Nişan",
      date: "15 Mayıs 2024",
      time: "14:00",
      location: "Ortaköy",
      budget: "₺6.000",
      status: "confirmed",
      phone: "0555 123 4567",
    },
    {
      id: "RES-002",
      customer: "Zeynep Kaya",
      service: "Emlak Tanıtımı",
      date: "18 Mayıs 2024",
      time: "10:00",
      location: "Beşiktaş",
      budget: "₺3.500",
      status: "pending",
      phone: "0532 987 6543",
    },
    {
      id: "RES-003",
      customer: "Mehmet Demir",
      service: "Kurumsal Çekim",
      date: "20 Mayıs 2024",
      time: "09:00",
      location: "Maslak",
      budget: "₺4.500",
      status: "confirmed",
      phone: "0543 456 7890",
    },
    {
      id: "RES-004",
      customer: "Ayşe Öztürk",
      service: "Turizm Çekimleri",
      date: "22 Mayıs 2024",
      time: "16:00",
      location: "Sultanahmet",
      budget: "₺5.000",
      status: "pending",
      phone: "0505 234 5678",
    },
    {
      id: "RES-005",
      customer: "Can Yıldız",
      service: "Düğün & Nişan",
      date: "25 Mayıs 2024",
      time: "13:00",
      location: "Çamlıca",
      budget: "₺12.000",
      status: "confirmed",
      phone: "0533 876 5432",
    },
    {
      id: "RES-006",
      customer: "Elif Arslan",
      service: "Emlak Tanıtımı",
      date: "12 Mayıs 2024",
      time: "11:00",
      location: "Kadıköy",
      budget: "₺1.500",
      status: "completed",
      phone: "0545 123 9876",
    },
    {
      id: "RES-007",
      customer: "Emre Çelik",
      service: "Kurumsal Çekim",
      date: "28 Mayıs 2024",
      time: "15:00",
      location: "Levent",
      budget: "₺15.000",
      status: "pending",
      phone: "0536 654 3210",
    },
    {
      id: "RES-008",
      customer: "Selin Aydın",
      service: "Turizm Çekimleri",
      date: "10 Mayıs 2024",
      time: "08:00",
      location: "Boğaz",
      budget: "₺10.000",
      status: "completed",
      phone: "0542 345 6789",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      confirmed: { label: "Onaylandı", className: "bg-green-500/20 text-green-500 border-green-500/50" },
      pending: { label: "Bekliyor", className: "bg-yellow-500/20 text-yellow-500 border-yellow-500/50" },
      completed: { label: "Tamamlandı", className: "bg-blue-500/20 text-blue-500 border-blue-500/50" },
      cancelled: { label: "İptal", className: "bg-red-500/20 text-red-500 border-red-500/50" },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gold gold-glow">Admin Panel</h1>
            <p className="text-muted-foreground">SkyView Istanbul - Rezervasyon Yönetimi</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
              <Download className="mr-2 h-4 w-4" />
              Rapor İndir
            </Button>
            <Button className="bg-gold text-background hover:bg-gold-dark">
              <Calendar className="mr-2 h-4 w-4" />
              Yeni Rezervasyon
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">{stat.change}</span>
                  <span className="text-muted-foreground">geçen aya göre</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-2xl text-gold">Rezervasyonlar</CardTitle>
              <div className="flex gap-2">
                <div className="relative flex-1 md:w-[300px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Ara..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rezervasyon No</TableHead>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>Hizmet</TableHead>
                    <TableHead>Tarih & Saat</TableHead>
                    <TableHead>Lokasyon</TableHead>
                    <TableHead>Bütçe</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-semibold">{booking.customer}</div>
                          <div className="text-xs text-muted-foreground">{booking.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>{booking.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gold" />
                          <div>
                            <div className="text-sm">{booking.date}</div>
                            <div className="text-xs text-muted-foreground">
                              <Clock className="mr-1 inline h-3 w-3" />
                              {booking.time}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{booking.location}</TableCell>
                      <TableCell className="font-semibold text-gold">{booking.budget}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {booking.status === "pending" && (
                            <>
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-8 w-8 text-green-500 hover:text-green-600"
                              >
                                <CheckCircle2 className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-8 w-8 text-red-500 hover:text-red-600"
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="cursor-pointer transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-gold" />
                Takvim Görünümü
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tüm rezervasyonları takvim üzerinde görüntüle
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-gold" />
                Müşteri Yönetimi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Müşteri listesini ve geçmişlerini incele
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-gold" />
                Raporlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Gelir ve performans raporlarını görüntüle
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
