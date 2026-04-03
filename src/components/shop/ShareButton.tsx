'use client';

import { useState } from 'react';

interface ShareButtonProps {
  productName: string;
  productId: string;
}

export default function ShareButton({ productName, productId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://puntadasbcn.com/product/${productId}`;
  const shareText = `Mira este ${productName} de Puntadas - productos artesanales hechos a mano`;

  const handleShare = async () => {
    // Si el navegador soporta Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Puntadas',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // Usuario canceló el compartir
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      // Fallback: Copiar al portapapeles
      copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`relative px-6 py-3 rounded-md border font-medium transition-all duration-300 ${
        copied
          ? 'border-emerald-600 text-emerald-600 bg-emerald-50'
          : 'border-stone-900 text-stone-900 hover:bg-stone-50'
      }`}
      title="Compartir este producto"
    >
      <span className="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        {copied ? 'Enlace copiado' : 'Compartir'}
      </span>
    </button>
  );
}
