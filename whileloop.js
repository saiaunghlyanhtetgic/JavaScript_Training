let i = 0;
while(i < 4) {
    console.log("While " + i );
    i++;
}

do {
    console.log("do while " + i)
    i++;
} while (i < 3);

const people = [
    { name : 'John'},
    { name : 'Lara'}
]

let t = 0;
while(t < people.length) {
    console.log(people[t].name);
    t++;
}