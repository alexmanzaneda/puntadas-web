'use client';

import { useState } from 'react';

interface ShareButtonProps {
  productName: string;
  productId: string;
}

// Compartir la pieza: menú nativo del móvil o, si no lo hay, copiar el enlace
export default function ShareButton({ productName, productId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://puntadasbcn.com/product/${productId}`;
  const shareText = `${productName}, de Puntadas. Cosido a mano en Barcelona.`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copiando el enlace:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Puntadas', text: shareText, url: shareUrl });
      } catch (err) {
        // Cancelar el menú de compartir no es un error
        if ((err as Error).name !== 'AbortError') console.error('Error compartiendo:', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <button type="button" onClick={handleShare} className="label link-line" aria-live="polite">
      {copied ? 'Enlace copiado' : 'Compartir'}
    </button>
  );
}
