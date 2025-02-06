let displayValue = '0';
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = displayValue;
}

function appendNumber(num) {
    if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (!displayValue.endsWith(op)) {
        displayValue += op;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: displayValue })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            displayValue = 'Error';
        } else {
            displayValue = data.result.toString();
        }
        updateDisplay();
    })
    .catch(() => {
        displayValue = 'Error';
        updateDisplay();
    });
}
