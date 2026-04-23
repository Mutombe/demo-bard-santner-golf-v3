import React from 'react';

/**
 * Stylised SVG of the Cape Peninsula + False Bay + Stellenbosch area —
 * a lightweight alternative to Leaflet for the homepage Coastal Classic card.
 *
 * The geography is editorial, not cartographic: the peninsula, False Bay,
 * and the Stellenbosch winelands are sketched in gold stroke on a cream fill
 * so the card reads as an "old-world" map inset. Four numbered dots mark
 * the four courses in the order they are played (I–IV).
 *
 * Coordinate frame: 300 × 360 viewBox.
 *   Top-left  (0, 0)   ≈ NW coast, north of Blaauwberg
 *   Bottom    ≈ Cape Point
 *   Right     ≈ Stellenbosch / Helderberg
 */
export default function CapePeninsulaMapSvg({ className = '' }) {
  const DOTS = [
    // Ordered I–IV as played during the Coastal Classic week.
    { roman: 'I', x: 132, y: 118, label: 'King David Mowbray' },  // NW, city-side
    { roman: 'II', x: 118, y: 232, label: 'Clovelly' },            // S, Silvermine Valley
    { roman: 'III', x: 252, y: 138, label: 'De Zalze' },           // E, Stellenbosch
    { roman: 'IV', x: 146, y: 142, label: 'Rondebosch' },          // just NE of Mowbray
  ];

  return (
    <div className={`gold-frame bg-cream-50 ${className}`}>
      <svg
        viewBox="0 0 300 360"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto rounded-md"
        role="img"
        aria-label="Stylised map of the Cape Peninsula showing the four Coastal Classic courses"
      >
        {/* Cream/ivory canvas */}
        <rect width="300" height="360" fill="#FBF8F1" />

        {/* Subtle ocean hatch — very light, editorial feel */}
        <defs>
          <pattern id="oceanHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#C7A352" strokeWidth="0.35" opacity="0.22" />
          </pattern>
        </defs>

        {/* Ocean (Atlantic + False Bay) — hatched fill behind the peninsula */}
        <rect width="300" height="360" fill="url(#oceanHatch)" opacity="0.75" />

        {/* ATLANTIC label */}
        <text
          x="40"
          y="50"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="8"
          fill="#8A6D2D"
          letterSpacing="3"
          opacity="0.8"
        >
          ATLANTIC
        </text>

        {/* FALSE BAY label */}
        <text
          x="180"
          y="300"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="8"
          fill="#8A6D2D"
          letterSpacing="3"
          opacity="0.8"
        >
          FALSE BAY
        </text>

        {/* Cape Peninsula landmass — stylised silhouette.
            Starts at the NW coast (top-left), sweeps east to include the
            city basin, dips south along the Atlantic side, loops around
            Cape Point, and returns up the False Bay coast. */}
        <path
          d="
            M 60 80
            C 80 72, 108 68, 130 76
            L 160 82
            C 178 86, 196 96, 206 114
            L 212 132
            C 208 148, 196 158, 184 168
            L 170 184
            C 160 200, 150 216, 144 236
            L 138 260
            C 134 278, 126 294, 112 304
            L 94 316
            C 80 322, 64 318, 54 302
            L 48 280
            C 46 256, 52 232, 62 210
            L 74 184
            C 84 160, 80 134, 68 114
            Z
          "
          fill="#EEE6D7"
          stroke="#C7A352"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />

        {/* Table Mountain ridge — a single gold hairline running
            roughly north–south, hinting at the city's backbone. */}
        <path
          d="M 118 108 Q 128 126 122 150 Q 118 174 128 194"
          fill="none"
          stroke="#C7A352"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.55"
        />

        {/* Stellenbosch / winelands — separate landmass east of False Bay */}
        <path
          d="
            M 232 96
            C 250 92, 276 98, 286 116
            L 292 140
            C 290 158, 282 172, 268 178
            L 246 182
            C 228 178, 218 166, 216 150
            L 220 124
            C 222 112, 226 102, 232 96
            Z
          "
          fill="#EEE6D7"
          stroke="#C7A352"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />

        {/* STELLENBOSCH label */}
        <text
          x="232"
          y="170"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="7"
          fill="#8A6D2D"
          letterSpacing="2.4"
          opacity="0.85"
        >
          STELLENBOSCH
        </text>

        {/* CAPE TOWN label (inside the peninsula) */}
        <text
          x="104"
          y="166"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="7.5"
          fill="#8A6D2D"
          letterSpacing="2.6"
          opacity="0.9"
        >
          CAPE TOWN
        </text>

        {/* Compass rose — small, top-right */}
        <g transform="translate(268, 48)" opacity="0.65">
          <circle r="9" fill="none" stroke="#C7A352" strokeWidth="0.8" />
          <path d="M 0 -9 L 2 0 L 0 9 L -2 0 Z" fill="#C7A352" />
          <text
            x="0"
            y="-12"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="6"
            fill="#8A6D2D"
            fontWeight="700"
          >
            N
          </text>
        </g>

        {/* Four course dots — gold-filled, navy centre, roman numeral label */}
        {DOTS.map((d) => (
          <g key={d.roman}>
            {/* Soft glow behind each dot */}
            <circle cx={d.x} cy={d.y} r="8" fill="#C7A352" opacity="0.18" />
            {/* Main dot */}
            <circle
              cx={d.x}
              cy={d.y}
              r="4.5"
              fill="#C7A352"
              stroke="#FBF8F1"
              strokeWidth="1.2"
            />
            {/* Roman numeral, just to the right of the dot */}
            <text
              x={d.x + 8}
              y={d.y + 3}
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="9"
              fontWeight="700"
              fill="#0F1A2B"
              letterSpacing="0.4"
            >
              {d.roman}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
