/**
 * AGORA - FELSEFE SINIFI PORTFÖYÜ & DÜŞÜNCE ATÖLYESİ
 * JavaScript Application Logic (Revised with Virtual Teacher Board)
 */

// --- VIRTUAL TEACHERS HEURISTIC REVIEW GENERATOR (FALLBACK) ---
function generateVirtualTeacherReviewsStatic(category, content) {
    const text = (content || "").toLowerCase();
    
    // Evrimci Hoca Şablonları
    let evrim = "";
    // Dualist Hoca Şablonları
    let cemal = "";

    if (category === "Varlık Felsefesi") {
        if (text.includes("ruh") || text.includes("zihin") || text.includes("bilinç")) {
            evrim = "Öğrenci zihinsel süreçleri felsefi olarak ele alırken güzel bir sorgulama yapmış. Ancak ruh ve zihin dediğimiz kavramlar, insan beyninin milyonlarca yıllık elektrokimyasal evriminin bir çıktısıdır. Bilişsel yetilerin hayatta kalma ve çevreye uyum sağlama adaptasyonları olduğunu göz önünde bulundurursak, materyalist biyolojik temellere daha fazla atıf yapılabilirdi.";
            cemal = "Yazıda insan bilincinin ve iradesinin önemi son derece yerinde ve derinlemesine sorgulanmış. Kartezyen felsefeden bildiğimiz gibi, zihin ve beden (res cogitans ve res extensa) iki ayrı cevherdir. Bilinci sadece beynin fiziksel nöron hücrelerine indirgeyen materyalist sığlığa düşmeyip, insan ruhunun ve metafizik bilincin aşkınlığını koruyan bu felsefi duruşu çok kıymetli buldum.";
        } else {
            evrim = "Varlık sorunsalını ele alan derli toplu bir yazı. Ancak varlığın kökenini tartışırken doğayı, maddesel evreni ve organizmaların çevreleriyle olan fiziki etkileşimini de denkleme katmak gerekirdi. İnsanın fiziksel varoluşunu biyolojik gerçeklerden bağımsız ele almak felsefeyi havada bırakır.";
            cemal = "Varlığın özünü ve anlamını sorgulayan takdire şayan bir çalışma. Fiziksel dünyanın ötesindeki idealar evrenini ve bilincin varlık üzerindeki kurucu gücünü hissettiren bir üslup kullanılmış. Varlığı sadece kaba bir maddeden ibaret görmeyen, ruhsal/zihinsel derinliği olan bir perspektif.";
        }
    } else if (category === "Bilgi Felsefesi") {
        if (text.includes("deney") || text.includes("gözlem") || text.includes("akıl") || text.includes("rasyonel")) {
            evrim = "Bilginin kaynağı üzerine odaklanan başarılı bir çalışma. Unutulmamalıdır ki, insanın bilgi edinme mekanizmaları (duyu organları, sinir sistemi) tamamen doğada hayatta kalabilmek için seçilmiş evrimsel araçlardır. Evrimsel epistemolojiye atıfta bulunarak rasyonel yetilerimizin biyolojik sınırlılıklarını vurgulamak yazıyı daha bilimsel kılabilirdi.";
            cemal = "Akıl yürütme yetilerimizin bilginin oluşumundaki rolü harika ifade edilmiş. Duyu organlarımızın bizi yanıltabileceğini (Descartes'ın şüpheciliğinde olduğu gibi) hatırlatarak, bilginin nihai kaynağının maddeden bağımsız, saf zihinsel/akli sezgilerimiz olduğunu savunan bu rasyonel yaklaşım takdiri hak ediyor.";
        } else {
            evrim = "Bilginin doğruluğunu sorgularken insan zihninin evrimsel olarak 'hayatta kalmaya' kodlandığını unutmamalıyız. Yani beynimiz mutlak hakikati bulmak için değil, pratik fayda sağlayıp neslini sürdürmek için evrilmiştir. Bilgi teorisini bu evrimsel faydacılık zeminine oturtmak faydalı olurdu.";
            cemal = "Hakikate ulaşma yolunda insan bilincinin maddesel dünyanın sınırlamalarını aşma gücünü ön plana çıkaran, derinlikli bir bilgi teorisi tartışması. Düşüncenin sınırlarını zorlayan kavramsal akış çok başarılı.";
        }
    } else if (category === "Estetik") {
        if (text.includes("güzellik") || text.includes("haz") || text.includes("sanat") || text.includes("simetri")) {
            evrim = "Estetik üzerine güzel bir deneme. Ancak güzellik ve simetri algımız, aslında evrimsel süreçte sağlıklı eş seçimi, gen kalitesi ve çevre güvenliği (örn: fraktal doğa manzaraları) için gelişmiş biyolojik adaptasyonların birer yan ürünüdür. Estetik hazzın evrimsel temellerine değinmek yazıyı zenginleştirirdi.";
            cemal = "Sanat eserinin ruhta uyandırdığı aşkın estetik deneyim çok güzel analiz edilmiş. Bu hazzı sadece eş seçimi gibi kaba biyolojik dürtülere indirgemek sanata hakarettir. Estetik haz, zihnin maddi formları aşarak saf tin (ruh) ile kurduğu metafiziksel bir bağdır, yazar bunu çok iyi kavramış.";
        } else {
            evrim = "Estetik yargıların ortak evrimsel geçmişimiz ve sosyal grupları bir arada tutan kültürel adaptasyonlar boyutunu da eklemek yazıyı daha bütünsel hale getirebilirdi. Başarılı bir analiz.";
            cemal = "Güzelliğin fiziksel oranların ötesindeki, tinsel ve ruhsal boyutuna odaklanan, Kantçı estetiği andıran olgun bir yaklaşım. Sanatın metafiziksel gücünü yansıtan üslubunu beğendim.";
        }
    } else {
        // Serbest Düşünce
        evrim = "Fikirlerin serbestçe tartışılması güzel. Ancak unutulmamalıdır ki, her türlü kültürel, ahlaki ve felsefi birikimimizin temelinde biyolojik evrimimiz yatar. İnsanı doğadan yalıtılmış mistik bir varlık gibi görmek yerine, doğanın bir parçası olarak materyalist temelde incelemek gerekir.";
        cemal = "İnsanın mekanik bir robot veya sadece genlerin yönettiği biyolojik bir makine olmadığını; maddeden bağımsız, özgür iradeye sahip zihinsel bir varlık olduğunu hissettiren özgün bir deneme. Edebi ve felsefi üslup çok akıcı.";
    }

    return { evrim, cemal };
}

