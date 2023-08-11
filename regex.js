let reg = /world/;

let msg = "hello world, we're going to mars";

let result = reg.exec(msg);
console.log(result);

let msg2 = "hello world, we're goind to mars, would you like to come with us, world?";
let isMatch = reg.test(msg2);
console.log(isMatch);
// let matches = reg.match(msg2)
// console.log(matches);