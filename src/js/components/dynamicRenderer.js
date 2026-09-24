/**
 * Dynamic Content Renderer & Data Hydration
 */
import profilData from '../../data/profil.json';
import aparatData from '../../data/aparat.json';
import layananData from '../../data/layanan.json';
import fasilitasData from '../../data/fasilitas.json';
import galeriData from '../../data/galeri.json';
import kontakData from '../../data/kontak.json';
import beritaData from '../../data/berita.json';
import { formatNumber } from '../utils/helpers.js';

export const initDynamicRenderer = () => {
    // 1. Render Layanan List if container exists
    const layananContainer = document.getElementById('layanan-grid-container');
    if (layananContainer) {
        layananContainer.innerHTML = layananData.map(item => `
            <div class="service-card">
                <span class="service-card__badge">${item.kategori}</span>
                <h3 class="service-card__title">${item.nama}</h3>
                <p class="service-card__desc">${item.deskripsi}</p>
                <div style="margin-bottom: 1rem;">
                    <strong style="font-size: 0.85rem; color: var(--color-primary);">Persyaratan Utama:</strong>
                    <ul class="service-card__requirements">
                        ${item.persyaratan.map(req => `
                            <li class="service-card__req-item">
                                <svg class="service-card__req-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>${req}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="service-card__meta">
                    <span>⏱ Waktu: ${item.waktu}</span>
                    <span style="color: var(--color-success); font-weight: 700;">${item.biaya}</span>
                </div>
            </div>
        `).join('');
    }

    // 2. Render Fasilitas List if container exists
    const fasilitasContainer = document.getElementById('fasilitas-grid-container');
    if (fasilitasContainer) {
        fasilitasContainer.innerHTML = fasilitasData.map(f => `
            <div class="card">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span class="section-badge" style="margin-bottom: 0;">${f.kategori}</span>
                    <strong style="color: var(--color-primary); font-size: 0.9rem;">${f.jumlah}</strong>
                </div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${f.nama}</h3>
                <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.5;">${f.deskripsi}</p>
            </div>
        `).join('');
    }

    // 3. Render Berita List if container exists
    const beritaContainer = document.getElementById('berita-grid-container');
    if (beritaContainer) {
        beritaContainer.innerHTML = beritaData.map(b => `
            <article class="card" style="padding: 0; overflow: hidden;">
                <div style="aspect-ratio: 16/9; overflow: hidden;">
                    <img src="${b.gambar}" alt="${b.judul}" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-base);" loading="lazy">
                </div>
                <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.8rem; color: var(--color-text-muted);">
                        <span style="color: var(--color-primary); font-weight: 700;">${b.kategori}</span>
                        <span>${b.tanggal}</span>
                    </div>
                    <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem; line-height: 1.35;">${b.judul}</h3>
                    <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 1rem; flex-grow: 1;">${b.ringkasan}</p>
                </div>
            </article>
        `).join('');
    }

    // 4. Render Galeri if container exists
    const galeriContainer = document.getElementById('galeri-grid-container');
    if (galeriContainer) {
        galeriContainer.innerHTML = galeriData.map(g => `
            <div class="gallery-item" data-id="${g.id}" data-tag="${g.tag || 'kegiatan'}">
                <img src="${g.gambar}" alt="${g.judul}" class="gallery-item__img" loading="lazy">
                ${g.caption ? `
                    <div class="gallery-item__caption">
                        <span class="gallery-item__caption-text">${g.caption}</span>
                    </div>
                ` : ''}
            </div>
        `).join('');

        initGalleryFilter();
    }
};

/**
 * Filter Galeri berdasarkan Kategori / Kata Kunci
 */
export const initGalleryFilter = () => {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galeriContainer = document.getElementById('galeri-grid-container');
    if (!filterButtons.length || !galeriContainer) return;

    // Hitung dan update badge angka filter secara dinamis
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        const countSpan = btn.querySelector('.gallery-filter-btn__count');
        if (countSpan) {
            if (filter === 'all') {
                countSpan.textContent = galeriData.length;
            } else {
                const matchingCount = galeriData.filter(g => g.tag === filter).length;
                countSpan.textContent = matchingCount;
            }
        }
    });

    // Event listener tombol filter
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetFilter = btn.getAttribute('data-filter');

            // Toggle active styling
            filterButtons.forEach(b => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            // Filter item foto
            const items = galeriContainer.querySelectorAll('.gallery-item');
            let visibleCount = 0;

            items.forEach(item => {
                const itemTag = item.getAttribute('data-tag');
                const isMatch = (targetFilter === 'all' || itemTag === targetFilter);
                if (isMatch) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            // Tampilkan empty state jika kategori belum memiliki foto (misal: Mesjid)
            let emptyState = document.getElementById('gallery-empty-state');
            if (visibleCount === 0) {
                if (!emptyState) {
                    emptyState = document.createElement('div');
                    emptyState.id = 'gallery-empty-state';
                    emptyState.className = 'gallery-empty-state';
                    galeriContainer.parentNode.insertBefore(emptyState, galeriContainer.nextSibling);
                }
                const label = btn.querySelector('span:first-child')?.textContent || 'Kategori ini';
                emptyState.innerHTML = `
                    <div class="gallery-empty-state__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                    </div>
                    <h3 class="gallery-empty-state__title">Dokumentasi ${label} Belum Tersedia</h3>
                    <p class="gallery-empty-state__desc">Foto dokumentasi untuk ${label.toLowerCase()} akan segera diperbarui di portal Kelurahan Mattompodalle.</p>
                `;
                emptyState.style.display = 'flex';
                galeriContainer.style.display = 'none';
            } else {
                if (emptyState) {
                    emptyState.style.display = 'none';
                }
                galeriContainer.style.display = 'grid';
            }
        });
    });
};

export { profilData, aparatData, layananData, fasilitasData, galeriData, kontakData, beritaData };
