let url = "https://jsonplaceholder.typicode.com/posts"

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function() {
    if(this.status === 200 && this.readyState === 4) {
        console.log(this.responseText);
    }
}

xhr.send();