// return the sum of two numbers
function add(n1, n2) {
    return Math.round((n1 + n2) * 1000) / 1000;
}

// return the difference
function subtract(n1, n2) {
    return Math.round((n1 - n2) * 1000) / 1000;
}

// return the product of two numbers
function multiply(n1, n2) {
    return Math.round((n1 * n2) * 1000) / 1000;
}

// return the fraction of two numbers
function divide(n1, n2) {
    return Math.round((n1 / n2) * 1000) / 1000;
}

/*
let n1 = parseFloat(prompt("n1"));
let n2 = parseFloat(prompt("n2"));
alert(multiply(n1, n2));
*/