


let loadData = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/posts"
    xhr.open('GET', url, true);
    xhr.send();
    return new Promise((resolve, reject) => {
       xhr.onload = function () {
        if(this.status == 200) {
            resolve(xhr.responseText);
        } else {
            reject("Error loading data")
        }
       }
    })

    

    
}

loadData().then((response) => console.log(response)).catch((error) => console.log(error))

function loadData2() {
    let url = "https://jsonplaceholder.typicode.com/posts"
fetch(url)
    .then((response) => {return response.text()}).then((response) => console.log("from load data2", response)).catch((error) => console.log(error))
}

loadData2();
