// Terms.jsx — terms & conditions, plus fair housing & accessibility
const Reveal_T = window.Reveal;
const PageHero_T = window.SantirmaPageHero;

function LegalSidebar({ sections, activeId, onNav }) {
  return (
    <nav style={{ position: 'sticky', top: 120 }}>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 18,
      }}>On this page</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {sections.map(s => (
          <li key={s.id}>
            <a href={'#' + s.id}
               onClick={(e) => { e.preventDefault(); onNav(s.id); }}
               style={{
                 display: 'block', padding: '10px 14px',
                 fontSize: 13, color: activeId === s.id ? 'var(--color-midnight-navy)' : 'var(--color-ink-muted)',
                 fontWeight: activeId === s.id ? 600 : 500,
                 textDecoration: 'none', borderRadius: 8,
                 background: activeId === s.id ? 'var(--color-stone)' : 'transparent',
                 borderLeft: activeId === s.id ? '2px solid var(--color-prestige-gold)' : '2px solid transparent',
                 transition: 'all 220ms var(--ease-standard)',
               }}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

window.LegalSidebar = LegalSidebar;

function TermsPage({ navigate, hash }) {
  const sections = [
    { id: 'overview',      label: '1. Overview' },
    { id: 'eligibility',   label: '2. Eligibility' },
    { id: 'applications',  label: '3. Applications & Fees' },
    { id: 'leases',        label: '4. Leases & Tenancy' },
    { id: 'payments',      label: '5. Payments & Late Fees' },
    { id: 'maintenance',   label: '6. Maintenance & Repairs' },
    { id: 'termination',   label: '7. Termination & Move-Out' },
    { id: 'liability',     label: '8. Liability & Insurance' },
    { id: 'disputes',      label: '9. Disputes & Governing Law' },
    { id: 'fair-housing',  label: '10. Fair Housing' },
    { id: 'accessibility', label: '11. Accessibility' },
    { id: 'changes',       label: '12. Changes to Terms' },
    { id: 'contact-legal', label: '13. Contact' },
  ];

  return (
    <div data-screen-label="09 Terms">
      <PageHero_T
        overline="Legal"
        title={<>Terms & Conditions</>}
        subtitle="The full agreement that governs use of our website, applications, and services. Last updated May 14, 2026."
      />

      <section style={{ background: 'var(--color-cloud-white)', padding: '80px 56px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 72, alignItems: 'start' }}>
          <LegalSidebar sections={sections} activeId={hash} onNav={(id) => navigate('/terms', id)} />

          <div className="legal-prose">
            <Reveal_T>
              <div style={{ background: 'var(--color-stone)', borderRadius: 14, padding: '20px 24px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <div style={{ fontSize: 14, color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                  This is a plain-language summary backed by enforceable terms. Where the language below conflicts with your signed lease, the lease governs.
                </div>
              </div>
            </Reveal_T>

            <section id="overview">
              <h2>1. Overview</h2>
              <p>These Terms and Conditions ("Terms") govern your use of the website, mobile experiences, online application portal, and any related services (collectively, the "Services") provided by Santirma Property Solutions, Inc. ("Santirma," "we," "us"). By using the Services, you agree to these Terms. If you do not agree, please do not use the Services.</p>
              <p><strong>Santirma operates in Seattle, WA</strong>, acting on behalf of property owners to market, lease, and manage rental homes.</p>
            </section>

            <section id="eligibility">
              <h2>2. Eligibility</h2>
              <p>You must be at least 18 years old and legally able to enter into binding contracts in your jurisdiction to use the Services. By using the Services, you represent that you meet these requirements.</p>
              <p>Submitting an application is not an offer of tenancy. We evaluate applications uniformly using documented screening criteria and approve based on those criteria alone.</p>
            </section>

            <section id="applications">
              <h2>3. Applications & Fees</h2>
              <h3>3.1 Application Fee</h3>
              <p>We charge a <strong>$45 application fee</strong> per adult applicant. This fee covers the actual cost of third-party credit, criminal background, employment, and rental history verification.</p>
              <h3>3.2 Refunds</h3>
              <p>The application fee is refundable in full if the home is leased to another applicant before we begin processing your file. Once screening has commenced, the fee is non-refundable as it has been paid to our third-party screening provider.</p>
              <h3>3.3 Screening Criteria</h3>
              <ul>
                <li>Verifiable gross income of at least <strong>2.5x</strong> the monthly rent across all adult applicants.</li>
                <li>Satisfactory rental history with no unresolved judgments from prior landlords.</li>
                <li>No active eviction proceedings within the prior 36 months (per Washington RCW 59.18).</li>
                <li>Criminal background reviewed using individualized assessment, not categorical exclusions.</li>
              </ul>
              <p>If we deny your application, you will receive an adverse-action notice explaining the basis for the decision and your rights under the Fair Credit Reporting Act (FCRA).</p>
            </section>

            <section id="leases">
              <h2>4. Leases & Tenancy</h2>
              <p>All tenancies are governed by a written lease agreement signed by you and the property owner (or Santirma on the owner’s behalf). The lease constitutes the full agreement between the parties.</p>
              <p>Lease terms typically range from <strong>6 to 24 months</strong>. Month-to-month leases are available on select homes. Renewal offers are extended ninety (90) days prior to lease expiration; there is no automatic renewal unless specified in writing.</p>
            </section>

            <section id="payments">
              <h2>5. Payments & Late Fees</h2>
              <p>Rent is due on the 1st of each month and considered late after the 5th. Per Washington law (RCW 59.18.170), late fees do not exceed $75 or the actual cost of collection. We do not assess a late fee in the first month a resident is late; we contact you first.</p>
              <p>Accepted payment methods: bank ACH (free), debit, credit card (3% processing fee assessed by payment processor). NSF returns incur the actual bank fee plus $25.</p>
            </section>

            <section id="maintenance">
              <h2>6. Maintenance & Repairs</h2>
              <p>Residents may submit maintenance requests via the resident portal or by calling our 24/7 dispatch at 206.555.0211. Emergency requests (loss of heat, flooding, security failures, gas leaks) receive a response within one hour. Standard requests are scheduled within three (3) business days.</p>
              <p>Residents are responsible for damage caused by negligence, abuse, or unauthorized alterations. Normal wear-and-tear is the owner’s responsibility per Washington RCW 59.18.060.</p>
            </section>

            <section id="termination">
              <h2>7. Termination & Move-Out</h2>
              <p>Residents may terminate a month-to-month tenancy with 20 days written notice. Fixed-term leases may be broken with payment of the lesser of: (a) one (1) month’s rent, or (b) actual losses incurred until a replacement resident is found. We make good-faith efforts to re-rent within thirty (30) days.</p>
              <p>Security deposits are returned within 21 days of move-out per RCW 59.18.280, less itemized deductions for unpaid rent or damages beyond normal wear-and-tear.</p>
            </section>

            <section id="liability">
              <h2>8. Liability & Insurance</h2>
              <p>Residents are required to carry renters insurance with minimum $100,000 in personal liability coverage naming Santirma and the property owner as additional interested parties.</p>
              <p>Santirma’s aggregate liability for any claim arising from the Services is limited to amounts paid by you in the prior twelve (12) months, except where prohibited by law.</p>
            </section>

            <section id="disputes">
              <h2>9. Disputes & Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Washington, without regard to its conflict-of-laws principles. Any dispute arising from these Terms will be resolved in the state or federal courts located in King County, Washington.</p>
              <p>Before initiating litigation, the parties agree to attempt informal resolution by contacting <strong>legal@santirma.com</strong>. Disputes involving claims of $10,000 or less may be brought in small-claims court.</p>
            </section>

            <section id="fair-housing">
              <h2>10. Fair Housing</h2>
              <p>Santirma complies with the federal Fair Housing Act, the Washington State Law Against Discrimination (RCW 49.60), and all local fair-housing ordinances. We do not discriminate based on race, color, religion, national origin, sex (including gender identity and sexual orientation), familial status, disability, age, marital status, source of income (including Section 8), military or veteran status, or any other protected characteristic.</p>
              <p>If you believe you have experienced discrimination, you may file a complaint with the U.S. Department of Housing and Urban Development at <strong>1-800-669-9777</strong> or the Washington State Human Rights Commission at <strong>1-800-233-3247</strong>.</p>
            </section>

            <section id="accessibility">
              <h2>11. Accessibility</h2>
              <p>Santirma is committed to digital accessibility for people with disabilities. Our website is designed to meet <strong>WCAG 2.1 Level AA</strong> standards. Reasonable accommodation requests for the application process or physical property access can be directed to <strong>access@santirma.com</strong> or 206.555.0148.</p>
              <p>We do not charge any fee for service animals, regardless of breed or training certification, in compliance with the Fair Housing Act.</p>
            </section>

            <section id="changes">
              <h2>12. Changes to Terms</h2>
              <p>We may update these Terms from time to time. Material changes will be communicated at least thirty (30) days before they take effect, via email to active residents and applicants and via a notice on this page. Continued use of the Services after the effective date constitutes acceptance.</p>
            </section>

            <section id="contact-legal">
              <h2>13. Contact</h2>
              <p>For questions about these Terms, write to <strong>legal@santirma.com</strong> or:</p>
              <p>
                Santirma Property Solutions, Inc.<br />
                Attn: Legal Department<br />
                Seattle, WA
              </p>
              <p style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--color-stone-deep)', fontSize: 13, color: 'var(--color-ink-soft)' }}>
                © 2026 Santirma Property Solutions, Inc. All rights reserved. Equal Housing Opportunity.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

window.SantirmaTermsPage = TermsPage;
