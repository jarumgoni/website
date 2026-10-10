# 🚀 PANDUAN CEPAT (QUICK START GUIDE)
**Pabrik AI Pro™ — Dari 1 Perintah Menjadi Aplikasi Bisnis Nyata**

Selamat datang di ekosistem Pabrik AI Pro. Dokumen ini adalah panduan langkah demi langkah agar Anda bisa mengubah ide mentah menjadi aplikasi bisnis yang berjalan online dalam waktu kurang dari 60 menit.

---

## Alur Kerja 6 Tahap (The 6-Step Workflow)

```
[1. Tulis Ide] ➔ [2. Perintah/Brief] ➔ [3. Generate Kode] ➔ [4. Setup Database] ➔ [5. Debug & Test] ➔ [6. Deploy Online]
```

### Tahap 1: Tulis Kebutuhan Bisnis (Plain Indonesian / English)
Jangan mulai dengan istilah teknis yang rumit. Tuliskan proses bisnis nyata yang ingin diselesaikan.
*Contoh*: "Saya butuh sistem kasir untuk kedai kopi: kasir bisa pilih menu makanan/minuman, hitung diskon member 10%, catat metode bayar tunai/QRIS, dan cetak struk thermal 58mm."

### Tahap 2: Buka Engine AI (Master Engine)
1. Buka Master Engine di link member atau gunakan `02_MASTER_AI_ENGINE_PROMPT.md` di Gemini Advanced / Claude / ChatGPT.
2. Tempelkan format prompt standar:
```
[PROYEK]: Kasir Kedai Kopi (Coffee Shop POS)
[TARGET PENGGUNA]: Kasir & Pemilik Kedai
[FITUR UTAMA]: 
- Katalog produk & varian (Hot/Ice, Size)
- Keranjang belanja & perhitungan otomatis
- Diskon member & pajak PB1 10%
- Rekap penjualan harian per shift
[STACK PILIHAN]: Next.js 14 / Vite React + Tailwind CSS + Supabase Database
```

### Tahap 3: Generate Struktur & Kode
Engine akan mengeluarkan:
1. Skema Database SQL (Tabel, Relasi, Primary Key, RLS).
2. Struktur Folder Proyek.
3. Kode Lengkap (Frontend UI + State Management + API Call) tanpa placeholder `// to be implemented`.

### Tahap 4: Hubungkan ke Supabase (Database Gratis)
1. Buka [https://supabase.com](https://supabase.com) dan buat proyek baru.
2. Masuk ke menu **SQL Editor**, tempelkan skema SQL yang dihasilkan dari Tahap 3, lalu klik **Run**.
3. Salin `SUPABASE_URL` dan `SUPABASE_ANON_KEY` ke file `.env` aplikasi Anda.

### Tahap 5: Testing Lokal
Jalankan di terminal komputer Anda:
```bash
npm install
npm run dev
```
Buka browser di `http://localhost:3000`. Coba lakukan transaksi uji coba. Jika menemukan kendala, buka file `06_TROUBLESHOOTING_KIT.md`.

### Tahap 6: Deployment Online (Gratis)
Hubungkan repository GitHub Anda ke [Vercel.com](https://vercel.com) atau [Cloudflare Pages](https://pages.cloudflare.com). Dalam 2 menit aplikasi Anda sudah memiliki domain aktif dan bisa diakses oleh pelanggan atau tim Anda di seluruh dunia.
