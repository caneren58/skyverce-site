"use client";

export default function VideoModal({ videoUrl, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-4xl"
        >
          ×
        </button>

        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
