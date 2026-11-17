import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  ExternalLink,
  Factory,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorCog,
  Palette,
  PenTool,
  Phone,
  Play,
  Quote,
  Send,
  ShoppingBag,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const SCHOOL = {
  name: "SMK Pondok Petir",
  displayName: "SMK PONDOK PETIR",
  foundation: "Yayasan Nurul Huda",
  institutionalIdentity: "SMK Pondok Petir — Yayasan Nurul Huda, Depok, Jawa Barat (NPSN: 79319640)",
  npsn: "79319640",
  address: "Jl. Kesadaran III RT.02/01, Pondok Petir, Kec. Bojongsari, Kota Depok, Jawa Barat",
  shortAddress: "Jl. Kesadaran III RT.02/01 Pondok Petir — Bojongsari — Kota Depok",
  phone: "0812-1307-8709",
  whatsapp: "6281213078709",
  tagline: "Mencetak Kreator Visual & Marketer Andal Siap Kerja",
};

const waLink = `https://wa.me/${SCHOOL.whatsapp}`;

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil Sekolah", href: "#profil" },
  { label: "Program Keahlian", href: "#program" },
  { label: "Karya Siswa", href: "#karya" },
  { label: "Berita & Prestasi", href: "#berita" },
  { label: "Kontak", href: "#kontak" },
];

const highlights = [
  { icon: Factory, label: "Praktik berbasis industri", detail: "Belajar lewat proyek nyata" },
  { icon: Layers3, label: "Teaching factory", detail: "Karya siswa jadi portofolio" },
  { icon: MonitorCog, label: "Fasilitas lab modern", detail: "Ruang tumbuh yang relevan" },
  { icon: BriefcaseBusiness, label: "Bimbingan kerja", detail: "Siap melangkah setelah lulus" },
];

const programs = {
  grafika: {
    label: "Teknik Grafika",
    eyebrow: "Kreatif • Visual • Produksi",
    title: "Ubah ide menjadi visual yang punya daya.",
    description:
      "Menguasai proses kreatif desain visual hingga produksi cetak modern dan kemasan produk—dari brief pertama sampai karya siap tampil di pasar.",
    accent: "cyan",
    icon: Palette,
    competencies: [
      "Desain Grafis (Adobe Photoshop, Illustrator, CorelDRAW)",
      "Pre-Press & Tata Letak",
      "Teknik Cetak Offset & Digital Printing",
      "Desain Kemasan (Packaging)",
      "Fotografi Produk",
    ],
    facilities: ["Lab Komputer Desain Grafis", "Studio Fotografi", "Workshop Produksi Cetak & Finishing"],
    careers: [
      "Graphic Designer",
      "Operator Pre-Press & Mesin Cetak",
      "Packaging Designer",
      "Layouter Media",
      "Wirausaha Percetakan",
    ],
  },
  pemasaran: {
    label: "Pemasaran",
    eyebrow: "Strategi • Konten • Konversi",
    title: "Bangun brand yang ditemukan, dipilih, dan diingat.",
    description:
      "Menguasai strategi pemasaran konvensional dan digital untuk memenangkan pasar di era e-commerce—berani mencoba, membaca data, dan menciptakan peluang.",
    accent: "amber",
    icon: ShoppingBag,
    competencies: [
      "Digital Marketing & Social Media Ads",
      "Content Creation & Copywriting",
      "Manajemen E-Commerce & Live Streaming",
      "Pengelolaan Bisnis Ritel",
      "Komunikasi & Negosiasi Bisnis",
    ],
    facilities: ["Business Center / Mini Market Praktik", "Studio Live Streaming & Konten", "Lab Pemasaran Digital"],
    careers: [
      "Digital Marketer",
      "Social Media Specialist",
      "E-Commerce & Marketplace Manager",
      "Sales Executive",
      "Entrepreneur",
    ],
  },
} as const;

type ProgramKey = keyof typeof programs;
type GalleryFilter = "Semua Karya" | "Teknik Grafika" | "Pemasaran";

