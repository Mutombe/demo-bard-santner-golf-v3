import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, X, ArrowRight } from '@phosphor-icons/react';
import { coastalClassic, kwekweGolfDay, pastEvents } from '../data/siteData';

const index = [
  { title: 'Coastal Classic 2026', to: '/coastal-classic', blurb: 'Invitation-only championship, Cape Town, Sept 13–19.' },
  { title: 'Kwekwe Golf Day 2026', to: '/kwekwe-golf-day', blurb: 'Open registration, Midlands, July 2026.' },
  { title: 'Sponsorship', to: '/sponsorship', blurb: 'Partner with the 2026 season — four tiers.' },
  { title: 'Past Events (2025)', to: '/past-events', blurb: 'The Royal Harare archive.' },
  { title: 'Sign In / RSVP', to: '/rsvp', blurb: 'Confirm your Coastal Classic seat.' },
  { title: 'Contact', to: '/contact', blurb: 'Offices in Harare and Cape Town.' },
  ...coastalClassic.courses.map(c => ({ title: c.name, to: '/coastal-classic', blurb: c.blurb })),
  ...pastEvents.map(e => ({ title: e.title, to: `/past-events/${e.slug}`, blurb: e.date })),
];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const n = q.trim().toLowerCase();
    return index.filter(i => (i.title + ' ' + i.blurb).toLowerCase().includes(n)).slice(0, 10);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-cream-50 overflow-y-auto">
      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-10 pt-10 pb-20">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-6 lg:top-8 lg:right-10 h-10 w-10 flex items-center justify-center text-navy-900 hover:text-gold-700"
        >
          <X size={22} />
        </button>
        <p className="font-serif italic text-gold-700 text-xl text-center mt-8">search the site</p>
        <div className="relative mt-3 max-w-2xl mx-auto">
          <MagnifyingGlass size={22} className="absolute left-0 top-1/2 -translate-y-1/2 text-ink-300" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'Clovelly', 'Kwekwe', 'sponsorship'…"
            className="w-full pl-10 pr-4 py-4 bg-transparent border-b border-ink-200 focus:border-gold-500 outline-none text-2xl sm:text-3xl font-display italic text-navy-900 placeholder:text-ink-300"
          />
        </div>
        <div className="mt-10 max-w-2xl mx-auto">
          {q.trim() && results.length === 0 && (
            <p className="text-center font-display text-2xl text-navy-900">Nothing here matches.</p>
          )}
          {results.map((r) => (
            <Link
              key={r.title}
              to={r.to}
              onClick={onClose}
              className="group block py-4 border-b border-cream-300 hover:border-gold-400"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg text-navy-900 group-hover:text-gold-700">{r.title}</h4>
                  <p className="text-sm text-ink-500 mt-0.5 font-serif italic">{r.blurb}</p>
                </div>
                <ArrowRight size={16} className="mt-1 text-gold-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
