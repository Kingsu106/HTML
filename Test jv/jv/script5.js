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

function HienThiDSSV() {
    document.getElementById("info").innerHTML = ""
    for (sv of dssv) {
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

    dssv.push(sv)

    HienThiDSSV();
});