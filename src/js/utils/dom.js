/**
 * DOM Helper Utilities
 */

export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

export const createElement = (tag, attributes = {}, innerHTML = '') => {
    const el = document.createElement(tag);
    Object.entries(attributes).forEach(([key, val]) => {
        if (key === 'className') {
            el.className = val;
        } else {
            el.setAttribute(key, val);
        }
    });
    if (innerHTML) {
        el.innerHTML = innerHTML;
    }
    return el;
};
