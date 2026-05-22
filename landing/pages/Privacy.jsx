// Privacy.jsx — privacy policy + cookie preferences
const { useState: useStatePr } = React;
const Reveal_Pr = window.Reveal;
const PageHero_Pr = window.SantirmaPageHero;
const LegalSidebar_Pr = window.LegalSidebar;

function CookiePreferences() {
  const [cookies, setCookies] = useStatePr({ essential: true, analytics: true, marketing: false });

  return (
    <div style={{
      background: 'var(--color-midnight-navy)', color: '#F7F7F7',
      borderRadius: 20, padding: '36px 36px', marginTop: 32,
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--color-prestige-gold)', marginBottom: 10 }}>
        Manage your cookies
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, margin: '0 0 24px' }}>
        Three categories. Toggle freely.
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { k: 'essential', label: 'Essential', body: 'Required for the site to function — session, security, accessibility. Cannot be disabled.', locked: true },
          { k: 'analytics', label: 'Analytics', body: 'Aggregated page-view data so we know which neighborhoods get the most love. Never linked to your account.' },
          { k: 'marketing', label: 'Marketing', body: 'Tracking pixels for advertising performance. Off by default.' },
        ].map(c => (
          <label key={c.k} style={{
            display: 'flex', alignItems: 'flex-start', gap: 16,
            padding: 18, border: '1px solid rgba(247,247,247,0.14)', borderRadius: 12,
            cursor: c.locked ? 'default' : 'pointer',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#F7F7F7', marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 13, color: 'rgba(247,247,247,0.7)', lineHeight: 1.6 }}>{c.body}</div>
            </div>
            <div onClick={() => !c.locked && setCookies({ ...cookies, [c.k]: !cookies[c.k] })}
                 style={{
                   width: 44, height: 24, borderRadius: 999,
                   background: cookies[c.k] ? 'var(--color-prestige-gold)' : 'rgba(247,247,247,0.18)',
                   position: 'relative', flexShrink: 0, marginTop: 2,
                   cursor: c.locked ? 'not-allowed' : 'pointer',
                   opacity: c.locked ? 0.6 : 1,
                   transition: 'background 280ms var(--ease-standard)',
                 }}>
              <div style={{
                position: 'absolute', top: 2, left: cookies[c.k] ? 22 : 2,
                width: 20, height: 20, borderRadius: '50%',
                background: '#F7F7F7',
                transition: 'left 240ms var(--ease-luxury)',
              }} />
            </div>
          </label>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button onClick={() => alert('Preferences saved.')} className="s-btn-primary" style={{ fontSize: 12 }}>Save Preferences</button>
        <button onClick={() => { setCookies({ essential: true, analytics: false, marketing: false }); }} className="s-btn-ghost" style={{ fontSize: 12 }}>Reject All Optional</button>
      </div>
    </div>
  );
}

function PrivacyPage({ navigate, hash }) {
  const sections = [
    { id: 'summary',         label: 'At a glance' },
    { id: 'collect',         label: '1. What we collect' },
    { id: 'use',             label: '2. How we use it' },
    { id: 'share',           label: '3. Who we share with' },
    { id: 'retain',          label: '4. How long we keep it' },
    { id: 'rights',          label: '5. Your rights' },
    { id: 'security',        label: '6. Security' },
    { id: 'children',        label: '7. Children' },
    { id: 'cookies',         label: '8. Cookies' },
    { id: 'changes-privacy', label: '9. Changes' },
    { id: 'contact-privacy', label: '10. Contact' },
  ];

  return (
    <div data-screen-label="10 Privacy">
      <PageHero_Pr
        overline="Legal"
        title={<>Privacy Policy</>}
        subtitle="Plain-language privacy. What we collect, why we collect it, and how to get rid of it. Last updated May 14, 2026."
      />

      <section style={{ background: 'var(--color-cloud-white)', padding: '80px 56px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 72, alignItems: 'start' }}>
          <LegalSidebar_Pr sections={sections} activeId={hash} onNav={(id) => navigate('/privacy', id)} />

          <div className="legal-prose">
            <section id="summary">
              <div style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)',
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: 16, padding: '28px 32px', marginBottom: 32,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--color-prestige-gold)', marginBottom: 14 }}>
                  At a glance
                </div>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  <li>We collect only what we need to lease and manage homes — contact info, application data, and (with your permission) screening data.</li>
                  <li>We <strong>never sell your data</strong>. We do not allow third-party advertisers to track you across the web from our site.</li>
                  <li>You can request a copy, correction, or deletion of your data at any time by writing <strong>privacy@santirma.com</strong>.</li>
                  <li>We retain screening data for 7 years per Washington State recordkeeping rules; everything else, less.</li>
                </ul>
              </div>
            </section>

            <section id="collect">
              <h2>1. What we collect</h2>
              <p>We collect personal information you provide directly:</p>
              <ul>
                <li><strong>Contact information:</strong> name, email, phone, mailing address.</li>
                <li><strong>Inquiry data:</strong> the property you asked about, tour dates, message contents.</li>
                <li><strong>Application data:</strong> date of birth, prior addresses, employer, income, references, government-issued ID (collected via secure third-party screening provider).</li>
                <li><strong>Screening reports:</strong> credit, criminal background, employment, and rental verification — retrieved by our third-party provider with your written consent.</li>
                <li><strong>Resident account data:</strong> rent payment history, maintenance requests, lease documents.</li>
              </ul>
              <p>We collect technical data automatically when you visit the site: IP address, browser type, pages viewed, referring URL, and timestamp. We use this for security and aggregate analytics — not to build a profile of you.</p>
            </section>

            <section id="use">
              <h2>2. How we use it</h2>
              <p>We use your information solely for:</p>
              <ul>
                <li>Responding to inquiries and showing you the right home.</li>
                <li>Processing applications and operating tenancies.</li>
                <li>Collecting rent, dispatching maintenance, and complying with lease terms.</li>
                <li>Sending operational communications (lease renewals, maintenance updates, payment confirmations).</li>
                <li>Sending marketing communications <strong>only with your explicit opt-in</strong>. The Santirma Letter is opt-in. Every email has a one-click unsubscribe.</li>
                <li>Meeting our legal obligations under federal and Washington State law.</li>
              </ul>
              <p>We do not use your personal data to train AI models, sell to third parties, or share with advertisers.</p>
            </section>

            <section id="share">
              <h2>3. Who we share with</h2>
              <p>We share data only with parties that need it to do their job:</p>
              <ul>
                <li><strong>Third-party screening providers</strong> — TransUnion SmartMove or equivalent — solely to process your application.</li>
                <li><strong>Property owners</strong> — for the homes you apply to or rent, limited to what they need to make a leasing decision and manage the tenancy.</li>
                <li><strong>Service providers</strong> — payment processors, accounting providers, and our hosting and customer-support tools. All are bound by data-processing agreements.</li>
                <li><strong>Legal authorities</strong> — only when required by law (subpoena, court order) or to prevent imminent harm. We will notify you unless legally prohibited.</li>
              </ul>
              <p>We do not share data with marketing networks, data brokers, or advertising platforms.</p>
            </section>

            <section id="retain">
              <h2>4. How long we keep it</h2>
              <ul>
                <li><strong>Inquiries:</strong> 24 months from last contact.</li>
                <li><strong>Declined applications:</strong> 7 years per FCRA and Washington recordkeeping rules.</li>
                <li><strong>Active leases:</strong> for the duration of tenancy plus 7 years.</li>
                <li><strong>Site analytics:</strong> 26 months, aggregated and pseudonymized after 90 days.</li>
                <li><strong>Marketing list:</strong> until you unsubscribe, then removed within 30 days.</li>
              </ul>
            </section>

            <section id="rights">
              <h2>5. Your rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access</strong> a copy of the personal information we hold about you.</li>
                <li><strong>Correct</strong> inaccurate or incomplete data.</li>
                <li><strong>Delete</strong> data that is no longer required for the purpose collected, subject to legal retention obligations.</li>
                <li><strong>Restrict or object</strong> to certain processing activities.</li>
                <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
                <li><strong>Opt out</strong> of marketing communications at any time.</li>
              </ul>
              <p>To exercise any right, write to <strong>privacy@santirma.com</strong>. We respond within 30 days. You will not be charged a fee, denied service, or otherwise penalized for exercising these rights.</p>
            </section>

            <section id="security">
              <h2>6. Security</h2>
              <p>We protect data with encryption in transit (TLS 1.3) and at rest (AES-256), access controls on a least-privilege basis, multi-factor authentication for staff, and quarterly security reviews. We use SOC 2-attested vendors for hosting, payments, and screening.</p>
              <p>No system is perfectly secure. If we experience a breach affecting your data, we will notify you within 72 hours of discovery per Washington RCW 19.255.</p>
            </section>

            <section id="children">
              <h2>7. Children</h2>
              <p>The Services are not directed to children under 18. We do not knowingly collect data from minors. If you believe we have inadvertently collected data from a minor, write to <strong>privacy@santirma.com</strong> and we will delete it.</p>
            </section>

            <section id="cookies">
              <h2>8. Cookies</h2>
              <p>We use a small set of cookies for site function and aggregate analytics. We do not use third-party advertising cookies. You can manage your preferences below at any time:</p>
              <CookiePreferences />
            </section>

            <section id="changes-privacy">
              <h2>9. Changes</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be announced via email to active residents and applicants and posted to this page at least thirty (30) days before taking effect.</p>
            </section>

            <section id="contact-privacy">
              <h2>10. Contact</h2>
              <p>Privacy questions: <strong>privacy@santirma.com</strong></p>
              <p>
                Santirma Property Solutions, Inc.<br/>
                Attn: Data Protection Officer<br/>
                Seattle, WA
              </p>
              <p style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--color-stone-deep)', fontSize: 13, color: 'var(--color-ink-soft)' }}>
                © 2026 Santirma Property Solutions, Inc. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

window.SantirmaPrivacyPage = PrivacyPage;
