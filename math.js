// Using Math Constants
console.log(Math.PI);       // 3.141592653589793
console.log(Math.E);        // 2.718281828459045

// Basic Math Functions
console.log(Math.abs(-5));  // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.round(4.5)); // 5

// Exponential and Logarithmic Functions
console.log(Math.exp(2));   // 7.38905609893065
console.log(Math.log(10));  // 2.302585092994046
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25)); // 5

// Trigonometric Functions
console.log(Math.sin(Math.PI / 6)); // 0.5
console.log(Math.cos(Math.PI / 3)); // 0.5
console.log(Math.tan(Math.PI / 4)); // 1

// Rounding Functions
console.log(Math.trunc(4.7)); // 4
console.log(Math.sign(-10));  // -1

// Random Number Generation
console.log(Math.random());   // A random number between 0 and 1

// Other Functions
console.log(Math.cbrt(27));   // 3
console.log(Math.hypot(3, 4)); // 5 (Pythagorean theorem)

// Using Math Functions in Expressions
let angle = Math.PI / 3;
let x = Math.cos(angle);
let y = Math.sin(angle);
console.log(`x = ${x}, y = ${y}`);

// Using Math Functions to Generate Random Numbers within a Range
let randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

console.log(randomInRange(10, 20)); // Random number between 10 and 20
