// Bard Santner Golf V3 — 2026 Season
// Single source of truth for all site content.

export const business = {
  name: 'Bard Santner Golf',
  parent: 'Bard Santner Inc.',
  tagline: 'Elevating the Game',
  subTagline: 'Two Iconic Events, One Uncommon Standard.',
  logo: '/logo.png',
  logoIcon: '/favicon.png',
  email: 'golf@bardsantner.com',
  phone: '+263 861 2000 700',
  whatsapp: '+263 77 000 0000',
  whatsappBase: 'https://wa.me/263770000000',
  addresses: {
    harare: '4 Harvey Brown Avenue, Milton Park, Harare, Zimbabwe',
    capetown: '15th Floor, Portside Tower, 5 Buitengracht Street, Cape Town, South Africa',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/bard-santner',
    instagram: 'https://www.instagram.com/bardsantnergolf',
    youtube: 'https://www.youtube.com/@bardsantnergolf',
  },
};

export const hero = {
  image:
    'https://images.unsplash.com/photo-1592919505780-303950717480?w=2000&q=80&auto=format&fit=crop',
  fallback:
    'https://images.unsplash.com/photo-1730372645289-a1b54da81e98?auto=format&fit=crop&w=2000&q=80',
  kicker: '2026 Season',
  headlineLines: [
    'ELEVATING THE GAME:',
    'THE 2026 BARD SANTNER',
    'GOLF SEASON.',
  ],
  subheadline: 'Two Iconic Events, One Uncommon Standard.',
  ctaPrimary: { label: 'View the 2026 Calendar', to: '/#calendar' },
  ctaSecondary: { label: 'Sign In / RSVP', to: '/rsvp' },
};

// ---- EVENT 1: Coastal Classic 2026 (INVITE ONLY) ----
export const coastalClassic = {
  slug: 'coastal-classic',
  name: 'The Bard Santner Coastal Classic',
  shortName: 'Coastal Classic 2026',
  status: 'Invitation Only',
  statusLong: 'Invitation Only — RSVP Gateway',
  dateLabel: 'SEPT 13–19, 2026',
  dateISO: '2026-09-13',
  endISO: '2026-09-19',
  location: 'Cape Town',
  locationLong: 'Cape Town, South Africa',
  heroImage: '/images/venues/clovelly/hero.jpeg',
  intro:
    'A week of championship golf, vineyard nights, and quiet celebration along the Cape coast. Four of the peninsula\'s most storied courses, hosted by invitation only — a week reserved for those whose game, and whose company, set the standard.',
  courses: [
    {
      name: 'King David Mowbray',
      blurb: 'Parkland excellence in the heart of the city.',
      long:
        'A lush parkland layout shaded by century-old oaks, Mowbray is where the week begins — a measured opener that rewards accuracy and composure.',
      lat: 38, lon: 45, // SVG coordinate hints (not geographic)
    },
    {
      name: 'Clovelly',
      blurb: 'Coastal and rolling in the Silvermine Valley.',
      long:
        'Tucked between the mountain and the sea, Clovelly\'s rolling fairways demand patience. A strong south-easter off False Bay turns mid-irons into character tests.',
      lat: 70, lon: 55,
    },
    {
      name: 'De Zalze',
      blurb: 'A championship test among the Stellenbosch vineyards.',
      long:
        'Winelands golf at its most cinematic — bunkers cut into vineyard rows, water in play across six holes, and a closing stretch that has decided many a title.',
      lat: 35, lon: 18,
    },
    {
      name: 'Rondebosch',
      blurb: 'Classic Cape views and a challenging, scenic layout.',
      long:
        'Unbroken views to Table Mountain frame a course that plays firmer than it looks. Rondebosch is where the Classic traditionally decides its winner.',
      lat: 45, lon: 40,
    },
  ],
  prizeInFocus: {
    headline: 'PRIZE IN FOCUS',
    title: 'All-Expenses Trip to the AfrAsia Bank Mauritius Open',
    detail:
      'The Classic\'s overall winner claims a fully-hosted week at the DP World Tour\'s AfrAsia Bank Mauritius Open — flights, five-star stay, course access and hospitality all included.',
  },
  nineteenthHole: {
    headline: '19TH HOLE',
    title: 'Peter Falke Vineyard Excursion',
    detail:
      'A private afternoon at the Peter Falke Estate in Stellenbosch — tasting, paired lunch, and a walk through the cellar with the winemaker. The week\'s quiet finale.',
  },
  ctaLabel: 'INVITATION ONLY — RSVP GATEWAY',
  ctaTo: '/rsvp',
  palette: 'navy',
};

