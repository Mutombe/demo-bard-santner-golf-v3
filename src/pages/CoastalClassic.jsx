import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Key, Airplane, Wine, Trophy } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import CapeCourseMap from '../components/CapeCourseMap';
import CountUp from '../components/CountUp';
import { coastalClassic } from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function CoastalClassic() {
  return (
    <PageTransition>
      <SEO
        title="Coastal Classic 2026 — Bard Santner Golf | Cape Town, Sept 13–19"
        description="Invitation-only championship across King David Mowbray, Clovelly, De Zalze and Rondebosch. Prize in focus: AfrAsia Bank Mauritius Open."
      />

      {/* Hero */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-end overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={coastalClassic.heroImage}
            alt="Cape coastal golf — Coastal Classic"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(15,26,43,0.55)' }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(15,20,32,0.7) 0%, transparent 30%, transparent 60%, rgba(15,20,32,0.85) 100%)',
          }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionReveal>
            <p className="inline-flex items-center gap-2 font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase mb-4">
              <Key size={14} weight="duotone" /> {coastalClassic.status}
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="headline-display text-gold-400 font-bold leading-[1.02] text-balance"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 5.2rem)', textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
            >
              {coastalClassic.name}
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="mt-4 font-serif italic text-cream-50 text-xl sm:text-2xl">
              {coastalClassic.dateLabel} <span className="text-gold-300">|</span> {coastalClassic.locationLong}
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <p className="mt-6 text-cream-100/90 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl">
              {coastalClassic.intro}
            </p>
          </SectionReveal>
          <SectionReveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/rsvp"
                onClick={() => haptic(10)}
                className="press-physics brass-glint inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-full transition-colors"
              >
                <Key size={14} weight="bold" /> RSVP Gateway <ArrowUpRight size={14} weight="bold" />
              </Link>
              <Link
                to="/contact"
                className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-cream-50/70 text-cream-50 hover:bg-cream-50 hover:text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-full transition-colors"
              >
                Concierge
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats ribbon */}
      <section className="bg-navy-900 text-cream-50 py-10">
        <div className="max-w-[1180px] mx-auto grid grid-cols-3 gap-6 px-5 sm:px-8 text-center">
          <SectionReveal>
            <CountUp to={7} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Days</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <CountUp to={4} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Courses</p>
          </SectionReveal>
          <SectionReveal delay={200}>
            <CountUp to={72} suffix="" className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Invitations</p>
          </SectionReveal>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">The Four Courses</p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl">
                Cape-coast golf, considered.
              </h2>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            </div>
          </SectionReveal>

          {/* Full-width map row — real Leaflet / CartoDB Voyager */}
          <SectionReveal>
            <div className="mb-12 lg:mb-16 bg-navy-800 p-6 sm:p-7 text-cream-50">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <p className="font-display text-gold-400 text-[11px] tracking-[0.3em] uppercase">
                  The Peninsula
                </p>
                <p className="hidden sm:block font-serif italic text-cream-100/70 text-[12.5px]">
                  Four courses across 60 kilometres of coast &middot; Hotel base: The Cape Grace, V&amp;A Waterfront
                </p>
              </div>
              <CapeCourseMap className="w-full" />
            </div>
          </SectionReveal>

          <div className="space-y-6">
            {coastalClassic.courses.map((c, i) => (
                <SectionReveal key={c.name} delay={i * 80}>
                  <article className="bg-white border border-cream-300 p-6 sm:p-7 hover:border-gold-300 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-serif italic text-gold-700 text-[12.5px] tracking-[0.18em] uppercase">
                          Round {i + 1}
                        </p>
                        <h3 className="mt-1 font-display text-2xl sm:text-3xl text-navy-900 leading-tight">
                          {c.name}
                        </h3>
                      </div>
                      <span className="font-display text-gold-500 text-3xl sm:text-4xl opacity-60 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-3 font-serif italic text-ink-500 text-[15px]">{c.blurb}</p>
                    <p className="mt-3 text-ink-700 text-[15px] leading-relaxed">
                      {c.long}
                    </p>
                  </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prize + 19th Hole */}
      <section className="bg-navy-800 text-cream-50 py-20 sm:py-24 relative overflow-hidden">
        <div className="grain opacity-50" />
        <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SectionReveal>
            <div className="h-full gold-frame bg-navy-900 p-8 sm:p-10">
              <Trophy size={36} weight="duotone" className="text-gold-400" />
              <p className="mt-4 font-display text-gold-400 text-[11px] tracking-[0.3em] uppercase">
                {coastalClassic.prizeInFocus.headline}
              </p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl text-cream-50 leading-tight text-balance">
                {coastalClassic.prizeInFocus.title}
              </h3>
              <p className="mt-5 font-serif italic text-cream-100/85 text-[15.5px] leading-relaxed">
                {coastalClassic.prizeInFocus.detail} The winner receives hotel, tournament passes,
                and hospitality at the{' '}
                <a href="https://www.afrasiabank.com" target="_blank" rel="noopener noreferrer" className="prose-link">
                  AfrAsia Bank Mauritius Open
                </a>
                {' '}on the DP World Tour calendar.
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold-400 text-sm">
                <Airplane size={16} weight="duotone" /> Flights &middot; stay &middot; course passes &middot; all included
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="h-full bg-gold-500 text-navy-900 p-8 sm:p-10">
              <Wine size={36} weight="duotone" className="text-navy-900" />
              <p className="mt-4 font-display text-navy-900 text-[11px] tracking-[0.3em] uppercase">
                {coastalClassic.nineteenthHole.headline}
              </p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl text-navy-900 leading-tight text-balance">
                {coastalClassic.nineteenthHole.title}
              </h3>
              <p className="mt-5 font-serif italic text-navy-900/85 text-[15.5px] leading-relaxed">
                {coastalClassic.nineteenthHole.detail} Tasting, paired lunch, and a cellar walk with the winemaker.
              </p>
              <p className="mt-6 font-serif italic text-navy-900/80 text-[13px]">
                Stellenbosch, Saturday afternoon — our traditional week-close.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream-100 py-20 sm:py-24">
        <div className="max-w-2xl mx-auto text-center px-5">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">A Closed Room</p>
            <h2 className="mt-3 font-display text-navy-900 text-4xl sm:text-5xl leading-tight">
              Confirm your seat.
            </h2>
            <p className="mt-4 font-serif italic text-ink-500 text-[17px] leading-relaxed">
              Invitation codes are issued by email four months ahead of the week. Bring yours to the{' '}
              <Link to="/rsvp" className="prose-link">gateway</Link> and the week becomes yours.
            </p>
            <Link
              to="/rsvp"
              onClick={() => haptic(10)}
              className="press-physics brass-glint mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 hover:bg-navy-900 text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-full transition-colors"
            >
              <Key size={14} weight="bold" /> RSVP Gateway <ArrowUpRight size={14} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
