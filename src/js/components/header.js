/**
 * Header & Navbar Component (DRY Architecture)
 */

export const renderHeader = () => {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;

    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');

    const isActive = (href) => {
        if (href === '/') {
            return currentPath === '/' || currentPath === '' || currentPath.endsWith('/src/');
        }
        return currentPath.includes(href);
    };

    headerContainer.innerHTML = `
        <header class="header" id="header">
            <div class="container header__inner">
                <!-- Home / Back Button -->
                <a href="/" class="header__home-btn" aria-label="Beranda" title="Kembali ke Beranda">
                    <svg class="header__home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </a>

                <!-- Brand / Logo -->
                <a href="/" class="header__brand">
                    <img src="/assets/takalar.png" alt="Logo Kabupaten Takalar" class="header__logo-img">
                    <div>
                        <span class="header__title">Kelurahan Mattompodalle</span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="nav" aria-label="Navigasi Utama">
                    <ul class="nav__list">
                        <li>
                            <a href="/" class="nav__link ${isActive('/') ? 'active' : ''}">Beranda</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="nav__link dropdown__toggle ${isActive('/profil/') ? 'active' : ''}">
                                Profil
                                <svg class="dropdown__toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </a>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">
                                    <a href="/profil/lurah/" class="dropdown__link ${isActive('/profil/lurah/') ? 'active' : ''}">Profil Lurah</a>
                                </li>
                                <li class="dropdown__item">
                                    <a href="/profil/struktur-organisasi/" class="dropdown__link ${isActive('/profil/struktur-organisasi/') ? 'active' : ''}">Struktur Organisasi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/visi-misi/" class="nav__link ${isActive('/visi-misi/') ? 'active' : ''}">Visi &amp; Misi</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="nav__link dropdown__toggle ${isActive('/informasi/') ? 'active' : ''}">
                                Informasi
                                <svg class="dropdown__toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </a>
                            <ul class="dropdown__menu">
                                <li class="dropdown__item">
                                    <a href="/informasi/data-penduduk/" class="dropdown__link ${isActive('/informasi/data-penduduk/') ? 'active' : ''}">Data Penduduk</a>
                                </li>
                                <li class="dropdown__item">
                                    <a href="/informasi/layanan/" class="dropdown__link ${isActive('/informasi/layanan/') ? 'active' : ''}">Layanan</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/gallery/" class="nav__link ${isActive('/gallery/') ? 'active' : ''}">Galeri</a>
                        </li>
                        <li>
                            <a href="/kontak/" class="nav__link ${isActive('/kontak/') ? 'active' : ''}">Kontak</a>
                        </li>
                    </ul>
                </nav>

                <!-- Mobile Hamburger Button -->
                <button class="hamburger" id="hamburger" aria-label="Buka Menu Navigasi" aria-expanded="false">
                    <span class="hamburger__line"></span>
                    <span class="hamburger__line"></span>
                    <span class="hamburger__line"></span>
                </button>
            </div>
        </header>

        <!-- Mobile Drawer Menu -->
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-menu__list">
                <li>
                    <a href="/" class="mobile-menu__link ${isActive('/') ? 'active' : ''}">
                        <span class="mobile-menu__link-text">Beranda</span>
                    </a>
                </li>
                <li class="mobile-dropdown ${isActive('/profil/') ? 'open' : ''}">
                    <button type="button" class="mobile-menu__link mobile-dropdown__toggle ${isActive('/profil/') ? 'active' : ''}" aria-expanded="${isActive('/profil/') ? 'true' : 'false'}">
                        <span class="mobile-menu__link-text">Profil Kelurahan</span>
                        <svg class="mobile-dropdown__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="mobile-dropdown__menu">
                        <a href="/profil/lurah/" class="mobile-menu__sublink ${isActive('/profil/lurah/') ? 'active' : ''}">
                            <span class="mobile-menu__sublink-bullet"></span>
                            Profil Lurah
                        </a>
                        <a href="/profil/struktur-organisasi/" class="mobile-menu__sublink ${isActive('/profil/struktur-organisasi/') ? 'active' : ''}">
                            <span class="mobile-menu__sublink-bullet"></span>
                            Struktur Organisasi
                        </a>
                    </div>
                </li>
                <li>
                    <a href="/visi-misi/" class="mobile-menu__link ${isActive('/visi-misi/') ? 'active' : ''}">
                        <span class="mobile-menu__link-text">Visi &amp; Misi</span>
                    </a>
                </li>
                <li class="mobile-dropdown ${isActive('/informasi/') ? 'open' : ''}">
                    <button type="button" class="mobile-menu__link mobile-dropdown__toggle ${isActive('/informasi/') ? 'active' : ''}" aria-expanded="${isActive('/informasi/') ? 'true' : 'false'}">
                        <span class="mobile-menu__link-text">Informasi &amp; Layanan</span>
                        <svg class="mobile-dropdown__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="mobile-dropdown__menu">
                        <a href="/informasi/data-penduduk/" class="mobile-menu__sublink ${isActive('/informasi/data-penduduk/') ? 'active' : ''}">
                            <span class="mobile-menu__sublink-bullet"></span>
                            Data Penduduk
                        </a>
                        <a href="/informasi/layanan/" class="mobile-menu__sublink ${isActive('/informasi/layanan/') ? 'active' : ''}">
                            <span class="mobile-menu__sublink-bullet"></span>
                            Layanan Surat Warga
                        </a>
                    </div>
                </li>
                <li>
                    <a href="/gallery/" class="mobile-menu__link ${isActive('/gallery/') ? 'active' : ''}">
                        <span class="mobile-menu__link-text">Galeri Kegiatan</span>
                    </a>
                </li>
                <li>
                    <a href="/kontak/" class="mobile-menu__link ${isActive('/kontak/') ? 'active' : ''}">
                        <span class="mobile-menu__link-text">Kontak &amp; Lokasi</span>
                    </a>
                </li>
            </ul>
        </div>
    `;

    // Event Listeners for Header
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const headerEl = document.getElementById('header');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Mobile dropdown toggles (accordion)
        const dropdownToggles = mobileMenu.querySelectorAll('.mobile-dropdown__toggle');
        dropdownToggles.forEach(toggleBtn => {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const parent = toggleBtn.closest('.mobile-dropdown');
                if (!parent) return;

                const willOpen = !parent.classList.contains('open');

                // Accordion behavior: close other open dropdowns
                mobileMenu.querySelectorAll('.mobile-dropdown').forEach(other => {
                    if (other !== parent) {
                        other.classList.remove('open');
                        const otherBtn = other.querySelector('.mobile-dropdown__toggle');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    }
                });

                parent.classList.toggle('open', willOpen);
                toggleBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            });
        });

        // Close when clicking nav links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992 && mobileMenu.classList.contains('open')) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // Header scroll shadow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 15) {
            headerEl?.classList.add('scrolled');
        } else {
            headerEl?.classList.remove('scrolled');
        }
    });
};