// --- INITIAL SEED DATA ---
const INITIAL_ESSAYS = [
    {
        id: "essay-1",
        title: "Mağara Benzetmesi ve Günümüz Dijital Dünyası",
        author: "Zeynep Arslan",
        studentClass: "11-B",
        category: "Bilgi Felsefesi",
        content: "Platon'un Devlet adlı eserinde ortaya koyduğu Mağara Benzetmesi, yalnızca Antik Yunan dönemini değil, 21. yüzyılın dijital insanını da derinden açıklayan bir metafordur.\n\nMağaradaki mahkumlar, arkalarındaki ateşin önünden geçen nesnelerin duvara yansıyan gölgelerini tek gerçeklik olarak kabul ederler. Günümüzde sosyal medya algoritmaları, akıllı telefon ekranları ve filtrelenmiş bilgiler bizlere tam olarak bu gölgeleri sunmaktadır.\n\nBize sunulan hazır fikirleri ve algıları sorgulamadan kabullendiğimizde mağaranın zincirli mahkumlarından farksız hale geliriz. Felsefe eğitimi ise bu zincirleri kırıp mağaranın dışına çıkma, yani güneşin aydınlattığı hakikate ulaşma çabasıdır. Sorulması gereken asıl soru şudur: Ekranlarımızın arkasındaki gölgelere mi aşığız, yoksa mağaradan çıkma cesaretine sahip miyiz?",
        date: "24 Temmuz 2026",
        status: "approved",
        virtualReviews: generateVirtualTeacherReviewsStatic("Bilgi Felsefesi", "Platon'un Devlet adlı eserinde ortaya koyduğu Mağara Benzetmesi..."),
        revisions: [
            {
                version: 1,
                title: "Magara Benzetmesi ve Sosyal Medya",
                category: "Bilgi Felsefesi",
                content: "Platonun magara benzetmesi bence sosyal medyaya benziyor. İnsanlar telefona bakıp oradaki seyleri gercek sanıyor. Sadece gosterileni goruyoruz. Felsefe ogrenerek bu magaranin zincirlerini kirabiliriz ve gercegi gorebiliriz.",
                date: "22 Temmuz 2026",
                editedBy: "Zeynep Arslan (Orijinal Taslak)",
                feedback: "Orijinal Öğrenci Gönderisi"
            },
            {
                version: 2,
                title: "Mağara Benzetmesi ve Günümüz Dijital Dünyası",
                category: "Bilgi Felsefesi",
                content: "Platon'un Devlet adlı eserinde ortaya koyduğu Mağara Benzetmesi, yalnızca Antik Yunan dönemini değil, 21. yüzyılın dijital insanını da derinden açıklayan bir metafordur.\n\nMağaradaki mahkumlar, arkalarındaki ateşin önünden geçen nesnelerin duvara yansıyan gölgelerini tek gerçeklik olarak kabul ederler. Günümüzde sosyal medya algoritmaları, akıllı telefon ekranları ve filtrelenmiş bilgiler bizlere tam olarak bu gölgeleri sunmaktadır.\n\nBize sunulan hazır fikirleri ve algıları sorgulamadan kabullendiğimizde mağaranın zincirli mahkumlarından farksız hale geliriz. Felsefe eğitimi ise bu zincirleri kırıp mağaranın dışına çıkma, yani güneşin aydınlattığı hakikate ulaşma çabasıdır. Sorulması gereken asıl soru şudur: Ekranlarımızın arkasındaki gölgelere mi aşığız, yoksa mağaradan çıkma cesaretine sahip miyiz?",
                date: "24 Temmuz 2026",
                editedBy: "Arzu Hoca (Düzenledi)",
                feedback: "İmla hataları düzeltildi, felsefi terimler aslına uygun hale getirilerek argümanlar akıcılaştırıldı."
            }
        ]
    },
    {
        id: "essay-2",
        title: "Varoluşçuluk Açısından Özgürlük ve Kaygı",
        author: "Elif Naz Yılmaz",
        studentClass: "11-C",
        category: "Varlık Felsefesi",
        content: "Jean-Paul Sartre'ın 'Varoluş özden önce gelir' sözü, insanın dünyaya belli bir tanımla gelmediğini, kendi kararları ve eylemleriyle kendini inşa ettiğini ifade eder.\n\nBir bıçağın özü (kesmek amaca hizmet etmesi) yapılmadan önce ustasının zihninde vardır. Ancak insan önce var olur, karşılaşır, dünyada ortaya çıkar ve ancak sonradan kendini tanımlar.\n\nBu durum insana sınırsız bir özgürlük yükler. Fakat bu özgürlük aynı zamanda büyük bir sorumluluk ve beraberinde 'varoluşsal kaygı' (anlayış) getirir. Seçimlerimizin tek sorumlusu biziz; bahanelerin arkasına saklanamayız. Kararlarımızla sadece kendimizi değil, insanlığın bir modelini çizeriz.",
        date: "27 Temmuz 2026",
        status: "approved",
        virtualReviews: generateVirtualTeacherReviewsStatic("Varlık Felsefesi", "Jean-Paul Sartre'ın 'Varoluş özden önce gelir' sözü..."),
        revisions: [
            {
                version: 1,
                title: "Varolussuluk ve İnsanin Kararlari",
                category: "Varlık Felsefesi",
                content: "Sartre varolus ozden once gelir demistir. Yani insan once var olur sonra kendi karakterini secer. Bi bicak gibi degilizdir. Bu yuzden cok ozguruz ama bu ozgurluk ayni zamanda bizi kaygilandirir cunku butun sorumluluk bizim omuzlarimizdadir.",
                date: "25 Temmuz 2026",
                editedBy: "Elif Naz Yılmaz (Orijinal Taslak)",
                feedback: "Orijinal Öğrenci Gönderisi"
            },
            {
                version: 2,
                title: "Varoluşçuluk Açısından Özgürlük ve Kaygı",
                category: "Varlık Felsefesi",
                content: "Jean-Paul Sartre'ın 'Varoluş özden önce gelir' sözü, insanın dünyaya belli bir tanımla gelmediğini, kendi kararları ve eylemleriyle kendini inşa ettiğini ifade eder.\n\nBir bıçağın özü (kesmek amaca hizmet etmesi) yapılmadan önce ustasının zihninde vardır. Ancak insan önce var olur, karşılaşır, dünyada ortaya çıkar ve ancak sonradan kendini tanımlar.\n\nBu durum insana sınırsız bir özgürlük yükler. Fakat bu özgürlük aynı zamanda büyük bir sorumluluk ve beraberinde 'varoluşsal kaygı' (anlayış) getirir. Seçimlerimizin tek sorumlusu biziz; bahanelerin arkasına saklanamayız. Kararlarımızla sadece kendimizi değil, insanlığın bir modelini çizeriz.",
                date: "27 Temmuz 2026",
                editedBy: "Arzu Hoca (Düzenledi)",
                feedback: "Sartre'ın varoluşçu terimleri (öz, varoluş, kaygı) ve bıçak örneği felsefi literatüre uygun şekilde genişletildi."
            }
        ]
    },
    {
        id: "essay-3",
        title: "Sanatta Güzellik Göreceli midir, Evrensel mi?",
        author: "Burak Kaya",
        studentClass: "11-A",
        category: "Estetik",
        content: "Estetik tarihinde güzellik kavramı iki temel açıdan ele alınmıştır: Nesnel estetik (güzelliğin nesnenin kendi simetrisi ve oranlarında olduğunu savunanlar) ve Öznel estetik (güzelliğin algılayan öznede olduğunu savunanlar).\n\nKant, 'Yargı Gücünün Eleştirisi'nde estetik yargıların bir yandan kişisel zevke dayandığını fakat aynı zamanda evrensel bir geçerlilik iddiası taşıdığını ileri sürer. Bir doğa manzarasını veya bir senfoniyi dinlerken hissettiğimiz estetik haz, tüm insanlarda ortak olan zihinsel yetilerin uyumundan doğar.\n\nGünümüz sanat anlayışında güzellik kalıpları yıkılmış olsa da, sanat eserinin insan ruhunda uyandırdığı o katarsis (arınma) duygusu evrenselliğini korumaktadır.",
        date: "28 Temmuz 2026",
        status: "pending",
        virtualReviews: generateVirtualTeacherReviewsStatic("Estetik", "Estetik tarihinde güzellik kavramı iki temel açıdan ele alınmıştır..."),
        revisions: [
            {
                version: 1,
                title: "Guzellik Goreli midir?",
                category: "Estetik",
                content: "Bence guzellik gorecelidir ama bazi seyler evrenseldir. Mesela guzel bir sarki dinlerken herkes ortak bisey hisseder. Kant da boyle dusunmustur. Guzel olan seyler insan ruhunu temizler.",
                date: "28 Temmuz 2026",
                editedBy: "Burak Kaya (Orijinal Taslak)",
                feedback: "Orijinal Öğrenci Gönderisi"
            }
        ]
    }
];

