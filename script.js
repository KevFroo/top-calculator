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

// declare variables
let n1;
let operator;
let n2;

// html elements
const calculationHeader = document.querySelector('.calculation');
const numBtn = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.op')
const clearBtn = document.querySelector('.clear');
const enterBtn = document.querySelector('.enter');

// update variables based on availability
function updateN(arg) {
    if (operator === undefined || n1 === undefined) {
        if (n1 === undefined) {
            n1 = arg;
        } else {
            n1 += arg;
        }
    } else {
        if (n2 === undefined) {
            calculationHeader.innerHTML = '';
            n2 = arg;
        } else {
            n2 += arg;
        }
    }
    updateContent(arg);
}

// update content in calculation header
function updateContent(arg) {
    calculationHeader.innerHTML += arg.toString();
}

// reset var to undefined
function reset() {
    n1 = undefined;
    operator = undefined;
    n2 = undefined;
}

// clear all var and calculation header
function clear() {
    calculationHeader.innerHTML = '';
    reset();
}

// add DOM event
for (let num of numBtn) {
    num.onclick = () => updateN(num.classList[1]);
}
for (let btn of operatorBtn) {
    btn.onclick = () => operator = btn.classList[1];
}
clearBtn.onclick = () => clear();
