import React, { useState } from 'react';
import { toast } from 'sonner';
import { EnvelopeSimple, ArrowUpRight } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import { contact } from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    haptic(12);
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);

    // Attempt to POST to /api/newsletter/ — silently fall back to mailto if the
    // endpoint is not available (static demo host). Either way, user gets a
    // tangible "message sent" confirmation.
    try {
      const res = await fetch('/api/newsletter/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source: 'bardsantnergolf.com' }),
      });
      if (!res.ok) throw new Error('not ok');
      toast.success('You are on the list. A note is on its way.');
      setEmail('');
    } catch {
      // Mailto fallback
      const subject = encodeURIComponent('Newsletter signup');
      const body = encodeURIComponent(
        `Please add this address to the Bard Santner Golf mailing list:\n\n${trimmed}`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      toast.message('Opening your email client to confirm.', {
        description: 'We will add you manually on receipt.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Newsletter — Bard Santner Golf | Season Dispatches & Event Diary"
        description="Quarterly dispatches from the Bard Santner Golf season — event dates, invitations, partner news, and the occasional editorial note from the Clubhouse."
      />

      {/* Editorial header */}
      <section className="bg-cream-100 pt-16 sm:pt-24 pb-8">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
              Season Dispatches
            </p>
            <h1 className="mt-3 font-display text-navy-900 text-5xl sm:text-6xl lg:text-[72px] leading-[1.05]">
              Newsletter
            </h1>
            <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            <p className="mt-6 font-serif italic text-ink-500 text-[16px] sm:text-[18px] leading-relaxed text-balance">
              Four letters a year — no more. A quiet note from the Clubhouse before each
              season opens: the fixtures, the prize in focus, and one piece written by our
              host. Nothing in between, and never an advert.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Signup card — gold double-frame, centred, single field */}
      <section className="bg-cream-100 pb-20 sm:pb-28">
        <div className="max-w-[620px] mx-auto px-5 sm:px-8">
          <SectionReveal>
            <div className="gold-frame bg-white">
              <div className="px-6 sm:px-10 py-10 sm:py-12 text-center">
                <EnvelopeSimple size={32} weight="duotone" className="mx-auto text-gold-600" />
                <p className="mt-4 font-display text-gold-700 text-[11px] tracking-[0.3em] uppercase">
                  Join the List
                </p>
                <h2 className="mt-2 font-display text-navy-900 text-3xl sm:text-4xl leading-tight">
                  A seat at the desk.
                </h2>
                <p className="mt-4 font-serif italic text-ink-500 text-[15.5px] leading-relaxed">
                  Enter your email and the next dispatch arrives when the season opens.
                  Unsubscribe at the foot of any letter.
                </p>

                <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                  <label htmlFor="newsletter-email" className="fld-label sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="fld text-center"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    onClick={() => haptic(10)}
                    className="press-physics brass-glint inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-800 hover:bg-navy-900 disabled:opacity-60 disabled:cursor-not-allowed text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
                  >
                    {submitting ? 'Sending…' : 'Subscribe'}
                    {!submitting && <ArrowUpRight size={14} weight="bold" />}
                  </button>
                </form>

                <p className="mt-6 font-serif italic text-ink-400 text-[12.5px] leading-relaxed">
                  Your address is held in confidence and never shared with third parties.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <p className="mt-10 text-center font-serif italic text-ink-500 text-[14px]">
              Expecting an invitation to the Coastal Classic instead?{' '}
              <a href="/rsvp" className="prose-link">Enter the RSVP gateway.</a>
            </p>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
