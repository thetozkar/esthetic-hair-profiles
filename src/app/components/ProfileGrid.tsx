import { ProfileImage } from './ProfileImage';
import { PhotoProfileImage } from './PhotoProfileImage';
import { DownloadJPGButton } from './DownloadJPGButton';
import { PersonalizedProfileCreator } from './PersonalizedProfileCreator';

// Import selected clinic photos - MIXED BATCH
import img2658 from '../../imports/IMG_2658.JPG';
import img0701 from '../../imports/IMG_0701.JPG';
import img0695 from '../../imports/IMG_0695.JPG';
import img9029_1 from '../../imports/IMG_9029-1.JPG';

interface Profile {
  id: string;
  market: string;
  subtitle?: string;
  accentColor: string;
  description: string;
}

export function ProfileGrid() {
  // Logo-based profile variations - 20 DIFFERENT OPTIONS
  const logoProfiles = [
    // Turkey Branch
    {
      id: 'turkey-specialist',
      market: 'ESTHETIC HAIR TURKEY',
      subtitle: 'Transplant Specialist',
      accentColor: '#3498DB',
      description: 'Turkey - Specialist'
    },
    {
      id: 'turkey-consultant',
      market: 'ESTHETIC HAIR TURKEY',
      subtitle: 'Medical Consultant',
      accentColor: '#3498DB',
      description: 'Turkey - Consultant'
    },
    {
      id: 'turkey-coordinator',
      market: 'ESTHETIC HAIR TURKEY',
      subtitle: 'Patient Coordinator',
      accentColor: '#3498DB',
      description: 'Turkey - Coordinator'
    },
    {
      id: 'turkey-advisor',
      market: 'ESTHETIC HAIR TURKEY',
      subtitle: 'Patient Advisor',
      accentColor: '#3498DB',
      description: 'Turkey - Advisor'
    },

    // Miami Branch
    {
      id: 'miami-specialist',
      market: 'ESTHETIC HAIR MIAMI',
      subtitle: 'Transplant Specialist',
      accentColor: '#3498DB',
      description: 'Miami - Specialist'
    },
    {
      id: 'miami-consultant',
      market: 'ESTHETIC HAIR MIAMI',
      subtitle: 'Medical Consultant',
      accentColor: '#3498DB',
      description: 'Miami - Consultant'
    },
    {
      id: 'miami-coordinator',
      market: 'ESTHETIC HAIR MIAMI',
      subtitle: 'Patient Coordinator',
      accentColor: '#3498DB',
      description: 'Miami - Coordinator'
    },

    // Mexico Branch
    {
      id: 'mexico-specialist',
      market: 'ESTHETIC HAIR MEXICO',
      subtitle: 'Transplant Specialist',
      accentColor: '#3498DB',
      description: 'Mexico - Specialist'
    },
    {
      id: 'mexico-consultant',
      market: 'ESTHETIC HAIR MEXICO',
      subtitle: 'Medical Consultant',
      accentColor: '#3498DB',
      description: 'Mexico - Consultant'
    },
    {
      id: 'mexico-coordinator',
      market: 'ESTHETIC HAIR MEXICO',
      subtitle: 'Patient Coordinator',
      accentColor: '#3498DB',
      description: 'Mexico - Coordinator'
    },

    // Brasil Branch
    {
      id: 'brasil-specialist',
      market: 'ESTHETIC HAIR BRASIL',
      subtitle: 'Transplant Specialist',
      accentColor: '#3498DB',
      description: 'Brasil - Specialist'
    },
    {
      id: 'brasil-consultant',
      market: 'ESTHETIC HAIR BRASIL',
      subtitle: 'Medical Consultant',
      accentColor: '#3498DB',
      description: 'Brasil - Consultant'
    },
    {
      id: 'brasil-coordinator',
      market: 'ESTHETIC HAIR BRASIL',
      subtitle: 'Patient Coordinator',
      accentColor: '#3498DB',
      description: 'Brasil - Coordinator'
    },

    // Generic / Technique Specialists
    {
      id: 'fue-specialist',
      market: 'ESTHETIC HAIR',
      subtitle: 'FUE Specialist',
      accentColor: '#3498DB',
      description: 'FUE Technique'
    },
    {
      id: 'dhi-specialist',
      market: 'ESTHETIC HAIR',
      subtitle: 'DHI Specialist',
      accentColor: '#3498DB',
      description: 'DHI Technique'
    },
    {
      id: 'restoration-expert',
      market: 'ESTHETIC HAIR',
      subtitle: 'Restoration Expert',
      accentColor: '#3498DB',
      description: 'Hair Restoration'
    },
    {
      id: 'senior-specialist',
      market: 'ESTHETIC HAIR',
      subtitle: 'Senior Specialist',
      accentColor: '#3498DB',
      description: 'Senior Expert'
    },
    {
      id: 'clinic-director',
      market: 'ESTHETIC HAIR',
      subtitle: 'Clinic Director',
      accentColor: '#3498DB',
      description: 'Director'
    },
    {
      id: 'medical-advisor',
      market: 'ESTHETIC HAIR',
      subtitle: 'Medical Advisor',
      accentColor: '#3498DB',
      description: 'Medical Advisory'
    },
    {
      id: 'consultation-expert',
      market: 'ESTHETIC HAIR',
      subtitle: 'Consultation Expert',
      accentColor: '#3498DB',
      description: 'Consultation'
    },
  ];

  const photoProfiles = [
    {
      id: 'turkey',
      imagePath: img2658,
      market: 'ESTHETIC HAIR TURKEY',
      subtitle: 'Hair Transplant Specialist',
      accentColor: '#1A2B3C',
      description: 'Ana merkez - İstanbul'
    },
    {
      id: 'miami',
      imagePath: img0695,
      market: 'ESTHETIC HAIR MIAMI',
      subtitle: 'Hair Transplant Specialist',
      accentColor: '#3498DB',
      description: 'Amerika şubesi'
    },
    {
      id: 'mexico',
      imagePath: img0701,
      market: 'ESTHETIC HAIR MEXICO',
      subtitle: 'Hair Transplant Specialist',
      accentColor: '#FF6B35',
      description: 'Meksika şubesi - Cancun'
    },
    {
      id: 'brasil',
      imagePath: img9029_1,
      market: 'ESTHETIC HAIR BRASIL',
      subtitle: 'Hair Transplant Specialist',
      accentColor: '#28A745',
      description: 'Brezilya şubesi - São Paulo'
    },
  ];

  const specialProfiles = [
    {
      id: 'master',
      market: 'ESTHETIC HAIR',
      subtitle: 'International',
      variant: 'default' as const,
      title: 'Master Brand',
      description: 'Main corporate identity'
    },
    {
      id: 'dark',
      market: 'ESTHETIC HAIR',
      subtitle: 'Medical Excellence',
      variant: 'dark' as const,
      title: 'Dark Mode',
      description: 'Premium navy theme'
    },
    {
      id: 'minimal',
      market: 'ESTHETIC HAIR',
      subtitle: 'Clinical Authority',
      variant: 'minimal' as const,
      title: 'Minimal Clinical',
      description: 'Ultra-minimal medical version'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-4">
          <h1 className="mb-2" style={{ fontSize: '48px', fontWeight: '300', letterSpacing: '4px', color: '#1A2B3C' }}>
            ESTHETIC HAIR
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#3498DB] to-transparent opacity-50" />
        </div>
        <p className="text-center" style={{ color: '#566573', letterSpacing: '2px', fontSize: '14px' }}>
          PROFESSIONAL WHATSAPP PROFILE SYSTEM
        </p>
      </div>

      {/* Personalized Profile Creator - TOP PRIORITY */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-4">
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>⭐ YENİ - ÖZEL PROFIL</span>
          </div>
          <h2 className="mb-3" style={{ fontSize: '32px', fontWeight: '600', letterSpacing: '2px', color: '#1A2B3C' }}>
            KİŞİSELLEŞTİRİLMİŞ PROFIL
          </h2>
          <p className="text-center max-w-2xl mx-auto" style={{ fontSize: '16px', color: '#566573', letterSpacing: '0.5px', lineHeight: '1.7' }}>
            Her çalışan için özel profil oluşturun. İsim + Rol + Şube ile kişiye özel asistan profili!
          </p>
        </div>
        <PersonalizedProfileCreator />
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Real Photo Profiles */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: '400', letterSpacing: '3px', color: '#1A2B3C' }}>
          PHOTO-BASED PROFILES
        </h2>
        <p className="text-center mb-6" style={{ fontSize: '15px', color: '#566573', letterSpacing: '1px' }}>
          Gerçek klinik fotoğrafları ile profesyonel WhatsApp profilleri
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {photoProfiles.map((profile) => (
            <div key={profile.id} className="flex flex-col items-center">
              <div id={`photo-${profile.id}`} className="mb-3">
                <PhotoProfileImage
                  imagePath={profile.imagePath}
                  market={profile.market}
                  subtitle={profile.subtitle}
                  accentColor={profile.accentColor}
                  size={280}
                />
              </div>
              <DownloadJPGButton
                elementId={`photo-${profile.id}`}
                filename={`esthetic-hair-photo-${profile.id}`}
              />
              <h3 className="mb-1 mt-3" style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '2px', color: '#1A2B3C' }}>
                {profile.market}
              </h3>
              <p className="text-center" style={{ fontSize: '13px', color: '#566573', letterSpacing: '0.5px' }}>
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Logo-Based Profiles - 20 Variations */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: '400', letterSpacing: '3px', color: '#1A2B3C' }}>
          LOGO-BASED PROFILES (20 Variations)
        </h2>
        <p className="text-center mb-8" style={{ fontSize: '15px', color: '#566573', letterSpacing: '1px' }}>
          Farklı roller ve şubeler - Her çalışan istediğini seçip indirebilir
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
          <h3 className="mb-3 text-center" style={{ fontSize: '18px', fontWeight: '600', color: '#1A2B3C' }}>
            📥 Nasıl İndirip WhatsApp'a Yüklersiniz
          </h3>
          <ol className="space-y-2" style={{ fontSize: '14px', color: '#566573', lineHeight: '1.8' }}>
            <li><strong>1.</strong> Beğendiğiniz profil resmini seçin</li>
            <li><strong>2.</strong> <strong>"📥 İndir JPG"</strong> butonuna tıklayın</li>
            <li><strong>3.</strong> JPG dosyası otomatik inecek</li>
            <li><strong>4.</strong> WhatsApp Business açın → Settings → Business Profile</li>
            <li><strong>5.</strong> Profile Photo → İndirilen JPG'yi seçip yükleyin</li>
            <li><strong>6.</strong> Tam ortaya gelecek şekilde konumlandırın ✅</li>
          </ol>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {logoProfiles.map((profile) => (
            <div key={profile.id} className="flex flex-col items-center">
              <div id={`logo-${profile.id}`} className="bg-white rounded-full p-3 shadow-xl mb-3">
                <ProfileImage
                  market={profile.market}
                  subtitle={profile.subtitle}
                  accentColor={profile.accentColor}
                  size={220}
                />
              </div>
              <DownloadJPGButton
                elementId={`logo-${profile.id}`}
                filename={`esthetic-hair-${profile.id}`}
              />
              <h3 className="mb-1 text-center mt-3" style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '1.5px', color: '#1A2B3C' }}>
                {profile.subtitle}
              </h3>
              <p className="text-center" style={{ fontSize: '11px', color: '#566573', letterSpacing: '0.5px' }}>
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Preview Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-8" style={{ fontSize: '24px', fontWeight: '400', letterSpacing: '3px', color: '#1A2B3C' }}>
          WHATSAPP SIZE PREVIEW
        </h2>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {/* Small Size Preview */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-1 mb-3">
                <PhotoProfileImage
                  imagePath={img2658}
                  market="ESTHETIC HAIR TURKEY"
                  subtitle="Hair Transplant Specialist"
                  accentColor="#1A2B3C"
                  size={56}
                />
              </div>
              <p style={{ fontSize: '11px', color: '#566573', letterSpacing: '1px' }}>
                56x56 px
              </p>
            </div>

            {/* Medium Size Preview */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-2 mb-3">
                <PhotoProfileImage
                  imagePath={img0695}
                  market="ESTHETIC HAIR MIAMI"
                  subtitle="Hair Transplant Specialist"
                  accentColor="#3498DB"
                  size={120}
                />
              </div>
              <p style={{ fontSize: '11px', color: '#566573', letterSpacing: '1px' }}>
                120x120 px
              </p>
            </div>

            {/* Large Size Preview */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-3 mb-3">
                <PhotoProfileImage
                  imagePath={img0701}
                  market="ESTHETIC HAIR MEXICO"
                  subtitle="Hair Transplant Specialist"
                  accentColor="#FF6B35"
                  size={200}
                />
              </div>
              <p style={{ fontSize: '11px', color: '#566573', letterSpacing: '1px' }}>
                200x200 px
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design System Guide */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="mb-6" style={{ fontSize: '24px', fontWeight: '400', letterSpacing: '3px', color: '#1A2B3C' }}>
          DESIGN SYSTEM GUIDE
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px', color: '#1A2B3C' }}>
              COLOR PALETTE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'White', color: '#FFFFFF', border: true },
                { name: 'Navy', color: '#1A2B3C' },
                { name: 'Blue', color: '#3498DB' },
                { name: 'Gray', color: '#ECF0F1', border: true }
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-lg mb-2 shadow-md"
                    style={{
                      backgroundColor: c.color,
                      border: c.border ? '1px solid #E0E0E0' : 'none'
                    }}
                  />
                  <p style={{ fontSize: '12px', color: '#566573', letterSpacing: '1px' }}>
                    {c.name}
                  </p>
                  <p style={{ fontSize: '10px', color: '#7F8C8D' }}>
                    {c.color}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px', color: '#1A2B3C' }}>
              BRANCH COLORS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Turkey', color: '#1A2B3C' },
                { name: 'Miami', color: '#3498DB' },
                { name: 'Mexico', color: '#FF6B35' },
                { name: 'Brasil', color: '#28A745' }
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full mb-2 shadow-md"
                    style={{ backgroundColor: c.color }}
                  />
                  <p style={{ fontSize: '11px', color: '#566573', letterSpacing: '1px', fontWeight: '500' }}>
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px', color: '#1A2B3C' }}>
              KEY FEATURES
            </h3>
            <ul className="space-y-2" style={{ fontSize: '13px', color: '#566573', lineHeight: '1.8' }}>
              <li>• Gerçek klinik fotoğrafları - doktor + hasta görünüyor</li>
              <li>• Koyu gradient - yazılar kristal net okunuyor</li>
              <li>• Full domain: ESTHETIC HAIR TURKEY, MIAMI, MEXICO, BRASIL</li>
              <li>• Role: "Transplant Specialist" - uzman algısı</li>
              <li>• WhatsApp circular format optimize</li>
              <li>• Her şube kendine özel renk</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3" style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '2px', color: '#1A2B3C' }}>
              TYPOGRAPHY
            </h3>
            <p style={{ fontSize: '13px', color: '#566573', lineHeight: '1.8' }}>
              System Sans-Serif Stack: -apple-system, BlinkMacSystemFont, Segoe UI
              <br />
              Monogram: 300 weight, 8px letter-spacing
              <br />
              Market Name: 400 weight, 3px letter-spacing, uppercase
              <br />
              Subtitle: 300 weight, 2px letter-spacing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
