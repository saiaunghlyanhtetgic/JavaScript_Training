let users = [
    { name : "John", email : "john@example.com" },
    { name : "April", email : "april@example.com" },
    { name : "Lara", email : "lara@example.com" },
    { name : "Leo", email : "leo@example.com" },
]

let index = users.findIndex(user => user.email === "leo@example.com");
console.log(users[index]);