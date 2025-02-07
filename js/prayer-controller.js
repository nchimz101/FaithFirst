class PrayerController {
    constructor() {
        this.prayers = JSON.parse(localStorage.getItem('prayers') || '[]');
        this.categories = [
            { id: 'praise', name: 'Praise & Worship', icon: 'fa-hands-praying' },
            { id: 'gratitude', name: 'Thanksgiving', icon: 'fa-heart' },
            { id: 'petition', name: 'Personal Requests', icon: 'fa-comment-dots' },
            { id: 'intercession', name: 'Prayers for Others', icon: 'fa-people-group' },
            { id: 'confession', name: 'Confession & Repentance', icon: 'fa-key' },
            { id: 'guidance', name: 'Guidance & Direction', icon: 'fa-compass' },
            { id: 'healing', name: 'Healing & Deliverance', icon: 'fa-hand-holding-medical' },
            { id: 'spiritual', name: 'Spiritual Growth', icon: 'fa-seedling' }
        ];
    }

    savePrayer(prayer) {
        const newPrayer = {
            id: Date.now().toString(),
            title: prayer.title,
            content: prayer.content,
            category: prayer.category || 'praise', // default to 'praise' if not specified
            date: new Date().toISOString(),
            answered: false,
            tags: prayer.tags || [],
            reminderDate: prayer.reminderDate || null,
            scripture: prayer.scripture || '',
            answered_date: null,
            answered_notes: '',
            lastModified: new Date().toISOString()
        };

        this.prayers.unshift(newPrayer);
        this._savePrayers();
        return this.prayers;
    }

    updatePrayer(id, updates) {
        const index = this.prayers.findIndex(p => p.id === id);
        if (index !== -1) {
            this.prayers[index] = {
                ...this.prayers[index],
                ...updates,
                lastModified: new Date().toISOString()
            };
            this._savePrayers();
        }
        return this.prayers;
    }

    toggleAnswered(id, notes = '') {
        const prayer = this.prayers.find(p => p.id === id);
        if (prayer) {
            prayer.answered = !prayer.answered;
            prayer.answered_date = prayer.answered ? new Date().toISOString() : null;
            prayer.answered_notes = prayer.answered ? notes : '';
            this._savePrayers();
        }
        return this.prayers;
    }

    deletePrayer(id) {
        this.prayers = this.prayers.filter(p => p.id !== id);
        this._savePrayers();
        return this.prayers;
    }

    getPrayers(filters = {}) {
        let filtered = [...this.prayers];
        
        // Improved search logic
        if (filters.search) {
            const searchTerms = filters.search.toLowerCase().split(' ').filter(Boolean);
            filtered = filtered.filter(p => 
                searchTerms.every(term => 
                    p.title.toLowerCase().includes(term) || 
                    p.content.toLowerCase().includes(term) ||
                    p.category.toLowerCase().includes(term)
                )
            );
        }
        
        // Category filter
        if (filters.category) {
            filtered = filtered.filter(p => p.category === filters.category);
        }
        
        // Answered status filter
        if (filters.answered !== undefined) {
            filtered = filtered.filter(p => p.answered === filters.answered);
        }
        
        // Sort by date, newest first
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        return filtered;
    }

    getStats() {
        const now = new Date();
        const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));

        return {
            total: this.prayers.length,
            answered: this.prayers.filter(p => p.answered).length,
            categories: this.prayers.reduce((acc, p) => {
                acc[p.category] = (acc[p.category] || 0) + 1;
                return acc;
            }, {}),
            recent: this.prayers.filter(p => {
                const prayerDate = new Date(p.date);
                return prayerDate >= sevenDaysAgo;
            }).length
        };
    }

    addTag(prayerId, tag) {
        const prayer = this.prayers.find(p => p.id === prayerId);
        if (prayer && !prayer.tags.includes(tag)) {
            prayer.tags.push(tag);
            this._savePrayers();
        }
        return this.prayers;
    }

    removeTag(prayerId, tag) {
        const prayer = this.prayers.find(p => p.id === prayerId);
        if (prayer) {
            prayer.tags = prayer.tags.filter(t => t !== tag);
            this._savePrayers();
        }
        return this.prayers;
    }

    _savePrayers() {
        localStorage.setItem('prayers', JSON.stringify(this.prayers));
    }
}
