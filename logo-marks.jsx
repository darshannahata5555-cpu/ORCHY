// Logo marks for ORCHY
// All marks are SVG-based and color-aware via currentColor where possible.
// Single-curve petal language — no hearts, no chat bubbles.

// ─────────────────────────────────────────────────────────────
// The core petal — a single elegant curve that reads as both an
// orchid petal and the opening of the letter O. Used as the
// foundational glyph across all marks.
// ─────────────────────────────────────────────────────────────
function OrchyPetal({ size = 120, color = '#B8436B', stroke = 'none', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer petal — teardrop with a subtle curl */}
      <path
        d="M60 8 C 88 20, 104 44, 104 70 C 104 92, 86 112, 60 112 C 34 112, 16 92, 16 70 C 16 44, 32 20, 60 8 Z"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {/* Inner negative-space petal — creates the orchid lip */}
      <path
        d="M60 32 C 74 40, 82 54, 82 68 C 82 82, 72 94, 60 94 C 48 94, 38 82, 38 68 C 38 54, 46 40, 60 32 Z"
        fill="#FDF7F1"
      />
      {/* Center stamen — tiny accent dot */}
      <circle cx="60" cy="66" r="4" fill={color} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Mark A — Bloom: three overlapping petals in a trefoil,
// echoing an orchid from the front. Used as the primary symbol.
// ─────────────────────────────────────────────────────────────
function OrchyBloom({ size = 120, color = '#B8436B', bg = 'transparent' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {bg !== 'transparent' && <rect width="120" height="120" fill={bg} />}
      <g transform="translate(60 62)">
        {/* Three petals rotated around center */}
        {[0, 120, 240].map((deg, i) => (
          <path
            key={i}
            d="M0 0 C -16 -10, -22 -28, -14 -44 C -8 -54, 4 -54, 10 -44 C 18 -28, 14 -10, 0 0 Z"
            fill={color}
            opacity={0.92}
            transform={`rotate(${deg})`}
          />
        ))}
        {/* Center — small negative circle */}
        <circle r="5" fill="#FDF7F1" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Mark B — Curve: a single flowing petal/comma. The most minimal
// representation — works at any size down to 16px favicon.
// ─────────────────────────────────────────────────────────────
function OrchyCurve({ size = 120, color = '#B8436B' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M92 24 C 92 58, 68 78, 42 82 C 58 92, 80 90, 92 78 C 104 66, 106 42, 92 24 Z"
        fill={color}
      />
      <path
        d="M40 96 C 42 82, 48 72, 60 66"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Mark C — Monogram "O": letterform built from two curved
// petals meeting in the middle. Reads as O and as an orchid profile.
// ─────────────────────────────────────────────────────────────
function OrchyMonogram({ size = 120, color = '#B8436B' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left petal half */}
      <path
        d="M60 14 C 32 14, 14 36, 14 62 C 14 88, 32 110, 60 110 L 60 86 C 44 86, 34 76, 34 62 C 34 48, 44 38, 60 38 Z"
        fill={color}
      />
      {/* Right petal half — slightly offset, creating the orchid lip negative space */}
      <path
        d="M60 14 C 88 14, 106 36, 106 62 C 106 88, 88 110, 60 110 L 60 86 C 76 86, 86 76, 86 62 C 86 48, 76 38, 60 38 Z"
        fill={color}
        opacity="0.82"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Mark D — Line orchid: single-stroke botanical illustration.
// Hairline elegance, editorial mood.
// ─────────────────────────────────────────────────────────────
function OrchyLine({ size = 120, color = '#B8436B', strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none">
        {/* Top petal */}
        <path d="M60 22 C 50 30, 46 42, 50 54 C 54 60, 66 60, 70 54 C 74 42, 70 30, 60 22 Z" />
        {/* Left petal */}
        <path d="M30 54 C 28 66, 36 76, 48 76 C 54 72, 56 62, 52 56 C 44 52, 34 52, 30 54 Z" />
        {/* Right petal */}
        <path d="M90 54 C 92 66, 84 76, 72 76 C 66 72, 64 62, 68 56 C 76 52, 86 52, 90 54 Z" />
        {/* Lower lip — signature orchid flare */}
        <path d="M48 76 C 48 88, 54 96, 60 98 C 66 96, 72 88, 72 76" />
        {/* Stem */}
        <path d="M60 98 L 60 110" />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Mark E — Two-petal interlace: two curves that cradle each other
// (two people, without the tired heart). The most "dating app"
// concept — but expressed as botany, not anatomy.
// ─────────────────────────────────────────────────────────────
function OrchyInterlace({ size = 120, color = '#B8436B', colorB }) {
  const c2 = colorB || color;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left petal leaning right */}
      <path
        d="M40 20 C 22 38, 20 62, 32 82 C 44 98, 62 98, 72 82 C 62 76, 54 66, 52 52 C 52 40, 48 28, 40 20 Z"
        fill={color}
      />
      {/* Right petal leaning left, overlapping */}
      <path
        d="M80 20 C 98 38, 100 62, 88 82 C 76 98, 58 98, 48 82 C 58 76, 66 66, 68 52 C 68 40, 72 28, 80 20 Z"
        fill={c2}
        opacity="0.78"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// WORDMARKS
// ─────────────────────────────────────────────────────────────

// Serif wordmark — editorial, Instrument Serif-style
function OrchyWordmarkSerif({ size = 80, color = '#2A1A1F', accent = '#B8436B', letterSpacing = '-0.03em' }) {
  return (
    <div style={{
      fontFamily: '"Instrument Serif", "Cormorant Garamond", Georgia, serif',
      fontSize: size,
      fontWeight: 400,
      color: color,
      letterSpacing,
      lineHeight: 1,
      fontStyle: 'normal',
      display: 'inline-flex',
      alignItems: 'baseline',
    }}>
      <span>orch</span>
      <span style={{ color: accent, fontStyle: 'italic' }}>y</span>
    </div>
  );
}

// Sans wordmark — refined grotesque
function OrchyWordmarkSans({ size = 64, color = '#2A1A1F', weight = 500, tracking = '0.16em' }) {
  return (
    <div style={{
      fontFamily: '"Inter Tight", "Söhne", -apple-system, sans-serif',
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing: tracking,
      lineHeight: 1,
      textTransform: 'uppercase',
    }}>
      ORCHY
    </div>
  );
}

// Serif + bloom lockup (primary)
function OrchyLockupVertical({ color = '#B8436B', textColor = '#2A1A1F' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <OrchyBloom size={88} color={color} />
      <OrchyWordmarkSerif size={56} color={textColor} accent={color} />
    </div>
  );
}

Object.assign(window, {
  OrchyPetal, OrchyBloom, OrchyCurve, OrchyMonogram, OrchyLine, OrchyInterlace,
  OrchyWordmarkSerif, OrchyWordmarkSans, OrchyLockupVertical,
});
