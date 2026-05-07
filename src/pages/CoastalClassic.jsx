import React, { useState, useCallback } from 'react';
import {
  Key,
  Wine,
  Flag,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import CapeCourseMap from '../components/CapeCourseMap';
import CountUp from '../components/CountUp';
import CoursePartners from '../components/CoursePartners';
import Lightbox from '../components/Lightbox';

// Page-level lightbox context — every gallery image registers itself by
// emitting { src, alt } on click; the page-scoped state opens the modal.
const LightboxCtx = React.createContext({ open: () => {} });
export function useLightbox() { return React.useContext(LightboxCtx); }

/**
 * ClickableImage — renders an <img> wrapped in a button that opens the
 * page-scoped lightbox to a specific index of a gallery.
 * Pass either {gallery: string[], index: number} or {images: {src,alt}[], index}.
 */
function ClickableImage({ src, alt, gallery, images, index = 0, className = '', imgClassName = '' }) {
  const { open } = useLightbox();
  const lbImages = images
    || (gallery ? gallery.map((g, i) => ({ src: g, alt: alt ? `${alt} · ${i + 1}` : '' })) : [{ src, alt }]);
  return (
    <button
      type="button"
      onClick={() => open(lbImages, index)}
      className={`group block w-full h-full p-0 m-0 border-0 cursor-zoom-in ${className}`}
      aria-label={alt ? `Open: ${alt}` : 'Open image'}
    >
      <img
        src={src || lbImages[index]?.src}
        alt={alt || ''}
        loading="lazy"
        className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] ${imgClassName}`}
      />
    </button>
  );
}
import { coastalClassic } from '../data/siteData';
import {
  COURSES,
  COASTAL_VENUES,
} from '../data/venues';

const PETER_FALKE = COASTAL_VENUES.find((v) => v.slug === 'peter-falke');

export default function CoastalClassic() {
  // Page-scoped lightbox — any descendant gallery uses useLightbox().open(images, idx)
  const [lb, setLb] = useState({ open: false, images: [], index: 0 });
  const openLB = useCallback((images, index = 0) => setLb({ open: true, images, index }), []);
  const closeLB = useCallback(() => setLb((s) => ({ ...s, open: false })), []);
  const setIndex = useCallback((i) => setLb((s) => ({ ...s, index: i })), []);

  return (
    <LightboxCtx.Provider value={{ open: openLB }}>
    <PageTransition>
      <SEO
        title="Coastal Classic 2026 — Bard Santner Golf | Cape Town, Sept 13–19"
        description="Invitation-only championship across King David Mowbray, Clovelly, De Zalze and Rondebosch — paired with a Peter Falke wine excursion and the AfrAsia Bank Mauritius Open as grand prize."
      />

      {/* ============================================================
          HERO — kept (transparent navbar continuation)
          ============================================================ */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-end overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          {/* Vision: Devil's Peak parkland aerial — King David Mowbray hero */}
          <img
            src="/images/venues/king-david-mowbray/hero.jpeg"
            alt="King David Mowbray — Devil's Peak backdrop"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(15,26,43,0.55)' }} />
          <div className="absolute inset-0" style={{
            background:
              'linear-gradient(180deg, rgba(15,20,32,0.7) 0%, transparent 30%, transparent 60%, rgba(15,20,32,0.85) 100%)',
          }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionReveal>
            <p className="inline-flex items-center gap-2 font-serif italic text-gold-300 text-sm tracking-[0.22em] uppercase mb-4">
              <Key size={14} weight="duotone" /> {coastalClassic.status}
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1
              className="headline-display text-gold-400 font-bold leading-[1.02] text-balance"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 5.2rem)', textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
            >
              {coastalClassic.name}
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="mt-4 font-serif italic text-cream-50 text-xl sm:text-2xl">
              {coastalClassic.dateLabel} <span className="text-gold-300">|</span> {coastalClassic.locationLong}
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <p className="mt-6 text-cream-100/90 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl">
              An invitation-only premier tour of the Western Cape&apos;s finest fairways. Four iconic
              courses, one curated wine excursion, and a grand prize that crosses the Indian Ocean.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ============================================================
          THE PENINSULA — full-bleed map. The whole section IS the map.
          A subtle navy → transparent gradient at the top dissolves the
          hero into the map for a seamless transition.
          ============================================================ */}
      <section className="relative w-full overflow-hidden">
        <CapeCourseMap flat height="h-[58vh] sm:h-[64vh] md:h-[70vh] min-h-[440px]" />

        {/* Top fade — navy hero dissolves into the map tiles */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 sm:h-32 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,20,32,0.85) 0%, rgba(15,20,32,0.35) 55%, rgba(15,20,32,0) 100%)',
          }}
        />

        {/* Floating title pill — top-left, glassmorphism, doesn't block tiles */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 lg:top-10 lg:left-10 max-w-[88vw] sm:max-w-md pointer-events-none">
          <div className="bg-navy-900/72 backdrop-blur-md border border-gold-500/30 rounded-lg px-5 py-4 sm:px-6 sm:py-5 pointer-events-auto">
            <p className="font-serif italic text-gold-300 text-[11px] tracking-[0.3em] uppercase mb-1.5">
              The Peninsula
            </p>
            <p className="font-display text-cream-50 text-lg sm:text-xl leading-tight">
              Four courses, sixty kilometres of coast.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          VENUE I — KING DAVID MOWBRAY
          Layout: parkland-mountain split (image left 60%, copy right 40%)
          ============================================================ */}
      <VenueParklandSplit venue={COURSES[0]} />

      {/* ============================================================
          VENUE II — CLOVELLY
          Layout: aerial-overlay (full-bleed photo with overlapping copy panel)
          ============================================================ */}
      <VenueAerialOverlay venue={COURSES[1]} />

      {/* ============================================================
          PETER FALKE — wine interlude (Cape Dutch warmth)
          ============================================================ */}
      <PeterFalkeInterlude venue={PETER_FALKE} />

      {/* ============================================================
          VENUE III — DE ZALZE
          Layout: winelands-collage (3-up image grid + offset copy)
          ============================================================ */}
      <VenueWinelandsCollage venue={COURSES[2]} />

      {/* ============================================================
          VENUE IV — RONDEBOSCH
          Layout: golden-hour minimalist (single hero + centered copy below)
          ============================================================ */}
      <VenueGoldenHour venue={COURSES[3]} />

      {/* ============================================================
          COURSE PARTNERS — official venue marks
          ============================================================ */}
      <CoursePartners
        tone="dark"
        title="The Four Courses"
        subtitle="Played in order, across the Cape week."
      />

    </PageTransition>
    <Lightbox
      open={lb.open}
      images={lb.images}
      index={lb.index}
      onClose={closeLB}
      onIndex={setIndex}
    />
    </LightboxCtx.Provider>
  );
}

/* ============================================================
   VENUE LAYOUT 1 — Parkland Split
   Used for: King David Mowbray (Devil's Peak parkland)
   ============================================================ */
function VenueParklandSplit({ venue }) {
  return (
    <section id={venue.slug} className="bg-cream-50 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Image left */}
            <div className="lg:col-span-7 relative">
              {/* Vision: Devil's Peak with parkland green & water hazard — establishes tradition + setting */}
              <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-lg">
                <ClickableImage
                  src={venue.hero}
                  alt={`${venue.name} — ${venue.backdrop}`}
                  gallery={venue.gallery}
                  index={0}
                />
              </div>
              {/* Roman day numeral + logo overlay */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-cream-50 pl-4 pr-6 py-3 flex items-center gap-4">
                <img src={venue.logo} alt={`${venue.name} logo`} loading="lazy" className="h-12 w-12 object-contain" />
                <div>
                  <p className="font-serif italic text-gold-700 text-[10px] tracking-[0.3em] uppercase">Round</p>
                  <p className="font-display text-navy-900 text-3xl">I</p>
                </div>
              </div>
            </div>

            {/* Copy right */}
            <div className="lg:col-span-5">
              <p className="font-serif italic text-gold-700 text-[12px] tracking-[0.3em] uppercase mb-3">
                Round I · {venue.location}
              </p>
              <h2 className="font-display text-navy-900 text-4xl sm:text-5xl leading-[1.05] mb-5">
                {venue.name}
              </h2>
              <SpecRow venue={venue} />
              <p className="font-serif italic text-ink-700 text-lg leading-relaxed mb-5">
                {venue.intro}
              </p>
              <p className="text-ink-700 text-[15px] leading-relaxed mb-7">
                {venue.legacy}
              </p>
              <SignatureCallout venue={venue} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   VENUE LAYOUT 2 — Aerial Overlay
   Used for: Clovelly (Silvermine Valley aerial)
   ============================================================ */
function VenueAerialOverlay({ venue }) {
  return (
    <section id={venue.slug} className="relative bg-navy-900 text-cream-50 overflow-hidden scroll-mt-20">
      {/* Vision: full-bleed aerial of the Clovelly Silvermine valley with island green */}
      <div className="relative aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7] overflow-hidden">
        <ClickableImage
          src={venue.hero}
          alt={`${venue.name} aerial — ${venue.backdrop}`}
          gallery={venue.gallery}
          index={0}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(180deg, rgba(15,20,32,0.05) 0%, rgba(15,20,32,0.15) 60%, rgba(15,20,32,0.85) 100%)',
        }} />
      </div>

      {/* Overlapping copy panel */}
      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 -mt-32 sm:-mt-48 pb-20 sm:pb-28">
        <SectionReveal>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-7 bg-navy-800 border border-gold-500/20 rounded-lg p-7 sm:p-10">
              <div className="flex items-center gap-4 mb-5">
                <img src={venue.logo} alt={`${venue.name} logo`} loading="lazy" className="h-14 w-14 object-contain shrink-0" />
                <div>
                  <p className="font-serif italic text-gold-400 text-[11px] tracking-[0.3em] uppercase">
                    Round II
                  </p>
                  <p className="font-display text-cream-50 text-xs tracking-[0.18em] uppercase">
                    {venue.location}
                  </p>
                </div>
              </div>
              <h2 className="font-display text-cream-50 text-4xl sm:text-5xl leading-[1.05] mb-5">
                {venue.name}
              </h2>
              <p className="font-serif italic text-cream-100/90 text-lg leading-relaxed mb-5">
                {venue.intro}
              </p>
              <p className="text-cream-100/80 text-[15px] leading-relaxed">
                {venue.legacy}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <SpecRow venue={venue} dark />
              <SignatureCallout venue={venue} dark />
              <div className="grid grid-cols-3 gap-2 mt-2">
                {venue.gallery.slice(1, 4).map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden border border-cream-50/10 rounded-lg">
                    <ClickableImage
                      src={img}
                      alt={`${venue.name} hole detail ${i + 1}`}
                      gallery={venue.gallery}
                      index={i + 1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   PETER FALKE — wine interlude (warm Cape Dutch)
   ============================================================ */
function PeterFalkeInterlude({ venue }) {
  if (!venue) return null;
  return (
    <section id={venue.slug} className="relative bg-cream-50 text-navy-900 overflow-hidden scroll-mt-20">
      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="font-serif italic text-gold-700 text-sm tracking-[0.3em] uppercase mb-3 inline-flex items-center gap-2">
              <Wine size={14} weight="duotone" /> The 19th Hole · Wine excursion
            </p>
            <h2 className="font-display text-navy-900 text-4xl sm:text-6xl leading-[1.04] max-w-3xl mx-auto">
              The week pauses at <span className="font-serif italic text-gold-700">{venue.short}</span>.
            </h2>
            <p className="mt-5 font-serif italic text-ink-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {venue.intro}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          {/* Multi-column vertical scrolling marquee — three columns of Peter Falke
              imagery, each auto-scrolling at a different speed/direction. Top + bottom
              fade out so the strip reads as a flowing river of photographs.
              Uses every supplied Peter Falke image. */}
          <PeterFalkeMarquee gallery={venue.gallery} />
        </SectionReveal>

        <SectionReveal>
          <div className="mt-12 max-w-3xl mx-auto bg-navy-900 border border-gold-500/40 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <img src={venue.logo} alt="Peter Falke logo" loading="lazy" className="h-12 w-12 object-contain shrink-0" />
              <div>
                <p className="font-serif italic text-gold-400 text-[11px] tracking-[0.3em] uppercase mb-1">
                  The 19th Hole
                </p>
                <p className="font-display text-cream-50 text-lg leading-tight">
                  Peter Falke Vineyard Excursion
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   VENUE LAYOUT 3 — Winelands Collage
   Used for: De Zalze (Stellenbosch winelands)
   ============================================================ */
function VenueWinelandsCollage({ venue }) {
  return (
    <section id={venue.slug} className="bg-navy-900 text-cream-50 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Copy left, sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <p className="font-serif italic text-gold-400 text-[12px] tracking-[0.3em] uppercase mb-3">
                Round III · {venue.location}
              </p>
              <h2 className="font-display text-cream-50 text-4xl sm:text-5xl leading-[1.05] mb-5">
                {venue.name}
              </h2>
              <p className="font-serif italic text-cream-100/70 text-base mb-3">
                Designed by <span className="text-gold-400">{venue.designer}</span>
              </p>
              <SpecRow venue={venue} dark />
              <p className="font-serif italic text-cream-100/90 text-lg leading-relaxed mb-5">
                {venue.intro}
              </p>
              <p className="text-cream-100/80 text-[15px] leading-relaxed mb-7">
                {venue.legacy}
              </p>
              <SignatureCallout venue={venue} dark />
            </div>

            {/* 3-up collage right (different sizes) */}
            <div className="lg:col-span-7">
              {/* Vision: hero shot — Stellenbosch mountain backdrop with oak-lined fairway */}
              <div className="aspect-[16/10] overflow-hidden mb-4 rounded-lg">
                <ClickableImage src={venue.hero} alt={`${venue.name} — ${venue.backdrop}`} gallery={venue.gallery} index={0} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Vision: clubhouse view from green */}
                <div className="aspect-[5/6] overflow-hidden rounded-lg">
                  <ClickableImage src={venue.gallery[1]} alt="De Zalze clubhouse view" gallery={venue.gallery} index={1} />
                </div>
                {/* Vision: 12th hole + 14th par-5 stacked */}
                <div className="grid grid-rows-2 gap-4">
                  <div className="aspect-[5/3] overflow-hidden rounded-lg">
                    <ClickableImage src={venue.gallery[2]} alt="De Zalze 12th hole" gallery={venue.gallery} index={2} />
                  </div>
                  <div className="aspect-[5/3] overflow-hidden rounded-lg">
                    <ClickableImage src={venue.gallery[3]} alt="De Zalze 14th par-5" gallery={venue.gallery} index={3} />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-cream-100/70 font-serif italic text-sm">
                <img src={venue.logo} alt="De Zalze logo" loading="lazy" className="h-10 w-10 object-contain" />
                <span>{venue.accolade}</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   VENUE LAYOUT 4 — Golden Hour Minimalist
   Used for: Rondebosch (sunset bunker aerial)
   ============================================================ */
function VenueGoldenHour({ venue }) {
  return (
    <section id={venue.slug} className="relative bg-cream-50 text-navy-900 overflow-hidden scroll-mt-20">
      {/* Vision: golden-hour sunset aerial with cluster of three bunkers.
          The image stays dramatic with its own dark gradient; only the editorial
          text block below it switches to a cream/white identity. */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
        <ClickableImage
          src={venue.hero}
          alt={`${venue.name} — ${venue.backdrop}`}
          gallery={venue.gallery}
          index={0}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, transparent 55%, rgba(15,20,32,0.7) 100%)' }} />

        {/* Centered logo + roman numeral */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <img src={venue.logo} alt={`${venue.name} logo`} loading="lazy" className="h-20 w-20 object-contain mx-auto mb-4 opacity-90" />
            <p className="font-display text-gold-400 text-[10px] tracking-[0.4em] uppercase mb-2">Round IV · Final</p>
            <p className="font-display text-cream-50 text-7xl sm:text-9xl leading-none tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}>IV</p>
          </div>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-5 sm:px-8 py-20 sm:py-24 text-center">
        <SectionReveal>
          <p className="font-serif italic text-gold-700 text-[12px] tracking-[0.3em] uppercase mb-3">
            Round IV · {venue.location}
          </p>
          <h2 className="font-display text-navy-900 text-4xl sm:text-5xl leading-[1.05] mb-5">
            {venue.name}
          </h2>
          <p className="font-serif italic text-ink-700 text-lg sm:text-xl leading-relaxed mb-5">
            {venue.intro}
          </p>
          <p className="text-ink-700 text-[15px] leading-relaxed mb-8">
            {venue.legacy}
          </p>
          <SpecRow venue={venue} center />
          <div className="mt-8 max-w-xl mx-auto bg-navy-900 border border-gold-500/40 rounded-lg p-6 text-left">
            <p className="font-serif italic text-gold-400 text-[11px] tracking-[0.3em] uppercase mb-2">
              {venue.signature.hole}
            </p>
            <p className="font-serif italic text-cream-50 text-base leading-relaxed">
              {venue.signature.detail}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   Reusable spec row + signature callout
   ============================================================ */
function SpecRow({ venue, dark = false, center = false }) {
  const labelClass = dark
    ? 'text-gold-400'
    : 'text-gold-700';
  const valueClass = dark
    ? 'text-cream-50'
    : 'text-navy-900';
  const items = [
    { label: 'Founded', value: venue.founded },
    { label: 'Par', value: venue.par },
    { label: 'Holes', value: venue.holes },
  ];
  return (
    <div className={`flex flex-wrap ${center ? 'justify-center' : ''} gap-x-8 gap-y-3 mb-6 border-y border-current/15 py-4`}>
      {items.map((it) => (
        <div key={it.label}>
          <p className={`font-display ${labelClass} text-[10px] tracking-[0.3em] uppercase mb-1`}>{it.label}</p>
          <p className={`font-display ${valueClass} text-2xl tabular-nums`}>{it.value}</p>
        </div>
      ))}
      <div className="min-w-0 flex-1">
        <p className={`font-display ${labelClass} text-[10px] tracking-[0.3em] uppercase mb-1`}>Designer</p>
        <p className={`font-serif italic ${valueClass} text-base truncate`}>{venue.designer}</p>
      </div>
    </div>
  );
}

function SignatureCallout({ venue, dark = false }) {
  const cls = dark
    ? 'bg-navy-900/70 border-gold-400/30 text-cream-50'
    : 'bg-navy-900 border-gold-500/40 text-cream-50';
  return (
    <div className={`border ${cls} rounded-lg p-5 sm:p-6`}>
      <p className="font-serif italic text-gold-400 text-[11px] tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
        <Flag size={12} weight="duotone" /> Signature · {venue.signature.hole}
      </p>
      <p className="font-serif italic text-base leading-relaxed">
        {venue.signature.detail}
      </p>
    </div>
  );
}

/* ============================================================
   PETER FALKE MARQUEE — three vertical columns of auto-scrolling
   imagery, alternating direction. Top + bottom mask out so the
   strip reads as a flowing river of photographs.
   ============================================================ */
function PeterFalkeMarquee({ gallery }) {
  // Distribute images across three columns. Use every supplied photo at least
  // twice across the columns so we have enough density per stripe.
  const cols = [
    [gallery[0], gallery[3], gallery[1], gallery[5]], // 4 images
    [gallery[2], gallery[5], gallery[4], gallery[0]],
    [gallery[1], gallery[4], gallery[3], gallery[2]],
  ];
  const speeds = [42, 32, 50]; // seconds per cycle
  const dirs   = ['up', 'down', 'up'];

  return (
    <div
      className="relative max-w-5xl mx-auto h-[520px] sm:h-[640px] overflow-hidden rounded-lg"
      style={{
        // fade top + bottom so the marquee doesn't butt against hard edges
        WebkitMaskImage:
          'linear-gradient(180deg, transparent 0%, #000 14%, #000 86%, transparent 100%)',
        maskImage:
          'linear-gradient(180deg, transparent 0%, #000 14%, #000 86%, transparent 100%)',
      }}
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-4 h-full">
        {cols.map((images, ci) => (
          <PeterFalkeColumn
            key={ci}
            images={images}
            duration={speeds[ci]}
            direction={dirs[ci]}
          />
        ))}
      </div>
    </div>
  );
}

function PeterFalkeColumn({ images, duration, direction }) {
  // Duplicate the image list so the loop is seamless — when the inner stack
  // has scrolled by exactly its own height, we're back at the start.
  const stack = [...images, ...images];
  const animClass =
    direction === 'up' ? 'pf-marquee-up' : 'pf-marquee-down';
  const { open } = useLightbox();
  const lbImages = images.map((src, i) => ({
    src,
    alt: `Peter Falke · ${i + 1}`,
  }));

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex flex-col gap-3 sm:gap-4 ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {stack.map((src, i) => (
          <button
            type="button"
            key={i}
            onClick={() => open(lbImages, i % images.length)}
            className="aspect-[4/5] overflow-hidden rounded-lg shrink-0 cursor-zoom-in p-0 m-0 border-0 group"
            aria-label="Open photograph"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
