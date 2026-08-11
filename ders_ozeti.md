# Agora - Akşamki Ders Hazırlık ve Yol Haritası Özeti

Bu dosya, akşam derse başladığımızda ne durumda olduğumuzu hatırlamak ve adım adım ilerlemek için oluşturulmuş kılavuzdur.

---

## 📌 PROJENİN ŞU ANKİ DURUMU
*   Uygulama tamamen statik (HTML/CSS/JS) olarak çalışıyor.
*   Yorumlar yapay zeka olmadan, [app.js](file:///d:/JS/LESSONS/101.WEB.SCRAPT/antigravity/felsefe_portfoyu/app.js) içindeki basit kelime eşleşmeleriyle (statik şablonlar) üretiliyor.
*   Veriler geçici olarak `localStorage` üzerinde tutuluyor (yani ortak bir veritabanı yok).
*   Lokal test sunucusu arka planda `http://127.0.0.1:8080` adresinde hazır bekliyor.

---

## 🚀 BUGÜNÜN HEDEFİ: 1. AŞAMA (LOKAL GELİŞTİRME VE AI)

Akşam ilk olarak şu teknik adımları sırasıyla uygulayacağız:
1.  **Proje Yapılandırması:** `npm init -y` ile projeyi Node.js projesi yapacağız.
2.  **Kütüphanelerin Kurulumu:** `express`, `dotenv` ve `@google/generative-ai` kütüphanelerini yükleyeceğiz.
3.  **Lokal Sunucu (`server.js`):** HTML/CSS/JS dosyalarını sunan ve `.env` dosyasındaki `GEMINI_API_KEY`'i okuyan ana sunucuyu yazacağız.
4.  **Güvenli API Endpoint'i (`/api/evaluate`):** Gemini 2.0 Flash modelini arka planda çağıracak ve API anahtarını tarayıcıdan gizleyecek API rotasını oluşturacağız.
5.  **Sistem Yönergeleri (Prompt Engineering):**
    *   *Dr. Evrim Yılmaz:* Materyalist ve evrimsel eleştiri yapacak.
    *   *Prof. Dr. Cemal Turgut:* Kartezyen, dualist ve ruh/bilinç odaklı eleştiri yapacak.
6.  **Arayüz Bağlantısı (`app.js`):** Frontend'deki eski yorum fonksiyonunu iptal edip `/api/evaluate` rotasına bağlayacağız ve loading (yükleniyor) efekti ekleyeceğiz.

---

## 🏫 ÖĞRENCİLERE ANLATIM İPUÇLARI (METAFORLAR)

*   **Neden Express.js (Mutfak Metaforu):** API anahtarı restoranın gizli tarifidir. Frontend (tarayıcı) müşterinin masasıdır. Müşteri gizli tarifi görmesin diye anahtarı arkadaki güvenli odada (sunucuda - Express) saklarız.
*   **Neden Ortak Veritabanı:** `localStorage` sadece o bilgisayarda veriyi saklar. Öğrenciler kendi evlerinden yazı yüklediğinde öğretmenin kendi ekranından görebilmesi için ortak bir bulut veritabanına (MongoDB Atlas) ihtiyacımız vardır.

---

## 🔮 SONRAKİ DERSLERİN PLANI
*   **2. Aşama:** MongoDB (Mongoose) entegrasyonu yapılarak ortak ve kalıcı veritabanına geçilecek.
*   **3. Aşama:** Dockerfile hazırlanacak, PWA (mobil uygulama olarak yükleme) entegre edilecek ve GitHub Actions üzerinden Google Cloud Run'a otomatik dağıtım (CI/CD) bağlanacak.

---

## 🎬 AKŞAM DERSE BAŞLAMA KOMUTUNUZ

Akşam projeyi açtığınızda bana doğrudan şu mesajı yazabilirsiniz:

> **"Ders özeti dosyasına göre 1. Aşamayı başlatabiliriz: Express.js kurulumunu yap, sunucuyu (server.js) oluştur ve projeyi Express üzerinden çalıştır."**
