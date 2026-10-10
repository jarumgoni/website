# 🛠️ TROUBLESHOOTING KIT & ERROR DIAGNOSIS
**Pabrik AI Pro™ — Solusi Cepat Mengatasi Kendala Pengembangan**

Jangan panik ketika muncul error di terminal atau console browser. 95% kendala web development disebabkan oleh salah satu dari 5 masalah di bawah ini.

---

### Masalah 1: "supabaseKey is required" / Error Environment Variable
- **Penyebab**: File `.env.local` belum terbaca atau nama variabel salah ketik.
- **Solusi**: 
  1. Pastikan nama variabel diawali dengan `NEXT_PUBLIC_` jika digunakan di sisi client (browser).
  2. Restart server development setelah mengubah file `.env.local` (`Ctrl + C` lalu `npm run dev`).
  3. Cek apakah ada spasi atau tanda petik berlebih di isi token.

---

### Masalah 2: "new row violates row-level security policy for table 'xyz'"
- **Penyebab**: Row Level Security (RLS) diaktifkan di Supabase, tetapi belum ada `POLICY` yang mengizinkan operasi `INSERT` untuk user tersebut.
- **Solusi**:
  Buka SQL Editor di dashboard Supabase dan jalankan:
  ```sql
  -- Untuk testing awal izinkan insert anon/authenticated:
  CREATE POLICY "Allow public insert for testing" 
  ON xyz FOR INSERT 
  WITH CHECK (true);
  ```

---

### Masalah 3: Hydration Error ("Text content does not match server-rendered HTML")
- **Penyebab**: Kode me-render tanggal, `localStorage`, atau `window` yang berbeda antara server dan client.
- **Solusi**:
  Jalankan kode yang membutuhkan objek browser di dalam `useEffect`:
  ```typescript
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  ```

---

### Masalah 4: CORS Error saat fetch API
- **Penyebab**: Frontend mencoba request ke API pihak ketiga yang memblokir akses dari origin localhost.
- **Solusi**:
  Buat Next.js Route Handler di `app/api/proxy/route.ts` sebagai perantara (backend-to-backend tidak terkena CORS).

---

### Format Prompt Perbaikan Cepat (Copy ke Master Engine):
```text
Saya mengalami error berikut saat menjalankan aplikasi saya:
[PASTE LOG ERROR LENGKAP DI SINI]

Berikut adalah potongan file yang menyebabkan error:
[PASTE KODE FILE DI SINI]

Tolong jelaskan:
1. Apa penyebab pasti error ini terjadi?
2. Berikan kode perbaikan lengkap dari file tersebut (jangan gunakan placeholder).
```
