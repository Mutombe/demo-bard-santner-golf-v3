import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useTilt } from '../hooks/useTilt';
import { haptic } from '../lib/haptics';
import { kwekweGolfDay } from '../data/siteData';

export default function CalendarEventCard() {
  const event = kwekweGolfDay;
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative bg-cream-50 text-ink-900 transition-transform duration-500 will-change-transform shadow-[0_18px_56px_rgba(15,20,32,0.10)] border border-cream-300 rounded-lg overflow-hidden h-full flex flex-col min-h-[480px]"
    >
      <div className="relative flex-1 min-h-[280px] overflow-hidden">
        <img
          src={event.cardPhoto}
          alt="Kwekwe Golf Club parkland fairway"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* White-fade — dissolves the photo into the cream text block below */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none bg-gradient-to-b from-transparent via-cream-50/60 to-cream-50" />
      </div>

      <div className="flex flex-col px-7 sm:px-9 lg:px-10 pt-6 sm:pt-7 pb-7 sm:pb-8 lg:pb-9">
        <p className="font-display text-gold-700 text-[10.5px] sm:text-[11px] tracking-[0.34em] uppercase">
          {event.shortName}
        </p>

        <h3 className="mt-3 font-display text-navy-900 leading-[1.05] text-[26px] sm:text-[30px] lg:text-[32px]">
          {event.dateLabel}
          <span className="font-serif italic text-gold-600 font-normal"> · </span>
          <span className="font-serif italic text-gold-600 font-normal">{event.location}.</span>
        </h3>

        <p className="mt-3 font-serif italic text-ink-500 text-[14px] sm:text-[15px] leading-[1.55] max-w-[34ch]">
          A Midlands Saturday, well spent — open to all, individual entry or corporate four-ball.
        </p>

        <div className="mt-auto pt-7">
          <Link
            to="/kwekwe-golf-day/register"
            onClick={() => haptic(10)}
            className="press-physics brass-glint w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
          >
            {event.ctaLabel || 'Register Now'}
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
