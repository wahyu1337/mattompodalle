/**
 * Footer Component (DRY Architecture)
 */

export const renderFooter = () => {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer__grid">
                    <!-- Brand & Contact Info Column -->
                    <div class="footer__brand-col">
                        <div class="footer__logo-group">
                            <img src="/assets/takalar.png" alt="Logo Kabupaten Takalar" class="footer__logo-img">
                            <div>
                                <h3 class="footer__brand-title">Kelurahan Mattompodalle</h3>
                                <span class="footer__brand-subtitle">Kabupaten Takalar</span>
                            </div>
                        </div>
                        <p class="footer__brand-desc">
                            Portal informasi dan layanan publik resmi Pemerintah Kelurahan Mattompodalle. Melayani masyarakat dengan transparan, ramah, dan prima.
                        </p>
                        <div class="footer__contacts">
                            <div class="footer__contact-item">
                                <svg class="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>Kontak Pelayanan: <a href="tel:085240291397" class="footer__contact-link">0852-4029-1397</a> / <a href="tel:081355679147" class="footer__contact-link">0813-5567-9147</a></span>
                            </div>
                            <div class="footer__contact-item">
                                <svg class="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Senin – Jumat: 08.00 – 16.00 WITA</span>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation Links -->
                    <div class="footer__links-col">
                        <h4 class="footer__column-title">Navigasi Halaman</h4>
                        <ul class="footer__links">
                            <li><a href="/" class="footer__link">Beranda</a></li>
                            <li><a href="/profil/lurah/" class="footer__link">Profil Lurah</a></li>
                            <li><a href="/profil/struktur-organisasi/" class="footer__link">Struktur Organisasi</a></li>
                            <li><a href="/visi-misi/" class="footer__link">Visi &amp; Misi</a></li>
                            <li><a href="/informasi/data-penduduk/" class="footer__link">Data Penduduk</a></li>
                            <li><a href="/informasi/layanan/" class="footer__link">Layanan Surat Warga</a></li>
                            <li><a href="/informasi/website-lainnya/" class="footer__link">Website Terkait</a></li>
                            <li><a href="/gallery/" class="footer__link">Galeri Kegiatan</a></li>
                            <li><a href="/kontak/" class="footer__link">Kontak &amp; Layanan</a></li>
                        </ul>
                    </div>

                    <!-- Map & Location Column -->
                    <div class="footer__map-col">
                        <h4 class="footer__column-title">
                            <svg class="footer__column-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Lokasi Kantor Lurah
                        </h4>
                        <div class="footer__map-wrapper">
                            <iframe
                                src="https://maps.google.com/maps?q=Kantor+Lurah+Mattompodalle,+Takalar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                class="footer__map-iframe"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Titik Lokasi Kantor Kelurahan Mattompodalle">
                            </iframe>
                        </div>
                        <p class="footer__map-address">
                            Jl. Poros Kel. Mattompodalle, Kec. Polongbangkeng Utara, Kab. Takalar, Sulawesi Selatan 92221
                        </p>
                        <a href="https://maps.google.com/?q=Kantor+Lurah+Mattompodalle,+Takalar" target="_blank" rel="noopener noreferrer" class="footer__map-link">
                            Buka di Google Maps ↗
                        </a>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="footer__bottom">
                    <p class="footer__copyright">
                        &copy; ${new Date().getFullYear()} <strong>Pemerintah Kelurahan Mattompodalle</strong>. Seluruh Hak Cipta Dilindungi.
                    </p>
                    <div class="footer__location">
                        <svg class="footer__location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Kecamatan Polongbangkeng Utara, Kabupaten Takalar</span>
                    </div>
                </div>
            </div>
        </footer>
    `;
};

