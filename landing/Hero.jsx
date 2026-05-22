// Hero.jsx — cinematic full-bleed boutique-hotel hero with floating search.
const { useState: useStateHero, useEffect: useEffectHero } = React;

function HeroSearch({ onSearch }) {
  const { SEATTLE_NEIGHBORHOODS, PROPERTY_TYPES } = window.SantirmaData;
  const [where, setWhere] = useStateHero('All Seattle');
  const [type, setType] = useStateHero('All');
  const [budget, setBudget] = useStateHero('$2k – $4k');
  const [whenOpen, setWhenOpen] = useStateHero(null); // 'where' | 'type' | 'budget' | null

  const budgets = ['Any budget', 'Under $2k', '$2k – $3k', '$2k – $4k', '$3k – $5k', '$5k+'];

  const Field = ({ label, value, options, onPick, openKey }) => {
    const open = whenOpen === openKey;
    return (
      <div style={{ flex: 1, position: 'relative' }}>
        <button onClick={() => setWhenOpen(open ? null : openKey)}
          style={{
            width: '100%', textAlign: 'left',
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: '6px 0', display: 'flex', flexDirection: 'column', gap: 6,
            fontFamily: 'var(--font-body)',
          }}>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--color-ink-soft)',
          }}>{label}</span>
          <span style={{
            fontSize: 15, color: 'var(--color-midnight-navy)', fontWeight: 500,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            {value}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 style={{ transition: 'transform 220ms var(--ease-standard)', transform: open ? 'rotate(180deg)' : 'none' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </button>
        {open && (
          <div style={{
            position: 'absolute', top: '100%', left: -16, marginTop: 12,
            background: 'var(--color-cloud-white)',
            borderRadius: 14, boxShadow: '0 20px 50px rgba(13,19,33,0.18)',
            border: '1px solid var(--color-stone)',
            padding: 8, zIndex: 50, minWidth: 220,
          }}>
            {options.map(o => (
              <button key={o} onClick={() => { onPick(o); setWhenOpen(null); }}
                style={{
                  width: '100%', textAlign: 'left',
                  background: o === value ? 'var(--color-stone)' : 'transparent',
                  border: 'none', borderRadius: 8, padding: '10px 12px',
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: 'var(--color-midnight-navy)', cursor: 'pointer',
                }}
                onMouseEnter={e => { if (o !== value) e.currentTarget.style.background = 'rgba(230,226,219,0.5)'; }}
                onMouseLeave={e => { if (o !== value) e.currentTarget.style.background = 'transparent'; }}>
                {o}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      background: 'rgba(247,247,247,0.97)',
      backdropFilter: 'blur(16px) saturate(140%)',
      borderRadius: 20, padding: '22px 26px',
      display: 'flex', alignItems: 'center', gap: 28,
      boxShadow: '0 30px 80px rgba(13,19,33,0.4)',
      border: '1px solid rgba(212,175,55,0.18)',
    }}>
      <Field label="Where" value={where} options={SEATTLE_NEIGHBORHOODS} onPick={setWhere} openKey="where" />
      <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--color-stone-deep)', opacity: 0.5 }} />
      <Field label="Home Type" value={type} options={PROPERTY_TYPES} onPick={setType} openKey="type" />
      <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--color-stone-deep)', opacity: 0.5 }} />
      <Field label="Budget" value={budget} options={budgets} onPick={setBudget} openKey="budget" />
      <button onClick={() => onSearch({ where, type, budget })}
        style={{
          background: 'var(--color-midnight-navy)', color: 'var(--color-cloud-white)',
          border: 'none', borderRadius: 12, width: 54, height: 54,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', flexShrink: 0,
          transition: 'background 280ms var(--ease-luxury)',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--color-prestige-gold)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--color-midnight-navy)'}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </div>
  );
}

function Hero({ onSearch, headlineVariant = 'better-places', emphasis = 'gold' }) {
  const { HERO_IMAGE } = window.SantirmaData;
  const [loaded, setLoaded] = useStateHero(false);
  useEffectHero(() => { const t = setTimeout(() => setLoaded(true), 60); return () => clearTimeout(t); }, []);

  const headlines = {
    'better-places': ['Better Places.', 'Smarter Solutions.', 'Stronger Futures.'],
    'rental-properties': ['Rental Properties.', 'Creative Solutions.', 'Lasting Value.'],
    'your-home': ['Your Home.', 'Our Solutions.', 'Better Living.'],
    'modern-living': ['Modern Living.', 'Trusted Solutions.', "Seattle’s Finest."],
  };
  const lines = headlines[headlineVariant] || headlines['better-places'];
  const accent = emphasis === 'gold' ? 'var(--color-prestige-gold)' : '#F7F7F7';

  return (
    <section style={{
      position: 'relative',
      height: '100vh', minHeight: 760, maxHeight: 1020,
      overflow: 'hidden',
      background: 'var(--color-midnight-navy)',
      color: 'var(--color-cloud-white)',
    }}>
      {/* Background image with ken-burns */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `url('${HERO_IMAGE}') center/cover no-repeat`,
        animation: 'hero-zoom 16s var(--ease-luxury) forwards',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1200ms var(--ease-luxury)',
      }} />
      {/* Layered protection gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(13,19,33,0.55) 0%, rgba(13,19,33,0.20) 35%, rgba(13,19,33,0.85) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(13,19,33,0.6) 0%, rgba(13,19,33,0.0) 60%)',
      }} />

      {/* Side caption — boutique-hotel index card */}
      <div style={{
        position: 'absolute', right: 56, top: '50%', transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'right center',
        fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: 'rgba(247,247,247,0.5)',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <span style={{ width: 32, height: 1, background: 'rgba(247,247,247,0.5)' }} />
        Established Seattle · Vol. 01
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1440, margin: '0 auto',
        padding: '160px 56px 60px',
        height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div style={{ maxWidth: 880 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 18, color: 'var(--color-prestige-gold)', marginBottom: 18,
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(10px)',
            transition: 'opacity 800ms 200ms var(--ease-luxury), transform 800ms 200ms var(--ease-luxury)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ width: 40, height: 1, background: 'var(--color-prestige-gold)' }} />
            A curated collection of Seattle rentals
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(56px, 7.2vw, 104px)', lineHeight: 1.02,
            letterSpacing: '-0.015em', margin: 0, color: '#F7F7F7',
          }}>
            {lines.map((line, i) => (
              <span key={i} style={{
                display: 'block',
                color: i === 2 ? accent : '#F7F7F7',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(24px)',
                transition: `opacity 1000ms ${400 + i * 180}ms var(--ease-luxury), transform 1000ms ${400 + i * 180}ms var(--ease-luxury)`,
              }}>{line}</span>
            ))}
          </h1>

          <p style={{
            fontSize: 19, lineHeight: 1.7, marginTop: 32, marginBottom: 0,
            color: 'rgba(247,247,247,0.85)', maxWidth: 560, fontWeight: 400,
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(12px)',
            transition: 'opacity 1000ms 1100ms var(--ease-luxury), transform 1000ms 1100ms var(--ease-luxury)',
          }}>
            Quality rental homes and creative housing solutions across Seattle’s most loved
            neighborhoods. Concierge service for renters. Honest stewardship for owners.
          </p>
        </div>

        {/* Bottom row: search + trust */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(20px)',
          transition: 'opacity 1000ms 1300ms var(--ease-luxury), transform 1000ms 1300ms var(--ease-luxury)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48,
        }}>
          <div style={{ flex: 1, maxWidth: 820 }}>
            <HeroSearch onSearch={onSearch} />
          </div>
          <div style={{
            display: 'flex', gap: 40, paddingBottom: 8,
          }}>
            {[
              ['142', 'Homes available'],
              ['98%', 'Renewal rate'],
              ['4.9', 'Resident rating'],
            ].map(([k, l]) => (
              <div key={l} style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700,
                  color: 'var(--color-prestige-gold)', lineHeight: 1,
                }}>{k}</div>
                <div style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(247,247,247,0.7)', marginTop: 8,
                }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SantirmaHero = Hero;
