import React from 'react';
import { Link } from 'react-router-dom';
import { useTilt } from '../hooks/useTilt';
import { haptic } from '../lib/haptics';

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
      className="group block bg-white transition-transform duration-500 will-change-transform border border-cream-300 hover:border-gold-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="absolute bottom-3 left-3 bg-navy-900/85 text-gold-300 text-[9.5px] tracking-[0.22em] uppercase px-2.5 py-1 font-medium">
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
