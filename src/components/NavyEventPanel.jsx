import React from 'react';
import { useTilt } from '../hooks/useTilt';
import CapePeninsulaMapSvg from './CapePeninsulaMapSvg';
import CountUp from './CountUp';

// The Coastal Classic 2026 homepage card — deep navy, gold type,
// lightweight SVG peninsula map (Leaflet stays on the detail page),
// 2x2 course grid, asymmetric prize + 19th-hole footer.
//
// Layout mirrors the client mockup:
//   1. HEADER  — single centred line with pipe separators
//                "COASTAL CLASSIC 2026 | SEPT 13-19, 2026 | CAPE TOWN"
//   2. BODY    — 2-col grid, map left (40%), 2x2 courses right (60%)
//   3. FOOTER  — asymmetric 2-col, prize (1.65fr) + 19th hole (1fr)
//
// Sibling-card symmetry: NO fixed min-h — instead relies on the parent
// grid's default items-stretch so this card and the Kwekwe card match
// the taller one's height. We use `flex flex-col` so the footer can pin
// to `mt-auto` and the body can `flex-1` to absorb the slack.
export default function NavyEventPanel({ event }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-navy-800 text-cream-50 p-6 sm:p-7 lg:p-9 transition-transform duration-500 will-change-transform shadow-[0_14px_48px_rgba(15,20,32,0.22)] rounded-lg overflow-hidden h-full flex flex-col gap-5 sm:gap-6"
    >
      <div className="grain opacity-40 pointer-events-none absolute inset-0" />

      {/* ── A) HEADER — one centred line, pipe separators ───────────── */}
      <header className="relative text-center">
        <h3
          className="font-display text-gold-400 tracking-[0.1em] leading-tight flex flex-col md:flex-row items-center justify-center gap-y-1 md:gap-y-0"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
        >
          <span className="whitespace-nowrap">
            COASTAL CLASSIC{' '}
            <CountUp
              from={1898}
              to={2026}
              duration={2000}
              format={(n) => Math.round(n).toString()}
            />
          </span>
          <span className="hidden md:inline mx-2 lg:mx-3 text-gold-500">|</span>
          <span className="whitespace-nowrap">
            SEPT{' '}
            <CountUp from={1} to={13} duration={1700} format={(n) => Math.round(n).toString()} />
            <span>–</span>
            <CountUp
              from={1}
              to={19}
              duration={1700}
              startDelay={150}
              format={(n) => Math.round(n).toString()}
            />
            , 2026
          </span>
          <span className="hidden md:inline mx-2 lg:mx-3 text-gold-500">|</span>
          <span className="whitespace-nowrap">
            {(event.location || 'CAPE TOWN').toUpperCase()}
          </span>
        </h3>

        {/* Thin gold hairline rule under header */}
        <div className="mt-3 sm:mt-4 flex justify-center">
          <span
            aria-hidden
            className="block h-px bg-gold-500/70"
            style={{ width: '60%' }}
          />
        </div>
      </header>

      {/* ── B) BODY — map (40%) + 2x2 course grid (60%) ──────────────── */}
      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(180px,40%)_1fr] gap-6 items-start flex-1">
        {/* Left column: SVG peninsula map in gold-frame cream card */}
        <div className="flex items-start justify-center md:justify-start">
          <CapePeninsulaMapSvg className="w-full max-w-[240px]" />
        </div>

        {/* Right column: eyebrow + hairline + 2x2 course grid */}
        <div className="flex flex-col">
          <p className="text-[10.5px] tracking-[0.22em] uppercase text-gold-400 font-display">
            Secure Your Spot:
          </p>
          <span
            aria-hidden
            className="block mt-2 h-px bg-gold-500/50"
            style={{ width: '100%' }}
          />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            {event.courses.map((c) => (
              <div key={c.name}>
                <p className="font-display text-gold-400 text-[15px] sm:text-[16px] leading-tight">
                  <span className="text-gold-500 mr-1">·</span>
                  {c.name}
                </p>
                <p className="font-serif italic text-[13px] text-cream-100/80 leading-snug mt-1">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── C) FOOTER — asymmetric 2-col (1.65fr / 1fr) ──────────────── */}
      <div className="relative grid grid-cols-1 sm:grid-cols-[1.65fr_1fr] gap-3 mt-auto">
        {/* Prize — wider, navy bg, gold hairline */}
        <div className="bg-navy-900 border border-gold-500/40 px-4 py-3.5 sm:px-5 sm:py-4 text-center rounded-md flex flex-col justify-center">
          <p className="font-display text-gold-400 text-[10px] sm:text-[10.5px] tracking-[0.26em] uppercase">
            {event.prizeInFocus.headline}
          </p>
          <p className="mt-1.5 font-serif italic text-cream-50 text-[14px] leading-snug text-balance">
            {event.prizeInFocus.title}.
          </p>
        </div>

        {/* 19th Hole — narrower, solid gold, navy type */}
        <div className="bg-gold-500 text-navy-900 px-4 py-3.5 sm:px-5 sm:py-4 text-center rounded-md flex flex-col justify-center">
          <p className="font-display text-navy-900 text-[10px] sm:text-[10.5px] tracking-[0.26em] uppercase">
            {event.nineteenthHole.headline}
          </p>
          <p className="mt-1.5 font-serif italic text-navy-900 text-[14px] leading-snug font-semibold text-balance">
            {event.nineteenthHole.title}.
          </p>
        </div>
      </div>
    </div>
  );
}
