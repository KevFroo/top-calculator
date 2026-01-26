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

// declare variables
let n1;
let operator;
let n2;

// operate calculations depending on operator
function operate(n1, n2, operator) {
    switch (operator) {
        case 'add':
            return add(n1, n2);
            break;
        case 'subtract':
            return subtract(n1, n2);
            break;
        case 'multiply':
            return multiply(n1, n2);
            break;
        case 'divide':
            return divide(n1, n2);
            break;
        default:
            return;
    }
}