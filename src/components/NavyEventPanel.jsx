import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useTilt } from '../hooks/useTilt';
import { haptic } from '../lib/haptics';

export default function NavyEventPanel({ event }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative bg-navy-900 text-cream-50 transition-transform duration-500 will-change-transform shadow-[0_18px_56px_rgba(8,14,25,0.32)] rounded-lg overflow-hidden h-full flex flex-col min-h-[480px]"
    >
      <div className="absolute inset-0">
        <img
          src={event.heroImage}
          alt="Cape Town coastal scene — the Coastal Classic"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: 'center 55%' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/85 to-navy-900/20" />
      </div>

      <div className="grain opacity-25 pointer-events-none absolute inset-0" />

      <div className="relative flex flex-col h-full px-7 sm:px-9 lg:px-10 pt-7 sm:pt-8 lg:pt-10 pb-7 sm:pb-8 lg:pb-9">
        <p className="font-display text-gold-300 text-[10.5px] sm:text-[11px] tracking-[0.34em] uppercase">
          {event.dateLabel}
          <span className="text-gold-300/40 mx-2">·</span>
          {event.location}
        </p>

        <div className="mt-auto">
          <h3
            className="font-display text-cream-50 leading-[0.95] text-balance"
            style={{ fontSize: 'clamp(2.1rem, 5.4vw, 3.4rem)', textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
          >
            The Coastal
            <br />
            <span className="font-serif italic text-gold-300">Classic.</span>
          </h3>

          <p className="mt-5 font-serif italic text-cream-100/80 text-[14px] sm:text-[15px] leading-[1.6] max-w-[30ch]">
            A week reserved for those whose game, and whose company, set the standard.
          </p>
        </div>

        <div className="mt-9">
          <Link
            to={event.ctaTo || '/rsvp'}
            onClick={() => haptic(10)}
            className="press-physics brass-glint w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
          >
            {event.statusLong || event.ctaLabel || 'Invitation Only — RSVP Gateway'}
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
