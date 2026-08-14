# Brief: Perapian Website Portofolio Tim

Konteks kerja untuk merapikan website portofolio yang sudah ada.
Bukan membangun dari nol.

---

## 0. Yang harus diisi dulu sebelum dilempar ke Claude Code

Bagian bertanda `<ISI: ...>` wajib diisi manual. Tanpa itu hasilnya akan
mengarang. Isi seadanya tidak apa-apa, yang penting jujur.

---

## 1. Kenapa ini dikerjakan sekarang

Ada calon klien nyata yang sedang menunggu tautan portofolio ini. Beliau salah
satu juri BRIN AIDeaNation 2026, dan kebutuhannya website company profile murni
untuk corporate identity, tanpa proses bisnis apa pun.

Kalimat kunci dari beliau: boleh dibantu AI, tapi harus tetap ada sentuhan
desain manusia.

Artinya website portofolio ini bukan sekadar wadah. Ini sampel kerja pertama
yang akan beliau nilai. Kalau tampilannya terbaca template, klaim jualan tim
patah sebelum sempat dibaca.

**Tenggat: secepat mungkin.** Portofolio sudah dijanjikan sejak 13 Agustus 2026.
Lebih baik rapi dan terkirim hari ini daripada sempurna minggu depan.

---

## 2. Siapa yang akan membaca

- Pengambil keputusan non-teknis, berlatar institusi riset dan korporat
- Kemungkinan besar membuka lewat tautan WhatsApp, di ponsel
- Kemungkinan besar meneruskan tautannya ke rekan atau atasan
- Waktu baca realistis pada kunjungan pertama: di bawah satu menit

Konsekuensi yang harus dipatuhi:

- Tampilan mobile bukan pelengkap, itu tampilan utama. Kerjakan mobile dulu.
- Wajib ada meta Open Graph dengan gambar pratinjau yang bagus, karena yang
  pertama dilihat adalah kartu pratinjau di WhatsApp, bukan halamannya.
- Waktu muat harus cepat di jaringan seluler.
- Jangan ada scroll panjang sebelum sampai ke karya.

**Keputusan yang ingin dipicu:** "tim ini layak saya ajak bicara soal proyeknya."
Bukan "tim ini hebat". Cukup layak diajak bicara.

---

## 3. Aturan kerja untuk Claude Code

1. **Audit dulu, jangan langsung menulis ulang.** Baca struktur repo yang ada,
   laporkan apa yang sudah bagus, apa yang berantakan, apa yang sebaiknya
   dibuang. Tunggu konfirmasi sebelum menghapus apa pun yang besar.
2. **Pertahankan stack yang sudah dipakai.** Jangan migrasi framework, jangan
   ganti sistem styling, jangan tambah dependensi baru kecuali perlu dan
   disebutkan alasannya.
3. **Perbaikan bertahap dan bisa direview.** Per bagian, bukan satu commit
   raksasa.
4. **Jangan mengarang isi.** Data yang belum ada ditandai `TODO` di kode, bukan
   diisi teks contoh yang seolah nyata. Metrik palsu adalah risiko terbesar
   dokumen seperti ini.
5. **Jangan menambah section baru** di luar bagian 6, terutama testimoni,
   statistik, logo klien, dan "our process".

### Kondisi saat ini

- Stack: `<ISI: framework, styling, hosting>`
- URL live: `<ISI:>`
- Keluhan utama versi sekarang: `<ISI: apa yang paling bikin tidak puas>`
- Bagian yang sudah oke dan jangan diutak-atik: `<ISI:>`

---

## 4. Posisi yang dijual

Kelima proyek yang ditampilkan punya benang merah yang sama: **website acara
dan identitas visual berskala besar, dengan tekanan pada tampilan.** Itu justru
kebetulan yang bagus, karena persis itulah yang dicari calon klien.

Jadi jangan diposisikan sebagai "kami bisa apa saja". Posisikan sebagai:

> Tim yang biasa mengeksekusi website dengan tuntutan visual tinggi dan tenggat
> acara yang tidak bisa digeser.

Tiga kekhawatiran yang harus dijawab halaman ini:

1. Apakah hasil visualnya bagus
2. Apakah tim ini selesai mengerjakan, bukan berhenti di tengah
3. Apakah tim ini paham konteks korporat, bukan cuma tugas kuliah

Proyek non-web dan proyek riset tidak masuk halaman utama. Cukup satu baris
kredensial di bagian kontak, lihat bagian 8.

---

## 5. Pembeda utama tim, harus terbaca dalam 5 detik

Model kerja kolaboratif: **arahan desain dan UI/UX dikerjakan mahasiswa Fakultas
Seni Rupa dan Desain ITB, implementasi frontend dan backend dikerjakan tim
sendiri.**

Ini persis menjawab permintaan "sentuhan art manusia". Naikkan ke bagian paling
atas, jangan disembunyikan di section about. Tuliskan sebagai fakta cara kerja,
bukan slogan.

---

## 6. Struktur halaman

