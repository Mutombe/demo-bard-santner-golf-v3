import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Out of bounds — Bard Santner Golf" description="The page you are looking for cannot be found." />
      <section className="bg-cream-100 py-24 min-h-[calc(100svh-5rem)] flex items-center">
        <div className="max-w-2xl mx-auto text-center px-5">
          <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">404</p>
          <h1 className="mt-3 font-display text-navy-900 text-5xl sm:text-6xl leading-[1.05]">
            That one's out of bounds.
          </h1>
          <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
          <p className="mt-6 font-serif italic text-ink-500 text-[17px] leading-relaxed">
            The page you're looking for has wandered. Take the path back to the fairway.
          </p>
          <Link
            to="/"
            className="press-physics inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy-800 hover:bg-navy-900 text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-full transition-colors"
          >
            Back to Home <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
