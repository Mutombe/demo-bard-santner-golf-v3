import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ArrowUpRight,
  ArrowLeft,
  Calendar,
  Flag,
  Check,
  CheckCircle,
  CaretRight,
  MapPin,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import { kwekweGolfDay, business } from '../data/siteData';
import { haptic } from '../lib/haptics';

// Visual layout note: the two-field rows have been intentionally reversed
// (right-side field now displays on the left, and vice versa). State, ids,
// validation and the submit payload are unchanged — only the render order
// in the grid is swapped to satisfy the redesigned form layout.
const REG_FIELDS = [
  // Row 1: was [email, fullName] → now [fullName, email]
  { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'First and last' },
  { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@company.co.zw' },
  // Row 2: was [company, phone] → now [phone, company]
  { id: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+263 78 ...', help: 'WhatsApp preferred — easier for day-of coordination.' },
  { id: 'company', label: 'Company Name', type: 'text', required: false, placeholder: 'If applicable', help: 'Optional — leave blank if attending personally.' },
  // Row 3: was [homeClub, handicap] → now [handicap, homeClub]
  { id: 'handicap', label: 'Handicap Index', type: 'text', required: true, placeholder: 'e.g. 12.4' },
  { id: 'homeClub', label: 'Home Club', type: 'text', required: true, placeholder: 'e.g. Royal Harare Golf Club' },
  // caddy sits alone on its row (dietary below is full-span); no swap needed.
  { id: 'caddy', label: 'Do you require a Caddy?', type: 'select', required: true,
    options: ['Yes — please assign one', 'No — I\'ll go without'],
    help: 'Players are expected to pay for their own caddies on the day.' },
  { id: 'dietary', label: 'Dietary Requirements / Allergies', type: 'textarea', required: false, placeholder: 'Vegetarian, gluten-free, nut allergy, none …' },
  { id: 'heard', label: 'How did you hear about the Bard Santner Kwekwe Golf Day?', type: 'select', required: true,
    options: ['Bard Santner email invitation', 'A friend or colleague', 'My home club', 'Social media', 'Other'] },
  { id: 'prizeGiving', label: 'Will you stay for the 17:30 prize-giving ceremony?', type: 'select', required: true,
    options: ['Yes — I will attend', 'No — I cannot attend'],
    help: 'Mandatory confirmation — the day closes with the prize ceremony.' },
];

/**
 * KwekweRegister — dedicated registration page for the Kwekwe Golf Day.
 * Contains the exact 9-field form per the brief, channel toggle (email or
 * WhatsApp) and prefilled message handoff. Routed at /kwekwe-golf-day/register.
 */
export default function KwekweRegister() {
  return (
    <PageTransition>
      <SEO
        title="Register · Bard Santner Kwekwe Golf Day — June 26, 2026"
        description="Register for the 2026 Bard Santner Kwekwe Golf Day. Open registration — individual or corporate four-ball entries. Field is capped, first-come, first-served."
      />

      {/* ============================================================
          BREADCRUMB
          ============================================================ */}
      <div className="bg-navy-900 text-cream-50 border-b border-gold-500/15">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <nav className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-cream-200/70 flex-wrap">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <CaretRight size={10} weight="bold" className="text-cream-100/40" />
            <Link to="/kwekwe-golf-day" className="hover:text-gold-400 transition-colors">
              Kwekwe Golf Day
            </Link>
            <CaretRight size={10} weight="bold" className="text-cream-100/40" />
            <span className="text-gold-400">Register</span>
          </nav>
        </div>
      </div>

      {/* ============================================================
          HERO — concise, focuses attention on the form below
          ============================================================ */}
      <section className="relative bg-navy-900 text-cream-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gold-500/[0.06] blur-3xl" />
          <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-gold-500/[0.04] blur-3xl" />
        </div>
        <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <SectionReveal>
            <p className="font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase mb-4 inline-flex items-center gap-2">
              <Flag size={14} weight="duotone" /> {kwekweGolfDay.status}
            </p>
            <h1
              className="font-display text-gold-400 leading-[1.02] mb-5 max-w-3xl"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
            >
              Register for the
              <br />
              <span className="font-serif italic text-cream-50">Kwekwe Golf Day.</span>
            </h1>
            <p className="font-serif italic text-cream-100/85 text-lg sm:text-xl leading-relaxed max-w-2xl mb-7">
              Friday, 26 June 2026 · Kwekwe Golf Club, Midlands, Zimbabwe. Individual or
              corporate four-ball entries. Field is capped — first-come, first-served.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2 font-mono text-cream-100/70 text-[11px] tracking-[0.22em] uppercase">
                <Calendar size={13} weight="duotone" className="text-gold-400" />
                {kwekweGolfDay.dateLong}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-cream-100/70 text-[11px] tracking-[0.22em] uppercase">
                <MapPin size={13} weight="duotone" className="text-gold-400" />
                Kwekwe Golf Club · Midlands
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============================================================
          REGISTRATION FORM
          ============================================================ */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="max-w-[920px] mx-auto px-5 sm:px-8">
          <SectionReveal>
            <div className="text-center mb-10">
              <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">
                Secure Your Spot
              </p>
              <h2 className="mt-2 font-display text-navy-900 text-4xl sm:text-5xl">Registration</h2>
              <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
              <p className="mt-5 font-serif italic text-ink-500 text-[15.5px] max-w-xl mx-auto leading-relaxed">
                One submission per golfer. We reply within one working day with confirmation.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={80}>
            <RegistrationForm />
          </SectionReveal>

          <p className="mt-6 text-center font-serif italic text-ink-400 text-[13px]">
            Concierge support: <a href={`mailto:${business.email}`} className="prose-link">{business.email}</a>
            <span className="mx-2">·</span>
            <a href={business.whatsappBase} target="_blank" rel="noreferrer" className="prose-link">WhatsApp</a>
          </p>
        </div>
      </section>

      {/* ============================================================
          BACK TO KWEKWE PAGE
          ============================================================ */}
      <section className="bg-cream-50 py-12 sm:py-16 border-t border-cream-300">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 text-center">
          <Link
            to="/kwekwe-golf-day"
            className="press-physics inline-flex items-center gap-2 px-6 py-3 border border-navy-800 text-navy-900 hover:bg-navy-800 hover:text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
          >
            <ArrowLeft size={13} weight="bold" /> Back to the Kwekwe Golf Day
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

/* ============================================================
   RegistrationForm — exact 9 fields per the client brief
   On successful submit, replaces itself with a concierge-tone
   thank-you message. Endpoint is wired via VITE_REGISTER_ENDPOINT
   (falls back to '/api/register').
   ============================================================ */
function RegistrationForm() {
  const [values, setValues] = useState(
    REG_FIELDS.reduce((acc, f) => ({ ...acc, [f.id]: '' }), {})
  );
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (id) => (e) => setValues((v) => ({ ...v, [id]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    haptic(10);
    const missing = REG_FIELDS.filter((f) => f.required && !values[f.id]);
    if (missing.length) {
      toast.error(`Please complete: ${missing.map((m) => m.label).join(', ')}`);
      return;
    }
    setSending(true);

    const endpoint = import.meta.env.VITE_REGISTER_ENDPOINT || '/api/register';
    const payload = {
      event: 'kwekwe-golf-day-2026',
      submittedAt: new Date().toISOString(),
      ...values,
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Server responded ${res.status}`);
      }
      setSubmitted(true);
      // Scroll the thank-you into view — replaces the form in place
      window.scrollTo({ top: window.scrollY, behavior: 'smooth' });
    } catch (err) {
      console.error('Registration submission failed:', err);
      toast.error('We could not submit your registration just now. Please try again, or email concierge directly.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return <ThankYou name={values.fullName} />;
  }

  return (
    <form onSubmit={submit} className="bg-white border border-cream-300 p-6 sm:p-8 lg:p-10 rounded-lg shadow-sm">
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
        {REG_FIELDS.map((f) => (
          <div key={f.id} className={f.type === 'textarea' || f.id === 'heard' || f.id === 'prizeGiving' ? 'sm:col-span-2' : ''}>
            <label htmlFor={f.id} className="block font-display text-navy-900 text-[11px] tracking-[0.22em] uppercase mb-1.5">
              {f.label} {f.required && <span className="text-gold-700">*</span>}
            </label>
            {f.type === 'select' ? (
              <select
                id={f.id}
                required={f.required}
                value={values[f.id]}
                onChange={set(f.id)}
                className="w-full px-3 py-2.5 bg-cream-50 border border-cream-300 focus:border-gold-500 focus:outline-none text-navy-900 text-[15px] rounded-md"
              >
                <option value="">— select —</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea
                id={f.id}
                rows={3}
                required={f.required}
                value={values[f.id]}
                onChange={set(f.id)}
                placeholder={f.placeholder}
                className="w-full px-3 py-2.5 bg-cream-50 border border-cream-300 focus:border-gold-500 focus:outline-none text-navy-900 text-[15px] rounded-md resize-y"
              />
            ) : (
              <input
                id={f.id}
                type={f.type}
                required={f.required}
                value={values[f.id]}
                onChange={set(f.id)}
                placeholder={f.placeholder}
                className="w-full px-3 py-2.5 bg-cream-50 border border-cream-300 focus:border-gold-500 focus:outline-none text-navy-900 text-[15px] rounded-md"
              />
            )}
            {f.help && (
              <p className="mt-1.5 font-serif italic text-ink-400 text-[12.5px]">{f.help}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-7 pt-6 border-t border-cream-300 flex flex-wrap items-center justify-between gap-4">
        <p className="font-serif italic text-ink-400 text-[12.5px] flex items-center gap-2">
          <Check size={14} className="text-gold-700" weight="bold" />
          Field is capped — your reply confirms your seat.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="press-physics brass-glint-auto inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors disabled:opacity-50"
        >
          {sending ? 'Sending…' : 'Submit registration'} <ArrowUpRight size={14} weight="bold" />
        </button>
      </div>
    </form>
  );
}

/* ============================================================
   ThankYou — concierge-tone success state. Replaces the form
   inline once a 2xx response comes back from the registration
   endpoint. Visual language: cream card, gold rule, italic
   serif body, navy ink, single Trophy/Check accent.
   ============================================================ */
function ThankYou({ name }) {
  return (
    <div className="bg-white border border-cream-300 p-8 sm:p-12 lg:p-14 rounded-lg shadow-sm text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/15 text-gold-700 mb-6">
        <CheckCircle size={32} weight="duotone" />
      </div>
      <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase mb-3">
        Registration Received
      </p>
      <h3 className="font-display text-navy-900 text-3xl sm:text-4xl leading-[1.1] mb-5">
        {name ? `Thank you, ${name.split(' ')[0]}.` : 'Thank you for your registration.'}
      </h3>
      <div className="flex justify-center mb-7"><span className="gold-rule" /></div>
      <p className="font-serif italic text-navy-900 text-lg sm:text-xl leading-[1.6] max-w-xl mx-auto">
        A member of our team will be in touch with you shortly with your confirmation,
        tee-time and any further details. We look forward to welcoming you to the
        Kwekwe Golf Day.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          onClick={() => haptic(8)}
          className="press-physics inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 hover:bg-navy-800 text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
        >
          <ArrowLeft size={13} weight="bold" /> Return Home
        </Link>
      </div>
      <p className="mt-7 font-serif italic text-ink-400 text-[13px]">
        Concierge support: <a href={`mailto:${business.email}`} className="prose-link">{business.email}</a>
      </p>
    </div>
  );
}
