let form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Fetch input values inside the event listener
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;

    // Create a person object
    let personInfo = {
        name: name,
        age: age
    };

    let people = JSON.parse(localStorage.getItem('people')) || [];

    people.push(personInfo);

    localStorage.setItem('people', JSON.stringify(people));

    console.log(JSON.stringify(people));
});
