interface PhotoProfileImageProps {
  imagePath: string;
  market: string;
  subtitle?: string;
  accentColor?: string;
  size?: number;
}

export function PhotoProfileImage({
  imagePath,
  market,
  subtitle,
  accentColor = '#3498DB',
  size = 400
}: PhotoProfileImageProps) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Circular Container with Image */}
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          width: size,
          height: size,
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}
      >
        {/* Background Image */}
        <img
          src={imagePath}
          alt={market}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center 40%', // Slightly upper to show faces better
            transform: 'scale(0.80)' // Zoom out - show doctor + patient + hair drawing
          }}
        />

        {/* Gradient Overlay - Bottom - MUCH DARKER */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.25) 70%, transparent 85%)'
          }}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[16%]">
          {/* Full Brand Name - WHITE - CRYSTAL CLEAR */}
          <div
            className="text-white text-center px-4"
            style={{
              fontSize: size * 0.054 + 'px',
              fontWeight: '800',
              letterSpacing: size * 0.009 + 'px',
              textTransform: 'uppercase',
              textShadow: '0 0 20px rgba(0,0,0,1), 0 4px 28px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,1)',
              WebkitTextStroke: size * 0.0018 + 'px rgba(255,255,255,0.3)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              lineHeight: '1.2',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))'
            }}
          >
            {market}
          </div>

          {/* Role/Title - WHITE - STANDARD */}
          {subtitle && (
            <>
              {/* Small divider - white */}
              <div
                className="bg-white opacity-50 my-1.5"
                style={{
                  width: size * 0.20 + 'px',
                  height: '2px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.8)'
                }}
              />
              <div
                className="text-white text-center"
                style={{
                  fontSize: size * 0.038 + 'px',
                  fontWeight: '700',
                  letterSpacing: size * 0.008 + 'px',
                  textTransform: 'uppercase',
                  textShadow: '0 0 18px rgba(0,0,0,1), 0 3px 20px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,0.95)',
                  WebkitTextStroke: size * 0.0015 + 'px rgba(255,255,255,0.2)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.95))'
                }}
              >
                {subtitle.replace('Hair ', '')}
              </div>
            </>
          )}
        </div>

        {/* Subtle Ring Border */}
        <div
          className="absolute inset-0 rounded-full border-2 border-white"
          style={{
            opacity: 0.15
          }}
        />
      </div>
    </div>
  );
}
