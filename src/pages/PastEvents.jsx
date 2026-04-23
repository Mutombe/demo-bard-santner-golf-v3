import React from 'react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import PastEventCard from '../components/PastEventCard';
import { pastEvents } from '../data/siteData';

export default function PastEvents() {
  return (
    <PageTransition>
      <SEO
        title="Past Events (2025) — Bard Santner Golf"
        description="The 2025 Road to South Africa archive — nine rounds at Royal Harare, five winners to the Investec SA Open and Nedbank Challenge."
      />

      <section className="bg-cream-100 pt-16 sm:pt-24 pb-6">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">From the Archive</p>
            <h1 className="mt-3 font-display text-navy-900 text-5xl sm:text-6xl lg:text-[72px] leading-[1.05]">
              Past Events (2025)
            </h1>
            <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            <p className="mt-6 max-w-2xl mx-auto font-serif italic text-ink-500 text-[16px] sm:text-[18px] leading-relaxed">
              A season spent at Royal Harare — nine tournaments, five winners to South Africa's majors,
              and a wall of fame now carved into the Clubhouse bar.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream-100 py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pastEvents.map((e, i) => (
              <SectionReveal key={e.slug} delay={i * 60}>
                <PastEventCard event={e} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
