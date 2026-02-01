// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name
    valentineName: "Kunja",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine, Kunja? 💜",

    // Friends-themed floating emojis
    floatingEmojis: {
        hearts: ['💜', '💖', '🦞', '💍'],  // Purple hearts and Lobsters
        bears: ['☕', '🐥', '🦆']          // Central Perk coffee and the Chick/Duck
    },

    // Mondler Questions and answers
    questions: {
        first: {
            text: "Kunja... you make me happier than I ever thought I could be. And if you’ll let me, I will spend the rest of my life trying to make you feel the same way. Will you be my Valentine?",
            yesBtn: "I KNEW IT!",
            noBtn: "Could I BE more rejected?",
            secretAnswer: "I'll be there for you! ❤️"
        },
        second: {
            text: "How much do you love me, Kunja?",
            startText: "Scale of 1 to Monica's Cleanliness...",
            nextBtn: "Next! 🦞"
        },
        third: {
            text: "Will you be my Valentine and my lobster, Kunja? 🌹", 
            yesBtn: "YES! ☕",
            noBtn: "Only if Joey doesn't share food."
        }
    },

    // Love meter messages (Mondler Edition)
    loveMessages: {
        extreme: "WE WERE NOT ON A BREAK! (I love you!) 🥰🚀💜",
        high: "You're my lobster, Kunja! 🦞💜",
        normal: "More than Chandler loves his 19-inch TV! 🥰"
    },

    // Celebration screen
    celebration: {
        title: "I KNEW IT! 💍🎉💜",
        message: "Kunja, you've made me the happiest person in the world! Come get your gift, a big hug, and a coffee at Central Perk!",
        emojis: "💍💜🦞☕🐥🦆💋"
    },

    // Monica's Apartment Color Scheme
    colors: {
        backgroundStart: "#7048A0",      // Monica's Purple Walls
        backgroundEnd: "#4B2C69",        // Darker Purple
        buttonBackground: "#FFD700",     // Yellow Peephole Frame
        buttonHover: "#E6C200",          // Slightly darker yellow
        textColor: "#FFFFFF"             // White text for high contrast
    },

    // Animation settings
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",
        bounceSpeed: "0.4s",
        heartExplosionSize: 1.8
    },

    // Background Music (Friends Theme)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Keeping your default or replace with Friends instrumental
        startText: "🎵 Play 'The One With The Valentine'",
        stopText: "🔇 Mute",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;
