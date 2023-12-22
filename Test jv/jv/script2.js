document.getElementById("conf").addEventListener("click",(e) => {
    e.preventDefault();
    var username = document.getElementById("usr").value ;
    var password = document.getElementById("pwd").value;

    var p = document.getElementById("msg");
    if (username == "admin" && password == "123456") {
        p.innerHTML = "Login success";
    }
    else {
        p.innerHTML = "Login failed";
    }
});
