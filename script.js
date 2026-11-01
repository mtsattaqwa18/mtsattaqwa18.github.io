const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tgl = d => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
// Gambar dengan latar cadangan: jika file foto belum ada, kotak hijau tetap tampil.
const img = (src, alt, cls = "") => `<div class="ph ${cls}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()"></div>`;
const sec = (t, h, c = "") => `<section class="wrap sec ${c}"><h2>${t}</h2>${h}</section>`;
const page = document.body.dataset.page;
const NAV = [["index","Beranda"],["profil","Profil"],["guru","Guru"],["program","Program"],["berita","Berita"],["jadwal","Jadwal"],["galeri","Galeri"],["kontak","Kontak"]];

const layananLink = l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.nama)}</a>`;
const berita = () => [...SITE.berita].sort((a, b) => b.tanggal.localeCompare(a.tanggal));
const kartuBerita = b => `<article class="card">${b.gambar ? img(b.gambar, b.judul, "thumb") : ""}<div class="pad"><time>${tgl(b.tanggal)}</time><h3>${esc(b.judul)}</h3><p>${esc(b.isi)}</p></div></article>`;

const PAGES = {
  index: () => `
    <section class="hero"><div class="wrap hero-in">
      <div><h1>${esc(SITE.lengkap)}</h1><p>${esc(SITE.slogan)}</p>
      <a class="btn" href="profil.html">Kenali madrasah kami</a></div>
      ${img(SITE.fotoHero, "Gedung " + SITE.nama, "hero-img")}
    </div></section>
    ${sec("Layanan digital", `<div class="grid g3">${SITE.layanan.map(l => `<a class="card svc pad" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="ico">${l.ikon}</span><h3>${esc(l.nama)}</h3><p>${esc(l.ket)}</p></a>`).join("")}</div>`)}
    ${sec("Sambutan kepala madrasah", `<div class="split">${img(SITE.sambutan.foto, SITE.sambutan.nama, "portrait")}<div><p>${esc(SITE.sambutan.isi)}</p><p class="who">${esc(SITE.sambutan.nama)}</p></div></div>`)}
    ${sec("Pengumuman dan berita terbaru", `<div class="grid g3">${berita().slice(0, 3).map(kartuBerita).join("")}</div><p class="more"><a href="berita.html">Lihat semua berita</a></p>`)}`,

  profil: () => sec("Profil madrasah", `
    <h3>Sejarah</h3>${[].concat(SITE.sejarah).map(p => `<p>${esc(p)}</p>`).join("")}
    <h3>Visi</h3><p>${esc(SITE.visi)}</p>
    <h3>Misi</h3><ul>${SITE.misi.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
    <h3>Sambutan kepala madrasah</h3><div class="split">${img(SITE.sambutan.foto, SITE.sambutan.nama, "portrait")}<div><p>${esc(SITE.sambutan.isi)}</p><p class="who">${esc(SITE.sambutan.nama)}</p></div></div>`, "prose"),

  guru: () => sec("Guru dan tenaga kependidikan", `<div class="grid g4">${SITE.guru.map(g => `<div class="card">${img(g.foto, g.nama, "portrait")}<div class="pad"><h3>${esc(g.nama)}</h3><p>${esc(g.jabatan)}</p></div></div>`).join("")}</div>`),

  program: () => sec("Program dan kegiatan", `<div class="grid g3">${SITE.program.map(p => `<div class="card pad"><h3>${esc(p.judul)}</h3><p>${esc(p.isi)}</p></div>`).join("")}</div>`),

  berita: () => sec("Pengumuman dan berita", `<div class="grid g3">${berita().map(kartuBerita).join("")}</div>`),

  galeri: () => sec("Galeri foto", `<div class="grid g3">${SITE.galeri.map(f => `<a href="${esc(f.src)}" target="_blank" rel="noopener" class="card">${img(f.src, f.ket, "thumb")}<p class="pad">${esc(f.ket)}</p></a>`).join("")}</div>`),

  kontak: () => sec("Kontak dan lokasi", `<div class="split"><div class="prose">
    <h3>Alamat</h3><p>${esc(SITE.alamat)}</p>
    <h3>Telepon</h3><p><a href="tel:${esc(SITE.telp)}">${esc(SITE.telp)}</a></p>
    <h3>Email</h3><p><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p></div>
    <iframe class="map" title="Peta lokasi" loading="lazy" src="https://maps.google.com/maps?q=${encodeURIComponent(SITE.peta)}&output=embed"></iframe></div>`),

  jadwal: () => sec("Jadwal pelajaran " + esc(SITE.jadwal.judul), `<label class="sel">Pilih kelas <select id="kls">${Object.keys(SITE.jadwal.kelas).map(k => `<option>${esc(k)}</option>`).join("")}</select></label><div class="scroll" id="tbl"></div><h3>Guru pengampu</h3><div class="grid g3">${SITE.jadwal.pengampu.map(([m, g]) => `<p><strong>${esc(m)}</strong><br>${esc(g)}</p>`).join("")}</div>`)
};

function tabelJadwal(k) {
  const j = SITE.jadwal, hari = Object.keys(j.kelas[k]);
  $("#tbl").innerHTML = `<table><thead><tr><th>Jam</th>${hari.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${j.jam.map((m, i) => `<tr><th>${m}</th>${hari.map(h => `<td>${esc(j.kelas[k][h][i] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

$("#head").innerHTML = `<header class="top"><div class="wrap bar">
  <a class="brand" href="index.html">${img("img/logo.png", "Logo " + SITE.nama, "logo")}<span>${esc(SITE.nama)}</span></a>
  <button class="burger" aria-label="Buka menu" aria-expanded="false">Menu</button>
  <nav id="nav">${NAV.map(([p, t]) => `<a href="${p}.html"${p === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
  <div class="dd"><button class="ddb" aria-expanded="false">Layanan Digital</button><div class="ddm">${SITE.layanan.map(layananLink).join("")}</div></div></nav></div></header>`;
$("#main").innerHTML = PAGES[page]();
$("#foot").innerHTML = `<footer><div class="wrap"><strong>${esc(SITE.lengkap)}</strong><p>${esc(SITE.alamat)}</p><p>${esc(SITE.telp)} | ${esc(SITE.email)}</p><small>© ${new Date().getFullYear()} ${esc(SITE.nama)}</small></div></footer>`;

const tog = (b, box) => b.addEventListener("click", e => { e.stopPropagation(); const o = box.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
tog($(".burger"), $("#nav")); tog($(".ddb"), $(".dd"));
document.addEventListener("click", () => { $(".dd").classList.remove("open"); $(".ddb").setAttribute("aria-expanded", false); });
if (page === "jadwal") { tabelJadwal($("#kls").value); $("#kls").onchange = e => tabelJadwal(e.target.value); }
