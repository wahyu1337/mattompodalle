/**
 * Entry Point: Website Kelurahan Mattompodalle
 */

import '../styles/main.css';
import { initPreloader } from './components/preloader.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initFloatingWa } from './components/floatingWa.js';
import { initLightbox } from './components/lightbox.js';
import { initDynamicRenderer } from './components/dynamicRenderer.js';

// Initialize core components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    renderHeader();
    renderFooter();
    initFloatingWa();
    initDynamicRenderer();
    initLightbox();
});

// Re-check on full window load
window.addEventListener('load', () => {
    initLightbox();
});
