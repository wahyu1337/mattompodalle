/**
 * Gallery Lightbox Modal Viewer
 */

export const initLightbox = () => {
    // Create modal DOM structure if not exists
    let modal = document.getElementById('lightbox-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lightbox-modal';
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-modal__content">
                <button class="lightbox-modal__close" id="lightbox-close" aria-label="Tutup Preview">&times;</button>
                <img src="" alt="Preview Foto" class="lightbox-modal__img" id="lightbox-img">
                <p class="lightbox-modal__caption" id="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openModal = (src, title) => {
        modalImg.src = src;
        modalImg.alt = title || 'Preview Foto';
        modalCaption.textContent = title || '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Attach click events on gallery items
    const triggers = document.querySelectorAll('.gallery-item, .galeri__item, .gallery-photo-item');
    triggers.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const titleEl = item.querySelector('.gallery-item__title, .galeri__title');
            const title = titleEl ? titleEl.textContent : (img ? img.alt : '');
            if (img) {
                openModal(img.src, title);
            }
        });
    });

    closeBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
};
