const quotes = [
    { text: "Chúc rằng anh sẽ sớm chinh phục những vùng đất mơ ước, để lại dấu ấn trên bản đồ khám phá của mình. 🎉✨", author: "Giang Nguyễn" },
    { text: "Mong anh tràn đầy năng lượng và cảm hứng khám phá điều mới mẻ trong sự nghiệp và cuộc sống!", author: "Hưng Nguyễn" },
    { text: "Ước iem Chấy một đời an yên.", author: "Chí Nguyễn" },
    { text: "Chúc lấy vợ thành công, chúc Công bớt mỏ hỗn", author: "Công Nguyễn" }
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById("authorDisplay").innerText = `- ${quotes[randomIndex].author}`;
}
