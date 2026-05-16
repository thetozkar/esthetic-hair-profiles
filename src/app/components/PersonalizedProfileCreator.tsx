import { useState } from 'react';
import { ProfileImage } from './ProfileImage';
import { DownloadJPGButton } from './DownloadJPGButton';

export function PersonalizedProfileCreator() {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('TURKEY');
  const [role, setRole] = useState('Personal Assistant');
  const [showPreview, setShowPreview] = useState(false);

  const branches = [
    { value: 'TURKEY', label: 'Turkey (Türkiye)' },
    { value: 'MIAMI', label: 'Miami (USA)' },
    { value: 'MEXICO', label: 'Mexico (Cancun)' },
    { value: 'BRASIL', label: 'Brasil (São Paulo)' }
  ];

  const roles = [
    { value: 'Personal Assistant', label: 'Personal Assistant (Kişisel Asistan)' },
    { value: 'Patient Coordinator', label: 'Patient Coordinator (Hasta Koordinatörü)' },
    { value: 'Medical Consultant', label: 'Medical Consultant (Medikal Danışman)' },
    { value: 'Hair Specialist', label: 'Hair Specialist (Saç Uzmanı)' },
    { value: 'Patient Advisor', label: 'Patient Advisor (Hasta Danışmanı)' },
    { value: 'Sales Consultant', label: 'Sales Consultant (Satış Danışmanı)' },
    { value: 'VIP Coordinator', label: 'VIP Coordinator (VIP Koordinatör)' },
    { value: 'International Coordinator', label: 'International Coordinator (Uluslararası Koordinatör)' },
    { value: 'Customer Service', label: 'Customer Service (Müşteri Hizmetleri)' },
    { value: 'Treatment Advisor', label: 'Treatment Advisor (Tedavi Danışmanı)' },
    { value: 'Clinic Coordinator', label: 'Clinic Coordinator (Klinik Koordinatörü)' },
    { value: 'Operation Manager', label: 'Operation Manager (Operasyon Müdürü)' },
    { value: 'Aftercare Specialist', label: 'Aftercare Specialist (Bakım Uzmanı)' },
    { value: 'Medical Secretary', label: 'Medical Secretary (Tıbbi Sekreter)' },
    { value: 'Receptionist', label: 'Receptionist (Resepsiyon)' },
    { value: 'Call Center Agent', label: 'Call Center Agent (Çağrı Merkezi Temsilcisi)' },
    { value: 'WhatsApp Support', label: 'WhatsApp Support (WhatsApp Destek)' },
    { value: 'Instagram Support', label: 'Instagram Support (Instagram Destek)' },
    { value: 'Social Media Manager', label: 'Social Media Manager (Sosyal Medya Yöneticisi)' },
    { value: 'Marketing Specialist', label: 'Marketing Specialist (Pazarlama Uzmanı)' }
  ];

  const handleGenerate = () => {
    if (name.trim()) {
      setShowPreview(true);
    } else {
      alert('Lütfen bir isim girin!');
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl p-8 mb-8">
        <h3 className="mb-6 text-center" style={{ fontSize: '22px', fontWeight: '600', color: '#1A2B3C', letterSpacing: '1px' }}>
          🎯 Kişiselleştirilmiş Profil Oluştur
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Name Input */}
          <div>
            <label className="block mb-2" style={{ fontSize: '14px', fontWeight: '600', color: '#1A2B3C' }}>
              İsim Soyisim
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Örn: Ahmet Yılmaz"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              style={{ fontSize: '15px' }}
            />
          </div>

          {/* Branch Select */}
          <div>
            <label className="block mb-2" style={{ fontSize: '14px', fontWeight: '600', color: '#1A2B3C' }}>
              Şube
            </label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              style={{ fontSize: '15px' }}
            >
              {branches.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          {/* Role Select */}
          <div className="md:col-span-2">
            <label className="block mb-2" style={{ fontSize: '14px', fontWeight: '600', color: '#1A2B3C' }}>
              Rol / Pozisyon
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              style={{ fontSize: '15px' }}
            >
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-lg transition-all shadow-lg transform hover:scale-[1.02]"
          style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '1px' }}
        >
          🎨 Profil Oluştur
        </button>
      </div>

      {/* Preview */}
      {showPreview && name.trim() && (
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h4 className="mb-6 text-center" style={{ fontSize: '20px', fontWeight: '600', color: '#1A2B3C' }}>
            📱 Profil Önizleme
          </h4>

          <div className="flex flex-col items-center">
            <div id="personalized-profile" className="bg-white rounded-full p-4 shadow-xl mb-4">
              <ProfileImage
                market={branch}
                subtitle={`${name} • ${role}`}
                accentColor="#3498DB"
                size={320}
              />
            </div>

            <DownloadJPGButton
              elementId="personalized-profile"
              filename={`esthetic-hair-${name.toLowerCase().replace(/\s+/g, '-')}-${branch.toLowerCase()}`}
            />

            <div className="mt-6 text-center p-4 bg-green-50 rounded-lg max-w-md">
              <p style={{ fontSize: '14px', color: '#166534', lineHeight: '1.8' }}>
                ✅ <strong>{name}</strong> için kişisel profil hazır!<br/>
                📥 Butona tıklayarak JPG olarak indirin.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
