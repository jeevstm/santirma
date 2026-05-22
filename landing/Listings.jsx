// Listings.jsx — reusable filter + grid; used by Home preview + Properties page.
const { useState: useStateL, useMemo: useMemoL } = React;

function PropertyCard({ p, onClick, idx }) {
  const [hover, setHover] = useStateL(false);
  const [saved, setSaved] = useStateL(false);
  return (
    <article onClick={onClick}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           background: 'var(--color-cloud-soft)', borderRadius: 20,
           overflow: 'hidden',
           boxShadow: hover ? 'var(--shadow-elevated)' : 'var(--shadow-soft)',
           transform: hover ? 'translateY(-3px)' : 'none',
           transition: 'all 360ms var(--ease-luxury)',
           cursor: 'pointer', fontFamily: 'var(--font-body)',
         }}>
      <div style={{
        height: 260, position: 'relative', overflow: 'hidden',
        background: `url('${p.image}') center/cover no-repeat`,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(13,19,33,0.0) 50%, rgba(13,19,33,0.4) 100%)',
        }} />
        {/* Editorial index number */}
        <div style={{
          position: 'absolute', top: 18, left: 18,
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          color: 'rgba(247,247,247,0.92)', fontSize: 14, fontWeight: 400,
          textShadow: '0 1px 4px rgba(0,0,0,0.4)',
        }}>№ {String(idx).padStart(2, '0')}</div>

        {p.featured && (
          <div style={{
            position: 'absolute', top: 18, right: 64,
            background: 'rgba(247,247,247,0.96)', color: 'var(--color-midnight-navy)',
            padding: '6px 12px', borderRadius: 999,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>Featured</div>
        )}
        <button onClick={(e) => { e.stopPropagation(); setSaved(s => !s); }}
                aria-label="Save"
                style={{
                  position: 'absolute', top: 14, right: 14,
                  background: 'rgba(247,247,247,0.96)', border: 'none',
                  width: 38, height: 38, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                }}>
          <svg width="17" height="17" viewBox="0 0 24 24"
               fill={saved ? '#D4AF37' : 'none'}
               stroke={saved ? '#D4AF37' : '#0D1321'}
               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        <div style={{
          position: 'absolute', bottom: 14, left: 18, display: 'flex', gap: 6,
        }}>
          {p.tags.slice(0, 2).map(t => (
            <span key={t} style={{
              background: 'rgba(13,19,33,0.6)', color: '#F7F7F7',
              padding: '5px 10px', borderRadius: 4,
              fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
            }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: '22px 24px 24px' }}>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--color-prestige-gold)', marginBottom: 8,
        }}>{p.neighborhood} · Seattle</div>

        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 24, lineHeight: 1.2, color: 'var(--color-midnight-navy)', margin: 0,
        }}>{p.title}</h3>

        <div style={{ fontSize: 13, color: 'var(--color-ink-soft)', marginTop: 6 }}>
          {p.address}
        </div>

        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginTop: 20, paddingTop: 18,
          borderTop: '1px solid var(--color-stone)',
        }}>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--color-midnight-navy)' }}>
              ${p.price.toLocaleString()}
            </span>
            <span style={{ fontSize: 13, color: 'var(--color-ink-soft)', fontWeight: 500, marginLeft: 4 }}>/mo</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-ink-muted)', fontWeight: 500 }}>
            {p.beds === 0 ? 'Studio' : p.beds + ' bd'} · {p.baths} ba · {p.sqft.toLocaleString()} sf
          </div>
        </div>
        <div style={{
          marginTop: 14, fontSize: 11, fontWeight: 600,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: p.available.includes('now') ? 'var(--color-success)' : 'var(--color-ink-soft)',
        }}>
          {p.available}
        </div>
      </div>
    </article>
  );
}

function Listings({
  variant = 'grid',          // 'grid' (3-up) | 'fullbleed' (4-up)
  showFilters = true,
  showSort = true,
  limit,
  onSelect,
}) {
  const { PROPERTIES, PROPERTY_TYPES, SEATTLE_NEIGHBORHOODS } = window.SantirmaData;
  const [activeType, setActiveType] = useStateL('All');
  const [activeHood, setActiveHood] = useStateL('All Seattle');
  const [sort, setSort] = useStateL('featured');
  const [maxPrice, setMaxPrice] = useStateL(6000);

  const filtered = useMemoL(() => {
    let r = PROPERTIES.slice();
    if (activeType !== 'All') r = r.filter(p => p.type === activeType || (activeType === 'Furnished' && p.furnished));
    if (activeHood !== 'All Seattle') r = r.filter(p => p.neighborhood === activeHood);
    r = r.filter(p => p.price <= maxPrice);
    if (sort === 'price-asc') r.sort((a,b) => a.price - b.price);
    else if (sort === 'price-desc') r.sort((a,b) => b.price - a.price);
    else if (sort === 'newest') r.sort((a,b) => a.title.localeCompare(b.title));
    else r.sort((a,b) => (b.featured?1:0) - (a.featured?1:0));
    return limit ? r.slice(0, limit) : r;
  }, [activeType, activeHood, sort, maxPrice, limit, PROPERTIES]);

  const cols = variant === 'fullbleed' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)';

  return (
    <div>
      {showFilters && (
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 40,
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {PROPERTY_TYPES.map(t => (
              <button key={t} className={'chip' + (t === activeType ? ' active' : '')}
                      onClick={() => setActiveType(t)}>{t}</button>
            ))}
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 32, flexWrap: 'wrap',
            padding: '20px 22px', background: 'var(--color-stone)', borderRadius: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 280 }}>
              <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-muted)' }}>
                Neighborhood
              </label>
              <select value={activeHood} onChange={e => setActiveHood(e.target.value)}
                      style={{
                        background: 'transparent', border: 'none',
                        fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                        color: 'var(--color-midnight-navy)', cursor: 'pointer', outline: 'none',
                      }}>
                {SEATTLE_NEIGHBORHOODS.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 280 }}>
              <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-muted)' }}>
                Max ${maxPrice.toLocaleString()}/mo
              </label>
              <input type="range" min="1500" max="6000" step="100" value={maxPrice}
                     onChange={e => setMaxPrice(+e.target.value)}
                     style={{ flex: 1, accentColor: 'var(--color-prestige-gold)' }} />
            </div>
            {showSort && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-muted)' }}>
                  Sort
                </label>
                <select value={sort} onChange={e => setSort(e.target.value)}
                        style={{
                          background: 'transparent', border: 'none',
                          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                          color: 'var(--color-midnight-navy)', cursor: 'pointer', outline: 'none',
                        }}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price · low to high</option>
                  <option value="price-desc">Price · high to low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 24 }}>
        {filtered.map((p, i) => (
          <PropertyCard key={p.id} p={p} idx={i + 1} onClick={() => onSelect(p)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{
          padding: '80px 40px', textAlign: 'center',
          background: 'var(--color-stone)', borderRadius: 20,
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600 }}>
            Nothing on the books matching that.
          </div>
          <div style={{ marginTop: 12, color: 'var(--color-ink-muted)' }}>
            Try widening the price or removing a filter — or call us at <a className="s-link" href="tel:2065550148">206.555.0148</a>, we keep an off-market list.
          </div>
        </div>
      )}
    </div>
  );
}

window.SantirmaListings = Listings;
window.SantirmaPropertyCard = PropertyCard;
