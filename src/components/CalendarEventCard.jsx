import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useTilt } from '../hooks/useTilt';
import { haptic } from '../lib/haptics';
import { kwekweGolfDay } from '../data/siteData';
import CountUp from './CountUp';

// The Kwekwe Golf Day card — simple editorial card matching NavyEventPanel's
// height. Header (date + location), course photo, single Register CTA.
// The full registration form lives at /kwekwe-golf-day/register.
export default function CalendarEventCard() {
  const event = kwekweGolfDay;
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-white text-ink-900 transition-transform duration-500 will-change-transform shadow-[0_14px_48px_rgba(15,20,32,0.10)] border border-cream-300 rounded-lg overflow-hidden h-full flex flex-col"
    >
      {/* Head */}
      <div className="text-center px-6 sm:px-7 lg:px-9 pt-6 sm:pt-7 lg:pt-9">
        <p className="font-display text-gold-700 text-[12.5px] tracking-[0.3em] uppercase">
          {event.shortName.toUpperCase()}
        </p>
        <h3 className="mt-3 font-display text-[22px] sm:text-[26px] lg:text-[28px] leading-tight text-navy-900">
          <CountUp
            from={2020}
            to={2026}
            duration={2000}
            format={(n) => `JULY ${Math.round(n)}`}
          />{' '}
          <span className="text-gold-600">|</span> {event.location.toUpperCase()}
        </h3>
        <div className="mt-3 flex items-center justify-center">
          <span className="gold-rule" />
        </div>
      </div>

      {/* Body: photo */}
      <div className="relative min-h-[260px] overflow-hidden flex-1 mt-5">
        <img
          src={event.cardPhoto}
          alt="Kwekwe Golf Club parkland fairway"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/45 via-transparent to-transparent" />
      </div>

      {/* Footer — single CTA button */}
      <div className="px-6 sm:px-7 lg:px-9 py-6 sm:py-7 lg:py-8 border-t border-cream-200 mt-auto">
        <Link
          to="/kwekwe-golf-day/register"
          onClick={() => haptic(10)}
          className="press-physics brass-glint w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
        >
          Register Now
          <ArrowUpRight size={14} weight="bold" />
        </Link>
        <p className="mt-3 text-center text-[11px] tracking-[0.18em] uppercase font-display text-gold-700">
          Open to all · Individual & Four-Ball
        </p>
      </div>
    </div>
  );
}
