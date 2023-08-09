let newH = document.createElement('h3');
let text = document.createTextNode("New Hello");
newH.appendChild(text);

let oldH = document.querySelector(".header");
document.querySelector(".btn").addEventListener("click", ()=> { 
    let body = document.querySelector("body")
    console.log(22);
    body.replaceChild(newH, oldH)
})