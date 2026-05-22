// Reveal.jsx — IntersectionObserver-based scroll reveal
const { useEffect, useRef, useState } = React;

function Reveal({ children, delay = 0, fade = false, style, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => setSeen(true), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={(fade ? 'reveal-fade' : 'reveal') + (seen ? ' in' : '')} style={style} {...rest}>
      {children}
    </div>
  );
}

window.Reveal = Reveal;
