import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Calendar, Flag } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import CalendarEventCard from '../components/CalendarEventCard';
import CountUp from '../components/CountUp';
import { kwekweGolfDay } from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function KwekweGolfDay() {
  return (
    <PageTransition>
      <SEO
        title="Kwekwe Golf Day 2026 — Bard Santner Golf | Midlands, Zimbabwe"
        description="July 2026. Open registration — Individual or Corporate Four-Ball. Kwekwe Golf Club, Midlands, Zimbabwe."
      />

      {/* Hero */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-end overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={kwekweGolfDay.heroImage}
            alt="Kwekwe Golf Club parkland"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(15,26,43,0.48)' }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(15,20,32,0.6) 0%, transparent 40%, rgba(15,20,32,0.85) 100%)',
          }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionReveal>
            <p className="inline-flex items-center gap-2 font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase mb-4">
              <Flag size={14} weight="duotone" /> {kwekweGolfDay.status}
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="headline-display text-gold-400 font-bold leading-[1.02]"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 5.2rem)', textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
            >
              Kwekwe Golf Day 2026
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="mt-4 font-serif italic text-cream-50 text-xl sm:text-2xl">
              {kwekweGolfDay.dateLong} <span className="text-gold-300">|</span> {kwekweGolfDay.locationLong}
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <p className="mt-6 text-cream-100/90 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl">
              {kwekweGolfDay.intro}
            </p>
          </SectionReveal>
          <SectionReveal delay={400}>
            <div className="mt-8">
              <a
                href="#register"
                onClick={() => haptic(10)}
                className="press-physics brass-glint inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
              >
                Register Now <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">How You Play</p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl">
                Two formats. One field.
              </h2>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
              <p className="mt-5 font-serif italic text-ink-500 text-[16px] max-w-xl mx-auto leading-relaxed">
                Enter on your own card, or bring three colleagues and take the corporate shield. Same
                course, same day, two quite different experiences.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionReveal>
              <article className="bg-white border border-cream-300 p-7 sm:p-8 h-full rounded-lg">
                <Users size={32} weight="duotone" className="text-gold-600" />
                <h3 className="mt-4 font-display text-2xl text-navy-900">Individual</h3>
                <p className="mt-3 text-ink-700 text-[15px] leading-relaxed">
                  {kwekweGolfDay.formatDescriptions.Individual}
                </p>
                <p className="mt-4 font-serif italic text-ink-500 text-[13px]">
                  Ideal for golfers attending solo or in pairs — we pair you into the draw.
                </p>
              </article>
            </SectionReveal>
            <SectionReveal delay={100}>
              <article className="bg-navy-800 text-cream-50 p-7 sm:p-8 h-full relative overflow-hidden rounded-lg">
                <div className="grain opacity-50" />
                <div className="relative">
                  <Users size={32} weight="duotone" className="text-gold-400" />
                  <h3 className="mt-4 font-display text-2xl">Corporate Four-Ball</h3>
                  <p className="mt-3 text-cream-100/90 text-[15px] leading-relaxed">
                    {kwekweGolfDay.formatDescriptions['Corporate Four-Ball']}
                  </p>
                  <p className="mt-4 font-serif italic text-gold-300 text-[13px]">
                    Our most-requested format — branded hospitality inclusive.
                  </p>
                </div>
              </article>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <SectionReveal>
            <div className="text-center mb-10">
              <Calendar size={28} className="mx-auto text-gold-600" weight="duotone" />
              <h2 className="mt-3 font-display text-navy-900 text-3xl sm:text-4xl">Day Schedule</h2>
              <div className="mt-3 flex justify-center"><span className="gold-rule" /></div>
            </div>
          </SectionReveal>

          <div className="divide-y divide-cream-300">
            {kwekweGolfDay.schedule.map((s, i) => (
              <SectionReveal key={s.time} delay={i * 60}>
                <div className="flex items-baseline gap-6 py-5">
                  <p className="engraved-numeral text-3xl sm:text-4xl shrink-0 w-28">{s.time}</p>
                  <p className="font-display text-navy-900 text-lg sm:text-xl">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration card (reused) */}
      <section id="register" className="bg-cream-100 py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <SectionReveal>
            <div className="text-center mb-10">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">Secure Your Spot</p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl">Register</h2>
              <div className="mt-3 flex justify-center"><span className="gold-rule" /></div>
            </div>
          </SectionReveal>
          <SectionReveal delay={100}>
            <CalendarEventCard />
          </SectionReveal>
          <p className="mt-5 text-center font-serif italic text-ink-400 text-[13px]">
            Registrations are first-come, first-served. Field capped at 120 golfers.
          </p>
        </div>
      </section>

      {/* Count-ups */}
      <section className="bg-navy-800 text-cream-50 py-14">
        <div className="max-w-[1180px] mx-auto grid grid-cols-3 gap-6 px-5 sm:px-8 text-center">
          <SectionReveal>
            <CountUp to={120} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Field Size</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <CountUp to={30} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Four-Balls</p>
          </SectionReveal>
          <SectionReveal delay={200}>
            <CountUp to={18} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Holes</p>
          </SectionReveal>
        </div>
      </section>

      {/* Return CTA */}
      <section className="bg-cream-100 py-16 sm:py-20 text-center">
        <SectionReveal>
          <Link
            to="/"
            className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-navy-800 text-navy-900 hover:bg-navy-800 hover:text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
          >
            Back to 2026 Calendar
          </Link>
        </SectionReveal>
      </section>
    </PageTransition>
  );
}