Satu halaman. Urutan tetap. Tidak ada section lain di luar daftar ini.

| Urutan | Bagian | Isi |
|---|---|---|
| 1 | Hero | Nama tim, satu kalimat identitas, satu kalimat model kerja kolaboratif |
| 2 | Karya | Lima proyek, format seragam, porsi terbesar halaman |
| 3 | Cara kerja | Maksimal tiga baris. Pembagian peran desain dan implementasi |
| 4 | Kontak | Nama, WhatsApp, email, GitHub, satu baris kredensial |

Catatan hero: hindari susunan angka besar dengan label kecil, tiga statistik
pendukung, dan gradien aksen. Itu jawaban template yang muncul di mana-mana.
Kalau ada satu tangkapan layar yang paling kuat, biarkan karya itu sendiri yang
jadi hero.

Tidak perlu: halaman About panjang, testimoni (belum punya yang asli), deretan
logo teknologi, blog, angka statistik karangan.

---

## 7. Komponen kartu proyek

Semua proyek memakai komponen yang sama. Ini bagian paling penting dari
perapian ini.

### Anatomi kartu

```
[ Galeri gambar dengan tab ]     <- porsi visual terbesar
Nama proyek
Satu kalimat: acaranya apa dan untuk siapa
Peran tim: siapa desain, siapa frontend, siapa backend
Teknologi: satu baris, maksimal lima item
Tautan live (kalau ada)
```

### Spesifikasi galeri bertab

- Tiap proyek punya 2 sampai 5 tangkapan layar
- Navigasi berupa tab, bukan carousel otomatis. Tab lebih jelas untuk pembaca
  non-teknis dan tidak bergerak sendiri saat sedang dibaca
- Label tab menjelaskan isi halamannya, bukan nomor. Contoh: `Beranda`,
  `Rangkaian Acara`, `Pendaftaran`, `Galeri`. Penomoran `01 / 02 / 03` hanya
  boleh dipakai kalau urutannya memang bermakna, dan di sini tidak
- Di mobile, tab berubah jadi baris yang bisa digeser horizontal, bukan menumpuk
- Tiap tangkapan layar punya caption satu baris: fitur apa yang ditunjukkan
- Rasio gambar seragam antar proyek. Kalau tidak seragam, tampilannya langsung
  terbaca berantakan
- Gambar lazy load, format WebP, dengan placeholder agar layout tidak melompat
- Bisa diakses keyboard: tab dapat dipindah dengan panah kiri kanan

### Aset gambar

Semua tangkapan layar disediakan manual, taruh di `<ISI: folder aset>` dengan
penamaan `namaproyek-01.webp` dan seterusnya.

Kalau tangkapan layar buram atau ukurannya beda-beda, ambil ulang. Ini prioritas
lebih tinggi daripada memoles animasi.

---

## 8. Isi kelima proyek

Deskripsi acara di bawah ini sudah diisi berdasarkan informasi publik dan boleh
langsung dipakai. Yang masih `<ISI:>` adalah bagian yang hanya kamu yang tahu,
terutama peran tim dan stack.

### 1. Parade Wisuda April ITB 2026

Letakkan pertama. Acaranya paling baru dan skalanya paling terlihat.

- Deskripsi: Situs resmi rangkaian Parade Wisuda April ITB 2026, digelar
  19 April 2026 di kampus ITB Ganesha dengan tema "Where Time Rests and
  Direction Unfolds". Mencakup publikasi rangkaian acara mulai dari malam
  apresiasi wisudawan sampai arak-arakan pada hari wisuda.
- Tautan live: wispril2026.wisudaitb.id
- Peran tim: `<ISI:>`
- Teknologi: `<ISI:>`
- Tangkapan layar: `<ISI: 3 sampai 5 file>`

### 2. Aku Masuk ITB 2026

- Deskripsi: Situs resmi Aku Masuk ITB 2026, rangkaian kegiatan pengenalan ITB
  kepada calon mahasiswa dari seluruh Indonesia, dengan puncak acara ITB Day
  pada 14 Februari 2026. Situs menangani publikasi rangkaian acara sekaligus
  alur pendaftaran kehadiran pengunjung.
- Tautan live: akumasukitb.com
- Peran tim: `<ISI:>`
- Teknologi: `<ISI:>`
- Tangkapan layar: `<ISI:>`
- Catatan: kalau alur RSVP memang kalian yang bangun, tonjolkan. Ini satu-satunya
  proyek di daftar yang membuktikan tim bisa menangani alur transaksional, bukan
  halaman statis saja.

### 3. StudentsxCEOs Grand Summit

Satu-satunya klien di luar kampus sendiri. Penting karena membuktikan tim
terbiasa bekerja dengan project manager dan pihak eksternal.

- Deskripsi: Situs Grand Summit, proyek tahunan StudentsxCEOs Bandung yang
  terdiri dari rangkaian pre-event, exhibition, konferensi utama, dan kompetisi
  studi kasus bisnis berskala nasional.