// --- VIRTUAL TEACHERS AI REVIEW GENERATOR (GEMINI INTEGRATION) ---
async function fetchVirtualTeacherReviews(category, content) {
    try {
        const response = await fetch('/api/evaluate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category, content })
        });
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error || 'Sunucudan hata döndü.');
        }
        return await response.json();
    } catch (error) {
        console.error('Yapay Zeka Yorumu Alınamadı:', error);
        showToast('Yapay zeka yorumu alınamadı, yerel şablonlar kullanılıyor.', 'info');
        return generateVirtualTeacherReviewsStatic(category, content);
    }
}

const PHILOSOPHY_QUOTES = [
    { quote: "Sorgulanmamış yaşam, yaşanmaya değmez.", author: "Sokrates" },
    { quote: "Düşünüyorum, öyleyse varım.", author: "René Descartes" },
    { quote: "Bildiğim tek şey, hiçbir şey bilmediğimdir.", author: "Sokrates" },
    { quote: "İnsan özgürlüğe mahkûmdur.", author: "Jean-Paul Sartre" },
    { quote: "Aydınlanma, insanın kendi suçu ile düşmüş olduğu bir ergin olmama durumundan kurtulmasıdır.", author: "Immanuel Kant" },
    { quote: "Güzellik, nesnenin ereksiz bir amaçlılık biçimidir.", author: "Immanuel Kant" }
];

// --- APP STATE ---
let essays = [];
let currentCategory = "all";
let searchQuery = "";
let isAdminLoggedIn = false;
let activeReadingEssay = null;

// --- DOM ELEMENTS ---
const elements = {
    themeToggle: document.getElementById('btn-theme-toggle'),
    heroQuoteText: document.getElementById('hero-quote-text'),
    heroQuoteAuthor: document.getElementById('hero-quote-author'),
    btnNextQuote: document.getElementById('btn-next-quote'),
    
    searchInput: document.getElementById('search-input'),
    categoryPills: document.getElementById('category-pills'),
    
    viewPublic: document.getElementById('view-public'),
    viewAdmin: document.getElementById('view-admin'),
    essaysGrid: document.getElementById('essays-grid'),
    emptyStatePublic: document.getElementById('empty-state-public'),
    essayCountTag: document.getElementById('essay-count-tag'),
    
    btnOpenSubmit: document.getElementById('btn-open-submit'),
    btnOpenAdmin: document.getElementById('btn-open-admin'),
    btnCloseAdmin: document.getElementById('btn-close-admin'),
    pendingBadge: document.getElementById('pending-badge'),
    
    // Modals
    modalSubmit: document.getElementById('modal-submit'),
    formSubmitEssay: document.getElementById('form-submit-essay'),
    
    modalReader: document.getElementById('modal-reader'),
    readerTitle: document.getElementById('reader-title'),
    readerAuthor: document.getElementById('reader-author'),
    readerClass: document.getElementById('reader-class'),
    readerDate: document.getElementById('reader-date'),
    readerCategoryBadge: document.getElementById('reader-category-badge'),
    readerBody: document.getElementById('reader-body'),
    readerRevisionCount: document.getElementById('reader-revision-count'),
    readerRevisionsTimeline: document.getElementById('reader-revisions-timeline'),
    readerTabBtnContent: document.getElementById('reader-tab-btn-content'),
    readerTabBtnRevisions: document.getElementById('reader-tab-btn-revisions'),
    readerTabContentPane: document.getElementById('reader-tab-content'),
    readerTabRevisionsPane: document.getElementById('reader-tab-revisions'),
    readerVirtualReviews: document.getElementById('reader-virtual-reviews'),
    
    modalPin: document.getElementById('modal-pin'),
    formPin: document.getElementById('form-pin'),
    pinInput: document.getElementById('pin-input'),
    pinError: document.getElementById('pin-error'),
    
    modalEdit: document.getElementById('modal-edit'),
    formEditEssay: document.getElementById('form-edit-essay'),
    editEssayId: document.getElementById('edit-essay-id'),
    editStudentName: document.getElementById('edit-student-name'),
    editStudentClass: document.getElementById('edit-student-class'),
    editEssayTitle: document.getElementById('edit-essay-title'),
    editEssayCategory: document.getElementById('edit-essay-category'),
    editEssayContent: document.getElementById('edit-essay-content'),
    editEssayFeedback: document.getElementById('edit-essay-feedback'),
    editEvrimReply: document.getElementById('edit-essay-evrim-reply'),
    editCemalReply: document.getElementById('edit-essay-cemal-reply'),
    
    // Admin Tabs & Lists
    tabBtnPending: document.getElementById('tab-btn-pending'),
    tabBtnApproved: document.getElementById('tab-btn-approved'),
    adminTabPending: document.getElementById('admin-tab-pending'),
    adminTabApproved: document.getElementById('admin-tab-approved'),
    adminPendingList: document.getElementById('admin-pending-list'),
    adminApprovedList: document.getElementById('admin-approved-list'),
    emptyStatePending: document.getElementById('empty-state-pending'),
    tabPendingCount: document.getElementById('tab-pending-count'),
    tabApprovedCount: document.getElementById('tab-approved-count'),
    
    toastContainer: document.getElementById('toast-container')
};

