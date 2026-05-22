// Data — Seattle rental properties + neighborhoods + testimonials

const SEATTLE_NEIGHBORHOODS = [
  'All Seattle', 'Capitol Hill', 'Belltown', 'Queen Anne', 'Fremont',
  'Ballard', 'South Lake Union', 'Madison Park', 'Pioneer Square',
];

const PROPERTY_TYPES = ['All', 'Studio', '1 BR', '2 BR', '3+ BR', 'Townhome', 'Furnished'];

// Curated Unsplash photo IDs — warm interiors, no people, hotel-like quality
const PROPERTIES = [
  {
    id: 'p01',
    title: 'The Olive Residence',
    neighborhood: 'Capitol Hill',
    address: '1421 Olive Way, Seattle, WA 98122',
    price: 3850, beds: 2, baths: 2, sqft: 1240,
    available: 'Available June 1',
    type: '2 BR',
    furnished: true,
    featured: true,
    tags: ['Top Floor', 'Skyline View', 'Furnished'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
    ],
    description:
      "A serene top-floor two-bedroom on the quieter side of Capitol Hill — floor-to-ceiling windows, oak floors, a chef’s kitchen, and a west-facing balcony framing the Olympics at dusk.",
    amenities: ['Private balcony', 'Soaking tub', 'Gas range', 'In-unit laundry', 'Concierge', 'Bike storage', 'Pet friendly', 'Hardwood floors'],
    walkScore: 94,
    transitScore: 88,
  },
  {
    id: 'p02',
    title: 'Vine Court Loft',
    neighborhood: 'Belltown',
    address: '2210 Vine St, Seattle, WA 98121',
    price: 2950, beds: 1, baths: 1, sqft: 880,
    available: 'Available now',
    type: '1 BR',
    furnished: false,
    featured: false,
    tags: ['Live/Work', 'Skyline View'],
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=80&auto=format&fit=crop',
    ],
    description:
      'A creative live/work loft minutes from the waterfront — 11-foot ceilings, polished concrete, brass fixtures, and a Murphy bed that disappears into custom millwork.',
    amenities: ['11-ft ceilings', 'Polished concrete', 'Murphy bed system', 'Quartz counters', 'Building gym', 'Rooftop terrace'],
    walkScore: 98,
    transitScore: 94,
  },
  {
    id: 'p03',
    title: 'Highland Cottage',
    neighborhood: 'Queen Anne',
    address: '618 W Highland Dr, Seattle, WA 98119',
    price: 4750, beds: 3, baths: 2, sqft: 1820,
    available: 'Available July 15',
    type: '3+ BR',
    furnished: false,
    featured: true,
    tags: ['Single Family', 'Garden', 'Skyline View'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
    ],
    description:
      'A storybook craftsman on the south slope of Queen Anne — a wood-paneled study, gas fireplace, terraced garden, and a primary suite that looks straight at the Space Needle.',
    amenities: ['Gas fireplace', 'Terraced garden', 'Wood-paneled study', 'Two-car garage', 'Smart thermostat', 'Pet friendly'],
    walkScore: 78,
    transitScore: 71,
  },
  {
    id: 'p04',
    title: 'Stone Mill Studio',
    neighborhood: 'Fremont',
    address: '3501 Stone Way N, Seattle, WA 98103',
    price: 2150, beds: 0, baths: 1, sqft: 520,
    available: 'Available now',
    type: 'Studio',
    furnished: true,
    featured: false,
    tags: ['Furnished', 'Canal View'],
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80&auto=format&fit=crop',
    ],
    description:
      'A fully furnished canal-side studio in the center of Fremont — bouclé reading chair, Bertoia stool at the counter, and a tucked-away bedroom alcove behind a velvet curtain.',
    amenities: ['Fully furnished', 'High-speed wifi', 'Canal trail access', 'In-unit laundry', 'Building lounge'],
    walkScore: 91,
    transitScore: 83,
  },
  {
    id: 'p05',
    title: 'Market Hall Townhome',
    neighborhood: 'Ballard',
    address: '5404 22nd Ave NW, Seattle, WA 98107',
    price: 3450, beds: 2, baths: 2.5, sqft: 1380,
    available: 'Available June 15',
    type: 'Townhome',
    furnished: false,
    featured: false,
    tags: ['Townhome', 'Rooftop Deck'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80&auto=format&fit=crop',
    ],
    description:
      'A three-story townhome a block from the Sunday market — open kitchen, integrated appliances, and a private rooftop deck with views over the locks toward the Olympics.',
    amenities: ['Rooftop deck', 'Integrated appliances', 'Powder room', 'Heated floors', 'EV charging', 'Two-car garage'],
    walkScore: 96,
    transitScore: 76,
  },
  {
    id: 'p06',
    title: 'Lake Union Flat',
    neighborhood: 'South Lake Union',
    address: '329 Westlake Ave N, Seattle, WA 98109',
    price: 3250, beds: 1, baths: 1, sqft: 920,
    available: 'Available now',
    type: '1 BR',
    furnished: true,
    featured: false,
    tags: ['Furnished', 'Water View'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80&auto=format&fit=crop',
    ],
    description:
      'A turn-key one-bedroom in a quiet glass tower on the lake — a curved sofa from Italy, a Vipp kitchen, and a window seat facing the seaplane harbor.',
    amenities: ['Fully furnished', 'Water view', 'Floor-to-ceiling glass', 'Building pool', 'Concierge', 'Pet friendly'],
    walkScore: 92,
    transitScore: 90,
  },
];

const NEIGHBORHOODS_GRID = [
  { name: 'Capitol Hill',     count: 28, blurb: 'Cafes, bookshops, late dinners.', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80&auto=format&fit=crop' },
  { name: 'Belltown',         count: 19, blurb: 'Waterfront, galleries, the Pike.', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=900&q=80&auto=format&fit=crop' },
  { name: 'Queen Anne',       count: 14, blurb: 'Tree-lined, skyline-facing, quiet.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80&auto=format&fit=crop' },
  { name: 'Fremont',          count: 22, blurb: 'Canal walks, makers, slow Sundays.', image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=900&q=80&auto=format&fit=crop' },
  { name: 'Ballard',          count: 31, blurb: 'Locks, Sunday market, the salt air.', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop' },
  { name: 'South Lake Union', count: 16, blurb: 'Glass, water, seaplanes overhead.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&auto=format&fit=crop' },
];

const TESTIMONIALS = [
  {
    quote:
      "I expected another rental agency. I got a concierge. The team had keys in my hand the same week I flew in for the interview — the apartment was already stocked.",
    author: 'Mira Adeyemi',
    role: 'New resident, Capitol Hill',
    kind: 'renter',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop',
  },
  {
    quote:
      "We own four units across Ballard and Fremont. In two years with Santirma, the only call I’ve gotten from a tenant was to thank me. Numbers up, headaches gone.",
    author: 'Daniel Park',
    role: 'Owner, four-unit portfolio',
    kind: 'owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
  },
  {
    quote:
      "They handled a six-month furnished stay while my house was being renovated. The place was beautiful and the lease was honest — no surprises, no fees I didn’t see coming.",
    author: 'Hannah Lindgren',
    role: 'Returning resident, Queen Anne',
    kind: 'renter',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop',
  },
];

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2200&q=85&auto=format&fit=crop';

window.SantirmaData = {
  PROPERTIES, SEATTLE_NEIGHBORHOODS, PROPERTY_TYPES,
  NEIGHBORHOODS_GRID, TESTIMONIALS, HERO_IMAGE,
};
