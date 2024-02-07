const display = document.getElementById('display');
function appendNumber(value) {
    display.value += value;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function appendDecimal() {
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

function setOperator(operator) {
    display.value += operator;
}
