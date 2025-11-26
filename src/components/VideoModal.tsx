"use client";

export default function VideoModal({ url, onClose }) {
  if (!url) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-3xl">
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-gold text-black text-xl font-bold"
        >
          ✕
        </button>

        <video
          src={url}
          controls
          autoPlay
          className="w-full rounded-xl border border-gold"
        />
      </div>
    </div>
  );
}