// --- INITIALIZATION ---
function initApp() {
    loadEssaysFromStorage();
    loadThemeFromStorage();
    setupEventListeners();
    renderHeroQuote();
    renderPublicGallery();
    updatePendingBadge();
}

// --- LOCAL STORAGE HELPERS ---
function loadEssaysFromStorage() {
    const stored = localStorage.getItem('agora_felsefe_essays_v4');
    if (stored) {
        try {
            essays = JSON.parse(stored);
        } catch (e) {
            essays = INITIAL_ESSAYS;
            saveEssaysToStorage();
        }
    } else {
        essays = INITIAL_ESSAYS;
        saveEssaysToStorage();
    }
}

function saveEssaysToStorage() {
    localStorage.setItem('agora_felsefe_essays_v4', JSON.stringify(essays));
    updatePendingBadge();
}

function loadThemeFromStorage() {
    const theme = localStorage.getItem('agora_theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        elements.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('theme-dark')) {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        localStorage.setItem('agora_theme', 'light');
        elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        showToast('Açık tema aktifleştirildi', 'info');
    } else {
        document.body.classList.remove('theme-light');
        document.body.classList.add('theme-dark');
        localStorage.setItem('agora_theme', 'dark');
        elements.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        showToast('Koyu tema aktifleştirildi', 'info');
    }
}

// --- HERO QUOTE ROTATOR ---
function renderHeroQuote() {
    const randomIndex = Math.floor(Math.random() * PHILOSOPHY_QUOTES.length);
    const item = PHILOSOPHY_QUOTES[randomIndex];
    elements.heroQuoteText.textContent = `"${item.quote}"`;
    elements.heroQuoteAuthor.textContent = `— ${item.author}`;
}

