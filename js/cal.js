let currentInput = '';
let result = null;
function addToDisplay(value) {
  const display = document.getElementById("display");


  if (result !== null) {
    currentInput = result.toString();
    result = null;
  }

  currentInput += value;
  display.textContent = currentInput;
}

function addDecimal() {

  if (!currentInput.includes('.')) {
    currentInput += '.';
    document.getElementById("display").textContent = currentInput;
  }
}

function calculateResult() {
  const display = document.getElementById("display");

  try {
    result = eval(currentInput);
    currentInput = result.toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error"; 
    currentInput = '';
  }
}

function clearDisplay() {
  currentInput = ''; 
  result = null;  
  document.getElementById("display").textContent = ''; 
}
