import React from 'react';
import { Link } from 'react-router-dom';
import { useTilt } from '../hooks/useTilt';
import { haptic } from '../lib/haptics';

// NOTE: the card body uses `bg-white`; the gradient overlay at the bottom
// of the image fades to the exact same white (#FFFFFF) so the image reads
// as dissolving into the card body rather than butting against a hard edge.
export default function PastEventCard({ event }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(3);

  return (
    <Link
      to={`/past-events/${event.slug}`}
      onClick={() => haptic(6)}
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group block bg-white transition-transform duration-500 will-change-transform border border-cream-300 hover:border-gold-300 rounded-lg overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* Soft fade — image dissolves into the card body (#FFFFFF) */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 70%, #FFFFFF 100%)' }}
        />
        <span className="absolute bottom-3 left-3 bg-navy-900/85 text-gold-300 text-[9.5px] tracking-[0.22em] uppercase px-2.5 py-1 font-medium rounded-md z-10">
          {event.label}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h4 className="font-display text-[16.5px] sm:text-[18px] leading-snug text-navy-900 group-hover:text-gold-700 transition-colors text-balance">
          {event.title}
        </h4>
        <p className="mt-1.5 text-[12px] text-ink-400 font-serif italic">{event.date}</p>
      </div>
    </Link>
  );
}
