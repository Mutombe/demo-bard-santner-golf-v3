import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Medal, Handshake, Heart } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import CountUp from '../components/CountUp';
import { sponsorship, contact } from '../data/siteData';
import { haptic } from '../lib/haptics';

const whyIcons = [Handshake, Medal, Heart];

export default function Sponsorship() {
  return (
    <PageTransition>
      <SEO
        title="Sponsorship — Bard Santner Golf | 2026 Partnership Opportunities"
        description="Partner with the Bard Santner Golf 2026 season — four tiers, from Bronze Patron to Platinum Principal. Precision. Discretion. Uncommon hosting."
      />

      <section className="relative min-h-[52vh] flex items-end bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/royal-harare-06.jpg"
            alt="Royal Harare fairway"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(15,20,32,0.65)' }} />
        </div>
        <div className="relative max-w-[1180px] mx-auto w-full px-5 sm:px-8 lg:px-12 py-16">
          <SectionReveal>
            <p className="font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase mb-4">
              2026 Partnership
            </p>
            <h1 className="font-display text-gold-400 leading-[1.02]"
              style={{ fontSize: 'clamp(2.2rem, 5.8vw, 4.8rem)' }}
            >
              Sponsorship
            </h1>
            <p className="mt-4 max-w-2xl text-cream-100/90 text-[17px] leading-relaxed">
              {sponsorship.intro}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Why */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {sponsorship.why.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <SectionReveal key={w.title} delay={i * 100}>
                  <article className="bg-white border border-cream-300 p-7 h-full hover:border-gold-300 transition-colors">
                    <Icon size={32} weight="duotone" className="text-gold-600" />
                    <h3 className="mt-4 font-display text-navy-900 text-2xl leading-tight">{w.title}</h3>
                    <p className="mt-3 text-ink-700 text-[15px] leading-relaxed">{w.body}</p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ribbon */}
      <section className="bg-navy-800 text-cream-50 py-12">
        <div className="max-w-[1180px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-5 sm:px-8 text-center">
          <SectionReveal>
            <CountUp to={220} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Golfers</p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <CountUp to={6} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Courses Featured</p>
          </SectionReveal>
          <SectionReveal delay={200}>
            <CountUp to={48} suffix="+" className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Media Mentions (2025)</p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <CountUp to={12} className="engraved-numeral block text-4xl sm:text-5xl" />
            <p className="mt-1 text-[10.5px] tracking-[0.3em] uppercase text-cream-200/80 font-display">Season Partners</p>
          </SectionReveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">Partnership Tiers</p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl">Choose Your Standing.</h2>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {sponsorship.tiers.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 80}>
                <article
                  className={`h-full p-7 sm:p-8 border flex flex-col ${
                    t.highlighted
                      ? 'bg-navy-800 text-cream-50 border-gold-500'
                      : 'bg-white text-ink-900 border-cream-300 hover:border-gold-300 transition-colors'
                  }`}
                >
                  <p className={`font-serif italic text-[12px] tracking-[0.18em] uppercase ${t.highlighted ? 'text-gold-300' : 'text-gold-700'}`}>
                    Tier {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`mt-2 font-display text-2xl leading-tight ${t.highlighted ? 'text-cream-50' : 'text-navy-900'}`}>
                    {t.name}
                  </h3>
                  <p className={`mt-3 engraved-numeral text-3xl ${t.highlighted ? 'text-gold-300' : ''}`}>{t.price}</p>
                  <ul className={`mt-4 space-y-2 text-[14px] leading-relaxed ${t.highlighted ? 'text-cream-100/85' : 'text-ink-700'}`}>
                    {t.perks.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <span className={`shrink-0 ${t.highlighted ? 'text-gold-400' : 'text-gold-500'}`}>◆</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <Link
                      to="/contact"
                      onClick={() => haptic(10)}
                      className={`press-physics w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] tracking-[0.22em] uppercase font-medium rounded-full transition-colors ${
                        t.highlighted
                          ? 'bg-gold-500 hover:bg-gold-400 text-navy-900'
                          : 'border border-navy-800 text-navy-900 hover:bg-navy-800 hover:text-cream-50'
                      }`}
                    >
                      Enquire <ArrowUpRight size={13} weight="bold" />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center px-5">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">Begin a Conversation</p>
            <h2 className="mt-3 font-display text-navy-900 text-4xl sm:text-5xl leading-tight">
              A single email is enough.
            </h2>
            <p className="mt-4 text-ink-500 text-[16px] leading-relaxed font-serif italic">
              Reach our partnerships desk at{' '}
              <a href={`mailto:${contact.email}`} className="prose-link">{contact.email}</a>
              {' '}or{' '}
              <Link to="/contact" className="prose-link">start a proposal</Link>{' '}
              — a conversation opens within the working day.
            </p>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
