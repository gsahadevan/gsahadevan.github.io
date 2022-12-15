export default function formatDate(date) {
    if (typeof date.getMonth === 'function') {
        return new Intl.DateTimeFormat('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(new Date(date));
    }

    return new Intl.DateTimeFormat('en', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date());
}
