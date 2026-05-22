// About.jsx — company story (other sections removed per user request)
const Reveal_A = window.Reveal;
const PageHero_A = window.SantirmaPageHero;

function AboutPage({ navigate }) {
  return (
    <div data-screen-label="05 About">
      <PageHero_A
        overline="Our story"
        title={<>A property company<br/><em style={{ color: 'var(--color-prestige-gold)' }}>built for the long lease.</em></>}
        subtitle="Santirma was founded on a quiet premise: most people stay in their rentals longer than the industry assumes. So we built a company designed to deserve that stay."
      />

      {/* Story */}
      <section style={{ background: 'var(--color-cloud-white)', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <Reveal_A>
            <div className="index-mark">№ 01 — How we started</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.015em',
              color: 'var(--color-midnight-navy)', margin: '20px 0 0',
            }}>
              A founder, a fourplex,<br/>and a quieter idea<br/>of what good service meant.
            </h2>
          </Reveal_A>
          <Reveal_A delay={120}>
            <div style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--color-ink-muted)', display: 'flex', flexDirection: 'column', gap: 22 }}>
              <p style={{ margin: 0 }}>
                Imani Santirma started this company in 2014 with one fourplex in Ballard and a frustration with the kind of property management she’d encountered as a renter — slow, opaque, and a little contemptuous.
              </p>
              <p style={{ margin: 0 }}>
                The first year was a single building. The second year was four. Today Santirma stewards 142 homes across the city and works with fifty-three owners — most of whom found us by word of mouth and most of whom we still pick up the phone for on a Sunday.
              </p>
              <p style={{ margin: 0 }}>
                Our scale is deliberate. We grow when an owner asks us to grow, not because a growth chart needs filling in. The people who lease our homes tend to stay. The people we manage for tend to recommend us. That is the whole strategy.
              </p>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.4, fontStyle: 'italic', color: 'var(--color-midnight-navy)', borderLeft: '2px solid var(--color-prestige-gold)', paddingLeft: 24 }}>
                We are not the biggest. We do not want to be. We are the company you call when you want this done well, and we intend to keep it that way.
              </p>

              <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/properties')} className="s-btn-dark">Browse Our Homes</button>
                <button onClick={() => navigate('/contact')} className="s-btn-outline">Get in Touch</button>
              </div>
            </div>
          </Reveal_A>
        </div>
      </section>
    </div>
  );
}

window.SantirmaAboutPage = AboutPage;
