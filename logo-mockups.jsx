// Mockups: iOS app icon on home screen, business card front + back.

// ─────────────────────────────────────────────────────────────
// iOS App Icon — the symbol on a blush gradient squircle
// ─────────────────────────────────────────────────────────────
function OrchyAppIcon({ size = 180, MarkComponent = OrchyBloom, bgMode = 'blush', markColor }) {
  const bgs = {
    blush: 'linear-gradient(155deg, #FCE4E6 0%, #F5B8C2 60%, #D98AA0 100%)',
    ivory: 'linear-gradient(155deg, #FDF7F1 0%, #F3E4D3 100%)',
    plum: 'linear-gradient(155deg, #6B2838 0%, #3E1520 100%)',
    white: '#FDF7F1',
  };
  const defaultMark = {
    blush: '#7A1E32',
    ivory: '#B8436B',
    plum: '#FDF7F1',
    white: '#B8436B',
  }[bgMode];

  const radius = size * 0.225; // iOS continuous-corner radius
  return (
    <div style={{
      width: size, height: size,
      borderRadius: radius,
      background: bgs[bgMode],
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 12px 40px -8px rgba(154, 40, 74, 0.35), inset 0 1px 0 rgba(255,255,255,0.4)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <MarkComponent size={size * 0.62} color={markColor || defaultMark} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// iOS Home Screen — realistic phone frame with ORCHY icon
// among a few placeholder apps. Shows the mark in real context.
// ─────────────────────────────────────────────────────────────
function OrchyiOSHomeScreen({ width = 340 }) {
  const height = width * (844 / 390); // iPhone 15 ratio
  const gridIconSize = width * 0.145;
  const PlaceholderIcon = ({ tone = '#E8DED0', label }) => (
    <div style={{
      width: gridIconSize, height: gridIconSize,
      borderRadius: gridIconSize * 0.225,
      background: tone,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: gridIconSize * 0.28, fontWeight: 600,
      color: 'rgba(255,255,255,0.85)',
      fontFamily: '-apple-system, sans-serif',
      letterSpacing: '-0.02em',
    }}>
      {label}
    </div>
  );

  return (
    <div style={{
      width, height,
      borderRadius: width * 0.14,
      background: '#0a0a0a',
      padding: 8,
      boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.8)',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: width * 0.12,
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #F8D7DC 0%, #EABAC4 40%, #C8889A 80%, #8B4557 100%)',
        position: 'relative',
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: width * 0.28, height: width * 0.078,
          background: '#000', borderRadius: 999,
          zIndex: 10,
        }} />
        {/* Status bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          padding: `${width * 0.04}px ${width * 0.08}px`,
          color: 'white', fontSize: width * 0.042, fontWeight: 600,
          fontFamily: '-apple-system, sans-serif',
        }}>
          <span>9:41</span>
          <span>●●● ●●</span>
        </div>

        {/* App grid */}
        <div style={{
          padding: `${width * 0.08}px ${width * 0.065}px`,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: width * 0.045,
          justifyItems: 'center',
        }}>
          {/* Row 1 — ORCHY featured */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <OrchyAppIcon size={gridIconSize} bgMode="blush" />
            <div style={{ fontSize: width * 0.028, color: 'white', fontFamily: '-apple-system, sans-serif' }}>Orchy</div>
          </div>
          {[
            { tone: '#7DB6E8', label: 'M' },
            { tone: '#F5C96B', label: 'N' },
            { tone: '#8FCDA8', label: 'H' },
            { tone: '#D4A5D9', label: 'S' },
            { tone: '#E8A07D', label: 'P' },
            { tone: '#9AA8E8', label: 'W' },
            { tone: '#C4B896', label: 'C' },
            { tone: '#E89AA8', label: 'B' },
            { tone: '#88C4C8', label: 'T' },
            { tone: '#C89090', label: 'R' },
            { tone: '#A8B89A', label: 'D' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <PlaceholderIcon tone={p.tone} label={p.label} />
              <div style={{ fontSize: width * 0.028, color: 'white', opacity: 0.8, fontFamily: '-apple-system, sans-serif' }}> </div>
            </div>
          ))}
        </div>

        {/* Dock */}
        <div style={{
          position: 'absolute',
          bottom: width * 0.04,
          left: width * 0.04, right: width * 0.04,
          height: width * 0.22,
          borderRadius: width * 0.07,
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: `0 ${width * 0.04}px`,
        }}>
          {['#3478F6', '#34C759', '#FF9F0A', '#FF3B30'].map((c, i) => (
            <div key={i} style={{
              width: gridIconSize, height: gridIconSize,
              borderRadius: gridIconSize * 0.225,
              background: c, opacity: 0.9,
            }} />
          ))}
        </div>
        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: width * 0.015,
          left: '50%', transform: 'translateX(-50%)',
          width: width * 0.35, height: 4, borderRadius: 2,
          background: 'rgba(255,255,255,0.6)',
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Business card — front (logo lockup) + back (info)
// ─────────────────────────────────────────────────────────────
function OrchyBusinessCard({ side = 'front', width = 420 }) {
  // Real card ratio 3.5 x 2 inches = 1.75
  const height = width / 1.75;

  if (side === 'front') {
    return (
      <div style={{
        width, height,
        background: 'linear-gradient(135deg, #FDF7F1 0%, #F8E6E9 100%)',
        borderRadius: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 12px 40px rgba(154, 40, 74, 0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Soft oversized petal in corner */}
        <div style={{
          position: 'absolute', bottom: -80, right: -60,
          opacity: 0.18,
          transform: 'rotate(-20deg)',
        }}>
          <OrchyBloom size={280} color="#B8436B" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, zIndex: 1 }}>
          <OrchyBloom size={52} color="#7A1E32" />
          <OrchyWordmarkSerif size={42} color="#2A1A1F" accent="#B8436B" />
          <div style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 10, letterSpacing: '0.32em',
            color: '#8B6B74', textTransform: 'uppercase',
            marginTop: 2,
          }}>
            dating, in full bloom
          </div>
        </div>
      </div>
    );
  }

  // Back
  return (
    <div style={{
      width, height,
      background: '#2A1A1F',
      borderRadius: 8,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.2)',
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <OrchyBloom size={32} color="#F5B8C2" />
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 22, color: '#FDF7F1',
          fontStyle: 'italic', letterSpacing: '-0.02em',
        }}>
          orchy
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 19, color: '#FDF7F1', lineHeight: 1.15, letterSpacing: '-0.01em',
          }}>
            01 · PETAL
            A single teardrop petal with an inner negative-space lip.
          </div>
          <div style={{
            fontFamily: '"Inter Tight", sans-serif', fontSize: 10,
            color: '#D9A5B2', letterSpacing: '0.18em',
            textTransform: 'uppercase', marginTop: 4,
          }}>
            orchy
          </div>
        </div>
        <div style={{
          fontFamily: '"Inter Tight", sans-serif', fontSize: 9,
          color: '#B08A94', letterSpacing: '0.04em',
          textAlign: 'right', lineHeight: 1.6,
        }}>
          isla@orchy.app<br />
          orchy.app<br />
          +1 (415) 555·0143
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { OrchyAppIcon, OrchyiOSHomeScreen, OrchyBusinessCard });