// ---- EVENT 2: Kwekwe Golf Day 2026 (OPEN REG) ----
export const kwekweGolfDay = {
  slug: 'kwekwe-golf-day',
  name: 'Bard Santner Golf Day — Kwekwe',
  shortName: 'Kwekwe Golf Day',
  status: 'Open Registration',
  dateLabel: 'JULY 2026',
  dateLong: 'Saturday, 25 July 2026 (date TBC)',
  dateISO: '2026-07-25',
  location: 'Midlands, Zimbabwe',
  locationLong: 'Kwekwe Golf Club, Midlands, Zimbabwe',
  heroImage:
    'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=2000&q=80&auto=format&fit=crop',
  cardPhoto:
    'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=80&auto=format&fit=crop',
  intro:
    'A day that brings the game home. Kwekwe\'s parkland course hosts the Bard Santner Golf Day — an open-field celebration for individuals and corporate four-balls alike. Fewer trophies, more community; a proper Midlands Saturday well spent.',
  formats: ['INDIVIDUAL', 'CORPORATE FOUR-BALL'],
  formatDescriptions: {
    Individual:
      'Solo entry — draw-and-play. Stableford, full handicap, rolling tee times from 07:00.',
    'Corporate Four-Ball':
      'Four per team, branded hospitality tent, shared scorecards, and a prize for the top corporate side. Our most-requested format.',
  },
  schedule: [
    { time: '06:30', label: 'Registration & breakfast' },
    { time: '07:00', label: 'First tee — shotgun start' },
    { time: '13:00', label: 'Lunch on the halfway' },
    { time: '16:30', label: 'Prize-giving & refreshments' },
  ],
  ctaLabel: 'REGISTER NOW',
  ctaTo: '/kwekwe-golf-day#register',
};

// ---- PAST EVENTS (2025) ----
export const pastEvents = [
  {
    slug: 'road-to-sa-2025',
    label: 'Royal Harare',
    title: 'The Road to SA Golf Challenge 2025 Highlights',
    date: 'January–October 2025',
    image:
      'https://images.unsplash.com/photo-1775326424702-4eca92f63cef?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Nine rounds. One season. The inaugural Road to South Africa drew Zimbabwe\'s finest amateur field to Royal Harare for a year-long points race culminating in the Nedbank Challenge trip.',
  },
  {
    slug: 'gold-golf-2025',
    label: 'Royal Harare',
    title: 'The Gold Golf: Winners to Investec SA Open',
    date: 'March 2025',
    image:
      'https://images.unsplash.com/photo-1632244115549-a751ab16b915?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'A one-day showcase at Royal Harare that sent two low-handicap winners to Johannesburg for the Investec South African Open — with stay, tee times and Friday round included.',
  },
  {
    slug: 'wall-of-fame-2025',
    label: 'Royal Harare',
    title: 'Wall of Fame: Winners to Investec SA Open & Nedbank Challenge',
    date: 'October 2025',
    image:
      'https://images.unsplash.com/photo-1766206096924-c78074981e84?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'The season finale unveiled the Wall of Fame — a permanent ledger of winners at Royal Harare\'s Clubhouse, now carrying five names bound for the 2026 majors on our tab.',
  },
  {
    slug: 'winter-series-2025',
    label: 'Royal Harare',
    title: 'The Winter Series — Three-Round Stableford',
    date: 'June–August 2025',
    image:
      'https://images.unsplash.com/photo-1672871583167-bedd74c24995?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Short days, firm fairways, and Royal Harare at its most honest. The Winter Series ran three Saturdays of Stableford with a club-champion crowned on count-back in August.',
  },
  {
    slug: 'ladies-day-2025',
    label: 'Royal Harare',
    title: 'The Ladies\' Day at Royal Harare',
    date: 'May 2025',
    image:
      'https://images.unsplash.com/photo-1775326420892-a233ed95ec58?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'A sold-out field of 72 under a cloudless Harare sky. Mixed-greensome format, bespoke trophies, and a long-table lunch on the Clubhouse lawn.',
  },
  {
    slug: 'corporate-shield-2025',
    label: 'Royal Harare',
    title: 'The Corporate Shield 2025',
    date: 'September 2025',
    image:
      'https://images.unsplash.com/photo-1757874905852-ea4596dd221a?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Fifteen corporate four-balls competed for the inaugural Bard Santner Shield — now an annual fixture on Royal Harare\'s calendar.',
  },
];

