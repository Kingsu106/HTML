let array = [];
let input = document.getElementById("inp");
let p = document.getElementById("data");
let btn = document.getElementById("btn");
btn.addEventListener("click", e => {
    e.preventDefault();
    let x = input.value;
    if (isNaN(x)) {
        alert("Vui lòng nhập số nguyên")
    }
    else {
        array.push(x);
        p.innerHTML = array.join(", ")
    }
    input.value = ""
})