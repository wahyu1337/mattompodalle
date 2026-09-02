/**
 * Preloader Component
 */

export const initPreloader = () => {
    let preloader = document.getElementById('preloader');
    
    // Auto-create preloader if not present
    if (!preloader) {
        preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="preloader__content">
                <div class="preloader__spinner"></div>
                <span class="preloader__text">Memuat Kelurahan Mattompodalle...</span>
            </div>
        `;
        document.body.prepend(preloader);
    }

    const removePreloader = () => {
        if (preloader) {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }
    };

    if (document.readyState === 'complete') {
        removePreloader();
    } else {
        window.addEventListener('load', removePreloader);
    }
};
