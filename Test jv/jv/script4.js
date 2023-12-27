let sv = {
    MaSV : 152,
    HoTen: "Nguyễn Văn A",
    ĐTB : 6.5,
    GioiTinh: false
};   

document.getElementById('info').innerHTML = `<li>Mã SV: ${sv.MaSV}</li>
                                             <li>Họ tên: ${sv.HoTen}</li>
                                             <li>Điểm TB: ${sv.ĐTB}</li>
                                             <li>Giới tính: ${sv.GioiTinh ? 'Nam' : 'Nữ'}</li>`