let list = document.querySelector(".list");

for (let i = 0; i < list.children.length; i++) {
    let listItem = list.children[i];
    
    if (listItem.nodeType === 1) { 
        let anchor = listItem.querySelector("a");
        if (anchor) {
            let text = anchor.textContent;
            console.log(text);
        }
    }
}
