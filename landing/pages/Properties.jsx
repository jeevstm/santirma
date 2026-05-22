// Properties.jsx — browse all properties with full filters
const Reveal_P = window.Reveal;
const Listings_P = window.SantirmaListings;

function PageHero({ overline, title, subtitle, kicker = '№' }) {
  return (
    <section className="page-hero">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal_P>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--color-prestige-gold)',
            marginBottom: 18, display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ width: 40, height: 1, background: 'var(--color-prestige-gold)' }} />
            {overline}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(48px, 5.6vw, 84px)', lineHeight: 1.05, letterSpacing: '-0.015em',
            color: '#F7F7F7', margin: 0, maxWidth: 920,
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              fontSize: 19, lineHeight: 1.7, color: 'rgba(247,247,247,0.78)',
              maxWidth: 660, marginTop: 28, marginBottom: 0,
            }}>{subtitle}</p>
          )}
        </Reveal_P>
      </div>
    </section>
  );
}

window.SantirmaPageHero = PageHero;

function PropertiesPage({ navigate, onSelect }) {
  return (
    <div data-screen-label="02 Properties">
      <PageHero
        overline="The collection"
        title={<>Every home,<br/><em style={{ color: 'var(--color-prestige-gold)' }}>walked and approved.</em></>}
        subtitle="142 curated rentals across Seattle. Filter by neighborhood, beds, and budget — or call us at 206.555.0148 and we’ll find you a place no listing site will show."
      />
      <section style={{ background: 'var(--color-cloud-white)', padding: '64px 56px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Listings_P variant="grid" showFilters={true} showSort={true} onSelect={onSelect} />
        </div>
      </section>
    </div>
  );
}

window.SantirmaPropertiesPage = PropertiesPage;