type GalleryProject = {
  id: number;
  category: Exclude<GalleryFilter, "Semua Karya">;
  title: string;
  type: string;
  image: string;
  summary: string;
  details: string;
  meta: string;
};

const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    category: "Teknik Grafika",
    title: "Kemasan Kopi Lereng Depok",
    type: "Desain Kemasan UMKM",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
    summary: "Menyegarkan identitas produk lokal lewat sistem visual yang konsisten.",
    details: "Tim siswa mengembangkan logo, palet warna, mockup, hingga dieline kemasan untuk brand kopi lokal. Proyek ini melatih ketelitian desain sekaligus kemampuan berkomunikasi dengan klien UMKM.",
    meta: "Kelas XI Teknik Grafika • 2025",
  },
  {
    id: 2,
    category: "Teknik Grafika",
    title: "Poster Festival Sekolah",
    type: "Branding & Poster Event",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85",
    summary: "Eksperimen warna cyan-magenta untuk menghidupkan agenda kreatif siswa.",
    details: "Karya poster memadukan eksplorasi tipografi, komposisi asimetris, dan teknik pre-press. Setiap kelompok mempresentasikan alasan visual di balik keputusan desainnya.",
    meta: "Kelas X Teknik Grafika • 2025",
  },
  {
    id: 3,
    category: "Teknik Grafika",
    title: "Studio Foto Produk",
    type: "Foto & Art Direction",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
    summary: "Membuat produk sederhana terlihat siap masuk katalog digital.",
    details: "Siswa merancang set, mengatur pencahayaan, memilih angle, lalu melakukan retouching untuk menghasilkan seri foto produk yang siap digunakan di marketplace.",
    meta: "Teaching Factory • 2025",
  },
  {
    id: 4,
    category: "Pemasaran",
    title: "Live Selling Produk Lokal",
    type: "Kampanye Live Streaming",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    summary: "Dari script, set studio, sampai membaca metrik penjualan secara real-time.",
    details: "Siswa berperan sebagai host, creative producer, dan admin marketplace. Kampanye disusun dengan target audiens, promo, dan call-to-action yang dapat diukur.",
    meta: "Kelas XI Pemasaran • 2025",
  },
  {
    id: 5,
    category: "Pemasaran",
    title: "Business Center Sekolah",
    type: "Retail Business Project",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    summary: "Belajar melayani pelanggan, menata produk, dan menjaga ritme operasional.",
    details: "Business Center menjadi ruang praktik untuk pengelolaan stok, visual merchandising, pelayanan pelanggan, dan pencatatan penjualan sederhana.",
    meta: "Unit Produksi • 2025",
  },
  {
    id: 6,
    category: "Pemasaran",
    title: "Konten Kuliner Bojongsari",
    type: "Social Media Campaign",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85",
    summary: "Menyusun konten yang dekat dengan audiens dan punya tujuan bisnis.",
    details: "Siswa membuat content calendar, copywriting, reels pendek, dan laporan insight untuk membantu usaha kuliner sekitar sekolah menjangkau pelanggan baru.",
    meta: "Kelas X Pemasaran • 2025",
  },
];

