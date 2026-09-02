import '../css/style.css';

// ============================================
// PRELOADER — Wait for all assets to load
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('loaded');
        // Remove from DOM after fade-out transition
        preloader.addEventListener('transitionend', () => {
            preloader.remove();
        });
    }
});

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            
            // Toggle aria-expanded
            const isOpen = hamburger.classList.contains('open');
            hamburger.setAttribute('aria-expanded', isOpen);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link, .mobile-menu__sublink');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Jangan tutup menu jika yang diklik adalah tombol toggle dropdown
                if (link.classList.contains('dropdown__toggle')) {
                    return;
                }
                
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1150) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // HEADER SCROLL SHADOW
    // ============================================
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ============================================
    // ACTIVE NAV LINK HIGHLIGHT
    // ============================================
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href) && href !== '/') {
            link.classList.add('active');
        } else if (href === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) {
            // Home page — no active highlight for sub-nav
        }
    });

    // ============================================
    // FADE-IN ON SCROLL (Intersection Observer)
    // ============================================
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-on-scroll');
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-on-scroll')) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.style.animationPlayState = 'running';
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            if (el.classList.contains('animate-fade-in-up')) {
                el.style.animationPlayState = 'paused';
            }
            observer.observe(el);
        });
    }

    // ============================================
    // FLOATING WHATSAPP BUTTON
    // ============================================
    const waButton = document.createElement('a');
    waButton.href = 'https://wa.me/6281355679147';
    waButton.target = '_blank';
    waButton.className = 'floating-wa';
    waButton.setAttribute('aria-label', 'Hubungi kami via WhatsApp');
    waButton.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    `;
    document.body.appendChild(waButton);
});
