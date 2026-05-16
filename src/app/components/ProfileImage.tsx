interface ProfileImageProps {
  market: string;
  subtitle?: string;
  accentColor?: string;
  variant?: 'default' | 'dark' | 'minimal';
  size?: number;
}

export function ProfileImage({
  market,
  subtitle,
  accentColor = '#3498DB',
  variant = 'default',
  size = 400
}: ProfileImageProps) {
  const isDark = variant === 'dark';
  const isMinimal = variant === 'minimal';

  const backgroundColor = isDark ? '#1A2B3C' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#1A2B3C';
  const monogramColor = isDark ? '#FFFFFF' : '#1A2B3C';
  const frameColor = isMinimal ? '#7F8C8D' : accentColor;
  const subtitleColor = isDark ? '#5DADE2' : isMinimal ? '#566573' : accentColor;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="drop-shadow-lg"
      >
        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="200"
          fill={backgroundColor}
        />

        {/* Subtle Outer Frame */}
        <circle
          cx="200"
          cy="200"
          r="192"
          fill="none"
          stroke={frameColor}
          strokeWidth="1"
          opacity="0.2"
        />

        {/* Hair Follicle Pattern - Top Arc */}
        <g opacity={isMinimal ? "0.15" : "0.25"}>
          {/* Follicle dots creating a subtle arc */}
          {[...Array(7)].map((_, i) => {
            const angle = -120 + (i * 40); // Arc from -120 to 120 degrees
            const radian = (angle * Math.PI) / 180;
            const radius = 160;
            const x = 200 + radius * Math.cos(radian);
            const y = 200 + radius * Math.sin(radian);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1.5"
                fill={accentColor}
              />
            );
          })}
        </g>

        {/* Main Content */}
        <g>
          {/* ESTHETIC text - MUCH BIGGER & BOLDER */}
          <text
            x="200"
            y="160"
            textAnchor="middle"
            fill={textColor}
            style={{
              fontSize: '52px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: '600',
              letterSpacing: '10px',
              textTransform: 'uppercase'
            }}
          >
            ESTHETIC
          </text>

          {/* HAIR text - MUCH BIGGER and BOLDER */}
          <text
            x="200"
            y="225"
            textAnchor="middle"
            fill={accentColor}
            style={{
              fontSize: '80px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: '800',
              letterSpacing: '6px',
              textTransform: 'uppercase'
            }}
          >
            HAIR
          </text>

          {/* Decorative underline */}
          <line
            x1="120"
            y1="230"
            x2="280"
            y2="230"
            stroke={accentColor}
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Market Name - BIGGER */}
          <text
            x="200"
            y="260"
            textAnchor="middle"
            fill={textColor}
            style={{
              fontSize: '20px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: '600',
              letterSpacing: '5px',
              textTransform: 'uppercase'
            }}
          >
            {market}
          </text>

          {/* Subtitle - Two Lines: Name and Role */}
          {subtitle && (() => {
            const parts = subtitle.split(' • ');
            const name = parts[0] || '';
            const role = parts[1] || '';

            return (
              <>
                {/* Name Line */}
                <text
                  x="200"
                  y="292"
                  textAnchor="middle"
                  fill={subtitleColor}
                  textLength={name.length > 25 ? "340" : undefined}
                  lengthAdjust={name.length > 25 ? "spacingAndGlyphs" : undefined}
                  style={{
                    fontSize: name.length > 25 ? '13px' : '15px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                    fontWeight: '600',
                    letterSpacing: name.length > 25 ? '1px' : '3px',
                    textTransform: 'uppercase'
                  }}
                >
                  {name}
                </text>

                {/* Role Line */}
                {role && (
                  <text
                    x="200"
                    y="312"
                    textAnchor="middle"
                    fill={subtitleColor}
                    textLength={role.length > 25 ? "340" : undefined}
                    lengthAdjust={role.length > 25 ? "spacingAndGlyphs" : undefined}
                    style={{
                      fontSize: role.length > 25 ? '11px' : '13px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                      fontWeight: '500',
                      letterSpacing: role.length > 25 ? '0.5px' : '2px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {role}
                  </text>
                )}
              </>
            );
          })()}
        </g>

        {/* Hair Follicle Pattern - Bottom */}
        <g opacity={isMinimal ? "0.1" : "0.2"}>
          {[...Array(5)].map((_, i) => {
            const x = 110 + (i * 45);
            const y = 320;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="1.2" fill={accentColor} />
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y - 8}
                  stroke={accentColor}
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
