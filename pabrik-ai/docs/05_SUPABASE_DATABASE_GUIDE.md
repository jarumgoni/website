# 🗄️ SUPABASE MASTER GUIDE
**Pabrik AI Pro™ — Database, Auth, CRUD & Row Level Security (RLS)**

Supabase adalah backend PostgreSQL siap pakai yang memberikan database cloud gratis, otentikasi pengguna, penyimpanan file (Storage), dan Realtime WebSocket API tanpa perlu mengelola server sendiri.

---

## 1. Menghubungkan Proyek ke Supabase

Instal package resmi Supabase:
```bash
npm install @supabase/supabase-js
```

Buat file `lib/supabaseClient.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

Simpan kredensial di `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 2. Row Level Security (RLS) Wajib Diaktifkan
Secara default di Supabase, saat Anda mengaktifkan RLS, tidak ada seorang pun yang bisa membaca atau menulis data kecuali ada aturan (Policy) yang mengizinkannya.

### Contoh Policy Publik (Bisa dibaca siapa saja, hanya admin yang bisa edit):
```sql
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Izinkan semua orang melihat produk aktif
CREATE POLICY "Public products viewable by everyone" 
ON products FOR SELECT 
USING (is_active = true);

-- Hanya user terotentikasi dengan role admin yang bisa menambah/mengubah produk
CREATE POLICY "Admins can manage products" 
ON products FOR ALL 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');
```

---

## 3. Operasi CRUD Standar

### Create (Menambah Data):
```typescript
const { data, error } = await supabase
  .from('orders')
  .insert([
    { customer_name: 'Budi Santoso', total_amount: 150000, status: 'PAID' }
  ])
  .select();
```

### Read (Membaca Data):
```typescript
const { data, error } = await supabase
  .from('orders')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(20);
```

### Update (Mengubah Data):
```typescript
const { data, error } = await supabase
  .from('orders')
  .update({ status: 'DELIVERED' })
  .eq('id', orderId);
```

### Delete (Menghapus Data):
```typescript
const { data, error } = await supabase
  .from('orders')
  .delete()
  .eq('id', orderId);
```
