/**
 * Floating WhatsApp Action Button
 */

export const initFloatingWa = () => {
    // Avoid multiple instances
    if (document.querySelector('.floating-wa')) return;

    const waButton = document.createElement('a');
    waButton.href = 'https://wa.me/6281355679147?text=Halo%20Admin%20Kelurahan%20Mattompodalle,%20saya%20ingin%20bertanya%20mengenai%20layanan%20kelurahan.';
    waButton.target = '_blank';
    waButton.rel = 'noopener noreferrer';
    waButton.className = 'floating-wa';
    waButton.setAttribute('aria-label', 'Hubungi WhatsApp Layanan Kelurahan Mattompodalle');
    waButton.setAttribute('title', 'Chat WhatsApp Layanan Warga');
    waButton.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    `;
    document.body.appendChild(waButton);
};
