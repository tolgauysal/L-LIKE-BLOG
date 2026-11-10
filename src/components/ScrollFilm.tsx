import { useEffect, useRef } from "react";

const scenes = [
  { className: "film-scene--idea", caption: "Her şey bir fikirle başlar." },
  { className: "film-scene--design", caption: "Fikir, tasarıma dönüşür." },
  { className: "film-scene--launch", caption: "Sonra kendi yoluna çıkar." },
];

export default function ScrollFilm() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let useScrollFallback = !CSS.supports("animation-timeline: view()");
    const updateFilm = () => {
      const bounds = section.getBoundingClientRect();
      if (
        !useScrollFallback &&
        bounds.top <= window.innerHeight &&
        bounds.bottom >= 0
      ) {
        const timeline = section
          .querySelector(".film-scene--idea")
          ?.getAnimations()[0]?.timeline;
        useScrollFallback = !timeline || timeline.currentTime === null;
      }

      if (useScrollFallback) {
        section.classList.add("is-scroll-fallback");
      }

      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - bounds.top) /
            (window.innerHeight + bounds.height),
        ),
      );
      const fade = (start: number, end: number) =>
        Math.max(0, Math.min(1, (progress - start) / (end - start)));

      section.style.setProperty("--film-progress", String(progress));
      section.style.setProperty(
        "--film-idea-opacity",
        String(1 - fade(0.28, 0.38)),
      );
      section.style.setProperty(
        "--film-design-opacity",
        String(fade(0.28, 0.38) * (1 - fade(0.62, 0.72))),
      );
      section.style.setProperty(
        "--film-launch-opacity",
        String(fade(0.62, 0.72)),
      );
    };

    updateFilm();
    window.addEventListener("scroll", updateFilm, { passive: true });
    window.addEventListener("resize", updateFilm);

    return () => {
      window.removeEventListener("scroll", updateFilm);
      window.removeEventListener("resize", updateFilm);
    };
  }, []);

  return (
    <section
      className="scroll-film"
      aria-labelledby="film-title"
      ref={sectionRef}
    >
      <div className="film-sticky">
        <div className="film-content">
          <div className="film-heading">
            <p className="film-eyebrow">Kaydırarak izle</p>
            <h2 id="film-title">Bir fikir, adım adım.</h2>
            <p className="film-description">
              Sayfayı aşağı kaydır; sahne ilerlesin. Yukarı çıktığında film de
              geri sarar.
            </p>
          </div>

          <div className="film-player" aria-hidden="true">
            <div className="film-toolbar">
              <span className="film-window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>yeni-bir-fikir.dev</span>
              <span className="film-toolbar-spacer" />
            </div>
            <div className="film-screen">
              <div className="film-scene film-scene--idea">
                <div className="idea-orbit">
                  <span className="idea-spark idea-spark--one" />
                  <span className="idea-spark idea-spark--two" />
                  <span className="idea-core" />
                </div>
                <span className="scene-kicker">HER ŞEYİN BAŞLANGICI</span>
                <span className="scene-title">Bir fikir.</span>
              </div>

              <div className="film-scene film-scene--design">
                <div className="design-window">
                  <div className="design-sidebar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="design-content">
                    <span className="design-line design-line--short" />
                    <span className="design-line" />
                    <div className="design-cards">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="design-button" />
                  </div>
                </div>
                <span className="scene-kicker">KÜÇÜK ADIMLARLA</span>
                <span className="scene-title">Şekilleniyor.</span>
              </div>

              <div className="film-scene film-scene--launch">
                <div className="launch-sun" />
                <div className="launch-hill launch-hill--back" />
                <div className="launch-hill launch-hill--front" />
                <span className="launch-star launch-star--one">✳</span>
                <span className="launch-star launch-star--two">✦</span>
                <span className="scene-kicker">DENEMEYE DEVAM ET</span>
                <span className="scene-title">Hayata geçti!</span>
              </div>
            </div>
            <div className="film-controls">
              <span className="film-caption film-caption--idea">
                {scenes[0].caption}
              </span>
              <span className="film-caption film-caption--design">
                {scenes[1].caption}
              </span>
              <span className="film-caption film-caption--launch">
                {scenes[2].caption}
              </span>
              <span className="film-time">KAYDIRARAK İLERLET</span>
            </div>
            <div className="film-progress">
              <span />
            </div>
          </div>

          <p className="film-hint">
            <span aria-hidden="true">↕</span> Devam etmek için kaydır
          </p>
        </div>
      </div>
    </section>
  );
}
