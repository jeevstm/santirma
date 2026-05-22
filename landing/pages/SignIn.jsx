// SignIn.jsx — resident & owner portal sign-in screen (mock)
const { useState: useStateSi } = React;

function SignInPage({ navigate }) {
  const [tab, setTab] = useStateSi('resident');
  const [showForgot, setShowForgot] = useStateSi(false);
  const [form, setForm] = useStateSi({ email: '', password: '' });

  return (
    <div data-screen-label="11 Sign In" style={{
      minHeight: '100vh',
      background: 'var(--gradient-premium-dark)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '140px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.18,
        backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=80&auto=format&fit=crop')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,19,33,0.6) 0%, rgba(13,19,33,0.92) 100%)' }} />

      <div style={{
        position: 'relative', zIndex: 2,
        background: 'rgba(247,247,247,0.98)',
        backdropFilter: 'blur(14px) saturate(140%)',
        borderRadius: 24, padding: '48px 48px',
        width: '100%', maxWidth: 460,
        boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="assets/logo-mark-light.png" alt="Santirma" style={{ height: 56, marginBottom: 16 }} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--color-midnight-navy)', letterSpacing: '0.04em' }}>SANTIRMA</div>
          <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', color: 'var(--color-prestige-gold)', marginTop: 4 }}>PROPERTY SOLUTIONS</div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 28, borderRadius: 999, background: 'var(--color-stone)', padding: 4 }}>
          {[
            { id: 'resident', label: 'Resident' },
            { id: 'owner',    label: 'Owner' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
                    style={{
                      flex: 1, padding: '10px 14px', border: 'none', cursor: 'pointer',
                      borderRadius: 999,
                      background: tab === t.id ? 'var(--color-midnight-navy)' : 'transparent',
                      color: tab === t.id ? '#F7F7F7' : 'var(--color-midnight-navy)',
                      fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      transition: 'all 240ms var(--ease-standard)',
                    }}>
              {t.label}
            </button>
          ))}
        </div>

        {showForgot ? (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, margin: '0 0 12px', color: 'var(--color-midnight-navy)' }}>
              Reset your password
            </h2>
            <p style={{ fontSize: 14, color: 'var(--color-ink-muted)', marginBottom: 24, lineHeight: 1.65 }}>
              Enter the email on your account — we’ll send a secure reset link.
            </p>
            <div style={{ marginBottom: 20 }}>
              <label className="s-label">Email</label>
              <input className="s-input" type="email" />
            </div>
            <button className="s-btn-dark" style={{ width: '100%', marginBottom: 14 }}
                    onClick={() => { alert('Reset link sent.'); setShowForgot(false); }}>
              Send Reset Link
            </button>
            <button onClick={() => setShowForgot(false)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', width: '100%',
                             fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-ink-muted)' }}>
              Back to sign in
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); alert('Sign in successful (mock).'); }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, margin: '0 0 8px', color: 'var(--color-midnight-navy)' }}>
              {tab === 'resident' ? 'Welcome back home.' : 'Welcome back, owner.'}
            </h2>
            <p style={{ fontSize: 14, color: 'var(--color-ink-muted)', marginBottom: 24 }}>
              {tab === 'resident'
                ? 'Pay rent, submit maintenance, and download documents.'
                : 'View statements, approve work orders, and review performance.'}
            </p>

            <div style={{ marginBottom: 18 }}>
              <label className="s-label">Email</label>
              <input className="s-input" type="email" required value={form.email}
                     onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label className="s-label">Password</label>
              <input className="s-input" type="password" required value={form.password}
                     onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--color-ink-muted)', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--color-prestige-gold)' }} />
                Keep me signed in
              </label>
              <button type="button" onClick={() => setShowForgot(true)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer',
                               fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
                               color: 'var(--color-midnight-navy)',
                               borderBottom: '1px solid var(--color-prestige-gold)', paddingBottom: 1 }}>
                Forgot?
              </button>
            </div>

            <button type="submit" className="s-btn-dark" style={{ width: '100%' }}>
              Sign In
            </button>

            <div style={{ marginTop: 28, padding: 18, background: 'var(--color-stone)', borderRadius: 12,
                          fontSize: 13, lineHeight: 1.65, color: 'var(--color-ink-muted)' }}>
              {tab === 'resident' ? (
                <>New to Santirma? <a href="#/properties" onClick={(e) => { e.preventDefault(); navigate('/properties'); }} className="s-link">Browse available homes</a> and apply online.</>
              ) : (
                <>Interested in property management? <a href="#/owners" onClick={(e) => { e.preventDefault(); navigate('/owners'); }} className="s-link">Learn about our service</a>.</>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

window.SantirmaSignInPage = SignInPage;
