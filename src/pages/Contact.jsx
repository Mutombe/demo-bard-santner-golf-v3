import React, { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo, Clock } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import { business, contact } from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General enquiry', message: '' });
  const [channel, setChannel] = useState('email'); // 'email' | 'whatsapp'
  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    haptic(12);
    if (!form.name || !form.message) { toast.error('Please fill in your name and message.'); return; }
    const body = `Hello Bard Santner Golf,\n\n${form.message}\n\n— ${form.name}${form.phone ? ' · ' + form.phone : ''}${form.email ? ' · ' + form.email : ''}`;
    if (channel === 'whatsapp') {
      const url = `${contact.whatsappBase}?text=${encodeURIComponent(body)}`;
      window.open(url, '_blank');
      toast.success('Opening WhatsApp with your message prefilled.');
    } else {
      const subject = encodeURIComponent(form.subject);
      const mailto = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      toast.success('Opening your email client.');
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Bard Santner Golf | Harare & Cape Town"
        description="Reach Bard Santner Golf. Harare and Cape Town offices. Email golf@bardsantner.com or call +263 861 2000 700."
      />

      <section className="bg-cream-100 pt-16 sm:pt-24 pb-8">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <SectionReveal>
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.22em] uppercase">Begin a Conversation</p>
            <h1 className="mt-3 font-display text-navy-900 text-5xl sm:text-6xl lg:text-[72px] leading-[1.05]">
              Contact
            </h1>
            <div className="mt-4 flex justify-center"><span className="gold-rule" /></div>
            <p className="mt-6 max-w-2xl mx-auto font-serif italic text-ink-500 text-[16px] sm:text-[18px] leading-relaxed">
              Enquiries about sponsorship, invitations or the Kwekwe Golf Day — we answer every message
              within the working day.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream-100 py-10 sm:py-16">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14">
          {/* Left: offices & contact */}
          <SectionReveal className="space-y-8">
            <div className="bg-white border border-cream-300 p-7">
              <p className="font-display text-gold-700 text-[11px] tracking-[0.28em] uppercase">{contact.officeHarare.label}</p>
              <h3 className="mt-2 font-display text-2xl text-navy-900">Milton Park, Harare</h3>
              <ul className="mt-4 space-y-3 text-[14.5px] text-ink-700">
                <li className="flex gap-3"><MapPin size={18} className="text-gold-600 shrink-0 mt-0.5" /><span>{contact.officeHarare.address}</span></li>
                <li className="flex gap-3"><Clock size={18} className="text-gold-600 shrink-0 mt-0.5" /><span>{contact.officeHarare.hours}</span></li>
              </ul>
            </div>

            <div className="bg-white border border-cream-300 p-7">
              <p className="font-display text-gold-700 text-[11px] tracking-[0.28em] uppercase">{contact.officeCapeTown.label}</p>
              <h3 className="mt-2 font-display text-2xl text-navy-900">Portside Tower, Cape Town</h3>
              <ul className="mt-4 space-y-3 text-[14.5px] text-ink-700">
                <li className="flex gap-3"><MapPin size={18} className="text-gold-600 shrink-0 mt-0.5" /><span>{contact.officeCapeTown.address}</span></li>
                <li className="flex gap-3"><Clock size={18} className="text-gold-600 shrink-0 mt-0.5" /><span>{contact.officeCapeTown.hours}</span></li>
              </ul>
            </div>

            <div className="bg-navy-800 text-cream-50 p-7 relative overflow-hidden">
              <div className="grain opacity-50" />
              <div className="relative space-y-3 text-[14.5px]">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-gold-400">
                  <EnvelopeSimple size={18} /> {contact.email}
                </a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-gold-400">
                  <Phone size={18} /> {contact.phone}
                </a>
                <a href={contact.whatsappGeneric} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold-400">
                  <WhatsappLogo size={18} /> WhatsApp — chat now
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Right: form */}
          <SectionReveal delay={100}>
            <form onSubmit={submit} className="bg-white border border-cream-300 p-7 sm:p-9">
              <h3 className="font-display text-2xl sm:text-3xl text-navy-900">Send us a note</h3>
              <p className="mt-2 font-serif italic text-ink-500 text-[14.5px]">
                Choose a channel — we prefill either email or WhatsApp with your details.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {['email', 'whatsapp'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => { setChannel(c); haptic(6); }}
                    className={`press-physics px-4 py-2.5 text-[11.5px] tracking-[0.2em] uppercase font-medium rounded-full transition-colors border ${
                      channel === c
                        ? c === 'whatsapp'
                          ? 'bg-gold-500 border-gold-500 text-navy-900'
                          : 'bg-navy-800 border-navy-800 text-cream-50'
                        : 'border-ink-200 text-ink-500 hover:border-gold-300'
                    }`}
                  >
                    {c === 'whatsapp' ? 'Send via WhatsApp' : 'Send via Email'}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3.5">
                <div><label className="fld-label">Name</label><input className="fld" value={form.name} onChange={update('name')} required /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div><label className="fld-label">Email</label><input type="email" className="fld" value={form.email} onChange={update('email')} /></div>
                  <div><label className="fld-label">Phone</label><input className="fld" value={form.phone} onChange={update('phone')} /></div>
                </div>
                <div>
                  <label className="fld-label">Subject</label>
                  <select className="fld" value={form.subject} onChange={update('subject')}>
                    <option>General enquiry</option>
                    <option>Coastal Classic — invitation request</option>
                    <option>Kwekwe Golf Day — registration question</option>
                    <option>Sponsorship</option>
                    <option>Press / Media</option>
                  </select>
                </div>
                <div><label className="fld-label">Message</label><textarea rows="5" className="fld" value={form.message} onChange={update('message')} required /></div>
              </div>

              <button
                type="submit"
                className={`press-physics brass-glint w-full mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 text-[11.5px] tracking-[0.22em] uppercase font-medium rounded-full transition-colors ${
                  channel === 'whatsapp'
                    ? 'bg-gold-500 hover:bg-gold-400 text-navy-900'
                    : 'bg-navy-800 hover:bg-navy-900 text-cream-50'
                }`}
              >
                {channel === 'whatsapp' ? 'Open WhatsApp' : 'Send Email'}
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
