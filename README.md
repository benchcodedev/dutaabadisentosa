# PT Duta Abadi Sentosa (Dutatex Bali)
### Textile Raw Materials Website Architecture

Website resmi dan katalog bahan baku tekstil untuk **PT Duta Abadi Sentosa (Dutatex)**, distributor dan spesialis **Textile Raw Materials Mill** yang berlokasi di **Pertokoan Imam Bonjol Square Blok AA 40-41, Denpasar Barat, Bali**.

Situs ini secara konsisten berfokus murni pada **Bahan Baku Tekstil (Textile Raw Materials)** — rol kain rajut (*knitted fabric rolls*), benang kapas combed, serat polyester, selulosa rayon murni, linen alami, dan elastane spandex — **tanpa mengarah ke produk jadi / garmen konveksi**.

---

## 🌟 Arsitektur Multi-Page & Fitur Utama

### 1. Home Page (`index.html`) - Single-Screen Viewport (1:1 Reference Match)
- **Visual Seni Tekstil Autentik:** Karya seni lipatan rajutan kain jingga (*pleated textile sculpture*) dengan tekstur serat mikro alami, vortex berbayang halus, dan latar belakang *dusty slate-purple* (`#715f7a`).
- **Tipografi Editorial Mewah:** *Playfair Display* & *Italiana* dengan aksen *italic ligature* pada judul `"Shape a softer world."`.
- **Subjudul:** *"Textile design for a more considerate tomorrow. Thoughtful materials. Lasting beauty."*
- **Call-to-Action:** Tombol pill `EXPLORE RAW MATERIALS →`.
- **Indikator Sudut:** `RAW FIBERS`, `KNIT STRUCTURES`, `ROLL ARCHIVE`.
- **Footer Bar:** `PT Duta Abadi Sentosa © 2026 • Denpasar, Bali, Indonesia • Trademark by Benchcode`.

### 2. Katalog 6 Bahan Baku Tekstil Utama (`materials.html`)
Menyediakan 6 kategori bahan baku tekstil utama:
1. **Kapas (Cotton):** 100% Combed Cotton Ne 20s, 24s, 30s, 40s (140 - 240 GSM).
2. **Polyester:** 100% Micro Polyester DTY & Recycled Eco-Poly (130 - 260 GSM).
3. **Rayon / Viscose:** 100% Natural Wood Cellulose Pure Drape (160 - 210 GSM).
4. **Linen:** 100% Pure Flax Bast Fiber & Cotton-Linen Blends (170 - 280 GSM).
5. **Nylon dan Spandex:** 82% Polyamide 6.6 + 18% DuPont Elastane (180 - 260 GSM).
6. **Benang (Yarn):** Ring-Spun Combed & Bamboo Cones (Ne 20s/1 s.d. 40s/2, ±1.89 kg/cone).

Dilengkapi filter tab, indikator ready stock rolls, modal inspect swatch benang dan kain dengan tombol order langsung ke WhatsApp procurement Dutatex.

### 3. Alur Produksi & Uji Mutu Lab (`process.html`)
- **Tahap 1:** Fiber Selection & Combing (Oeko-Tex Standard 100 Class I, long-staple fibers).
- **Tahap 2:** High-Gauge Circular Knitting (Multi-feeder tension control, zero spirality).
- **Tahap 3:** Reactive Eco-Dyeing (Colorfastness Grade 4+, bebas logam berat).
- **Tahap 4:** Stenter Compacting & 4-Point Roll Pass (Stabilitas dimensi & uji susut < 3.5%).

### 4. Kalkulator Metrik & Konverter Roll Bahan Baku (`converter.html`)
Tool interaktif untuk perhitungan pengadaan B2B:
- Konversi berat (Kg) $\leftrightarrow$ Estimasi Roll (±25 kg/roll).
- Estimasi panjang linier dalam Meter dan Yard lari berdasarkan GSM dan lebar kain.
- Konversi box karton benang cone (24 cones = 45.36 kg).
- Ekspor rincian pesanan langsung ke WhatsApp official Dutatex.

### 5. Profil Pabrik & Sertifikasi Mutu (`about.html`)
- Profil 12+ tahun PT Duta Abadi Sentosa di Bali.
- Standar sertifikasi Oeko-Tex Standard 100 Class I, BCI (Better Cotton Initiative), dan REACH compliance.

### 6. Showroom & Gudang Distribusi Denpasar (`contact.html`)
- **Alamat:** Pertokoan Imam Bonjol Square Blok AA 40-41, Jl. Imam Bonjol No. 555, Denpasar Barat, Bali 80119.
- **Jam Operasional:** Senin–Jumat 08:30–16:30 WITA, Sabtu 08:30–15:00 WITA.
- **Kontak Langsung:** WhatsApp (+62 881-0375-46829), Telepon ((0361) 8452931).
- Integrasi peta Google Maps & Waze.

---

## 🚀 Menjalankan Server Lokal

```bash
# Menggunakan Node.js built-in server
node server.js
```
Akses melalui browser di: `http://localhost:8088`

---

## 🏷️ Atribusi & Trademark

Developed by **Benchcode**  
© 2026 PT Duta Abadi Sentosa. All Rights Reserved. • Trademark by Benchcode