// ---- SPONSORSHIP ----
export const sponsorship = {
  intro:
    'Bard Santner Golf is built around two events that stand for precision, discretion, and an uncommon standard of hosting. Partnering with us places your brand inside a room that is usually closed — and inside a conversation already underway.',
  why: [
    {
      title: 'A curated audience',
      body:
        'Fewer than 220 golfers across the 2026 season — a roster skewed toward founders, C-suite, and senior professional services. Every hand shaken is already a decision-maker.',
    },
    {
      title: 'Measured exposure',
      body:
        'From branded tee signage and cart livery through to televised hole features and post-event film, sponsorship is scoped so that your brand is present — never loud.',
    },
    {
      title: 'CSR woven in',
      body:
        'A portion of every Classic entry funds junior golf development in Zimbabwe and the Western Cape. A partnership pays forward, not just inwards.',
    },
  ],
  tiers: [
    {
      name: 'Bronze Patron',
      price: '$7,500',
      perks: [
        'Two entries to the Kwekwe Golf Day',
        'Branded tee signage',
        'Logo placement — event programme & website',
        'Quarter-page in post-event film credits',
      ],
    },
    {
      name: 'Silver Ally',
      price: '$18,500',
      perks: [
        'One four-ball at the Kwekwe Golf Day',
        'One invitation to the Coastal Classic',
        'Hole sponsorship (two holes, Kwekwe)',
        'Half-page in programme; brand in opening film',
        'Reserved corporate lunch table',
      ],
      highlighted: true,
    },
    {
      name: 'Gold Host',
      price: '$42,000',
      perks: [
        'Two four-balls at Kwekwe + two Coastal Classic invitations',
        'Feature hole sponsorship (King David Mowbray)',
        'Full-page in programme; title-card in film',
        'Keynote slot at the prize-giving',
        'Bespoke hospitality package for 12 guests',
      ],
    },
    {
      name: 'Platinum Principal',
      price: 'By conversation',
      perks: [
        'Naming rights on one day of the Coastal Classic',
        'Four-ball across both events + four Classic invitations',
        'Exclusive brand dinner at Peter Falke Vineyard',
        'Co-produced brand film from the week',
        'First right of refusal on 2027 season',
      ],
    },
  ],
};

// ---- CONTACT ----
export const contact = {
  email: 'golf@bardsantner.com',
  phone: '+263 861 2000 700',
  whatsappBase: 'https://wa.me/263770000000',
  whatsappGeneric:
    'https://wa.me/263770000000?text=' +
    encodeURIComponent('Hello Bard Santner Golf — I would like to make an enquiry.'),
  officeHarare: {
    label: 'Harare Office',
    address: '4 Harvey Brown Avenue, Milton Park, Harare, Zimbabwe',
    hours: 'Mon–Fri, 08:30–17:00',
  },
  officeCapeTown: {
    label: 'Cape Town Office',
    address: '15th Floor, Portside Tower, 5 Buitengracht Street, Cape Town',
    hours: 'Mon–Fri, 09:00–17:00',
  },
};

// ---- RSVP (Coastal Classic gateway) ----
export const rsvp = {
  intro:
    'The Coastal Classic is invitation only. Enter the invitation code issued with your email to confirm your place — or sign in with your details if you are joining as a returning guest.',
  codeFieldLabel: 'Invitation Code',
  codePlaceholder: 'e.g. BSC-2026-0412',
  notes: [
    'Codes are case-insensitive.',
    'If you cannot locate your code, contact golf@bardsantner.com or your Bard Santner host directly.',
    'Confirmed RSVPs receive the full week\'s itinerary, flight window and hotel details within 48 hours.',
  ],
};

// ---- STATS (for count-ups) ----
export const stats = [
  { value: 2, suffix: '', label: 'Iconic Events' },
  { value: 4, suffix: '', label: 'Cape Courses' },
  { value: 220, suffix: '', label: 'Annual Golfers' },
  { value: 9, suffix: '', label: 'Season Partners' },
];
