import '../css/style.css';

// ============================================
// DATA PERSYARATAN LAYANAN PUBLIK KELURAHAN
// ============================================
const SERVICES_DATA = {
    'ktp-kk': {
        title: 'Surat Pengantar KTP / Kartu Keluarga',
        badge: 'Kependudukan',
        desc: 'Surat pengantar resmi dari Kelurahan Mattompodalle untuk pembuatan atau perubahan data KTP-el dan Kartu Keluarga (KK) ke Disdukcapil Kab. Takalar.',
        requirements: [
            'Surat Pengantar dari Kepala Lingkungan / RT setempat',
            'Fotokopi Kartu Keluarga (KK) lama',
            'Fotokopi Akta Kelahiran atau Ijazah Terakhir',
            'Surat Kehilangan dari Kepolisian (jika KTP/KK hilang)',
            'Pas foto terbaru ukuran 3x4 (2 lembar)'
        ],
        steps: [
            'Minta surat pengantar dari Kepala Lingkungan wilayah Anda.',
            'Bawa seluruh berkas persyaratan ke Kantor Lurah Mattompodalle pada jam kerja (08.00 - 15.30 WITA).',
            'Petugas kelurahan memverifikasi berkas dan memproses surat pengantar bertanda tangan Lurah/Sekretaris.',
            'Lanjutkan proses perekaman / pencetakan di Kantor Camat Polut atau Disdukcapil Takalar.'
        ],
        waMessage: 'Halo Admin Kelurahan Mattompodalle, saya ingin menanyakan pengurusan Surat Pengantar KTP / KK.'
    },
    'sktm': {
        title: 'Surat Keterangan Tidak Mampu (SKTM)',
        badge: 'Bansos & Pendidikan',
        desc: 'Surat keterangan untuk keperluan beasiswa, keringanan biaya pendidikan/sekolah, permohonan BPJS PBI, serta bantuan sosial.',
        requirements: [
            'Surat Pengantar dari Kepala Lingkungan setempat',
            'Fotokopi Kartu Keluarga (KK) dan KTP Pemohon / Orang Tua',
            'Foto kondisi rumah tampak depan & ruang keluarga',
            'Surat pernyataan tidak mampu bermaterai (disediakan di kantor lurah)',
            'Surat pengantar sekolah/kampus (khusus permohonan beasiswa)'
        ],
        steps: [
            'Lapor kepada Kepala Lingkungan untuk mendapatkan pengantar verifikasi lapangan.',
            'Serahkan berkas ke meja Pelayanan Terpadu Kelurahan Mattompodalle.',
            'Petugas melakukan pencocokan data kependudukan dan basis data DTKS/P3KE.',
            'Penerbitan surat keterangan SKTM bertanda tangan resmi Lurah.'
        ],
        waMessage: 'Halo Admin Kelurahan Mattompodalle, saya ingin mengurus Surat Keterangan Tidak Mampu (SKTM).'
    },
    'sku': {
        title: 'Surat Keterangan Usaha (SKU) / UMKM',
        badge: 'Ekonomi & UMKM',
        desc: 'Surat keterangan legalitas usaha mikro/kecil untuk keperluan permodalan bank (KUR), bantuan UMKM, dan perizinan.',
        requirements: [
            'Surat Pengantar dari Kepala Lingkungan tempat usaha beroperasi',
            'Fotokopi KTP dan Kartu Keluarga pemilik usaha',
            'Foto aktivitas tempat usaha / produk UMKM',
            'Keterangan jenis usaha dan perkiraan modal/lama operasional'
        ],
        steps: [
            'Ambil surat pengantar usaha dari Kepala Lingkungan.',
            'Bawa foto usaha dan identitas ke Kantor Lurah Mattompodalle.',
            'Petugas memverifikasi kelayakan usaha di wilayah Kelurahan Mattompodalle.',
            'Penerbitan SKU yang dapat digunakan untuk perbankan / instansi terkait.'
        ],
        waMessage: 'Halo Admin Kelurahan Mattompodalle, saya ingin mengurus Surat Keterangan Usaha (SKU).'
    },
    'domisili': {
        title: 'Surat Keterangan Domisili',
        badge: 'Kependudukan',
        desc: 'Surat keterangan tempat tinggal resmi bagi warga berdomisili di Kelurahan Mattompodalle.',
        requirements: [
            'Surat Pengantar dari Kepala Lingkungan setempat',
            'Fotokopi KTP & Kartu Keluarga (KK)',
            'Surat Pindah (jika pindah dari luar daerah Kab. Takalar)'
        ],
        steps: [
            'Konfirmasi keberadaan domisili ke Kepala Lingkungan.',
            'Datang ke Kantor Lurah dengan membawa berkas identitas.',
            'Petugas memverifikasi alamat tinggal dan menerbitkan Surat Domisili.'
        ],
        waMessage: 'Halo Admin Kelurahan Mattompodalle, saya ingin mengurus Surat Keterangan Domisili.'
    },
    'nikah': {
        title: 'Surat Pengantar Nikah (Model N1 - N4)',
        badge: 'Pernikahan',
        desc: 'Surat pengantar kelurahan sebagai syarat wajib pendaftaran pernikahan di Kantor Urusan Agama (KUA) Kec. Polut.',
        requirements: [
            'Surat Pengantar dari Imam Lingkungan / Kepala Lingkungan',
            'Fotokopi KTP & KK Calon Pengantin serta Orang Tua / Wali',
            'Fotokopi Ijazah / Akta Kelahiran Calon Pengantin',
            'Pas foto latar biru ukuran 2x3 (4 lembar) dan 4x6 (2 lembar)',
            'Akta Cerai / Keterangan Kematian (jika status Duda / Janda)'
        ],
        steps: [
            'Menghubungi Imam Lingkungan setempat untuk pengecekan berkas awal.',
            'Menyerahkan berkas ke Kantor Lurah Mattompodalle untuk pengisian formulir N1-N4.',
            'Penerbitan berkas Model N resmi dari Kelurahan.',
            'Bawa berkas pengantar ke Kantor Urusan Agama (KUA) Kec. Polongbangkeng Utara.'
        ],
        waMessage: 'Halo Admin Kelurahan Mattompodalle, saya ingin menanyakan syarat Surat Pengantar Nikah (Model N).'
    },
    'kematian-kelahiran': {
        title: 'Surat Keterangan Kematian & Kelahiran',
        badge: 'Catatan Sipil',
        desc: 'Penerbitan surat pengantar pelaporan peristiwa kelahiran dan kematian warga untuk pembaruan akta sipil.',
        requirements: [
            'Surat Keterangan dari Rumah Sakit / Bidan / Kepala Lingkungan',
            'Fotokopi KTP & KK Pelapor / Orang Tua / Ahli Waris',
            'KTP asli almarhum (untuk pengurusan kematian)'
        ],
        steps: [
            'Lapor peristiwa ke Kepala Lingkungan dalam waktu maksimal 14 hari.',
            'Bawa bukti kelahiran/kematian ke Kantor Lurah Mattompodalle.',
            'Petugas menerbitkan surat keterangan resmi untuk pengurusan Akta di Disdukcapil.'
        ],
        waMessage: 'Halo Admin Kelurahan Mattompodalle, saya ingin mengurus Surat Keterangan Kematian / Kelahiran.'
    },
    'pustu-kesehatan': {
        title: 'Layanan Kesehatan Pustu & Posyandu',
        badge: 'Kesehatan Masyarakat',
        desc: 'Layanan pos kesehatan pembantu (Pustu) dan jadwal 5 Posyandu aktif di setiap lingkungan Kelurahan Mattompodalle.',
        requirements: [
            'Kartu BPJS Kesehatan / KIS / KTP',
            'Buku KIA (Kesehatan Ibu & Anak) bagi ibu hamil dan balita'
        ],
        steps: [
            'Pustu buka setiap hari kerja untuk pemeriksaan dasar dan rujukan.',
            'Posyandu di 5 Lingkungan dilaksanakan secara rutin setiap bulan sesuai jadwal kader kesehatan.',
            'Konsultasi kesehatan darurat dapat dikoordinasikan melalui kader Posyandu lingkungan.'
        ],
        waMessage: 'Halo Kader Kesehatan Kelurahan Mattompodalle, saya ingin menanyakan jadwal Posyandu / Layanan Pustu.'
    }
};

