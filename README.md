# Kampus Jabar Banten Landing Page

Aplikasi web untuk membantu siswa mencari dan membandingkan informasi perguruan tinggi di Jawa Barat dan Banten, membantu mereka memilih kampus dan jurusan yang sesuai dengan minat dan passion mereka.

## Daftar Isi
- [Tentang Proyek](#tentang-proyek)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Proyek](#menjalankan-proyek)
- [API yang Digunakan](#api-yang-digunakan)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Tentang Proyek
Proyek ini adalah aplikasi Vue.js yang menyediakan data kampus dan program studi yang ditawarkan di wilayah Jawa Barat dan Banten. Pengguna dapat melihat informasi tentang berbagai jurusan, layanan, dan informasi kontak kampus terkait.

## Prasyarat
Sebelum memulai, pastikan Anda memiliki:
- **Node.js** dan **npm** terinstal di sistem Anda.
- **Vue CLI** untuk mengelola dan menjalankan proyek.

## Instalasi
1. **Clone** repositori ini:
   ```bash
   git clone https://github.com/username/kampus-jabar-banten.git
   ```
2. **Masuk ke direktori proyek**:
   ```bash
   cd kampus-jabar-banten
   ```
3. **Instal dependensi**:
   ```bash
   npm install
   ```

## Menjalankan Proyek
1. Jalankan server lokal untuk pengembangan:
   ```bash
   npm run dev -- -o
   ```
2. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi.

## API yang Digunakan
Aplikasi ini menggunakan endpoint API berikut:
- **/open/college/all** - Mendapatkan daftar semua kampus.
- **/open/college/{id}** - Mendapatkan detail kampus berdasarkan ID.
- **/open/studyprogram/all** - Mendapatkan daftar program studi.
- **/open/studyprogram/{id}** - Mendapatkan detail program studi berdasarkan ID.

Data API disusun untuk menampilkan informasi kampus dan jurusan sesuai bidang studi, dan juga menyediakan informasi tambahan seperti ikon bidang studi, kelas, dan deskripsi singkat.

## Kontribusi
Kontribusi sangat diterima! Untuk melakukan kontribusi:
1. Fork repositori.
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`).
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`).
4. Push ke branch (`git push origin feature/AmazingFeature`).
5. Buat Pull Request.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).
