import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import { pastEvents } from '../data/siteData';

export default function PastEventDetail() {
  const { slug } = useParams();
  const idx = pastEvents.findIndex((e) => e.slug === slug);
  if (idx === -1) return <Navigate to="/past-events" replace />;
  const event = pastEvents[idx];
  const prev = pastEvents[(idx - 1 + pastEvents.length) % pastEvents.length];
  const next = pastEvents[(idx + 1) % pastEvents.length];

  return (
    <PageTransition>
      <SEO title={`${event.title} — Past Events | Bard Santner Golf`} description={event.excerpt} />

      <section className="relative min-h-[60vh] flex items-end bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(15,26,43,0.6)' }} />
        </div>
        <div className="relative max-w-[1100px] mx-auto w-full px-5 sm:px-8 lg:px-12 py-16">
          <SectionReveal>
            <nav className="text-[12px] tracking-[0.18em] uppercase text-gold-300 mb-4 flex items-center gap-2">
              <Link to="/past-events" className="hover:text-gold-400">Past Events</Link>
              <span className="text-cream-300/50">/</span>
              <span className="text-cream-100/80 truncate max-w-[60vw]">{event.title}</span>
            </nav>
            <p className="font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase">{event.label}</p>
            <h1 className="mt-3 font-display text-gold-400 leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 5.2vw, 4.2rem)' }}
            >
              {event.title}
            </h1>
            <p className="mt-3 font-serif italic text-cream-100/85 text-lg">{event.date}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <SectionReveal>
            <p className="text-ink-700 text-[17px] sm:text-[18px] leading-[1.7]">
              {event.excerpt}{' '}
              The tournament ran under the club's usual format — Stableford, full handicap — and
              closed with prize-giving on the Clubhouse lawn. For the full field and results,
              members can consult the{' '}
              <a href="/tournament-conditions.pdf" target="_blank" rel="noopener noreferrer" className="prose-link">
                2025 tournament conditions PDF
              </a>, or{' '}
              <Link to="/contact" className="prose-link">contact our team</Link> for a detailed summary.
            </p>
            <p className="mt-5 text-ink-700 text-[17px] sm:text-[18px] leading-[1.7]">
              The 2025 season remains a touchstone for what Bard Santner Golf sets out to host — a
              calm, correctly-run day where the golf is the golf and the hospitality looks after itself.
              That standard now carries forward into{' '}
              <Link to="/coastal-classic" className="prose-link">the Coastal Classic</Link> and{' '}
              <Link to="/kwekwe-golf-day" className="prose-link">Kwekwe Golf Day</Link>.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-cream-50 border-t border-cream-300">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link to={`/past-events/${prev.slug}`} className="group flex items-center gap-3">
            <ArrowLeft size={16} className="text-gold-600 group-hover:text-gold-500 transition-colors" />
            <div>
              <p className="text-[10.5px] tracking-[0.22em] uppercase text-ink-400 font-display">Previous</p>
              <p className="font-serif italic text-navy-900 group-hover:text-gold-700">{prev.title}</p>
            </div>
          </Link>
          <Link to={`/past-events/${next.slug}`} className="group flex items-center gap-3 text-right">
            <div>
              <p className="text-[10.5px] tracking-[0.22em] uppercase text-ink-400 font-display">Next</p>
              <p className="font-serif italic text-navy-900 group-hover:text-gold-700">{next.title}</p>
            </div>
            <ArrowRight size={16} className="text-gold-600 group-hover:text-gold-500 transition-colors" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
