// VARIABLES //
let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearAll = document.querySelector(".clear");
const deleteOne = document.querySelector(".delete");
const pointButton = document.querySelector(".dot");
const history = document.querySelector("#historyOperationScreen");
const input = document.querySelector("#inputOperationScreen");



//EVENT LISTENERS //
window.addEventListener("keydown", handleKeyboardInput);
equalsButton.addEventListener("click", evaluate);
clearAll.addEventListener("click", clear);
deleteOne.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);


// FUNCTIONS //
function clear() {
  input.textContent = '0';
  history.textContent = '';
  firstNumber = '';
  secondNumber = '';
  currentOperation = null;
}
function deleteNumber() {
  input.textContent = input.textContent.toString().slice(0, -1);
}


function appendNumber(number) {
  if (input.textContent === '0' || shouldResetScreen) resetScreen();
  input.textContent += number
}

function resetScreen() {
  input.textContent = ''
  shouldResetScreen = false
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstNumber = input.textContent
  currentOperation = operator
  history.textContent = `${firstNumber} ${currentOperation}`
  shouldResetScreen = true
}



function evaluate() {
  if (currentOperation === null || shouldResetScreen) return
  if (currentOperation === '÷' && input.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondNumber = input.textContent
  input.textContent = roundResult(
    operate(firstNumber, currentOperation, secondNumber)
  )
  history.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
  currentOperation = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function appendPoint() {
  if (shouldResetScreen) resetScreen()
  if (input.textContent === '')
    input.textContent = '0'
  if (input.textContent.includes('.')) return
  input.textContent += '.'
}



// KEYBOARD //
function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
  if (e.key === '.') appendPoint()
  if (e.key === '=' || e.key === 'Enter') evaluate()
  if (e.key === 'Backspace') deleteNumber()
  if (e.key === 'Delete') clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(convertOperator(e.key))
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '/'
  if (keyboardOperator === '*') return 'X'
  if (keyboardOperator === '-') return '-'
  if (keyboardOperator === '+') return '+'
}

// CALCULATE // 
function add (num,num2) {
	return num + num2;
};

function substract (num, num2) {
	return num - num2;
};

function multiply (num, num2) {
  return num * num2;
}

function divide (num, num2) {
  return num / num2; 
}

function operate (num, symbol, num2) {
  num = Number(num);
  num2 = Number(num2);

  switch (symbol) {
    case "+":
      return add(num,num2);
    case "-":
      return substract(num,num2);
    case "X":
      return multiply(num,num2);
    case "/":
      return divide(num,num2);    
  }
}