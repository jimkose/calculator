function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            console.log(`Error. Unknown operator: ${operator}`);
    }
}

function populateDisplay(number) {
    const display = document.querySelector('.display');
    display.textContent = number;
}

// variables used to hold numbers involved in current calculation
// a is the first number, b is the second number, operator holds the symbol for the operation
let a;
let b;
let operator;
// display is the number currently shown on screen
let display = 0;

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => {
    button.addEventListener('click', event => {
        let display = document.querySelector('.display').innerText;
        if (display === '0') display = event.target.innerText;
        else display += event.target.innerText;
        populateDisplay(display);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(button => {
    button.addEventListener('click', event => {
        a = document.querySelector('.display').innerText;
        operator = event.target.dataset.value;
        populateDisplay(event.target.innerText);
    });
});

const clearAll = document.querySelector('#clear-all');
clearAll.addEventListener('click', event => {
    const display = document.querySelector('.display');
    display.innerText = 0;
    a = 0;
    b = 0;
    operator = 0;
})