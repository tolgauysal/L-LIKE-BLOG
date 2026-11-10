export type LegalPageId = "kvkk" | "guvenlik";

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

const documents: Record<
  LegalPageId,
  { eyebrow: string; title: string; intro: string; sections: LegalSection[] }
> = {
  kvkk: {
    eyebrow: "Gizlilik",
    title: "KVKK ve gizlilik",
    intro:
      "Bu bilgilendirme, Tolga'nın Blogu'nun mevcut özellikleri ve 10 Kasım 2026 tarihindeki durumu esas alınarak hazırlanmıştır.",
    sections: [
      {
        heading: "Hangi bilgiler işleniyor?",
        paragraphs: [
          "Blogda hesap, yorum, iletişim formu, bülten kaydı, analiz aracı veya reklam izleyicisi bulunmuyor. Arama kutusuna yazdıkların yalnızca açık sayfadaki yazıları filtrelemek için tarayıcında kullanılır; site tarafından gönderilmez veya kaydedilmez.",
          "Siteyi barındıran sunucu veya platform, hizmetin çalışması ve güvenliği için IP adresi, istek zamanı ve tarayıcı bilgisi gibi teknik erişim kayıtları tutabilir. Bu kayıtların kapsamı ve saklama süresi kullanılan barındırma sağlayıcısına bağlıdır; sağlayıcının gizlilik açıklaması ayrıca incelenmelidir.",
        ],
      },
      {
        heading: "Çerezler ve üçüncü taraflar",
        paragraphs: [
          "Uygulama kendi başına çerez, reklam pikseli veya analiz servisi kullanmaz. Barındırma platformu ya da tarayıcı, kendi teknik işleyişi kapsamında farklı kayıtlar kullanabilir. Siteye ileride üçüncü taraf hizmetler eklenirse bu bilgilendirme güncellenmelidir.",
        ],
      },
      {
        heading: "Haklar ve başvuru",
        paragraphs: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki haklar, veri sorumlusunun kim olduğuna ve işlemenin niteliğine göre değişebilir. Bu blog şu anda bir iletişim veya başvuru formu sunmuyor. Site herkese açık biçimde yayımlanmadan önce sorumlu kişi ve güvenli iletişim yöntemi site sahibinin velisi tarafından belirlenip bu bölüme eklenmelidir.",
          "Blog sahibi çocuk olduğu için kişisel bilgi paylaşımı, veri talepleri ve yayımlama kararları veli gözetiminde yürütülmelidir. Bu metin genel bilgilendirmedir; hukuki danışmanlık veya tek başına mevzuata uygunluk garantisi değildir.",
        ],
      },
    ],
  },
  guvenlik: {
    eyebrow: "Güvenli kullanım",
    title: "Güvenlik politikası",
    intro:
      "Bu sayfa, blogun güvenlik yaklaşımını ve olası bir sorunun sorumlu biçimde bildirilmesine ilişkin beklentileri açıklar.",
    sections: [
      {
        heading: "Mevcut kapsam",
        paragraphs: [
          "Blog şu anda statik bir ön yüzdür; kullanıcı hesabı, parola, ödeme, yorum veya sunucu tarafında kullanıcı verisi işleyen bir uygulama içermez. Bu durum riskleri azaltır ancak barındırma sağlayıcısının, tarayıcının veya cihazın güvenliğini garanti etmez.",
        ],
      },
      {
        heading: "Güvenli kullanım",
        bullets: [
          "Siteye parola, adres, telefon, okul bilgisi veya başka bir özel bilgi göndermeyin; blog bu tür bilgileri istemez.",
          "Yalnızca yayımlanmış bağlantıları kullanın ve tarayıcı uyarılarını dikkate alın.",
          "Siteye yeni form, yorum, analiz veya üçüncü taraf hizmeti eklenecekse gizlilik açıklaması ve güvenlik ayarları önce gözden geçirilmelidir.",
        ],
      },
      {
        heading: "Güvenlik sorunu bildirme",
        paragraphs: [
          "Bir güvenlik sorunu fark edersen, sistemi denemeye veya başkalarının verilerine erişmeye çalışma. Sorunu site sahibinin velisine, sitenin yayımlandığı platformdaki resmî iletişim kanalı üzerinden bildir; bildirime parola veya başka kişisel bilgi ekleme. Bu site şu anda özel bir güvenlik bildirim adresi sunmuyor.",
          "Blog sahibi çocuk olduğu için güvenlik bildirimleri veli gözetiminde ele alınmalıdır. Bu politika yetkisiz erişim veya test için izin vermez.",
        ],
      },
    ],
  },
};

type LegalPageProps = {
  page: LegalPageId;
  onBack: () => void;
};

export default function LegalPage({ page, onBack }: LegalPageProps) {
  const document = documents[page];

  return (
    <article className="wrap legal-page" aria-labelledby="legal-title">
      <button className="back-link" type="button" onClick={onBack}>
        <span aria-hidden="true">←</span> Bloga dön
      </button>
      <p className="eyebrow">{document.eyebrow}</p>
      <h1 id="legal-title">{document.title}</h1>
      <p className="legal-intro">{document.intro}</p>
      <div className="legal-sections">
        {document.sections.map((section) => (
          <section className="legal-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <p className="legal-updated">Son güncelleme: 10 Kasım 2026</p>
    </article>
  );
}
