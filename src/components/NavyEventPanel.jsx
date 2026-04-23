import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useTilt } from '../hooks/useTilt';
import CapeCourseMap from './CapeCourseMap';
import { haptic } from '../lib/haptics';

// The Coastal Classic 2026 card — deep navy, gold type, SVG map,
// 4 courses, prize in focus, 19th hole.
export default function NavyEventPanel({ event }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-navy-800 text-cream-50 p-7 sm:p-8 lg:p-10 transition-transform duration-500 will-change-transform shadow-[0_14px_48px_rgba(15,20,32,0.22)] rounded-lg overflow-hidden"
    >
      <div className="grain opacity-40" />

      {/* Head */}
      <div className="text-center">
        <p className="font-display text-gold-400 text-[12.5px] tracking-[0.3em] uppercase">
          {event.shortName.toUpperCase()}
        </p>
        <h3 className="mt-3 font-display text-[22px] sm:text-[26px] lg:text-[28px] leading-tight text-cream-50">
          {event.dateLabel} <span className="text-gold-400">|</span> {event.location.toUpperCase()}
        </h3>
        <div className="mt-3 flex items-center justify-center">
          <span className="gold-rule" />
        </div>
      </div>

      {/* Body: map left, courses right */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-5 sm:gap-6">
        <div className="flex items-start justify-center md:justify-start">
          <CapeCourseMap className="w-32 sm:w-36 md:w-full h-auto" />
        </div>

        <div>
          <p className="text-[10.5px] tracking-[0.25em] uppercase text-gold-400 font-display mb-3">
            Secure Your Spot:
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
            {event.courses.map((c) => (
              <div key={c.name}>
                <p className="font-display text-gold-400 text-[14.5px] leading-tight">{c.name}</p>
                <p className="font-serif text-[12.5px] text-cream-100/80 leading-snug mt-0.5 italic">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer row: prize + 19th hole side by side */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-[1.35fr_1fr] gap-4">
        <div className="bg-navy-900/60 border border-gold-500/40 p-4 text-center rounded-md">
          <p className="font-display text-gold-400 text-[11px] tracking-[0.28em] uppercase">
            {event.prizeInFocus.headline}:
          </p>
          <p className="mt-2 font-serif italic text-cream-50 text-[14.5px] leading-snug">
            {event.prizeInFocus.title}
          </p>
        </div>
        <div className="bg-gold-500 text-navy-900 p-4 text-center rounded-md">
          <p className="font-display text-navy-900 text-[11px] tracking-[0.28em] uppercase">
            {event.nineteenthHole.headline}:
          </p>
          <p className="mt-2 font-serif italic text-navy-900 text-[14.5px] leading-snug font-semibold">
            {event.nineteenthHole.title}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-7 text-center">
        <Link
          to={event.ctaTo}
          onClick={() => haptic(10)}
          className="press-physics brass-glint inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
        >
          {event.ctaLabel}
          <ArrowUpRight size={14} weight="bold" />
        </Link>
      </div>
    </div>
  );
}
