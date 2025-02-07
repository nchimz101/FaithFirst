// Load dependencies
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Alpine.js store
    Alpine.store('app', {
        user: {
            id: 'current_user',
            name: 'Guest User'
        }
    });
});
