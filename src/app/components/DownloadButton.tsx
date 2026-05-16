import { useRef } from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  elementId: string;
  filename: string;
}

export function DownloadButton({ elementId, filename }: DownloadButtonProps) {
  const handleDownload = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      // SVG elementini bul
      const svg = element.querySelector('svg');
      if (!svg) return;

      // SVG'yi string'e çevir
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Canvas boyutunu ayarla (yüksek çözünürlük için)
      const scale = 2;
      canvas.width = 800 * scale;
      canvas.height = 800 * scale;

      // Beyaz arka plan ekle
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // SVG'yi image olarak yükle
      const img = new Image();
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        // PNG olarak indir
        canvas.toBlob((blob) => {
          if (blob) {
            const link = document.createElement('a');
            link.download = `${filename}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(link.href);
          }
        }, 'image/png');
      };

      img.src = url;
    } catch (error) {
      console.error('Download error:', error);
      alert('İndirme hatası! Lütfen tekrar deneyin.');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md"
      style={{
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '0.5px'
      }}
    >
      <Download size={16} />
      İndir PNG
    </button>
  );
}