- Tautan live: `<ISI:>`
- Peran tim: `<ISI: sebutkan bahwa ada PM dari pihak klien>`
- Teknologi: `<ISI:>`
- Tangkapan layar: `<ISI:>`

### 4. OSKM ITB 2026

- Deskripsi: Situs Orientasi Studi Keluarga Mahasiswa ITB 2026, kegiatan
  penyambutan mahasiswa baru yang diikuti ribuan peserta dalam beberapa hari
  berturut-turut.
- Tema resmi: `<ISI: belum terverifikasi, isi sendiri>`
- Tautan live: `<ISI:>`
- Peran tim: `<ISI:>`
- Teknologi: `<ISI:>`
- Tangkapan layar: `<ISI:>`
- Catatan: kalau situsnya menangani beban pengunjung serentak saat hari-H,
  sebutkan. Itu bukti keandalan, bukan sekadar tampilan.

### 5. Wisuda Oktober ITB 2025

Proyek paling lama, letakkan terakhir.

- Deskripsi: Situs publikasi Wisuda Oktober ITB 2025 yang berlangsung
  23 sampai 24 Oktober 2025 di Sasana Budaya Ganesha, mewisuda hampir tiga ribu
  lulusan jenjang sarjana, magister, dan doktor.
- Tautan live: `<ISI:>`
- Peran tim: `<ISI:>`
- Teknologi: `<ISI:>`
- Tangkapan layar: `<ISI:>`

### Satu baris kredensial di bagian kontak

Tulis singkat, satu kalimat, jangan dijadikan kartu proyek:

> Selain website acara, tim juga mengerjakan aplikasi dan dasbor data. Salah
> satunya HujanNet, Juara 3 BRIN AIDeaNation 2026.

Alasannya: calon klien datang dari lingkungan BRIN, jadi ini menyambung. Tapi
proyeknya tidak relevan dengan kebutuhan dia, jadi cukup disebut, tidak
dipajang.

---

## 9. Arah visual

Arahan warna dan tipografi final akan datang dari teman FSRD. Sampai itu ada,
jangan mengunci identitas visual. Yang dikerjakan lebih dulu: struktur,
hierarki, ritme spasi, konsistensi.

Siapkan token desain terpusat (warna, skala tipografi, spasi) di satu berkas
supaya arahan FSRD nanti bisa masuk tanpa membongkar komponen.

- Token desain ditaruh di: `<ISI: path>`
- Arahan visual dari FSRD: `<ISI: isi kalau sudah ada, kalau belum tulis "belum ada">`

Satu hal yang perlu disadari: kelima proyek punya identitas visual yang
mencolok dan saling berbeda. Halaman portofolio harus **tenang dan netral**,
supaya karya-karyanya yang bicara. Kalau halaman ini ikut ramai, hasilnya
tabrakan.

Yang harus dihindari karena langsung terbaca sebagai keluaran AI generik:

- Latar krem hangat dengan serif kontras tinggi dan aksen terakota
- Latar nyaris hitam dengan satu aksen hijau menyala
- Tata letak ala koran dengan garis rambut dan sudut nol
- Penomoran 01 / 02 / 03 pada konten yang bukan urutan
- Animasi tersebar di mana-mana

Ambil satu keberanian di satu tempat saja, lalu buat sisanya disiplin.

---

## 10. Penulisan teks

- Bahasa Indonesia, semi formal, tidak kaku
- Kalimat pendek, hindari kata sifat berlebihan
- Deskripsikan apa yang dikerjakan, bukan menjual seberapa hebat
- Spesifik selalu lebih baik daripada pintar
- Jangan ada klaim yang tidak bisa dibuktikan kalau ditanya

---

## 11. Standar kualitas yang wajib dipenuhi

- Responsif sampai lebar 360px, dicek betulan, bukan diasumsikan
- Fokus keyboard terlihat jelas, termasuk pada tab galeri
- `prefers-reduced-motion` dihormati
- Semua gambar punya alt text yang berarti
- Meta title, description, dan Open Graph image terpasang dan sudah diuji
  pratinjaunya di WhatsApp
- Tidak ada tautan mati
- Lighthouse mobile: performa dan aksesibilitas minimal 90

---

## 12. Definisi selesai

1. Tautan dibuka di ponsel, dan dalam 10 detik pembaca sudah melihat satu karya
   visual yang bagus
2. Kelima proyek punya format identik dan tangkapan layar yang tajam
3. Galeri bertab berfungsi mulus di ponsel maupun desktop
4. Model kerja kolaboratif dengan FSRD terbaca tanpa perlu scroll jauh
5. Kontak mudah ditemukan dan bisa ditekan langsung
6. Pratinjau tautan di WhatsApp tampil dengan gambar yang benar
7. Tidak ada teks placeholder atau angka karangan yang tersisa

---

## 13. Di luar lingkup

Jangan dikerjakan sekarang:

- Mode gelap
- Multi bahasa
- CMS atau halaman admin
- Halaman detail per proyek
- Blog
- Formulir kontak dengan backend. Cukup tautan WhatsApp dan email langsung