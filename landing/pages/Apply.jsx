// Apply.jsx — multistep rental application
const { useState: useStateAp, useEffect: useEffectAp } = React;
const Reveal_Ap = window.Reveal;

function ApplyPage({ navigate, prefillPropertyId }) {
  const { PROPERTIES } = window.SantirmaData;
  const [step, setStep] = useStateAp(0);
  const [form, setForm] = useStateAp({
    propertyId: prefillPropertyId || (PROPERTIES[0] && PROPERTIES[0].id),
    moveIn: '',
    leaseLength: '12-month',
    occupants: 1, pets: 'no',
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', currentAddress: '', employmentStatus: 'employed',
    employer: '', annualIncome: '', creditAgree: false,
    background: '', references: '', priorEvictions: 'no',
    agreeFair: false, agreeTerms: false, agreePrivacy: false,
    paymentMethod: 'card',
  });

  const steps = [
    { key: 'home',    label: 'The Home' },
    { key: 'about',   label: 'About You' },
    { key: 'income',  label: 'Income & History' },
    { key: 'consent', label: 'Consent' },
    { key: 'review',  label: 'Review & Pay' },
  ];

  const set = (k) => (e) => setForm({ ...form, [k]: e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e });

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  useEffectAp(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [step]);

  const selectedProperty = PROPERTIES.find(p => p.id === form.propertyId) || PROPERTIES[0];

  const submitted = step === steps.length;

  if (submitted) {
    return (
      <div data-screen-label="07 Apply · Submitted">
        <div style={{ background: 'var(--gradient-premium-dark)', color: '#F7F7F7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '160px 56px 80px' }}>
          <div style={{ maxWidth: 720, textAlign: 'center' }}>
            <Reveal_Ap fade>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--color-prestige-gold)', marginBottom: 18 }}>
                Application Received
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0 }}>
                Thank you, {form.firstName || 'there'}.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(247,247,247,0.85)', margin: '28px 0 40px' }}>
                We’ve received your application for <em style={{ color: 'var(--color-prestige-gold)' }}>{selectedProperty.title}</em>. Amara Wells will review and reach out within one business day. Reference number <strong style={{ color: '#F7F7F7' }}>#SAN-{Math.floor(Math.random() * 9000) + 1000}</strong>.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/properties')} className="s-btn-primary">Browse More Homes</button>
                <button onClick={() => navigate('/')} className="s-btn-ghost">Back to Home</button>
              </div>
            </Reveal_Ap>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div data-screen-label="07 Apply">
      <section style={{
        background: 'var(--gradient-premium-dark)', color: '#F7F7F7',
        padding: '180px 56px 80px',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--color-prestige-gold)',
            marginBottom: 18, display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ width: 40, height: 1, background: 'var(--color-prestige-gold)' }} />
            Rental Application
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 4.6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.015em', margin: '0 0 24px' }}>
            A few honest questions.<br/>
            <em style={{ color: 'var(--color-prestige-gold)' }}>Then we’re off.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(247,247,247,0.78)', maxWidth: 640 }}>
            $45 application fee covers credit, background, and verification. Refunded in full if your home is rented before we review your file.
          </p>

          {/* Stepper */}
          <div style={{ marginTop: 56, display: 'flex', gap: 0, position: 'relative' }}>
            {steps.map((s, i) => {
              const active = i === step;
              const done = i < step;
              return (
                <div key={s.key} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: done ? 'var(--color-prestige-gold)' : (active ? 'rgba(212,175,55,0.18)' : 'rgba(247,247,247,0.06)'),
                    border: active ? '1.5px solid var(--color-prestige-gold)' : '1px solid rgba(247,247,247,0.18)',
                    color: done ? 'var(--color-midnight-navy)' : (active ? 'var(--color-prestige-gold)' : 'rgba(247,247,247,0.5)'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
                    flexShrink: 0, transition: 'all 280ms var(--ease-luxury)',
                  }}>
                    {done ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (i + 1)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: active ? 'var(--color-prestige-gold)' : 'rgba(247,247,247,0.6)' }}>
                      Step {i + 1}
                    </div>
                    <div style={{ fontSize: 13, marginTop: 2, color: active ? '#F7F7F7' : 'rgba(247,247,247,0.7)' }}>{s.label}</div>
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 24, height: 1, background: 'rgba(247,247,247,0.18)' }} />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-cloud-white)', padding: '64px 56px 120px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ background: 'var(--color-cloud-soft)', borderRadius: 24, padding: '48px 44px', border: '1px solid var(--color-stone)' }}>
            {step === 0 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, margin: '0 0 28px' }}>The Home</h2>
                <div style={{ marginBottom: 18 }}>
                  <label className="s-label">Which home are you applying for?</label>
                  <select className="s-select" value={form.propertyId} onChange={set('propertyId')}>
                    {PROPERTIES.map(p => <option key={p.id} value={p.id}>{p.title} — {p.neighborhood} (${p.price.toLocaleString()}/mo)</option>)}
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="s-label">Preferred Move-In</label>
                    <input className="s-input" type="date" value={form.moveIn} onChange={set('moveIn')} />
                  </div>
                  <div>
                    <label className="s-label">Lease Length</label>
                    <select className="s-select" value={form.leaseLength} onChange={set('leaseLength')}>
                      <option>Month-to-month</option>
                      <option>6-month</option>
                      <option>12-month</option>
                      <option>24-month</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <div>
                    <label className="s-label">Number of Occupants</label>
                    <input className="s-input" type="number" min="1" max="10" value={form.occupants} onChange={set('occupants')} />
                  </div>
                  <div>
                    <label className="s-label">Pets</label>
                    <select className="s-select" value={form.pets} onChange={set('pets')}>
                      <option value="no">No pets</option>
                      <option value="cat">1 cat</option>
                      <option value="dog-small">1 small dog (under 35 lb)</option>
                      <option value="dog-large">1 dog (any size)</option>
                      <option value="multi">Multiple pets — describe in notes</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, margin: '0 0 28px' }}>About You</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="s-label">First Name</label>
                    <input className="s-input" required value={form.firstName} onChange={set('firstName')} />
                  </div>
                  <div>
                    <label className="s-label">Last Name</label>
                    <input className="s-input" required value={form.lastName} onChange={set('lastName')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="s-label">Email</label>
                    <input className="s-input" type="email" required value={form.email} onChange={set('email')} />
                  </div>
                  <div>
                    <label className="s-label">Phone</label>
                    <input className="s-input" type="tel" required value={form.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="s-label">Date of Birth</label>
                    <input className="s-input" type="date" value={form.dob} onChange={set('dob')} />
                  </div>
                  <div>
                    <label className="s-label">Current Address</label>
                    <input className="s-input" value={form.currentAddress} onChange={set('currentAddress')} placeholder="Street, City, State, Zip" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, margin: '0 0 28px' }}>Income & History</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="s-label">Employment Status</label>
                    <select className="s-select" value={form.employmentStatus} onChange={set('employmentStatus')}>
                      <option value="employed">Employed (W-2)</option>
                      <option value="self">Self-employed / 1099</option>
                      <option value="student">Student with guarantor</option>
                      <option value="retired">Retired</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="s-label">Employer / Source</label>
                    <input className="s-input" value={form.employer} onChange={set('employer')} placeholder="Company or income source" />
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label className="s-label">Annual Income (USD)</label>
                  <input className="s-input" type="number" value={form.annualIncome} onChange={set('annualIncome')} placeholder="120000" />
                  <div style={{ fontSize: 12, color: 'var(--color-ink-soft)', marginTop: 6 }}>
                    Income should be at least 2.5x monthly rent to qualify without a guarantor. We accept multiple income sources.
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label className="s-label">Prior Landlord References (optional)</label>
                  <textarea className="s-textarea" value={form.references} onChange={set('references')} placeholder="Name, dates, and contact for one or two prior landlords." />
                </div>
                <div>
                  <label className="s-label">Anything we should know?</label>
                  <textarea className="s-textarea" value={form.background} onChange={set('background')} placeholder="A bankruptcy, an eviction, or anything else you’d like to explain in context. Honesty here only helps." />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, margin: '0 0 16px' }}>Consent</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-ink-muted)', marginBottom: 28 }}>
                  Three checkboxes that protect everyone — you, us, and the people living in the building next door.
                </p>
                {[
                  { k: 'creditAgree', label: 'Credit & background screening', body: 'I authorize Santirma Property Solutions to obtain a consumer credit report and background screening from a third-party provider for the sole purpose of evaluating this rental application.' },
                  { k: 'agreeFair', label: 'Fair Housing acknowledgement', body: 'I understand Santirma complies with the Fair Housing Act and Washington State law, and does not discriminate based on race, color, religion, sex, national origin, familial status, disability, gender identity, sexual orientation, source of income, marital status, or any other protected class.' },
                  { k: 'agreeTerms', label: 'Terms & Privacy', body: <>I have read and agree to the <a className="s-link" href="#/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>Terms & Conditions</a> and <a className="s-link" href="#/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a>. I understand the $45 application fee is refundable only if the home is rented before my application is reviewed.</> },
                ].map(item => (
                  <label key={item.k} style={{
                    display: 'flex', gap: 14, padding: 18, marginBottom: 12,
                    border: '1px solid var(--color-stone-deep)', borderRadius: 12,
                    cursor: 'pointer', alignItems: 'flex-start',
                    background: form[item.k] ? 'rgba(212,175,55,0.06)' : 'transparent',
                    borderColor: form[item.k] ? 'var(--color-prestige-gold)' : 'var(--color-stone-deep)',
                    transition: 'all 220ms var(--ease-standard)',
                  }}>
                    <input type="checkbox" checked={!!form[item.k]} onChange={set(item.k)}
                           style={{ marginTop: 4, accentColor: 'var(--color-prestige-gold)', width: 18, height: 18 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-midnight-navy)', marginBottom: 6 }}>{item.label}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--color-ink-muted)' }}>{item.body}</div>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, margin: '0 0 16px' }}>Review & Pay</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-ink-muted)', marginBottom: 28 }}>
                  Confirm the details below. The $45 fee covers screening costs; we do not profit from it.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '24px 26px', background: 'var(--color-stone)', borderRadius: 16, marginBottom: 28 }}>
                  {[
                    ['Applicant', `${form.firstName} ${form.lastName}`],
                    ['Email', form.email || '—'],
                    ['Property', selectedProperty.title],
                    ['Move-In', form.moveIn || '—'],
                    ['Lease', form.leaseLength],
                    ['Occupants', form.occupants],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-soft)' }}>{l}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-midnight-navy)', marginTop: 4 }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label className="s-label">Payment Method</label>
                  <select className="s-select" value={form.paymentMethod} onChange={set('paymentMethod')}>
                    <option value="card">Credit / Debit Card</option>
                    <option value="ach">Bank ACH</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 14, marginBottom: 22 }}>
                  <div>
                    <label className="s-label">Card Number</label>
                    <input className="s-input" placeholder="•••• •••• •••• 4242" />
                  </div>
                  <div>
                    <label className="s-label">Exp.</label>
                    <input className="s-input" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="s-label">CVC</label>
                    <input className="s-input" placeholder="123" />
                  </div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', background: 'var(--color-midnight-navy)', color: '#F7F7F7',
                  borderRadius: 12,
                }}>
                  <span style={{ fontSize: 14, color: 'rgba(247,247,247,0.8)' }}>Application fee · refundable</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700 }}>$45.00</span>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--color-stone)' }}>
              <button onClick={back} disabled={step === 0}
                      style={{
                        background: 'transparent', border: 'none', cursor: step === 0 ? 'default' : 'pointer',
                        color: step === 0 ? 'var(--color-stone-deep)' : 'var(--color-midnight-navy)',
                        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back
              </button>
              {step < steps.length - 1 ? (
                <button onClick={next} className="s-btn-dark">Continue</button>
              ) : (
                <button onClick={() => setStep(steps.length)} className="s-btn-primary">Submit & Pay $45</button>
              )}
            </div>
          </div>

          {/* Property summary sidebar */}
          <aside style={{ position: 'sticky', top: 120 }}>
            <div style={{
              background: 'var(--color-cloud-soft)', borderRadius: 20, overflow: 'hidden',
              boxShadow: 'var(--shadow-soft)',
            }}>
              <div style={{ height: 200, background: `url('${selectedProperty.image}') center/cover` }} />
              <div style={{ padding: '24px 26px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-prestige-gold)' }}>{selectedProperty.neighborhood} · Seattle</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--color-midnight-navy)', margin: '8px 0 6px' }}>{selectedProperty.title}</h3>
                <div style={{ fontSize: 13, color: 'var(--color-ink-soft)' }}>{selectedProperty.address}</div>
                <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--color-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700 }}>${selectedProperty.price.toLocaleString()}<span style={{ fontSize: 13, color: 'var(--color-ink-soft)', fontWeight: 500, marginLeft: 4 }}>/mo</span></span>
                  <span style={{ fontSize: 12, color: 'var(--color-ink-muted)' }}>{selectedProperty.beds === 0 ? 'Studio' : selectedProperty.beds + ' bd'} · {selectedProperty.baths} ba</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-ink-soft)', marginTop: 18, lineHeight: 1.7 }}>
              Need help applying? Call Amara Wells at <a className="s-link" href="tel:2065550148">206.555.0148</a> or email <a className="s-link" href="mailto:amara@santirma.com">amara@santirma.com</a>.
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

window.SantirmaApplyPage = ApplyPage;
