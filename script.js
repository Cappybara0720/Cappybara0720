const quotes = [
    {
        text: "Never give up because you never know if the next try is going to be the one that works.",
        author: "Mary Kay Ash"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerText = `“${quote.text}”`;
    document.querySelector(".quote-author").innerText = `— ${quote.author}`;
}
