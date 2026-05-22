// Header.jsx — sticky nav with hash-based routing; transparent over hero, solid on scroll.
const { useEffect: useEffH, useState: useStateH } = React;

function Header({ route, navigate, transparentOverHero = true }) {
  const [scrolled, setScrolled] = useStateH(false);
  const [hover, setHover] = useStateH(null);
  const [mobileOpen, setMobileOpen] = useStateH(false);

  useEffH(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'properties',    label: 'Properties' },
    { id: 'neighborhoods', label: 'Neighborhoods' },
    { id: 'owners',        label: 'For Owners' },
    { id: 'about',         label: 'About' },
    { id: 'contact',       label: 'Contact' },
  ];

  const solid = scrolled || !transparentOverHero;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80,
      transition: 'all 380ms var(--ease-luxury)',
      background: solid ? 'rgba(13,19,33,0.95)' : 'transparent',
      backdropFilter: solid ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: solid ? '1px solid rgba(212,175,55,0.18)' : '1px solid transparent',
      color: 'var(--color-cloud-white)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: solid ? '14px 56px' : '22px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'padding 380ms var(--ease-luxury)',
      }}>
        <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}
           style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <img src="assets/logo-mark-transparent.png" alt="Santirma"
               style={{ height: solid ? 38 : 46, width: 'auto', transition: 'height 380ms var(--ease-luxury)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
              color: '#F7F7F7', letterSpacing: '0.04em',
            }}>SANTIRMA</div>
            <div style={{
              fontSize: 9, fontWeight: 600, letterSpacing: '0.22em',
              color: 'var(--color-prestige-gold)', marginTop: 5,
            }}>PROPERTY SOLUTIONS · SEATTLE</div>
          </div>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
          {items.map(it => {
            const isHover = hover === it.id;
            const isActive = route.path === '/' + it.id;
            return (
              <a key={it.id} href={'#/' + it.id}
                 onClick={(e) => { e.preventDefault(); navigate('/' + it.id); }}
                 onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
                 style={{
                   color: (isHover || isActive) ? 'var(--color-prestige-gold)' : '#F7F7F7',
                   textDecoration: 'none',
                   fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
                   paddingBottom: 4,
                   transition: 'color 220ms var(--ease-standard)',
                   position: 'relative',
                 }}>
                {it.label}
                <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0, height: 1,
                  background: 'var(--color-prestige-gold)',
                  transform: (isHover || isActive) ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 280ms var(--ease-luxury)',
                }} />
              </a>
            );
          })}
          <a href="#/signin" onClick={(e) => { e.preventDefault(); navigate('/signin'); }}
             style={{
               color: '#F7F7F7', textDecoration: 'none', fontSize: 12, fontWeight: 600,
               letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.85,
             }}>Resident Sign In</a>
          <button onClick={() => navigate('/apply')} className="s-btn-primary"
                  style={{ padding: '12px 22px', fontSize: 12 }}>
            Apply Now
          </button>
        </nav>
      </div>
    </header>
  );
}

window.SantirmaHeader = Header;
