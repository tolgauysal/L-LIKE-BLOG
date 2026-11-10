export type BlogPost = {
  id: string;
  category: string;
  readingTime: number;
  title: string;
  summary: string;
  paragraphs: string[];
};

export const posts: BlogPost[] = [
  {
    id: "ogrenmek",
    category: "Başlangıç",
    readingTime: 3,
    title: "Bir yazılımcı gibi öğrenmek",
    summary:
      "Yeni bir konuya başlarken küçük hedefler koymak ve öğrendiklerini deneyerek pekiştirmek neden işe yarıyor?",
    paragraphs: [
      "Yeni bir programlama konusuna başlarken her şeyi bir anda öğrenmeye çalışmak göz korkutucu olabilir. Ben önce küçük bir hedef seçiyorum: örneğin ekrana bir başlık yazdırmak ya da bir düğmeye tıklayınca metni değiştirmek.",
      "Sonra öğrendiğim şeyi hemen deneyebileceğim minicik bir proje yapıyorum. Bir şey çalışmadığında hata mesajını okuyup tek tek denemek, konuyu sadece video izlemekten çok daha iyi anlamamı sağlıyor.",
      "Her gün biraz ilerlemek, ara sıra çok uzun çalışmaktan daha sürdürülebilir. Takıldığım noktaları not alıp daha sonra tekrar dönmek de öğrenme yolculuğumu kolaylaştırıyor.",
    ],
  },
  {
    id: "ilk-web-sayfasi",
    category: "Projeler",
    readingTime: 4,
    title: "İlk web sayfamı yaparken",
    summary:
      "Bir fikri çalışan bir sayfaya dönüştürürken öğrendiğim tasarım ve kodlama adımları.",
    paragraphs: [
      "Bir web sayfası yapmaya başlamadan önce, sayfada neler olacağını kâğıda çizmek işimi kolaylaştırdı. Başlık, içerik ve menünün yerini önceden düşününce kod yazarken daha az kararsız kaldım.",
      "HTML ile sayfanın iskeletini, CSS ile renkleri ve yerleşimi hazırladım. Ekran küçüldüğünde her şeyin sığmadığını fark edince mobil görünümü de ayrıca düzenlemem gerekti.",
      "En sevdiğim bölüm, küçük değişiklikleri tarayıcıda hemen görebilmekti. İlk deneme kusursuz değildi ama her düzeltmede sayfa biraz daha benim hayal ettiğim hale geldi.",
    ],
  },
  {
    id: "hata-mesajlari",
    category: "İpuçları",
    readingTime: 2,
    title: "Hata mesajları dostumuzdur",
    summary:
      "Bir hata gördüğümde paniklemek yerine sorunun kaynağını bulmak için izlediğim basit yol.",
    paragraphs: [
      "Kod çalışmadığında hata mesajı ilk bakışta karışık görünebilir. Ben önce mesajın en son kısmına ve işaret ettiği dosya ile satır numarasına bakıyorum.",
      "Sonra en son değiştirdiğim satırları kontrol edip sorunu küçük parçalara ayırıyorum. Bir seferde tek şeyi değiştirmek, hangi denemenin işe yaradığını anlamama yardımcı oluyor.",
      "Çözümü bulduğumda neyin yanlış olduğunu da not alıyorum. Aynı hatayla tekrar karşılaşırsam bu notlar bana yol gösteriyor.",
    ],
  },
];
