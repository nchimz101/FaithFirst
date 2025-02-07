class CommunityController {
    constructor() {
        this.prayerRequests = JSON.parse(localStorage.getItem('prayerRequests') || '[]');
        this.events = [
            {
                id: 'christmas-2023',
                title: 'Christmas Service',
                description: 'Join us for a special Christmas celebration service.',
                date: '2023-12-25',
                time: '9:00 AM',
                location: 'Main Sanctuary',
                isFeatured: true,
                attendees: []
            },
            {
                id: 'new-year-2024',
                title: 'New Year Prayer Service',
                description: 'Start the year with prayer and dedication.',
                date: '2024-01-01',
                time: '6:00 AM',
                location: 'Main Sanctuary',
                isFeatured: true,
                attendees: []
            },
            {
                id: 'youth-camp-2024',
                title: 'Youth Camp 2024',
                description: 'Annual youth retreat for spiritual growth and fellowship.',
                date: '2024-01-15',
                time: '8:00 AM',
                location: 'Camp Haven',
                attendees: []
            },
            {
                id: 'bible-seminar',
                title: 'Bible Prophecy Seminar',
                description: 'Understanding end-time prophecies.',
                date: '2024-02-01',
                time: '7:00 PM',
                location: 'Fellowship Hall',
                attendees: []
            }
        ];
        this.groups = [
            {
                id: 'bible-study',
                name: 'Bible Study',
                description: 'Weekly in-depth Bible study and discussions.',
                category: 'Study',
                members: Array(45).fill('member'),
                icon: 'bible',
                isFeatured: true,
                tags: ['bible', 'study', 'weekly']
            },
            {
                id: 'youth-ministry',
                name: 'Youth Ministry',
                description: 'Empowering young people in faith and service.',
                category: 'Youth',
                members: Array(32).fill('member'),
                icon: 'users',
                isFeatured: true,
                tags: ['youth', 'ministry', 'fellowship']
            },
            {
                id: 'prayer-warriors',
                name: 'Prayer Warriors',
                description: 'Dedicated to intercessory prayer.',
                category: 'Prayer',
                members: Array(28).fill('member'),
                icon: 'pray',
                tags: ['prayer', 'intercession']
            }
        ];
        this.notifications = [];
        this.sermons = {
            featured: [
                {
                    id: 'amazing-facts',
                    title: 'Amazing Facts',
                    description: 'Bible prophecy and doctrinal teachings by Doug Batchelor',
                    thumbnail: 'https://img.youtube.com/vi/VvYr4GXmh8E/maxresdefault.jpg',
                    videos: [
                        {
                            id: 'VvYr4GXmh8E',
                            title: 'The Final Events of Bible Prophecy',
                            thumbnail: 'https://img.youtube.com/vi/VvYr4GXmh8E/mqdefault.jpg',
                            publishedAt: '2023-01-15'
                        },
                        {
                            id: '8RJxjqyqO3U',
                            title: 'Revelation\'s Seven Churches',
                            thumbnail: 'https://img.youtube.com/vi/8RJxjqyqO3U/mqdefault.jpg',
                            publishedAt: '2023-02-01'
                        }
                    ]
                },
                {
                    id: '3abn',
                    title: '3ABN Today',
                    description: 'Inspirational programs from Three Angels Broadcasting Network',
                    thumbnail: 'https://img.youtube.com/vi/dH5iPJvF8VY/maxresdefault.jpg',
                    videos: [
                        {
                            id: 'dH5iPJvF8VY',
                            title: 'The Sanctuary Message',
                            thumbnail: 'https://img.youtube.com/vi/dH5iPJvF8VY/mqdefault.jpg',
                            publishedAt: '2023-03-01'
                        },
                        {
                            id: 'YYmKClnzx3Q',
                            title: 'Understanding the Three Angels Messages',
                            thumbnail: 'https://img.youtube.com/vi/YYmKClnzx3Q/mqdefault.jpg',
                            publishedAt: '2023-03-15'
                        }
                    ]
                },
                {
                    id: 'hope-channel',
                    title: 'Hope Channel',
                    description: 'Official television network of the Seventh-day Adventist Church',
                    thumbnail: 'https://img.youtube.com/vi/QeL5Q5HrldU/maxresdefault.jpg',
                    videos: [
                        {
                            id: 'QeL5Q5HrldU',
                            title: 'Hope Sabbath School',
                            thumbnail: 'https://img.youtube.com/vi/QeL5Q5HrldU/mqdefault.jpg',
                            publishedAt: '2023-04-01'
                        },
                        {
                            id: 'wK_7jkEYY9Y',
                            title: 'Biblical Perspectives on Last Day Events',
                            thumbnail: 'https://img.youtube.com/vi/wK_7jkEYY9Y/mqdefault.jpg',
                            publishedAt: '2023-04-15'
                        }
                    ]
                }
            ],
            watchHistory: JSON.parse(localStorage.getItem('sermon_history') || '[]'),
            favorites: JSON.parse(localStorage.getItem('sermon_favorites') || '[]')
        };

        // Add notification system
        this._initializeNotifications();
    }

    // Prayer Requests Methods
    addPrayerRequest(request) {
        const newRequest = {
            id: Date.now().toString(),
            content: request.content,
            author: request.author,
            date: new Date().toISOString(),
            prayerCount: 0,
            isPrivate: request.isPrivate || false,
            tags: request.tags || [],
            prayers: [],
            comments: [],
            answered: false
        };
        this.prayerRequests.unshift(newRequest);
        this._savePrayerRequests();
        return newRequest;
    }

    prayFor(requestId, user) {
        const request = this.prayerRequests.find(r => r.id === requestId);
        if (request && !request.prayers.includes(user)) {
            request.prayers.push(user);
            request.prayerCount++;
            this._savePrayerRequests();
        }
    }

    // Events Methods
    addEvent(event) {
        const newEvent = {
            id: Date.now().toString(),
            title: event.title,
            description: event.description,
            date: event.date,
            time: event.time,
            location: event.location,
            organizer: event.organizer,
            attendees: [],
            maxAttendees: event.maxAttendees,
            type: event.type,
            tags: event.tags || [],
            virtualLink: event.virtualLink || null,
            reminder: event.reminder || false
        };
        this.events.push(newEvent);
        this._saveEvents();
        return newEvent;
    }

    joinEvent(eventId, user) {
        const event = this.events.find(e => e.id === eventId);
        if (event && !event.attendees.includes(user)) {
            event.attendees.push(user);
            this._saveEvents();
            if (event.reminder) {
                this._scheduleReminder(event, user);
            }
        }
    }

    // Groups Methods
    createGroup(group) {
        const newGroup = {
            id: Date.now().toString(),
            name: group.name,
            description: group.description,
            category: group.category,
            members: [group.creator],
            posts: [],
            events: [],
            isPrivate: group.isPrivate || false,
            tags: group.tags || [],
            meetingSchedule: group.meetingSchedule || null
        };
        this.groups.push(newGroup);
        this._saveGroups();
        return newGroup;
    }

    // Utility Methods
    searchAll(query) {
        const searchTerm = query.toLowerCase();
        return {
            prayers: this.prayerRequests.filter(p => 
                p.content.toLowerCase().includes(searchTerm) ||
                p.tags.some(t => t.toLowerCase().includes(searchTerm))
            ),
            events: this.events.filter(e => 
                e.title.toLowerCase().includes(searchTerm) ||
                e.description.toLowerCase().includes(searchTerm)
            ),
            groups: this.groups.filter(g => 
                g.name.toLowerCase().includes(searchTerm) ||
                g.description.toLowerCase().includes(searchTerm)
            )
        };
    }

    getUpcomingEvents() {
        const now = new Date();
        return this.events
            .filter(e => new Date(e.date) >= now)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    getTrendingGroups() {
        return this.groups
            .sort((a, b) => b.members.length - a.members.length)
            .slice(0, 5);
    }

    getRecentPrayers() {
        return this.prayerRequests
            .filter(p => !p.isPrivate)
            .slice(0, 10);
    }

    // Add new sermon methods
    getSermonPlaylist(playlistId) {
        const playlist = this.sermons.featured.find(p => p.id === playlistId);
        return Promise.resolve(playlist?.videos || []);
    }

    addToWatchHistory(sermon) {
        this.sermons.watchHistory = [sermon, ...this.sermons.watchHistory.filter(s => s.id !== sermon.id)].slice(0, 20);
        localStorage.setItem('sermon_history', JSON.stringify(this.sermons.watchHistory));
    }

    toggleSermonFavorite(sermon) {
        const index = this.sermons.favorites.findIndex(s => s.id === sermon.id);
        if (index === -1) {
            this.sermons.favorites.push(sermon);
        } else {
            this.sermons.favorites.splice(index, 1);
        }
        localStorage.setItem('sermon_favorites', JSON.stringify(this.sermons.favorites));
    }

    // Private Methods
    _savePrayerRequests() {
        localStorage.setItem('prayerRequests', JSON.stringify(this.prayerRequests));
    }

    _saveEvents() {
        localStorage.setItem('events', JSON.stringify(this.events));
    }

    _saveGroups() {
        localStorage.setItem('groups', JSON.stringify(this.groups));
    }

    _scheduleReminder(event, user) {
        const reminder = {
            id: Date.now().toString(),
            eventId: event.id,
            userId: user,
            eventDate: event.date,
            notified: false
        };
        this.notifications.push(reminder);
    }

    _initializeNotifications() {
        this.notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        this._checkReminders();
    }

    setupNotifications() {
        // Check for new notifications every minute
        setInterval(() => this._checkReminders(), 60000);
        return this.notifications;
    }

    _checkReminders() {
        const now = new Date();
        const upcoming = this.events.filter(event => {
            const eventDate = new Date(event.date);
            const timeDiff = eventDate.getTime() - now.getTime();
            // Notify 24 hours before event
            return timeDiff > 0 && timeDiff <= 24 * 60 * 60 * 1000;
        });

        upcoming.forEach(event => {
            this.addNotification({
                title: 'Upcoming Event',
                message: `${event.title} is happening tomorrow!`,
                type: 'reminder'
            });
        });
    }

    addNotification(notification) {
        const newNotification = {
            id: Date.now().toString(),
            title: notification.title,
            message: notification.message,
            type: notification.type,
            timestamp: new Date().toISOString(),
            read: false
        };

        this.notifications.unshift(newNotification);
        this._saveNotifications();
        return newNotification;
    }

    removeNotification(notificationId) {
        this.notifications = this.notifications.filter(n => n.id !== notificationId);
        this._saveNotifications();
    }

    _saveNotifications() {
        localStorage.setItem('notifications', JSON.stringify(this.notifications));
    }
}
