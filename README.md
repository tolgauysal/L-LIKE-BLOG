# Tolga'nın Blogu

Tolga'nın yazılım öğrenme yolculuğu, projeleri ve notları için hazırlanmış React + TypeScript blogu.

## Açıklama

Tolga'nın Blogu; yazılım öğrenme sürecindeki notları, proje deneyimlerini ve faydalı ipuçlarını paylaşmak için hazırlanmış kişisel bir blog sitesidir. Ziyaretçiler yazıları kategorilere göre filtreleyebilir, arama yapabilir ve yazıların tamamını okuyabilir. Sayfada ayrıca kaydırma hareketiyle ilerleyip geri sarılan CSS animasyonlu bir sahne, KVKK ve gizlilik bilgilendirmesi ile güvenlik politikası bulunur. Site mobil ekranlara uyumlu React ve TypeScript ile geliştirilmiştir.

## Gereksinimler

- Node.js ve npm

## Geliştirme

```bash
npm install
npm run dev
```

## Kontroller

```bash
npm run typecheck
npm run build
```

Vite geliştirme sunucusu terminalde gösterilen yerel adreste açılır. Sunucuyu durdurmak için terminalde `Ctrl+C` kullanın.

## Proje yapısı

- `src/App.tsx`: Sayfa düzeni, yazı arama ve kategori filtreleri.
- `src/components/`: Sayfa bölümleri ve tekrar kullanılan arayüz bileşenleri.
- `src/data/`: Blog yazıları.
- `src/styles.css`: Tasarım ve duyarlı düzen.
- `SECURITY.md`: Güvenlik yaklaşımı ve sorumlu bildirim bilgileri.

Gizlilik ve mevcut veri işleme açıklaması, blogun alt kısmındaki **KVKK ve Gizlilik** bağlantısındadır. Bu proje kullanıcı hesabı, iletişim formu, yorum, analiz veya reklam izleyicisi içermez. Barındırma sağlayıcısının teknik kayıtları kendi politikasına tabi olabilir. Blog herkese açık yayımlanmadan önce veli, veri sorumlusu ve iletişim bilgilerini gözden geçirmelidir.
