function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log(`Error. Unknown operator: ${operator}`);
    }
}

function populateDisplay(number) {
    const display = document.querySelector('.display');
    display.textContent = number;
}

function wipeDisplay(option) {
    const operators = document.querySelectorAll('.operator');

}

// variables used to hold numbers involved in current calculation
// a is the first number, b is the second number, operator holds the symbol for the operation
let a = null;
let b = null;
let operator = null;
// display is the number currently shown on screen
let display = 0;
// keeps track of last key pressed. used to determine if screen should be wiped after an operator is displayed
let lastKey = null;

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => {
    button.addEventListener('click', event => {
        let display = document.querySelector('.display').innerText;
        if (display === '0' || lastKey !== 'number') display = event.target.innerText;
        else display += event.target.innerText;
        populateDisplay(display);
        lastKey = 'number';
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(button => {
    button.addEventListener('click', event => {
        if (lastKey === 'operator') {
            operator = event.target.dataset.value;
            return;
        };
        
        lastKey = 'operator';

        if (a === null || lastKey === 'equals') {
            a = document.querySelector('.display').innerText;
            operator = event.target.dataset.value;
            return;
        }
        
        const display = document.querySelector('.display');
        b = display.innerText;
        const result = operate(a, b, operator);
        display.innerText = result;

        a = result;
        b = null;
        operator = event.target.dataset.value;
    });
});

const clearAll = document.querySelector('#clear-all');
clearAll.addEventListener('click', event => {
    const display = document.querySelector('.display');
    display.innerText = 0;
    a = null;
    b = null;
    operator = null;
    lastKey = null;
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', eventu => {
    if (lastKey !== 'number' || lastKey === null) return;
    
    const display = document.querySelector('.display');
    b = display.innerText;
    const result = operate(a, b, operator);
    display.innerText = result;
    
    a = null;
    b = null;
    operator = null;
    lastKey = 'equals';
});