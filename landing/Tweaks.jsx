// Tweaks.jsx — design tweak controls for hero variants etc.
const { useEffect: useEffectTw } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headlineVariant": "better-places",
  "heroAccent": "gold",
  "showOwnerBanner": true,
  "showTestimonials": true,
  "indexMarks": true
}/*EDITMODE-END*/;

function Tweaks() {
  const { tweaks, setTweak, isOpen } = useTweaks(TWEAK_DEFAULTS);

  // Reflect tweaks into a global so pages can read them
  useEffectTw(() => {
    window.__santirmaTweaks = tweaks;
    window.dispatchEvent(new CustomEvent('santirma-tweaks-changed'));
  }, [tweaks]);

  if (!isOpen) return null;

  return (
    <TweaksPanel title="Tweaks · Santirma">
      <TweakSection title="Hero">
        <TweakSelect label="Headline" k="headlineVariant"
                     value={tweaks.headlineVariant} setTweak={setTweak}
                     options={[
                       { value: 'better-places', label: 'Better Places. Smarter Solutions. Stronger Futures.' },
                       { value: 'rental-properties', label: 'Rental Properties. Creative Solutions. Lasting Value.' },
                       { value: 'your-home', label: 'Your Home. Our Solutions. Better Living.' },
                       { value: 'modern-living', label: "Modern Living. Trusted Solutions. Seattle’s Finest." },
                     ]} />
        <TweakRadio label="Third-line color" k="heroAccent"
                    value={tweaks.heroAccent} setTweak={setTweak}
                    options={[
                      { value: 'gold',  label: 'Gold' },
                      { value: 'white', label: 'White' },
                    ]} />
      </TweakSection>

      <TweakSection title="Home sections">
        <TweakToggle label="Show testimonials" k="showTestimonials"
                     value={tweaks.showTestimonials} setTweak={setTweak} />
        <TweakToggle label="Show owners banner" k="showOwnerBanner"
                     value={tweaks.showOwnerBanner} setTweak={setTweak} />
        <TweakToggle label="Editorial index marks (№ 01, №02…)" k="indexMarks"
                     value={tweaks.indexMarks} setTweak={setTweak} />
      </TweakSection>
    </TweaksPanel>
  );
}

window.SantirmaTweaks = Tweaks;
