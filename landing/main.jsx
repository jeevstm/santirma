// main.jsx — router + app shell

const { useState: useStateM, useEffect: useEffectM } = React;

function parseHash() {
  // #/path?... or #/path#anchor
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [path, frag] = raw.split('#');
  return { path: path || '/', hash: frag || '' };
}

function App() {
  const [route, setRoute] = useStateM(parseHash());
  const [selected, setSelected] = useStateM(null);
  const [tweaks, setTweaks] = useStateM(window.__santirmaTweaks || {
    headlineVariant: 'better-places',
    heroAccent: 'gold',
    showOwnerBanner: true,
    showTestimonials: true,
    indexMarks: true,
  });

  useEffectM(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    const onTw = () => setTweaks({ ...window.__santirmaTweaks });
    window.addEventListener('santirma-tweaks-changed', onTw);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('santirma-tweaks-changed', onTw);
    };
  }, []);

  useEffectM(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Scroll to hash anchor if present
    if (route.hash) {
      setTimeout(() => {
        const el = document.getElementById(route.hash);
        if (el) el.scrollIntoView({ block: 'start' });
      }, 100);
    }
  }, [route.path, route.hash]);

  useEffectM(() => {
    const id = setInterval(() => { if (window.lucide) lucide.createIcons(); }, 400);
    return () => clearInterval(id);
  }, []);

  const navigate = (path, hash) => {
    const url = '#' + path + (hash ? '#' + hash : '');
    window.location.hash = url.replace(/^#/, '');
    setRoute({ path, hash: hash || '' });
  };

  // CSS toggle for index marks
  useEffectM(() => {
    const style = document.getElementById('__tw_index_marks') || (() => {
      const s = document.createElement('style');
      s.id = '__tw_index_marks';
      document.head.appendChild(s);
      return s;
    })();
    style.textContent = tweaks.indexMarks ? '' : '.index-mark { display: none !important; }';
  }, [tweaks.indexMarks]);

  // Style override for accent
  useEffectM(() => {
    const style = document.getElementById('__tw_accent') || (() => {
      const s = document.createElement('style');
      s.id = '__tw_accent';
      document.head.appendChild(s);
      return s;
    })();
    // Not changing root tokens — handled per-component (Hero) via prop
  }, [tweaks.heroAccent]);

  const Header = window.SantirmaHeader;
  const Footer = window.SantirmaFooter;
  const PropertyModal = window.SantirmaPropertyModal;
  const HomePage = window.SantirmaHomePage;
  const PropertiesPage = window.SantirmaPropertiesPage;
  const NeighborhoodsPage = window.SantirmaNeighborhoodsPage;
  const ForOwnersPage = window.SantirmaForOwnersPage;
  const AboutPage = window.SantirmaAboutPage;
  const ContactPage = window.SantirmaContactPage;
  const ApplyPage = window.SantirmaApplyPage;
  const FAQPage = window.SantirmaFAQPage;
  const TermsPage = window.SantirmaTermsPage;
  const PrivacyPage = window.SantirmaPrivacyPage;
  const SignInPage = window.SantirmaSignInPage;
  const TweaksUI = window.SantirmaTweaks;

  // Page resolution
  const path = route.path;
  let page = null;
  let transparentHeader = false;

  if (path === '/' || path === '') {
    page = <HomePage navigate={navigate} onSelect={setSelected} tweaks={tweaks} />;
    transparentHeader = true;
  } else if (path === '/properties') {
    page = <PropertiesPage navigate={navigate} onSelect={setSelected} />;
  } else if (path === '/neighborhoods') {
    page = <NeighborhoodsPage navigate={navigate} />;
  } else if (path === '/owners') {
    page = <ForOwnersPage navigate={navigate} />;
  } else if (path === '/about') {
    page = <AboutPage navigate={navigate} />;
  } else if (path === '/contact') {
    page = <ContactPage navigate={navigate} contextHint={route.hash} />;
  } else if (path === '/apply') {
    page = <ApplyPage navigate={navigate} prefillPropertyId={route.hash} />;
  } else if (path === '/faq') {
    page = <FAQPage navigate={navigate} />;
  } else if (path === '/terms') {
    page = <TermsPage navigate={navigate} hash={route.hash} />;
  } else if (path === '/privacy') {
    page = <PrivacyPage navigate={navigate} hash={route.hash} />;
  } else if (path === '/signin') {
    page = <SignInPage navigate={navigate} />;
  } else {
    page = (
      <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '160px 24px 80px', background: 'var(--color-cloud-white)' }}>
        <div className="index-mark">404</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 64, margin: '20px 0 14px', color: 'var(--color-midnight-navy)' }}>
          That page is between leases.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--color-ink-muted)', marginBottom: 32 }}>
          The page you're looking for doesn’t exist — or has moved on.
        </p>
        <button onClick={() => navigate('/')} className="s-btn-dark">Back to Home</button>
      </div>
    );
  }

  // SignIn has its own dark background — hide header chrome
  const hideHeader = path === '/signin';
  const hideFooter = path === '/signin';

  return (
    <>
      {!hideHeader && <Header route={route} navigate={navigate} transparentOverHero={transparentHeader} />}
      <main>{page}</main>
      {!hideFooter && <Footer navigate={navigate} />}
      {selected && <PropertyModal p={selected} onClose={() => setSelected(null)} navigate={navigate} />}
      <TweaksUI />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
