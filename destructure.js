[{a, b, c, ...r}] = [{a:1, b: 2, c: 3, d: 4, e: 5}]

console.log(a);
console.log(b);
console.log(c);
console.log(r);


let numfun = () => {return [1, 2, 3, 4, 5, 6, 7, 8, 9]}

let [x, y, z, ...e] = numfun();
console.log(x, y, z);
console.log(e);

let person = {
    name: 'John',
    email: 'john@example.com',
    phone: '123-456-789'
}

let { name, email, phone } = person;
console.log(name, email, phone);