// return the sum of two numbers
function add(n1, n2) {
    return n1 + n2;
}

// return the difference
function subtract(n1, n2) {
    return n1 - n2;
}

// return the product of two numbers
function multiply(n1, n2) {
    return n1 * n2;
}

// return the fraction of two numbers
function divide(n1, n2) {
    if (n2 === 0) {
        alert('Can\'t divide by zero');
        return 'ERROR';
    } else {
        return n1 / n2;
    }
}

// check for decimals
function hasDecimal(n) {
    return !Number.isInteger(n);
}

// declare variables
let n1;
let operator;
let n2;
let isAns = false;

// html elements
const calculationHeader = document.querySelector('.calculation');
const numBtn = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.op')
const clearBtn = document.querySelector('.clear');
const enterBtn = document.querySelector('.enter');

// update variables based on availability
function updateN(arg, special) {
    if (((isAns && operator === undefined) || calculationHeader.innerHTML === 'ERROR') && !special) {
        clear();
        n1 = arg;
    } else if (operator === undefined || n1 === undefined) {
        if (n1 === undefined) {
            n1 = arg;
        } else {
            if (special) {
                n1 = arg + n1;
            } else {
                n1 += arg;
            }
        }
    } else {
        if (n2 === undefined) {
            calculationHeader.innerHTML = '';
            n2 = arg;
        } else {
            if (special) {
                n2 = arg + n2;
            } else {
                n2 += arg;
            }
        }
    }
    isAns = false;
    updateContent(arg, false, special);
}

function updateOperator(op) {
    if ((operator !== undefined && n2 !== undefined) && calculationHeader.innerHTML !== 'ERROR') {
        operate(parseFloat(n1), parseFloat(n2), operator);
        operator = op;
    } else {
        operator = op;
    }
}

// update content in calculation header
function updateContent(arg, reset, special) {
    if (reset) {
        calculationHeader.innerHTML = arg.toString();
    } else if (special) {
        calculationHeader.innerHTML = arg.toString() + calculationHeader.innerHTML;
    } else {
        calculationHeader.innerHTML += arg.toString();
    }

    if (hasDecimal(parseFloat(calculationHeader.innerHTML))) {
        let valueSplit = calculationHeader.innerHTML;
        valueSplit = valueSplit.split('.');
        if (valueSplit[1].length > 6) {
            calculationHeader.innerHTML = Math.round((parseFloat(calculationHeader.innerHTML) * 1000000)) / 1000000;
        }
    }
}

// handles special conditions with '-' and '.'
function specialN(arg) {
    if (arg === '.') {
        if (!hasDecimal(parseFloat(calculationHeader.innerHTML))) {
            updateN(arg, false);
        }
    } else {
        if (parseFloat(calculationHeader.innerHTML) > 0) {
            updateN(arg, true);
        }
    }
}

// reset var to undefined
function reset() {
    if (isAns) {
        operator = undefined;
        n2 = undefined;
    } else {
        n1 = undefined;
        operator = undefined;
        n2 = undefined;
    }
}

// clear all var and calculation header
function clear() {
    calculationHeader.innerHTML = '';
    reset();
}

// operate calculations depending on operator
function operate(num1, num2, operator) {
    let ans;

    switch (operator) {
        case 'add':
            ans = add(num1, num2).toString();
            break;
        case 'subtract':
            ans = subtract(num1, num2).toString();
            break;
        case 'multiply':
            ans = multiply(num1, num2).toString();
            break;
        case 'divide':
            ans = divide(num1, num2).toString();
            break;
        default:
            if (operator === undefined || n1 === undefined) {
                calculationHeader.innerHTML = n1;
            } else {
                calculationHeader.innerHTML = n2;
            }
    }

    isAns = true;
    n1 = ans;
    updateContent(ans, true, false);
    reset();
}

// add DOM event
for (let btn of numBtn) {
    if (btn.classList[1] === 'special') {
        btn.onclick = () => specialN(btn.classList[2]);
    } else {
        btn.onclick = () => updateN(btn.classList[1], false);
    }
}
for (let btn of operatorBtn) {
    btn.onclick = () => updateOperator(btn.classList[1]);
}
clearBtn.onclick = () => clear();
enterBtn.onclick = () => {
    if(n1 !== undefined && n2 !== undefined && operator !== undefined) {
        operate(parseFloat(n1), parseFloat(n2), operator);
    }
};
