const quotes = [
    { text: "Chúc rằng anh sẽ sớm chinh phục những vùng đất mơ ước, để lại dấu ấn trên bản đồ khám phá của mình. 🎉✨", author: "for GiangND" },
    { text: "Mong anh tràn đầy năng lượng và cảm hứng khám phá điều mới mẻ trong sự nghiệp và cuộc sống!", author: "for HungNV" },
    { text: "Ước Chí một đời an yên 🧚🏻. Nhiều niềm vui nhiều may mắn, nhiều hạnh phúc", author: "for ChiNH" },
    { text: "Mong Công lấy vợ thành công, chúc em bớt mỏ hỗn", author: "for CongNT" },
    { text: "Chúc anh Thanh luôn giữ mãi được những năng lượng tích cực và vui vẻ như hiện tại nhé ạ 😁.", author: "for ThanhND" },
    { text: "Nhân ngày Men's Day, chúc anh Híu luôn giữ được nụ cười tươi trên môi 😁, luôn hạnh phúc với những điều anh đã chọn. ", author: "for HieuHV" },
    { text: "Mong anh Hiệp có thật nhiều niềm vui mới và sớm đạt được siêu phẩm game 🎮", author: "for HiepKD" },
    { text: "Chúc a Mít Đóc luôn vui tươi như hoe 🌸, vẽ điệp như tranh 🎨 . Nhanh nhanh kết hôn 💍", author: "for HieuPD" },
    { text: "Chúc a Kiên luôn mạnh khỏe, vui vẻ, sớm lấy vợ 👰 và công việc của a luôn luôn thuận lợi", author: "for KienNt " },
    { text: "Chúc anh Tùng luôn vui vẻ, hạnh phúc, yêu đời, tràn đầy năng lượng ", author: "for TungNT " },
    { text: "Ước anh có sức khoẻ, có niềm vui, có hạnh phúc, có tiền tài", author: "for QuyetND " },
    { text: "Chúc anh cầu được ước thấy, mơ gì được nấy", author: "for QuanNA " },
    { text: "Mong anh Lâm cuộc sống vui tươi, cuộc đời hạnh phúc, nhiều tiền và ít stress", author: "for LamNT " },
    { text: "Chúc Đức luôn hạnh phúc không xì trét, tràn đầy năng lượng tấu hề và ca hát, tình yêu mỹ mãn 🎤", author: "for DucNV " },
    { text: "Mong em sớm đạt Ielts 9.0, bắn tiếng anh ầm ầm như người bản xứ 🤩. Chúc em code ngày càng tăng trình, đỉnh nóc kịch trần bay phấp phới", author: "for PhucVH" },
    { text: "Chúc Nam đạt được nhiều thành tích trong học tập và ngày càng phát triển trong công việc
Chúc cho giọng ca oanh vàng của em sẽ vươn lên một tầm cao mới", author: "for NamLH " },
    { text: "Gửi đến chàng MC đẹp trai và ga lăng lời chúc tốt đẹp nhất nhân ngày Quốc tế Nam giới nhé ạ. Chúc anh luôn vui vẻ, tràn đầy sức khỏe (nhất là lưng khỏe 😉).", author: "for TungST " },
    { text: "Chúc mừng ngày Quốc tế Đàn ông! Chúc Nghĩa luôn vui vẻ, yêu đời, tràn đầy năng lượng 😊", author: "for NghiaDT " },
    { text: "Mong mọi điều tốt đẹp nhất trên thế giới này đều dành cho anh", author: "for ThuyNT " },
    { text: "Mong anh Tiến Anh sức khỏe, ngủ đủ giấc, bớt ngủ quên. Chúc anh có nhiều tiền để tu dưỡng và sửa sang tính cách. ", author: "for AnhDT " },
    { text: "Chúc bạn Thức sớm được tháo niềng, chúc bạn vẽ nét nào được nét đấy, trộm vía không sửa không sai 😂", author: "for ThucNG " },
    { text: "Chúc anh Linh luôn vui vẻ, hạnh phúc, luôn tràn đầy năng lượng. Chúc anh gặp nhiều may mắn trong cuộc sống và công việc", author: "for LinhNG " },
    { text: "Chúc em Phúc luôn luôn vui vẻ, hạnh phúc, sớm có bồ. Mong em luôn gặp được nhiều điều may mắn trong công việc và trong cuộc sống.  💑.", author: "for PhucNT " },
    { text: "Chúc Quang Huy lun chăm chỉ học hành, hay ăn chóng lớn, ngoan ngoãn nghe lời bố mẹ. Chúc anh sớm có học bổng. ", author: "for HuyNQ " },
    { text: "Chúc em có một ngày Men's Day thật vui vẻ và ý nghĩa nhé 🥳", author: "for SonNHT " },
    { text: "Chúc em luôn giữ vững bản lĩnh, kiên cường vượt qua mọi thử thách và đạt được những ước mơ của mình 🥳", author: "for DongNS " },
    { text: "Chúc em mỗi ngày đều luôn tích cực, vui vẻ nha", author: "for NinhNK" },
    { text: "Mong bác giàu, chúc bác zui, chúc bác mạnh khỏe, chúc bác mãi happy happy iu đời <3", author: "for QuangNM " },
    { text: "Chúc bác Nam mau có bồ, mau giàu, và thật happy happyyyy", author: "for NamNV " },
    { text: "Chúc bác mãi giàu, mua thêm 5 lô đất, mở thêm 7 cái chung cư và vẽ task nào sếp duyệt task đó ;) ", author: "for HoaiND " },
    { text: "Chúc anh Kiên Bùi có nhiều sức khỏe, năng lượng tích cực để edit siu phẩm bản tin giúp em viral hơn nữa ạ. ", author: "for KienBH " },
    { text: "Chúc bạn Hiệp luôn mạnh mẽ, bản lĩnh và thành công trong công việc và lĩnh vực của cuộc sống ", author: "for HiepNH " },
    { text: "Ước anh Tùng vẽ càng ngày lên tay, trở thành một artist đỉnh của chóp", author: "for TungT " },
    { text: "Chúc Thế Anh một ngày Men's Day thật vui vẻ, chạy camp game nào on top game đó", author: "for AnhNT " },
    { text: "Chúc Hoàng mỗi ngày đều tràn đầy năng lượng và niềm vui (sometimes it may not but still wish for the best and at least u'll beat it in the end🐰).", author: "for HoangMV " },
    { text: "Happy Men's Day em Minh nhé! Chúc em nhiều sức khỏe và niềm vui. Btw mừng em gia nhập đại gia đình Gamee", author: "for MinhTQ " },
    { text: "Chúc Poop-kun viết code không dính bug, ngủ dậy muộn không dính điểm danh", author: "for DangMD " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    { text: " ", author: "for " },
    
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
