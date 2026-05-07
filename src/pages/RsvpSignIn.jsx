import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkle, Calendar, EnvelopeSimple, Compass, MapPin, ArrowUpRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import RsvpGateway from '../components/RsvpGateway';
import { coastalClassic } from '../data/siteData';

const expectations = [
  {
    icon: EnvelopeSimple,
    label: 'Confirmation',
    body: 'An itinerary will follow within 24 hours of receipt.',
  },
  {
    icon: Compass,
    label: 'Concierge',
    body: 'Logistics, transfer and dietary preferences are handled in person.',
  },
  {
    icon: Calendar,
    label: 'The Week',
    body: `${coastalClassic.dateLabel} · Cape Town · Four courses · One private gathering.`,
  },
];

export default function RsvpSignIn() {
  return (
    <PageTransition>
      <SEO
        title="Sign In / RSVP — Bard Santner Coastal Classic 2026"
        description="Invitation-only RSVP gateway for the Bard Santner Coastal Classic, Sept 13–19, 2026, Cape Town."
      />

      <section className="bg-cream-100 min-h-[calc(100svh-5rem)]">
        <div className="lg:grid lg:grid-cols-12 lg:min-h-[calc(100svh-5rem)]">
          {/* LEFT — Cinematic threshold */}
          <div className="relative lg:col-span-7 h-[42vh] min-h-[320px] lg:h-auto overflow-hidden">
            <img
              src="/images/venues/clovelly/hero.jpeg"
              alt="The Cape coast at Clovelly — the threshold of the Coastal Classic."
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Navy gradient overlay — readable, not heavy */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,18,38,0.55) 0%, rgba(10,18,38,0.45) 40%, rgba(10,18,38,0.78) 100%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  'linear-gradient(110deg, rgba(10,18,38,0.65) 0%, rgba(10,18,38,0.35) 55%, rgba(10,18,38,0.15) 100%)',
              }}
            />
            <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.18]" />

            {/* Floating editorial typography */}
            <div className="relative h-full flex flex-col justify-between p-7 sm:p-12 lg:p-16">
              <SectionReveal>
                <div className="flex items-center gap-3">
                  <Sparkle size={14} weight="fill" className="text-gold-400" />
                  <p className="font-sans text-gold-300 text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase">
                    The Gateway · Invitation Only
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={120}>
                <div className="max-w-[560px]">
                  <h1 className="font-display text-cream-50 text-[44px] sm:text-6xl lg:text-[78px] leading-[0.98] tracking-[-0.01em]">
                    <span className="block font-serif italic font-normal text-gold-300/95">
                      Cross the
                    </span>
                    <span className="block">threshold.</span>
                  </h1>
                  <div className="mt-5 hidden sm:flex">
                    <span className="gold-rule" />
                  </div>
                  <p className="mt-5 sm:mt-6 font-serif italic text-cream-100/85 text-[15px] sm:text-[17px] leading-relaxed max-w-[480px]">
                    A week reserved for those whose game — and whose company — set the
                    standard. Confirm your seat, and the Cape will do the rest.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={220}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-cream-100/80">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} weight="duotone" className="text-gold-400" />
                    <span className="font-sans text-[10.5px] sm:text-[11px] tracking-[0.22em] uppercase">
                      {coastalClassic.dateLabel}
                    </span>
                  </div>
                  <span aria-hidden="true" className="hidden sm:inline-block w-6 h-px bg-gold-400/40" />
                  <div className="flex items-center gap-2">
                    <MapPin size={14} weight="duotone" className="text-gold-400" />
                    <span className="font-sans text-[10.5px] sm:text-[11px] tracking-[0.22em] uppercase">
                      {coastalClassic.location} · Four Courses
                    </span>
                  </div>
                  <span aria-hidden="true" className="hidden sm:inline-block w-6 h-px bg-gold-400/40" />
                  <span className="font-serif italic text-[12.5px] sm:text-[13px] text-cream-100/70">
                    Bard Santner partner network
                  </span>
                </div>
              </SectionReveal>
            </div>
          </div>

          {/* RIGHT — Cream surface, the form, what to expect, fallback */}
          <div className="relative lg:col-span-5 bg-cream-50">
            <div aria-hidden="true" className="grain absolute inset-0 opacity-[0.35] pointer-events-none" />
            <div className="relative px-5 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-[560px] lg:max-w-none mx-auto lg:mx-0 lg:ml-0">
              <SectionReveal>
                <div className="mb-8">
                  <p className="font-sans text-gold-700 text-[10.5px] tracking-[0.28em] uppercase">
                    Confirm Attendance
                  </p>
                  <h2 className="mt-3 font-display text-navy-900 text-3xl sm:text-4xl leading-[1.05]">
                    Welcome.
                  </h2>
                  <div className="mt-4"><span className="gold-rule" /></div>
                  <p className="mt-5 font-serif italic text-ink-500 text-[15px] sm:text-[16px] leading-relaxed">
                    Entry to the {coastalClassic.shortName} is by invitation code only.
                    Three lines below — and you are through.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={100}>
                <RsvpGateway />
              </SectionReveal>

              <SectionReveal delay={180}>
                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span aria-hidden="true" className="h-px flex-1 bg-navy-900/15" />
                    <p className="font-sans text-navy-900/70 text-[10.5px] tracking-[0.28em] uppercase">
                      What to expect
                    </p>
                    <span aria-hidden="true" className="h-px flex-1 bg-navy-900/15" />
                  </div>

                  <ul className="divide-y divide-navy-900/10">
                    {expectations.map(({ icon: Icon, label, body }) => (
                      <li key={label} className="flex items-start gap-4 py-4">
                        <span className="mt-1 inline-flex items-center justify-center h-8 w-8 rounded-full border border-gold-500/40 bg-cream-100">
                          <Icon size={15} weight="duotone" className="text-gold-600" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-serif italic text-navy-900 text-[15px] leading-tight">
                            {label}
                          </p>
                          <p className="mt-1 text-ink-500 text-[13.5px] leading-relaxed">
                            {body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={260}>
                <div className="mt-12 pt-8 border-t border-navy-900/10">
                  <p className="font-serif italic text-ink-400 text-[13.5px] leading-relaxed">
                    Looking for the open-registration day?{' '}
                    <Link
                      to="/kwekwe-golf-day#register"
                      className="prose-link inline-flex items-center gap-1"
                    >
                      Register for the Kwekwe Golf Day
                      <ArrowUpRight size={12} weight="bold" />
                    </Link>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
