"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Play, Image as ImageIcon } from "lucide-react";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
const portfolioItems = [
  {
    id: 1,
    category: "tourism",
    type: "video",
    title: "Sultanahmet Tarihi Yarımada",
    description: "Ayasofya, Sultanahmet Camii ve Topkapı Sarayı'nın havadan görünümü",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071",
    duration: "2:30",
    videoUrl: "https://cdn.coverr.co/videos/coverr-aerial-view-of-the-bosphorus-bridge-9705/1080p.mp4",
  },
  {
    id: 2,
    category: "wedding",
    type: "video",
    title: "Boğaz Kıyısında Düğün",
    description: "Ortaköy'de gerçekleşen romantik düğün töreni",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    duration: "3:15",
    videoUrl: "https://cdn.coverr.co/videos/coverr-wedding-couple-walking-on-a-pier-6624/1080p.mp4",
  },
  {
    id: 3,
    category: "realestate",
    type: "photo",
    title: "Modern Rezidans Projesi",
    description: "Beşiktaş'ta lüks konut projesi tanıtımı",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
    photos: 45,
  },
  {
    id: 4,
    category: "tourism",
    type: "video",
    title: "Boğaz Turu",
    description: "İstanbul Boğazı'nın tüm güzelliklerini keşfedin",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070",
    duration: "4:00",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-city-aerial-view-5731/1080p.mp4",
  },
  {
    id: 5,
    category: "corporate",
    type: "video",
    title: "Teknoloji Şirketi Tanıtımı",
    description: "Maslak'ta modern ofis binası ve çalışma alanları",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    duration: "2:00",
    videoUrl: "https://cdn.coverr.co/videos/coverr-manhattan-buildings-1133/1080p.mp4",
  },
  {
    id: 6,
    category: "wedding",
    type: "photo",
    title: "Çamlıca Tepesi Nişan",
    description: "Panoramik İstanbul manzaralı nişan çekimi",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070",
    photos: 60,
  },
  {
    id: 7,
    category: "realestate",
    type: "video",
    title: "Sahil Villası",
    description: "Marmara kıyısında lüks villa tanıtımı",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    duration: "1:45",
    videoUrl: "https://cdn.coverr.co/videos/coverr-aerial-of-a-coastal-house-3460/1080p.mp4",
  },
  {
    id: 8,
    category: "tourism",
    type: "photo",
    title: "Galata Kulesi & Çevresi",
    description: "Tarihi Galata bölgesinin havadan fotoğrafları",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2080",
    photos: 35,
  },
  {
    id: 9,
    category: "corporate",
    type: "video",
    title: "Festival Etkinliği",
    description: "Harbiye'de gerçekleşen müzik festivali",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
    duration: "3:30",
    videoUrl: "https://cdn.coverr.co/videos/coverr-concert-crowd-during-a-show-4210/1080p.mp4",
  },
];
