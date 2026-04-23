import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import GoldFrameCard from '../components/GoldFrameCard';
import NavyEventPanel from '../components/NavyEventPanel';
import CalendarEventCard from '../components/CalendarEventCard';
import PastEventCard from '../components/PastEventCard';
import CountUp from '../components/CountUp';
import {
  hero,
  coastalClassic,
  kwekweGolfDay,
  pastEvents,
  stats,
  business,
} from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Bard Santner Golf — Elevating the Game: 2026 Season"
        description="Two iconic events, one uncommon standard. Coastal Classic (Sept 13–19, 2026, Cape Town) and Kwekwe Golf Day (July 2026)."
      />

      {/* ========== HERO ========== */}
      {/*
        Hero has NO overflow-hidden at the section level — the twin event cards
        are positioned absolutely at bottom:0 and translateY(50%) so their vertical
        center sits exactly on the hero's bottom edge (half in hero, half in cream
        section below). The hero image/overlays are clipped by their own container.
      */}
      <section className="relative min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-60px)] xl:min-h-[calc(100svh-64px)] flex flex-col justify-center bg-navy-900">
        {/* Photo — clipped in its own overflow-hidden container */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={hero.image}
            alt="Cape Town coastal golf"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 75%' }}
            onError={(e) => { e.currentTarget.src = hero.fallback; }}
          />
          {/* Warm navy overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(15, 26, 43, 0.55)' }} />
          {/* Brass vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(15,20,32,0.5) 100%), linear-gradient(180deg, rgba(15,20,32,0.55) 0%, transparent 30%, transparent 70%, rgba(15,20,32,0.5) 100%)',
            }}
          />
        </div>

        {/* Copy */}
        <div className="relative max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-[320px] sm:pb-[340px] md:pb-44 lg:pb-48">
          <SectionReveal>
            <p className="font-serif italic text-gold-300 text-sm sm:text-base tracking-[0.2em] uppercase mb-4">
              {hero.kicker}
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1
              className="headline-display text-gold-400 font-bold leading-[1.02] text-balance"
              style={{
                fontSize: 'clamp(2.1rem, 5.6vw, 4.8rem)',
                textShadow: '0 2px 14px rgba(0,0,0,0.35)',
              }}
            >
              {hero.headlineLines.map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="mt-5 sm:mt-6 font-serif italic text-cream-50 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed">
              {hero.subheadline}
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#calendar"
                onClick={() => haptic(10)}
                className="press-physics brass-glint inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                View the 2026 Calendar
                <ArrowUpRight size={14} weight="bold" />
              </a>
              <Link
                to="/newsletter"
                onClick={() => haptic(8)}
                className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-cream-50/70 text-cream-50 hover:bg-cream-50 hover:text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Newsletter Signup
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/*
          TWIN FRAMED EVENT CARDS — absolutely positioned at hero's bottom edge
          with translateY(50%) so their vertical center sits EXACTLY on the seam
          between the hero and the cream section. Works regardless of card height.
        */}
        <div
          className="absolute left-0 right-0 bottom-0 z-20"
          style={{ transform: 'translateY(50%)' }}
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
              <GoldFrameCard title={coastalClassic.name} tone="glass">
                <Link
                  to={coastalClassic.ctaTo}
                  onClick={() => haptic(10)}
                  className="press-physics brass-glint inline-flex items-center justify-center w-full gap-2 px-5 py-3 bg-navy-800 hover:bg-navy-900 text-cream-50 text-[11px] sm:text-[11.5px] tracking-[0.18em] uppercase font-medium rounded-md transition-colors"
                >
                  {coastalClassic.ctaLabel}
                </Link>
              </GoldFrameCard>

              <GoldFrameCard title={kwekweGolfDay.name}>
                <Link
                  to={kwekweGolfDay.ctaTo}
                  onClick={() => haptic(10)}
                  className="press-physics brass-glint inline-flex items-center justify-center w-full gap-2 px-5 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11px] sm:text-[11.5px] tracking-[0.18em] uppercase font-medium rounded-md transition-colors"
                >
                  {kwekweGolfDay.ctaLabel}
                </Link>
              </GoldFrameCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROSE LEAD ========== */}
      {/*
        The cards above are absolute-positioned and out of layout flow; the top
        half of each card extends INTO this cream section visually. We reserve
        space for that half-card via generous padding-top so the prose below
        starts below the card bottoms, not behind them.
        Mobile stacked cards are tall (~560px total, half = 280px); desktop
        side-by-side cards are ~260px tall (half = 130px).
      */}
      <section className="bg-cream-100 pt-[320px] sm:pt-[340px] md:pt-[180px] lg:pt-[190px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
              The 2026 Season
            </p>
            <div className="mt-3 flex justify-center"><span className="gold-rule" /></div>
            <p className="mt-6 font-display text-navy-900 text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.35] text-balance">
              Two weeks of the year, we stop. Twice —{' '}
              <Link to="/coastal-classic" className="prose-link">once along the Cape coast</Link>{' '}
              and{' '}
              <Link to="/kwekwe-golf-day" className="prose-link">once in the Midlands</Link>{' '}
              — {business.name.split(' ')[0]}&nbsp;{business.name.split(' ')[1]} hosts the rooms our
              clients spend the rest of the year chasing appointments in. The golf is incidental.
              The company is the point.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== 2026 CALENDAR ========== */}
      <section id="calendar" className="bg-cream-100 py-16 sm:py-24 scroll-mt-[64px]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12 sm:mb-14">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
                The Year Ahead
              </p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl lg:text-[56px] leading-tight">
                2026 Calendar
              </h2>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-stretch">
              <NavyEventPanel event={coastalClassic} />
              <CalendarEventCard />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== STATS RIBBON ========== */}
      <section className="bg-navy-800 text-cream-50 py-14 sm:py-16 relative overflow-hidden">
        <div className="grain opacity-50" />
        <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <SectionReveal key={s.label} className="text-center">
                <CountUp
                  to={s.value}
                  suffix={s.suffix}
                  className="engraved-numeral block text-5xl sm:text-6xl"
                />
                <p className="mt-2 text-[11px] tracking-[0.3em] uppercase text-cream-200/80 font-display">
                  {s.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PAST EVENTS 2025 ========== */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12 sm:mb-14">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
                From the Archive
              </p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl lg:text-[56px] leading-tight">
                Past Events (
                <CountUp
                  from={2020}
                  to={2025}
                  duration={2000}
                  format={(n) => Math.round(n).toString()}
                />
                )
              </h2>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
              <p className="mt-5 max-w-2xl mx-auto font-serif italic text-ink-500 text-[15px] sm:text-[17px] leading-relaxed">
                The 2025 season unfolded across nine rounds at Royal Harare — a
                Road-to-South-Africa points race that crowned five winners bound for the
                Investec SA Open and Nedbank Challenge.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {pastEvents.slice(0, 6).map((e) => (
                <PastEventCard key={e.slug} event={e} />
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="mt-10 text-center">
              <Link
                to="/past-events"
                onClick={() => haptic(8)}
                className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-navy-800 text-navy-900 hover:bg-navy-800 hover:text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Browse the Full 2025 Archive <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== CLOSING CTA ========== */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761141987987-54c0bc930655?auto=format&fit=crop&w=2000&q=80"
            alt="Misty morning on the fairway"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 75%' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-5 sm:px-8">
          <SectionReveal>
            <p className="font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase">
              The Season Ahead
            </p>
            <h2 className="mt-3 font-display text-cream-50 text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
              Elevate your place in the game.
            </h2>
            <p className="mt-5 text-cream-100/85 text-[16px] sm:text-[17px] font-serif italic leading-relaxed max-w-xl mx-auto">
              Enquire about sponsorship, request a Coastal Classic invitation, or reserve a four-ball
              for Kwekwe — a single email opens the door.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/sponsorship"
                onClick={() => haptic(10)}
                className="press-physics brass-glint inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Sponsorship <ArrowUpRight size={14} weight="bold" />
              </Link>
              <Link
                to="/contact"
                onClick={() => haptic(8)}
                className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-cream-50/80 text-cream-50 hover:bg-cream-50 hover:text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
