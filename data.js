/* ============================================================
   DATA WEBSITE - edit file ini dengan Notepad, lalu simpan.
   Aturan: teks selalu di dalam tanda kutip "...", dan tiap
   blok { ... } dipisah koma. Jangan hapus tanda , [ ] { }
   ============================================================ */
const SITE = {
  nama: "MTs Attaqwa 18",
  lengkap: "Madrasah Tsanawiyah Attaqwa 18",
  slogan: "Berilmu, berakhlak, dan berprestasi.",
  alamat: "Jl. KH. Moh. Musa, Kp. Tanah Tinggi, Kel. Setia Asih, Kec. Tarumajaya, Kab. Bekasi, Kode Pos 17215",
  telp: "+62 882-9102-0525",
  email: "mtsattaqwa1825@gmail.com",
  peta: "MTs Attaqwa 18 Tanah Tinggi, Tarumajaya, Bekasi",            // kata kunci lokasi di Google Maps
  fotoHero: "img/gedung.jpg",         // foto di bagian atas Beranda
  ketFotoHero: "Ilustrasi rencana gedung baru",   // keterangan di bawah foto; hapus isinya ("") jika sudah memakai foto asli

  // ---- Layanan digital (muncul di menu dan di Beranda) ----
  layanan: [
    { nama: "Rapot Digital", ikon: "📘", ket: "Lihat nilai dan rapot siswa.", url: "https://rdmmtsattaqwa18.kkmtarumajayabekasi.sch.id/" },
    { nama: "Ujian Online",  ikon: "📝", ket: "Masuk ke ujian berbasis komputer.", url: "https://mtsattaqwa18.kkmtsbatara.com/" }
  ],

  // ---- Profil ----
  sambutan: {
    nama: "Drs. H. Asep Ahmad, M.Ed.",
    foto: "img/kepala.jpg",
    isi: "Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di website MTs Attaqwa 18 Tanah Tinggi. Madrasah ini berdiri tahun 1995 karena kepedulian para ustadz dan warga Tanah Tinggi yang ingin anak-anaknya mendapat pendidikan agama yang baik. Itu yang terus kami jaga sampai sekarang: anak-anak belajar ilmu umum dan ilmu agama, dan dibiasakan berakhlak baik dalam keseharian. Lewat website ini, orang tua dan calon siswa bisa mengenal madrasah kami, sementara siswa dan guru bisa melihat jadwal dan pengumuman dengan mudah. Kalau ada yang ingin ditanyakan, silakan datang langsung atau hubungi kami. Wassalamu'alaikum warahmatullahi wabarakatuh."
  },
  sejarah: [
    "MTs Attaqwa 18 Tanah Tinggi berdiri pada tahun 1995 sebagai wujud komitmen para Asatidzah dan tokoh masyarakat Kp. Tanah Tinggi, Kec. Tarumajaya, Bekasi dalam menyediakan pendidikan Islam berkualitas di wilayah Tanah Tinggi dan sekitarnya. Berawal dari semangat gotong royong dan kepedulian terhadap pendidikan agama, madrasah ini terus berkembang dan beradaptasi dengan tuntutan zaman.",
    "Sejak awal berdirinya, MTs Attaqwa 18 telah menjadi pusat pengembangan karakter dan ilmu pengetahuan bagi para siswa. Dengan landasan nilai-nilai Islam, kami bertekad untuk terus melahirkan generasi yang tidak hanya cerdas secara akademik, tetapi juga memiliki integritas moral dan spiritual yang tinggi.",
    "Perjalanan panjang madrasah ini diwarnai dengan berbagai dinamika, namun semangat untuk terus memberikan yang terbaik bagi pendidikan tidak pernah padam. Kami bersyukur atas dukungan tiada henti dari masyarakat, alumni, dan pemerintah yang telah membersamai kami hingga saat ini."
  ],
  visi: "B. Six Islami: Berpikir Benar, Berbuat Baik, Berhati bagus, dan Islami.",
  misi: ["Pembelajaran terencana logis.", "Pembiasaan pribadi etis.", "Pembentukan pribadi estetis.", "Pelaksanaan syari'at islamis."],

  // ---- Guru dan tenaga kependidikan ----
  // Foto: simpan di folder img/ dengan nama sesuai tulisan setelah img/ (format .jpg)
  guru: [
    { nama: "H. Nur Ali, HS", jabatan: "Ketua Yayasan Attaqwa 24 Cabang Tanah Tinggi", foto: "img/nur-ali.jpg" },
    { nama: "Drs. H. Asep Ahmad, M.Ed", jabatan: "Kepala Madrasah, Guru SKI", foto: "img/asep-ahmad.jpg" },
    { nama: "Dra. Hj. Tati Hartati", jabatan: "Wakil Kepala Madrasah, Guru Akidah Akhlak", foto: "img/tati-hartati.jpg" },
    { nama: "H. Nanang Haryanto, S.Ag", jabatan: "Kepala Tata Usaha", foto: "img/nanang.jpg" },
    { nama: "Hj. Nurfadilah, S.Ag", jabatan: "Bendahara, Wali Kelas VIII, Guru Qur'an Hadis", foto: "img/nurfadilah.jpg" },
    { nama: "Sifah Fauziah, M.Pd", jabatan: "Waka Kurikulum, Guru TIK", foto: "img/sifah.jpg" },
    { nama: "Ridhan Fauzi, S.Th.I", jabatan: "Waka Kesiswaan, Wali Kelas IX, Guru Fikih dan PJOK", foto: "img/ridhan.jpg" },
    { nama: "Nurhasan, S.Pd.I", jabatan: "PKM Bid. Humas, Guru Bahasa Arab", foto: "img/nurhasan.jpg" },
    { nama: "Juanda, SE", jabatan: "PKM Bid. Sarpras, Guru IPA", foto: "img/juanda.jpg" },
    { nama: "Moh. Maid, S.Pd.I", jabatan: "Bimbingan Konseling, Guru PPKn", foto: "img/maid.jpg" },
    { nama: "Asarih, M.Pd", jabatan: "Operator", foto: "img/asarih.jpg" },
    { nama: "Muntama, S.Ag", jabatan: "Wali Kelas VII, Guru Bahasa Indonesia", foto: "img/muntama.jpg" },
    { nama: "Ryan Hidayatullah", jabatan: "Guru Tauhid dan IPS", foto: "img/ryan.jpg" },
    { nama: "Fafidyatul Hidayah", jabatan: "Guru Matematika dan Seni Budaya", foto: "img/fafidyatul.jpg" },
    { nama: "Atiakah Juariyah", jabatan: "Guru Bahasa Inggris", foto: "img/atiakah.jpg" },
    { nama: "Nurhasanah", jabatan: "Guru BTQ dan Tahsin", foto: "img/nurhasanah.jpg" }
  ],

  // ---- Program dan kegiatan ----
  program: [
    { judul: "Tahfidz Al-Qur'an", isi: "Setoran hafalan harian dengan bimbingan guru." },
    { judul: "Muhadoroh", isi: "Latihan berpidato dan tampil di depan umum setiap hari Sabtu. Siswa bergantian menjadi pembawa acara, pembaca ayat suci, dan penceramah untuk melatih keberanian dan kepercayaan diri." },
    { judul: "Tawasulan dan Marhabanan", isi: "Pembacaan tawasul, shalawat, dan marhabanan bersama. Kegiatan ini menanamkan kecintaan kepada Nabi Muhammad SAW serta melestarikan tradisi keagamaan di lingkungan madrasah." },
    { judul: "Kepramukaan", isi: "Latihan rutin setiap pekan untuk melatih disiplin, kemandirian, kepemimpinan, dan kerja sama." },
    { judul: "Futsal", isi: "Latihan dan pertandingan untuk menjaga kebugaran, membangun sportivitas, dan melatih kerja sama tim." },
    { judul: "Renang", isi: "Latihan renang untuk menyehatkan tubuh dan membekali siswa dengan keterampilan serta keselamatan di air." },
    { judul: "Olahraga dan Seni", isi: "Voli dan hadroh sebagai wadah bakat siswa." }
  ],

  // ---- Pengumuman dan berita ----
  // tanggal: TAHUN-BULAN-HARI (untuk mengurutkan). waktu: tulisan tanggal yang tampil di website.
  kategori: ["Akademik", "Kalender", "Libur", "Kegiatan"],   // daftar penyaring; pilih salah satu untuk tiap berita
  berita: [
    { judul: "Asesmen Sumatif Akhir Semester I", kategori: "Akademik", tanggal: "2026-11-30", waktu: "30 November - 5 Desember 2026", isi: "Asesmen Sumatif Akhir Semester I dilaksanakan pada 30 November sampai 5 Desember 2026.", gambar: "" },
    { judul: "Penyerahan Laporan Hasil Belajar Semester I", kategori: "Akademik", tanggal: "2026-12-19", waktu: "Sabtu, 19 Desember 2026", isi: "Penyerahan Laporan Hasil Belajar (rapor) Semester I dilaksanakan pada Sabtu, 19 Desember 2026.", gambar: "" },
    { judul: "Libur Semester I", kategori: "Libur", tanggal: "2026-12-21", waktu: "21 Desember 2026 - 3 Januari 2027", isi: "Libur Semester I berlangsung dari 21 Desember 2026 sampai 3 Januari 2027.", gambar: "" },
    { judul: "Awal Masuk Sekolah Semester II", kategori: "Kalender", tanggal: "2027-01-04", waktu: "Senin, 4 Januari 2027", isi: "Kegiatan belajar mengajar Semester II dimulai pada Senin, 4 Januari 2027.", gambar: "" }
  ],

  // ---- Galeri ----
  galeri: [
    { src: "img/gedung.jpg", ket: "Ilustrasi rencana gedung baru" },
    { src: "img/pramuka.jpg", ket: "Kegiatan Pramuka" },
    { src: "img/renang.jpg", ket: "Kegiatan Renang" },
    { src: "img/ziarah.jpg", ket: "Ziarah Makam Pahlawan" },
    { src: "img/suasana.jpg", ket: "Suasana Madrasah" },
    { src: "img/lab-komputer.jpg", ket: "Laboratorium Komputer" }
  ],

  // ---- Slide kegiatan siswa di Beranda (bergeser otomatis tiap 5 detik) ----
  // Tambah atau hapus foto di sini. Foto yang kecil atau berbentuk tegak tetap ditampilkan utuh.
  slide: [
    { src: "img/ziarah.jpg", judul: "Ziarah Makam Pahlawan", ket: "Kegiatan ziarah siswa." },
    { src: "img/renang.jpg", judul: "Kegiatan Renang", ket: "Siswa berlatih dan bermain air bersama." },
    { src: "img/lab-komputer.jpg", judul: "Laboratorium Komputer", ket: "Kegiatan siswa di laboratorium komputer." },
    { src: "img/pramuka.jpg", judul: "Kegiatan Pramuka", ket: "Latihan dan kegiatan kepramukaan siswa." },
    { src: "img/suasana.jpg", judul: "Suasana Madrasah", ket: "Lingkungan belajar di madrasah." }
  ],

  // ---- Jadwal pelajaran ----
  // Urutan isi tiap hari mengikuti urutan jam.
  jadwal: {
    "judul": "Semester Ganjil 2026-2027",
    "jam": [
      "06.45-07.00",
      "07.00-07.40",
      "07.40-08.20",
      "08.20-09.00",
      "09.00-09.30",
      "09.30-10.00",
      "10.00-10.40",
      "10.40-11.10",
      "11.10-11.50",
      "11.50-12.20",
      "12.20"
    ],
    "kelas": {
      "VII": {
        "Senin": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "BTQ",
          "BTQ",
          "SKI",
          "SKI",
          "Istirahat",
          "Matematika",
          "Matematika",
          "Bahasa Indonesia",
          "Bahasa Indonesia",
          "Pulang sekolah"
        ],
        "Selasa": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Tahsin",
          "Tahsin",
          "Qur'an Hadis",
          "Qur'an Hadis",
          "Istirahat",
          "Bahasa Inggris",
          "Bahasa Inggris",
          "PPKn",
          "PPKn",
          "Pulang sekolah"
        ],
        "Rabu": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "PJOK",
          "PJOK",
          "IPA",
          "IPA",
          "Istirahat",
          "IPS",
          "IPS",
          "Matematika",
          "Matematika",
          "Pulang sekolah"
        ],
        "Kamis": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Bahasa Inggris",
          "Bahasa Inggris",
          "Fikih",
          "Fikih",
          "Istirahat",
          "Bahasa Indonesia",
          "Bahasa Indonesia",
          "Bahasa Arab",
          "Bahasa Arab",
          "Pulang sekolah"
        ],
        "Jumat": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Akidah Akhlak",
          "Akidah Akhlak",
          "IPA",
          "IPA",
          "Istirahat",
          "IPS",
          "IPS",
          "Pulang sekolah",
          "",
          ""
        ],
        "Sabtu": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "TIK",
          "TIK",
          "Seni Budaya",
          "Seni Budaya",
          "Istirahat",
          "Tauhid",
          "Tauhid",
          "Muhadoroh",
          "Muhadoroh",
          "Pulang sekolah"
        ]
      },
      "VIII": {
        "Senin": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Bahasa Inggris",
          "Bahasa Inggris",
          "Qur'an Hadis",
          "Qur'an Hadis",
          "Istirahat",
          "Bahasa Indonesia",
          "Bahasa Indonesia",
          "IPS",
          "IPS",
          "Pulang sekolah"
        ],
        "Selasa": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Akidah Akhlak",
          "Akidah Akhlak",
          "SKI",
          "SKI",
          "Istirahat",
          "Matematika",
          "Matematika",
          "IPS",
          "IPS",
          "Pulang sekolah"
        ],
        "Rabu": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "BTQ",
          "BTQ",
          "PJOK",
          "PJOK",
          "Istirahat",
          "Matematika",
          "Matematika",
          "PPKn",
          "PPKn",
          "Pulang sekolah"
        ],
        "Kamis": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Fikih",
          "Fikih",
          "Bahasa Inggris",
          "Bahasa Inggris",
          "Istirahat",
          "IPA",
          "IPA",
          "Tauhid",
          "Tauhid",
          "Pulang sekolah"
        ],
        "Jumat": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "IPA",
          "IPA",
          "Bahasa Indonesia",
          "Bahasa Indonesia",
          "Istirahat",
          "Bahasa Arab",
          "Bahasa Arab",
          "Pulang sekolah",
          "",
          ""
        ],
        "Sabtu": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Tahsin",
          "Tahsin",
          "TIK",
          "TIK",
          "Istirahat",
          "Seni Budaya",
          "Seni Budaya",
          "Muhadoroh",
          "Muhadoroh",
          "Pulang sekolah"
        ]
      },
      "IX": {
        "Senin": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "IPS",
          "IPS",
          "Bahasa Inggris",
          "Bahasa Inggris",
          "Istirahat",
          "SKI",
          "SKI",
          "Tauhid",
          "Tauhid",
          "Pulang sekolah"
        ],
        "Selasa": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Bahasa Indonesia",
          "Bahasa Indonesia",
          "Bahasa Inggris",
          "Bahasa Inggris",
          "Istirahat",
          "Fikih",
          "Fikih",
          "Matematika",
          "Matematika",
          "Pulang sekolah"
        ],
        "Rabu": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Bahasa Arab",
          "Bahasa Arab",
          "Qur'an Hadis",
          "Qur'an Hadis",
          "Istirahat",
          "PJOK",
          "PJOK",
          "IPA",
          "IPA",
          "Pulang sekolah"
        ],
        "Kamis": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "BTQ",
          "BTQ",
          "Akidah Akhlak",
          "Akidah Akhlak",
          "Istirahat",
          "Matematika",
          "Matematika",
          "IPA",
          "IPA",
          "Pulang sekolah"
        ],
        "Jumat": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Tahsin",
          "Tahsin",
          "IPS",
          "IPS",
          "Istirahat",
          "PPKn",
          "PPKn",
          "Pulang sekolah",
          "",
          ""
        ],
        "Sabtu": [
          "Tadarus Al-Qur'an / Sholat Duha",
          "Seni Budaya",
          "Seni Budaya",
          "Bahasa Indonesia",
          "Bahasa Indonesia",
          "Istirahat",
          "TIK",
          "TIK",
          "Muhadoroh",
          "Muhadoroh",
          "Pulang sekolah"
        ]
      }
    },
    "pengampu": [
      [
        "Tauhid",
        "Ryan Hidayatullah"
      ],
      [
        "Bahasa Indonesia",
        "Muntama, S.Ag"
      ],
      [
        "IPA",
        "Juanda, SE"
      ],
      [
        "IPS",
        "Ryan Hidayatullah"
      ],
      [
        "Fikih",
        "Ridhan Fauzi, S.Th.I"
      ],
      [
        "Bahasa Arab",
        "Nurhasan, S.Pd.I"
      ],
      [
        "Matematika",
        "Fafidyatul Hidayah"
      ],
      [
        "Bahasa Inggris",
        "Atiakah Juariyah"
      ],
      [
        "Akidah Akhlak",
        "Dra. Hj. Tati Hartati"
      ],
      [
        "BTQ",
        "Nurhasanah"
      ],
      [
        "TIK",
        "Sifah Fauziah, M.Pd"
      ],
      [
        "Qur'an Hadis",
        "Hj. Nurfadilah, S.Ag"
      ],
      [
        "PPKn",
        "Moh. Maid, S.Pd.I"
      ],
      [
        "Tahsin",
        "Nurhasanah"
      ],
      [
        "SKI",
        "Drs. H. Asep Ahmad, M.Ed"
      ],
      [
        "PJOK",
        "Ridhan Fauzi, S.Th.I"
      ],
      [
        "Seni Budaya",
        "Fafidyatul Hidayah"
      ]
    ]
  }
};
