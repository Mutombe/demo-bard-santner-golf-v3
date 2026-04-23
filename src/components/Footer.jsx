import React from 'react';
import { Link } from 'react-router-dom';
import {
  GlobeHemisphereWest,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  Diamond,
} from '@phosphor-icons/react';
import { business, contact } from '../data/siteData';
import { haptic } from '../lib/haptics';

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-cream-100 mt-0">
      <div className="grain" />

      {/* Gold thread */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-16">
        {/* Upper panel: brand + pillars + offices */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <Link to="/" onClick={() => haptic(6)} className="flex items-center gap-2.5">
              <img
                src={business.logoIcon}
                alt={business.parent}
                className="h-10 w-auto"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-display text-lg text-cream-50">Bard Santner Golf</span>
            </Link>
            <p className="text-sm leading-relaxed text-cream-200/80 max-w-xs font-serif italic">
              Two iconic events. One uncommon standard. Hosting corporate and invitational golf
              across Southern Africa since 2019.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[15px] text-gold-400 mb-5 tracking-wide">2026 Season</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/coastal-classic" className="text-cream-200/80 hover:text-gold-400 transition-colors">Coastal Classic</Link></li>
              <li><Link to="/kwekwe-golf-day" className="text-cream-200/80 hover:text-gold-400 transition-colors">Kwekwe Golf Day</Link></li>
              <li><Link to="/newsletter" className="text-cream-200/80 hover:text-gold-400 transition-colors">Newsletter</Link></li>
              <li><Link to="/rsvp" className="text-cream-200/80 hover:text-gold-400 transition-colors">Classic RSVP Gateway</Link></li>
              <li><Link to="/rules" className="text-cream-200/80 hover:text-gold-400 transition-colors">Rules &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[15px] text-gold-400 mb-5 tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/past-events" className="text-cream-200/80 hover:text-gold-400 transition-colors">Past Events (2025)</Link></li>
              <li><Link to="/sponsorship" className="text-cream-200/80 hover:text-gold-400 transition-colors">Sponsorship</Link></li>
              <li><Link to="/contact" className="text-cream-200/80 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li>
                <a href="/tournament-conditions.pdf" target="_blank" rel="noopener noreferrer"
                   className="text-cream-200/80 hover:text-gold-400 transition-colors">
                  Tournament Conditions (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[15px] text-gold-400 mb-5 tracking-wide">Offices</h4>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li>
                <p className="font-serif italic text-cream-50 text-[14px] mb-0.5">Harare</p>
                {contact.officeHarare.address}
              </li>
              <li>
                <p className="font-serif italic text-cream-50 text-[14px] mb-0.5">Cape Town</p>
                {contact.officeCapeTown.address}
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-gold-400">{contact.email}</a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-gold-400">{contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower strip: globe + copyright · socials · links · diamond */}
        <div className="pt-6 border-t border-navy-700/70 flex flex-col md:flex-row items-center justify-between gap-5 text-[12px] text-cream-200/70">
          <div className="flex items-center gap-2">
            <GlobeHemisphereWest size={16} weight="regular" className="text-gold-500" />
            <span>© 2026, bardsantnergolf.com</span>
          </div>

          <div className="flex items-center gap-5">
            <a href={business.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-cream-200/80 hover:text-gold-400 transition-colors">
              <LinkedinLogo size={18} />
            </a>
            <a href={business.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream-200/80 hover:text-gold-400 transition-colors">
              <InstagramLogo size={18} />
            </a>
            <a href={business.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-cream-200/80 hover:text-gold-400 transition-colors">
              <YoutubeLogo size={18} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <span className="text-cream-200/30">|</span>
            <Link to="/sitemap" className="hover:text-gold-400 transition-colors">Full sitemap</Link>
            <Diamond size={14} weight="fill" className="text-gold-500 ml-1" />
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-cream-200/60 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 underline-offset-2 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
