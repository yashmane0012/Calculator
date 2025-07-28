// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

function updateDisplay() {
  display.value = expression;
}

function calculate() {
  try {
    expression = eval(expression.replace(/÷/g, '/').replace(/×/g, '*')).toString();
  } catch {
    expression = 'Error';
  }
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');

    if (key === 'C') {
      expression = '';
    } else if (key === 'Backspace') {
      expression = expression.slice(0, -1);
    } else if (key === 'Enter') {
      calculate();
      return;
    } else {
      expression += key;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.()';
  if (allowedKeys.includes(e.key)) {
    expression += e.key;
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
  } else if (e.key === 'Enter') {
    calculate();
    return;
  } else if (e.key === 'Escape') {
    expression = '';
  }

  updateDisplay();
});
