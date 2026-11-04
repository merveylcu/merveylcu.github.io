(function () {
  var body = document.body;

  if (!body) return;

  var pageUrl = body.dataset.pageUrl || "";
  if (!pageUrl.startsWith("/dracora")) return;

  // The app itself is English only; only this website is translated into Turkish.
  var locale = ((navigator.languages && navigator.languages[0]) || navigator.language || "en").toLowerCase();
  var language = locale.split("-")[0] === "tr" ? "tr" : "en";

  var translations = {
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.flipwordy": "FlipWordy",
      "nav.focusling": "Focusling",
      "nav.dracora": "Dracora",
      "footer.privacy": "Gizlilik",
      "footer.support": "Destek",
      "hero.eyebrow": "Ejderha Mantık Bulmacası",
      "hero.title": "Sakin ejderha mantık bulmacaları,<br>her seferinde bir alev.",
      "hero.lead": "Dracora, nazik ve özgün çizimli ejderhalarla anlatılan, sakin bir Star Battle tarzı mantık bulmacasıdır. Her satır, sütun ve renkli bölgede tam olması gereken sayıda alev olacak, hiçbir alev bir diğerine değmeyecek şekilde alevleri yerleştirin. Hesap yok, reklam yok, takip yok: ilerlemeniz cihazınızda kalır.",
      "hero.support": "Destek Al",
      "hero.privacy": "Gizlilik Politikası",
      "feature.rules.title": "Akılda tutulacak tek kural",
      "feature.rules.body": "Alevler köşeler dahil asla birbirine değmemeli. Her bulmacanın tam olarak tek bir çözümü vardır ve ona hep mantık yürüterek ulaşabilirsiniz. Tahmin yok, şans yok.",
      "feature.hints.title": "Öğreten ipuçları",
      "feature.hints.body": "İpucu isteyin; Dracora bir sonraki adımın ardındaki fikri sade bir dille anlatır. Böylece yalnızca cevabı görmek yerine tekniği öğrenirsiniz.",
      "feature.private.title": "Tasarımdan gizlilik",
      "feature.private.body": "Reklam yok, analitik yok, hesap yok ve çevrimdışı çalışır. İlerlemeniz cihazınızda kalır.",
      "offers.title": "Dracora neler sunar",
      "offers.item1": "Her biri kendi ejderhasına ve yeni bir kıvrıma sahip altı bölüm: hücreleri kapatan kayalar, at gibi sıçrayan kıvılcımlar, alevleri tahtanın kenarlarında dolaştıran rüzgâr ve her satır, sütun ve bölgede iki alev isteyen ikiz ejderhalar.",
      "offers.item2": "Her seviye, ne kadar temiz çözdüğünüze göre bir ila üç pul kazandırır.",
      "offers.item3": "Gerektirdikleri tekniklere göre derecelendirilen bulmacalar; zorluk hissedebileceğiniz şekilde artar.",
      "offers.item4": "Her gün yeni bir bulmaca. Çözerek yuva serinizi sıcak tutun; ücretsiz bir yuva battaniyesi serinizi ara sıra koruyabilir.",
      "offers.item5": "Yuvanız: oynadıkça yumurta toplayın ve yuvanızı kendi hızınızda dost canlısı, sakin ejderhalarla doldurun.",
      "offers.item6": "Açık ve koyu görünüm, hafif titreşimler ve hareketi azaltma seçeneği.",
      "legal.title": "Yasal",

      "privacy.updatedLabel": "Son güncelleme:",
      "privacy.updatedDate": "4 Kasım 2026",
      "privacy.intro": "Dracora (\"uygulama\") bir mantık bulmacası oyunudur. Bu politika, bilgilerinize ne olduğunu açıklar.",
      "privacy.summaryTitle": "Özet",
      "privacy.summary": "Dracora hiçbir kişisel bilgiyi toplamaz, sunucularımızda saklamaz, paylaşmaz ya da satmaz. Reklam, analitik veya takip içermez; hesap ya da internet bağlantısı gerektirmez.",
      "privacy.deviceTitle": "Cihazınızda kalanlar",
      "privacy.device": "Kaldığınız yerden devam edebilmeniz için uygulama aşağıdakileri yalnızca sizin cihazınızda saklar: seviye ilerlemeniz ve pullarınız, ayarlarınız, başarılarınız, günlük bulmaca sonuçlarınız, yuvanızdaki ejderhalar ve bitmemiş tahtalarınız. Bu veriler uygulama tarafından asla bize ya da başka birine gönderilmez.",
      "privacy.backupsTitle": "Yedekler",
      "privacy.backups": "İşletim sisteminiz, uygulamanın kayıtlı verilerini kendi hesabınız ve ayarlarınız kapsamında kendi cihaz yedeğine ya da cihaz aktarımına (örneğin Android yedeği veya iCloud yedeği) dahil edebilir. Bu yedekleri biz almayız ve bunlara erişemeyiz.",
      "privacy.sharingTitle": "Paylaşım",
      "privacy.sharing": "Bir sonucu paylaşmayı seçerseniz uygulama bir görseli ya da metni sisteminizin paylaşım sayfasına iletir. Paylaşıp paylaşmayacağınıza ve nereye gideceğine siz karar verirsiniz. Uygulama kendiliğinden hiçbir şey göndermez.",
      "privacy.permissionsTitle": "İzinler",
      "privacy.permissions": "Uygulama konumunuza, kişilerinize, kameranıza, mikrofonunuza, fotoğraflarınıza veya dosyalarınıza erişim istemez; Android'de internet izni de yoktur.",
      "privacy.childrenTitle": "Çocuklar",
      "privacy.children": "Uygulama, çocuklar dahil hiç kimseden kişisel bilgi toplamaz.",
      "privacy.deletingTitle": "Verilerinizi silme",
      "privacy.deleting": "İlerlemeyi, günlük sonuçları, yuvayı, rozetleri ve bitmemiş tahtaları temizlemek için uygulamada \"Settings\" bölümünü açıp \"Reset progress\" seçeneğini seçin ya da tüm verilerini cihazınızdan kaldırmak için uygulamayı silin.",
      "privacy.changesTitle": "Değişiklikler",
      "privacy.changes": "Uygulama bu politikayı etkileyecek şekilde değişirse, o sürüm yayımlanmadan önce bu sayfayı ve yukarıdaki tarihi güncelleriz.",
      "privacy.contactTitle": "İletişim",
      "privacy.contact": "Bu politika hakkındaki sorularınız için: <a href=\"mailto:merveylcu@gmail.com\">merveylcu@gmail.com</a>",

      "support.intro": "Dracora veya gizlilik politikası hakkındaki sorularınız için aşağıdaki destek adresine yazın.",
      "support.contactTitle": "İletişim",
      "support.emailLabel": "E-posta:",
      "support.includeTitle": "Mesajınızda neler olmalı",
      "support.include1": "Cihaz modeliniz ve işletim sistemi sürümü.",
      "support.include2": "Sorunun kısa bir açıklaması.",
      "support.include3": "Sorun görselse ekran görüntüleri.",
      "support.commonTitle": "Yaygın konular",
      "support.common1": "<strong>Verileriniz:</strong> Dracora'da hesap olmadığı için ilerlemeniz yalnızca cihazınızda durur. Temizlemek için uygulamada \"Settings\" bölümünü açıp \"Reset progress\" seçeneğini seçin ya da tüm verilerini kaldırmak için uygulamayı silin.",
      "support.common2": "<strong>Yedekler:</strong> İşletim sisteminiz, uygulamanın kayıtlı verilerini kendi hesabınız ve ayarlarınız kapsamında kendi yedeğine ya da cihaz aktarımına (örneğin Android yedeği veya iCloud yedeği) dahil edebilir.",
      "support.common3": "<strong>Çevrimdışı:</strong> Uygulama internet bağlantısı gerektirmez.",
      "support.common4": "<strong>Paylaşım:</strong> Bir sonucu paylaştığınızda uygulama bir görseli ya da metni sisteminizin paylaşım sayfasına iletir. Nereye gideceğine siz karar verirsiniz.",
      "support.updatedLabel": "Son güncelleme:",
      "support.updatedDate": "4 Kasım 2026"
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
