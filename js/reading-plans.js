class ReadingPlanController {
    constructor() {
        this.plans = {
            'overview-30': {
                id: 'overview-30',
                title: '30-Day Overview',
                description: 'A quick overview of the Bible\'s main themes and stories',
                duration: 30,
                type: 'overview',
                days: {
                    1: {
                        passages: ["Genesis 1-2", "John 1", "Psalm 1"],
                        description: "Creation and the Word",
                        estimated_duration: 25
                    },
                    2: {
                        passages: ["Genesis 3", "Romans 5", "Psalm 51"],
                        description: "Fall and Redemption",
                        estimated_duration: 20
                    },
                    3: {
                        passages: ["Genesis 6-9", "1 Peter 3:18-22", "Psalm 29"],
                        description: "The Flood and God's Promise",
                        estimated_duration: 25
                    },
                    4: {
                        passages: ["Genesis 12-15", "Hebrews 11:8-19", "Psalm 105:1-15"],
                        description: "Abraham's Call and Faith",
                        estimated_duration: 25
                    },
                    5: {
                        passages: ["Exodus 1-3", "Acts 7:17-36", "Psalm 105:23-45"],
                        description: "Moses and the Burning Bush",
                        estimated_duration: 25
                    },
                    6: {
                        passages: ["Exodus 12-14", "1 Corinthians 5:7-8", "Psalm 106:1-12"],
                        description: "The Exodus and Passover",
                        estimated_duration: 30
                    },
                    7: {
                        passages: ["Exodus 19-20", "Hebrews 12:18-29", "Psalm 19"],
                        description: "The Law at Sinai",
                        estimated_duration: 25
                    },
                    8: {
                        passages: ["Joshua 1-2", "Hebrews 11:30-31", "Psalm 44:1-8"],
                        description: "Entering the Promised Land",
                        estimated_duration: 20
                    },
                    9: {
                        passages: ["1 Samuel 16-17", "Acts 13:16-23", "Psalm 78:65-72"],
                        description: "David and Goliath",
                        estimated_duration: 30
                    },
                    10: {
                        passages: ["2 Samuel 7", "Acts 2:22-36", "Psalm 89:1-37"],
                        description: "God's Covenant with David",
                        estimated_duration: 25
                    },
                    11: {
                        passages: ["1 Kings 8:1-21", "Hebrews 9:1-15", "Psalm 132"],
                        description: "The Temple Dedication",
                        estimated_duration: 25
                    },
                    12: {
                        passages: ["Isaiah 6", "John 12:37-41", "Psalm 99"],
                        description: "Isaiah's Vision",
                        estimated_duration: 20
                    },
                    13: {
                        passages: ["Isaiah 52:13-53:12", "Acts 8:26-35", "Psalm 22"],
                        description: "The Suffering Servant",
                        estimated_duration: 25
                    },
                    14: {
                        passages: ["Jeremiah 31:31-37", "Hebrews 8", "Psalm 25"],
                        description: "The New Covenant",
                        estimated_duration: 25
                    },
                    15: {
                        passages: ["Daniel 7", "Revelation 1", "Psalm 93"],
                        description: "Visions of the Son of Man",
                        estimated_duration: 25
                    },
                    16: {
                        passages: ["Matthew 1-2", "Isaiah 7:14, 9:1-7", "Psalm 72"],
                        description: "The Birth of Jesus",
                        estimated_duration: 25
                    },
                    17: {
                        passages: ["Matthew 5-6", "James 1:19-27", "Psalm 15"],
                        description: "The Sermon on the Mount",
                        estimated_duration: 30
                    },
                    18: {
                        passages: ["Matthew 13:1-23", "Isaiah 6:9-13", "Psalm 119:33-40"],
                        description: "Kingdom Parables",
                        estimated_duration: 20
                    },
                    19: {
                        passages: ["Matthew 26:17-30", "1 Corinthians 11:23-34", "Psalm 116"],
                        description: "The Last Supper",
                        estimated_duration: 20
                    },
                    20: {
                        passages: ["Matthew 27:32-56", "Isaiah 53", "Psalm 22"],
                        description: "The Crucifixion",
                        estimated_duration: 25
                    },
                    21: {
                        passages: ["Matthew 28", "1 Corinthians 15:1-20", "Psalm 16"],
                        description: "The Resurrection",
                        estimated_duration: 20
                    },
                    22: {
                        passages: ["Acts 2", "Joel 2:28-32", "Psalm 110"],
                        description: "Pentecost",
                        estimated_duration: 25
                    },
                    23: {
                        passages: ["Acts 9:1-31", "Galatians 1:11-24", "Psalm 67"],
                        description: "Paul's Conversion",
                        estimated_duration: 20
                    },
                    24: {
                        passages: ["Romans 3:21-31", "Galatians 2:15-21", "Psalm 32"],
                        description: "Justification by Faith",
                        estimated_duration: 20
                    },
                    25: {
                        passages: ["Romans 8", "John 14:15-27", "Psalm 23"],
                        description: "Life in the Spirit",
                        estimated_duration: 25
                    },
                    26: {
                        passages: ["1 Corinthians 13", "1 John 4:7-21", "Psalm 36:5-10"],
                        description: "The Way of Love",
                        estimated_duration: 15
                    },
                    27: {
                        passages: ["Ephesians 6:10-20", "Isaiah 59:15-20", "Psalm 91"],
                        description: "Spiritual Warfare",
                        estimated_duration: 20
                    },
                    28: {
                        passages: ["Philippians 2:1-11", "Isaiah 52:13-53:12", "Psalm 97"],
                        description: "Christ's Humility",
                        estimated_duration: 20
                    },
                    29: {
                        passages: ["Hebrews 11", "Genesis 15:1-6", "Psalm 34"],
                        description: "Heroes of Faith",
                        estimated_duration: 30
                    },
                    30: {
                        passages: ["Revelation 21-22", "Isaiah 65:17-25", "Psalm 150"],
                        description: "The New Creation",
                        estimated_duration: 25
                    }
                }
            },
            'through-90': {
                id: 'through-90',
                title: '90-Day Through the Bible',
                description: 'Read through the entire Bible in 90 days',
                duration: 90,
                type: 'complete',
                days: {
                    1: {
                        passages: ["Genesis 1-11"],
                        description: "Creation to Babel",
                        estimated_duration: 45
                    },
                    2: {
                        passages: ["Genesis 12-25"],
                        description: "Abraham's Journey",
                        estimated_duration: 40
                    },
                    3: {
                        passages: ["Genesis 26-36"],
                        description: "Isaac and Jacob",
                        estimated_duration: 40
                    },
                    4: {
                        passages: ["Genesis 37-50"],
                        description: "Joseph's Story",
                        estimated_duration: 45
                    },
                    5: {
                        passages: ["Exodus 1-15"],
                        description: "Moses and the Exodus",
                        estimated_duration: 45
                    },
                    6: {
                        passages: ["Exodus 16-30"],
                        description: "Wilderness and the Law",
                        estimated_duration: 45
                    },
                    7: {
                        passages: ["Exodus 31-40"],
                        description: "Tabernacle Instructions",
                        estimated_duration: 40
                    },
                    8: {
                        passages: ["Leviticus 1-14"],
                        description: "Laws and Offerings",
                        estimated_duration: 45
                    },
                    9: {
                        passages: ["Leviticus 15-27"],
                        description: "Holiness and Festivals",
                        estimated_duration: 45
                    },
                    10: {
                        passages: ["Numbers 1-14"],
                        description: "Census and Rebellion",
                        estimated_duration: 45
                    },
                    11: {
                        passages: ["Numbers 15-36"],
                        description: "Wilderness Wanderings",
                        estimated_duration: 45
                    },
                    12: {
                        passages: ["Deuteronomy 1-15"],
                        description: "Moses' Final Words",
                        estimated_duration: 45
                    },
                    13: {
                        passages: ["Deuteronomy 16-34"],
                        description: "Moses' Farewell",
                        estimated_duration: 45
                    },
                    14: {
                        passages: ["Joshua 1-12"],
                        description: "Conquest of Canaan",
                        estimated_duration: 45
                    },
                    15: {
                        passages: ["Joshua 13-24"],
                        description: "Division of the Land",
                        estimated_duration: 45
                    },
                    16: {
                        passages: ["Judges 1-21"],
                        description: "Israel's Judges",
                        estimated_duration: 45
                    },
                    17: {
                        passages: ["Ruth 1-4"],
                        description: "Story of Ruth",
                        estimated_duration: 30
                    },
                    18: {
                        passages: ["1 Samuel 1-15"],
                        description: "Samuel and Saul",
                        estimated_duration: 45
                    },
                    19: {
                        passages: ["1 Samuel 16-31"],
                        description: "David and Saul",
                        estimated_duration: 45
                    },
                    20: {
                        passages: ["2 Samuel 1-12"],
                        description: "David's Reign",
                        estimated_duration: 45
                    },
                    21: {
                        passages: ["2 Samuel 13-24"],
                        description: "David's Troubles",
                        estimated_duration: 45
                    },
                    22: {
                        passages: ["1 Kings 1-11"],
                        description: "Solomon's Reign",
                        estimated_duration: 45
                    },
                    23: {
                        passages: ["1 Kings 12-22"],
                        description: "Divided Kingdom",
                        estimated_duration: 45
                    },
                    24: {
                        passages: ["2 Kings 1-17"],
                        description: "Kings of Israel",
                        estimated_duration: 45
                    },
                    25: {
                        passages: ["2 Kings 18-25"],
                        description: "Kings of Judah",
                        estimated_duration: 45
                    },
                    26: {
                        passages: ["1 Chronicles 1-9"],
                        description: "Genealogies",
                        estimated_duration: 45
                    },
                    27: {
                        passages: ["1 Chronicles 10-29"],
                        description: "David's Reign",
                        estimated_duration: 45
                    },
                    28: {
                        passages: ["2 Chronicles 1-20"],
                        description: "Solomon and Kings",
                        estimated_duration: 45
                    },
                    29: {
                        passages: ["2 Chronicles 21-36"],
                        description: "Kings of Judah",
                        estimated_duration: 45
                    },
                    30: {
                        passages: ["Ezra 1-10"],
                        description: "Return from Exile",
                        estimated_duration: 45
                    },
                    31: {
                        passages: ["Nehemiah 1-13"],
                        description: "Rebuilding Jerusalem",
                        estimated_duration: 45
                    },
                    32: {
                        passages: ["Esther 1-10"],
                        description: "Story of Esther",
                        estimated_duration: 45
                    },
                    33: {
                        passages: ["Job 1-21"],
                        description: "Job's Suffering",
                        estimated_duration: 45
                    },
                    34: {
                        passages: ["Job 22-42"],
                        description: "Job's Restoration",
                        estimated_duration: 45
                    },
                    35: {
                        passages: ["Psalms 1-41"],
                        description: "Book of Psalms",
                        estimated_duration: 45
                    },
                    36: {
                        passages: ["Psalms 42-72"],
                        description: "Book of Psalms",
                        estimated_duration: 45
                    },
                    37: {
                        passages: ["Psalms 73-89"],
                        description: "Book of Psalms",
                        estimated_duration: 45
                    },
                    38: {
                        passages: ["Psalms 90-106"],
                        description: "Book of Psalms",
                        estimated_duration: 45
                    },
                    39: {
                        passages: ["Psalms 107-150"],
                        description: "Book of Psalms",
                        estimated_duration: 45
                    },
                    40: {
                        passages: ["Proverbs 1-15"],
                        description: "Book of Proverbs",
                        estimated_duration: 45
                    },
                    41: {
                        passages: ["Proverbs 16-31"],
                        description: "Book of Proverbs",
                        estimated_duration: 45
                    },
                    42: {
                        passages: ["Ecclesiastes 1-12"],
                        description: "Book of Ecclesiastes",
                        estimated_duration: 45
                    },
                    43: {
                        passages: ["Song of Solomon 1-8"],
                        description: "Song of Solomon",
                        estimated_duration: 45
                    },
                    44: {
                        passages: ["Isaiah 1-23"],
                        description: "Prophecies of Isaiah",
                        estimated_duration: 45
                    },
                    45: {
                        passages: ["Isaiah 24-39"],
                        description: "Prophecies of Isaiah",
                        estimated_duration: 45
                    },
                    46: {
                        passages: ["Isaiah 40-55"],
                        description: "Prophecies of Isaiah",
                        estimated_duration: 45
                    },
                    47: {
                        passages: ["Isaiah 56-66"],
                        description: "Prophecies of Isaiah",
                        estimated_duration: 45
                    },
                    48: {
                        passages: ["Jeremiah 1-20"],
                        description: "Prophecies of Jeremiah",
                        estimated_duration: 45
                    },
                    49: {
                        passages: ["Jeremiah 21-36"],
                        description: "Prophecies of Jeremiah",
                        estimated_duration: 45
                    },
                    50: {
                        passages: ["Jeremiah 37-52"],
                        description: "Prophecies of Jeremiah",
                        estimated_duration: 45
                    },
                    51: {
                        passages: ["Lamentations 1-5"],
                        description: "Lamentations of Jeremiah",
                        estimated_duration: 45
                    },
                    52: {
                        passages: ["Ezekiel 1-24"],
                        description: "Prophecies of Ezekiel",
                        estimated_duration: 45
                    },
                    53: {
                        passages: ["Ezekiel 25-39"],
                        description: "Prophecies of Ezekiel",
                        estimated_duration: 45
                    },
                    54: {
                        passages: ["Ezekiel 40-48"],
                        description: "Prophecies of Ezekiel",
                        estimated_duration: 45
                    },
                    55: {
                        passages: ["Daniel 1-12"],
                        description: "Book of Daniel",
                        estimated_duration: 45
                    },
                    56: {
                        passages: ["Hosea 1-14"],
                        description: "Book of Hosea",
                        estimated_duration: 45
                    },
                    57: {
                        passages: ["Joel 1-3"],
                        description: "Book of Joel",
                        estimated_duration: 45
                    },
                    58: {
                        passages: ["Amos 1-9"],
                        description: "Book of Amos",
                        estimated_duration: 45
                    },
                    59: {
                        passages: ["Obadiah 1"],
                        description: "Book of Obadiah",
                        estimated_duration: 45
                    },
                    60: {
                        passages: ["Jonah 1-4"],
                        description: "Book of Jonah",
                        estimated_duration: 45
                    },
                    61: {
                        passages: ["Micah 1-7"],
                        description: "Book of Micah",
                        estimated_duration: 45
                    },
                    62: {
                        passages: ["Nahum 1-3"],
                        description: "Book of Nahum",
                        estimated_duration: 45
                    },
                    63: {
                        passages: ["Habakkuk 1-3"],
                        description: "Book of Habakkuk",
                        estimated_duration: 45
                    },
                    64: {
                        passages: ["Zephaniah 1-3"],
                        description: "Book of Zephaniah",
                        estimated_duration: 45
                    },
                    65: {
                        passages: ["Haggai 1-2"],
                        description: "Book of Haggai",
                        estimated_duration: 45
                    },
                    66: {
                        passages: ["Zechariah 1-14"],
                        description: "Book of Zechariah",
                        estimated_duration: 45
                    },
                    67: {
                        passages: ["Malachi 1-4"],
                        description: "Book of Malachi",
                        estimated_duration: 45
                    },
                    68: {
                        passages: ["Matthew 1-7"],
                        description: "Gospel of Matthew",
                        estimated_duration: 45
                    },
                    69: {
                        passages: ["Matthew 8-14"],
                        description: "Gospel of Matthew",
                        estimated_duration: 45
                    },
                    70: {
                        passages: ["Matthew 15-22"],
                        description: "Gospel of Matthew",
                        estimated_duration: 45
                    },
                    71: {
                        passages: ["Matthew 23-28"],
                        description: "Gospel of Matthew",
                        estimated_duration: 45
                    },
                    72: {
                        passages: ["Mark 1-8"],
                        description: "Gospel of Mark",
                        estimated_duration: 45
                    },
                    73: {
                        passages: ["Mark 9-16"],
                        description: "Gospel of Mark",
                        estimated_duration: 45
                    },
                    74: {
                        passages: ["Luke 1-8"],
                        description: "Gospel of Luke",
                        estimated_duration: 45
                    },
                    75: {
                        passages: ["Luke 9-16"],
                        description: "Gospel of Luke",
                        estimated_duration: 45
                    },
                    76: {
                        passages: ["Luke 17-24"],
                        description: "Gospel of Luke",
                        estimated_duration: 45
                    },
                    77: {
                        passages: ["John 1-7"],
                        description: "Gospel of John",
                        estimated_duration: 45
                    },
                    78: {
                        passages: ["John 8-14"],
                        description: "Gospel of John",
                        estimated_duration: 45
                    },
                    79: {
                        passages: ["John 15-21"],
                        description: "Gospel of John",
                        estimated_duration: 45
                    },
                    80: {
                        passages: ["Acts 1-7"],
                        description: "Acts of the Apostles",
                        estimated_duration: 45
                    },
                    81: {
                        passages: ["Acts 8-14"],
                        description: "Acts of the Apostles",
                        estimated_duration: 45
                    },
                    82: {
                        passages: ["Acts 15-21"],
                        description: "Acts of the Apostles",
                        estimated_duration: 45
                    },
                    83: {
                        passages: ["Acts 22-28"],
                        description: "Acts of the Apostles",
                        estimated_duration: 45
                    },
                    84: {
                        passages: ["Romans 1-8"],
                        description: "Epistle to the Romans",
                        estimated_duration: 45
                    },
                    85: {
                        passages: ["Romans 9-16"],
                        description: "Epistle to the Romans",
                        estimated_duration: 45
                    },
                    86: {
                        passages: ["1 Corinthians 1-8"],
                        description: "First Epistle to the Corinthians",
                        estimated_duration: 45
                    },
                    87: {
                        passages: ["1 Corinthians 9-16"],
                        description: "First Epistle to the Corinthians",
                        estimated_duration: 45
                    },
                    88: {
                        passages: ["2 Corinthians 1-13"],
                        description: "Second Epistle to the Corinthians",
                        estimated_duration: 45
                    },
                    89: {
                        passages: ["Galatians 1-6"],
                        description: "Epistle to the Galatians",
                        estimated_duration: 45
                    },
                    90: {
                        passages: ["Ephesians 1-6"],
                        description: "Epistle to the Ephesians",
                        estimated_duration: 45
                    }
                }
            },
            'complete-365': {
                id: 'complete-365',
                title: '365-Day Complete Reading',
                description: 'A year-long journey through every chapter',
                duration: 365,
                type: 'complete',
                days: {
                    1: {
                        passages: ["Genesis 1-2", "Matthew 1", "Psalm 1"],
                        description: "Beginnings",
                        estimated_duration: 30
                    },
                    2: {
                        passages: ["Genesis 3-4", "Matthew 2", "Psalm 2"],
                        description: "Fall and Promise",
                        estimated_duration: 30
                    },
                    3: {
                        passages: ["Genesis 5-6", "Matthew 3", "Psalm 3"],
                        description: "Noah's Genealogy and the Flood",
                        estimated_duration: 30
                    },
                    4: {
                        passages: ["Genesis 7-8", "Matthew 4", "Psalm 4"],
                        description: "The Flood and God's Faithfulness",
                        estimated_duration: 30
                    },
                    5: {
                        passages: ["Genesis 9-10", "Matthew 5", "Psalm 5"],
                        description: "God's Covenant with Noah",
                        estimated_duration: 35
                    },
                    6: {
                        passages: ["Genesis 11-12", "Matthew 6", "Psalm 6"],
                        description: "Tower of Babel and Abraham's Call",
                        estimated_duration: 30
                    },
                    7: {
                        passages: ["Genesis 13-14", "Matthew 7", "Psalm 7"],
                        description: "Abraham and Lot",
                        estimated_duration: 30
                    },
                    8: {
                        passages: ["Genesis 15-16", "Matthew 8", "Psalm 8"],
                        description: "God's Covenant with Abraham",
                        estimated_duration: 30
                    },
                    9: {
                        passages: ["Genesis 17-18", "Matthew 9", "Psalm 9"],
                        description: "Covenant of Circumcision",
                        estimated_duration: 30
                    },
                    10: {
                        passages: ["Genesis 19-20", "Matthew 10", "Psalm 10"],
                        description: "Sodom and Gomorrah",
                        estimated_duration: 35
                    },
                    11: {
                        passages: ["Genesis 21-22", "Matthew 11", "Psalm 11"],
                        description: "Isaac's Birth and Testing",
                        estimated_duration: 30
                    },
                    12: {
                        passages: ["Genesis 23-24", "Matthew 12", "Psalm 12"],
                        description: "Sarah's Death and Isaac's Wife",
                        estimated_duration: 35
                    },
                    13: {
                        passages: ["Genesis 25-26", "Matthew 13", "Psalm 13"],
                        description: "Abraham's Death and Isaac's Life",
                        estimated_duration: 35
                    },
                    14: {
                        passages: ["Genesis 27-28", "Matthew 14", "Psalm 14"],
                        description: "Jacob and Esau",
                        estimated_duration: 30
                    },
                    15: {
                        passages: ["Genesis 29-30", "Matthew 15", "Psalm 15"],
                        description: "Jacob's Family",
                        estimated_duration: 35
                    },
                    16: {
                        passages: ["Genesis 31-32", "Matthew 16", "Psalm 16"],
                        description: "Jacob's Return",
                        estimated_duration: 35
                    },
                    17: {
                        passages: ["Genesis 33-34", "Matthew 17", "Psalm 17"],
                        description: "Jacob and Esau Reconcile",
                        estimated_duration: 30
                    },
                    18: {
                        passages: ["Genesis 35-36", "Matthew 18", "Psalm 18"],
                        description: "Jacob Returns to Bethel",
                        estimated_duration: 35
                    },
                    19: {
                        passages: ["Genesis 37-38", "Matthew 19", "Psalm 19"],
                        description: "Joseph's Dreams",
                        estimated_duration: 35
                    },
                    20: {
                        passages: ["Genesis 39-40", "Matthew 20", "Psalm 20"],
                        description: "Joseph in Egypt",
                        estimated_duration: 30
                    },
                    21: {
                        passages: ["Genesis 41-42", "Matthew 21", "Psalm 21"],
                        description: "Joseph's Rise to Power",
                        estimated_duration: 35
                    },
                    22: {
                        passages: ["Genesis 43-44", "Matthew 22", "Psalm 22"],
                        description: "Joseph's Brothers Return",
                        estimated_duration: 35
                    },
                    23: {
                        passages: ["Genesis 45-46", "Matthew 23", "Psalm 23"],
                        description: "Joseph Reveals Himself",
                        estimated_duration: 30
                    },
                    24: {
                        passages: ["Genesis 47-48", "Matthew 24", "Psalm 24"],
                        description: "Israel in Egypt",
                        estimated_duration: 35
                    },
                    25: {
                        passages: ["Genesis 49-50", "Matthew 25", "Psalm 25"],
                        description: "Jacob's Blessing and Death",
                        estimated_duration: 35
                    },
                    26: {
                        passages: ["Exodus 1-2", "Matthew 26", "Psalm 26"],
                        description: "Israel in Egypt",
                        estimated_duration: 30
                    },
                    27: {
                        passages: ["Exodus 3-4", "Matthew 27", "Psalm 27"],
                        description: "Moses' Call",
                        estimated_duration: 30
                    },
                    28: {
                        passages: ["Exodus 5-6", "Matthew 28", "Psalm 28"],
                        description: "Confronting Pharaoh",
                        estimated_duration: 30
                    },
                    29: {
                        passages: ["Exodus 7-8", "Mark 1", "Psalm 29"],
                        description: "Plagues Begin",
                        estimated_duration: 30
                    },
                    30: {
                        passages: ["Exodus 9-10", "Mark 2", "Psalm 30"],
                        description: "More Plagues",
                        estimated_duration: 30
                    },
                    31: {
                        passages: ["Exodus 11-12", "Mark 3", "Psalm 31"],
                        description: "The Passover",
                        estimated_duration: 35
                    },
                    32: {
                        passages: ["Exodus 13-14", "Mark 4", "Psalm 32"],
                        description: "The Exodus",
                        estimated_duration: 30
                    },
                    33: {
                        passages: ["Exodus 15-16", "Mark 5", "Psalm 33"],
                        description: "Song of Moses",
                        estimated_duration: 30
                    },
                    34: {
                        passages: ["Exodus 17-18", "Mark 6", "Psalm 34"],
                        description: "Water from Rock",
                        estimated_duration: 30
                    },
                    35: {
                        passages: ["Exodus 19-20", "Mark 7", "Psalm 35"],
                        description: "Ten Commandments",
                        estimated_duration: 30
                    },
                    36: {
                        passages: ["Exodus 21-22", "Mark 8", "Psalm 36"],
                        description: "Laws and Judgments",
                        estimated_duration: 30
                    },
                    37: {
                        passages: ["Exodus 23-24", "Mark 9", "Psalm 37"],
                        description: "Covenant Confirmed",
                        estimated_duration: 30
                    },
                    38: {
                        passages: ["Exodus 25-26", "Mark 10", "Psalm 38"],
                        description: "Tabernacle Design",
                        estimated_duration: 35
                    },
                    39: {
                        passages: ["Exodus 27-28", "Mark 11", "Psalm 39"],
                        description: "Priestly Garments",
                        estimated_duration: 30
                    },
                    40: {
                        passages: ["Exodus 29-30", "Mark 12", "Psalm 40"],
                        description: "Consecration of Priests",
                        estimated_duration: 35
                    },
                    41: {
                        passages: ["Exodus 31-32", "Mark 13", "Psalm 41"],
                        description: "Golden Calf",
                        estimated_duration: 30
                    },
                    42: {
                        passages: ["Exodus 33-34", "Mark 14", "Psalm 42"],
                        description: "Moses' Intercession",
                        estimated_duration: 30
                    },
                    43: {
                        passages: ["Exodus 35-36", "Mark 15", "Psalm 43"],
                        description: "Tabernacle Construction",
                        estimated_duration: 35
                    },
                    44: {
                        passages: ["Exodus 37-38", "Mark 16", "Psalm 44"],
                        description: "Furnishings Made",
                        estimated_duration: 30
                    },
                    45: {
                        passages: ["Exodus 39-40", "Luke 1", "Psalm 45"],
                        description: "Tabernacle Completed",
                        estimated_duration: 35
                    },
                    46: {
                        passages: ["Leviticus 1-2", "Luke 2", "Psalm 46"],
                        description: "Offerings and Sacrifices",
                        estimated_duration: 30
                    },
                    47: {
                        passages: ["Leviticus 3-4", "Luke 3", "Psalm 47"],
                        description: "Peace and Sin Offerings",
                        estimated_duration: 30
                    },
                    48: {
                        passages: ["Leviticus 5-6", "Luke 4", "Psalm 48"],
                        description: "Guilt Offerings",
                        estimated_duration: 35
                    },
                    49: {
                        passages: ["Leviticus 7-8", "Luke 5", "Psalm 49"],
                        description: "Priestly Service",
                        estimated_duration: 35
                    },
                    50: {
                        passages: ["Leviticus 9-10", "Luke 6", "Psalm 50"],
                        description: "Nadab and Abihu",
                        estimated_duration: 30
                    },
                    51: {
                        passages: ["Leviticus 11-12", "Luke 7", "Psalm 51"],
                        description: "Clean and Unclean Foods",
                        estimated_duration: 30
                    },
                    52: {
                        passages: ["Leviticus 13", "Luke 8", "Psalm 52"],
                        description: "Laws About Leprosy",
                        estimated_duration: 30
                    },
                    53: {
                        passages: ["Leviticus 14", "Luke 9", "Psalm 53"],
                        description: "Cleansing from Leprosy",
                        estimated_duration: 30
                    },
                    54: {
                        passages: ["Leviticus 15-16", "Luke 10", "Psalm 54"],
                        description: "Day of Atonement",
                        estimated_duration: 35
                    },
                    55: {
                        passages: ["Leviticus 17-18", "Luke 11", "Psalm 55"],
                        description: "Laws of Holiness",
                        estimated_duration: 30
                    },
                    56: {
                        passages: ["Leviticus 19-20", "Luke 12", "Psalm 56"],
                        description: "Moral Laws",
                        estimated_duration: 35
                    },
                    57: {
                        passages: ["Leviticus 21-22", "Luke 13", "Psalm 57"],
                        description: "Rules for Priests",
                        estimated_duration: 30
                    },
                    58: {
                        passages: ["Leviticus 23-24", "Luke 14", "Psalm 58"],
                        description: "Sacred Festivals",
                        estimated_duration: 35
                    },
                    59: {
                        passages: ["Leviticus 25", "Luke 15", "Psalm 59"],
                        description: "Sabbath Year and Jubilee",
                        estimated_duration: 30
                    },
                    60: {
                        passages: ["Leviticus 1-2", "Mark 14", "Psalm 60"],
                        description: "Laws of Offering",
                        estimated_duration: 30
                    },
                    61: {
                        passages: ["Numbers 1-2", "Luke 17", "Psalm 61"],
                        description: "Census and Camp Order",
                        estimated_duration: 35
                    },
                    62: {
                        passages: ["Numbers 3-4", "Luke 18", "Psalm 62"],
                        description: "Duties of Levites",
                        estimated_duration: 35
                    },
                    63: {
                        passages: ["Numbers 5-6", "Luke 19", "Psalm 63"],
                        description: "Laws of Purity",
                        estimated_duration: 35
                    },
                    64: {
                        passages: ["Numbers 7", "Luke 20", "Psalm 64"],
                        description: "Tabernacle Offerings",
                        estimated_duration: 35
                    },
                    65: {
                        passages: ["Numbers 8-9", "Luke 21", "Psalm 65"],
                        description: "Levites and Passover",
                        estimated_duration: 30
                    },
                    66: {
                        passages: ["Numbers 10-11", "Luke 22", "Psalm 66"],
                        description: "Departure from Sinai",
                        estimated_duration: 35
                    },
                    67: {
                        passages: ["Numbers 12-13", "Luke 23", "Psalm 67"],
                        description: "Spies in Canaan",
                        estimated_duration: 30
                    },
                    68: {
                        passages: ["Numbers 14-15", "Luke 24", "Psalm 68"],
                        description: "Israel's Unbelief",
                        estimated_duration: 35
                    },
                    69: {
                        passages: ["Numbers 16-17", "John 1", "Psalm 69"],
                        description: "Korah's Rebellion",
                        estimated_duration: 35
                    },
                    70: {
                        passages: ["Numbers 18-19", "John 2", "Psalm 70"],
                        description: "Duties of Priests",
                        estimated_duration: 30
                    },
                    71: {
                        passages: ["Numbers 20-21", "John 3", "Psalm 71"],
                        description: "Water from Rock",
                        estimated_duration: 35
                    },
                    72: {
                        passages: ["Numbers 22-23", "John 4", "Psalm 72"],
                        description: "Balaam's Prophecies",
                        estimated_duration: 35
                    },
                    73: {
                        passages: ["Numbers 24-25", "John 5", "Psalm 73"],
                        description: "Balaam's Final Oracle",
                        estimated_duration: 30
                    },
                    74: {
                        passages: ["Numbers 26-27", "John 6", "Psalm 74"],
                        description: "Second Census",
                        estimated_duration: 35
                    },
                    75: {
                        passages: ["Numbers 28-29", "John 7", "Psalm 75"],
                        description: "Festival Offerings",
                        estimated_duration: 35
                    },
                    76: {
                        passages: ["Numbers 30-31", "John 8", "Psalm 76"],
                        description: "Vows and Vengeance",
                        estimated_duration: 35
                    },
                    77: {
                        passages: ["Numbers 32-33", "John 9", "Psalm 77"],
                        description: "Transjordan Tribes",
                        estimated_duration: 35
                    },
                    78: {
                        passages: ["Numbers 34-35", "John 10", "Psalm 78"],
                        description: "Land Boundaries",
                        estimated_duration: 35
                    },
                    79: {
                        passages: ["Numbers 36", "John 11", "Psalm 79"],
                        description: "Zelophehad's Daughters",
                        estimated_duration: 30
                    },
                    80: {
                        passages: ["Deuteronomy 1-2", "John 12", "Psalm 80"],
                        description: "Israel's Journey",
                        estimated_duration: 35
                    },
                    81: {
                        passages: ["Deuteronomy 3-4", "John 13", "Psalm 81"],
                        description: "Moses' Speech",
                        estimated_duration: 35
                    },
                    82: {
                        passages: ["Deuteronomy 5-6", "John 14", "Psalm 82"],
                        description: "The Ten Commandments",
                        estimated_duration: 35
                    },
                    83: {
                        passages: ["Deuteronomy 7-8", "John 15", "Psalm 83"],
                        description: "Remember the Lord",
                        estimated_duration: 35
                    },
                    84: {
                        passages: ["Deuteronomy 9-10", "John 16", "Psalm 84"],
                        description: "Israel's Rebellion",
                        estimated_duration: 35
                    },
                    85: {
                        passages: ["Deuteronomy 11-12", "John 17", "Psalm 85"],
                        description: "Choose Blessing",
                        estimated_duration: 35
                    },
                    86: {
                        passages: ["Deuteronomy 13-14", "John 18", "Psalm 86"],
                        description: "Idolatry and Clean Foods",
                        estimated_duration: 30
                    },
                    87: {
                        passages: ["Deuteronomy 15-16", "John 19", "Psalm 87"],
                        description: "Laws of Release and Festivals",
                        estimated_duration: 35
                    },
                    88: {
                        passages: ["Deuteronomy 17-18", "John 20", "Psalm 88"],
                        description: "Kings and Prophets",
                        estimated_duration: 35
                    },
                    89: {
                        passages: ["Deuteronomy 19-20", "John 21", "Psalm 89"],
                        description: "Cities of Refuge and Warfare",
                        estimated_duration: 35
                    },
                    91: {
                        passages: ["Deuteronomy 21-22", "Acts 1", "Psalm 91"],
                        description: "Miscellaneous Laws",
                        estimated_duration: 35
                    },
                    92: {
                        passages: ["Deuteronomy 23-24", "Acts 2", "Psalm 92"],
                        description: "Social Justice",
                        estimated_duration: 35
                    },
                    93: {
                        passages: ["Deuteronomy 25-26", "Acts 3", "Psalm 93"],
                        description: "Justice and Gratitude",
                        estimated_duration: 35
                    },
                    94: {
                        passages: ["Deuteronomy 27-28", "Acts 4", "Psalm 94"],
                        description: "Blessings and Curses",
                        estimated_duration: 35
                    },
                    95: {
                        passages: ["Deuteronomy 29-30", "Acts 5", "Psalm 95"],
                        description: "Covenant Renewed",
                        estimated_duration: 35
                    },
                    96: {
                        passages: ["Deuteronomy 31-32", "Acts 6", "Psalm 96"],
                        description: "Moses' Final Words",
                        estimated_duration: 35
                    },
                    97: {
                        passages: ["Deuteronomy 33-34", "Acts 7", "Psalm 97"],
                        description: "Moses' Blessing and Death",
                        estimated_duration: 35
                    },
                    98: {
                        passages: ["Joshua 1-2", "Acts 8", "Psalm 98"],
                        description: "Entering the Promised Land",
                        estimated_duration: 35
                    },
                    99: {
                        passages: ["Joshua 3-4", "Acts 9", "Psalm 99"],
                        description: "Crossing the Jordan",
                        estimated_duration: 35
                    },
                    100: {
                        passages: ["Joshua 5-6", "Acts 10", "Psalm 100"],
                        description: "Conquest of Jericho",
                        estimated_duration: 35
                    },
                    101: {
                        passages: ["Joshua 7-8", "Acts 11", "Psalm 101"],
                        description: "Achan's Sin and Ai's Defeat",
                        estimated_duration: 35
                    },
                    102: {
                        passages: ["Joshua 9-10", "Acts 12", "Psalm 102"],
                        description: "Gibeonite Treaty and Battle",
                        estimated_duration: 35
                    },
                    103: {
                        passages: ["Joshua 11-12", "Acts 13", "Psalm 103"],
                        description: "Summary of Conquests",
                        estimated_duration: 35
                    },
                    104: {
                        passages: ["Joshua 13-14", "Acts 14", "Psalm 104"],
                        description: "Land Division Begins",
                        estimated_duration: 35
                    },
                    105: {
                        passages: ["Joshua 15-16", "Acts 15", "Psalm 105"],
                        description: "Judah and Joseph's Inheritance",
                        estimated_duration: 35
                    },
                    106: {
                        passages: ["Joshua 17-18", "Acts 16", "Psalm 106"],
                        description: "Remaining Tribes' Inheritance",
                        estimated_duration: 35
                    },
                    107: {
                        passages: ["Joshua 19-20", "Acts 17", "Psalm 107"],
                        description: "Cities of Refuge",
                        estimated_duration: 35
                    },
                    108: {
                        passages: ["Joshua 21-22", "Acts 18", "Psalm 108"],
                        description: "Levitical Cities",
                        estimated_duration: 35
                    },
                    109: {
                        passages: ["Joshua 23-24", "Acts 19", "Psalm 109"],
                        description: "Joshua's Farewell",
                        estimated_duration: 35
                    },
                    110: {
                        passages: ["Judges 1-2", "Acts 20", "Proverbs 1"],
                        description: "Incomplete Conquest",
                        estimated_duration: 35
                    },
                    111: {
                        passages: ["Judges 3-4", "Acts 21", "Proverbs 2"],
                        description: "Othniel, Ehud, and Deborah",
                        estimated_duration: 35
                    },
                    112: {
                        passages: ["Judges 5-6", "Acts 22", "Proverbs 3"],
                        description: "Deborah's Song and Gideon",
                        estimated_duration: 35
                    },
                    113: {
                        passages: ["Judges 7-8", "Acts 23", "Proverbs 4"],
                        description: "Gideon's Victory",
                        estimated_duration: 35
                    },
                    114: {
                        passages: ["Judges 9-10", "Acts 24", "Proverbs 5"],
                        description: "Abimelech's Reign",
                        estimated_duration: 35
                    },
                    115: {
                        passages: ["Judges 11-12", "Acts 25", "Proverbs 6"],
                        description: "Jephthah's Vow",
                        estimated_duration: 35
                    },
                    116: {
                        passages: ["Judges 13-14", "Acts 26", "Proverbs 7"],
                        description: "Samson's Birth",
                        estimated_duration: 35
                    },
                    117: {
                        passages: ["Judges 15-16", "Acts 27", "Proverbs 8"],
                        description: "Samson's Strength and Downfall",
                        estimated_duration: 35
                    },
                    118: {
                        passages: ["Judges 17-18", "Acts 28", "Proverbs 9"],
                        description: "Micah's Idolatry",
                        estimated_duration: 35
                    },
                    119: {
                        passages: ["Judges 19-21", "Romans 1", "Proverbs 10"],
                        description: "Civil War in Israel",
                        estimated_duration: 35
                    },
                    121: {
                        passages: ["Ruth 1-2", "Romans 2", "Proverbs 11"],
                        description: "Ruth's Loyalty",
                        estimated_duration: 30
                    },
                    122: {
                        passages: ["Ruth 3-4", "Romans 3", "Proverbs 12"],
                        description: "Boaz and Ruth",
                        estimated_duration: 30
                    },
                    123: {
                        passages: ["1 Samuel 1-2", "Romans 4", "Proverbs 13"],
                        description: "Samuel's Birth and Ministry",
                        estimated_duration: 35
                    },
                    124: {
                        passages: ["1 Samuel 3-4", "Romans 5", "Proverbs 14"],
                        description: "Samuel Hears God's Call",
                        estimated_duration: 35
                    },
                    125: {
                        passages: ["1 Samuel 5-6", "Romans 6", "Proverbs 15"],
                        description: "The Ark Among the Philistines",
                        estimated_duration: 35
                    },
                    126: {
                        passages: ["1 Samuel 7-8", "Romans 7", "Proverbs 16"],
                        description: "Israel Demands a King",
                        estimated_duration: 35
                    },
                    127: {
                        passages: ["1 Samuel 9-10", "Romans 8", "Proverbs 17"],
                        description: "Saul Anointed as King",
                        estimated_duration: 35
                    },
                    128: {
                        passages: ["1 Samuel 11-12", "Romans 9", "Proverbs 18"],
                        description: "Saul's First Victory",
                        estimated_duration: 35
                    },
                    129: {
                        passages: ["1 Samuel 13-14", "Romans 10", "Proverbs 19"],
                        description: "Saul's Disobedience",
                        estimated_duration: 35
                    },
                    130: {
                        passages: ["1 Samuel 15-16", "Romans 11", "Proverbs 20"],
                        description: "David Anointed",
                        estimated_duration: 35
                    },
                    131: {
                        passages: ["1 Samuel 17-18", "Romans 12", "Proverbs 21"],
                        description: "David and Goliath",
                        estimated_duration: 35
                    },
                    132: {
                        passages: ["1 Samuel 19-20", "Romans 13", "Proverbs 22"],
                        description: "David and Jonathan",
                        estimated_duration: 35
                    },
                    133: {
                        passages: ["1 Samuel 21-22", "Romans 14", "Proverbs 23"],
                        description: "David Flees from Saul",
                        estimated_duration: 35
                    },
                    134: {
                        passages: ["1 Samuel 23-24", "Romans 15", "Proverbs 24"],
                        description: "David Spares Saul",
                        estimated_duration: 35
                    },
                    135: {
                        passages: ["1 Samuel 25-26", "Romans 16", "Proverbs 25"],
                        description: "Abigail's Wisdom",
                        estimated_duration: 35
                    },
                    136: {
                        passages: ["1 Samuel 27-28", "1 Corinthians 1", "Proverbs 26"],
                        description: "David Among the Philistines",
                        estimated_duration: 35
                    },
                    137: {
                        passages: ["1 Samuel 29-30", "1 Corinthians 2", "Proverbs 27"],
                        description: "David's Revenge",
                        estimated_duration: 35
                    },
                    138: {
                        passages: ["1 Samuel 31", "1 Corinthians 3", "Proverbs 28"],
                        description: "Death of Saul",
                        estimated_duration: 35
                    },
                    139: {
                        passages: ["2 Samuel 1-2", "1 Corinthians 4", "Proverbs 29"],
                        description: "David Mourns for Saul",
                        estimated_duration: 35
                    },
                    140: {
                        passages: ["2 Samuel 3-4", "1 Corinthians 5", "Proverbs 30"],
                        description: "Civil War Continues",
                        estimated_duration: 35
                    },
                    141: {
                        passages: ["2 Samuel 5-6", "1 Corinthians 6", "Ecclesiastes 1"],
                        description: "David's Kingdom Established",
                        estimated_duration: 35
                    },
                    142: {
                        passages: ["2 Samuel 7-8", "1 Corinthians 7", "Ecclesiastes 2"],
                        description: "God's Covenant with David",
                        estimated_duration: 35
                    },
                    143: {
                        passages: ["2 Samuel 9-10", "1 Corinthians 8", "Ecclesiastes 3"],
                        description: "David's Kindness to Mephibosheth",
                        estimated_duration: 35
                    },
                    144: {
                        passages: ["2 Samuel 11-12", "1 Corinthians 9", "Ecclesiastes 4"],
                        description: "David and Bathsheba",
                        estimated_duration: 35
                    },
                    145: {
                        passages: ["2 Samuel 13-14", "1 Corinthians 10", "Ecclesiastes 5"],
                        description: "Amnon and Absalom",
                        estimated_duration: 35
                    },
                    146: {
                        passages: ["2 Samuel 15-16", "1 Corinthians 11", "Ecclesiastes 6"],
                        description: "Absalom's Rebellion",
                        estimated_duration: 35
                    },
                    147: {
                        passages: ["2 Samuel 17-18", "1 Corinthians 12", "Ecclesiastes 7"],
                        description: "Absalom's Death",
                        estimated_duration: 35
                    },
                    148: {
                        passages: ["2 Samuel 19-20", "1 Corinthians 13", "Ecclesiastes 8"],
                        description: "David Restored",
                        estimated_duration: 35
                    },
                    149: {
                        passages: ["2 Samuel 21-22", "1 Corinthians 14", "Ecclesiastes 9"],
                        description: "David's Last Words",
                        estimated_duration: 35
                    },
                    151: {
                        passages: ["1 Kings 1-2", "1 Corinthians 15", "Song of Solomon 1"],
                        description: "Solomon Becomes King",
                        estimated_duration: 35
                    },
                    152: {
                        passages: ["1 Kings 3-4", "2 Corinthians 1", "Song of Solomon 2"],
                        description: "Solomon's Wisdom",
                        estimated_duration: 35
                    },
                    153: {
                        passages: ["1 Kings 5-6", "2 Corinthians 2", "Song of Solomon 3"],
                        description: "Building the Temple",
                        estimated_duration: 35
                    },
                    154: {
                        passages: ["1 Kings 7-8", "2 Corinthians 3", "Song of Solomon 4"],
                        description: "Dedication of the Temple",
                        estimated_duration: 35
                    },
                    155: {
                        passages: ["1 Kings 9-10", "2 Corinthians 4", "Song of Solomon 5"],
                        description: "Queen of Sheba Visits",
                        estimated_duration: 35
                    },
                    156: {
                        passages: ["1 Kings 11-12", "2 Corinthians 5", "Song of Solomon 6"],
                        description: "Kingdom Divided",
                        estimated_duration: 35
                    },
                    157: {
                        passages: ["1 Kings 13-14", "2 Corinthians 6", "Song of Solomon 7"],
                        description: "Jeroboam's Sin",
                        estimated_duration: 35
                    },
                    158: {
                        passages: ["1 Kings 15-16", "2 Corinthians 7", "Song of Solomon 8"],
                        description: "Kings of Judah and Israel",
                        estimated_duration: 35
                    },
                    159: {
                        passages: ["1 Kings 17-18", "2 Corinthians 8", "Isaiah 1"],
                        description: "Elijah and the Prophets of Baal",
                        estimated_duration: 35
                    },
                    160: {
                        passages: ["1 Kings 19-20", "2 Corinthians 9", "Isaiah 2"],
                        description: "Elijah's Depression and Triumph",
                        estimated_duration: 35
                    },
                    161: {
                        passages: ["1 Kings 21-22", "2 Corinthians 10", "Isaiah 3"],
                        description: "Ahab and Naboth",
                        estimated_duration: 35
                    },
                    162: {
                        passages: ["2 Kings 1-2", "2 Corinthians 11", "Isaiah 4"],
                        description: "Elijah Taken Up",
                        estimated_duration: 35
                    },
                    163: {
                        passages: ["2 Kings 3-4", "2 Corinthians 12", "Isaiah 5"],
                        description: "Elisha's Miracles",
                        estimated_duration: 35
                    },
                    164: {
                        passages: ["2 Kings 5-6", "2 Corinthians 13", "Isaiah 6"],
                        description: "Naaman Healed",
                        estimated_duration: 35
                    },
                    165: {
                        passages: ["2 Kings 7-8", "Galatians 1", "Isaiah 7"],
                        description: "Syrian Siege Lifted",
                        estimated_duration: 35
                    },
                    166: {
                        passages: ["2 Kings 9-10", "Galatians 2", "Isaiah 8"],
                        description: "Jehu's Reign",
                        estimated_duration: 35
                    },
                    167: {
                        passages: ["2 Kings 11-12", "Galatians 3", "Isaiah 9"],
                        description: "Joash Restores the Temple",
                        estimated_duration: 35
                    },
                    168: {
                        passages: ["2 Kings 13-14", "Galatians 4", "Isaiah 10"],
                        description: "Kings of Israel and Judah",
                        estimated_duration: 35
                    },
                    169: {
                        passages: ["2 Kings 15-16", "Galatians 5", "Isaiah 11"],
                        description: "Ahaz's Apostasy",
                        estimated_duration: 35
                    },
                    170: {
                        passages: ["2 Kings 17-18", "Galatians 6", "Isaiah 12"],
                        description: "Fall of Israel",
                        estimated_duration: 35
                    },
                    171: {
                        passages: ["2 Kings 19-20", "Ephesians 1", "Isaiah 13"],
                        description: "Hezekiah's Faith",
                        estimated_duration: 35
                    },
                    172: {
                        passages: ["2 Kings 21-22", "Ephesians 2", "Isaiah 14"],
                        description: "Manasseh's Wickedness",
                        estimated_duration: 35
                    },
                    173: {
                        passages: ["2 Kings 23-24", "Ephesians 3", "Isaiah 15"],
                        description: "Josiah's Reforms",
                        estimated_duration: 35
                    },
                    174: {
                        passages: ["2 Kings 25", "Ephesians 4", "Isaiah 16"],
                        description: "Fall of Jerusalem",
                        estimated_duration: 35
                    },
                    175: {
                        passages: ["1 Chronicles 1-2", "Ephesians 5", "Isaiah 17"],
                        description: "Genealogies",
                        estimated_duration: 35
                    },
                    176: {
                        passages: ["1 Chronicles 3-4", "Ephesians 6", "Isaiah 18"],
                        description: "More Genealogies",
                        estimated_duration: 35
                    },
                    177: {
                        passages: ["1 Chronicles 5-6", "Philippians 1", "Isaiah 19"],
                        description: "Tribes East of Jordan",
                        estimated_duration: 35
                    },
                    178: {
                        passages: ["1 Chronicles 7-8", "Philippians 2", "Isaiah 20"],
                        description: "Benjamin's Tribe",
                        estimated_duration: 35
                    },
                    179: {
                        passages: ["1 Chronicles 9-10", "Philippians 3", "Isaiah 21"],
                        description: "Return from Exile",
                        estimated_duration: 35
                    },
                    181: {
                        passages: ["1 Chronicles 11-12", "Philippians 4", "Isaiah 22"],
                        description: "David's Mighty Men",
                        estimated_duration: 35
                    },
                    182: {
                        passages: ["1 Chronicles 13-14", "Colossians 1", "Isaiah 23"],
                        description: "Ark Returned",
                        estimated_duration: 35
                    },
                    183: {
                        passages: ["1 Chronicles 15-16", "Colossians 2", "Isaiah 24"],
                        description: "Ark Brought to Jerusalem",
                        estimated_duration: 35
                    },
                    184: {
                        passages: ["1 Chronicles 17-18", "Colossians 3", "Isaiah 25"],
                        description: "God's Covenant with David",
                        estimated_duration: 35
                    },
                    185: {
                        passages: ["1 Chronicles 19-20", "Colossians 4", "Isaiah 26"],
                        description: "David's Wars",
                        estimated_duration: 35
                    },
                    186: {
                        passages: ["1 Chronicles 21-22", "1 Thessalonians 1", "Isaiah 27"],
                        description: "David's Census",
                        estimated_duration: 35
                    },
                    187: {
                        passages: ["1 Chronicles 23-24", "1 Thessalonians 2", "Isaiah 28"],
                        description: "Levitical Duties",
                        estimated_duration: 35
                    },
                    188: {
                        passages: ["1 Chronicles 25-26", "1 Thessalonians 3", "Isaiah 29"],
                        description: "Temple Musicians",
                        estimated_duration: 35
                    },
                    189: {
                        passages: ["1 Chronicles 27-28", "1 Thessalonians 4", "Isaiah 30"],
                        description: "Preparations for the Temple",
                        estimated_duration: 35
                    },
                    190: {
                        passages: ["1 Chronicles 29", "1 Thessalonians 5", "Isaiah 31"],
                        description: "David's Final Charge",
                        estimated_duration: 35
                    },
                    191: {
                        passages: ["2 Chronicles 1-2", "2 Thessalonians 1", "Isaiah 32"],
                        description: "Solomon Builds the Temple",
                        estimated_duration: 35
                    },
                    192: {
                        passages: ["2 Chronicles 3-4", "2 Thessalonians 2", "Isaiah 33"],
                        description: "Temple Furnishings",
                        estimated_duration: 35
                    },
                    193: {
                        passages: ["2 Chronicles 5-6", "2 Thessalonians 3", "Isaiah 34"],
                        description: "Dedication of the Temple",
                        estimated_duration: 35
                    },
                    194: {
                        passages: ["2 Chronicles 7-8", "1 Timothy 1", "Isaiah 35"],
                        description: "God's Glory Fills the Temple",
                        estimated_duration: 35
                    },
                    195: {
                        passages: ["2 Chronicles 9-10", "1 Timothy 2", "Isaiah 36"],
                        description: "Queen of Sheba Visits",
                        estimated_duration: 35
                    },
                    196: {
                        passages: ["2 Chronicles 11-12", "1 Timothy 3", "Isaiah 37"],
                        description: "Rehoboam's Reign",
                        estimated_duration: 35
                    },
                    197: {
                        passages: ["2 Chronicles 13-14", "1 Timothy 4", "Isaiah 38"],
                        description: "Abijah's Victory",
                        estimated_duration: 35
                    },
                    198: {
                        passages: ["2 Chronicles 15-16", "1 Timothy 5", "Isaiah 39"],
                        description: "Asa's Reforms",
                        estimated_duration: 35
                    },
                    199: {
                        passages: ["2 Chronicles 17-18", "1 Timothy 6", "Isaiah 40"],
                        description: "Jehoshaphat's Reign",
                        estimated_duration: 35
                    },
                    200: {
                        passages: ["2 Chronicles 19-20", "2 Timothy 1", "Isaiah 41"],
                        description: "Victory Through Praise",
                        estimated_duration: 35
                    },
                    201: {
                        passages: ["2 Chronicles 21-22", "2 Timothy 2", "Isaiah 42"],
                        description: "Jehoram's Wickedness",
                        estimated_duration: 35
                    },
                    202: {
                        passages: ["2 Chronicles 23-24", "2 Timothy 3", "Isaiah 43"],
                        description: "Joash's Reign",
                        estimated_duration: 35
                    },
                    203: {
                        passages: ["2 Chronicles 25-26", "2 Timothy 4", "Isaiah 44"],
                        description: "Amaziah and Uzziah",
                        estimated_duration: 35
                    },
                    204: {
                        passages: ["2 Chronicles 27-28", "Titus 1", "Isaiah 45"],
                        description: "Jotham and Ahaz",
                        estimated_duration: 35
                    },
                    205: {
                        passages: ["2 Chronicles 29-30", "Titus 2", "Isaiah 46"],
                        description: "Hezekiah's Reforms",
                        estimated_duration: 35
                    },
                    206: {
                        passages: ["2 Chronicles 31-32", "Titus 3", "Isaiah 47"],
                        description: "Hezekiah's Faith",
                        estimated_duration: 35
                    },
                    207: {
                        passages: ["2 Chronicles 33-34", "Philemon 1", "Isaiah 48"],
                        description: "Manasseh and Josiah",
                        estimated_duration: 35
                    },
                    208: {
                        passages: ["2 Chronicles 35-36", "Hebrews 1", "Isaiah 49"],
                        description: "Josiah's Passover",
                        estimated_duration: 35
                    },
                    209: {
                        passages: ["Ezra 1-2", "Hebrews 2", "Isaiah 50"],
                        description: "Return from Exile",
                        estimated_duration: 35
                    },
                    211: {
                        passages: ["Ezra 3-4", "Hebrews 3", "Isaiah 51"],
                        description: "Rebuilding the Altar",
                        estimated_duration: 35
                    },
                    212: {
                        passages: ["Ezra 5-6", "Hebrews 4", "Isaiah 52"],
                        description: "Temple Completed",
                        estimated_duration: 35
                    },
                    213: {
                        passages: ["Ezra 7-8", "Hebrews 5", "Isaiah 53"],
                        description: "Ezra's Journey",
                        estimated_duration: 35
                    },
                    214: {
                        passages: ["Ezra 9-10", "Hebrews 6", "Isaiah 54"],
                        description: "Repentance for Intermarriage",
                        estimated_duration: 35
                    },
                    215: {
                        passages: ["Nehemiah 1-2", "Hebrews 7", "Isaiah 55"],
                        description: "Nehemiah's Vision",
                        estimated_duration: 35
                    },
                    216: {
                        passages: ["Nehemiah 3-4", "Hebrews 8", "Isaiah 56"],
                        description: "Rebuilding the Walls",
                        estimated_duration: 35
                    },
                    217: {
                        passages: ["Nehemiah 5-6", "Hebrews 9", "Isaiah 57"],
                        description: "Opposition Overcome",
                        estimated_duration: 35
                    },
                    218: {
                        passages: ["Nehemiah 7-8", "Hebrews 10", "Isaiah 58"],
                        description: "Reading the Law",
                        estimated_duration: 35
                    },
                    219: {
                        passages: ["Nehemiah 9-10", "Hebrews 11", "Isaiah 59"],
                        description: "National Confession",
                        estimated_duration: 35
                    },
                    220: {
                        passages: ["Nehemiah 11-12", "Hebrews 12", "Isaiah 60"],
                        description: "Wall Dedicated",
                        estimated_duration: 35
                    },
                    221: {
                        passages: ["Nehemiah 13", "Hebrews 13", "Isaiah 61"],
                        description: "Reforms Instituted",
                        estimated_duration: 35
                    },
                    222: {
                        passages: ["Esther 1-2", "James 1", "Isaiah 62"],
                        description: "Queen Esther Chosen",
                        estimated_duration: 35
                    },
                    223: {
                        passages: ["Esther 3-4", "James 2", "Isaiah 63"],
                        description: "Haman's Plot",
                        estimated_duration: 35
                    },
                    224: {
                        passages: ["Esther 5-6", "James 3", "Isaiah 64"],
                        description: "Esther's Banquet",
                        estimated_duration: 35
                    },
                    225: {
                        passages: ["Esther 7-8", "James 4", "Isaiah 65"],
                        description: "Haman's Downfall",
                        estimated_duration: 35
                    },
                    226: {
                        passages: ["Esther 9-10", "James 5", "Isaiah 66"],
                        description: "Purim Instituted",
                        estimated_duration: 35
                    },
                    227: {
                        passages: ["Job 1-2", "1 Peter 1", "Jeremiah 1"],
                        description: "Job's Trials",
                        estimated_duration: 35
                    },
                    228: {
                        passages: ["Job 3-4", "1 Peter 2", "Jeremiah 2"],
                        description: "Job's Lament",
                        estimated_duration: 35
                    },
                    229: {
                        passages: ["Job 5-6", "1 Peter 3", "Jeremiah 3"],
                        description: "Eliphaz Speaks",
                        estimated_duration: 35
                    },
                    230: {
                        passages: ["Job 7-8", "1 Peter 4", "Jeremiah 4"],
                        description: "Job Responds",
                        estimated_duration: 35
                    },
                    231: {
                        passages: ["Job 9-10", "1 Peter 5", "Jeremiah 5"],
                        description: "Job Questions God",
                        estimated_duration: 35
                    },
                    232: {
                        passages: ["Job 11-12", "2 Peter 1", "Jeremiah 6"],
                        description: "Zophar Speaks",
                        estimated_duration: 35
                    },
                    233: {
                        passages: ["Job 13-14", "2 Peter 2", "Jeremiah 7"],
                        description: "Job's Defense",
                        estimated_duration: 35
                    },
                    234: {
                        passages: ["Job 15-16", "2 Peter 3", "Jeremiah 8"],
                        description: "Eliphaz Speaks Again",
                        estimated_duration: 35
                    },
                    235: {
                        passages: ["Job 17-18", "1 John 1", "Jeremiah 9"],
                        description: "Job's Despair",
                        estimated_duration: 35
                    },
                    236: {
                        passages: ["Job 19-20", "1 John 2", "Jeremiah 10"],
                        description: "Job's Hope",
                        estimated_duration: 35
                    },
                    237: {
                        passages: ["Job 21-22", "1 John 3", "Jeremiah 11"],
                        description: "Bildad Speaks Again",
                        estimated_duration: 35
                    },
                    238: {
                        passages: ["Job 23-24", "1 John 4", "Jeremiah 12"],
                        description: "Job Seeks God",
                        estimated_duration: 35
                    },
                    239: {
                        passages: ["Job 25-26", "1 John 5", "Jeremiah 13"],
                        description: "Bildad's Final Words",
                        estimated_duration: 35
                    },
                    241: {
                        passages: ["Job 27-28", "Jude 1", "Jeremiah 14"],
                        description: "Job's Wisdom",
                        estimated_duration: 35
                    },
                    242: {
                        passages: ["Job 29-30", "Revelation 1", "Jeremiah 15"],
                        description: "Job's Former Prosperity",
                        estimated_duration: 35
                    },
                    243: {
                        passages: ["Job 31-32", "Revelation 2", "Jeremiah 16"],
                        description: "Job's Integrity",
                        estimated_duration: 35
                    },
                    244: {
                        passages: ["Job 33-34", "Revelation 3", "Jeremiah 17"],
                        description: "Elihu Speaks",
                        estimated_duration: 35
                    },
                    245: {
                        passages: ["Job 35-36", "Revelation 4", "Jeremiah 18"],
                        description: "Elihu's Wisdom",
                        estimated_duration: 35
                    },
                    246: {
                        passages: ["Job 37-38", "Revelation 5", "Jeremiah 19"],
                        description: "God Speaks",
                        estimated_duration: 35
                    },
                    247: {
                        passages: ["Job 39-40", "Revelation 6", "Jeremiah 20"],
                        description: "God's Creation",
                        estimated_duration: 35
                    },
                    248: {
                        passages: ["Job 41-42", "Revelation 7", "Jeremiah 21"],
                        description: "Job's Restoration",
                        estimated_duration: 35
                    },
                    249: {
                        passages: ["Psalms 1-2", "Revelation 8", "Lamentations 1"],
                        description: "The Blessed Life",
                        estimated_duration: 30
                    },
                    250: {
                        passages: ["Psalms 3-4", "Revelation 9", "Lamentations 2"],
                        description: "Trust in God",
                        estimated_duration: 30
                    },
                    251: {
                        passages: ["Psalms 5-6", "Revelation 10", "Lamentations 3"],
                        description: "Morning Prayer",
                        estimated_duration: 30
                    },
                    252: {
                        passages: ["Psalms 7-8", "Revelation 11", "Lamentations 4"],
                        description: "God's Majesty",
                        estimated_duration: 30
                    },
                    253: {
                        passages: ["Psalms 9-10", "Revelation 12", "Lamentations 5"],
                        description: "God's Justice",
                        estimated_duration: 30
                    },
                    254: {
                        passages: ["Psalms 11-12", "Revelation 13", "Ezekiel 1"],
                        description: "Refuge in God",
                        estimated_duration: 30
                    },
                    255: {
                        passages: ["Psalms 13-14", "Revelation 14", "Ezekiel 2"],
                        description: "Hope in Troubles",
                        estimated_duration: 30
                    },
                    256: {
                        passages: ["Psalms 15-16", "Revelation 15", "Ezekiel 3"],
                        description: "Character of the Righteous",
                        estimated_duration: 30
                    },
                    257: {
                        passages: ["Psalms 17-18", "Revelation 16", "Ezekiel 4"],
                        description: "Prayer for Deliverance",
                        estimated_duration: 30
                    },
                    258: {
                        passages: ["Psalms 19-20", "Revelation 17", "Ezekiel 5"],
                        description: "God's Glory in Creation",
                        estimated_duration: 30
                    },
                    259: {
                        passages: ["Psalms 21-22", "Revelation 18", "Ezekiel 6"],
                        description: "The Suffering King",
                        estimated_duration: 30
                    },
                    260: {
                        passages: ["Psalms 23-24", "Revelation 19", "Ezekiel 7"],
                        description: "The Lord is My Shepherd",
                        estimated_duration: 30
                    },
                    261: {
                        passages: ["Psalms 25-26", "Revelation 20", "Ezekiel 8"],
                        description: "Trust in God's Deliverance",
                        estimated_duration: 30
                    },
                    262: {
                        passages: ["Psalms 27-28", "Revelation 21", "Ezekiel 9"],
                        description: "God as Refuge",
                        estimated_duration: 30
                    },
                    263: {
                        passages: ["Psalms 29-30", "Revelation 22", "Ezekiel 10"],
                        description: "Worship and Thanksgiving",
                        estimated_duration: 30
                    },
                    264: {
                        passages: ["Psalms 31-32", "Genesis 1-2", "Ezekiel 11"],
                        description: "God's Faithfulness",
                        estimated_duration: 30
                    },
                    265: {
                        passages: ["Psalms 33-34", "Genesis 3-4", "Ezekiel 12"],
                        description: "Joy in Righteousness",
                        estimated_duration: 30
                    },
                    266: {
                        passages: ["Psalms 35-36", "Genesis 5-6", "Ezekiel 13"],
                        description: "Prayer for Justice",
                        estimated_duration: 30
                    },
                    267: {
                        passages: ["Psalms 37-38", "Genesis 7-8", "Ezekiel 14"],
                        description: "Do Not Fret Over Evil",
                        estimated_duration: 30
                    },
                    268: {
                        passages: ["Psalms 39-40", "Genesis 9-10", "Ezekiel 15"],
                        description: "Reflection on Life",
                        estimated_duration: 30
                    },
                    269: {
                        passages: ["Psalms 41-42", "Genesis 11-12", "Ezekiel 16"],
                        description: "Longing for God",
                        estimated_duration: 30
                    },
                    270: {
                        passages: ["2 Kings 22-23", "1 Corinthians 12", "Isaiah 1"],
                        description: "Josiah's Reforms",
                        estimated_duration: 35
                    },
                    271: {
                        passages: ["2 Kings 24-25", "1 Corinthians 13", "Isaiah 2"],
                        description: "Fall of Jerusalem",
                        estimated_duration: 35
                    },
                    272: {
                        passages: ["1 Chronicles 1-2", "1 Corinthians 14", "Isaiah 3"],
                        description: "Genealogies of Israel",
                        estimated_duration: 35
                    },
                    273: {
                        passages: ["1 Chronicles 3-4", "1 Corinthians 15", "Isaiah 4"],
                        description: "Descendants of Judah",
                        estimated_duration: 35
                    },
                    274: {
                        passages: ["1 Chronicles 5-6", "2 Corinthians 1", "Isaiah 5"],
                        description: "Tribes East of Jordan",
                        estimated_duration: 35
                    },
                    275: {
                        passages: ["1 Chronicles 7-8", "2 Corinthians 2", "Isaiah 6"],
                        description: "Benjamin's Tribe",
                        estimated_duration: 35
                    },
                    276: {
                        passages: ["1 Chronicles 9-10", "2 Corinthians 3", "Isaiah 7"],
                        description: "Return from Exile",
                        estimated_duration: 35
                    },
                    277: {
                        passages: ["1 Chronicles 11-12", "2 Corinthians 4", "Isaiah 8"],
                        description: "David's Mighty Men",
                        estimated_duration: 35
                    },
                    278: {
                        passages: ["1 Chronicles 13-14", "2 Corinthians 5", "Isaiah 9"],
                        description: "Ark Returned",
                        estimated_duration: 35
                    },
                    279: {
                        passages: ["1 Chronicles 15-16", "2 Corinthians 6", "Isaiah 10"],
                        description: "Ark Brought to Jerusalem",
                        estimated_duration: 35
                    },
                    280: {
                        passages: ["1 Chronicles 17-18", "2 Corinthians 7", "Isaiah 11"],
                        description: "God's Covenant with David",
                        estimated_duration: 35
                    },
                    281: {
                        passages: ["1 Chronicles 19-20", "2 Corinthians 8", "Isaiah 12"],
                        description: "David's Wars",
                        estimated_duration: 35
                    },
                    282: {
                        passages: ["1 Chronicles 21-22", "2 Corinthians 9", "Isaiah 13"],
                        description: "David's Census",
                        estimated_duration: 35
                    },
                    283: {
                        passages: ["1 Chronicles 23-24", "2 Corinthians 10", "Isaiah 14"],
                        description: "Levitical Duties",
                        estimated_duration: 35
                    },
                    284: {
                        passages: ["1 Chronicles 25-26", "2 Corinthians 11", "Isaiah 15"],
                        description: "Temple Musicians",
                        estimated_duration: 35
                    },
                    285: {
                        passages: ["1 Chronicles 27-28", "2 Corinthians 12", "Isaiah 16"],
                        description: "Preparations for the Temple",
                        estimated_duration: 35
                    },
                    286: {
                        passages: ["1 Chronicles 29", "2 Corinthians 13", "Isaiah 17"],
                        description: "David's Final Charge",
                        estimated_duration: 35
                    },
                    287: {
                        passages: ["2 Chronicles 1-2", "Galatians 1", "Isaiah 18"],
                        description: "Solomon Builds the Temple",
                        estimated_duration: 35
                    },
                    288: {
                        passages: ["2 Chronicles 3-4", "Galatians 2", "Isaiah 19"],
                        description: "Temple Furnishings",
                        estimated_duration: 35
                    },
                    289: {
                        passages: ["2 Chronicles 5-6", "Galatians 3", "Isaiah 20"],
                        description: "Dedication of the Temple",
                        estimated_duration: 35
                    },
                    290: {
                        passages: ["2 Chronicles 7-8", "Galatians 4", "Isaiah 21"],
                        description: "God's Glory Fills the Temple",
                        estimated_duration: 35
                    },
                    291: {
                        passages: ["2 Chronicles 9-10", "Galatians 5", "Isaiah 22"],
                        description: "Queen of Sheba Visits",
                        estimated_duration: 35
                    },
                    292: {
                        passages: ["2 Chronicles 11-12", "Galatians 6", "Isaiah 23"],
                        description: "Rehoboam's Reign",
                        estimated_duration: 35
                    },
                    293: {
                        passages: ["2 Chronicles 13-14", "Ephesians 1", "Isaiah 24"],
                        description: "Abijah's Victory",
                        estimated_duration: 35
                    },
                    294: {
                        passages: ["2 Chronicles 15-16", "Ephesians 2", "Isaiah 25"],
                        description: "Asa's Reforms",
                        estimated_duration: 35
                    },
                    295: {
                        passages: ["2 Chronicles 17-18", "Ephesians 3", "Isaiah 26"],
                        description: "Jehoshaphat's Reign",
                        estimated_duration: 35
                    },
                    296: {
                        passages: ["2 Chronicles 19-20", "Ephesians 4", "Isaiah 27"],
                        description: "Victory Through Praise",
                        estimated_duration: 35
                    },
                    297: {
                        passages: ["2 Chronicles 21-22", "Ephesians 5", "Isaiah 28"],
                        description: "Jehoram's Wickedness",
                        estimated_duration: 35
                    },
                    298: {
                        passages: ["2 Chronicles 23-24", "Ephesians 6", "Isaiah 29"],
                        description: "Joash's Reign",
                        estimated_duration: 35
                    },
                    299: {
                        passages: ["2 Chronicles 25-26", "Philippians 1", "Isaiah 30"],
                        description: "Amaziah and Uzziah",
                        estimated_duration: 35
                    },
                    300: {
                        passages: ["Jeremiah 29-30", "Ephesians 1", "Daniel 1"],
                        description: "Hope in Exile",
                        estimated_duration: 30
                    },
                    301: {
                        passages: ["Jeremiah 31-32", "Ephesians 2", "Daniel 2"],
                        description: "New Covenant Promised",
                        estimated_duration: 30
                    },
                    302: {
                        passages: ["Jeremiah 33-34", "Ephesians 3", "Daniel 3"],
                        description: "Restoration of Jerusalem",
                        estimated_duration: 30
                    },
                    303: {
                        passages: ["Jeremiah 35-36", "Ephesians 4", "Daniel 4"],
                        description: "Faithfulness Rewarded",
                        estimated_duration: 30
                    },
                    304: {
                        passages: ["Jeremiah 37-38", "Ephesians 5", "Daniel 5"],
                        description: "Jeremiah in Prison",
                        estimated_duration: 30
                    },
                    305: {
                        passages: ["Jeremiah 39-40", "Ephesians 6", "Daniel 6"],
                        description: "Fall of Jerusalem",
                        estimated_duration: 30
                    },
                    306: {
                        passages: ["Jeremiah 41-42", "Colossians 1", "Daniel 7"],
                        description: "Gedaliah's Murder",
                        estimated_duration: 30
                    },
                    307: {
                        passages: ["Jeremiah 43-44", "Colossians 2", "Daniel 8"],
                        description: "Flight to Egypt",
                        estimated_duration: 30
                    },
                    308: {
                        passages: ["Jeremiah 45-46", "Colossians 3", "Daniel 9"],
                        description: "Prophecies Against Nations",
                        estimated_duration: 30
                    },
                    309: {
                        passages: ["Jeremiah 47-48", "Colossians 4", "Daniel 10"],
                        description: "Judgment on Philistia and Moab",
                        estimated_duration: 30
                    },
                    310: {
                        passages: ["Jeremiah 49-50", "1 Thessalonians 1", "Daniel 11"],
                        description: "Prophecies Against Ammon and Babylon",
                        estimated_duration: 30
                    },
                    311: {
                        passages: ["Jeremiah 51-52", "1 Thessalonians 2", "Daniel 12"],
                        description: "Babylon's Fall",
                        estimated_duration: 30
                    },
                    312: {
                        passages: ["Lamentations 1-2", "1 Thessalonians 3", "Hosea 1"],
                        description: "Mourning Over Jerusalem",
                        estimated_duration: 30
                    },
                    313: {
                        passages: ["Lamentations 3-4", "1 Thessalonians 4", "Hosea 2"],
                        description: "Hope Amidst Despair",
                        estimated_duration: 30
                    },
                    314: {
                        passages: ["Lamentations 5", "1 Thessalonians 5", "Hosea 3"],
                        description: "Prayer for Restoration",
                        estimated_duration: 30
                    },
                    315: {
                        passages: ["Ezekiel 1-2", "2 Thessalonians 1", "Hosea 4"],
                        description: "Ezekiel's Vision",
                        estimated_duration: 30
                    },
                    316: {
                        passages: ["Ezekiel 3-4", "2 Thessalonians 2", "Hosea 5"],
                        description: "Ezekiel's Call",
                        estimated_duration: 30
                    },
                    317: {
                        passages: ["Ezekiel 5-6", "2 Thessalonians 3", "Hosea 6"],
                        description: "Judgment on Jerusalem",
                        estimated_duration: 30
                    },
                    318: {
                        passages: ["Ezekiel 7-8", "1 Timothy 1", "Hosea 7"],
                        description: "End of Israel's Sin",
                        estimated_duration: 30
                    },
                    319: {
                        passages: ["Ezekiel 9-10", "1 Timothy 2", "Hosea 8"],
                        description: "Glory Departs from the Temple",
                        estimated_duration: 30
                    },
                    320: {
                        passages: ["Ezekiel 11-12", "1 Timothy 3", "Hosea 9"],
                        description: "Exile Foretold",
                        estimated_duration: 30
                    },
                    321: {
                        passages: ["Ezekiel 13-14", "1 Timothy 4", "Hosea 10"],
                        description: "False Prophets Condemned",
                        estimated_duration: 30
                    },
                    322: {
                        passages: ["Ezekiel 15-16", "1 Timothy 5", "Hosea 11"],
                        description: "Parable of the Vine",
                        estimated_duration: 30
                    },
                    323: {
                        passages: ["Ezekiel 17-18", "1 Timothy 6", "Hosea 12"],
                        description: "Parable of the Eagles",
                        estimated_duration: 30
                    },
                    324: {
                        passages: ["Ezekiel 19-20", "2 Timothy 1", "Hosea 13"],
                        description: "Israel's Rebellion",
                        estimated_duration: 30
                    },
                    325: {
                        passages: ["Ezekiel 21-22", "2 Timothy 2", "Hosea 14"],
                        description: "Sword Against Jerusalem",
                        estimated_duration: 30
                    },
                    326: {
                        passages: ["Ezekiel 23-24", "2 Timothy 3", "Joel 1"],
                        description: "Judgment on Two Sisters",
                        estimated_duration: 30
                    },
                    327: {
                        passages: ["Ezekiel 25-26", "2 Timothy 4", "Joel 2"],
                        description: "Prophecies Against Nations",
                        estimated_duration: 30
                    },
                    328: {
                        passages: ["Ezekiel 27-28", "Titus 1", "Joel 3"],
                        description: "Lament for Tyre",
                        estimated_duration: 30
                    },
                    329: {
                        passages: ["Ezekiel 29-30", "Titus 2", "Amos 1"],
                        description: "Prophecy Against Egypt",
                        estimated_duration: 30
                    },
                    330: {
                        passages: ["Ezekiel 36-37", "1 Timothy 1", "Hosea 1"],
                        description: "Valley of Dry Bones",
                        estimated_duration: 30
                    },
                    331: {
                        passages: ["Ezekiel 38-39", "Titus 3", "Amos 2"],
                        description: "Gog and Magog",
                        estimated_duration: 30
                    },
                    332: {
                        passages: ["Ezekiel 40-41", "Philemon 1", "Amos 3"],
                        description: "Vision of the Temple",
                        estimated_duration: 30
                    },
                    333: {
                        passages: ["Ezekiel 42-43", "Hebrews 1", "Amos 4"],
                        description: "Temple Measurements",
                        estimated_duration: 30
                    },
                    334: {
                        passages: ["Ezekiel 44-45", "Hebrews 2", "Amos 5"],
                        description: "Ordinances for Priests",
                        estimated_duration: 30
                    },
                    335: {
                        passages: ["Ezekiel 46-47", "Hebrews 3", "Amos 6"],
                        description: "Rituals and Waters",
                        estimated_duration: 30
                    },
                    336: {
                        passages: ["Ezekiel 48", "Hebrews 4", "Amos 7"],
                        description: "Land Allotments",
                        estimated_duration: 30
                    },
                    337: {
                        passages: ["Daniel 2-3", "Hebrews 5", "Amos 8"],
                        description: "Nebuchadnezzar's Dream",
                        estimated_duration: 30
                    },
                    338: {
                        passages: ["Daniel 4-5", "Hebrews 6", "Amos 9"],
                        description: "Kingdoms Rise and Fall",
                        estimated_duration: 30
                    },
                    339: {
                        passages: ["Daniel 6-7", "Hebrews 7", "Obadiah 1"],
                        description: "Daniel in the Lions' Den",
                        estimated_duration: 30
                    },
                    340: {
                        passages: ["Daniel 8-9", "Hebrews 8", "Jonah 1"],
                        description: "Vision of the Ram and Goat",
                        estimated_duration: 30
                    },
                    341: {
                        passages: ["Daniel 10-11", "Hebrews 9", "Jonah 2"],
                        description: "Prophecy of Future Events",
                        estimated_duration: 30
                    },
                    342: {
                        passages: ["Daniel 12", "Hebrews 10", "Jonah 3"],
                        description: "Time of the End",
                        estimated_duration: 30
                    },
                    343: {
                        passages: ["Hosea 1-2", "Hebrews 11", "Jonah 4"],
                        description: "Hosea's Family",
                        estimated_duration: 30
                    },
                    344: {
                        passages: ["Hosea 3-4", "Hebrews 12", "Micah 1"],
                        description: "Israel's Unfaithfulness",
                        estimated_duration: 30
                    },
                    345: {
                        passages: ["Hosea 5-6", "Hebrews 13", "Micah 2"],
                        description: "Call to Repentance",
                        estimated_duration: 30
                    },
                    346: {
                        passages: ["Hosea 7-8", "James 1", "Micah 3"],
                        description: "Israel's Backsliding",
                        estimated_duration: 30
                    },
                    347: {
                        passages: ["Hosea 9-10", "James 2", "Micah 4"],
                        description: "Punishment for Sin",
                        estimated_duration: 30
                    },
                    348: {
                        passages: ["Hosea 11-12", "James 3", "Micah 5"],
                        description: "God's Love for Israel",
                        estimated_duration: 30
                    },
                    349: {
                        passages: ["Hosea 13-14", "James 4", "Micah 6"],
                        description: "Promise of Restoration",
                        estimated_duration: 30
                    },
                    350: {
                        passages: ["Joel 1-2", "James 5", "Micah 7"],
                        description: "Locust Plague and Day of the Lord",
                        estimated_duration: 30
                    },
                    351: {
                        passages: ["Joel 3", "1 Peter 1", "Nahum 1"],
                        description: "Judgment and Blessing",
                        estimated_duration: 30
                    },
                    352: {
                        passages: ["Amos 1-2", "1 Peter 2", "Nahum 2"],
                        description: "Judgment on Neighboring Nations",
                        estimated_duration: 30
                    },
                    353: {
                        passages: ["Amos 3-4", "1 Peter 3", "Nahum 3"],
                        description: "Israel's Sin and Punishment",
                        estimated_duration: 30
                    },
                    354: {
                        passages: ["Amos 5-6", "1 Peter 4", "Habakkuk 1"],
                        description: "Call to Seek the Lord",
                        estimated_duration: 30
                    },
                    355: {
                        passages: ["Amos 7-8", "1 Peter 5", "Habakkuk 2"],
                        description: "Visions of Judgment",
                        estimated_duration: 30
                    },
                    356: {
                        passages: ["Amos 9", "2 Peter 1", "Habakkuk 3"],
                        description: "Restoration of David's Kingdom",
                        estimated_duration: 30
                    },
                    357: {
                        passages: ["Obadiah 1", "2 Peter 2", "Zephaniah 1"],
                        description: "Judgment on Edom",
                        estimated_duration: 30
                    },
                    358: {
                        passages: ["Jonah 1-2", "2 Peter 3", "Zephaniah 2"],
                        description: "Jonah Flees from God",
                        estimated_duration: 30
                    },
                    359: {
                        passages: ["Jonah 3-4", "1 John 1", "Zephaniah 3"],
                        description: "Nineveh Repents",
                        estimated_duration: 30
                    },
                    360: {
                        passages: ["Malachi 3-4", "Revelation 19", "Psalm 146"],
                        description: "Final Prophecies",
                        estimated_duration: 25
                    },
                    361: {
                        passages: ["Revelation 1-2", "Psalm 147"],
                        description: "Letters to the Churches",
                        estimated_duration: 25
                    },
                    362: {
                        passages: ["Revelation 3-4", "Psalm 148"],
                        description: "Throne Room Vision",
                        estimated_duration: 25
                    },
                    363: {
                        passages: ["Revelation 5-6", "Psalm 149"],
                        description: "Scroll and Seven Seals",
                        estimated_duration: 25
                    },
                    364: {
                        passages: ["Revelation 7-8", "Psalm 150"],
                        description: "Sealed Saints and Trumpets",
                        estimated_duration: 25
                    },
                    365: {
                        passages: ["Revelation 21-22", "Psalm 150"],
                        description: "The New Creation",
                        estimated_duration: 25
                    }
                }
            }
        };

        this.userProgress = {};
    }

    getPlan(planId) {
        return this.plans[planId] || null;
    }

    getDailyReading(planId, day) {
        const plan = this.plans[planId];
        if (!plan || !plan.days[day]) return null;
        
        return {
            ...plan.days[day],
            planTitle: plan.title,
            day: day,
            totalDays: plan.duration
        };
    }

    markDayComplete(planId, day) {
        const progressKey = `reading_plan_${planId}_progress`;
        let progress = JSON.parse(localStorage.getItem(progressKey) || '{"completedDays":[]}');
        
        if (!progress.completedDays.includes(day)) {
            progress.completedDays.push(day);
            progress.lastCompleted = new Date().toISOString();
            progress.currentDay = day + 1;  // Update current day
            localStorage.setItem(progressKey, JSON.stringify(progress));
            
            // Update the in-memory progress
            if (!this.userProgress[planId]) {
                this.userProgress[planId] = {};
            }
            this.userProgress[planId] = progress;
        }
        
        return progress;
    }

    getPlanList() {
        return Object.values(this.plans);
    }

    getActivePlans() {
        const plans = this.getPlanList();
        return plans.filter(plan => {
            const progress = this.getProgress(plan.id);
            return progress && progress.startDate && !progress.isCompleted;
        });
    }

    getProgress(planId) {
        const progressKey = `reading_plan_${planId}_progress`;
        const stored = localStorage.getItem(progressKey);
        if (!stored) return null;

        const progress = JSON.parse(stored);
        const plan = this.plans[planId];
        
        if (!plan) return null;
        
        const completedDays = progress.completedDays || [];
        const percentComplete = (completedDays.length / plan.duration) * 100;
        const daysRemaining = plan.duration - completedDays.length;
        const isCompleted = completedDays.length === plan.duration;
        
        return {
            startDate: new Date(progress.startDate),
            currentDay: progress.currentDay,
            completedDays: completedDays,
            percentComplete: Math.round(percentComplete),
            daysRemaining: daysRemaining,
            isCompleted: isCompleted,
            lastCompleted: progress.lastCompleted ? new Date(progress.lastCompleted) : null
        };
    }

    startPlan(planId) {
        if (!this.plans[planId]) return null;
        
        const progress = {
            startDate: new Date().toISOString(),
            currentDay: 1,
            completedDays: [],
            lastCompleted: null
        };
        
        localStorage.setItem(`reading_plan_${planId}_progress`, JSON.stringify(progress));
        return progress;
    }

    getNextReading(planId) {
        const progress = this.getProgress(planId);
        if (!progress) return null;
        
        const nextDay = progress.completedDays.length + 1;
        return this.getDailyReading(planId, nextDay);
    }

    getEstimatedCompletion(planId) {
        const progress = this.getProgress(planId);
        if (!progress) return null;
        
        const remainingDays = progress.totalDays - progress.completedDays.length;
        const estimatedDate = new Date();
        estimatedDate.setDate(estimatedDate.getDate() + remainingDays);
        
        return estimatedDate;
    }
}

// Initialize the controller
const readingPlanController = new ReadingPlanController();
readingPlanController.loadProgress();
