/* ============================================================
   DATA WEBSITE - edit file ini dengan Notepad, lalu simpan.
   Aturan: teks selalu di dalam tanda kutip "...", dan tiap
   blok { ... } dipisah koma. Jangan hapus tanda , [ ] { }
   ============================================================ */
const SITE = {
  nama: "MTs Attaqwa 18",
  lengkap: "Madrasah Tsanawiyah Attaqwa 18",
  slogan: "Berilmu, berakhlak, dan berprestasi.",
  alamat: "Jl. KH. Moh. Musa, Kp. Tanah Tinggi, Kel. Setia Asih, Kec. Tarumajaya, Kab. Bekasi",
  telp: "0812-0000-0000",
  email: "info@contoh.sch.id",
  peta: "MTs Attaqwa 18 Tanah Tinggi, Tarumajaya, Bekasi",            // kata kunci lokasi di Google Maps
  fotoHero: "img/gedung.jpg",         // foto gedung

  // ---- Layanan digital (muncul di menu dan di Beranda) ----
  layanan: [
    { nama: "Rapot Digital", ikon: "📘", ket: "Lihat nilai dan rapot siswa.", url: "https://contoh.com/rapot" },
    { nama: "Ujian Online",  ikon: "📝", ket: "Masuk ke ujian berbasis komputer.", url: "https://contoh.com/ujian" },
    { nama: "Presensi",      ikon: "✅", ket: "Rekap kehadiran siswa dan guru.", url: "https://contoh.com/presensi" }
  ],

  // ---- Profil ----
  sambutan: {
    nama: "Drs. H. Asep Ahmad, M.Ed.",
    foto: "img/kepala.jpg",
    isi: "Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di website resmi MTs Attaqwa 18. Kami berupaya menyiapkan generasi yang kuat ilmunya dan baik akhlaknya. Silakan ganti teks sambutan ini dengan sambutan asli."
  },
  sejarah: [
    "MTs Attaqwa 18 Tanah Tinggi berdiri pada tahun 1995 sebagai wujud komitmen para Asatidzah dan tokoh masyarakat Kp. Tanah Tinggi, Kec. Tarumajaya, Bekasi dalam menyediakan pendidikan Islam berkualitas di wilayah Tanah Tinggi dan sekitarnya. Berawal dari semangat gotong royong dan kepedulian terhadap pendidikan agama, madrasah ini terus berkembang dan beradaptasi dengan tuntutan zaman.",
    "Sejak awal berdirinya, MTs Attaqwa 18 telah menjadi pusat pengembangan karakter dan ilmu pengetahuan bagi para siswa. Dengan landasan nilai-nilai Islam, kami bertekad untuk terus melahirkan generasi yang tidak hanya cerdas secara akademik, tetapi juga memiliki integritas moral dan spiritual yang tinggi.",
    "Perjalanan panjang madrasah ini diwarnai dengan berbagai dinamika, namun semangat untuk terus memberikan yang terbaik bagi pendidikan tidak pernah padam. Kami bersyukur atas dukungan tiada henti dari masyarakat, alumni, dan pemerintah yang telah membersamai kami hingga saat ini."
  ],
  visi: "B. Six Islami: Berpikir Benar, Berbuat Baik, Berhati bagus, dan Islami.",
  misi: ["Pembelajaran terencana logis.", "Pembiasaan pribadi etis.", "Pembentukan pribadi estetis.", "Pelaksanaan syari'at islamis."],

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
        "Nurhasan, S.Pd"
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
        "Hj. Nurfadillah, S.Ag"
      ],
      [
        "PPKn",
        "Moh. Maid, S.Pd"
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
