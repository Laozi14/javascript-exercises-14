const fibonacci = n => {
    n = Number(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    let [a, b] = [1, 1];
    for (let i = 2; i < n; i++) [a, b] = [b, a + b];
    return b;
};



// Do not edit below this line
module.exports = fibonacci;
