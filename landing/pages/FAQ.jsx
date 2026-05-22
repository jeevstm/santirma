// FAQ.jsx — accordion FAQ
const { useState: useStateF } = React;
const Reveal_F = window.Reveal;
const PageHero_F = window.SantirmaPageHero;

const FAQ_DATA = [
  {
    section: 'Applying',
    items: [
      ['What does the $45 application fee cover?',
       'A three-bureau credit check, criminal background screening, employment verification, and prior-landlord outreach. The fee is paid to our screening provider; Santirma does not profit from it. If your home is rented before we begin reviewing your file, the fee is refunded in full.'],
      ['What income do I need to qualify?',
       'Verifiable gross income of at least 2.5x the monthly rent across all applicants. We accept W-2, 1099, and offer letters. Students and others without traditional income can qualify with a guarantor who meets 4x rent.'],
      ['Will a low credit score disqualify me?',
       'Not automatically. We look at the whole picture — payment history, debt-to-income, and rental history weigh heavily. A score below 620 may require an additional security deposit or guarantor. Tell us your story in the application notes; we read them.'],
      ['Do you accept Section 8 / housing vouchers?',
       'Yes. Washington State law requires it, and we welcome it. Source-of-income discrimination is illegal and against our values. The same screening criteria apply uniformly to all applicants.'],
      ['How long does it take to hear back?',
       'Most applications are decided within one to two business days. Complex files — guarantors, multiple applicants, voucher coordination — can take three to five.'],
    ],
  },
  {
    section: 'Living with Santirma',
    items: [
      ['How do I pay rent?',
       'Through the resident portal at residents.santirma.com. We accept bank ACH (free), debit, and credit (3% processing fee). Rent is due the 1st, late after the 5th. We do not charge late fees in the first month a resident is late — we call first.'],
      ['How do I submit a maintenance request?',
       'Use the resident portal or call our 24/7 dispatch at 206.555.0211. Emergencies (flooding, no heat, security) get a response within an hour; standard tickets are scheduled within three business days.'],
      ['Can I have a pet?',
       "Most of our portfolio is pet-friendly. We do not impose breed restrictions and we cap pet deposits at one month’s pet rent (typically $35–$75/mo). Service and assistance animals are always welcome and never charged."],
      ['Can I paint or hang things?',
       'Yes. Nails, screws, picture-hanging, and paint in a neutral palette are all fine. We just ask you let us know in advance and return the unit to neutral when you leave. We provide the paint codes.'],
      ['What happens at the end of my lease?',
       'We reach out ninety days before lease end with a renewal offer or a quiet conversation about what comes next. No auto-renewal traps. No "renewal fees." If you give notice, we coordinate move-out, walk-through, and security-deposit return within 21 days as required by Washington law.'],
    ],
  },
  {
    section: 'For Property Owners',
    items: [
      ['What does management cost?',
       "Full-service management is 8% of monthly rent collected. No setup fees, no renewal fees, no markups on maintenance vendors. Leasing-only is 75% of first month’s rent. Portfolio (5+ doors) is custom."],
      ['How quickly will my home rent?',
       'Our portfolio average is twelve days from listing to signed lease. Editorial photography, accurate pricing, and pre-screening do the work.'],
      ['How do you handle maintenance vendors?',
       'We maintain a vetted network of licensed plumbers, electricians, HVAC technicians, and general contractors. Scopes over $400 require your written approval. You see every invoice with a photo of the work. We do not mark up vendor pricing.'],
      ['Can I terminate management mid-contract?',
       'Yes. Thirty days written notice, no termination fee. If we have an active lease in your home we will transition residents respectfully and turn over all files within fifteen days.'],
    ],
  },
];

function FAQAccordion({ items }) {
  const [open, setOpen] = useStateF(0);
  return (
    <div style={{ borderTop: '1px solid var(--color-stone-deep)' }}>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} style={{ borderBottom: '1px solid var(--color-stone-deep)' }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
                      padding: '28px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 24, textAlign: 'left',
                      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--color-midnight-navy)',
                    }}>
              {q}
              <span style={{
                width: 36, height: 36, borderRadius: '50%',
                background: isOpen ? 'var(--color-prestige-gold)' : 'transparent',
                border: '1px solid ' + (isOpen ? 'var(--color-prestige-gold)' : 'var(--color-stone-deep)'),
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                color: isOpen ? 'var(--color-midnight-navy)' : 'var(--color-midnight-navy)',
                transition: 'all 280ms var(--ease-luxury)',
                transform: isOpen ? 'rotate(45deg)' : 'none',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div style={{
              maxHeight: isOpen ? 400 : 0, overflow: 'hidden',
              transition: 'max-height 380ms var(--ease-luxury)',
            }}>
              <div style={{ padding: '0 8px 28px', fontSize: 16, lineHeight: 1.75, color: 'var(--color-ink-muted)', maxWidth: 820 }}>
                {a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FAQPage({ navigate }) {
  return (
    <div data-screen-label="08 FAQ">
      <PageHero_F
        overline="Frequently asked"
        title={<>The honest answers,<br/><em style={{ color: 'var(--color-prestige-gold)' }}>without the legalese.</em></>}
        subtitle="Still have a question? Call 206.555.0148 or write to hello@santirma.com — we read every note."
      />

      <section style={{ background: 'var(--color-cloud-white)', padding: '80px 56px 120px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          {FAQ_DATA.map((section, i) => (
            <Reveal_F key={section.section} delay={i * 100}>
              <div style={{ marginBottom: 72 }}>
                <div className="index-mark" style={{ marginBottom: 14 }}>0{i + 1} — {section.section}</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 42, lineHeight: 1.1, letterSpacing: '-0.015em', color: 'var(--color-midnight-navy)', margin: '12px 0 32px' }}>
                  {section.section === 'Applying' ? 'Before you sign.' :
                   section.section === 'Living with Santirma' ? 'Day-to-day in your home.' :
                   'For owners considering us.'}
                </h2>
                <FAQAccordion items={section.items} />
              </div>
            </Reveal_F>
          ))}

          <Reveal_F>
            <div style={{ background: 'var(--color-stone)', borderRadius: 24, padding: '48px 44px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--color-prestige-gold)', marginBottom: 10 }}>
                Didn’t find what you needed?
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, margin: '0 0 20px', color: 'var(--color-midnight-navy)' }}>
                Ask us directly.
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/contact')} className="s-btn-dark">Contact Us</button>
                <a href="tel:2065550148" className="s-btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>206.555.0148</a>
              </div>
            </div>
          </Reveal_F>
        </div>
      </section>
    </div>
  );
}

window.SantirmaFAQPage = FAQPage;
