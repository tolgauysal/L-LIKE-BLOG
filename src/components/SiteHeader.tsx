type SiteHeaderProps = {
  onHome: () => void;
};

export default function SiteHeader({ onHome }: SiteHeaderProps) {
  return (
    <header className="topbar wrap">
      <a
        className="brand"
        href="#anasayfa"
        aria-label="Tolga'nın Blogu ana sayfa"
        onClick={onHome}
      >
        <span className="brand-mark" aria-hidden="true">
          t.
        </span>
        <span>Tolga'nın Blogu</span>
      </a>
      <nav aria-label="Ana menü">
        <a href="#yazilar">Yazılar</a>
        <a href="#hakkimda">Hakkımda</a>
      </nav>
    </header>
  );
}
