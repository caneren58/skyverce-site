"use client";

import { X } from "lucide-react";

export default function VideoModal({ open, onClose, videoUrl }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl px-4">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gold transition"
        >
          <X size={40} />
        </button>

        {/* Video Player */}
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
