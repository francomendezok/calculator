// FUNCTIONS //
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
  switch (symbol) {
    case "+":
      return add(num,num2);
    case "-":
      return substract(num,num2);
    case "*":
      return multiply(num,num2);
    case "/":
      return divide(num,num2);    
  }
}


var firstNumber = "";
var operator = "";
var secondNumber = "";
var accumulator = "";
var buttonID;


// Use these variables to do the calculations and keep storng the value. Read instructions in Odin Project //

// EVENT LISTENERS //
const clearAll = document.querySelector(".clear");
const deleteOne = document.querySelector(".delete");
const buttons = document.querySelectorAll(".button");
const history = document.querySelector("#history");
const input = document.querySelector("#input");


// REMOVE SECTION //
clearAll.addEventListener("click", function () {
    input.textContent = "";
    history.textContent = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    accumulator = "";
  })

deleteOne.addEventListener("click", function forDelete () {
  let currentInput = input.textContent;
  currentInput = currentInput.slice(0, -1);
  accumulator = accumulator.slice(0,-1);
  secondNumber = secondNumber.slice(0,-1); 
  input.textContent = currentInput; 
});
  

// MAIN BUTTONS // 
buttons.forEach(option => option.addEventListener("click", function () {
    var type = option.classList[1];
    var result;
    buttonID = option.id;


    
    if (type === "number")  {
      if (input.textContent === "0" && buttonID === "0") return;
      if (input.textContent === "0") input.textContent = "";

      accumulator += buttonID;
      input.textContent += option.id;
    }
    // here solve problem in history content //
    if (type === "symbol" && buttonID != "=") {
      if (operator === "") operator = buttonID;

      if (accumulator) {
        firstNumber = accumulator;
        accumulator = "";
      }
          input.textContent += option.id;
          history.textContent += input.textContent;
          input.textContent = "";
    }

    if (firstNumber && type == "number") {
      secondNumber = accumulator;
    }

    if (buttonID === "=") {
      if (firstNumber && operator && secondNumber) {
        result = operate(firstNumber,operator,secondNumber);
        input.textContent = result;
        history.textContent = firstNumber + operator + secondNumber;
      }
    }
        return buttonID;
  }));
    
    
// KEYBOARD INPUTS //     
  window.addEventListener("keydown", function(event) {
    // NUMBER //
    if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0") {
        if (input.textContent === "0" && event.key === "0") return;
        if (input.textContent === "0") {
          input.textContent = "";
        }
        input.textContent += event.key;
      }  

    // SYMBOL // 
    if (event.key === "." || event.key === "/" || event.key === "*" || event.key === "-" || event.key === "+") {
        input.textContent += event.key;
        history.textContent = input.textContent;
        input.textContent = "";
      }

    // REMOVE //
    if (event.key === "Backspace") {
      let currentInput = input.textContent;
      currentInput = currentInput.slice(0, -1); 
      input.textContent = currentInput; 
      accumulator = accumulator.slice(0,-1);
      secondNumber = secondNumber.slice(0,-1); 
    };

    if (event.key === "Delete") {
      input.textContent = "";
      history.textContent = "";
      firstNumber = "";
      operator = "";
      secondNumber = "";
      accumulator = "";
    }
  });





  // TODO 
  // 1. Equals actions in keyboard and mouse. Add enter button event listener
  // 2. Operate function functional
  // 3. Add spaces and equals in history text content
  // 4. Change display * for an X



