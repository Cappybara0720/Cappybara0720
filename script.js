const quotes = [
    { text: "Chúc rằng anh sẽ sớm chinh phục những vùng đất mơ ước, để lại dấu ấn trên bản đồ khám phá của mình. 🎉✨", author: "for GiangND" },
    { text: "Mong anh tràn đầy năng lượng và cảm hứng khám phá điều mới mẻ trong sự nghiệp và cuộc sống!", author: "for HungNV" },
    { text: "Ước iem Chấy một đời an yên 🧚🏻.", author: "for ChiNH" },
    { text: "Mong Công lấy vợ thành công, chúc em bớt mỏ hỗn", author: "for CongNT" },
    { text: "Chúc anh Thanh luôn giữ mãi được những năng lượng tích cực và vui vẻ như hiện tại nhé ạ 😁.", author: "for ThanhND" },
    { text: "Chúc anh Hiệp có thật nhiều niềm vui mới và sớm đạt được siêu phẩm game 🎮", author: "for HiepKD" },
    { text: "Chúc a Mít Đóc luôn vui tươi như hoe 🌸, vẽ điệp như tranh 🎨", author: "for HieuPD" },
    { text: "Mong a Kiên luôn mạnh khỏe, vui vẻ, sớm lấy vợ 👰", author: "for KienNt " },
    { text: "Chúc anh Thụ luôn vui vẻ, hạnh phúc 🎉", author: "for TungNT " },
];

let currentIndex = 0;

function changeQuote() {
    // Hiển thị câu trích dẫn và tác giả tại chỉ số hiện tại
    document.getElementById("quoteDisplay").innerText = `"${quotes[currentIndex].text}"`;
    document.getElementById("authorDisplay").innerText = `- ${quotes[currentIndex].author}`;

    // Tăng chỉ số cho lần hiển thị tiếp theo
    currentIndex++;

    // Nếu đạt đến cuối danh sách, quay lại đầu danh sách
    if (currentIndex >= quotes.length) {
        currentIndex = 0;
    }
}
