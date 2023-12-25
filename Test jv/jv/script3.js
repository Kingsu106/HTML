document.getElementById("btn").addEventListener("click",(e) => {
    e.preventDefault();
    let username = document.getElementById("usr").value;
    let password = document.getElementById("pwd").value;
    let p = document.getElementById("msg");
    p.style.fontWeight = "bold";
    if (username == "admin" && password == "123456") {
        p.innerHTML = "Login successful!";
        p.style.color = "green";
    }
    else {
        p.innerHTML = "Login failed!"
        p.style.color = "red";
    }
    let a = document.getElementById("link");
})