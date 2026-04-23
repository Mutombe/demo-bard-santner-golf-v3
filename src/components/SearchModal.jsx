import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, X, ArrowRight } from '@phosphor-icons/react';
import { coastalClassic, kwekweGolfDay, pastEvents } from '../data/siteData';

// Full-screen search overlay. Three content groups:
//   - Events     — the two 2026 fixtures + Coastal Classic courses
//   - Past Events — every entry in the 2025 archive
//   - Pages      — static site pages
//
// UX:
//   - Opens from the magnifying-glass button in Navbar
//   - Auto-focuses the input; Escape closes; ArrowUp/Down move active result;
//     Enter follows it
//   - Body scroll is locked while the overlay is open
function buildIndex() {
  return [
    // Events
    { group: 'Events', title: 'Coastal Classic 2026', to: '/coastal-classic', blurb: 'Invitation-only championship · Cape Town · Sept 13–19, 2026.' },
    { group: 'Events', title: 'Kwekwe Golf Day 2026', to: '/kwekwe-golf-day', blurb: 'Open registration · Midlands · July 2026.' },
    ...(coastalClassic.courses || []).map(c => ({
      group: 'Events',
      title: c.name,
      to: '/coastal-classic',
      blurb: c.blurb || 'A Coastal Classic round.',
    })),

    // Past Events (2025)
    ...(pastEvents || []).map(e => ({
      group: 'Past Events',
      title: e.title,
      to: `/past-events/${e.slug}`,
      blurb: e.date,
    })),

    // Pages
    { group: 'Pages', title: 'Home', to: '/', blurb: 'The 2026 season at a glance.' },
    { group: 'Pages', title: 'Coastal Classic', to: '/coastal-classic', blurb: 'The invitation-only Cape week.' },
    { group: 'Pages', title: 'Kwekwe Golf Day', to: '/kwekwe-golf-day', blurb: 'The open Midlands fixture.' },
    { group: 'Pages', title: 'Past Events', to: '/past-events', blurb: 'The 2025 Royal Harare archive.' },
    { group: 'Pages', title: 'Sponsorship', to: '/sponsorship', blurb: 'Four partnership tiers for 2026.' },
    { group: 'Pages', title: 'Contact', to: '/contact', blurb: 'Offices in Harare and Cape Town.' },
    { group: 'Pages', title: 'Newsletter', to: '/newsletter', blurb: 'Joining the correspondents list.' },
    { group: 'Pages', title: 'Rules', to: '/rules', blurb: 'Playing conditions and etiquette.' },
  ];
}

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const n = q.trim().toLowerCase();
    return index
      .filter(i => (i.title + ' ' + (i.blurb || '')).toLowerCase().includes(n))
      .slice(0, 30);
  }, [q, index]);

  // Group results in insertion order, preserving {Events, Past Events, Pages}
  const grouped = useMemo(() => {
    const order = ['Events', 'Past Events', 'Pages'];
    const bucket = { Events: [], 'Past Events': [], Pages: [] };
    results.forEach(r => { (bucket[r.group] ||= []).push(r); });
    return order
      .map(k => ({ group: k, items: bucket[k] || [] }))
      .filter(b => b.items.length > 0);
  }, [results]);

  // Keyboard: Esc close, ArrowUp/Down move, Enter follow
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(i => Math.min(i + 1, Math.max(results.length - 1, 0)));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        const r = results[active];
        if (r) {
          e.preventDefault();
          window.location.assign(r.to);
          onClose();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, results, active]);

  // Reset active when query changes
  useEffect(() => { setActive(0); }, [q]);

  if (!open) return null;

  // Flat index-to-result map so highlighting matches ArrowUp/Down order
  let flatIdx = -1;

  return (
    <div className="fixed inset-0 z-[60] bg-navy-900/95 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-10 pt-10 pb-20">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-5 right-5 lg:top-8 lg:right-10 h-10 w-10 flex items-center justify-center text-cream-50 hover:text-gold-400 transition-colors"
        >
          <X size={22} />
        </button>

        <p className="font-serif italic text-gold-400 text-base sm:text-xl text-center mt-8 tracking-[0.18em] uppercase">
          search the site
        </p>

        <div className="relative mt-4 max-w-2xl mx-auto">
          <MagnifyingGlass size={22} className="absolute left-0 top-1/2 -translate-y-1/2 text-gold-400" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Clovelly, Kwekwe, Nedbank…"
            className="w-full pl-10 pr-4 py-4 bg-transparent border-b border-gold-500/40 focus:border-gold-400 outline-none text-2xl sm:text-3xl lg:text-4xl font-display italic text-cream-50 placeholder:text-cream-200/40"
          />
        </div>

        {/* Empty state (no query yet) */}
        {!q.trim() && (
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="font-serif italic text-cream-200/70 text-[15px] sm:text-[16px]">
              Try: <span className="text-gold-400">Coastal Classic</span>,{' '}
              <span className="text-gold-400">Cape Town</span>,{' '}
              <span className="text-gold-400">Kwekwe</span>,{' '}
              <span className="text-gold-400">Nedbank</span>,{' '}
              <span className="text-gold-400">sponsorship</span>
            </p>
          </div>
        )}

        {/* No-results state */}
        {q.trim() && results.length === 0 && (
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl sm:text-3xl text-cream-50">Nothing matches.</p>
            <p className="mt-3 font-serif italic text-cream-200/70 text-[15px] sm:text-[16px]">
              Not finding it? Try the full calendar —
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/coastal-classic"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-navy-900 text-[11.5px] tracking-[0.2em] uppercase font-medium rounded-md transition-colors"
              >
                Coastal Classic <ArrowRight size={14} weight="bold" />
              </Link>
              <Link
                to="/kwekwe-golf-day"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-navy-900 text-[11.5px] tracking-[0.2em] uppercase font-medium rounded-md transition-colors"
              >
                Kwekwe Golf Day <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        )}

        {/* Results, grouped */}
        {grouped.length > 0 && (
          <div className="mt-10 max-w-2xl mx-auto space-y-10">
            {grouped.map(({ group, items }) => (
              <section key={group}>
                <p className="font-display text-gold-400 text-[10.5px] tracking-[0.3em] uppercase mb-3">
                  {group}
                </p>
                <div>
                  {items.map((r) => {
                    flatIdx += 1;
                    const isActive = flatIdx === active;
                    return (
                      <Link
                        key={`${r.group}-${r.title}-${r.to}`}
                        to={r.to}
                        onClick={onClose}
                        onMouseEnter={() => setActive(flatIdx)}
                        className={`group block py-4 border-b border-cream-200/10 transition-colors ${
                          isActive ? 'bg-cream-50/[0.04]' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4 px-3">
                          <div>
                            <h4 className={`font-display text-lg ${isActive ? 'text-gold-400' : 'text-cream-50 group-hover:text-gold-400'} transition-colors`}>
                              {r.title}
                            </h4>
                            <p className="text-sm text-cream-200/60 mt-0.5 font-serif italic">{r.blurb}</p>
                          </div>
                          <ArrowRight size={16} className={`mt-1 ${isActive ? 'text-gold-400' : 'text-gold-500/70'}`} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