// --- RENDER PUBLIC GALLERY ---
function renderPublicGallery() {
    const approvedEssays = essays.filter(e => e.status === 'approved');
    
    const filtered = approvedEssays.filter(essay => {
        const matchesCategory = (currentCategory === 'all') || (essay.category === currentCategory);
        const matchesSearch = searchQuery === '' || 
            essay.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            essay.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            essay.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    elements.essayCountTag.textContent = `${filtered.length} Çalışma`;
    elements.essaysGrid.innerHTML = '';

    if (filtered.length === 0) {
        elements.emptyStatePublic.classList.remove('hidden');
    } else {
        elements.emptyStatePublic.classList.add('hidden');
        filtered.forEach(essay => {
            const card = createEssayCard(essay);
            elements.essaysGrid.appendChild(card);
        });
    }
}

function createEssayCard(essay) {
    const card = document.createElement('div');
    card.className = 'essay-card';
    
    const wordCount = essay.content.split(/\s+/).length;
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 150));

    card.innerHTML = `
        <div class="card-top">
            <span class="category-badge">${escapeHtml(essay.category)}</span>
            <span class="read-time"><i class="fa-regular fa-clock"></i> ${readTimeMinutes} dk okuma</span>
        </div>
        <h3 class="card-title">${escapeHtml(essay.title)}</h3>
        <p class="card-excerpt">${escapeHtml(essay.content)}</p>
        <div class="card-footer">
            <div class="student-meta">
                <span class="student-name"><i class="fa-solid fa-user"></i> ${escapeHtml(essay.author)}</span>
                <span class="student-class">${escapeHtml(essay.studentClass)} • ${essay.date}</span>
            </div>
            <button class="btn-read-more" data-id="${essay.id}">
                Devamını Oku <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;

    card.querySelector('.card-title').addEventListener('click', () => openEssayReader(essay));
    card.querySelector('.btn-read-more').addEventListener('click', () => openEssayReader(essay));

    return card;
}

// --- SIMPLE WORD-BY-WORD LCS DIFF ALGORITHM ---
function computeSimpleDiff(oldText, newText) {
    if (!oldText) return escapeHtml(newText);
    if (!newText) return "";
    
    const oldWords = oldText.trim().split(/\s+/);
    const newWords = newText.trim().split(/\s+/);
    
    const dp = Array(oldWords.length + 1).fill().map(() => Array(newWords.length + 1).fill(0));
    for (let i = 1; i <= oldWords.length; i++) {
        for (let j = 1; j <= newWords.length; j++) {
            if (oldWords[i-1] === newWords[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    let i = oldWords.length, j = newWords.length;
    let diffHtml = [];
    
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && oldWords[i-1] === newWords[j-1]) {
            diffHtml.unshift(escapeHtml(oldWords[i-1]));
            i--;
            j--;
        } else if (j > 0 && (i === 0 || dp[i][j-1] >= dp[i-1][j])) {
            diffHtml.unshift(`<ins class="diff-inserted">${escapeHtml(newWords[j-1])}</ins>`);
            j--;
        } else {
            diffHtml.unshift(`<del class="diff-deleted">${escapeHtml(oldWords[i-1])}</del>`);
            i--;
        }
    }
    
    return diffHtml.join(" ").replace(/\n/g, "<br>");
}

// --- ESSAY READER MODAL (WITH REVISIONS TAB & VIRTUAL TEACHERS) ---
function openEssayReader(essay) {
    activeReadingEssay = essay;
    
    showReaderTab('content');
    
    elements.readerCategoryBadge.textContent = essay.category;
    elements.readerTitle.textContent = essay.title;
    elements.readerAuthor.textContent = essay.author;
    elements.readerClass.textContent = essay.studentClass;
    elements.readerDate.textContent = essay.date;
    elements.readerBody.textContent = essay.content;
    
    // Set up Virtual Teacher reviews
    if (!essay.virtualReviews) {
        essay.virtualReviews = generateVirtualTeacherReviewsStatic(essay.category, essay.content);
        saveEssaysToStorage();
    }
    
    if (elements.readerVirtualReviews) {
        const evrimReplyHtml = (essay.teacherReply && essay.teacherReply.evrimReply) ? `
            <div class="teacher-reply-box">
                <span class="reply-title"><i class="fa-solid fa-reply"></i> Arzu Hoca'nın Cevabı:</span>
                <p class="reply-body">${escapeHtml(essay.teacherReply.evrimReply)}</p>
            </div>
        ` : '';

        const cemalReplyHtml = (essay.teacherReply && essay.teacherReply.cemalReply) ? `
            <div class="teacher-reply-box">
                <span class="reply-title"><i class="fa-solid fa-reply"></i> Arzu Hoca'nın Cevabı:</span>
                <p class="reply-body">${escapeHtml(essay.teacherReply.cemalReply)}</p>
            </div>
        ` : '';

        elements.readerVirtualReviews.innerHTML = `
            <h4 class="virtual-section-title"><i class="fa-solid fa-graduation-cap"></i> Sanal Akıl Hocaları Değerlendirmesi</h4>
            <div class="virtual-teacher-grid">
                <div class="teacher-review-card teacher-evrim">
                    <div class="teacher-review-header">
                        <div class="teacher-avatar"><i class="fa-solid fa-dna"></i></div>
                        <div class="teacher-meta-info">
                            <span class="teacher-name-tag">Dr. Evrim Yılmaz</span>
                            <span class="teacher-title-tag">Evrimsel Biyolog & Materyalist</span>
                        </div>
                    </div>
                    <p class="teacher-review-body">"${escapeHtml(essay.virtualReviews.evrim)}"</p>
                    ${evrimReplyHtml}
                </div>
                <div class="teacher-review-card teacher-cemal">
                    <div class="teacher-review-header">
                        <div class="teacher-avatar"><i class="fa-solid fa-brain"></i></div>
                        <div class="teacher-meta-info">
                            <span class="teacher-name-tag">Prof. Dr. Cemal Turgut</span>
                            <span class="teacher-title-tag">Kartezyen Felsefeci & Dualist</span>
                        </div>
                    </div>
                    <p class="teacher-review-body">"${escapeHtml(essay.virtualReviews.cemal)}"</p>
                    ${cemalReplyHtml}
                </div>
            </div>
        `;
    }
    
    elements.readerRevisionCount.textContent = essay.revisions ? essay.revisions.length : 1;
    renderRevisionsTimeline(essay);

    elements.modalReader.classList.remove('hidden');
}

function showReaderTab(tabName) {
    if (tabName === 'content') {
        elements.readerTabBtnContent.classList.add('active');
        elements.readerTabBtnRevisions.classList.remove('active');
        elements.readerTabContentPane.classList.remove('hidden');
        elements.readerTabRevisionsPane.classList.add('hidden');
    } else {
        elements.readerTabBtnContent.classList.remove('active');
        elements.readerTabBtnRevisions.classList.add('active');
        elements.readerTabContentPane.classList.add('hidden');
        elements.readerTabRevisionsPane.classList.remove('hidden');
    }
}

function renderRevisionsTimeline(essay) {
    elements.readerRevisionsTimeline.innerHTML = '';
    
    if (!essay.revisions || essay.revisions.length === 0) {
        elements.readerRevisionsTimeline.innerHTML = '<p class="text-muted">Bu yazıda henüz bir revizyon yapılmamıştır.</p>';
        return;
    }

    essay.revisions.forEach((rev, idx) => {
        const isOriginal = idx === 0;
        const isLatest = idx === essay.revisions.length - 1;
        
        let nodeClass = 'revision-node';
        if (isOriginal) nodeClass += ' original';
        if (isLatest) nodeClass += ' latest';

        const node = document.createElement('div');
        node.className = nodeClass;
        
        let bodyHtml = "";
        if (isOriginal) {
            bodyHtml = `<div class="revision-body">${escapeHtml(rev.content)}</div>`;
        } else {
            const prevRev = essay.revisions[idx - 1];
            const diffResult = computeSimpleDiff(prevRev.content, rev.content);
            bodyHtml = `<div class="revision-body">${diffResult}</div>`;
        }

        let feedbackHtml = "";
        if (rev.feedback && !isOriginal) {
            feedbackHtml = `
                <div class="revision-feedback-box">
                    <i class="fa-solid fa-comment-dots"></i> <strong>Arzu Hoca'nın Geri Bildirimi:</strong> "${escapeHtml(rev.feedback)}"
                </div>
            `;
        }

        node.innerHTML = `
            <div class="revision-header">
                <span class="revision-ver-tag">Sürüm ${rev.version} (${escapeHtml(rev.editedBy)})</span>
                <span class="revision-date"><i class="fa-regular fa-clock"></i> ${rev.date}</span>
            </div>
            <div class="revision-card">
                <h4 class="revision-title">${escapeHtml(rev.title)}</h4>
                ${feedbackHtml}
                ${bodyHtml}
            </div>
        `;
        elements.readerRevisionsTimeline.appendChild(node);
    });
}

// --- SUBMIT NEW ESSAY (STUDENT) ---
async function handleEssaySubmit(e) {
    e.preventDefault();
    
    const author = document.getElementById('student-name').value.trim();
    const studentClass = document.getElementById('student-class').value.trim();
    const title = document.getElementById('essay-title').value.trim();
    const category = document.getElementById('essay-category').value;
    const content = document.getElementById('essay-content').value.trim();

    if (!author || !studentClass || !title || !category || !content) {
        showToast('Lütfen tüm alanları doldurunuz!', 'error');
        return;
    }

    const submitBtn = elements.formSubmitEssay.querySelector('button[type="submit"]');
    const cancelBtn = elements.formSubmitEssay.querySelector('button[type="button"]');
    const originalSubmitText = submitBtn.innerHTML;

    try {
        // Show loading state
        submitBtn.disabled = true;
        cancelBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Yapay Zeka Değerlendiriyor...';

        const today = new Date();
        const formattedDate = `${today.getDate()} ${getMonthName(today.getMonth())} ${today.getFullYear()}`;

        // Fetch virtual reviews from server asynchronously
        const virtualReviews = await fetchVirtualTeacherReviews(category, content);

        const newEssay = {
            id: 'essay-' + Date.now(),
            title,
            author,
            studentClass,
            category,
            content,
            date: formattedDate,
            status: 'pending',
            virtualReviews: virtualReviews,
            revisions: [
                {
                    version: 1,
                    title: title,
                    category: category,
                    content: content,
                    date: formattedDate,
                    editedBy: "Öğrenci (Orijinal Taslak)",
                    feedback: "Orijinal Öğrenci Gönderisi"
                }
            ]
        };

        essays.unshift(newEssay);
        saveEssaysToStorage();
        
        elements.formSubmitEssay.reset();
        closeModal(elements.modalSubmit);
        
        showToast('Yazınız başarıyla Arzu Hoca\'nın onayına gönderildi! ✨', 'success');
    } catch (err) {
        showToast('Yazı gönderilirken bir sorun oluştu.', 'error');
    } finally {
        // Reset button states
        submitBtn.disabled = false;
        cancelBtn.disabled = false;
        submitBtn.innerHTML = originalSubmitText;
    }
}

// --- ADMIN PANEL & EDITING LOGIC ---
function openAdminPanel() {
    if (!isAdminLoggedIn) {
        elements.modalPin.classList.remove('hidden');
        elements.pinInput.focus();
    } else {
        showAdminView();
    }
}

function handlePinSubmit(e) {
    e.preventDefault();
    const enteredPin = elements.pinInput.value.trim();
    
    if (enteredPin === '1234' || enteredPin === 'arzu2026') {
        isAdminLoggedIn = true;
        elements.pinError.classList.add('hidden');
        elements.pinInput.value = '';
        closeModal(elements.modalPin);
        showAdminView();
        showToast('Hoş geldiniz Arzu Hoca! Yönetim paneli aktifleştirildi.', 'success');
    } else {
        elements.pinError.classList.remove('hidden');
    }
}

function showAdminView() {
    elements.viewPublic.classList.add('hidden');
    elements.viewAdmin.classList.remove('hidden');
    renderAdminLists();
}

function closeAdminView() {
    elements.viewAdmin.classList.add('hidden');
    elements.viewPublic.classList.remove('hidden');
    renderPublicGallery();
}

function renderAdminLists() {
    const pendingEssays = essays.filter(e => e.status === 'pending');
    const approvedEssays = essays.filter(e => e.status === 'approved');

    elements.tabPendingCount.textContent = pendingEssays.length;
    elements.tabApprovedCount.textContent = approvedEssays.length;

    // Render Pending Items
    elements.adminPendingList.innerHTML = '';
    if (pendingEssays.length === 0) {
        elements.emptyStatePending.classList.remove('hidden');
    } else {
        elements.emptyStatePending.classList.add('hidden');
        pendingEssays.forEach(essay => {
            const card = createAdminItemCard(essay, true);
            elements.adminPendingList.appendChild(card);
        });
    }

    // Render Approved Items
    elements.adminApprovedList.innerHTML = '';
    approvedEssays.forEach(essay => {
        const card = createAdminItemCard(essay, false);
        elements.adminApprovedList.appendChild(card);
    });
}

function createAdminItemCard(essay, isPending) {
    const card = document.createElement('div');
    card.className = 'admin-item-card';

    // Generate virtual reviews if not present (legacy compat)
    if (!essay.virtualReviews) {
        essay.virtualReviews = generateVirtualTeacherReviewsStatic(essay.category, essay.content);
    }

    const evrimReplyText = (essay.teacherReply && essay.teacherReply.evrimReply) || '';
    const cemalReplyText = (essay.teacherReply && essay.teacherReply.cemalReply) || '';

    const evrimReplyHtml = evrimReplyText ? `
        <div class="teacher-reply-box" id="reply-display-evrim-${essay.id}" style="margin-top:8px;">
            <span class="reply-title" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                <span><i class="fa-solid fa-reply"></i> Cevabınız:</span>
                <button class="btn-link-edit" data-action="inline-edit" data-essay-id="${essay.id}" data-teacher="evrim" style="background:none; border:none; color:var(--accent-gold); cursor:pointer; font-size:11px; padding:0; text-decoration:underline;"><i class="fa-solid fa-pen"></i> Düzenle</button>
            </span>
            <p class="reply-body">${escapeHtml(evrimReplyText)}</p>
        </div>
    ` : `
        <div style="margin-top:8px;" id="reply-btn-container-evrim-${essay.id}">
            <button class="btn btn-sm btn-outline" data-action="inline-reply" data-essay-id="${essay.id}" data-teacher="evrim" style="padding:4px 8px; font-size:11px; display:inline-flex; align-items:center; gap:4px; border-radius:4px;">
                <i class="fa-solid fa-reply"></i> Cevap Yaz
            </button>
        </div>
    `;

    const cemalReplyHtml = cemalReplyText ? `
        <div class="teacher-reply-box" id="reply-display-cemal-${essay.id}" style="margin-top:8px;">
            <span class="reply-title" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                <span><i class="fa-solid fa-reply"></i> Cevabınız:</span>
                <button class="btn-link-edit" data-action="inline-edit" data-essay-id="${essay.id}" data-teacher="cemal" style="background:none; border:none; color:var(--accent-gold); cursor:pointer; font-size:11px; padding:0; text-decoration:underline;"><i class="fa-solid fa-pen"></i> Düzenle</button>
            </span>
            <p class="reply-body">${escapeHtml(cemalReplyText)}</p>
        </div>
    ` : `
        <div style="margin-top:8px;" id="reply-btn-container-cemal-${essay.id}">
            <button class="btn btn-sm btn-outline" data-action="inline-reply" data-essay-id="${essay.id}" data-teacher="cemal" style="padding:4px 8px; font-size:11px; display:inline-flex; align-items:center; gap:4px; border-radius:4px;">
                <i class="fa-solid fa-reply"></i> Cevap Yaz
            </button>
        </div>
    `;

    const evrimFormHtml = `
        <div class="inline-reply-form hidden" id="reply-form-evrim-${essay.id}" style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
            <textarea class="inline-reply-textarea" id="reply-input-evrim-${essay.id}" placeholder="Dr. Evrim Yılmaz'ın yorumuna cevabınız...">${escapeHtml(evrimReplyText)}</textarea>
            <div style="display:flex; gap:6px; justify-content:flex-end;">
                <button class="btn btn-sm btn-outline" data-action="inline-cancel" data-essay-id="${essay.id}" data-teacher="evrim" style="padding:4px 8px; font-size:10px; border-radius:4px;">İptal</button>
                <button class="btn btn-sm btn-primary" data-action="inline-save" data-essay-id="${essay.id}" data-teacher="evrim" style="padding:4px 8px; font-size:10px; border-radius:4px;">Kaydet</button>
            </div>
        </div>
    `;

    const cemalFormHtml = `
        <div class="inline-reply-form hidden" id="reply-form-cemal-${essay.id}" style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
            <textarea class="inline-reply-textarea" id="reply-input-cemal-${essay.id}" placeholder="Prof. Dr. Cemal Turgut'un yorumuna cevabınız...">${escapeHtml(cemalReplyText)}</textarea>
            <div style="display:flex; gap:6px; justify-content:flex-end;">
                <button class="btn btn-sm btn-outline" data-action="inline-cancel" data-essay-id="${essay.id}" data-teacher="cemal" style="padding:4px 8px; font-size:10px; border-radius:4px;">İptal</button>
                <button class="btn btn-sm btn-primary" data-action="inline-save" data-essay-id="${essay.id}" data-teacher="cemal" style="padding:4px 8px; font-size:10px; border-radius:4px;">Kaydet</button>
            </div>
        </div>
    `;

    // Render virtual teacher cards inside admin interface for teacher reference
    const virtualHtml = `
        <div class="virtual-reviews-section" style="margin-top:12px; padding-top:12px; border-top:1px dashed var(--border-color);">
            <span class="virtual-section-title" style="font-size:11px; margin-bottom:8px; display:inline-flex; align-items:center; gap:6px;"><i class="fa-solid fa-graduation-cap"></i> Sanal Hoca Değerlendirmeleri (Referans Notları)</span>
            <div class="virtual-teacher-grid" style="gap:12px;">
                <div class="teacher-review-card teacher-evrim" style="padding:10px 14px; gap:4px; box-shadow:none;">
                    <span class="teacher-name-tag" style="font-size:12.5px;"><i class="fa-solid fa-dna"></i> Dr. Evrim Yılmaz</span>
                    <p class="teacher-review-body" style="font-size:12px;">"${escapeHtml(essay.virtualReviews.evrim)}"</p>
                    ${evrimReplyHtml}
                    ${evrimFormHtml}
                </div>
                <div class="teacher-review-card teacher-cemal" style="padding:10px 14px; gap:4px; box-shadow:none;">
                    <span class="teacher-name-tag" style="font-size:12.5px;"><i class="fa-solid fa-brain"></i> Prof. Dr. Cemal Turgut</span>
                    <p class="teacher-review-body" style="font-size:12px;">"${escapeHtml(essay.virtualReviews.cemal)}"</p>
                    ${cemalReplyHtml}
                    ${cemalFormHtml}
                </div>
            </div>
        </div>
    `;

    card.innerHTML = `
        <div class="admin-item-header">
            <div>
                <span class="category-badge">${escapeHtml(essay.category)}</span>
                <h3 class="admin-item-title">${escapeHtml(essay.title)}</h3>
                <div class="student-meta">
                    <span class="student-name"><i class="fa-solid fa-user-pen"></i> ${escapeHtml(essay.author)} (${escapeHtml(essay.studentClass)})</span>
                    <span class="student-class">Gönderim Tarihi: ${essay.date} • Sürüm Sayısı: ${essay.revisions ? essay.revisions.length : 1}</span>
                </div>
            </div>
            <div class="admin-item-actions">
                ${isPending ? `
                    <button class="btn btn-sm btn-approve" data-action="approve" data-id="${essay.id}">
                        <i class="fa-solid fa-check"></i> Onayla & Yayınla
                    </button>
                ` : ''}
                <button class="btn btn-sm btn-edit" data-action="edit" data-id="${essay.id}">
                    <i class="fa-solid fa-user-pen"></i> Düzenle
                </button>
                <button class="btn btn-sm btn-danger" data-action="delete" data-id="${essay.id}">
                    <i class="fa-solid fa-trash-can"></i> Sil / Kaldır
                </button>
            </div>
        </div>
        <p class="card-excerpt">${escapeHtml(essay.content)}</p>
        ${virtualHtml}
    `;

    card.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('button');
        if (!actionBtn) return;
        
        const action = actionBtn.dataset.action;
        const id = actionBtn.dataset.id;
        const essayId = actionBtn.dataset.essayId;
        const teacher = actionBtn.dataset.teacher;

        if (action === 'approve') {
            approveEssay(id);
        } else if (action === 'edit') {
            openEssayEditor(id);
        } else if (action === 'delete') {
            deleteEssay(id);
        } else if (action === 'inline-reply' || action === 'inline-edit') {
            const form = card.querySelector(`#reply-form-${teacher}-${essayId}`);
            const btnContainer = card.querySelector(`#reply-btn-container-${teacher}-${essayId}`);
            const displayBox = card.querySelector(`#reply-display-${teacher}-${essayId}`);

            if (form) form.classList.remove('hidden');
            if (btnContainer) btnContainer.classList.add('hidden');
            if (displayBox) displayBox.classList.add('hidden');
            
            const input = card.querySelector(`#reply-input-${teacher}-${essayId}`);
            if (input) input.focus();
        } else if (action === 'inline-cancel') {
            const form = card.querySelector(`#reply-form-${teacher}-${essayId}`);
            const btnContainer = card.querySelector(`#reply-btn-container-${teacher}-${essayId}`);
            const displayBox = card.querySelector(`#reply-display-${teacher}-${essayId}`);

            if (form) form.classList.add('hidden');
            if (btnContainer) btnContainer.classList.remove('hidden');
            if (displayBox) displayBox.classList.remove('hidden');
        } else if (action === 'inline-save') {
            const input = card.querySelector(`#reply-input-${teacher}-${essayId}`);
            const text = input ? input.value.trim() : '';

            const targetEssay = essays.find(es => es.id === essayId);
            if (targetEssay) {
                if (!targetEssay.teacherReply) {
                    targetEssay.teacherReply = { evrimReply: '', cemalReply: '' };
                }
                
                if (teacher === 'evrim') {
                    targetEssay.teacherReply.evrimReply = text;
                } else if (teacher === 'cemal') {
                    targetEssay.teacherReply.cemalReply = text;
                }

                saveEssaysToStorage();
                showToast('Öğretmen cevabı başarıyla güncellendi!', 'success');
                renderAdminLists();
            }
        }
    });

    return card;
}

