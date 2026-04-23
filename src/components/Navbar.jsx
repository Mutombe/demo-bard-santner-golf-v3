import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, CaretDown, CaretRight } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { business } from '../data/siteData';
import { haptic } from '../lib/haptics';

const topLinks = [
  { to: '/', label: 'Home' },
  // 2026 Calendar handled separately (dropdown)
  { to: '/past-events', label: 'Past Events (2025)' },
  { to: '/sponsorship', label: 'Sponsorship' },
  { to: '/contact', label: 'Contact' },
];

const calendarLinks = [
  { to: '/coastal-classic', label: 'Coastal Classic (Invite Only)' },
  { to: '/kwekwe-golf-day', label: 'Kwekwe Golf Day' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);           // mobile drawer
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const [mobileCalOpen, setMobileCalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const loc = useLocation();

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileCalOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', onClick);
      return () => document.removeEventListener('mousedown', onClick);
    }
  }, [dropdownOpen]);

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDropdownOpen(false); };
    if (dropdownOpen) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [dropdownOpen]);

  const onCalendar =
    loc.pathname === '/coastal-classic' || loc.pathname === '/kwekwe-golf-day';

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-20 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 press-physics" onClick={() => haptic(6)}>
            <img
              src={business.logo}
              alt={business.parent}
              className="h-10 sm:h-11 w-auto shrink-0"
              loading="eager"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="hidden xs:flex flex-col leading-tight">
              <span className="font-display text-[15px] sm:text-[16px] text-navy-900 tracking-tight">
                Bard Santner
              </span>
              <span className="font-serif italic text-[12px] sm:text-[13px] text-gold-700 tracking-wide -mt-0.5">
                Golf
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-[12.5px] tracking-[0.18em] uppercase font-medium transition-colors relative ${
                  isActive ? 'text-navy-900' : 'text-ink-600 hover:text-navy-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-500" />}
                </>
              )}
            </NavLink>

            {/* 2026 Calendar dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => { setDropdownOpen(v => !v); haptic(6); }}
                className={`flex items-center gap-1.5 text-[12.5px] tracking-[0.18em] uppercase font-medium transition-colors ${
                  onCalendar ? 'text-navy-900' : 'text-ink-600 hover:text-navy-900'
                }`}
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
              >
                2026 Calendar
                <CaretDown size={10} weight="bold" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                {onCalendar && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-500" />}
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[280px]"
                  >
                    <div className="bg-white shadow-[0_12px_40px_rgba(15,20,32,0.12)] border border-cream-300 overflow-hidden">
                      <div className="h-px bg-gold-500" />
                      {calendarLinks.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          onClick={() => { setDropdownOpen(false); haptic(6); }}
                          className="block px-5 py-3.5 font-serif text-[16px] text-navy-900 hover:bg-cream-50 hover:text-gold-700 transition-colors border-b border-cream-200 last:border-b-0"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/past-events"
              className={({ isActive }) =>
                `text-[12.5px] tracking-[0.18em] uppercase font-medium transition-colors relative ${
                  isActive ? 'text-navy-900' : 'text-ink-600 hover:text-navy-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Past Events (2025)
                  {isActive && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-500" />}
                </>
              )}
            </NavLink>
            <NavLink
              to="/sponsorship"
              className={({ isActive }) =>
                `text-[12.5px] tracking-[0.18em] uppercase font-medium transition-colors relative ${
                  isActive ? 'text-navy-900' : 'text-ink-600 hover:text-navy-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Sponsorship
                  {isActive && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-500" />}
                </>
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[12.5px] tracking-[0.18em] uppercase font-medium transition-colors relative ${
                  isActive ? 'text-navy-900' : 'text-ink-600 hover:text-navy-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-500" />}
                </>
              )}
            </NavLink>
          </nav>

          {/* RSVP CTA + mobile menu */}
          <div className="flex items-center gap-2">
            <Link
              to="/rsvp"
              onClick={() => haptic(8)}
              className="press-physics hidden sm:inline-flex items-center gap-2 px-4 h-10 border border-navy-800 text-[11.5px] tracking-[0.2em] uppercase font-medium text-navy-900 hover:bg-navy-800 hover:text-cream-50 transition-colors rounded-full"
            >
              Sign In / RSVP
            </Link>
            <button
              onClick={() => { setOpen(true); haptic(6); }}
              aria-label="Open menu"
              className="h-11 w-11 flex lg:hidden items-center justify-center text-navy-900 press-physics"
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-navy-900/50" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-cream-300">
            <span className="font-display text-lg text-navy-900">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 flex items-center justify-center text-navy-900 press-physics"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-0 overflow-y-auto">
            <NavLink
              to="/"
              end
              onClick={() => haptic(6)}
              className={({ isActive }) =>
                `py-3.5 border-b border-cream-200 font-display text-2xl transition-colors ${
                  isActive ? 'text-gold-700' : 'text-navy-900'
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile 2026 Calendar expandable */}
            <button
              onClick={() => { setMobileCalOpen(v => !v); haptic(6); }}
              className="flex items-center justify-between py-3.5 border-b border-cream-200 font-display text-2xl text-navy-900 text-left press-physics"
            >
              <span>2026 Calendar</span>
              <CaretRight
                size={18}
                weight="bold"
                className={`transition-transform duration-200 ${mobileCalOpen ? 'rotate-90' : ''}`}
              />
            </button>
            <AnimatePresence>
              {mobileCalOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 border-l border-gold-500 ml-1 my-1">
                    {calendarLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => haptic(6)}
                        className="block py-2.5 font-serif italic text-lg text-navy-700 hover:text-gold-700"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {topLinks.slice(1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => haptic(6)}
                className={({ isActive }) =>
                  `py-3.5 border-b border-cream-200 font-display text-2xl transition-colors ${
                    isActive ? 'text-gold-700' : 'text-navy-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <Link
              to="/rsvp"
              onClick={() => haptic(8)}
              className="mt-6 press-physics w-full flex items-center justify-center px-5 py-3.5 bg-navy-800 text-cream-50 text-[12px] tracking-[0.2em] uppercase font-medium rounded-full"
            >
              Sign In / RSVP
            </Link>
          </nav>
          <div className="px-6 py-6 border-t border-cream-300 space-y-1 text-xs text-ink-500">
            <p>{business.email}</p>
            <p>{business.phone}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
