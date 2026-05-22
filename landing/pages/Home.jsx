// Home.jsx — full home page composition
const { useState: useStateHm, useEffect: useEffectHm } = React;
const Reveal = window.Reveal;
const Listings = window.SantirmaListings;
const SantirmaHero = window.SantirmaHero;

function PillarsSection() {
  const pillars = [
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
      title: 'Quality Properties',
      copy: 'Every home in our portfolio is photographed, walked, and approved by a Santirma specialist. Maintained, never neglected.',
    },
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3v1h6v-1c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>),
      title: 'Creative Solutions',
      copy: 'Furnished and unfurnished. Six-month and twelve-month. Pet-friendly portfolios. Lease terms designed around modern lives.',
    },
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>),
      title: 'Community Focused',
      copy: 'We invest where we live. Neighborhood partnerships, transparent renewals, and a service that picks up the phone.',
    },
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>),
      title: 'Trust & Integrity',
      copy: 'No application traps. No surprise fees. Lease documents in plain English. A licensed broker on every contract.',
    },
  ];

  return (
    <section style={{ background: 'var(--color-cloud-white)', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <div className="index-mark">№ 02 — What we stand for</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 60, lineHeight: 1.05, letterSpacing: '-0.015em',
            color: 'var(--color-midnight-navy)', margin: '20px 0 0', maxWidth: 880,
          }}>
            Four principles. <em style={{ color: 'var(--color-prestige-gold)' }}>One quiet promise.</em>
          </h2>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          marginTop: 64, borderTop: '1px solid var(--color-stone-deep)',
        }}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div style={{
                padding: '40px 28px',
                borderRight: i < pillars.length - 1 ? '1px solid var(--color-stone-deep)' : 'none',
                height: '100%',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  border: '1px solid var(--color-prestige-gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-prestige-gold)',
                  marginBottom: 28,
                }}>
                  <span style={{ width: 24, height: 24, display: 'block' }}>{p.icon}</span>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'var(--color-midnight-navy)',
                  marginBottom: 14,
                }}>{p.title}</div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-ink-muted)', margin: 0 }}>
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeNeighborhoodsPreview({ navigate }) {
  const { NEIGHBORHOODS_GRID } = window.SantirmaData;
  return (
    <section style={{ background: 'var(--color-stone)', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 40, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 680 }}>
              <div className="index-mark">№ 03 — Neighborhoods</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 60, lineHeight: 1.05, letterSpacing: '-0.015em',
                color: 'var(--color-midnight-navy)', margin: '20px 0 0',
              }}>
                Six pockets of Seattle.<br />
                <em style={{ color: 'var(--color-prestige-gold)' }}>One thoughtful map.</em>
              </h2>
            </div>
            <button onClick={() => navigate('/neighborhoods')} className="s-btn-outline">
              Explore all neighborhoods
            </button>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {NEIGHBORHOODS_GRID.map((n, i) => (
            <Reveal key={n.name} delay={i * 100}>
              <a href={'#/neighborhoods'} onClick={(e) => { e.preventDefault(); navigate('/neighborhoods', n.name.toLowerCase().replace(/\s/g, '-')); }}
                 style={{
                   display: 'block', position: 'relative', height: 380,
                   borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
                   textDecoration: 'none',
                   background: `url('${n.image}') center/cover no-repeat`,
                   transition: 'transform 480ms var(--ease-luxury)',
                 }}
                 onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.querySelector('img-zoom') }}
                 onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(13,19,33,0.0) 40%, rgba(13,19,33,0.85) 100%)',
                }} />
                <div style={{
                  position: 'absolute', left: 24, bottom: 24, right: 24,
                  color: '#F7F7F7',
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
                    textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 10,
                  }}>{n.count} homes available</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34,
                    lineHeight: 1.1, marginBottom: 8,
                  }}>{n.name}</div>
                  <div style={{ fontSize: 14, color: 'rgba(247,247,247,0.85)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                    {n.blurb}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection({ navigate }) {
  return (
    <section style={{ background: 'var(--color-cloud-white)', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <Reveal>
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-elevated)', position: 'relative', aspectRatio: '4/5' }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop"
                 alt="Interior" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            {/* Floating credential card */}
            <div style={{
              position: 'absolute', bottom: 32, left: 32, right: 32,
              background: 'rgba(247,247,247,0.96)', backdropFilter: 'blur(14px)',
              padding: '24px 28px', borderRadius: 16,
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 8 }}>
                Concierge stay · since day one
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--color-midnight-navy)', lineHeight: 1.3 }}>
                "Move-in took forty minutes — most of it spent unpacking flowers."
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="index-mark">№ 04 — Creative Solutions</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 60, lineHeight: 1.05, letterSpacing: '-0.015em',
            color: 'var(--color-midnight-navy)', margin: '20px 0 24px',
          }}>
            Renting,<br />reimagined for <em style={{ color: 'var(--color-prestige-gold)' }}>modern lives.</em>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--color-ink-muted)', marginBottom: 36, maxWidth: 520 }}>
            From a furnished six-month landing pad to a long lease for a growing family — we
            design rental terms around your life, not the other way around. Transparent
            pricing, honest service, and a team that picks up the phone.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['Flexible terms', 'Month-to-month, 6-month, and 12-month leases.'],
              ['Fully furnished portfolio', 'Move in with a suitcase. We stocked the kitchen.'],
              ['Pet-friendly, no theatrics', 'No breed bans. No surprise fees. Real-world deposits.'],
              ['Dedicated specialist', 'One person, your name, from inquiry to renewal.'],
            ].map(([h, b]) => (
              <li key={h} style={{ display: 'flex', gap: 18 }}>
                <span style={{
                  width: 32, height: 32, borderRadius: '50%', background: 'var(--color-prestige-gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D1321" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-midnight-navy)', marginBottom: 4 }}>{h}</div>
                  <div style={{ fontSize: 15, color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>{b}</div>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => navigate('/properties')} className="s-btn-dark">Browse Available Homes</button>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { TESTIMONIALS } = window.SantirmaData;
  const [idx, setIdx] = useStateHm(0);
  useEffectHm(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, [TESTIMONIALS.length]);
  const t = TESTIMONIALS[idx];

  return (
    <section style={{
      background: 'var(--gradient-premium-dark)',
      color: 'var(--color-cloud-white)',
      padding: '120px 56px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative quote mark */}
      <div style={{
        position: 'absolute', left: '8%', top: 60,
        fontFamily: 'var(--font-display)', fontSize: 280, lineHeight: 0.9,
        color: 'rgba(212,175,55,0.10)', userSelect: 'none', pointerEvents: 'none',
      }}>"</div>

      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div className="index-mark" style={{ color: 'var(--color-prestige-gold)', justifyContent: 'center' }}>
            <span style={{ width: 56, height: 1, background: 'var(--color-prestige-gold)', opacity: 0.6 }} />
            <span>№ 05 — In their words</span>
            <span style={{ width: 56, height: 1, background: 'var(--color-prestige-gold)', opacity: 0.6 }} />
          </div>
        </Reveal>

        <div style={{ minHeight: 320, marginTop: 40 }}>
          <Reveal key={idx} fade>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic',
              fontSize: 38, lineHeight: 1.4, color: '#F7F7F7',
              margin: 0, letterSpacing: '-0.005em',
            }}>
              "{t.quote}"
            </p>
            <div style={{
              marginTop: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: `url('${t.image}') center/cover`,
                border: '1px solid rgba(212,175,55,0.4)',
              }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#F7F7F7' }}>{t.author}</div>
                <div style={{ fontSize: 12, color: 'var(--color-prestige-gold)', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4 }}>{t.role}</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
                    aria-label={`Quote ${i+1}`}
                    style={{
                      width: i === idx ? 32 : 8, height: 8, borderRadius: 999,
                      background: i === idx ? 'var(--color-prestige-gold)' : 'rgba(247,247,247,0.3)',
                      border: 'none', cursor: 'pointer',
                      transition: 'all 280ms var(--ease-luxury)',
                    }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnersBanner({ navigate }) {
  return (
    <section style={{
      background: 'var(--color-cloud-white)', padding: '120px 56px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <Reveal>
          <div style={{
            position: 'relative', borderRadius: 24, overflow: 'hidden',
            background: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=2000&q=80&auto=format&fit=crop') center/cover no-repeat`,
            minHeight: 460,
            display: 'flex', alignItems: 'center',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(13,19,33,0.92) 0%, rgba(13,19,33,0.7) 50%, rgba(13,19,33,0.2) 100%)',
            }} />
            <div style={{ position: 'relative', padding: '64px', maxWidth: 660 }}>
              <div className="index-mark" style={{ color: 'var(--color-prestige-gold)' }}>For property owners</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 54, lineHeight: 1.1, letterSpacing: '-0.015em',
                color: '#F7F7F7', margin: '20px 0 20px',
              }}>
                Your portfolio,<br />
                <em style={{ color: 'var(--color-prestige-gold)' }}>in steady hands.</em>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(247,247,247,0.85)', marginBottom: 36, maxWidth: 500 }}>
                Full-service property management for owners who measure success in renewals
                and resident reviews. Marketing, screening, maintenance, accounting — handled.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/owners')} className="s-btn-primary">
                  Learn About Management
                </button>
                <button onClick={() => navigate('/contact', 'owner')} className="s-btn-ghost">
                  Talk to an Advisor
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedListingsBlock({ navigate, onSelect }) {
  return (
    <section style={{ background: 'var(--color-cloud-white)', padding: '120px 56px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 40, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 680 }}>
              <div className="index-mark">№ 01 — The collection</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 60, lineHeight: 1.05, letterSpacing: '-0.015em',
                color: 'var(--color-midnight-navy)', margin: '20px 0 0',
              }}>
                A small list,<br />
                <em style={{ color: 'var(--color-prestige-gold)' }}>chosen with care.</em>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <button onClick={() => navigate('/properties')} className="s-btn-dark">
                See all 142 homes
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Listings variant="grid" showFilters={false} limit={6} onSelect={onSelect} />
        </Reveal>
      </div>
    </section>
  );
}

function HomePage({ navigate, onSelect, tweaks = {} }) {
  const headlineVariant = tweaks.headlineVariant || 'better-places';
  const heroAccent = tweaks.heroAccent || 'gold';
  const showTestimonials = tweaks.showTestimonials !== false;
  const showOwnerBanner = tweaks.showOwnerBanner !== false;
  return (
    <div data-screen-label="01 Home">
      <SantirmaHero onSearch={() => navigate('/properties')} headlineVariant={headlineVariant} emphasis={heroAccent} />
      <FeaturedListingsBlock navigate={navigate} onSelect={onSelect} />
      <PillarsSection />
      <HomeNeighborhoodsPreview navigate={navigate} />
      <SolutionsSection navigate={navigate} />
      {showTestimonials && <TestimonialsSection />}
      {showOwnerBanner && <OwnersBanner navigate={navigate} />}
    </div>
  );
}

window.SantirmaHomePage = HomePage;
