const quotes = [
    { text: "Never give up because you never know if the next try is going to be the one that works.", author: "Mary Kay Ash" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById("authorDisplay").innerText = `- ${quotes[randomIndex].author}`;
}
