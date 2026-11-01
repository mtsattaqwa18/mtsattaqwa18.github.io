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
  telp: "0812-0000-0000",
  email: "info@contoh.sch.id",
  peta: "MTs Attaqwa 18 Tanah Tinggi, Tarumajaya, Bekasi",            // kata kunci lokasi di Google Maps
  fotoHero: "img/gedung.jpg",         // foto gedung

  // ---- Layanan digital (muncul di menu dan di Beranda) ----
  layanan: [
    { nama: "Rapot Digital", ikon: "📘", ket: "Lihat nilai dan rapot siswa.", url: "https://rdmmtsattaqwa18.kkmtarumajayabekasi.sch.id/" },
    { nama: "Ujian Online",  ikon: "📝", ket: "Masuk ke ujian berbasis komputer.", url: "https://mtsattaqwa18.kkmtsbatara.com/" }
  ],

  // ---- Profil ----
  sambutan: {
    nama: "Drs. H. Asep Ahmad, M.Ed.",
    foto: "img/kepala.jpg",
    isi: "Assalamu'alaikum warahmatullahi wabarakatuh. Puji syukur kita panjatkan kepada Allah SWT. Selamat datang di website resmi MTs Attaqwa 18 Tanah Tinggi. Sejak berdiri pada tahun 1995, kami berkomitmen menghadirkan pendidikan Islam yang berkualitas bagi putra-putri masyarakat Tanah Tinggi dan sekitarnya, dengan semangat B. Six Islami: berpikir benar, berbuat baik, berhati bagus, dan Islami. Kami berharap website ini menjadi sarana informasi yang bermanfaat bagi orang tua, siswa, guru, dan masyarakat. Terima kasih atas dukungan dan doa semua pihak. Wassalamu'alaikum warahmatullahi wabarakatuh."
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
