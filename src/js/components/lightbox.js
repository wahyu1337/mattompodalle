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
                <div class="lightbox-modal__caption" id="lightbox-caption" style="display: none;"></div>
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

    const openModal = (src, alt, caption) => {
        modalImg.src = src;
        modalImg.alt = alt || 'Preview Foto';
        if (modalCaption) {
            const displayCaption = caption || alt || '';
            if (displayCaption) {
                modalCaption.textContent = displayCaption;
                modalCaption.style.display = 'block';
            } else {
                modalCaption.style.display = 'none';
            }
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Attach delegated click event on gallery items
    if (!window.__lightboxDelegated) {
        window.__lightboxDelegated = true;
        document.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item, .galeri__item, .gallery-photo-item');
            if (item) {
                const img = item.querySelector('img');
                if (img) {
                    const captionElem = item.querySelector('.gallery-item__caption-text');
                    const caption = captionElem ? captionElem.textContent.trim() : (img.getAttribute('alt') || '');
                    openModal(img.src, img.alt, caption);
                }
            }
        });
    }

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