function approveEssay(id) {
    const essay = essays.find(e => e.id === id);
    if (essay) {
        essay.status = 'approved';
        saveEssaysToStorage();
        renderAdminLists();
        updatePendingBadge();
        showToast(`"${essay.title}" onaylandı ve portföyde yayınlandı!`, 'success');
    }
}

function deleteEssay(id) {
    if (confirm('Bu çalışmayı ve tüm revizyon geçmişini tamamen silmek istediğinizden emin misiniz?')) {
        essays = essays.filter(e => e.id !== id);
        saveEssaysToStorage();
        renderAdminLists();
        updatePendingBadge();
        showToast('Yazı tamamen silindi.', 'info');
    }
}

// --- OPEN TEACHER EDITOR MODAL ---
function openEssayEditor(id) {
    const essay = essays.find(e => e.id === id);
    if (!essay) return;

    elements.editEssayId.value = essay.id;
    elements.editStudentName.value = essay.author;
    elements.editStudentClass.value = essay.studentClass;
    elements.editEssayTitle.value = essay.title;
    elements.editEssayCategory.value = essay.category;
    elements.editEssayContent.value = essay.content;
    elements.editEssayFeedback.value = ""; // clear feedback input for new edit session
    elements.editEvrimReply.value = (essay.teacherReply && essay.teacherReply.evrimReply) ? essay.teacherReply.evrimReply : "";
    elements.editCemalReply.value = (essay.teacherReply && essay.teacherReply.cemalReply) ? essay.teacherReply.cemalReply : "";

    elements.modalEdit.classList.remove('hidden');
}

