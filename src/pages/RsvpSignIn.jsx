import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import RsvpGateway from '../components/RsvpGateway';
import { coastalClassic } from '../data/siteData';

export default function RsvpSignIn() {
  return (
    <PageTransition>
      <SEO
        title="Sign In / RSVP — Bard Santner Coastal Classic 2026"
        description="Invitation-only RSVP gateway for the Bard Santner Coastal Classic, Sept 13–19, 2026, Cape Town."
      />

      <section className="bg-cream-100 py-16 sm:py-24 min-h-[calc(100svh-5rem)]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
                The Gateway
              </p>
              <h1 className="mt-3 font-display text-navy-900 text-5xl sm:text-6xl lg:text-[68px] leading-[1.05]">
                Sign In / RSVP
              </h1>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
              <p className="mt-6 max-w-2xl mx-auto font-serif italic text-ink-500 text-[16px] sm:text-[18px] leading-relaxed">
                This gateway confirms attendance for the{' '}
                <Link to="/coastal-classic" className="prose-link">{coastalClassic.name}</Link>{' '}
                ({coastalClassic.dateLabel}, {coastalClassic.location}). Entry is by invitation code
                only.
              </p>
            </div>
          </SectionReveal>

          <div className="max-w-xl mx-auto">
            <SectionReveal delay={100}>
              <RsvpGateway />
            </SectionReveal>
          </div>

          <SectionReveal delay={200}>
            <p className="mt-10 text-center text-[13px] text-ink-400 font-serif italic">
              Looking for the open-registration day? Register for the{' '}
              <Link to="/kwekwe-golf-day#register" className="prose-link">Kwekwe Golf Day</Link>.
            </p>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
