class HymnalAPI {
    static BASE_URL = 'https://cis-hymnals-47632a642a1e.herokuapp.com';

    static LANGUAGES = [
        {"key":"english","title":"Christ In Song","language":"English"},
        {"key":"tswana","title":"Keresete Mo Kopelong","language":"Tswana"},
        {"key":"sotho","title":"Keresete Pineng","language":"Sotho"},
        {"key":"chichewa","title":"Khristu Mu Nyimbo","language":"Chichewa"},
        {"key":"tonga","title":"Kristu Mu Nyimbo","language":"Tonga"},
        {"key":"shona","title":"Kristu MuNzwiyo","language":"Shona"},
        {"key":"venda","title":"Ngosha YaDzingosha","language":"Venda"},
        {"key":"swahili","title":"Nyimbo Za Kristo","language":"Swahili"},
        {"key":"ndebele","title":"UKrestu Esihlabelelweni","language":"Ndebele/IsiZulu"},
        {"key":"xhosa","title":"UKristu Engomeni","language":"IsiXhosa"},
        {"key":"xitsonga","title":"Risima Ra Vuyimbeleri","language":"Xitsonga"},
        {"key":"gikuyu","title":"Nyimbo cia Agendi","language":"Kikuyu"},
        {"key":"abagusii","title":"Ogotera kw'ogotogia Nyasae","language":"Abagusii"},
        {"key":"dholuo","title":"Wende Nyasaye","language":"Dholuo"},
        {"key":"sdah","title":"SDA Hymnal","language":"English"},
        {"key":"kinyarwanda","title":"Indirimbo Zo Guhimbaza Imana","language":"Kinyarwanda"},
        {"key":"pt","title":"Hinàrio Adventista Do Sétiomo Dia","language":"Portuguesa"},
        {"key":"es","title":"Himnario Adventista","language":"Español"},
        {"key":"ru","title":"Гимн адвентистов седьмого дня","language":"русский язык"},
        {"key":"tumbuka","title":"Nyimbo za Mpingo wa SDA","language":"Tumbuka"},
        {"key":"sepedi","title":"Kreste Ka Kopelo","language":"Sepedi"}
    ];

    static async getLanguages() {
        try {
            const response = await fetch(`${this.BASE_URL}/languages`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const languages = await response.json();
            return languages;
        } catch (error) {
            console.error('Error getting languages:', error);
            return this.LANGUAGES; // Fallback to static data if API fails
        }
    }

    static async getHymns(language) {
        if (!language) throw new Error('Language key is required');
        try {
            const response = await fetch(`${this.BASE_URL}/hymnals/${language}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const hymns = await response.json();
            return hymns;
        } catch (error) {
            console.error(`Error fetching hymns for ${language}:`, error);
            return [];
        }
    }

    static async getHymn(language, number) {
        Logger.info(`Fetching Hymn ${number} in ${language}`);
        try {
            if (!language || !number) {
                Logger.error('Invalid parameters:', { language, number });
                throw new Error('Language key and hymn number are required');
            }

            const url = `${this.BASE_URL}/hymnals/${language}/${number}`;
            Logger.debug('Request URL:', { url });
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin'
            });

            // Log the raw response for debugging
            console.log('Raw response:', response);
            
            if (!response.ok) {
                Logger.warn('Response not OK:', {
                    status: response.status,
                    statusText: response.statusText,
                    url: url
                });
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const text = await response.text(); // Get response as text first
            console.log('Response text:', text);
            
            const hymn = text ? JSON.parse(text) : null; // Parse if we have content
            Logger.info('Hymn data received:', { hymn });
            
            if (!hymn) {
                throw new Error('No hymn data received');
            }
            
            return {
                number: hymn.number,
                title: hymn.title,
                lyrics: hymn.content,
                audio_url: hymn.audio_url || null
            };
        } catch (error) {
            Logger.error('Error fetching hymn:', {
                message: error.message,
                stack: error.stack,
                language,
                number,
                url: `${this.BASE_URL}/hymnals/${language}/${number}`
            });
            return null;
        }
    }

    // Optional utility method to find a language by its key
    static findLanguage(languageKey) {
        return this.LANGUAGES.find(lang => lang.key === languageKey);
    }
}