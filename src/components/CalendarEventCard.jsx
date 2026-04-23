import React, { useState } from 'react';
import { toast } from 'sonner';
import { useTilt } from '../hooks/useTilt';
import { haptic } from '../lib/haptics';
import { kwekweGolfDay, contact } from '../data/siteData';

// The Kwekwe Golf Day card — white bg, course photo left, form right.
export default function CalendarEventCard() {
  const event = kwekweGolfDay;
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(2);
  const [form, setForm] = useState({
    name: '',
    company: '',
    handicap: '',
    email: '',
    format: 'Individual',
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    haptic(12);
    if (!form.name || !form.email) {
      toast.error('Please enter your name and email.');
      return;
    }
    setSubmitting(true);

    // TODO: Wire to Django backend POST /api/kwekwe-register/
    try {
      const ctrl = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 2000);
      await fetch('/api/kwekwe-register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: ctrl.signal,
      });
      clearTimeout(timeout);
      toast.success('Registration received — check your email for confirmation.');
    } catch {
      // Fallback: email prefill
      const subject = encodeURIComponent('Kwekwe Golf Day 2026 — Registration');
      const body = encodeURIComponent(
        `Name: ${form.name}\nCompany: ${form.company}\nHandicap: ${form.handicap}\nEmail: ${form.email}\nFormat: ${form.format}\n\n(This registration was forwarded because the online form could not reach our server.)`
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      toast.info('Opened email to forward your registration.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative bg-white text-ink-900 transition-transform duration-500 will-change-transform shadow-[0_14px_48px_rgba(15,20,32,0.10)] border border-cream-300 rounded-lg overflow-hidden"
    >
      {/* Head */}
      <div className="text-center px-7 sm:px-8 lg:px-10 pt-7 sm:pt-8">
        <p className="font-display text-gold-700 text-[12.5px] tracking-[0.3em] uppercase">
          {event.shortName.toUpperCase()}
        </p>
        <h3 className="mt-3 font-display text-[22px] sm:text-[26px] lg:text-[28px] leading-tight text-navy-900">
          {event.dateLabel} <span className="text-gold-600">|</span> {event.location.toUpperCase()}
        </h3>
        <div className="mt-3 flex items-center justify-center">
          <span className="gold-rule" />
        </div>
      </div>

      {/* Body: photo + form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-0">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] overflow-hidden">
          <img
            src={event.cardPhoto}
            alt="Kwekwe Golf Club parkland fairway"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
        </div>

        <form onSubmit={submit} id="register" className="px-6 sm:px-7 py-6 sm:py-7 space-y-3.5">
          <div>
            <p className="text-[10.5px] tracking-[0.25em] uppercase text-gold-700 font-display mb-2">
              Secure Your Spot:
            </p>
            <div className="flex items-center gap-2 text-[12px] font-medium mb-3">
              {event.formats.map((f) => (
                <label
                  key={f}
                  className={`cursor-pointer px-3 py-1.5 border transition-colors rounded-md ${
                    form.format === (f === 'INDIVIDUAL' ? 'Individual' : 'Corporate Four-Ball')
                      ? 'border-gold-500 text-navy-900 bg-cream-50'
                      : 'border-ink-200 text-ink-500 hover:border-gold-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="format"
                    value={f === 'INDIVIDUAL' ? 'Individual' : 'Corporate Four-Ball'}
                    checked={form.format === (f === 'INDIVIDUAL' ? 'Individual' : 'Corporate Four-Ball')}
                    onChange={update('format')}
                    className="sr-only"
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="fld-label" htmlFor="kg-name">Name</label>
            <input id="kg-name" className="fld" placeholder="Full name" value={form.name} onChange={update('name')} required />
          </div>
          <div>
            <label className="fld-label" htmlFor="kg-company">Company</label>
            <input id="kg-company" className="fld" placeholder="Company (optional)" value={form.company} onChange={update('company')} />
          </div>
          <div>
            <label className="fld-label" htmlFor="kg-handicap">Handicap</label>
            <input id="kg-handicap" className="fld" placeholder="e.g. 14" value={form.handicap} onChange={update('handicap')} />
          </div>
          <div>
            <label className="fld-label" htmlFor="kg-email">Email</label>
            <input id="kg-email" type="email" className="fld" placeholder="you@company.com" value={form.email} onChange={update('email')} required />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="press-physics brass-glint w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-navy-900 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-md transition-colors"
          >
            {submitting ? 'Sending…' : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
