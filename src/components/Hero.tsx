export default function Hero() {
  return (
    <section className="wrap hero" id="anasayfa" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">Merhaba, ben Tolga</p>
        <h1 id="hero-title">
          Kod yazıyor,
          <br />
          <em>öğreniyor</em> ve paylaşıyorum.
        </h1>
        <p className="hero-copy">
          Yazılım öğrenirken karşıma çıkan fikirleri, denediğim projeleri ve işe
          yarayan küçük notları burada biriktiriyorum.
        </p>
        <a className="button" href="#yazilar">
          Yazıları keşfet <span aria-hidden="true">&nbsp;↘</span>
        </a>
      </div>
      <div className="hero-art" aria-label="Kod satırları çizimi">
        <div className="code-card" aria-hidden="true">
          <div className="dots">
            <i />
            <i />
            <i />
          </div>
          <p className="code-line">
            <b>const</b> merak = <span>"sonsuz"</span>;
          </p>
          <p className="code-line">
            <b>function</b> yeniBirSeyOgren() {"{"}
          </p>
          <p className="code-line indent">denemeyeDevamEt();</p>
          <p className="code-line">{"}"}</p>
        </div>
        <span className="art-label">Her gün yeni bir şey</span>
      </div>
    </section>
  );
}
