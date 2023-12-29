let dssv = [
    {
        MaSV: 152,
        HoTen: "Nguyễn Văn A",
        DTB: 6.5,
        GioiTinh: true
    },
    {
        MaSV: 134,
        HoTen: "Trần Thị B",
        DTB: 4.3,
        GioiTinh: false
    }
];

function HienThiDSSV(data = dssv) {
    document.getElementById("info").innerHTML = ""
    for (sv of data) {
        document.getElementById("info").innerHTML += `<tr>
                                                        <td>${sv.MaSV}</td>
                                                        <td>${sv.HoTen}</td>
                                                        <td>${sv.DTB}</td>
                                                        <td>${sv.GioiTinh ? "Nam" : "Nu"}</td>
                                                      </tr>`
    }
}
HienThiDSSV();
document.getElementById("btn").addEventListener("click", e => {
    e.preventDefault();

    let sv = {
        MaSV: document.getElementById("mssv").value,
        HoTen: document.getElementById("Ho_ten").value,
        DTB: document.getElementById("dtb").value,
        GioiTinh: document.getElementById("Gioitinh").checked,
    };

    if (sv.MaSV == "") {
        alert("Vui lòng nhập mã SV");
        document.getElementById("mssv").focus();
        return;
    }
    if (dssv.some(ms => ms.MaSV == sv.MaSV)) {
        alert("Vui lòng nhập mã SV");
        document.getElementById("mssv").focus();
        return;
    }
    if (sv.HoTen == "") {
        alert("Vui lòng nhập họ tên");
        document.getElementById("Ho_ten").focus();
        return
    }
    if (sv.DTB == "") {
        alert("Vui lòng nhập điểm trung bình");
        document.getElementById("dtb").focus();
        return;
    }
    if (isNaN(sv.DTB)) {
        alert("Vui lòng nhập điểm trung bình bằng số");
        document.getElementById("dtb").focus();
        return;
    }
    let ds = Number(sv.DTB);
    if (ds < 0 || ds > 10) {
        alert("Vui lòng nhập điểm trung bình từ 0 tới 10");
        document.getElementById("mssv").focus();
        return;
    }
    dssv.push(sv);

    HienThiDSSV();
});
document.getElementById("search").addEventListener("click",e => {
    e.preventDefault();

    let keyword = prompt("Nhập họ tên SV cần tìm: ");

    let result = dssv.find(ht => ht.HoTen = keyword)

    if (result == undefined) {
        alert("Không tìm thấy");
    }
    else {
        alert(`Mã SV cần tìm ${result.MaSV}`)
    }
})
document.getElementById("filter").addEventListener("click",e => {
    e.preventDefault()

    let result = dssv.filter(item => item.DTB >= 5);

    HienThiDSSV(result);
})
document.getElementById("cancel-filter").addEventListener("click",e => {
    e.preventDefault();

    HienThiDSSV();
})
