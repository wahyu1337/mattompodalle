# AGENT INSTRUCTIONS: Website Kelurahan Mattompodalle

Dokumen ini adalah acuan kerja AI Coding Agent untuk repo `wahyu1337/mattompodalle` (Website Profil dan Informasi Kelurahan Mattompodalle, Kabupaten Takalar).

---

## 1. Ringkasan Proyek & Filosofi Desain
Website ini berfungsi sebagai portal informasi publik, layanan warga, dan profil pemerintahan Kelurahan Mattompodalle, Kecamatan Polongbangkeng Utara, Kabupaten Takalar.

**Prinsip Utama:**
- **DRY (Don't Repeat Yourself):** Header, Navbar, dan Footer di-generate melalui komponen JavaScript (`src/js/components/header.js` dan `src/js/components/footer.js`). Dilarang menulis ulang markup navbar/footer di setiap file HTML. Dilarang menaruh `<style>` inline yang duplikasi.
- **Single Source of Truth:** Semua data aparatur, demografi kependudukan, layanan surat warga, berita, fasilitas, dan galeri disimpan di `src/data/*.json`.
- **Fungsional & Informatif:** Hirarki informasi jelas, navigasi intuitif bagi masyarakat umum, waktu muat halaman instan (< 2 detik).
- **Mobile-First & Responsive:** Mayoritas pengguna membuka via ponsel.

---

## 2. Tech Stack & Arsitektur
- **Core:** HTML5 Semantik, CSS3 (Modern Flexbox/Grid + CSS Variables), ES6+ JavaScript Modular.
- **Bundler:** Webpack (HtmlWebpackPlugin, CopyWebpackPlugin, css-loader, style-loader).
- **Penyimpanan Konten Statis:** JSON files (`/src/data/*.json`) untuk struktur data berita, aparat, demografi, fasilitas, dan layanan surat warga.

---

## 3. Struktur Direktori Standar (DRY Architecture)
Agent wajib menjaga dan mengarahkan kode sesuai struktur ini:

```text
mattompodalle/
├── .agents/
│   └── rules/
│       └── agent-instructions.md
├── AGENT.md
├── package.json
├── webpack.config.js
├── dist/                      # Hasil build produksi (jangan diedit manual)
└── src/
    ├── assets/
    │   ├── beranda/
    │   ├── galleri/
    │   ├── Profil/
    │   ├── takalar.png
    │   └── pak lurah.svg
    ├── data/                  # Konten terpisah dari UI (DRY Data)
    │   ├── aparat.json        # Data struktur perangkat kelurahan
    │   ├── berita.json        # Berita & artikel lokal
    │   ├── fasilitas.json     # Data fasilitas kesehatan, pendidikan, dll.
    │   ├── galeri.json        # Data galeri foto kegiatan
    │   ├── kontak.json        # Kontak & peta lokasi
    │   ├── layanan.json       # Prosedur surat menyurat & bansos
    │   └── profil.json        # Visi-misi, sejarah, peta & demografi
    ├── js/
    │   ├── components/        # Modul UI yang bisa dipakai ulang
    │   │   ├── dynamicRenderer.js
    │   │   ├── floatingWa.js
    │   │   ├── footer.js
    │   │   ├── header.js
    │   │   ├── lightbox.js
    │   │   └── preloader.js
    │   ├── utils/             # Helper fungsi (DOM, formatters)
    │   │   ├── dom.js
    │   │   └── helpers.js
    │   └── index.js           # Entry point utama Webpack
    ├── styles/
    │   ├── base/              # Reset, typography, variables.css
    │   │   ├── reset.css
    │   │   ├── typography.css
    │   │   └── variables.css
    │   ├── components/        # Styling per komponen
    │   │   ├── cards.css
    │   │   ├── floating-wa.css
    │   │   ├── footer.css
    │   │   ├── forms.css
    │   │   ├── gallery.css
    │   │   ├── header.css
    │   │   ├── hero.css
    │   │   ├── org-chart.css
    │   │   └── preloader.css
    │   └── main.css           # Root stylesheet import
    ├── index.html             # Beranda
    ├── profil/
    │   ├── lurah/index.html   # Profil Lurah
    │   └── struktur-organisasi/index.html # Struktur Organisasi
    ├── visi-misi/index.html   # Visi & Misi
    ├── informasi/index.html   # Informasi & Layanan Warga
    ├── gallery/index.html     # Galeri Dokumentasi
    └── kontak/index.html      # Kontak & Lokasi
```

---

## 4. Standar Alur Kerja Agent (SOP)
1. Selalu periksa `src/data/*.json` sebelum menambahkan atau memperbarui informasi.
2. Saat menambahkan komponen baru, pisahkan CSS ke `src/styles/components/[nama].css` dan daftarkan ke `src/styles/main.css`.
3. Gunakan class utilities & CSS variables yang sudah didefinisikan di `src/styles/base/variables.css`.
4. Setelah melakukan perubahan, jalankan `npm run build` untuk memverifikasi tidak ada build error.
