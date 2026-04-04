(function () {
  var body = document.body;

  if (!body) return;

  var pageUrl = body.dataset.pageUrl || "";
  if (!pageUrl.startsWith("/flipwordy")) return;

  var locale = ((navigator.languages && navigator.languages[0]) || navigator.language || "en").toLowerCase();
  var language = locale.indexOf("tr") === 0 ? "tr" : "en";

  var translations = {
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.flipwordy": "FlipWordy",
      "footer.privacy": "Gizlilik",
      "footer.terms": "Koşullar",
      "footer.support": "Destek",
      "hero.eyebrow": "İngilizce Kelime Uygulaması",
      "hero.title": "Kelime bilginizi güçlendirin,<br>her gün bir adım daha.",
      "hero.lead": "FlipWordy, günlük kelime çalışmasını sade, odaklı ve sürdürülebilir hale getirir. İlerlemenizi takip edin, tekrar bakmak istediğiniz kelimeleri kaydedin ve hatırlatmalar ile ana ekran araç takımlarıyla düzenli bir alışkanlık oluşturun.",
      "hero.support": "Destek Al",
      "hero.privacy": "Gizlilik Politikası",
      "hero.terms": "Kullanım Koşulları",
      "feature.learning.title": "Günlük öğrenme",
      "feature.learning.body": "Günlük hedef belirleyin ve hafif ama düzenli bir rutinle İngilizce pratiğinizi istikrarlı tutun.",
      "feature.saved.title": "Kayıtlı kelimeler",
      "feature.saved.body": "Önemli kelimeleri elinizin altında tutun ve hızlı tekrar için istediğiniz zaman geri dönün.",
      "feature.reminders.title": "Hatırlatmalar ve widget'lar",
      "feature.reminders.body": "Günlük bildirimler ve ana ekran widget'larıyla düzenli çalışma alışkanlığı kurun.",
      "offers.title": "FlipWordy neler sunar",
      "offers.item1": "İlerleme takibiyle günlük İngilizce kelime öğrenimi.",
      "offers.item2": "Sizin için önemli olan kelimelere yeniden dönmeyi kolaylaştıran kayıtlı kelimeler.",
      "offers.item3": "Düzenli çalışma alışkanlığını destekleyen hatırlatma bildirimleri.",
      "offers.item4": "Gün içinde kelimelere hızlı erişim sağlayan ana ekran widget'ları.",
      "offers.item5": "Dil ve zorlukla ilgili ayarlar gibi özelleştirilebilir tercihler.",
      "offers.item6": "Reklamları kaldırmak için isteğe bağlı abonelik.",
      "legal.title": "Yasal",
      "legal.deleteAccount": "Hesabı Sil",
      "support.intro": "Hesap, abonelik, gizlilik veya teknik sorularınız için aşağıdaki destek adresiyle iletişime geçin.",
      "support.contactTitle": "İletişim",
      "support.emailLabel": "E-posta:",
      "support.responseTarget": "Önerilen yanıt süresi: 3 ila 5 iş günü içinde.",
      "support.includeTitle": "Mesajınızda neler olmalı",
      "support.include1": "Uygulama sürümünüz ve cihaz modeliniz.",
      "support.include2": "Gerekliyse giriş yönteminiz: Google, Apple veya misafir.",
      "support.include3": "Sorunun kısa bir açıklaması.",
      "support.include4": "Sorun görselse ya da ödeme/hesap akışıyla ilgiliyse ekran görüntüleri.",
      "support.commonTitle": "Yaygın konular",
      "support.common1": "<strong>Abonelik yönetimi:</strong> Geri yükleme ve iptal soruları Google Play veya App Store üzerinden yönetilir.",
      "support.common2": "<strong>Bildirimler:</strong> Bildirim ve hatırlatma sorunları cihazın sistem bildirim ayarlarına bağlı olabilir.",
      "support.common3": "<strong>Widget sorunları:</strong> Uygulama güncellemesinden sonra widget'ı kaldırıp yeniden eklemek gerekebilir.",
      "support.common4": "<strong>Hesap silme:</strong> Uygulama içindeki Profil ekranından başlatılabilir. Ayrıntılar için <a href=\"/flipwordy/delete-account\">Hesabı Sil</a> sayfasına bakın.",
      "support.updatedLabel": "Son güncelleme:",
      "privacy.intro": "Bu Gizlilik Politikası, FlipWordy'nin hangi bilgileri topladığını, bunları nasıl kullandığını ve uygulamayı kullanırken hangi seçeneklere sahip olduğunuzu açıklar.",
      "privacy.section1": "1. Biz kimiz",
      "privacy.who": "FlipWordy, Merve Pekyürek tarafından geliştirilen bir İngilizce kelime öğrenme uygulamasıdır.",
      "privacy.contact": "Bu Gizlilik Politikası hakkında sorularınız varsa şu adresten iletişime geçin: <a href=\"mailto:flipwordy@gmail.com\">flipwordy@gmail.com</a>.",
      "privacy.section2": "2. Topladığımız bilgiler",
      "privacy.collectIntro": "FlipWordy'yi nasıl kullandığınıza bağlı olarak aşağıdaki bilgi kategorilerini toplayabilir veya işleyebiliriz:",
      "privacy.collect1": "Google veya Apple ile giriş yaptığınızda e-posta adresi, görünen ad ve giriş sağlayıcısı gibi hesap bilgileri.",
      "privacy.collect2": "Bağlı bir hesap oluşturmadan devam ettiğinizde misafir oturum verileri.",
      "privacy.collect3": "Günlük ilerleme, kayıtlı kelimeler, kelime etkileşim geçmişi, seçilen zorluk, dil tercihleri ve günlük hedef ayarları gibi öğrenme verileri.",
      "privacy.collect4": "Bildirim tercihleri, hatırlatma saati, hafta sonu hatırlatma ayarları ve widget görünüm tercihleri gibi uygulama tercihleri.",
      "privacy.collect5": "Aylık veya yıllık abonelikte reklamların kaldırılıp kaldırılmayacağını belirlemek için gereken satın alma ve abonelik durumu bilgileri.",
      "privacy.collect6": "Google AdMob ve Google User Messaging Platform tarafından kullanılan, reklam isteği ve onay durumu verilerini içeren reklam ve onay bilgileri.",
      "privacy.collect7": "Reklam sunmak veya kötüye kullanımı önlemek için üçüncü taraf hizmetler tarafından otomatik olarak toplanabilecek cihaz tanımlayıcıları, uygulama örneği verileri, sınırlı tanılama bilgileri ve etkileşim sinyalleri gibi temel teknik bilgiler.",
      "privacy.section3": "3. Bilgileri nasıl kullanıyoruz",
      "privacy.use1": "Giriş yapmanızı ve oturumunuzu aktif tutmanızı sağlamak için.",
      "privacy.use2": "Kelime öğrenimini kişiselleştirmek ve ilerlemenizi/kayıtlı içeriklerinizi hatırlamak için.",
      "privacy.use3": "Etkinleştirdiğinizde günlük hatırlatma bildirimleri göndermek için.",
      "privacy.use4": "Ana ekran widget'larını ve uygulama içi hatırlatma akışlarını desteklemek için.",
      "privacy.use5": "Reklam göstermek, reklam sıklığını sınırlandırmak, onay durumunu kaydetmek ve reklam kaldırma aboneliğinizi uygulamak için.",
      "privacy.use6": "Uygulama güvenliğini korumak, sorunları teşhis etmek ve kararlılığı iyileştirmek için.",
      "privacy.section4": "4. Üçüncü taraf hizmetler",
      "privacy.thirdPartyIntro": "FlipWordy, verileri kendi koşul ve gizlilik politikalarına göre işleyen üçüncü taraf hizmetlerden yararlanabilir. Bunlar arasında şunlar bulunur:",
      "privacy.thirdParty4": "Onay toplama için Google User Messaging Platform",
      "privacy.thirdPartyBody": "Bu hizmetler; kimlik doğrulama, reklamcılık, faturalandırma, kötüye kullanımı önleme ve ilgili platform özelliklerini sağlamak için gerekli olduğu ölçüde cihaz, ağ, onay, satın alma ve kullanım bilgilerini toplayabilir.",
      "privacy.section5": "5. Reklamlar ve abonelikler",
      "privacy.ads1": "FlipWordy banner, geçiş ve ödüllü reklamlar gösterebilir. Bölgenizde mevcutsa, belirli kişiselleştirilmiş reklam türlerini kabul edip etmediğinizi soran bir onay formu da görebilirsiniz.",
      "privacy.ads2": "\"Reklamları Kaldır\" aboneliği satın alırsanız FlipWordy, abonelik aktif olduğu sürece reklamları kapatmak için gerekli abonelik durumunu saklar.",
      "privacy.section6": "6. Bildirimler ve widget'lar",
      "privacy.notifications": "Bildirimleri etkinleştirirseniz FlipWordy, seçtiğiniz hatırlatma ayarlarını kullanarak bildirim planlayabilir. Bir FlipWordy widget'ı eklerseniz uygulama, ana ekranda kelimeleri göstermek için yerel widget yapılandırmasını saklayabilir ve widget içeriğini yenileyebilir.",
      "privacy.section7": "7. Veri saklama",
      "privacy.retention": "Bilgileri yalnızca uygulamayı sunmak ve yasal ya da operasyonel gerekliliklere uymak için gerektiği sürece saklarız. Yerel olarak saklanan öğrenme verileri ve tercihler, uygulama verilerini kaldırana, çıkış yapana veya uygulama içinden hesabınızı silene kadar cihazınızda kalabilir.",
      "privacy.section8": "8. Tercihleriniz",
      "privacy.choice1": "FlipWordy'nin bazı bölümlerini misafir olarak kullanabilirsiniz.",
      "privacy.choice2": "Bildirimleri uygulama içinden veya cihaz ayarlarından kapatabilirsiniz.",
      "privacy.choice3": "Abonelikleri Google Play veya App Store üzerinden yönetebilir ya da iptal edebilirsiniz.",
      "privacy.choice4": "Uygulama içi hesabınızı ve ilişkili yerel kayıtları uygulamadaki Profil alanından silebilirsiniz.",
      "privacy.section9": "9. Çocuklar",
      "privacy.children": "FlipWordy, kişisel veri işlemeye tek başına onay verebilecek yasal yaşın altındaki çocuklara yönelik değildir. Bir çocuğun uygunsuz şekilde kişisel veri sağladığını düşünüyorsanız durumu incelememiz için bizimle iletişime geçin.",
      "privacy.section10": "10. Bu politikadaki değişiklikler",
      "privacy.changes": "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. En güncel sürüm her zaman bu sayfada güncellenmiş yürürlük tarihiyle yayımlanacaktır.",
      "privacy.effectiveLabel": "Yürürlük tarihi:",
      "terms.intro": "Bu Kullanım Koşulları, FlipWordy mobil uygulamasına erişiminizi ve kullanımınızı düzenler.",
      "terms.section1": "1. Kabul",
      "terms.acceptance": "FlipWordy'yi kullanarak bu Kullanım Koşullarını ve <a href=\"/flipwordy/privacy\">Gizlilik Politikasını</a> kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayın.",
      "terms.section2": "2. Uygunluk ve hesaplar",
      "terms.accounts": "FlipWordy'yi desteklenen bir sağlayıcıyla giriş yaparak veya misafir olarak devam ederek kullanabilirsiniz. Sağlamayı seçtiğiniz bilgilerin doğruluğundan ve cihazınız ile hesap erişiminizi güvenli tutmaktan siz sorumlusunuz.",
      "terms.section3": "3. Lisans",
      "terms.license": "FlipWordy size, bu Koşullara uygun olarak uygulamayı kişisel ve ticari olmayan amaçlarla kullanmanız için sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans verir.",
      "terms.section4": "4. Kabul edilebilir kullanım",
      "terms.use1": "Uygulamayı veya ilişkili hizmetleri kötüye kullanmayın, tersine mühendislik yapmayın, kesintiye uğratmayın ya da yetkisiz erişim girişiminde bulunmayın.",
      "terms.use2": "FlipWordy'yi yürürlükteki yasalara veya üçüncü taraf haklarına aykırı şekilde kullanmayın.",
      "terms.use3": "Reklam, faturalandırma, kimlik doğrulama veya güvenlik özelliklerine müdahale etmeyin.",
      "terms.section5": "5. Reklamlar ve ücretli özellikler",
      "terms.ads1": "FlipWordy banner, geçiş ve ödüllü reklamlar gösterebilir. Uygulama ayrıca reklamları kaldıran aylık veya yıllık abonelikler sunabilir.",
      "terms.ads2": "Tüm satın alma, yenileme, iptal, iade ve faturalandırma koşulları Google Play veya App Store tarafından yönetilir ve kendi politikalarına tabidir.",
      "terms.section6": "6. Erişilebilirlik ve değişiklikler",
      "terms.availability": "FlipWordy'nin özellikleri, reklamları, öğrenme içeriği veya abonelik teklifleri dahil olmak üzere bazı kısımlarını istediğimiz zaman değiştirebilir, askıya alabilir veya sonlandırabiliriz. Uygulamanın her zaman ya da her cihazda erişilebilir olacağını garanti etmiyoruz.",
      "terms.section7": "7. Hesap silme ve sonlandırma",
      "terms.deletion": "Mevcut sürümünüzde bu seçenek varsa hesabınızı uygulama içinden silebilirsiniz. Uygulamayı korumak, yasal yükümlülüklere uymak veya kötüye kullanımı ele almak için erişimi askıya alma ya da sonlandırma hakkımız da vardır.",
      "terms.section8": "8. Sorumluluk reddi",
      "terms.disclaimer": "FlipWordy, yürürlükteki yasanın izin verdiği en geniş ölçüde, herhangi bir garanti olmaksızın \"olduğu gibi\" ve \"mevcut olduğu şekilde\" sunulur.",
      "terms.section9": "9. Sorumluluğun sınırlandırılması",
      "terms.liability": "Yürürlükteki yasanın izin verdiği en geniş ölçüde FlipWordy ve geliştiricisi, uygulamayı kullanımınızdan doğan dolaylı, arızi, özel, sonuç olarak ortaya çıkan veya cezai zararlardan sorumlu olmayacaktır.",
      "terms.section10": "10. İletişim",
      "terms.contact": "Yasal veya destek soruları için şu adresten iletişime geçin: <a href=\"mailto:flipwordy@gmail.com\">flipwordy@gmail.com</a>.",
      "terms.developerLabel": "Geliştirici:",
      "terms.developerName": "Merve Pekyürek",
      "terms.effectiveLabel": "Yürürlük tarihi:",
      "delete.intro": "FlipWordy hesabınızı ve ilişkili uygulama içi kayıtları silmek istiyorsanız bunu doğrudan uygulama içinden yapabilirsiniz.",
      "delete.section1": "Uygulamadan silme",
      "delete.step1": "FlipWordy'yi açın.",
      "delete.step2": "<strong>Profil</strong> ekranına gidin.",
      "delete.step3": "<strong>Hesabı Sil</strong> seçeneğini seçin.",
      "delete.step4": "Silme isteğini onaylayın.",
      "delete.after": "Onaydan sonra FlipWordy; kayıtlı kelime durumu, günlük ilerleme, kullanıcı tercihleri ve uygulama tarafından saklanan yerel profil verileri dahil olmak üzere mevcut uygulama hesabınıza bağlı yerel kayıtları siler.",
      "delete.section2": "Önemli notlar",
      "delete.note1": "Google Play veya App Store üzerinden abone olduysanız abonelik iptali yine ilgili mağaza üzerinden yönetilmelidir.",
      "delete.note2": "FlipWordy hesabını silmek etkin bir aboneliği otomatik olarak iptal etmez.",
      "delete.note3": "Uygulamayı misafir olarak kullanıyorsanız hesabı silmek cihazınızdaki bu misafir profile bağlı yerel uygulama kayıtlarını kaldırır.",
      "delete.section3": "Yardıma mı ihtiyacınız var?",
      "delete.help": "Uygulamaya erişemiyorsanız ve silme desteğine ihtiyaç duyuyorsanız şu adresten iletişime geçin: <a href=\"mailto:flipwordy@gmail.com\">flipwordy@gmail.com</a>.",
      "delete.updatedLabel": "Son güncelleme:"
    }
  };

  function translate(key) {
    if (language === "tr" && translations.tr[key]) return translations.tr[key];
    return null;
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

  document.querySelectorAll("[data-i18n-page-title]").forEach(function (element) {
    var value = language === "tr" ? body.dataset.pageTitleTr : body.dataset.pageTitle;
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-page-subtitle]").forEach(function (element) {
    var value = language === "tr" ? element.getAttribute("data-i18n-page-subtitle-tr") : element.getAttribute("data-i18n-page-subtitle");
    if (value) element.textContent = value;
  });

  var pageTitle = language === "tr" ? body.dataset.pageTitleTr : body.dataset.pageTitle;
  var siteName = body.dataset.siteName || "";
  if (pageTitle && siteName) {
    document.title = pageTitle + " | " + siteName;
  }
})();
