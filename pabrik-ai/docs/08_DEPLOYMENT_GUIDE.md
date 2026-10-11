# 🌐 DEPLOYMENT GUIDE: DARI LOCALHOST KE DOMAIN PUBLIK
**Pabrik AI Pro™ — Panduan Publikasi Aplikasi Web**

Setelah aplikasi Anda selesai diuji secara lokal, publikasikan agar bisa diakses oleh klien, karyawan, atau pelanggan Anda dari mana saja secara gratis atau dengan modal minim.

---

## Opsi 1: Deployment Gratis via Vercel (Paling Direkomendasikan)

Vercel adalah platform hosting cloud terbaik untuk aplikasi Next.js dan React:
1. Buat akun di [https://vercel.com](https://vercel.com) menggunakan akun GitHub Anda.
2. Push repository kode Anda ke GitHub.
3. Di dashboard Vercel, klik **"Add New Project"** lalu pilih repository GitHub Anda.
4. Buka tab **"Environment Variables"**, masukkan:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Klik **"Deploy"**. Dalam 60 detik, Anda akan mendapatkan URL publik gratis berakhiran `.vercel.app`.
6. (Opsional): Anda bisa menghubungkan domain kustom sendiri (contoh: `kasir.tokosaya.com`) di menu **Settings > Domains**.

---

## Opsi 2: Deployment via Cloudflare Pages

Cloudflare Pages menawarkan bandwidth tanpa batas dan latensi super cepat:
1. Buka [https://pages.cloudflare.com](https://pages.cloudflare.com).
2. Hubungkan repository GitHub Anda.
3. Pilih framework preset **Next.js** atau **Vite**.
4. Tambahkan Environment Variables.
5. Klik **Save and Deploy**.

---

## Opsi 3: Deployment ke VPS Ubuntu (Nginx + PM2 / Docker)

Jika Anda ingin menyimpan aplikasi di server mandiri tanpa batasan limit platform:
1. Setup Node.js 20 LTS di VPS:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
2. Build aplikasi Anda di server:
   ```bash
   npm run build
   ```
3. Jalankan aplikasi menggunakan PM2 (Process Manager agar tetap hidup 24/7):
   ```bash
   npm install -g pm2
   pm2 start npm --name "my-business-app" -- start
   pm2 save
   pm2 startup
   ```
4. Arahkan reverse proxy Nginx ke port 3000 dan pasang SSL gratis Let's Encrypt dengan Certbot.
