let form1 = document.querySelector('form');

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;

    let personInfo = {
        name: name,
        age: age
    };

    let people = JSON.parse(sessionStorage.getItem('people')) || [];

    people.push(personInfo);

    sessionStorage.setItem('people', JSON.stringify(people));

    console.log(JSON.stringify(people));
});
