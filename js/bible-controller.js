class BibleController {
    constructor() {
        this.baseUrl = 'https://bible-api.com';
        this.translation = 'web';
        this.history = [];
        this.translations = [
            { id: 'web', name: 'World English Bible', default: true, language: 'English' },
            { id: 'kjv', name: 'King James Version', language: 'English' },
            { id: 'asv', name: 'American Standard Version', language: 'English' },
            { id: 'bbe', name: 'Bible in Basic English', language: 'English' },
            { id: 'webbe', name: 'World English Bible (British)', language: 'English' },
            { id: 'oeb-us', name: 'Open English Bible (US)', language: 'English' },
            { id: 'oeb-cw', name: 'Open English Bible (UK)', language: 'English' },
            { id: 'clementine', name: 'Clementine Latin Vulgate', language: 'Latin' },
            { id: 'almeida', name: 'João Ferreira de Almeida', language: 'Portuguese' },
            { id: 'rccv', name: 'Romanian Cornilescu Version', language: 'Romanian' }
        ];
        
        this.bookCategories = {
            OT: {
                'Law': ['GEN', 'EXO', 'LEV', 'NUM', 'DEU'],
                'History': ['JOS', 'JDG', 'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST'],
                'Poetry': ['JOB', 'PSA', 'PRO', 'ECC', 'SNG'],
                'Major Prophets': ['ISA', 'JER', 'LAM', 'EZK', 'DAN'],
                'Minor Prophets': ['HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL']
            },
            NT: {
                'Gospels': ['MAT', 'MRK', 'LUK', 'JHN'],
                'History': ['ACT'],
                'Pauline Epistles': ['ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM'],
                'General Epistles': ['HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD'],
                'Prophecy': ['REV']
            }
        };

        this.books = [
            // Law (Torah)
            { id: 'GEN', name: 'Genesis', chapters: 50, testament: 'OT', category: 'Law' },
            { id: 'EXO', name: 'Exodus', chapters: 40, testament: 'OT', category: 'Law' },
            { id: 'LEV', name: 'Leviticus', chapters: 27, testament: 'OT', category: 'Law' },
            { id: 'NUM', name: 'Numbers', chapters: 36, testament: 'OT', category: 'Law' },
            { id: 'DEU', name: 'Deuteronomy', chapters: 34, testament: 'OT', category: 'Law' },

            // History
            { id: 'JOS', name: 'Joshua', chapters: 24, testament: 'OT', category: 'History' },
            { id: 'JDG', name: 'Judges', chapters: 21, testament: 'OT', category: 'History' },
            { id: 'RUT', name: 'Ruth', chapters: 4, testament: 'OT', category: 'History' },
            { id: '1SA', name: '1 Samuel', chapters: 31, testament: 'OT', category: 'History' },
            { id: '2SA', name: '2 Samuel', chapters: 24, testament: 'OT', category: 'History' },
            { id: '1KI', name: '1 Kings', chapters: 22, testament: 'OT', category: 'History' },
            { id: '2KI', name: '2 Kings', chapters: 25, testament: 'OT', category: 'History' },
            { id: '1CH', name: '1 Chronicles', chapters: 29, testament: 'OT', category: 'History' },
            { id: '2CH', name: '2 Chronicles', chapters: 36, testament: 'OT', category: 'History' },
            { id: 'EZR', name: 'Ezra', chapters: 10, testament: 'OT', category: 'History' },
            { id: 'NEH', name: 'Nehemiah', chapters: 13, testament: 'OT', category: 'History' },
            { id: 'EST', name: 'Esther', chapters: 10, testament: 'OT', category: 'History' },

            // Poetry
            { id: 'JOB', name: 'Job', chapters: 42, testament: 'OT', category: 'Poetry' },
            { id: 'PSA', name: 'Psalms', chapters: 150, testament: 'OT', category: 'Poetry' },
            { id: 'PRO', name: 'Proverbs', chapters: 31, testament: 'OT', category: 'Poetry' },
            { id: 'ECC', name: 'Ecclesiastes', chapters: 12, testament: 'OT', category: 'Poetry' },
            { id: 'SNG', name: 'Song of Solomon', chapters: 8, testament: 'OT', category: 'Poetry' },

            // Major Prophets
            { id: 'ISA', name: 'Isaiah', chapters: 66, testament: 'OT', category: 'Major Prophets' },
            { id: 'JER', name: 'Jeremiah', chapters: 52, testament: 'OT', category: 'Major Prophets' },
            { id: 'LAM', name: 'Lamentations', chapters: 5, testament: 'OT', category: 'Major Prophets' },
            { id: 'EZK', name: 'Ezekiel', chapters: 48, testament: 'OT', category: 'Major Prophets' },
            { id: 'DAN', name: 'Daniel', chapters: 12, testament: 'OT', category: 'Major Prophets' },

            // Minor Prophets
            { id: 'HOS', name: 'Hosea', chapters: 14, testament: 'OT', category: 'Minor Prophets' },
            { id: 'JOL', name: 'Joel', chapters: 3, testament: 'OT', category: 'Minor Prophets' },
            { id: 'AMO', name: 'Amos', chapters: 9, testament: 'OT', category: 'Minor Prophets' },
            { id: 'OBA', name: 'Obadiah', chapters: 1, testament: 'OT', category: 'Minor Prophets', singleChapter: true },
            { id: 'JON', name: 'Jonah', chapters: 4, testament: 'OT', category: 'Minor Prophets' },
            { id: 'MIC', name: 'Micah', chapters: 7, testament: 'OT', category: 'Minor Prophets' },
            { id: 'NAM', name: 'Nahum', chapters: 3, testament: 'OT', category: 'Minor Prophets' },
            { id: 'HAB', name: 'Habakkuk', chapters: 3, testament: 'OT', category: 'Minor Prophets' },
            { id: 'ZEP', name: 'Zephaniah', chapters: 3, testament: 'OT', category: 'Minor Prophets' },
            { id: 'HAG', name: 'Haggai', chapters: 2, testament: 'OT', category: 'Minor Prophets' },
            { id: 'ZEC', name: 'Zechariah', chapters: 14, testament: 'OT', category: 'Minor Prophets' },
            { id: 'MAL', name: 'Malachi', chapters: 4, testament: 'OT', category: 'Minor Prophets' },

            // Gospels
            { id: 'MAT', name: 'Matthew', chapters: 28, testament: 'NT', category: 'Gospels' },
            { id: 'MRK', name: 'Mark', chapters: 16, testament: 'NT', category: 'Gospels' },
            { id: 'LUK', name: 'Luke', chapters: 24, testament: 'NT', category: 'Gospels' },
            { id: 'JHN', name: 'John', chapters: 21, testament: 'NT', category: 'Gospels' },

            // History
            { id: 'ACT', name: 'Acts', chapters: 28, testament: 'NT', category: 'History' },

            // Pauline Epistles
            { id: 'ROM', name: 'Romans', chapters: 16, testament: 'NT', category: 'Pauline Epistles' },
            { id: '1CO', name: '1 Corinthians', chapters: 16, testament: 'NT', category: 'Pauline Epistles' },
            { id: '2CO', name: '2 Corinthians', chapters: 13, testament: 'NT', category: 'Pauline Epistles' },
            { id: 'GAL', name: 'Galatians', chapters: 6, testament: 'NT', category: 'Pauline Epistles' },
            { id: 'EPH', name: 'Ephesians', chapters: 6, testament: 'NT', category: 'Pauline Epistles' },
            { id: 'PHP', name: 'Philippians', chapters: 4, testament: 'NT', category: 'Pauline Epistles' },
            { id: 'COL', name: 'Colossians', chapters: 4, testament: 'NT', category: 'Pauline Epistles' },
            { id: '1TH', name: '1 Thessalonians', chapters: 5, testament: 'NT', category: 'Pauline Epistles' },
            { id: '2TH', name: '2 Thessalonians', chapters: 3, testament: 'NT', category: 'Pauline Epistles' },
            { id: '1TI', name: '1 Timothy', chapters: 6, testament: 'NT', category: 'Pauline Epistles' },
            { id: '2TI', name: '2 Timothy', chapters: 4, testament: 'NT', category: 'Pauline Epistles' },
            { id: 'TIT', name: 'Titus', chapters: 3, testament: 'NT', category: 'Pauline Epistles' },
            { id: 'PHM', name: 'Philemon', chapters: 1, testament: 'NT', category: 'Pauline Epistles', singleChapter: true },

            // General Epistles
            { id: 'HEB', name: 'Hebrews', chapters: 13, testament: 'NT', category: 'General Epistles' },
            { id: 'JAS', name: 'James', chapters: 5, testament: 'NT', category: 'General Epistles' },
            { id: '1PE', name: '1 Peter', chapters: 5, testament: 'NT', category: 'General Epistles' },
            { id: '2PE', name: '2 Peter', chapters: 3, testament: 'NT', category: 'General Epistles' },
            { id: '1JN', name: '1 John', chapters: 5, testament: 'NT', category: 'General Epistles' },
            { id: '2JN', name: '2 John', chapters: 1, testament: 'NT', category: 'General Epistles', singleChapter: true },
            { id: '3JN', name: '3 John', chapters: 1, testament: 'NT', category: 'General Epistles', singleChapter: true },
            { id: 'JUD', name: 'Jude', chapters: 1, testament: 'NT', category: 'General Epistles', singleChapter: true },

            // Prophecy
            { id: 'REV', name: 'Revelation', chapters: 22, testament: 'NT', category: 'Prophecy' }
        ];

        this.verseOfTheDay = null;
        this.lastVerseUpdate = null;
    }

    async getVerse(bookId, chapter, verse) {
        const params = new URLSearchParams({
            translation: this.translation
        });

        const book = this.books.find(b => b.id === bookId);
        if (book?.singleChapter) {
            params.append('single_chapter_book_matching', 'indifferent');
        }

        try {
            const reference = `${bookId} ${chapter}:${verse}`;
            const response = await fetch(`${this.baseUrl}/${reference}?${params}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching verse:', error);
            throw error;
        }
    }

    async getChapter(bookId, chapter) {
        try {
            const response = await fetch(`${this.baseUrl}/data/${this.translation}/${bookId}/${chapter}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching chapter:', error);
            throw error;
        }
    }

    async getChapterVerses(bookId, chapter) {
        try {
            const response = await fetch(`${this.baseUrl}/data/${this.translation}/${bookId}/${chapter}`);
            const data = await response.json();
            return {
                verses: data.verses.map(v => ({ 
                    number: v.verse, 
                    text: v.text,
                    translation: this.translation
                })),
                total: data.verses.length
            };
        } catch (error) {
            console.error('Error fetching chapter verses:', error);
            throw error;
        }
    }

    async getRandomVerse(options = {}) {
        try {
            const response = await fetch('https://bible-api.com/data/web/random', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch random verse');
            }
            
            const data = await response.json();
            
            // Extract data from the new response format
            return {
                text: data.random_verse.text,
                reference: `${data.random_verse.book} ${data.random_verse.chapter}:${data.random_verse.verse}`,
                translation: data.translation.identifier,
                book: data.random_verse.book_id,
                chapter: data.random_verse.chapter,
                verse: data.random_verse.verse
            };
        } catch (error) {
            console.error('Error fetching random verse:', error);
            // Return a fallback verse if everything fails
            return {
                text: "Your word is a lamp to my feet and a light to my path.",
                reference: "Psalm 119:105",
                translation: this.translation,
                book: 'PSA',
                chapter: 119,
                verse: 105
            };
        }
    }

    async getAvailableBooks() {
        try {
            const response = await fetch(`${this.baseUrl}/data/${this.translation}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    }

    setTranslation(translationId) {
        if (this.translations.find(t => t.id === translationId)) {
            this.translation = translationId;
            // Optionally save preference
            localStorage.setItem('preferred_translation', translationId);
        }
    }

    // Add method to get saved translation preference
    getSavedTranslation() {
        return localStorage.getItem('preferred_translation') || 'web';
    }

    async searchScripture(query) {
        if (!query) return null;
        try {
            const response = await fetch(`${this.baseUrl}/${query}?translation=${this.translation}`);
            const result = await response.json();
            this.addToHistory(query, result);
            return result;
        } catch (error) {
            console.error('Error searching scripture:', error);
            throw error;
        }
    }

    addToHistory(query, result) {
        this.history.unshift({ query, result, timestamp: new Date() });
        if (this.history.length > 10) this.history.pop();
        localStorage.setItem('bible_search_history', JSON.stringify(this.history));
    }

    getHistory() {
        return JSON.parse(localStorage.getItem('bible_search_history') || '[]');
    }

    getBooksByTestament(testament) {
        if (!testament || testament === 'all') return this.books;
        return this.books.filter(book => book.testament === testament);
    }

    generateChapterArray(total) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    async getVerseOfTheDay() {
        try {
            const verse = await this.getRandomVerse();
            return verse;
        } catch (error) {
            console.error('Error getting verse of the day:', error);
            // Return fallback verse if everything fails
            return {
                text: "Your word is a lamp to my feet and a light to my path.",
                reference: "Psalm 119:105",
                translation: this.translation,
                book: 'PSA',
                chapter: 119,
                verse: 105
            };
        }
    }

    getBooksByCategory(testament) {
        return this.bookCategories[testament] || {};
    }
}
