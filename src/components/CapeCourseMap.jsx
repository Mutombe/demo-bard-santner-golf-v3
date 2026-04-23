import React from 'react';

// Stylised Cape Peninsula / False Bay map — gold strokes on transparent bg.
// Course dots are positioned absolutely with label hints.
export default function CapeCourseMap({ courses = [], className = '' }) {
  // Positions for the 4 course dots — tuned to approximate their real locations
  // on the stylised peninsula outline.
  const dots = [
    { name: 'King David Mowbray', x: 38, y: 32 },
    { name: 'Clovelly', x: 52, y: 78 },
    { name: 'De Zalze', x: 82, y: 28 },
    { name: 'Rondebosch', x: 42, y: 42 },
  ];

  return (
    <svg
      viewBox="0 0 100 110"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Map of the four Cape Town courses"
    >
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C2E4C" />
          <stop offset="100%" stopColor="#0F1A2B" />
        </linearGradient>
        <filter id="soft">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      {/* Sea bg subtle */}
      <rect x="0" y="0" width="100" height="110" fill="url(#sea)" opacity="0" />

      {/* Peninsula outline — stylised Cape Peninsula + False Bay cove */}
      <path
        d="M 30 6
           C 32 18, 28 28, 30 40
           C 32 52, 26 62, 28 74
           C 30 84, 36 92, 42 96
           C 48 100, 56 100, 60 94
           C 64 88, 62 80, 58 74
           C 54 68, 56 62, 60 58
           C 66 52, 74 48, 82 44
           C 90 40, 94 34, 92 26
           C 90 18, 82 12, 72 10
           C 62 8, 50 8, 40 6 Z"
        fill="none"
        stroke="#C7A352"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />

      {/* Inner contour for depth */}
      <path
        d="M 34 12
           C 35 22, 32 32, 34 44
           C 36 56, 30 66, 34 80
           C 38 92, 50 96, 58 90
           C 62 86, 60 78, 56 72"
        fill="none"
        stroke="#C7A352"
        strokeWidth="0.4"
        opacity="0.45"
        strokeDasharray="1.2 1.5"
      />

      {/* Dashed coastline flourish */}
      <path
        d="M 12 52 Q 22 48, 28 56 T 40 58"
        fill="none"
        stroke="#C7A352"
        strokeWidth="0.35"
        opacity="0.4"
        strokeDasharray="1.5 1.5"
      />

      {/* North indicator */}
      <g transform="translate(88,10)">
        <circle cx="0" cy="0" r="2.5" fill="none" stroke="#C7A352" strokeWidth="0.3" opacity="0.6" />
        <text x="0" y="-3.5" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="2.6" fill="#C7A352" opacity="0.9">N</text>
        <line x1="0" y1="0" x2="0" y2="-2.2" stroke="#C7A352" strokeWidth="0.35" />
      </g>

      {/* Course dots */}
      {dots.map((d, i) => (
        <g key={d.name}>
          <circle cx={d.x} cy={d.y} r="2.4" fill="#C7A352" opacity="0.22" filter="url(#soft)" />
          <circle cx={d.x} cy={d.y} r="1.1" fill="#C7A352" />
          <circle cx={d.x} cy={d.y} r="0.4" fill="#FBF8F1" />
          <line
            x1={d.x} y1={d.y}
            x2={d.x + (i % 2 === 0 ? -3 : 3)} y2={d.y - 2}
            stroke="#C7A352"
            strokeWidth="0.2"
            opacity="0.6"
          />
        </g>
      ))}

      {/* False Bay label */}
      <text x="62" y="86" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="2.8" fill="#C7A352" opacity="0.7">False Bay</text>
      <text x="12" y="46" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="2.8" fill="#C7A352" opacity="0.7">Atlantic</text>
    </svg>
  );
}
