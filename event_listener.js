let btn = document.querySelector("#btn1");
btn.addEventListener("mousedown", (e) => {
    alert(btn.innerText);
    console.log(e);
})

let btn2 = document.querySelector("#btn2");

btn2.onmouseup = (e) => { console.log(e.target);}