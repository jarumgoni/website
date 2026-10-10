# ⚡ PROMPT LIBRARY: FITUR, UI & INTEGRASI
**Pabrik AI Pro™ — Koleksi Prompt Siap Pakai**

Gunakan koleksi prompt siap pakai ini saat Anda membutuhkan penambahan fitur spesifik pada aplikasi web Anda.

---

### 1. Form Input dengan Validasi Zod & Tailwind
```text
Buatkan komponen Form React/Next.js dengan validasi Zod dan Tailwind CSS untuk menambah data [NAMA_ENTITAS].
Ketentuan:
1. Field wajib: [NAMA, HARGA, KATEGORI, STOK].
2. Tampilkan pesan error warna merah di bawah input jika format salah.
3. Tambahkan tombol submit dengan animasi spinner saat sedang loading.
4. Tampilkan SweetAlert2 / Toast saat data berhasil disimpan ke Supabase.
```

### 2. Tabel Data Interaktif (Search, Sort, Pagination)
```text
Buatkan komponen Data Table interaktif menggunakan Tailwind CSS untuk menampilkan data [NAMA_TABEL] dari Supabase.
Ketentuan:
1. Kolom: [KODE, NAMA, TANGGAL, STATUS, AKSI (Edit, Hapus)].
2. Search bar live debounce 300ms untuk mencari berdasarkan nama atau kode.
3. Filter dropdown berdasarkan status.
4. Pagination 10 data per halaman dengan tombol Previous / Next.
5. Modal konfirmasi hapus data sebelum menghapus record dari Supabase.
```

### 3. Cetak Struk / Invoice Thermal (Ukuran 58mm / 80mm)
```text
Buatkan fungsi cetak struk kasir berbasis CSS @media print di browser.
Ketentuan:
1. Lebar kertas disesuaikan untuk printer kasir thermal 58mm (max-width: 58mm).
2. Tampilkan nama toko di header, tanggal/waktu transaksi (WIB), nomor nota.
3. Rincian item: nama barang, qty x harga, subtotal.
4. Total belanja, jumlah uang bayar, uang kembalian.
5. Footer: "Terima Kasih Atas Kunjungan Anda" dan barcode nota.
6. Otomatis panggil window.print() saat tombol cetak diklik.
```

### 4. Upload Gambar ke Supabase Storage Bucket
```text
Buatkan komponen upload foto produk ke Supabase Storage bucket 'product-images'.
Ketentuan:
1. Drag and drop file foto dengan preview instan sebelum upload.
2. Batasi ukuran file maksimal 2MB dan format hanya PNG/JPEG/WEBP.
3. Setelah upload selesai, simpan URL publik gambar ke tabel database 'products'.
4. Tampilkan progress bar saat proses upload sedang berjalan.
```

### 5. Ringkasan Laporan Keuangan (Cards & Chart)
```text
Buatkan dashboard ringkasan penjualan dengan 4 kartu metrik utama dan 1 grafik penjualan.
Ketentuan:
1. Kartu 1: Omset Hari Ini (IDR)
2. Kartu 2: Total Transaksi Selesai
3. Kartu 3: Rata-rata Keranjang (Basket Size)
4. Kartu 4: Produk Terlaris Hari Ini
5. Grafik garis mingguan (Senin - Minggu) menggunakan Recharts atau Chart.js.
6. Data diambil secara dinamis dari query Supabase dengan filter rentang tanggal.
```
