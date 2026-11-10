export default function AboutSection() {
  return (
    <section
      className="wrap section"
      id="hakkimda"
      aria-labelledby="about-title"
    >
      <div className="about">
        <div>
          <p className="eyebrow">Kısaca ben</p>
          <h2 id="about-title">
            Meraklı bir
            <br />
            üretici.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Ben Tolga, yazılım dünyasını keşfetmeyi seven genç bir yazılımcıyım.
            Yeni şeyler öğrenmek, fikirleri küçük projelere dönüştürmek ve
            öğrendiklerimi paylaşmak hoşuma gidiyor.
          </p>
          <p>
            Bu blog da öğrenme yolculuğumdan notlar, proje denemeleri ve
            yazılımla ilgili düşünceler için hazırladığım küçük bir köşe.
          </p>
        </div>
      </div>
    </section>
  );
}
