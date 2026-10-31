/* ============================================================
   DATA WEBSITE - edit file ini dengan Notepad, lalu simpan.
   Aturan: teks selalu di dalam tanda kutip "...", dan tiap
   blok { ... } dipisah koma. Jangan hapus tanda , [ ] { }
   ============================================================ */
const SITE = {
  nama: "MTs Attaqwa 18",
  lengkap: "Madrasah Tsanawiyah Attaqwa 18",
  slogan: "Berilmu, berakhlak, dan berprestasi.",
  alamat: "Tulis alamat lengkap madrasah di sini",
  telp: "0812-0000-0000",
  email: "info@contoh.sch.id",
  peta: "MTs Attaqwa 18",            // kata kunci lokasi di Google Maps
  fotoHero: "img/gedung.jpg",         // foto gedung

  // ---- Layanan digital (muncul di menu dan di Beranda) ----
  layanan: [
    { nama: "Rapot Digital", ikon: "📘", ket: "Lihat nilai dan rapot siswa.", url: "https://contoh.com/rapot" },
    { nama: "Ujian Online",  ikon: "📝", ket: "Masuk ke ujian berbasis komputer.", url: "https://contoh.com/ujian" },
    { nama: "Presensi",      ikon: "✅", ket: "Rekap kehadiran siswa dan guru.", url: "https://contoh.com/presensi" }
  ],

  // ---- Profil ----
  sambutan: {
    nama: "Nama Kepala Madrasah, S.Pd.",
    foto: "img/kepala.jpg",
    isi: "Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di website resmi MTs Attaqwa 18. Kami berupaya menyiapkan generasi yang kuat ilmunya dan baik akhlaknya. Silakan ganti teks sambutan ini dengan sambutan asli."
  },
  sejarah: "Tulis sejarah singkat berdirinya madrasah di sini. Bisa lebih dari satu kalimat.",
  visi: "Tulis visi madrasah di sini.",
  misi: ["Misi pertama madrasah.", "Misi kedua madrasah.", "Misi ketiga madrasah."],

  // ---- Guru dan tenaga kependidikan ----
  guru: [
    { nama: "Nama Guru 1, S.Pd.",  jabatan: "Guru Matematika", foto: "img/guru1.jpg" },
    { nama: "Nama Guru 2, S.Ag.",  jabatan: "Guru Akidah Akhlak", foto: "img/guru2.jpg" },
    { nama: "Nama Staf 1",         jabatan: "Tata Usaha", foto: "img/guru3.jpg" }
  ],

  // ---- Program dan kegiatan ----
  program: [
    { judul: "Tahfidz Al-Qur'an", isi: "Setoran hafalan harian dengan bimbingan guru." },
    { judul: "Pramuka", isi: "Latihan rutin setiap pekan untuk melatih disiplin dan kerja sama." },
    { judul: "Olahraga dan Seni", isi: "Futsal, voli, dan hadroh sebagai wadah bakat siswa." }
  ],

  // ---- Pengumuman dan berita (tanggal: TAHUN-BULAN-HARI) ----
  berita: [
    { judul: "Contoh pengumuman penting", tanggal: "2026-10-25", isi: "Ganti dengan isi pengumuman. Salin satu blok ini untuk menambah pengumuman baru.", gambar: "" },
    { judul: "Contoh berita kegiatan", tanggal: "2026-10-18", isi: "Ganti dengan isi berita. Foto boleh dikosongkan atau diisi, misalnya img/berita1.jpg.", gambar: "img/berita1.jpg" }
  ],

  // ---- Galeri ----
  galeri: [
    { src: "img/galeri1.jpg", ket: "Kegiatan 1" },
    { src: "img/galeri2.jpg", ket: "Kegiatan 2" },
    { src: "img/galeri3.jpg", ket: "Kegiatan 3" }
  ],

  // ---- Jadwal pelajaran ----
  // Urutan isi tiap hari mengikuti urutan jam.
  jadwal: {
    jam: ["07.00-07.40", "07.40-08.20", "08.20-09.00", "09.00-09.20", "09.20-10.00"],
    kelas: {
      "VII A": {
        Senin:  ["Upacara", "Matematika", "Matematika", "Istirahat", "IPA"],
        Selasa: ["Bahasa Indonesia", "Bahasa Indonesia", "Fikih", "Istirahat", "IPS"],
        Rabu:   ["Bahasa Inggris", "Bahasa Inggris", "Qur'an Hadis", "Istirahat", "PJOK"],
        Kamis:  ["IPA", "IPA", "Bahasa Arab", "Istirahat", "Matematika"],
        Jumat:  ["Tahfidz", "Tahfidz", "Akidah Akhlak", "Istirahat", "Seni Budaya"]
      }
    }
  }
};
