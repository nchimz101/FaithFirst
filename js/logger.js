class Logger {
    static LOGS_DIR = '/logs';
    
    static async log(type, message, data = {}) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            type,
            message,
            data
        };

        // Log to console
        console[type](message, data);

        // Save to file
        try {
            const response = await fetch('/api/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(logEntry)
            });

            if (!response.ok) {
                console.error('Failed to save log:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving log:', error);
        }

        // Also store in localStorage for offline access
        this.storeLocalLog(logEntry);
    }

    static storeLocalLog(logEntry) {
        try {
            const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
            logs.push(logEntry);
            // Keep only last 1000 logs
            if (logs.length > 1000) logs.shift();
            localStorage.setItem('app_logs', JSON.stringify(logs));
        } catch (error) {
            console.error('Error storing log locally:', error);
        }
    }

    static error(message, data = {}) {
        return this.log('error', message, data);
    }

    static warn(message, data = {}) {
        return this.log('warn', message, data);
    }

    static info(message, data = {}) {
        return this.log('info', message, data);
    }

    static debug(message, data = {}) {
        return this.log('debug', message, data);
    }
}
