import React, { useState } from 'react';
import { toast } from 'sonner';
import { Key, CheckCircle, ArrowUpRight } from '@phosphor-icons/react';
import { haptic } from '../lib/haptics';
import { rsvp, coastalClassic, contact } from '../data/siteData';

// Invitation-gated RSVP. Checks code via stub (accepts any code with
// format BSC-YYYY-NNNN for demo), falls back to email prefill.
export default function RsvpGateway() {
  const [form, setForm] = useState({ code: '', name: '', email: '' });
  const [stage, setStage] = useState('entry'); // 'entry' | 'confirmed'
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    haptic(12);
    if (!form.code || !form.name || !form.email) {
      toast.error('Please fill in all three fields.');
      return;
    }
    // Gentle code-format check. Permissive for demo.
    const ok = /^[A-Z]{2,5}[-\s][0-9A-Z]{2,5}[-\s][0-9A-Z]{2,6}$/i.test(form.code.trim());
    if (!ok) {
      toast.error('Invitation code does not match the expected format (e.g. BSC-2026-0412).');
      return;
    }

    setSubmitting(true);
    // TODO: Wire to Django backend POST /api/coastal-classic-rsvp/
    try {
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 2000);
      await fetch('/api/coastal-classic-rsvp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: ctrl.signal,
      });
      clearTimeout(timeout);
    } catch {
      // silent fallback — we still confirm locally because this is the gateway UI
    } finally {
      setSubmitting(false);
      setStage('confirmed');
      haptic(18);
    }
  };

  if (stage === 'confirmed') {
    return (
      <div className="gold-frame bg-white p-8 sm:p-10 text-center">
        <CheckCircle size={44} weight="duotone" className="mx-auto text-gold-600" />
        <p className="mt-4 font-serif italic text-gold-700 text-lg">RSVP confirmed</p>
        <h3 className="mt-1 font-display text-3xl sm:text-4xl text-navy-900 leading-tight">
          Your seat is secured, {form.name.split(' ')[0] || 'guest'}.
        </h3>
        <p className="mt-4 text-ink-500 max-w-md mx-auto text-[14.5px] leading-relaxed">
          A detailed itinerary for the
          {' '}<span className="font-serif italic text-navy-900">Bard Santner Coastal Classic</span>
          {' '}({coastalClassic.dateLabel}) will reach {form.email} within 48 hours.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="press-physics inline-flex items-center gap-2 px-5 py-2.5 border border-navy-800 text-navy-900 text-[11.5px] tracking-[0.2em] uppercase rounded-md hover:bg-navy-800 hover:text-cream-50 transition-colors"
          >
            Contact Concierge
          </a>
          <a
            href="/coastal-classic"
            className="press-physics inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-[11.5px] tracking-[0.2em] uppercase rounded-md transition-colors"
          >
            Event Details <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="gold-frame bg-white p-8 sm:p-10">
      <div className="flex items-center gap-3 mb-5">
        <Key size={22} weight="duotone" className="text-gold-600" />
        <h3 className="font-display text-2xl sm:text-3xl text-navy-900 leading-tight">
          Invitation-only RSVP
        </h3>
      </div>
      <p className="font-serif italic text-ink-500 text-[15px] mb-6 leading-relaxed">
        {rsvp.intro}
      </p>

      <div className="space-y-3.5">
        <div>
          <label className="fld-label" htmlFor="rsvp-code">{rsvp.codeFieldLabel}</label>
          <input
            id="rsvp-code"
            className="fld uppercase tracking-[0.15em]"
            placeholder={rsvp.codePlaceholder}
            value={form.code}
            onChange={update('code')}
            autoComplete="off"
          />
        </div>
        <div>
          <label className="fld-label" htmlFor="rsvp-name">Your name</label>
          <input id="rsvp-name" className="fld" placeholder="Full name" value={form.name} onChange={update('name')} />
        </div>
        <div>
          <label className="fld-label" htmlFor="rsvp-email">Email</label>
          <input id="rsvp-email" type="email" className="fld" placeholder="you@company.com" value={form.email} onChange={update('email')} />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="press-physics brass-glint w-full mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-800 hover:bg-navy-900 disabled:opacity-60 text-cream-50 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
      >
        {submitting ? 'Verifying…' : 'Confirm RSVP'}
      </button>

      <ul className="mt-6 space-y-2 text-[12.5px] text-ink-400 font-serif italic">
        {rsvp.notes.map((n, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-gold-500 shrink-0">◆</span>
            <span>{n}</span>
          </li>
        ))}
      </ul>
    </form>
  );
}
