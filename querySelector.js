let msg = document.querySelector("#qs");
msg.style.color = "red"
msg.style.fontSize = "100px";

let list = document.querySelector("ul li:nth-child(2)");

let btn = document.querySelector("#btn");
btn.onclick = () => {
    msg.style.color = msg.style.color === "red" ? "black" : "red";
    list.style.color = "blue"
}