(function () {
  var body = document.body;

  if (!body) return;

  var pageUrl = body.dataset.pageUrl || "";
  if (!pageUrl.startsWith("/focusling")) return;

  // Focusling itself ships in English and Turkish.
  var locale = ((navigator.languages && navigator.languages[0]) || navigator.language || "en").toLowerCase();
  var language = locale.split("-")[0] === "tr" ? "tr" : "en";

  var translations = {
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.flipwordy": "FlipWordy",
      "nav.focusling": "Focusling",
      "footer.privacy": "Gizlilik",
      "footer.terms": "Koşullar",
      "footer.support": "Destek",
      "hero.eyebrow": "Pomodoro Odak Sayacı",
      "hero.title": "Küçük bir dostla<br>sakin bir odak sayacı.",
      "hero.lead": "Focusling, ling adında bir yol arkadaşıyla gelen bir pomodoro sayacı. Bitirdiğin her odak onu büyütür; yumurtadan bilgeliğe. Hesap yok, reklam yok, takip yok: geçmişin cihazında kalır.",
      "hero.support": "Destek Al",
      "hero.privacy": "Gizlilik Politikası",
      "hero.terms": "Kullanım Koşulları",
      "feature.timer.title": "Güvenebileceğin bir sayaç",
      "feature.timer.body": "Kendi sürelerinle odak ve mola döngüleri. Ekranı kilitlemek ya da telefona cevap vermek oturumu asla bozmaz.",
      "feature.ling.title": "Ling'in büyür",
      "feature.ling.body": "Biten oturumlar ling'ini büyütür ve dolabı için tohum kazandırır. Ruh hali son haftanı yansıtır.",
      "feature.private.title": "Gizlilik önce gelir",
      "feature.private.body": "Hesap yok, reklam yok, analitik yok. Oturumların, görevlerin ve ayarların cihazından hiç çıkmaz.",
      "offers.title": "Focusling neler sunar",
      "offers.item1": "Odak, kısa mola ve uzun mola döngüleri; gerçek saate dayandığı için uygulama kapansa bile süre doğru kalır.",
      "offers.item2": "Pomodoro sayısıyla tahmin edilen görevler; biten oturumlar göreve sayılır.",
      "offers.item3": "Kilit ekranında canlı geri sayım, ana ekran widget'ları, Hızlı Ayarlar kutucuğu ve Denetim Merkezi kontrolü.",
      "offers.item4": "İsteğe bağlı sıkı mod: başka bir uygulamaya geçip kısa sürede dönmezsen odak biter.",
      "offers.item5": "Bugünkü dakikalar, seri gün, toplam saat ve 7 günlük grafik.",
      "offers.item6": "Uygulama engelleme, Pro dolap eşyaları ve çift tohum açan isteğe bağlı Focusling Pro (aylık ya da ücretsiz denemeli yıllık).",
      "legal.title": "Yasal",

      "privacy.intro": "Focusling, kişisel verilerinizi toplamadan çalışacak şekilde tasarlandı. Bu Gizlilik Politikası, cihazınızda nelerin kaldığını, uygulamanın neleri sakladığını ve hangi platform hizmetlerinin devreye girdiğini açıklar.",
      "privacy.section1": "1. Biz kimiz",
      "privacy.who": "Focusling, Merve Pekyürek tarafından geliştirilen bir pomodoro odak sayacıdır.",
      "privacy.contact": "Bu Gizlilik Politikası hakkında sorularınız için: <a href=\"mailto:focuslingapp@gmail.com\">focuslingapp@gmail.com</a>.",
      "privacy.section2": "2. Topladığımız veriler",
      "privacy.none": "Hiçbir kişisel veri toplamıyoruz. Focusling'in hesabı, reklamı, analitik ya da çökme raporlama hizmeti yoktur. Uygulamayı nasıl kullandığınızı göremeyiz. Cihazınızdan bir şey yalnızca arkadaşlarınızla odaklandığınızda (6. bölüm) çıkar; o da yalnızca odanın ihtiyacı olan kadar.",
      "privacy.section3": "3. Cihazınızda saklanan veriler",
      "privacy.localIntro": "Focusling çalışmak için aşağıdakileri yalnızca cihazınızda saklar:",
      "privacy.local1": "Odak oturumlarınız (başlangıç zamanı, süresi, bitip bitmediği ve arkadaşlarla olup olmadığı); istatistikleriniz ve ling'inizin büyümesi için kullanılır.",
      "privacy.local2": "Görevleriniz ve pomodoro tahminleri.",
      "privacy.local3": "Sayaç süreleri, sıkı mod ve uygulama engelleme gibi ayarlarınız.",
      "privacy.local4": "Ling'inizin dolabı: tohumla aldığınız ve giydirdiğiniz eşyalar.",
      "privacy.local5": "Focusling Pro'nun açık olup olmadığı; uygulama açılır açılmaz bilinsin diye.",
      "privacy.localBody": "Bu veriler uygulamayı sildiğinizde silinir. Cihaz ayarlarınıza bağlı olarak cihazınızın kendi yedeklerine (iCloud veya Google) dahil olabilir.",
      "privacy.section4": "4. İzinler",
      "privacy.perm1": "Bildirimler: canlı geri sayımı göstermek ve oturum bitince haber vermek için.",
      "privacy.perm2": "Tam zamanlı alarmlar (Android): oturum sonu uyarısının zamanında gelmesi için.",
      "privacy.perm3": "Uygulama engelleme (isteğe bağlı, Pro): iPhone'da Ekran Süresi, Android'de kullanım erişimi ve \"diğer uygulamaların üzerinde gösterme\". Yalnızca cihazınızda, odaklanırken seçtiğiniz uygulamaları kapalı tutmak için kullanılır. Seçtiğiniz uygulamaların listesi hiçbir yere gönderilmez.",
      "privacy.perm4": "Widget'lar ve Live Activity, sayacın durumunu yalnızca Focusling'in kendi widget'larıyla paylaşılan bir depolama alanından okur.",
      "privacy.sectionHealth": "5. Apple Sağlık ve Health Connect",
      "privacy.health1": "Ayarlar'da \"Apple Sağlık'a kaydet\" ya da \"Health Connect'e kaydet\"i açarsanız Focusling, tamamladığınız her odak oturumunu bir farkındalık oturumu (başlangıç ve bitiş saati) olarak iPhone'da Apple Sağlık'a, Android'de Health Connect'e yazar. Varsayılan olarak kapalıdır ve önce izninizi ister.",
      "privacy.health2": "Focusling yalnızca farkındalık dakikası yazar. Hiçbir sağlık ya da fitness verisini okumaz.",
      "privacy.health3": "Bu veri Focusling'den cihazınızdaki sağlık uygulamasına gider; bize ya da başka birine asla gönderilmez. Reklam için kullanılmaz, satılmaz ve paylaşılmaz.",
      "privacy.health4": "Focusling'in Health Connect bilgilerini kullanımı, Sınırlı Kullanım şartları dahil Health Connect İzinleri politikasına uyar. HealthKit verileri Apple'ın HealthKit yönergelerine uygun şekilde işlenir.",
      "privacy.health5": "Bunu Focusling Ayarları'ndan kapatabilir, izni Sağlık uygulamasından (Paylaşım → Uygulamalar) ya da Health Connect'ten geri alabilir ve kaydedilen dakikaları orada silebilirsiniz.",
      "privacy.sectionCoFocus": "6. Arkadaşla odaklan",
      "privacy.cofocus1": "\"Arkadaşla odaklan\"da (Focusling Pro'nun parçası) bir oda açar ya da bir odaya katılırsanız uygulama, Cloudflare üzerinde çalışan oda sunucumuza bağlanır. Sunucu yalnızca odanın ihtiyacı olanı alır:",
      "privacy.cofocus2": "Oda kodu ve uygulamanın her oda için yeniden ürettiği rastgele bir üye kimliği. Sizi ya da cihazınızı tanımlamaz.",
      "privacy.cofocus3": "Ling'inizin görünümü (büyüme evresi, rengi ve aksesuarı), odak süresi, turun ne zaman başladığı ve birinin ne zaman bıraktığı.",
      "privacy.cofocus4": "Apple ya da Google'dan bir push bildirim token'ı; oda size bir arkadaşın katıldığını, turun başladığını, birinin bıraktığını ya da turun bittiğini haber verebilsin diye.",
      "privacy.cofocus5": "İsim, hesap ya da mesaj yoktur. Odadaki diğerleri yalnızca lingleri ve durumlarını görür, push token'ınızı asla görmez. Bir oda ve içindeki her şey, push token'lar dahil, son hareketten en geç 2 saat sonra silinir.",
      "privacy.cofocus6": "Bağlantıyı yürütmek için Cloudflare IP adresinizi işler; bildirimleri Apple (Apple Push Notification service) ve Google (Firebase Cloud Messaging) kendi gizlilik politikalarına göre iletir. Android'de Firebase Cloud Messaging yalnızca bir oda kullandığınızda başlar ve Firebase Analytics kapalıdır. Hiçbir şey reklam için kullanılmaz, satılmaz ya da paylaşılmaz.",
      "privacy.section5": "7. Satın alımlar",
      "privacy.purchases1": "Focusling Pro, App Store ve Google Play üzerinden satılır. Ödeme, faturalama ve satın alma geçmişiniz tamamen Apple veya Google tarafından kendi gizlilik politikalarına göre işlenir; ödeme bilgileriniz bize hiç ulaşmaz.",
      "privacy.purchases2": "Uygulama, Pro'nun açık olup olmadığını cihazınızda mağazaya sorarak kontrol eder. Google Play'in faturalama hizmetleri, Google'ın gizlilik politikasında açıklandığı gibi satın alma ve cihaz bilgilerini işleyebilir.",
      "privacy.section6": "8. Çocuklar",
      "privacy.children": "Focusling, çocuklar dahil kimseden kişisel veri toplamaz. Uygulama içi satın alımlar App Store ve Google Play'in ebeveyn denetimlerine tabidir.",
      "privacy.section7": "9. Seçenekleriniz",
      "privacy.choice1": "Bildirimleri, uygulama engellemeyi ve Apple Sağlık ya da Health Connect'e kaydetmeyi uygulamadan ya da cihaz ayarlarından kapatabilirsiniz.",
      "privacy.choice2": "Pro aboneliğinizi App Store veya Google Play'den yönetebilir ya da iptal edebilirsiniz.",
      "privacy.choice4": "Bir odadan istediğiniz zaman çıkabilirsiniz; Focusling bildirimlerini kapatmak oda uyarılarını da durdurur.",
      "privacy.choice3": "Uygulamayı silerek tüm Focusling verilerinizi silebilirsiniz.",
      "privacy.section8": "10. Bu politikadaki değişiklikler",
      "privacy.changes": "Focusling'in verileri işleme şekli değişirse bu sayfayı yeni bir yürürlük tarihiyle güncelleriz.",
      "privacy.effectiveLabel": "Yürürlük tarihi:",
      "privacy.effectiveDate": "23 Ekim 2026",

      "terms.intro": "Bu Kullanım Koşulları, Focusling mobil uygulamasını kullanımınızı düzenler.",
      "terms.section1": "1. Kabul",
      "terms.acceptance": "Focusling'i kullanarak bu Kullanım Koşulları'nı ve <a href=\"/focusling/privacy\">Gizlilik Politikası</a>'nı kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayın.",
      "terms.section2": "2. Lisans",
      "terms.license": "Focusling, bu Koşullar'a uygun olarak uygulamayı kişisel ve ticari olmayan amaçlarla kullanmanız için size sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans verir. Uygulamayı App Store'dan indirdiyseniz Apple'ın <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi</a> de geçerlidir.",
      "terms.section3": "3. Kabul edilebilir kullanım",
      "terms.use1": "Uygulamayı kötüye kullanmayın, tersine mühendislik yapmayın, işleyişini bozmayın ya da satın alma kontrollerini aşmaya çalışmayın.",
      "terms.use2": "Focusling'i yürürlükteki yasaları veya üçüncü kişilerin haklarını ihlal edecek şekilde kullanmayın.",
      "terms.section4": "4. Focusling Pro",
      "terms.pro1": "Focusling Pro isteğe bağlıdır. Aylık abonelik ya da uygun yeni aboneler için ücretsiz denemeli yıllık abonelik olarak sunulur. Fiyatlar satın almadan önce uygulamada ve mağazada gösterilir.",
      "terms.pro2": "Abonelikler, mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir. Yenileme ücreti dönem bitmeden önceki 24 saat içinde hesabınızdan alınır. Ücretsiz deneme sırasında iptal ederseniz ücret alınmaz. Aboneliklerinizi App Store veya Google Play hesap ayarlarınızdan yönetebilir ya da iptal edebilirsiniz.",
      "terms.pro3": "Ödemeler, yenilemeler, iptaller ve iadeler Apple veya Google tarafından yürütülür ve onların politikalarına tabidir. Önceki satın alımlarınızı paywall'daki \"Satın alımları geri yükle\" ile geri yükleyebilirsiniz.",
      "terms.section5": "5. Verileriniz",
      "terms.data": "Oturumlarınız, görevleriniz ve ayarlarınız yalnızca cihazınızda saklanır. Uygulamayı silerseniz ya da cihazınızı kaybederseniz bunları geri getiremeyiz.",
      "terms.section6": "6. Erişilebilirlik ve değişiklikler",
      "terms.availability": "Özellikler veya Pro teklifleri dahil Focusling'in bölümlerini istediğimiz zaman değiştirebilir, askıya alabilir ya da sonlandırabiliriz. Uygulamanın her zaman ve her cihazda kullanılabilir olacağını garanti etmeyiz.",
      "terms.section7": "7. Sorumluluk reddi",
      "terms.disclaimer": "Focusling bir verimlilik aracıdır, tıbbi tavsiye değildir. Yasaların izin verdiği en geniş ölçüde, hiçbir garanti verilmeksizin \"olduğu gibi\" ve \"mevcut olduğu şekilde\" sunulur.",
      "terms.section8": "8. Sorumluluğun sınırlandırılması",
      "terms.liability": "Yasaların izin verdiği en geniş ölçüde, Focusling ve geliştiricisi uygulamayı kullanımınızdan doğan dolaylı, arızi, özel, sonuç niteliğindeki veya cezai zararlardan sorumlu tutulamaz.",
      "terms.section9": "9. İletişim",
      "terms.contact": "Yasal veya destek soruları için: <a href=\"mailto:focuslingapp@gmail.com\">focuslingapp@gmail.com</a>.",
      "terms.developerLabel": "Geliştirici:",
      "terms.effectiveLabel": "Yürürlük tarihi:",
      "terms.effectiveDate": "22 Ekim 2026",

      "support.intro": "Sayaç, ling'iniz, Focusling Pro veya gizlilik hakkındaki sorularınız için aşağıdaki destek adresine yazın.",
      "support.contactTitle": "İletişim",
      "support.emailLabel": "E-posta:",
      "support.responseTarget": "Genellikle 3 ila 5 iş günü içinde yanıt veriyoruz.",
      "support.includeTitle": "Mesajınızda neler olmalı",
      "support.include1": "Uygulama sürümünüz (Ayarlar'ın en altında) ve cihaz modeliniz.",
      "support.include2": "Sorunun kısa bir açıklaması.",
      "support.include3": "Sorun görselse ya da bir satın almayla ilgiliyse ekran görüntüleri.",
      "support.commonTitle": "Yaygın konular",
      "support.common1": "<strong>Focusling Pro:</strong> Uygulamayı yeniden yüklediyseniz ya da telefon değiştirdiyseniz Pro ekranını açıp <strong>Satın alımları geri yükle</strong>'ye dokunun. Satın aldığınız Apple kimliği veya Google hesabıyla giriş yapmış olun. İptal ve iadeler App Store veya Google Play üzerinden yapılır.",
      "support.common2": "<strong>Geç gelen ya da gelmeyen uyarılar:</strong> Focusling için bildirimlere izin verildiğinden emin olun. Android'de ayrıca alarmlar ve hatırlatıcılar iznini verin ve uygulama için pil optimizasyonunu kapatın.",
      "support.common3": "<strong>Uygulama engelleme:</strong> iPhone'da istendiğinde Ekran Süresi erişimine izin verin. Android'de uygulamanın engelleme ayarlarından kullanım erişimi ve \"diğer uygulamaların üzerinde gösterme\" izinlerini verin.",
      "support.common4": "<strong>Widget'lar:</strong> Bir güncellemeden sonra widget'ı kaldırıp yeniden eklemek gerekebilir.",
      "support.common5": "<strong>Verileriniz:</strong> Focusling'de hesap olmadığı için oturumlarınız yalnızca bu cihazda durur. Uygulamayı silmek onları da siler.",
      "support.updatedLabel": "Son güncelleme:",
      "support.updatedDate": "22 Ekim 2026",
      "join.intro": "Aynı anda odaklanırken lingleriniz yan yana durur. Biri bırakırsa tur herkes için biter.",
      "join.codeLabel": "Oda kodu",
      "join.open": "Focusling'de aç",
      "join.howTitle": "Nasıl katılırım",
      "join.how1": "Focusling'i iPhone'una ya da Android telefonuna yükle.",
      "join.how2": "Davet bağlantısını yeniden aç ya da Odak'ta \"Arkadaşla odaklan\"a dokunup oda kodunu gir.",
      "join.how3": "Ev sahibi turu başlatana kadar odada bekle.",
      "join.pro": "Arkadaşla odaklanma Focusling Pro'nun bir parçası.",
      "join.more": "Focusling hakkında daha fazlası"
    }
  };

  function translate(key) {
    if (language === "en") return null;
    return translations[language][key] || null;
  }

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    var value = translate(element.getAttribute("data-i18n"));
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
    var value = translate(element.getAttribute("data-i18n-html"));
    if (value) element.innerHTML = value;
  });

  var pageTitle = language === "tr" ? body.dataset.pageTitleTr : body.dataset.pageTitle;
  document.querySelectorAll("[data-i18n-page-title]").forEach(function (element) {
    if (pageTitle) element.textContent = pageTitle;
  });

  document.querySelectorAll("[data-i18n-page-subtitle]").forEach(function (element) {
    var value = element.getAttribute(language === "tr" ? "data-i18n-page-subtitle-tr" : "data-i18n-page-subtitle");
    if (value) element.textContent = value;
  });

  var siteName = body.dataset.siteName || "";
  if (pageTitle && siteName) {
    document.title = pageTitle + " | " + siteName;
  }
})();
