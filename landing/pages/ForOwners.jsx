// ForOwners.jsx — services page for property owners
const Reveal_O = window.Reveal;
const PageHero_O = window.SantirmaPageHero;

function ForOwnersPage({ navigate }) {
  const services = [
    { title: 'Marketing & Photography', body: 'Editorial photography, listing copy, and placement on the channels that actually rent your home — not bulk-syndicated to every site that will take it.' },
    { title: 'Resident Screening', body: 'Three-bureau credit, income verification, employer confirmation, and prior-landlord conversations. We pick people, not paperwork.' },
    { title: 'Leasing & Renewals', body: 'Showings, applications, and lease documents managed end-to-end. We earn renewal at month nine, not at month thirteen.' },
    { title: 'Rent Collection', body: 'On-time deposits to your account by the 5th. Clear accounting, monthly statements, and a year-end package your CPA will thank you for.' },
    { title: 'Maintenance & Repairs', body: 'A 24/7 dispatch line and a vetted vendor network. Photos and invoices with every ticket. Capped scopes you approve in advance.' },
    { title: 'Compliance & Reporting', body: 'Fair-housing-compliant marketing, lead-paint disclosures, RRIO inspections, and city registration — all handled.' },
  ];

  const tiers = [
    {
      name: 'Leasing-Only', fee: "75% of first month’s rent", best: 'Single home, you manage day-to-day.',
      features: ['Photography & listing', 'Showings & applications', 'Three-bureau screening', 'Lease prep & signing', 'Move-in inspection'],
    },
    {
      name: 'Full Management', fee: '8% of monthly rent', best: 'Most owners. Most peace of mind.', featured: true,
      features: ['Everything in Leasing-Only', 'Rent collection & disbursements', '24/7 maintenance dispatch', 'Renewal & rent reviews', 'Monthly owner statements', 'Vendor coordination'],
    },
    {
      name: 'Portfolio', fee: 'Custom', best: '5+ doors. Talk to us.',
      features: ['Everything in Full Management', 'Dedicated portfolio manager', 'Quarterly market review', 'Capital projects oversight', 'Year-end performance report', 'Owner reporting dashboard'],
    },
  ];

  return (
    <div data-screen-label="04 For Owners">
      <PageHero_O
        overline="For property owners"
        title={<>Your portfolio,<br/><em style={{ color: 'var(--color-prestige-gold)' }}>in steady hands.</em></>}
        subtitle="Full-service property management for owners who measure success in renewal rates and resident reviews — not just rent rolls."
      />

      {/* Pull-quote stat strip */}
      <section style={{ background: 'var(--color-stone)', padding: '80px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
          {[
            ['12 days', 'Average days to lease'],
            ['98%', 'Renewal rate'],
            ['4.9 / 5', 'Resident rating'],
            ['$0', 'Surprise fees, ever'],
          ].map(([k, l]) => (
            <Reveal_O key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 700, color: 'var(--color-midnight-navy)', lineHeight: 1, letterSpacing: '-0.01em' }}>{k}</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginTop: 14 }}>{l}</div>
            </Reveal_O>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: 'var(--color-cloud-white)', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal_O>
            <div className="index-mark">№ 01 — What we handle</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 54, lineHeight: 1.05, letterSpacing: '-0.015em',
              color: 'var(--color-midnight-navy)', margin: '20px 0 56px', maxWidth: 800,
            }}>
              Six disciplines.<br />
              <em style={{ color: 'var(--color-prestige-gold)' }}>One operating standard.</em>
            </h2>
          </Reveal_O>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--color-stone-deep)', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--color-stone-deep)' }}>
            {services.map((s, i) => (
              <Reveal_O key={s.title} delay={i * 90}>
                <div style={{
                  background: 'var(--color-cloud-soft)', padding: '40px 32px', height: '100%', minHeight: 240,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--color-prestige-gold)', marginBottom: 12 }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 19, fontWeight: 600, color: 'var(--color-midnight-navy)', margin: '0 0 12px' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-ink-muted)', margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </Reveal_O>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section id="list" style={{ background: 'var(--color-stone)', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal_O>
            <div className="index-mark">№ 02 — Engagement</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 54, lineHeight: 1.05, letterSpacing: '-0.015em',
              color: 'var(--color-midnight-navy)', margin: '20px 0 16px',
            }}>
              Three ways to work together.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--color-ink-muted)', maxWidth: 620, marginBottom: 56 }}>
              Honest pricing. No setup fees, no renewal fees, no markups on maintenance. The number you see is what you pay.
            </p>
          </Reveal_O>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {tiers.map((t, i) => (
              <Reveal_O key={t.name} delay={i * 120}>
                <div style={{
                  background: t.featured ? 'var(--color-midnight-navy)' : 'var(--color-cloud-soft)',
                  color: t.featured ? '#F7F7F7' : 'var(--color-midnight-navy)',
                  borderRadius: 24, padding: '40px 32px',
                  border: t.featured ? '1px solid var(--color-prestige-gold)' : '1px solid var(--color-stone-deep)',
                  boxShadow: t.featured ? '0 30px 80px rgba(13,19,33,0.25)' : 'none',
                  position: 'relative', height: '100%',
                }}>
                  {t.featured && (
                    <div style={{
                      position: 'absolute', top: -1, right: 28,
                      background: 'var(--color-prestige-gold)', color: 'var(--color-midnight-navy)',
                      padding: '6px 14px', borderRadius: '0 0 8px 8px',
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
                    }}>Most chosen</div>
                  )}
                  <div style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: t.featured ? 'var(--color-prestige-gold)' : 'var(--color-prestige-gold)', marginBottom: 10,
                  }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 700, lineHeight: 1.1, marginBottom: 8 }}>
                    {t.fee}
                  </div>
                  <div style={{ fontSize: 13, color: t.featured ? 'rgba(247,247,247,0.7)' : 'var(--color-ink-muted)', marginBottom: 28, fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                    {t.best}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {t.features.map(f => (
                      <li key={f} style={{ display: 'flex', gap: 12, fontSize: 14, color: t.featured ? 'rgba(247,247,247,0.85)' : 'var(--color-midnight-navy)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 4, flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => navigate('/contact', 'owner')}
                          className={t.featured ? 's-btn-primary' : 's-btn-outline'}
                          style={{ width: '100%' }}>
                    {t.featured ? 'Talk to an Advisor' : 'Request a Proposal'}
                  </button>
                </div>
              </Reveal_O>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="invest" style={{
        background: 'var(--gradient-premium-dark)', color: '#F7F7F7',
        padding: '120px 56px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Reveal_O>
            <div style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 18, color: 'var(--color-prestige-gold)', marginBottom: 18,
            }}>For owners and investors</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.015em',
              color: '#F7F7F7', margin: 0,
            }}>
              Have a property in mind? We’ll walk it with you.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(247,247,247,0.78)', margin: '24px auto 40px', maxWidth: 560 }}>
              No-obligation walkthrough, candid rent estimate, and a written management proposal within forty-eight hours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact', 'owner')} className="s-btn-primary">Schedule a Walkthrough</button>
              <button onClick={() => navigate('/about')} className="s-btn-ghost">Read About Our Team</button>
            </div>
          </Reveal_O>
        </div>
      </section>
    </div>
  );
}

window.SantirmaForOwnersPage = ForOwnersPage;