async function handleEssayEditSave(e) {
    e.preventDefault();
    
    const id = elements.editEssayId.value;
    const title = elements.editEssayTitle.value.trim();
    const category = elements.editEssayCategory.value;
    const content = elements.editEssayContent.value.trim();
    const feedback = elements.editEssayFeedback.value.trim();
    const evrimReply = elements.editEvrimReply.value.trim();
    const cemalReply = elements.editCemalReply.value.trim();

    if (!title || !category || !content || !feedback) {
        showToast('Lütfen geri bildirim dahil tüm alanları doldurunuz!', 'error');
        return;
    }

    const essayIndex = essays.findIndex(e => e.id === id);
    if (essayIndex === -1) return;

    const essay = essays[essayIndex];
    
    const oldEvrimReply = (essay.teacherReply && essay.teacherReply.evrimReply) || "";
    const oldCemalReply = (essay.teacherReply && essay.teacherReply.cemalReply) || "";
    
    const isContentChanged = essay.title !== title || essay.category !== category || essay.content !== content;
    const isReplyChanged = oldEvrimReply !== evrimReply || oldCemalReply !== cemalReply;
    const isChanged = isContentChanged || isReplyChanged;
    
    if (isChanged) {
        const saveBtn = elements.formEditEssay.querySelector('button[type="submit"]');
        const cancelBtn = elements.formEditEssay.querySelector('button[type="button"]');
        const originalSaveText = saveBtn.innerHTML;

        try {
            if (isContentChanged) {
                // Show loading state
                saveBtn.disabled = true;
                cancelBtn.disabled = true;
                saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Yapay Zeka Değerlendiriyor...';

                const today = new Date();
                const formattedDate = `${today.getDate()} ${getMonthName(today.getMonth())} ${today.getFullYear()}`;
                
                // Push a new version to revisions history
                const nextVersion = (essay.revisions ? essay.revisions.length : 1) + 1;
                
                if (!essay.revisions) {
                    essay.revisions = [
                        {
                            version: 1,
                            title: essay.title,
                            category: essay.category,
                            content: essay.content,
                            date: essay.date,
                            editedBy: "Öğrenci (Orijinal Taslak)",
                            feedback: "Orijinal Öğrenci Gönderisi"
                        }
                    ];
                }

                // Fetch updated virtual reviews from API
                const virtualReviews = await fetchVirtualTeacherReviews(category, content);

                // Apply changes to current essay
                essay.title = title;
                essay.category = category;
                essay.content = content;
                essay.virtualReviews = virtualReviews;
                
                // Add new revision node representing the edited state
                essay.revisions.push({
                    version: nextVersion,
                    title: title,
                    category: category,
                    content: content,
                    date: formattedDate,
                    editedBy: "Arzu Hoca (Düzenledi)",
                    feedback: feedback
                });
            }

            // Always update replies if we are saving changes
            essay.teacherReply = {
                evrimReply: evrimReply,
                cemalReply: cemalReply
            };

            saveEssaysToStorage();
            showToast('Değişiklikler ve öğretmen cevapları başarıyla kaydedildi!', 'success');
            elements.formEditEssay.reset();
            closeModal(elements.modalEdit);
            renderAdminLists();
        } catch (err) {
            showToast('Değişiklikler kaydedilirken bir hata oluştu.', 'error');
        } finally {
            saveBtn.disabled = false;
            cancelBtn.disabled = false;
            saveBtn.innerHTML = originalSaveText;
        }
    } else {
        showToast('Herhangi bir değişiklik algılanmadı.', 'info');
        closeModal(elements.modalEdit);
        renderAdminLists();
    }
}

