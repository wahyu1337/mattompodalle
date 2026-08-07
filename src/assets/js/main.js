import '../css/style.css';

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
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
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
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    }
});
