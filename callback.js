function sum(a, b) {
    console.log(a + b)
}

function sum2(a, b, callback) {
    let d = a + b;
    let e = d + a + b;
    callback(d, e);
}

sum2(4, 5, sum);