// ============================================
// MAIN INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader removal
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('loaded');
            setTimeout(() => preloader.remove(), 500);
        });
    }

    // 2. Hamburger & Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close when clicking links
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link, .mobile-menu__sublink');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (link.classList.contains('dropdown__toggle')) return;
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close on desktop resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1080) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // 3. Fixed Header Scroll Shadow
    const headerFixedWrap = document.getElementById('header-fixed-wrap') || document.querySelector('.header-fixed-wrap') || document.querySelector('.header');
    if (headerFixedWrap) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 15) {
                headerFixedWrap.classList.add('scrolled');
            } else {
                headerFixedWrap.classList.remove('scrolled');
            }
        });
    }

    // 4. Modal Persyaratan Layanan
    initServiceModals();

    // 5. Stat Counter Animation
    initCounterAnimation();

    // 6. Gallery Filter & Lightbox
    initGallery();

    // 7. Info Page Tabs (if present)
    initInfoTabs();

    // 8. Floating WhatsApp Help Desk Button
    initFloatingWhatsApp();
});

// ============================================
// MODAL PERSYARATAN LAYANAN LOGIC
// ============================================
function initServiceModals() {
    let backdrop = document.getElementById('service-modal-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'service-modal-backdrop';
        backdrop.className = 'modal-backdrop';
        backdrop.style.display = 'none';
        backdrop.innerHTML = `
            <div class="modal-dialog" role="dialog" aria-modal="true">
                <div class="modal-header">
                    <div>
                        <span id="modal-service-badge" class="section-tag" style="margin-bottom:0.25rem;">Layanan</span>
                        <h3 id="modal-service-title" class="modal-title">Persyaratan Layanan</h3>
                    </div>
                    <button class="modal-close-btn" id="modal-close-btn" aria-label="Tutup Modal">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="modal-service-desc" style="color: var(--clr-text-secondary); font-size: 0.95rem; line-height: 1.6;"></p>
                    
                    <div>
                        <h4 style="font-size: 1rem; font-weight: 700; color: var(--clr-text); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--clr-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            Berkas Persyaratan yang Diperlukan:
                        </h4>
                        <div id="modal-req-list" class="req-list"></div>
                    </div>

                    <div style="background: var(--clr-surface-alt); border-radius: var(--radius-md); padding: 1rem;">
                        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--clr-text); margin-bottom: 0.4rem;">
                            ℹ️ Alur Pelayanan:
                        </h4>
                        <ol id="modal-step-list" style="list-style-type: decimal; padding-left: 1.25rem; font-size: 0.88rem; color: var(--clr-text-secondary); line-height: 1.6;"></ol>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-service-detail" id="modal-cancel-btn">Tutup</button>
                    <a href="#" id="modal-wa-btn" target="_blank" class="btn-hero-primary" style="padding: 0.55rem 1.1rem; font-size: 0.88rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Hubungi Petugas via WhatsApp
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(backdrop);
    }

    const closeBtn = document.getElementById('modal-close-btn');
    const cancelBtn = document.getElementById('modal-cancel-btn');

    const closeModal = () => {
        backdrop.classList.remove('open');
        setTimeout(() => {
            if (!backdrop.classList.contains('open')) {
                backdrop.style.display = 'none';
            }
        }, 250);
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
    });

    // Attach click triggers
    document.querySelectorAll('[data-service-key]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const key = btn.getAttribute('data-service-key');
            const data = SERVICES_DATA[key];
            if (!data) return;

            document.getElementById('modal-service-title').textContent = data.title;
            document.getElementById('modal-service-badge').textContent = data.badge;
            document.getElementById('modal-service-desc').textContent = data.desc;

            const reqContainer = document.getElementById('modal-req-list');
            reqContainer.innerHTML = data.requirements.map(req => `
                <div class="req-item">
                    <span class="req-item-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>${req}</span>
                </div>
            `).join('');

            const stepContainer = document.getElementById('modal-step-list');
            stepContainer.innerHTML = data.steps.map(step => `<li>${step}</li>`).join('');

            const waBtn = document.getElementById('modal-wa-btn');
            const encodedMsg = encodeURIComponent(data.waMessage);
            waBtn.href = `https://wa.me/6281355679147?text=${encodedMsg}`;

            backdrop.style.display = 'flex';
            // force reflow
            void backdrop.offsetWidth;
            backdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounterAnimation() {
    const counterElements = document.querySelectorAll('[data-counter-target]');
    if (counterElements.length === 0) return;

    const runCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const duration = 1600;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(target * easeProgress);

            el.textContent = currentVal.toLocaleString('id-ID') + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString('id-ID') + suffix;
            }
        };

        requestAnimationFrame(update);
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        counterElements.forEach(el => observer.observe(el));
    } else {
        counterElements.forEach(el => runCounter(el));
    }
}

