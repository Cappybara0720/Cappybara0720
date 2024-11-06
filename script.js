const quotes = [
    { text: "Chúc rằng anh sẽ sớm chinh phục những vùng đất mơ ước, để lại dấu ấn trên bản đồ khám phá của mình. 🎉✨", author: "for GiangND" },
    { text: "Mong anh tràn đầy năng lượng và cảm hứng khám phá điều mới mẻ trong sự nghiệp và cuộc sống!", author: "for HungNV" },
    { text: "Ước iem Chấy một đời an yên 🧚🏻.", author: "for ChiNH" },
    { text: "Mong Công lấy vợ thành công, chúc em bớt mỏ hỗn", author: "for CongNT" },
    { text: "Chúc anh Thanh luôn giữ mãi được những năng lượng tích cực và vui vẻ như hiện tại nhé ạ 😁.", author: "for ThanhND" },
    { text: "Mong anh Hiệp có thật nhiều niềm vui mới và sớm đạt được siêu phẩm game 🎮", author: "for HiepKD" },
    { text: "Chúc a Mít Đóc luôn vui tươi như hoe 🌸, vẽ điệp như tranh 🎨", author: "for HieuPD" },
    { text: "Mong a Kiên luôn mạnh khỏe, vui vẻ, sớm lấy vợ 👰", author: "for KienNt " },
    { text: "Chúc anh Thụ luôn vui vẻ, hạnh phúc 🎉", author: "for TungNT " },
    { text: "Ước anh có sức khoẻ, có niềm vui, có hạnh phúc, có tiền tài", author: "for QuyetND " },
    { text: "Chúc anh cầu được ước thấy, mơ gì được nấy", author: "for QuanNA " },
    { text: "Mong anh Lâm cuộc sống vui tươi, cuộc đời hạnh phúc", author: "for LamNT " },
    { text: "Chúc Đức luôn hạnh phúc không xì trét, tràn đầy năng lượng tấu hề và ca hát 🎤", author: "for DucNV " },
    { text: "Mong em sớm đạt Ielts 9.0, bắn tiếng anh ầm ầm như người bản xứ 🤩.", author: "for PhucVH" },
    { text: "Chúc Nam đạt được nhiều thành tích trong học tập và ngày càng phát triển trong công việc", author: "for NamLH " },
    { text: "Gửi đến chàng MC đẹp trai và ga lăng lời chúc tốt đẹp nhất nhân ngày Quốc tế Nam giới nhé ạ 😉.", author: "for TungST " },
    { text: "Chúc Nghĩa luôn vui vẻ, yêu đời, tràn đầy năng lượng 😊", author: "for NghiaDT " },
    { text: "Mong mọi điều tốt đẹp nhất trên thế giới này đều dành cho anh", author: "for ThuyNT " },
    { text: "Chúc anh Tiến Anh sức khỏe, ngủ đủ giấc, bớt ngủ quên. Chúc anh sớm tìm được mục đích đi làm. ", author: "for AnhDT " },
    { text: "Chúc bạn Thức sớm được tháo niềng", author: "for ThucNG " },
    { text: "Mong anh Linh luôn vui vẻ, hạnh phúc, luôn tràn đầy năng lượng", author: "for LinhNG " },
    { text: "Mong em Phúc luôn luôn vui vẻ, hạnh phúc, sớm có bồ 💑.", author: "for PhucNT " },
    { text: "Chúc Quang Huy lun chăm chỉ học hành, hay ăn chóng lớn, ngoan ngoãn nghe lời bố mẹ. Chúc anh sớm có học bổng.  ", author: "for HuyNQ " },
    { text: "Chúc em có một ngày Men's Day thật vui vẻ và ý nghĩa nhé 🥳", author: "for SonNHT " },
    { text: "Mong em luôn giữ vững bản lĩnh, kiên cường vượt qua mọi thử thách", author: "for DongNS " },
    { text: "Chúc em mỗi ngày đều luôn tích cực, vui vẻ nha", author: "for NinhNK" },
    { text: "Ước bác giàu, chúc bác zui, chúc bác mạnh khỏe", author: "for QuangNM " },
    { text: "Chúc bác Nam mau có bồ, mau giàu, và thật happy happyyyy", author: "for NamNV " },
    { text: "Chúc bác mãi giàu, mua thêm 5 lô đất, mở thêm 7 cái chung cư", author: "for HoaiND " },
    { text: "Mong anh Kiên Bùi có nhiều sức khỏe, năng lượng tích cực", author: "for KienBH " },
    { text: "Chúc bạn Hiệp luôn mạnh mẽ, bản lĩnh ", author: "for HiepNH " },
    { text: "Ước anh Tùng vẽ càng ngày lên tay, trở thành một artist đỉnh của chóp", author: "for TungT " },
    { text: "Chúc Thế Anh một ngày Men's Day thật vui vẻẻẻ", author: "for AnhNT " },
    { text: "sometimes it may not but still wish for the best and at least u'll beat it in the end 🐰", author: "for HoangMV " },
    { text: "Happy Men's Day em Minh nhé! Chúc em nhiều sức khỏe và niềm vui. Btw mừng em gia nhập đại gia đình Gamee", author: "for MinhTQ " },
    { text: "Chúc Poop-kun viết code không dính bug", author: "for DangMD " },
    { text: "", author: "for " },
    { text: "", author: "for " },
    { text: "", author: "for " },
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
