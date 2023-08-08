const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach()
console.log("forEach:");
numbers.forEach(num => console.log(num));

// map()
console.log("\nmap:");
const squared = numbers.map(num => num * num);
console.log(squared);

// filter()
console.log("\nfilter:");
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// reduce()
console.log("\nreduce:");
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// find()
console.log("\nfind:");
const firstGreaterThan5 = numbers.find(num => num > 5);
console.log(firstGreaterThan5);

// every()
console.log("\nevery:");
const allGreaterThan3 = numbers.every(num => num > 3);
console.log(allGreaterThan3);

// some()
console.log("\nsome:");
const someGreaterThan8 = numbers.some(num => num > 8);
console.log(someGreaterThan8);

// sort()
console.log("\nsort:");
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

// reverse()
console.log("\nreverse:");
const reversed = numbers.reverse();
console.log(reversed);

// concat()
console.log("\nconcat:");
const moreNumbers = [11, 12, 13];
const combined = numbers.concat(moreNumbers);
console.log(combined);
