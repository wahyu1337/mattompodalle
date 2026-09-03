/**
 * Preloader Component
 * Website Resmi Kelurahan Mattompodalle
 */

export const initPreloader = () => {
    let preloader = document.getElementById('preloader');
    const startTime = window.__pageStartTime || Date.now();
    const MIN_DISPLAY_TIME = 450; // Minimal display in ms for smooth UX transition
    let isRemoved = false;

    // Auto-create preloader if not already present in static HTML
    if (!preloader) {
        preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="preloader__content">
                <div class="preloader__logo-box">
                    <img src="/assets/takalar.png" alt="Logo Kabupaten Takalar" class="preloader__logo">
                </div>
                <div class="preloader__spinner"></div>
                <div class="preloader__text-group">
                    <span class="preloader__title">Kelurahan Mattompodalle</span>
                    <span class="preloader__subtitle">Memuat data portal...</span>
                </div>
            </div>
        `;
        document.body.prepend(preloader);
    }

    const removePreloader = () => {
        if (isRemoved || !preloader) return;
        isRemoved = true;

        preloader.classList.add('loaded');
        document.body.classList.add('page-loaded');

        setTimeout(() => {
            if (preloader && preloader.parentNode) {
                preloader.remove();
            }
        }, 500);
    };

    const triggerRemoval = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);
        setTimeout(removePreloader, remaining);
    };

    if (document.readyState === 'complete') {
        triggerRemoval();
    } else {
        window.addEventListener('load', triggerRemoval, { once: true });
    }

    // Safety fallback: maximum 3 seconds in case network assets hang
    setTimeout(removePreloader, 3000);
};
