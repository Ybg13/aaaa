// js/makaleler.js

const makaleVerisi = [
    // --- İSLAMİYET ÖNCESİ TÜRK TARİHİ ---
    {
        id: "kursad-ihtilali",
        kategori: "islam-oncesi",
        baslik: "Kürşad ve 40 Çerisi: Bir Bağımsızlık Destanı",
        ozet: "Çin sarayına yapılan efsanevi baskın ve Türklerin bağımsızlık ateşi nasıl yeniden yandı?",
        icerik: "ca çarpıştılar. İmparatoru ele geçiremeseler de, Wei Nehri kıyısında son nefeslerine kadar dövüşerek öldüler. Bu olay, Türk boyları arasında bir kıvılcıma dönüştü ve yıllar sonra Kutluk Kağan'ın İkinci Göktürk Devleti'ni kurmasına ilham verdi.",
        tarih: "5 Şubat 2026"
    },
    {
        id: "mete-han-strateji",
        kategori: "islam-oncesi",
        baslik: "Mete Han: Islıklı Okun Sahibi",
        ozet: "Asya Hun İmparatorluğu'nun dahi stratejisti Mete Han ve askeri devrimleri.",
        icerik: "Mete Han (Motun), tarihte onlu askeri sistemi ilk kuran liderdir. Babası Teoman ile girdiği iktidar mücadelesinde disiplini her şeyin önüne koydu. Efsaneye göre, hedefi şaşırmayan 'ıslıklı oklar' icat etti. Askerlerine, ıslıklı okunu nereye atarsa oraya ok atmalarını emretti; bu disiplin sayesinde büyük bir güç birliği oluşturdu. Çin'i vergiye bağlayan ama asimile olmamak için içine girmeyen Mete Han, Türklerin 'Vatan toprağı kutsaldır, kimseye verilmez' düsturunu tarihe kazıyan ilk liderdir.",
        tarih: "4 Şubat 2026"
    },

    // --- OSMANLI TARİHİ ---
    {
        id: "istanbulun-fethi-teknoloji",
        kategori: "osmanli",
        baslik: "Fatih'in Mühendislik Dehası: Şahi Topları",
        ozet: "İstanbul'un surlarını yıkan devasa toplar ve fethin bilinmeyen teknik detayları.",
        icerik: "29 Mayıs 1453 sadece bir askeri zafer değil, bir teknoloji devrimiydi. Sultan II. Mehmed, o güne kadar imkansız görülen Bizans surlarını yıkmak için 'Şahi' adı verilen dev toplar döktürdü. Macar usta Urban ile birlikte tasarlanan bu toplar, kuşatma teknolojisini sonsuza dek değiştirdi. Gemilerin karadan yürütülmesi ise sadece fizik kurallarıyla değil, inanılmaz bir lojistik planlamayla açıklandı. 72 gemi, bir gecede yağlı kütükler üzerinde Kasımpaşa'dan Haliç'e indirildiğinde, Bizans savunması psikolojik olarak da çökmüştü.",
        tarih: "3 Şubat 2026"
    },
    {
        id: "yavuz-misir-seferi",
        kategori: "osmanli",
        baslik: "Yavuz Sultan Selim ve Çölü Geçen Ordu",
        ozet: "Sina Çölü'nü 13 günde geçerek Mısır'ı fetheden iradenin hikayesi.",
        icerik: "Yavuz Sultan Selim, Doğu seferine çıktığında önünde aşılması imkansız görülen Sina Çölü vardı. Napolyon ve ordularının yüzyıllar sonra perişan olduğu bu çölü, Yavuz'un ordusu 13 günde geçti. Rivayet olunur ki, Yavuz atından inmiş yürüyordur; paşalar 'Hünkarım neden indiniz?' deyince, 'Önümüzde Peygamber Efendimiz (sav) yürürken biz nasıl ata binelim?' demiştir. Ridaniye Zaferi ile Memlük Devleti son bulmuş, Halifelik Osmanlı'ya geçmiş ve Kutsal Emanetler İstanbul'a getirilmiştir.",
        tarih: "2 Şubat 2026"
    },

    // --- ANTİK ÇAĞ ---
    {
        id: "roma-hukuku-miras",
        kategori: "antik-cag",
        baslik: "Roma Hukuku: Modern Dünyanın Temelleri",
        ozet: "Antik Roma'nın günümüz hukuk sistemine bıraktığı silinmez izler.",
        icerik: "Bugün kullandığımız çoğu hukuk kuralının kökeni Antik Roma'daki 'On İki Levha Kanunları'na dayanır. 'Masumiyet Karinesi' (Suçu ispatlanana kadar herkes masumdur) ve mülkiyet hakları Roma forumlarında tartışılıp karara bağlanmıştı. Roma sadece lejyonlarıyla değil, 'Pax Romana' adı verilen barış dönemi ve kurduğu adalet sistemiyle kıtaları yönetti. Latince hukuk terimleri bugün hala tıp ve hukuk fakültelerinde en temel dersler arasındaysa, bu Roma'nın kurumsallaşma başarısıdır.",
        tarih: "1 Şubat 2026"
    },
    {
        id: "antik-misir-tip",
        kategori: "antik-cag",
        baslik: "Antik Mısır'da Tıp: Ameliyattan Mumyaya",
        ozet: "Piramit ustalarının tıp bilgisi; bugün bile şaşırtan cerrahi müdahaleler.",
        icerik: "Antik Mısırlılar sadece piramit yapmakta değil, insan anatomisinde de ustaydı. Mumyalama işlemleri sayesinde iç organları ve kan dolaşımını detaylıca inceleme fırsatı buldular. Edwin Smith Papirüsü'nde, beyin ameliyatlarından kırık çıkık tedavilerine kadar 48 farklı vakanın çözümü anlatılır. İlginçtir ki, Mısır'da dişçilikten göz doktorluğuna kadar uzmanlaşmış hekimler vardı ve ballı karışımları antibiyotik niyetine kullanarak enfeksiyonları önlüyorlardı.",
        tarih: "31 Ocak 2026"
    },

    // --- EKSTRA MAKALELER (SİTEYİ DOLDURMAK İÇİN) ---
    {
        id: "hun-gocu",
        kategori: "islam-oncesi",
        baslik: "Kavimler Göçü: Avrupa'yı Titreten Hareket",
        ozet: "Balamir önderliğinde Hunların batıya yürüyüşü ve Roma'nın ikiye bölünüşü.",
        icerik: "Hunların Orta Asya'dan batıya doğru başlattığı büyük hareketlilik, adeta bir domino taşı etkisi yarattı. Germen kavimlerinin Roma topraklarına sığınması, Avrupa'nın bugünkü etnik yapısının oluşmasını sağladı. Hunlar, askeri üstünlükleri ve süratli atlılarıyla Avrupa'nın kalbine kadar ulaştı. Bu göç dalgası, İlk Çağ'ı kapatıp Orta Çağ'ı başlatan en büyük siyasi olaylardan biri kabul edilir.",
        tarih: "30 Ocak 2026"
    }
];