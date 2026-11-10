import type { LegalPageId } from "./LegalPage";

type SiteFooterProps = {
  onOpenLegal: (page: LegalPageId) => void;
};

export default function SiteFooter({ onOpenLegal }: SiteFooterProps) {
  return (
    <footer className="wrap footer">
      <div className="footer-main">
        <p className="footer-note">
          © {new Date().getFullYear()} Tolga'nın Blogu
        </p>
        <p className="footer-note">Merak et. Dene. Öğren.</p>
      </div>
      <nav className="footer-legal" aria-label="Yasal bilgiler">
        <button type="button" onClick={() => onOpenLegal("kvkk")}>
          KVKK ve Gizlilik
        </button>
        <button type="button" onClick={() => onOpenLegal("guvenlik")}>
          Güvenlik
        </button>
      </nav>
    </footer>
  );
}
