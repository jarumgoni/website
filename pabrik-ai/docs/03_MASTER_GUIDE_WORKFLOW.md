# 📘 MASTER GUIDE: WORKFLOW & ARSITEKTUR APLIKASI
**Pabrik AI Pro™ — Metodologi Pengembangan Aplikasi Cepat**

Banyak orang gagal membangun aplikasi dengan AI karena mereka meminta seluruh sistem sekaligus dalam 1 prompt ("Buatkan saya aplikasi marketplace seperti Tokopedia lengkap dengan kurir dan pembayaran"). Pendekatan ini membuat model AI kehabisan context window dan menghasilkan kode setengah matang.

Gunakan **Metodologi Modular 4-Layer** berikut:

---

## 1. Konsep Modular: Pecah Menjadi 4 Komponen

### Layer 1: Core Entity & Database (DDL)
Jangan sentuh UI sebelum skema data Anda solid. Minta AI merancang tabel database terlebih dahulu:
- Tabel Users & Profiles
- Tabel Bisnis Utama (contoh: Products, Orders, Order_Items, Transactions)
- Relasi Foreign Key & Status Enum

### Layer 2: Authentication & Multi-Tenancy
Tentukan siapa yang mengakses apa:
- Role Superadmin vs Admin Cabang vs Karyawan vs Pelanggan
- Supabase Auth (Email Password / Magic Link / Google Sign-In)
- Row Level Security (RLS) agar user A tidak bisa mengintip data user B

### Layer 3: CRUD Transactional UI
Minta kode untuk 1 fitur operasional dalam satu waktu:
- Form input data baru + validasi input (contoh: Tambah Produk baru dengan foto)
- Tabel daftar data + pagination + search filter
- Modal edit data & konfirmasi hapus data

### Layer 4: Reporting & Dashboard Analytics
Setelah data masuk, barulah tambahkan visualisasi:
- Kartu Metrik (Total Pendapatan, Transaksi Hari Ini, Stok Menipis)
- Grafik penjualan bulanan (Chart.js / Recharts)
- Export data ke Excel / CSV / Cetak PDF struk

---

## 2. Standar Struktur Folder Proyek Rekomendasi (Next.js 14)

```text
my-business-app/
├── app/
│   ├── layout.tsx         # Global Shell & Navigation
│   ├── page.tsx           # Dashboard / POS Screen
│   ├── inventory/         # Modul Kelola Stok
│   ├── reports/           # Laporan Keuangan
│   └── login/             # Login Screen
├── components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── StatCard.tsx
│   └── DataTable.tsx
├── lib/
│   ├── supabaseClient.ts  # Inisialisasi Supabase
│   └── utils.ts           # Format Rupiah, Tanggal WIB
├── public/                # Logo, Ikon, Favicon
├── .env.local             # Kredensial URL & Key
└── package.json
```
