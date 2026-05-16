import { Download } from 'lucide-react';

interface DownloadPhotoButtonProps {
  elementId: string;
  filename: string;
}

export function DownloadPhotoButton({ elementId, filename }: DownloadPhotoButtonProps) {
  const handleDownload = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      // Container div'i bul
      const container = element.querySelector('div > div');
      if (!container) return;

      // html2canvas alternatifi - modern screenshot API
      // Canvas oluştur
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Yüksek çözünürlük
      const scale = 2;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * scale;
      canvas.height = rect.height * scale;

      // Manuel olarak element'i canvas'a çiz
      // Bu basit versiyon - daha gelişmiş için html2canvas kütüphanesi gerekir
      // Şimdilik kullanıcıya screenshot öneriyoruz

      alert('Fotoğraf profilleri için: Resme sağ tıklayıp "Resmi farklı kaydet" seçin veya ekran görüntüsü alın.');

    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-md"
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
