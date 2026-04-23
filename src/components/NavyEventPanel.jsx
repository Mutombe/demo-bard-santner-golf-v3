import React from 'react';
import { useTilt } from '../hooks/useTilt';
import CapePeninsulaMapSvg from './CapePeninsulaMapSvg';

// The Coastal Classic 2026 homepage card — deep navy, gold type,
// lightweight SVG peninsula map (Leaflet stays on the detail page),
// 2x2 course grid, prize + 19th-hole footer.
//
// Layout matches the client mockup:
//   1. Single-line gold Playfair header  "COASTAL CLASSIC 2026 | SEPT 13–19, 2026 | CAPE TOWN"
//   2. Thin gold hairline rule
//   3. Body: SVG map on the left, 2x2 course grid on the right
//   4. Footer row: prize (wider) + 19th hole (narrower)
//   5. NO CTA button inside this card — action lives on the twin framed cards above.
export default function NavyEventPanel({ event }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-navy-800 text-cream-50 p-6 sm:p-7 lg:p-8 transition-transform duration-500 will-change-transform shadow-[0_14px_48px_rgba(15,20,32,0.22)] rounded-lg overflow-hidden"
    >
      <div className="grain opacity-40" />

      {/* ── 1. Single-line gold header ─────────────────────────────── */}
      <div className="relative text-center">
        <h3
          className="font-display text-gold-400 tracking-[0.12em] leading-tight text-balance"
          style={{ fontSize: 'clamp(0.95rem, 2.1vw, 1.35rem)' }}
        >
          <span className="whitespace-nowrap">
            {event.shortName.toUpperCase()}
          </span>
          <span className="mx-2 sm:mx-3 text-gold-500">|</span>
          <span className="whitespace-nowrap">{event.dateLabel}</span>
          <span className="mx-2 sm:mx-3 text-gold-500">|</span>
          <span className="whitespace-nowrap">{event.location.toUpperCase()}</span>
        </h3>

        {/* ── 2. Thin gold hairline rule under header ──────────────── */}
        <div className="mt-3 sm:mt-4 flex justify-center">
          <span
            aria-hidden
            className="block h-px bg-gold-500/70"
            style={{ width: '60%' }}
          />
        </div>
      </div>

      {/* ── 3. Body: 2-column — SVG map | 2x2 course grid ──────────── */}
      <div className="relative mt-6 sm:mt-7 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
        {/* Left: SVG peninsula map (lightweight, editorial) */}
        <div className="flex items-start justify-center md:justify-start">
          <CapePeninsulaMapSvg className="w-full max-w-[260px]" />
        </div>

        {/* Right: 2x2 course grid */}
        <div>
          <p className="text-[10.5px] tracking-[0.25em] uppercase text-gold-400 font-display mb-4">
            Secure Your Spot:
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {event.courses.map((c) => (
              <div key={c.name}>
                <p className="font-display text-gold-400 text-[14.5px] leading-tight">
                  <span className="text-gold-500 mr-1">·</span>
                  {c.name}
                </p>
                <p className="font-serif italic text-[12.5px] text-cream-100/80 leading-snug mt-1">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. Footer row: Prize (wider) + 19th Hole (narrower) ─────── */}
      <div className="relative mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-4">
        {/* Prize in focus — darker navy card with gold hairline */}
        <div className="bg-navy-900 border border-gold-500/40 p-4 sm:p-5 text-center rounded-md">
          <p className="font-display text-gold-400 text-[10.5px] tracking-[0.28em] uppercase">
            {event.prizeInFocus.headline}:
          </p>
          <p className="mt-2 font-serif italic text-cream-50 text-[14px] sm:text-[14.5px] leading-snug text-balance">
            {event.prizeInFocus.title}
          </p>
        </div>

        {/* 19th Hole — solid gold card */}
        <div className="bg-gold-500 text-navy-900 p-4 sm:p-5 text-center rounded-md">
          <p className="font-display text-navy-900 text-[10.5px] tracking-[0.28em] uppercase">
            {event.nineteenthHole.headline}:
          </p>
          <p className="mt-2 font-serif italic text-navy-900 text-[14px] sm:text-[14.5px] leading-snug font-semibold text-balance">
            {event.nineteenthHole.title}
          </p>
        </div>
      </div>

      {/* ── 5. No CTA button — matches mockup. ──────────────────────── */}
    </div>
  );
}
