// Contact.jsx — multi-purpose contact page with form + offices + specialists
const { useState: useStateC } = React;
const Reveal_C = window.Reveal;
const PageHero_C = window.SantirmaPageHero;

function ContactPage({ navigate, contextHint }) {
  // contextHint: 'tour-p01', 'owner', 'general' — pre-selects the reason field
  const initialReason =
    contextHint === 'owner' ? 'owner' :
    (contextHint && contextHint.startsWith('tour-')) ? 'tour' :
    'general';

  const [reason, setReason] = useStateC(initialReason);
  const [submitted, setSubmitted] = useStateC(false);
  const [form, setForm] = useStateC({ name: '', email: '', phone: '', message: '' });

  const reasons = [
    { id: 'tour',    label: 'Schedule a Tour' },
    { id: 'apply',   label: 'Help with My Application' },
    { id: 'general', label: 'General Question' },
    { id: 'owner',   label: "I’m a Property Owner" },
    { id: 'press',   label: 'Press / Media' },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div data-screen-label="06 Contact">
      <PageHero_C
        overline="Get in touch"
        title={<>We pick up<br/><em style={{ color: 'var(--color-prestige-gold)' }}>on the first ring.</em></>}
        subtitle="One form, one team, one promise: a real human reply within one business day. For urgent maintenance, call us anytime at 206.555.0148."
      />

      <section style={{ background: 'var(--color-cloud-white)', padding: '80px 56px 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Form */}
          <Reveal_C>
            {submitted ? (
              <div style={{
                background: 'var(--color-midnight-navy)', color: '#F7F7F7',
                borderRadius: 24, padding: '56px 48px',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--color-prestige-gold)', marginBottom: 14 }}>
                  Received. Thank you.
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '0 0 20px' }}>
                  We’ll be in touch within one business day.
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(247,247,247,0.82)', maxWidth: 480, margin: '0 0 36px' }}>
                  Your message is in front of the right specialist. If anything is urgent, we’re reachable at <span style={{ color: 'var(--color-prestige-gold)' }}>206.555.0148</span>.
                </p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <button onClick={() => navigate('/properties')} className="s-btn-primary">Browse Homes While You Wait</button>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }} className="s-btn-ghost">Send Another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{
                background: 'var(--color-cloud-soft)', borderRadius: 24,
                padding: '48px 44px', border: '1px solid var(--color-stone)',
              }}>
                <div className="index-mark" style={{ marginBottom: 16 }}>Send us a note</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, lineHeight: 1.1, margin: '0 0 28px', color: 'var(--color-midnight-navy)' }}>
                  Tell us what you’re looking for.
                </h2>

                <div style={{ marginBottom: 28 }}>
                  <label className="s-label">What can we help with?</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {reasons.map(r => (
                      <button key={r.id} type="button"
                              className={'chip' + (r.id === reason ? ' active' : '')}
                              onClick={() => setReason(r.id)}>{r.label}</button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="s-label">Full Name</label>
                    <input className="s-input" required value={form.name}
                           onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="s-label">Email</label>
                    <input className="s-input" type="email" required value={form.email}
                           onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label className="s-label">Phone (optional)</label>
                  <input className="s-input" type="tel" value={form.phone}
                         onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label className="s-label">Tell us more</label>
                  <textarea className="s-textarea" required value={form.message}
                            placeholder={reason === 'owner' ? 'A few sentences about your property — address, unit count, current management situation.' :
                                         reason === 'tour' ? 'Which home would you like to see, and a few good times for you?' :
                                         'How can we help?'}
                            onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                <button type="submit" className="s-btn-dark" style={{ width: '100%', padding: '18px 28px', fontSize: 14 }}>
                  Send Message
                </button>
                <div style={{ fontSize: 12, color: 'var(--color-ink-soft)', marginTop: 16, lineHeight: 1.6 }}>
                  By submitting, you agree to our <a className="s-link" href="#/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a>. We never share contact details and never sell data.
                </div>
              </form>
            )}
          </Reveal_C>

          {/* Office + Specialists */}
          <Reveal_C delay={120}>
            <div>
              <div className="index-mark">Our hours</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, margin: '16px 0 14px', color: 'var(--color-midnight-navy)' }}>
                Seattle, by appointment.
              </h3>
              <div style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-ink-muted)' }}>
                In-person meetings at the property or a coffee nearby.<br />
                We come to you.
              </div>
              <div style={{ marginTop: 14, fontSize: 13, lineHeight: 1.9, color: 'var(--color-ink-muted)' }}>
                Mon — Fri · 9:00 am — 6:00 pm<br/>
                Sat · 10:00 am — 4:00 pm<br/>
                Sun · By appointment
              </div>

              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <a href="tel:2065550148" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', border: '1px solid var(--color-stone-deep)', borderRadius: 12, textDecoration: 'none', color: 'var(--color-midnight-navy)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--color-ink-soft)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Call us</div>
                    <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>206.555.0148</div>
                  </div>
                </a>
                <a href="mailto:hello@santirma.com" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', border: '1px solid var(--color-stone-deep)', borderRadius: 12, textDecoration: 'none', color: 'var(--color-midnight-navy)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--color-ink-soft)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Email</div>
                    <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>hello@santirma.com</div>
                  </div>
                </a>
                <a href="tel:2065550211" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', border: '1px solid var(--color-stone-deep)', borderRadius: 12, textDecoration: 'none', color: 'var(--color-midnight-navy)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--color-ink-soft)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Maintenance · 24/7</div>
                    <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4 }}>206.555.0211</div>
                  </div>
                </a>
              </div>

              {/* Specialists strip */}
              <div style={{ marginTop: 40 }}>
                <div className="index-mark">Your specialists</div>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { name: 'Amara Wells',  area: 'Capitol Hill · Belltown · SLU', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop' },
                    { name: 'Soraya Khan',  area: 'Ballard · Fremont · Queen Anne', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop' },
                    { name: 'Daniel Park',  area: 'Owner partnerships', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop' },
                  ].map(s => (
                    <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--color-stone)' }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', background: `url('${s.image}') center/cover` }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-midnight-navy)' }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--color-ink-muted)', marginTop: 2 }}>{s.area}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal_C>
        </div>
      </section>
    </div>
  );
}

window.SantirmaContactPage = ContactPage;
