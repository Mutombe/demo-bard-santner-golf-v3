import React from 'react';
import { useTilt } from '../hooks/useTilt';

// Twin event card for the hero overlap row.
// Gold double-line frame around a cream/white fill.
// Title in Playfair, CTA button passed as children.
export default function GoldFrameCard({ title, children, tone = 'white' }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2.5);
  const bg = tone === 'cream' ? 'bg-cream-50' : 'bg-white';

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`gold-frame ${bg} transition-transform duration-500 will-change-transform`}
    >
      <div className="flex flex-col items-center text-center px-6 sm:px-8 lg:px-10 py-8 sm:py-10 min-h-[220px] justify-between gap-6">
        <h3 className="font-display text-[26px] sm:text-[28px] lg:text-[32px] leading-[1.15] text-navy-900 text-balance max-w-xs">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
