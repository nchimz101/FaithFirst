class HymnalController {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    paginateHymns(hymns) {
        if (!hymns?.length) return null;
        
        const totalPages = Math.ceil(hymns.length / this.itemsPerPage);
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;

        // Ensure current page is within bounds
        if (this.currentPage > totalPages) {
            this.currentPage = totalPages;
        }
        if (this.currentPage < 1) {
            this.currentPage = 1;
        }

        return {
            hymns: hymns.slice(start, end),
            currentPage: this.currentPage,
            totalPages,
            hasNext: this.currentPage < totalPages,
            hasPrevious: this.currentPage > 1
        };
    }

    toggleFavorite(hymnNumber) {
        const index = this.favorites.indexOf(hymnNumber);
        if (index === -1) {
            this.favorites.push(hymnNumber);
        } else {
            this.favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    async cacheHymn(hymn) {
        if ('caches' in window) {
            const cache = await caches.open('hymnal-cache');
            if (hymn.audio_url) {
                await cache.add(hymn.audio_url);
            }
            if (hymn.sheet_music_url) {
                await cache.add(hymn.sheet_music_url);
            }
        }
    }

    async getHymnOfDay() {
        const today = new Date().toDateString();
        const cached = localStorage.getItem('hymnOfDay');
        const cachedData = cached ? JSON.parse(cached) : null;

        if (cachedData && cachedData.date === today) {
            return cachedData.hymn;
        }

        const randomHymn = await HymnalAPI.getHymn(this.currentLanguage, 
            Math.floor(Math.random() * 100) + 1);
        
        localStorage.setItem('hymnOfDay', JSON.stringify({
            date: today,
            hymn: randomHymn
        }));

        return randomHymn;
    }
}
