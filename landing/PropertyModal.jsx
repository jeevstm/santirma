// PropertyModal.jsx — full property detail in a luxury modal
const { useState: useStatePM, useEffect: useEffectPM } = React;

function PropertyModal({ p, onClose, navigate }) {
  const [imgIdx, setImgIdx] = useStatePM(0);
  useEffectPM(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!p) return null;

  return (
    <div onClick={onClose}
         style={{
           position: 'fixed', inset: 0, zIndex: 100,
           background: 'rgba(13,19,33,0.72)',
           backdropFilter: 'blur(6px)',
           display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
           padding: '40px 24px', overflowY: 'auto',
           animation: 'modal-bg 280ms var(--ease-luxury)',
         }}>
      <div onClick={(e) => e.stopPropagation()} className="modal-scroll"
           style={{
             background: 'var(--color-cloud-white)', color: 'var(--color-midnight-navy)',
             borderRadius: 24, width: '100%', maxWidth: 1180,
             overflow: 'hidden', position: 'relative',
             animation: 'modal-in 380ms var(--ease-luxury)',
             boxShadow: '0 50px 120px rgba(0,0,0,0.5)',
           }}>
        {/* Close */}
        <button onClick={onClose}
                aria-label="Close"
                style={{
                  position: 'absolute', top: 20, right: 20, zIndex: 5,
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(247,247,247,0.96)', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D1321" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Image collage */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr',
          gap: 4, height: 520, background: 'var(--color-stone-deep)',
        }}>
          <div style={{
            background: `url('${p.gallery[imgIdx]}') center/cover no-repeat`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', bottom: 20, left: 24, display: 'flex', gap: 8,
            }}>
              {p.gallery.map((g, i) => (
                <button key={i} onClick={() => setImgIdx(i)}
                        style={{
                          width: i === imgIdx ? 28 : 10, height: 10,
                          borderRadius: 999, border: 'none', cursor: 'pointer',
                          background: i === imgIdx ? 'var(--color-prestige-gold)' : 'rgba(247,247,247,0.7)',
                          transition: 'width 240ms var(--ease-luxury)',
                        }} />
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: 4 }}>
            {p.gallery.slice(1, 3).map((g, i) => (
              <div key={i} onClick={() => setImgIdx(i + 1)}
                   style={{ background: `url('${g}') center/cover no-repeat`, cursor: 'pointer' }} />
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '40px 56px 56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 56 }}>
            {/* Left content */}
            <div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 12,
              }}>{p.neighborhood} · Seattle</div>

              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.01em',
                margin: 0, color: 'var(--color-midnight-navy)',
              }}>{p.title}</h2>

              <div style={{ fontSize: 15, color: 'var(--color-ink-muted)', marginTop: 10 }}>{p.address}</div>

              <div style={{
                display: 'flex', gap: 56, padding: '28px 0', marginTop: 32,
                borderTop: '1px solid var(--color-stone)', borderBottom: '1px solid var(--color-stone)',
              }}>
                {[
                  ['Bedrooms', p.beds === 0 ? 'Studio' : p.beds],
                  ['Bathrooms', p.baths],
                  ['Square Feet', p.sqft.toLocaleString()],
                  ['Walk Score', p.walkScore],
                ].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ink-soft)', marginBottom: 6 }}>{l}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--color-midnight-navy)' }}>{v}</div>
                  </div>
                ))}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 24, marginTop: 36, marginBottom: 12, color: 'var(--color-prestige-gold)',
              }}>About this home</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--color-midnight-navy)', margin: 0 }}>
                {p.description}
              </p>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 24, marginTop: 40, marginBottom: 16, color: 'var(--color-prestige-gold)',
              }}>Amenities</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
                {p.amenities.map(a => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--color-ink-muted)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Right sticky card */}
            <aside style={{
              background: 'var(--color-midnight-navy)', color: '#F7F7F7',
              borderRadius: 20, padding: 32, alignSelf: 'start',
              position: 'sticky', top: 20,
            }}>
              <div style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 8,
              }}>{p.available}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, lineHeight: 1 }}>
                ${p.price.toLocaleString()}
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: 'rgba(247,247,247,0.7)', marginLeft: 6 }}>/mo</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(247,247,247,0.65)', marginTop: 6 }}>
                + utilities · 12-month lease available
              </div>

              <div style={{ height: 1, background: 'rgba(212,175,55,0.25)', margin: '24px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button onClick={() => { onClose(); navigate('/contact', 'tour-' + p.id); }}
                        className="s-btn-primary" style={{ width: '100%' }}>
                  Schedule a Tour
                </button>
                <button onClick={() => { onClose(); navigate('/apply', p.id); }}
                        className="s-btn-ghost" style={{ width: '100%' }}>
                  Apply for This Home
                </button>
              </div>

              <div style={{
                marginTop: 28, padding: '20px 0 0',
                borderTop: '1px solid rgba(212,175,55,0.25)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop') center/cover`,
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: 'rgba(247,247,247,0.6)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Your specialist</div>
                  <div style={{ fontSize: 15, color: '#F7F7F7', marginTop: 4, fontWeight: 600 }}>Amara Wells</div>
                  <div style={{ fontSize: 12, color: 'var(--color-prestige-gold)' }}>206.555.0148</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SantirmaPropertyModal = PropertyModal;
