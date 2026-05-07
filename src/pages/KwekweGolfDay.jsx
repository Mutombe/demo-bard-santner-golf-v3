import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Calendar,
  Flag,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import { kwekweGolfDay } from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function KwekweGolfDay() {
  return (
    <PageTransition>
      <SEO
        title="Bard Santner Kwekwe Golf Day — June 26, 2026 | Kwekwe Golf Club, Zimbabwe"
        description="Open registration for the 2026 Bard Santner Kwekwe Golf Day. Friday 26 June 2026. Highveld parkland, individual and four-ball entries, prize-giving at 17:30."
      />

      {/* ============================================================
          HERO — single button, hero-only page. Everything below has been
          intentionally removed; the hero carries the entire page.
          ============================================================ */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-end overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          {/* Vision: Kwekwe parkland — golden afternoon light over highveld fairway */}
          <img
            src={kwekweGolfDay.heroImage}
            alt="Kwekwe Golf Club highveld parkland"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(15,26,43,0.45)' }} />
          <div className="absolute inset-0" style={{
            background:
              'linear-gradient(180deg, rgba(15,20,32,0.65) 0%, transparent 35%, rgba(15,20,32,0.92) 100%)',
          }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionReveal>
            <p className="inline-flex items-center gap-2 font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase mb-4">
              <Flag size={14} weight="duotone" /> {kwekweGolfDay.status}
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1
              className="headline-display text-gold-400 font-bold leading-[1.02]"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 5.4rem)', textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
            >
              Bard Santner
              <br />
              <span className="font-serif italic text-cream-50">Kwekwe Golf Day</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="mt-5 font-serif italic text-cream-50 text-xl sm:text-2xl flex flex-wrap items-center gap-x-3 gap-y-1">
              <Calendar size={18} weight="duotone" className="text-gold-300" />
              {kwekweGolfDay.dateLong}
              <span className="text-gold-300">|</span>
              {kwekweGolfDay.locationLong}
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <p className="mt-6 text-cream-100/90 text-[16.5px] sm:text-[18px] leading-relaxed max-w-2xl font-serif">
              {kwekweGolfDay.intro}
            </p>
          </SectionReveal>
          <SectionReveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/kwekwe-golf-day/register"
                onClick={() => haptic(10)}
                className="press-physics brass-glint-auto inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Register <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
