const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const mongoose = require('mongoose');
const Essay = require('./models/Essay');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mryguzel_db_user:vXKzWXqtgBTs5Fu8@felsefeportfoy.9guxx3v.mongodb.net/?appName=FelsefePortfoy';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB bağlantısı başarılı.'))
  .catch((err) => console.error('MongoDB bağlantı hatası:', err));

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for parsing JSON requests
app.use(express.json());

// Serve static files (HTML, CSS, JS) from the root folder and packaged snapshot
app.use(express.static(process.cwd()));
app.use(express.static(path.join(__dirname)));

// --- ESSAY API ROUTES ---

// Get all essays
app.get('/api/essays', async (req, res) => {
    try {
        const essays = await Essay.find().sort({ createdAt: -1 });
        res.json(essays);
    } catch (err) {
        console.error('Essays fetch error:', err);
        res.status(500).json({ error: 'Makaleler alınırken bir hata oluştu.' });
    }
});

// Create a new essay
app.post('/api/essays', async (req, res) => {
    try {
        const newEssay = new Essay(req.body);
        const savedEssay = await newEssay.save();
        res.status(201).json(savedEssay);
    } catch (err) {
        console.error('Essay save error:', err);
        res.status(500).json({ error: 'Makale kaydedilirken bir hata oluştu.', details: err.message });
    }
});

// Update an essay
app.put('/api/essays/:id', async (req, res) => {
    try {
        const updatedEssay = await Essay.findOneAndUpdate(
            { id: req.params.id }, 
            req.body, 
            { new: true }
        );
        if (!updatedEssay) return res.status(404).json({ error: 'Makale bulunamadı.' });
        res.json(updatedEssay);
    } catch (err) {
        console.error('Essay update error:', err);
        res.status(500).json({ error: 'Makale güncellenirken bir hata oluştu.' });
    }
});

// Delete an essay
app.delete('/api/essays/:id', async (req, res) => {
    try {
        const deletedEssay = await Essay.findOneAndDelete({ id: req.params.id });
        if (!deletedEssay) return res.status(404).json({ error: 'Makale bulunamadı.' });
        res.json({ message: 'Makale başarıyla silindi.' });
    } catch (err) {
        console.error('Essay delete error:', err);
        res.status(500).json({ error: 'Makale silinirken bir hata oluştu.' });
    }
});

// --- EVALUATION API ROUTE ---

// Route for evaluation API using Gemini
app.post('/api/evaluate', async (req, res) => {
    const { category, content } = req.body;

    if (!category || !content) {
        return res.status(400).json({ error: 'Kategori ve içerik alanları zorunludur.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        return res.status(500).json({ 
            error: 'API anahtarı bulunamadı.',
            details: 'Lütfen sunucu dizinindeki .env dosyasında geçerli bir GEMINI_API_KEY tanımlayın.'
        });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: process.env.GEMINI_MODEL || "gemini-2.0-flash",
            generationConfig: {
                responseMimeType: "application/json"
            }
        });

        const prompt = `
Sen iki farklı lise felsefe öğretmenisin. Sana gönderilen öğrenci makalesini okuyup, kendi felsefi ekollerine göre yapıcı ama derinlemesine eleştiriler/yorumlar yapacaksın.

Öğretmenler:
1. Dr. Evrim Yılmaz (Evrimsel Biyolog & Materyalist): Materyalist ve evrimsel eleştiri yapar. İnsanın zihinsel, ahlaki ve estetik tüm çıktılarının biyolojik evrimimizin ve elektrokimyasal beyin yapımızın bir sonucu olduğunu savunur. Aşkın, metafiziksel iddiaları eleştirir ve materyalist temelleri sorgulatır.
2. Prof. Dr. Cemal Turgut (Kartezyen Felsefeci & Dualist): Kartezyen, dualist ve ruh/bilinç odaklı eleştiri yapar. Zihin ile bedenin (res cogitans ve res extensa) iki ayrı cevher olduğunu savunur. İnsan bilincini ve ruhunu biyolojik nöronlara indirgeyen materyalist sığlığı eleştirir, bilincin aşkınlığını ve metafiziksel boyutunu korur.

Öğrenci Makalesi Detayları:
Kategori: ${category}
İçerik: ${content}

Lütfen bu makaleyi her iki öğretmen perspektifinden değerlendir ve sonucu tam olarak aşağıdaki JSON şemasında döndür:
{
  "evrim": "Dr. Evrim Yılmaz'ın öğrenci makalesi hakkındaki yorumu (Türkçe)",
  "cemal": "Prof. Dr. Cemal Turgut'un öğrenci makalesi hakkındaki yorumu (Türkçe)"
}

Yorumlar samimi, öğrencileri motive edici ancak kendi felsefi görüşlerinden ödün vermeyen tarzda olmalıdır. JSON formatı haricinde hiçbir metin üretme.
`;

        const result = await model.generateContent(prompt);
        let responseText = result.response.text().trim();
        
        // Clean up markdown block wrappers if present
        if (responseText.startsWith('```')) {
            responseText = responseText.replace(/^```(?:json)?\n?/i, '').replace(/```$/, '').trim();
        }
        
        // Parse JSON response
        let parsedResult;
        try {
            parsedResult = JSON.parse(responseText);
        } catch (parseError) {
            console.error('JSON parsing error:', responseText);
            throw new Error('Yapay zeka yanıtı geçerli bir JSON formatında değil.');
        }

        res.json(parsedResult);

    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ 
            error: 'Değerlendirme üretilirken bir hata oluştu.',
            details: error.message 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(` AGORA FELSEFE PORTFÖYÜ SUNUCUSU ÇALIŞIYOR`);
    console.log(` Adres: http://localhost:${PORT}`);
    console.log(` Model: ${process.env.GEMINI_MODEL || 'gemini-2.0-flash'}`);
    console.log(` API Anahtarı Durumu: ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here' ? 'Aktif' : 'Eksik (Lütfen .env dosyasını güncelleyin)'}`);
    console.log(`==================================================`);

    // Otomatik olarak tarayıcıyı aç
    const { exec } = require('child_process');
    if (process.platform === 'win32') {
        exec(`start http://localhost:${PORT}`);
    }
});
