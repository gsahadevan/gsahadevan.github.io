/**
 * @description Formats a date string into a more readable format.
 * @param {string} date - The date string to format.
 * @return {string} - The formatted date string.
 * @example
 */
export const formatDate = (date: string): string => {
    try {
        return new Intl.DateTimeFormat('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(new Date(date));
    } catch (error) {
        return new Intl.DateTimeFormat('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(new Date());
    }
};
