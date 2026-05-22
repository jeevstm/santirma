// Neighborhoods.jsx — full neighborhood guide page
const Reveal_N = window.Reveal;
const PageHero_N = window.SantirmaPageHero;

const NEIGHBORHOOD_DETAILS = [
  {
    name: 'Capitol Hill', slug: 'capitol-hill',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80&auto=format&fit=crop',
    count: 28, walk: 94, transit: 88,
    blurb: 'Cafes, bookshops, late dinners — the loud-quiet heart of Seattle.',
    body: 'Capitol Hill is where Seattle is most itself: a neighborhood of long lunches at small restaurants, secondhand records, leafy side streets. Homes here favor pre-war character buildings and discreet new mid-rises with leasing offices that look more like hotel lobbies.',
    landmarks: ['Volunteer Park Conservatory', 'Elliott Bay Book Co.', 'Cal Anderson Park', 'Light Rail · 3 stops to downtown'],
  },
  {
    name: 'Belltown', slug: 'belltown',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80&auto=format&fit=crop',
    count: 19, walk: 98, transit: 94,
    blurb: 'Waterfront, galleries, the Pike. A short walk from everything.',
    body: 'Belltown is the half-mile of Seattle that fits in your weekend. Most of our listings here are high-rise one-bedrooms with floor-to-ceiling glass and a fifteen-minute walk to Pike Place.',
    landmarks: ['Pike Place Market', 'Olympic Sculpture Park', 'Seattle Art Museum', 'Waterfront ferries'],
  },
  {
    name: 'Queen Anne', slug: 'queen-anne',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80&auto=format&fit=crop',
    count: 14, walk: 78, transit: 71,
    blurb: 'Tree-lined, skyline-facing, quiet. Family Seattle in one hill.',
    body: 'Queen Anne sits up above the city and turns its back on the noise. Craftsman homes and brick low-rises, kids on bikes, the Space Needle reflected in your window at golden hour.',
    landmarks: ['Kerry Park lookout', 'Pacific Science Center', 'McCaw Hall · Opera & Ballet', 'SPU campus'],
  },
  {
    name: 'Fremont', slug: 'fremont',
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1600&q=80&auto=format&fit=crop',
    count: 22, walk: 91, transit: 83,
    blurb: 'Canal walks, makers, slow Sundays. The "center of the universe."',
    body: 'Fremont was always going to be on this list. It is a maker-town built around a drawbridge: independent breweries, the Sunday market, a troll under an overpass that the children love.',
    landmarks: ['Fremont Sunday Market', 'Burke-Gilman Trail', 'Theo Chocolate Factory', 'Gas Works Park'],
  },
  {
    name: 'Ballard', slug: 'ballard',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80&auto=format&fit=crop',
    count: 31, walk: 96, transit: 76,
    blurb: 'Locks, Sunday market, the salt air. The neighborhood doing it right.',
    body: 'Ballard is the success story Seattle keeps telling. Old fishing town turned design district turned home to families. Townhomes climb the hill from the locks; the bars below stay open late on Fridays.',
    landmarks: ['Hiram M. Chittenden Locks', 'Ballard Farmers Market', 'Golden Gardens Park', 'Old Ballard breweries'],
  },
  {
    name: 'South Lake Union', slug: 'south-lake-union',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80&auto=format&fit=crop',
    count: 16, walk: 92, transit: 90,
    blurb: 'Glass, water, seaplanes overhead. Modern Seattle, polished.',
    body: 'SLU is the cleanest line in Seattle: a tech district built around a working lake. Listings are towers — quiet ones, with rooftop pools and resident lounges that face the water.',
    landmarks: ['Lake Union Park & MOHAI', 'Seattle Streetcar', 'Whole Foods 365', 'Center for Wooden Boats'],
  },
  {
    name: 'Madison Park', slug: 'madison-park',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop',
    count: 9, walk: 81, transit: 64,
    blurb: "Lakefront, leafy, unhurried. Seattle’s quiet old money.",
    body: 'Madison Park is where Seattle goes to slow down. Single-family homes on lake-facing streets, a tiny commercial spine, and a beach the locals try to keep secret.',
    landmarks: ['Madison Park Beach', 'Washington Park Arboretum', 'Madison Valley dining', 'Bus rapid to downtown'],
  },
  {
    name: 'Pioneer Square', slug: 'pioneer-square',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&auto=format&fit=crop',
    count: 7, walk: 97, transit: 92,
    blurb: 'Brick, galleries, the oldest streets in Seattle.',
    body: 'Pioneer Square is the original Seattle — pergolas, ironwork, brick warehouses turned into lofts. We have a small but careful list here: live/work spaces and converted upper floors with serious bones.',
    landmarks: ['First Thursday Art Walk', 'Smith Tower', 'King Street Station', 'Stadium District'],
  },
];

window.SantirmaNeighborhoodDetails = NEIGHBORHOOD_DETAILS;

function NeighborhoodCard({ n, navigate }) {
  return (
    <Reveal_N>
      <article style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: 'var(--color-cloud-soft)', borderRadius: 24, overflow: 'hidden',
        boxShadow: 'var(--shadow-soft)',
        minHeight: 380,
      }}>
        <div style={{
          background: `url('${n.image}') center/cover no-repeat`, position: 'relative',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,19,33,0.0) 60%, rgba(13,19,33,0.6) 100%)' }} />
          <div style={{ position: 'absolute', left: 20, bottom: 16, color: '#F7F7F7', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            {n.count} homes available
          </div>
        </div>
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{
              fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--color-prestige-gold)', marginBottom: 10,
            }}>Neighborhood · Seattle</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36,
              margin: 0, color: 'var(--color-midnight-navy)',
            }}>{n.name}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-ink-muted)', marginTop: 16, marginBottom: 0 }}>
              {n.body}
            </p>

            <div style={{ display: 'flex', gap: 28, marginTop: 24 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ink-soft)', marginBottom: 4 }}>Walk</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--color-midnight-navy)' }}>{n.walk}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ink-soft)', marginBottom: 4 }}>Transit</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--color-midnight-navy)' }}>{n.transit}</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 13, color: 'var(--color-ink-muted)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
              {n.landmarks.slice(0, 2).join(' · ')}
            </div>
            <button onClick={() => navigate('/properties')}
                    style={{
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      color: 'var(--color-midnight-navy)', fontFamily: 'var(--font-body)',
                      fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
              Homes here
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </article>
    </Reveal_N>
  );
}

function NeighborhoodsPage({ navigate }) {
  return (
    <div data-screen-label="03 Neighborhoods">
      <PageHero_N
        overline="The map"
        title={<>Nine pockets of Seattle.<br/><em style={{ color: 'var(--color-prestige-gold)' }}>Each one chosen on foot.</em></>}
        subtitle="Our listings are concentrated in the parts of the city we know best. Every block in our portfolio has been walked by a member of the Santirma team — usually more than once."
      />

      <section style={{ background: 'var(--color-cloud-white)', padding: '80px 56px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {NEIGHBORHOOD_DETAILS.map(n => (
            <NeighborhoodCard key={n.slug} n={n} navigate={navigate} />
          ))}
        </div>
      </section>
    </div>
  );
}

window.SantirmaNeighborhoodsPage = NeighborhoodsPage;