// ============================================
// GALLERY FILTER & LIGHTBOX LOGIC
// ============================================
function initGallery() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Lightbox modal
    let lightbox = document.getElementById('gallery-lightbox');
    if (galleryItems.length > 0 && !lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'gallery-lightbox';
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <button class="lightbox-close" id="lightbox-close">&times;</button>
            <img src="" alt="Galeri Kelurahan" class="lightbox-img" id="lightbox-img">
        `;
        document.body.appendChild(lightbox);

        const closeLightbox = () => lightbox.classList.remove('open');
        document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    document.getElementById('lightbox-img').src = img.src;
                    lightbox.classList.add('open');
                }
            });
        });
    }
}

// ============================================
// INFO PAGE TABS LOGIC
// ============================================
function initInfoTabs() {
    const tabBtns = document.querySelectorAll('.info-tab-btn');
    const tabPanels = document.querySelectorAll('.info-tab-panel');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetId = btn.getAttribute('data-tab-target');
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }
}

// ============================================
// FLOATING WHATSAPP HELP DESK
// ============================================
function initFloatingWhatsApp() {
    if (document.querySelector('.floating-wa')) return;

    const waButton = document.createElement('a');
    waButton.href = 'https://wa.me/6281355679147?text=Halo%20Admin%20Kelurahan%20Mattompodalle,%20saya%20ingin%20menanyakan%20informasi/layanan%20kelurahan.';
    waButton.target = '_blank';
    waButton.className = 'floating-wa';
    waButton.setAttribute('aria-label', 'Hubungi Layanan Kelurahan via WhatsApp');
    waButton.title = 'Layanan WhatsApp Kantor Lurah';
    waButton.innerHTML = `
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px;max-width:28px;max-height:28px;display:block;">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    `;
    document.body.appendChild(waButton);
}
