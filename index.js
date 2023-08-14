let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
console.log(set);

let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);

for(const [key, value] of map) {
    console.log("test", key, value);
}

map.forEach((key, value) => console.log(key, value));


console.log("----------------------------------------------------------------");
const myArray = [1, 2, 3, 4, 5];

const iterator = myArray[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
}
