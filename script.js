// Danh sách các câu trích dẫn
const quotes = [
    "Chúc bạn sinh nhật vui vẻ, thật nhiều hạnh phúc và niềm vui!",
    "Mỗi năm trôi qua là thêm một cơ hội để sống thật tốt hơn, bạn nhé!",
    "Chúc mừng sinh nhật! Chúc bạn một năm đầy may mắn và thành công!",
    "Hôm nay là một ngày đặc biệt, chúc bạn có thật nhiều niềm vui và tiếng cười!",
    "Sinh nhật vui vẻ! Hãy tận hưởng mọi khoảnh khắc tuyệt vời hôm nay!",
    "Thêm một tuổi, thêm một hành trình mới. Hãy luôn hạnh phúc, bạn nhé!",
    "Chúc bạn một sinh nhật thật ý nghĩa, ngập tràn yêu thương và niềm vui!"
];

// Hàm thay đổi câu trích dẫn khi nhấn vào màn hình
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
}
