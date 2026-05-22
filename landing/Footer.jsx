// Footer.jsx — full sitemap footer
function Footer({ navigate }) {
  const sections = [
    { title: 'Rent with Santirma', links: [
      ['Browse Properties', '/properties'],
      ['Neighborhoods', '/neighborhoods'],
      ['Apply Online', '/apply'],
      ['Resident Sign In', '/signin'],
      ['FAQ', '/faq'],
    ]},
    { title: 'For Owners', links: [
      ['Property Management', '/owners'],
      ['List Your Home', '/owners#list'],
      ['Owner Login', '/signin'],
      ['Investor Relations', '/owners#invest'],
      ['Market Reports', '/owners#reports'],
    ]},
    { title: 'Company', links: [
      ['About Santirma', '/about'],
      ['Contact', '/contact'],
      ['FAQ', '/faq'],
      ['Resident Sign In', '/signin'],
    ]},
    { title: 'Legal', links: [
      ['Terms & Conditions', '/terms'],
      ['Privacy Policy', '/privacy'],
      ['Fair Housing', '/terms#fair-housing'],
      ['Accessibility', '/terms#accessibility'],
      ['Cookie Preferences', '/privacy#cookies'],
    ]},
  ];

  return (
    <footer id="footer" style={{
      background: 'var(--color-midnight-navy)',
      color: 'var(--color-cloud-white)',
      fontFamily: 'var(--font-body)',
      paddingTop: 96, paddingBottom: 40,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 56px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: 56,
          paddingBottom: 80, borderBottom: '1px solid rgba(212,175,55,0.18)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <img src="assets/logo-mark-transparent.png" alt="" style={{ height: 52, width: 'auto' }} />
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#F7F7F7', letterSpacing: '0.04em' }}>SANTIRMA</div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', color: 'var(--color-prestige-gold)', marginTop: 5 }}>PROPERTY SOLUTIONS</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(247,247,247,0.7)', maxWidth: 280, marginBottom: 24 }}>
              Curated rental homes and creative housing solutions across Seattle.
              For owners, for renters, for communities.
            </p>
            <div style={{ fontSize: 13, lineHeight: 1.9, color: 'rgba(247,247,247,0.85)' }}>
              Seattle, WA<br />
              <span style={{ color: 'var(--color-prestige-gold)' }}>206.555.0148</span><br />
              <a href="mailto:hello@santirma.com" style={{ color: 'rgba(247,247,247,0.85)', textDecoration: 'none', borderBottom: '1px solid rgba(212,175,55,0.4)' }}>hello@santirma.com</a>
            </div>
          </div>

          {sections.map(s => (
            <div key={s.title}>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 24,
              }}>{s.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {s.links.map(([label, path]) => {
                  const isHash = path.includes('#');
                  const [base, frag] = path.split('#');
                  return (
                    <li key={label}>
                      <a href={'#' + path}
                         onClick={(e) => {
                           e.preventDefault();
                           navigate(base, frag);
                         }}
                         style={{
                           color: 'rgba(247,247,247,0.78)', textDecoration: 'none',
                           fontSize: 14, transition: 'color 200ms var(--ease-standard)',
                         }}
                         onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-prestige-gold)'}
                         onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(247,247,247,0.78)'}>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 48, paddingTop: 48, paddingBottom: 48,
          borderBottom: '1px solid rgba(212,175,55,0.18)',
        }}>
          <div style={{ maxWidth: 480 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600,
              color: '#F7F7F7', lineHeight: 1.2,
            }}>The Santirma Letter</div>
            <div style={{ fontSize: 14, color: 'rgba(247,247,247,0.7)', marginTop: 8 }}>
              New listings, neighborhood notes, and market reports. Monthly. No noise.
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — we’ll be in touch."); }}
                style={{ display: 'flex', gap: 10, flex: 1, maxWidth: 460 }}>
            <input type="email" required placeholder="your@email.com"
                   style={{
                     flex: 1, background: 'rgba(247,247,247,0.06)',
                     border: '1px solid rgba(247,247,247,0.18)', borderRadius: 12,
                     padding: '14px 18px', color: '#F7F7F7',
                     fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none',
                   }} />
            <button type="submit" className="s-btn-primary" style={{ padding: '14px 24px', fontSize: 12 }}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom strip */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 32, fontSize: 12, color: 'rgba(247,247,247,0.55)',
        }}>
          <div>© 2026 Santirma Property Solutions, Inc. Equal Housing Opportunity.</div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(247,247,247,0.6)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>
              </svg>
              REALTOR®
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'rgba(247,247,247,0.7)' }}>
              Solutions that feel like home.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.SantirmaFooter = Footer;