function updatePendingBadge() {
    const pendingCount = essays.filter(e => e.status === 'pending').length;
    if (pendingCount > 0) {
        elements.pendingBadge.textContent = pendingCount;
        elements.pendingBadge.classList.remove('hidden');
    } else {
        elements.pendingBadge.classList.add('hidden');
    }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.btnNextQuote.addEventListener('click', renderHeroQuote);

    // Categories filter
    elements.categoryPills.addEventListener('click', (e) => {
        if (e.target.classList.contains('pill')) {
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderPublicGallery();
        }
    });

    // Search input
    elements.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderPublicGallery();
    });

    // Modals
    elements.btnOpenSubmit.addEventListener('click', () => elements.modalSubmit.classList.remove('hidden'));
    elements.btnOpenAdmin.addEventListener('click', openAdminPanel);
    elements.btnCloseAdmin.addEventListener('click', closeAdminView);

    // Close Modals
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.close;
            const targetModal = document.getElementById(targetId);
            if (targetModal) closeModal(targetModal);
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(overlay);
        });
    });

    // Forms
    elements.formSubmitEssay.addEventListener('submit', handleEssaySubmit);
    elements.formPin.addEventListener('submit', handlePinSubmit);
    elements.formEditEssay.addEventListener('submit', handleEssayEditSave);

    // Admin List Tabs
    elements.tabBtnPending.addEventListener('click', () => {
        elements.tabBtnPending.classList.add('active');
        elements.tabBtnApproved.classList.remove('active');
        elements.adminTabPending.classList.add('active');
        elements.adminTabPending.classList.remove('hidden');
        elements.adminTabApproved.classList.add('hidden');
        elements.adminTabApproved.classList.remove('active');
    });

    elements.tabBtnApproved.addEventListener('click', () => {
        elements.tabBtnApproved.classList.add('active');
        elements.tabBtnPending.classList.remove('active');
        elements.adminTabApproved.classList.add('active');
        elements.adminTabApproved.classList.remove('hidden');
        elements.adminTabPending.classList.add('hidden');
        elements.adminTabPending.classList.remove('active');
    });

    // Reader modal tabs
    elements.readerTabBtnContent.addEventListener('click', () => showReaderTab('content'));
    elements.readerTabBtnRevisions.addEventListener('click', () => showReaderTab('revisions'));
}

function closeModal(modal) {
    modal.classList.add('hidden');
}

// --- UTILITIES ---
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';
    if (type === 'info') icon = 'fa-circle-info';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function getMonthName(monthIndex) {
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    return months[monthIndex] || '';
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Start Application
document.addEventListener('DOMContentLoaded', initApp);
