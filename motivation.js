document.addEventListener("DOMContentLoaded", function() {
    // Array of motivational quotes and authors
    const quotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        { quote: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
    ];

    // Function to get and display a random quote
    function getRandomQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quote-text").textContent = `"${randomQuote.quote}"`;
        document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
    }

    // Load a random quote when the page loads
    getRandomQuote();
});
