const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Quotes and Images for Light Mode
const lightQuotes = [
    "“In the quiet of the snow, I hear your voice calling me a melody that warms even the frostiest nights Together we turn winter into a season of love.”❄️❤️" ,
    "“Every snowflake that falls carries a whisper of your love, gentle and unique, melting the ice within With you, winter feels like a tender embrace.”🌨️💖",
    "“The chill of winter fades when I’m near you, your love is a fire that even storms can’t quench. Through blizzards and frost, I’ll always find you.” 🤝🔥"
];
const lightImages = [
    "image8.jpg",
    "image9.jpg",
    "image7.jpg"
   
];

// Quotes and Images for Dark Mode
const darkQuotes = [
    "“Every moment with you feels like a snowflake drifting softly from the heavens, unique and fleeting yet eternal in its beauty.The way you smile ignites a spark within me, melting every worry and fear. With you, love isn’t a season—it’s the forever we create.” ✨❤️",
    "“Even when the world is wrapped in frost and silence, your love speaks louder than any storm. Your touch is a gentle breeze that carries the promise of endless tomorrows. With you, I don’t just survive the winter; I thrive within its magic.” ❄️💖🌹",
    "“Our love is like winter's first snow—pure, unexpected, and breathtakingly beautiful.Each moment we share feels like a delicate snowflake, fleeting yet forever etched in my memory. You are my every sunrise, my every star in the cold, endless night.” 🌟❄️💍"
];
const darkImages = [
    "image4.jpg",
    "image5.jpg",
    "image6.jpg"
];

// Get elements to update
const quotes = [
    document.getElementById('quote-1'),
    document.getElementById('quote-2'),
    document.getElementById('quote-3')
];
const images = [
    document.getElementById('image-1'),
    document.getElementById('image-2'),
    document.getElementById('image-3')
];

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Switch Quotes and Images
    if (body.classList.contains('light-mode')) {
        quotes.forEach((quote, index) => quote.innerHTML = lightQuotes[index]);
        images.forEach((image, index) => image.src = lightImages[index]);
    } else {
        quotes.forEach((quote, index) => quote.innerHTML = darkQuotes[index]);
        images.forEach((image, index) => image.src = darkImages[index]);
    }
});
