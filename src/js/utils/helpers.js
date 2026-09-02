/**
 * General Formatters and Helpers
 */

export const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
};

export const sanitizeString = (str) => {
    if (!str) return '';
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};
