interface DownloadJPGButtonProps {
  elementId: string;
  filename: string;
}

export function DownloadJPGButton({ elementId, filename }: DownloadJPGButtonProps) {
  const handleDownload = async () => {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('Element bulunamadı!');
      return;
    }

    try {
      // Find SVG or IMG element
      const svg = element.querySelector('svg');
      const img = element.querySelector('img');

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // High resolution
      const scale = 3;
      const size = 800;
      canvas.width = size * scale;
      canvas.height = size * scale;

      // White background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (svg) {
        // Handle SVG element
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        const image = new Image();
        image.onload = () => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(url);

          // Download as JPG
          canvas.toBlob((blob) => {
            if (blob) {
              const link = document.createElement('a');
              link.download = `${filename}.jpg`;
              link.href = URL.createObjectURL(blob);
              link.click();
              URL.revokeObjectURL(link.href);
            }
          }, 'image/jpeg', 0.95);
        };
        image.src = url;
      } else if (img) {
        // Handle IMG element (for photo profiles)
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
          // Draw circular clipped image
          ctx.save();
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          ctx.restore();

          // Download as JPG
          canvas.toBlob((blob) => {
            if (blob) {
              const link = document.createElement('a');
              link.download = `${filename}.jpg`;
              link.href = URL.createObjectURL(blob);
              link.click();
              URL.revokeObjectURL(link.href);
            }
          }, 'image/jpeg', 0.95);
        };
        image.src = img.src;
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('İndirme hatası! Lütfen sayfayı yenileyin veya ekran görüntüsü alın.');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md"
      style={{
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '0.5px'
      }}
    >
      📥 İndir JPG
    </button>
  );
}
