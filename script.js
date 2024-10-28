const quotes = [
    {
        text: "Text nhảm không có nghĩa 1.",
        author: "Mary Kay Ash"
    },
    {
        text: "Text nhảm không có nghĩa 2.",
        author: "Steve Jobs"
    },
    {
        text: "text nhảm không có nghĩa 3.",
        author: "Theodore Roosevelt"
    }
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerText = `“${quote.text}”`;
    document.querySelector(".quote-author").innerText = `— ${quote.author}`;
}
