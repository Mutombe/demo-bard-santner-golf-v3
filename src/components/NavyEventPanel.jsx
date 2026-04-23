import React from 'react';
import { useTilt } from '../hooks/useTilt';
import CapePeninsulaMapSvg from './CapePeninsulaMapSvg';

// The Coastal Classic 2026 homepage card — a tight editorial composition
// in deep navy and gold. Built to match the client mockup exactly:
//
//   1. HEADER  — two deliberate lines, centred. Title on top in Playfair,
//                meta line below in tracked gold caps. No wrap drama.
//   2. BODY    — desktop grid with a FIXED 200px map column so the map can
//                never stretch tall; right column holds eyebrow + 2x2
//                courses with Roman-numeral markers keyed to the map.
//   3. FOOTER  — asymmetric 1.6fr / 1fr. Prize (navy + gold hairline) and
//                19th Hole (solid gold). Tight padding, single-line titles
//                where possible.
//
// Sizing discipline: no min-h, tight padding, small deliberate margins
// (mt-3 / mt-5). The card sizes to its content so both homepage cards
// settle at compatible heights without forcing empty air.
const MARKERS = ['I', 'II', 'III', 'IV'];

export default function NavyEventPanel({ event }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-navy-800 text-cream-50 p-5 sm:p-6 lg:p-7 transition-transform duration-500 will-change-transform shadow-[0_14px_48px_rgba(15,20,32,0.22)] rounded-lg overflow-hidden flex flex-col"
    >
      <div className="grain opacity-40 pointer-events-none absolute inset-0" />

      {/* ── A) HEADER — two-line editorial lockup ──────────────────────── */}
      <header className="relative text-center">
        <h3
          className="font-display text-gold-400 tracking-[0.1em] leading-[1.15] uppercase"
          style={{ fontSize: 'clamp(0.98rem, 1.6vw, 1.2rem)' }}
        >
          Coastal Classic 2026
        </h3>
        <p
          className="mt-1 font-display text-gold-300/90 uppercase leading-tight"
          style={{ fontSize: 'clamp(0.68rem, 1vw, 0.8rem)', letterSpacing: '0.22em' }}
        >
          <span className="whitespace-nowrap">{event.dateLabel || 'Sept 13–19, 2026'}</span>
          <span className="mx-2 text-gold-500/70" aria-hidden>·</span>
          <span className="whitespace-nowrap">
            {(event.location || 'Cape Town').toUpperCase()}
          </span>
        </p>

        {/* Thin gold hairline rule — short, centred, deliberate */}
        <div className="mt-2.5 flex justify-center">
          <span aria-hidden className="block h-px w-20 bg-gold-500/70" />
        </div>
      </header>

      {/* ── B) BODY — fixed-width map + eyebrow + 2x2 courses ──────────── */}
      <div className="relative mt-4 grid grid-cols-1 md:grid-cols-[190px_1fr] lg:grid-cols-[210px_1fr] gap-5 lg:gap-6 items-start">
        {/* Left: map specimen — constrained on mobile so it reads as an inset */}
        <div className="mx-auto md:mx-0 w-full max-w-[180px] md:max-w-none">
          <div className="gold-frame bg-cream-50 !p-[6px]">
            <CapePeninsulaMapSvg bare className="w-full" />
          </div>
        </div>

        {/* Right: eyebrow + hairline + 2x2 course grid */}
        <div className="flex flex-col min-w-0">
          <p className="text-[10px] tracking-[0.26em] uppercase text-gold-400 font-display">
            Secure Your Spot:
          </p>
          <span aria-hidden className="block mt-1.5 h-px w-full bg-gold-500/40" />

          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
            {event.courses.map((c, i) => (
              <div key={c.name} className="min-w-0">
                <p className="font-display text-gold-400 text-[13.5px] lg:text-[14.5px] leading-tight flex items-baseline gap-1.5">
                  <span className="text-gold-500/90 font-serif text-[10.5px] tracking-[0.05em] shrink-0">
                    {MARKERS[i] || '·'}
                  </span>
                  <span className="truncate">{c.name}</span>
                </p>
                <p className="font-serif italic text-cream-100/80 text-[11.5px] lg:text-[12px] leading-snug mt-0.5">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── C) FOOTER — asymmetric, compact, both cells breathe the same ── */}
      <div className="relative mt-5 lg:mt-6 grid grid-cols-[1.6fr_1fr] gap-2.5">
        {/* Prize — wider, navy bg, gold hairline border */}
        <div className="bg-navy-900 border border-gold-500/40 px-3 py-2.5 text-center rounded-md flex flex-col justify-center">
          <p className="font-display text-gold-400 text-[9.5px] tracking-[0.28em] uppercase leading-none">
            {event.prizeInFocus.headline}
          </p>
          <p className="mt-1.5 font-serif italic text-cream-50 text-[12px] lg:text-[13px] leading-snug text-balance">
            {event.prizeInFocus.title}.
          </p>
        </div>

        {/* 19th Hole — narrower, solid gold, navy type */}
        <div className="bg-gold-500 text-navy-900 px-3 py-2.5 text-center rounded-md flex flex-col justify-center">
          <p className="font-display text-navy-900/80 text-[9.5px] tracking-[0.28em] uppercase leading-none">
            {event.nineteenthHole.headline}
          </p>
          <p className="mt-1.5 font-serif italic text-navy-900 text-[12px] lg:text-[13px] leading-snug font-semibold text-balance">
            {event.nineteenthHole.title}.
          </p>
        </div>
      </div>
    </div>
  );
}
