//function showHello() {
//    alert("Hello World");
//}
//function showGoodbye() {
//    alert("Bye!")
//}
//
//document.getElementById("btn").onclick = showHello;
var x = document.getElementById("btn");
x.onclick = () => alert("Hello World");

x.addEventListener("click", () => alert("Hello World"));