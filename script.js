const quotes = [
    {
        text: "quotes raats laf voo nghiax khoong cos ys gif heets",
        author: "My Dieu"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    }
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerText = `“${quote.text}”`;
    document.querySelector(".quote-author").innerText = quote.author;
}