const newsItems = [
  {
    category: "Kunjungan Industri",
    date: "12 Februari 2025",
    title: "Melihat ritme kerja industri percetakan dan ritel dari dekat",
    description: "Siswa belajar membaca alur produksi, budaya kerja, dan standar pelayanan langsung dari pelaku industri.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    color: "cyan",
  },
  {
    category: "Pengembangan Siswa",
    date: "28 Januari 2025",
    title: "Pelatihan digital marketing: dari insight menjadi aksi",
    description: "Workshop intensif mengajak siswa mengubah data audiens menjadi ide konten yang relevan dan terukur.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
    color: "amber",
  },
  {
    category: "Kegiatan Sekolah",
    date: "18 Desember 2024",
    title: "Praktik kerja lapangan dimulai dengan portofolio yang berani",
    description: "Pembekalan PKL dirancang agar siswa siap berkomunikasi, bertanggung jawab, dan tampil profesional.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    color: "magenta",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "section-heading centered" : "section-heading"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function LogoMark() {
  return (
    <img className="logo-image" src="/logo.png" alt="Logo resmi SMK Pondok Petir — Yayasan Nurul Huda" />
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("grafika");
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("Semua Karya");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [visionOpen, setVisionOpen] = useState(true);
  const [missionOpen, setMissionOpen] = useState(false);
  const [successData, setSuccessData] = useState<{ name: string; waUrl: string } | null>(null);
  const [formError, setFormError] = useState("");

  const activeProgramData = programs[activeProgram];
  const ProgramIcon = activeProgramData.icon;
  const filteredProjects = galleryProjects.filter(
    (project) => galleryFilter === "Semua Karya" || project.category === galleryFilter,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const school = String(data.get("school") ?? "").trim();
    const program = String(data.get("program") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();

    if (!name || !school || !program || !phone || !address) {
      setFormError("Mohon lengkapi semua kolom agar tim PPDB dapat segera membantu.");
      return;
    }

    const message = `Halo Admin PPDB ${SCHOOL.name}, saya ingin mendaftar.\n\nNama calon siswa: ${name}\nAsal sekolah: ${school}\nPilihan jurusan: ${program}\nNomor WhatsApp: ${phone}\nAlamat domisili: ${address}\n\nMohon informasi tahap berikutnya. Terima kasih.`;
    const whatsappUrl = `${waLink}?text=${encodeURIComponent(message)}`;
    setSuccessData({ name, waUrl: whatsappUrl });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-item"><span className="topbar-dot cyan-dot" /> NPSN: {SCHOOL.npsn}</div>
          <div className="topbar-item topbar-location"><Building2 size={13} /> {SCHOOL.institutionalIdentity}</div>
          <a className="topbar-item topbar-phone" href={waLink} target="_blank" rel="noreferrer"><Phone size={13} /> Telp/WA: {SCHOOL.phone}</a>
        </div>
      </div>

      <header className="navbar-wrap">
        <nav className="container navbar" aria-label="Navigasi utama">
          <a className="brand" href="#beranda" aria-label="SMK Pondok Petir beranda">
            <LogoMark />
            <span className="brand-copy"><strong>{SCHOOL.displayName}</strong><small>{SCHOOL.foundation}</small></span>
          </a>
          <div className="desktop-nav">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <a className="button button-amber navbar-cta" href="#ppdb">Daftar PPDB <ArrowUpRight size={16} /></a>
          <button className="mobile-menu-button" type="button" aria-label="Buka menu" onClick={() => setMobileMenuOpen(true)}><Menu size={24} /></button>
        </nav>
        {mobileMenuOpen ? (
          <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-drawer" onClick={(event) => event.stopPropagation()}>
              <div className="mobile-drawer-head"><a className="brand" href="#beranda" onClick={() => setMobileMenuOpen(false)}><LogoMark /><span className="brand-copy"><strong>{SCHOOL.displayName}</strong><small>{SCHOOL.foundation}</small></span></a><button className="icon-button" type="button" aria-label="Tutup menu" onClick={() => setMobileMenuOpen(false)}><X size={22} /></button></div>
              <div className="mobile-nav-links">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}<ChevronRight size={16} /></a>)}</div>
              <a className="button button-amber mobile-drawer-cta" href="#ppdb" onClick={() => setMobileMenuOpen(false)}>Daftar PPDB <ArrowUpRight size={16} /></a>
              <p className="drawer-note">Punya pertanyaan? <a href={waLink} target="_blank" rel="noreferrer">Chat admin PPDB</a></p>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="beranda" className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="status-pill"><span className="live-dot" /> PPDB TELAH DIBUKA <span className="pill-divider" /> Terdaftar Resmi NPSN {SCHOOL.npsn}</div>
              <h1>Wujudkan karier impian di <em>industri kreatif</em> & bisnis digital.</h1>
              <p className="hero-description">Pendidikan vokasi berbasis praktik industri di Bojongsari, Depok dengan fokus keahlian Teknik Grafika dan Pemasaran.</p>
              <div className="hero-actions"><a className="button button-amber button-large" href="#ppdb">Daftar PPDB Online <ArrowUpRight size={18} /></a><a className="text-link" href="#program">Lihat program keahlian <ChevronRight size={17} /></a></div>
              <div className="hero-proof"><div className="proof-avatars"><span>RD</span><span>NA</span><span>FA</span><span className="proof-more">+</span></div><div><strong>Belajar dengan karya nyata.</strong><small>Bangun portofolio sejak hari pertama.</small></div></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1500&q=90" alt="Siswa bekerja di studio desain kreatif" /><div className="image-label"><span className="label-kicker">PROJECT BASED</span><strong>Learn by making.</strong></div></div>
              <div className="hero-floating-card floating-one"><div className="floating-icon cyan-bg"><PenTool size={18} /></div><span><strong>Teknik Grafika</strong><small>Visual that matters</small></span></div>
              <div className="hero-floating-card floating-two"><div className="floating-icon amber-bg"><Megaphone size={18} /></div><span><strong>Pemasaran</strong><small>Ideas that convert</small></span></div>
              <div className="hero-sticker"><Sparkles size={16} /><span>Berani<br /><b>Berkarya.</b></span></div>
            </div>
          </div>
          <div className="container highlights-strip">{highlights.map(({ icon: Icon, label, detail }) => <div className="highlight-item" key={label}><Icon size={20} /><span><strong>{label}</strong><small>{detail}</small></span></div>)}</div>
        </section>

        <section id="profil" className="section section-light profile-section">
          <div className="container profile-grid">
            <div className="profile-visual"><div className="profile-image-main"><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85" alt="Kegiatan belajar siswa di kelas" /></div><div className="profile-note"><Quote size={20} /><p>"Sekolah bukan hanya tempat mencari nilai. Ini ruang untuk menemukan arah dan keberanian."</p><span>— Semangat belajar SMK Pondok Petir</span></div><div className="profile-number"><strong>01</strong><span>Profil<br />Sekolah</span></div></div>
            <div className="profile-content"><SectionHeading eyebrow="Tentang kami" title="Tempat ide tumbuh menjadi keahlian." description="SMK Pondok Petir — Yayasan Nurul Huda, Depok, Jawa Barat (NPSN: 79319640) hadir untuk memberdayakan generasi muda di Pondok Petir, Bojongsari, Depok, dan sekitarnya. Kami memadukan karakter, keterampilan nyata, dan pola pikir wirausaha agar setiap siswa siap berkarya serta siap kerja." /><div className="accordion-list"><div className={`accordion-item ${visionOpen ? "is-open" : ""}`}><button type="button" onClick={() => setVisionOpen(!visionOpen)}><span><span className="accordion-index">01</span>Visi sekolah</span><ChevronDown size={19} /></button>{visionOpen ? <div className="accordion-body">Menjadi SMK pilihan yang mencetak kreator visual dan marketer andal, berkarakter, adaptif terhadap teknologi, serta mampu menciptakan peluang di industri kreatif dan bisnis digital.</div> : null}</div><div className={`accordion-item ${missionOpen ? "is-open" : ""}`}><button type="button" onClick={() => setMissionOpen(!missionOpen)}><span><span className="accordion-index">02</span>Misi sekolah</span><ChevronDown size={19} /></button>{missionOpen ? <div className="accordion-body"><ul><li>Menjalankan pembelajaran berbasis proyek dan praktik industri.</li><li>Menguatkan karakter, komunikasi, kolaborasi, dan etos kerja.</li><li>Mengembangkan unit produksi sebagai ruang belajar dan kewirausahaan.</li></ul></div> : null}</div></div><a className="text-link dark-link" href="#program">Kenali program keahlian kami <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section id="program" className="section program-section">
          <div className="container"><div className="program-header"><SectionHeading eyebrow="Program keahlian" title="Pilih arena untuk mulai berkarya." description="Dua jalur vokasi, satu tujuan: membekali kamu dengan kompetensi yang dibutuhkan dunia kerja dan keberanian untuk terus berkembang." /><div className="program-tabs" role="tablist" aria-label="Program keahlian"><button type="button" className={activeProgram === "grafika" ? "program-tab active cyan-tab" : "program-tab"} onClick={() => setActiveProgram("grafika")} role="tab" aria-selected={activeProgram === "grafika"}><span className="tab-number">01</span><Palette size={19} />Teknik Grafika</button><button type="button" className={activeProgram === "pemasaran" ? "program-tab active amber-tab" : "program-tab"} onClick={() => setActiveProgram("pemasaran")} role="tab" aria-selected={activeProgram === "pemasaran"}><span className="tab-number">02</span><ShoppingBag size={19} />Pemasaran</button></div></div>
            <div className={`program-panel ${activeProgramData.accent}-panel`}><div className="program-intro"><div className="program-icon-large"><ProgramIcon size={32} /></div><span className="eyebrow">{activeProgramData.eyebrow}</span><h3>{activeProgramData.title}</h3><p>{activeProgramData.description}</p><a className="button button-dark" href="#ppdb">Pilih program ini <ArrowUpRight size={16} /></a></div><div className="program-details"><div className="detail-block"><h4><span className="detail-dot" />Kompetensi inti</h4><ul>{activeProgramData.competencies.map((item) => <li key={item}><CircleCheck size={16} />{item}</li>)}</ul></div><div className="detail-block"><h4><span className="detail-dot" />Fasilitas belajar</h4><ul>{activeProgramData.facilities.map((item) => <li key={item}><CircleCheck size={16} />{item}</li>)}</ul></div><div className="detail-block career-block"><h4><span className="detail-dot" />Prospek karier</h4><div className="career-pills">{activeProgramData.careers.map((item) => <span key={item}>{item}</span>)}</div></div></div></div>
          </div>
        </section>

        <section id="karya" className="section gallery-section section-light">
          <div className="container"><div className="gallery-header"><SectionHeading eyebrow="Karya siswa & teaching factory" title="Bukan sekadar tugas. Ini jejak karya." description="Lihat bagaimana siswa menerjemahkan brief menjadi visual, strategi, dan pengalaman yang punya nilai nyata." /><a className="text-link dark-link desktop-gallery-link" href={waLink} target="_blank" rel="noreferrer">Tanya tentang kegiatan siswa <ArrowUpRight size={16} /></a></div><div className="filter-row" role="group" aria-label="Filter karya">{(["Semua Karya", "Teknik Grafika", "Pemasaran"] as GalleryFilter[]).map((filter) => <button type="button" key={filter} className={galleryFilter === filter ? "filter-button active" : "filter-button"} onClick={() => setGalleryFilter(filter)}>{filter}</button>)}</div><div className="gallery-grid">{filteredProjects.map((project) => <button className="gallery-card" key={project.id} type="button" onClick={() => setSelectedProject(project)}><div className="gallery-card-image"><img src={project.image} alt={project.title} /><span className={`category-tag ${project.category === "Pemasaran" ? "tag-amber" : "tag-cyan"}`}>{project.category}</span><span className="gallery-view-icon"><ArrowUpRight size={17} /></span></div><div className="gallery-card-copy"><span>{project.type}</span><h3>{project.title}</h3><p>{project.summary}</p></div></button>)}</div></div>
        </section>

        <section id="ppdb" className="section ppdb-section">
          <div className="container ppdb-grid"><div className="ppdb-copy"><SectionHeading eyebrow="Penerimaan peserta didik baru" title="Langkah kecil hari ini. Karier besar nanti." description="Isi data singkatnya, lanjutkan percakapan dengan admin PPDB kami di WhatsApp, dan dapatkan arahan untuk tahap berikutnya." /><div className="admission-steps"><div className="step-item active"><span>01</span><div><strong>Isi formulir online</strong><small>Data awal calon siswa</small></div></div><div className="step-line" /><div className="step-item"><span>02</span><div><strong>Konfirmasi via WhatsApp</strong><small>Admin siap membantu</small></div></div><div className="step-line" /><div className="step-item"><span>03</span><div><strong>Verifikasi berkas</strong><small>Datang ke sekolah</small></div></div><div className="step-line" /><div className="step-item"><span>04</span><div><strong>Daftar ulang</strong><small>Resmi jadi bagian kami</small></div></div></div><div className="ppdb-help"><MessageCircle size={20} /><span><strong>Butuh bantuan mengisi?</strong><small>Chat admin PPDB sekarang</small></span><a href={waLink} target="_blank" rel="noreferrer"><ArrowUpRight size={17} /></a></div></div>
            <div className="form-card"><div className="form-card-top"><div><span className="eyebrow">Formulir cepat</span><h3>Mulai perjalananmu</h3></div><div className="form-card-badge"><Sparkles size={15} /> Gratis</div></div><form onSubmit={handleSubmit} noValidate><label>Nama lengkap calon siswa<input name="name" type="text" placeholder="Contoh: Nabila Aulia" autoComplete="name" /></label><label>Asal sekolah (SMP/MTs)<input name="school" type="text" placeholder="Contoh: SMP Negeri 12 Depok" /></label><label>Pilihan jurusan<select name="program" defaultValue=""><option value="" disabled>Pilih program keahlian</option><option value="Teknik Grafika">Teknik Grafika</option><option value="Pemasaran">Pemasaran</option></select></label><label>Nomor WhatsApp siswa / orang tua<input name="phone" type="tel" placeholder="08xx-xxxx-xxxx" autoComplete="tel" /></label><label>Alamat domisili<textarea name="address" placeholder="Kecamatan dan kota tempat tinggal" rows={3} /></label>{formError ? <p className="form-error" role="alert">{formError}</p> : null}<button className="button button-amber submit-button" type="submit">Kirim data & buka WhatsApp <Send size={17} /></button><p className="form-disclaimer">Dengan mengirim data, kamu setuju untuk dihubungi tim PPDB SMK Pondok Petir.</p></form></div>
          </div>
        </section>

        <section id="berita" className="section news-section section-light"><div className="container"><div className="news-header"><SectionHeading eyebrow="Berita & kegiatan" title="Selalu ada cerita baru untuk dibagikan." description="Ikuti kegiatan, praktik, dan momen belajar yang membuat pengalaman di SMK Pondok Petir terasa dekat dengan dunia nyata." /><a className="text-link dark-link desktop-gallery-link" href={waLink} target="_blank" rel="noreferrer">Tanya kabar terbaru <ArrowUpRight size={16} /></a></div><div className="news-grid">{newsItems.map((item) => <article className="news-card" key={item.title}><div className="news-image"><img src={item.image} alt={item.title} /><span className={`news-label ${item.color}`}>{item.category}</span></div><div className="news-copy"><div className="news-date"><CalendarDays size={14} />{item.date}</div><h3>{item.title}</h3><p>{item.description}</p><a href={waLink} target="_blank" rel="noreferrer" className="news-link">Baca selengkapnya <ArrowUpRight size={15} /></a></div></article>)}</div></div></section>

        <section id="kontak" className="contact-section"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow light-eyebrow">Temui kami</span><h2>Siap menjawab rasa ingin tahumu.</h2><p>Datang, kenali lingkungan sekolah, dan ngobrol langsung tentang pilihan masa depanmu. Kami menunggu kamu di Pondok Petir.</p><div className="contact-details"><div className="contact-detail"><MapPin size={19} /><span><strong>Alamat sekolah</strong><small>{SCHOOL.address}</small></span></div><div className="contact-detail"><Phone size={19} /><span><strong>Telepon / WhatsApp</strong><a href={waLink} target="_blank" rel="noreferrer">{SCHOOL.phone}</a></span></div><div className="contact-detail"><Mail size={19} /><span><strong>NPSN</strong><small>{SCHOOL.npsn}</small></span></div></div><a className="button button-amber" href={waLink} target="_blank" rel="noreferrer">Hubungi admin sekolah <ArrowUpRight size={16} /></a></div><div className="map-card"><div className="map-overlay"><div className="map-pin"><MapPin size={22} /></div><div><strong>SMK Pondok Petir</strong><span>Bojongsari, Depok</span></div><a href="https://www.google.com/maps/search/?api=1&query=SMK+Pondok+Petir+Bojongsari+Depok" target="_blank" rel="noreferrer" aria-label="Buka lokasi di Google Maps"><ExternalLink size={16} /></a></div><iframe title="Peta lokasi SMK Pondok Petir" src="https://www.google.com/maps?q=Pondok+Petir+Bojongsari+Depok&output=embed" loading="lazy" /></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-top"><div className="footer-brand"><a className="brand brand-light" href="#beranda"><LogoMark /><span className="brand-copy"><strong>{SCHOOL.displayName}</strong><small>{SCHOOL.foundation}</small></span></a><p>{SCHOOL.tagline}</p><div className="footer-socials"><a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="mailto:info@smkpondokpetir.sch.id" aria-label="Email"><Mail size={17} /></a><a href="#beranda" aria-label="Kembali ke atas"><ArrowUpRight size={17} /></a></div></div><div className="footer-column"><h4>Jelajahi</h4><a href="#profil">Profil sekolah</a><a href="#program">Program keahlian</a><a href="#karya">Karya siswa</a><a href="#berita">Berita & kegiatan</a></div><div className="footer-column"><h4>Mulai sekarang</h4><a href="#ppdb">Daftar PPDB online</a><a href={waLink} target="_blank" rel="noreferrer">Chat admin PPDB</a><a href="#kontak">Kunjungi sekolah</a></div><div className="footer-column footer-contact"><h4>Kontak</h4><span>{SCHOOL.institutionalIdentity}</span><span>{SCHOOL.phone}</span><span>{SCHOOL.shortAddress}</span></div></div><div className="container footer-bottom"><span>© 2025 {SCHOOL.name}. Semua hak dilindungi.</span><span>{SCHOOL.institutionalIdentity}</span></div></footer>

      <a className="floating-wa" href={waLink} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp SMK Pondok Petir"><MessageCircle size={24} /><span>Chat PPDB</span></a>

      {selectedProject ? <div className="modal-backdrop" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Tutup detail karya" onClick={() => setSelectedProject(null)}><X size={20} /></button><div className="modal-image"><img src={selectedProject.image} alt={selectedProject.title} /></div><div className="modal-copy"><span className={`category-tag ${selectedProject.category === "Pemasaran" ? "tag-amber" : "tag-cyan"}`}>{selectedProject.category}</span><span className="modal-type">{selectedProject.type}</span><h3 id="project-title">{selectedProject.title}</h3><p>{selectedProject.details}</p><div className="modal-meta"><Check size={15} /> {selectedProject.meta}</div><a className="button button-dark" href={waLink} target="_blank" rel="noreferrer">Tanya tentang program <ArrowUpRight size={16} /></a></div></div></div> : null}

      {successData ? <div className="modal-backdrop" onClick={() => setSuccessData(null)}><div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Tutup konfirmasi" onClick={() => setSuccessData(null)}><X size={20} /></button><div className="success-icon"><Check size={28} /></div><span className="eyebrow">Data berhasil disiapkan</span><h3 id="success-title">Sampai jumpa di WhatsApp, {successData.name.split(" ")[0]}.</h3><p>Ringkasan pendaftaran sudah dibuat. Jika WhatsApp belum terbuka otomatis, gunakan tombol di bawah untuk mengirimkannya ke admin PPDB.</p><a className="button button-amber" href={successData.waUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Kirim ke WhatsApp <ArrowUpRight size={16} /></a><button className="modal-secondary" type="button" onClick={() => setSuccessData(null)}>Kembali ke halaman</button></div></div> : null}
    </div>
  );
}
