import React from 'react';
import { Link } from 'react-router-dom';
import { FilePdf, ArrowUpRight } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Rules() {
  return (
    <PageTransition>
      <SEO title="Rules & Tournament Conditions — Bard Santner Golf" description="Tournament conditions and rules for Bard Santner Golf 2026 season events." />

      <section className="bg-cream-100 py-16 sm:py-24 min-h-[calc(100svh-5rem)]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
              The Fine Print
            </p>
            <h1 className="mt-3 font-display text-navy-900 text-5xl sm:text-6xl leading-[1.05]">
              Rules &amp; Conditions
            </h1>
            <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            <p className="mt-6 font-serif italic text-ink-500 text-[17px] leading-relaxed">
              Our 2025 tournament conditions — lifted forward to 2026 with updates for the
              two-event calendar. Individual clauses for the Coastal Classic and Kwekwe Golf Day
              sit within the same document.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/tournament-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="press-physics inline-flex items-center gap-2 px-6 py-3 bg-navy-800 hover:bg-navy-900 text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                <FilePdf size={16} weight="duotone" /> Download PDF <ArrowUpRight size={13} weight="bold" />
              </a>
              <Link
                to="/contact"
                className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-navy-800 text-navy-900 hover:bg-navy-800 hover:text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Ask Our Team
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
