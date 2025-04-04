export default function formatDate(date) {
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
}
