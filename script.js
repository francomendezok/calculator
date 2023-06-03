// FUNCTIONS //
function add (num,num2) {
	return Number(num) + Number(num2);
};

function substract (num, num2) {
	return num - num2;
};

function multiply (num, num2) {
  return num * num2;
}

function divide (num, num2) {
  var fixed = num / num2;

  return fixed.toFixed(2);
}

function operate (num, symbol, num2) {
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


var firstNumber = "";
var operator = "";
var secondNumber = "";
var accumulator = "";
var buttonID;
var counter = false;


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
      input.textContent += buttonID;
    }
    
    if (type === "symbol") {
      
      operator = buttonID;
      
      if (history.textContent.length === 1) history.textContent = "";
      
      if (counter) history.textContent = "";

      if (accumulator) {
        firstNumber = accumulator;
        accumulator = "";
      }

      if (operator === "*") operator = "X";

      input.textContent += operator;
      history.textContent = firstNumber + " " + operator + " " + secondNumber;
      input.textContent = "";

      if (firstNumber && operator && secondNumber) {

      }
    }

    if (firstNumber && type == "number") {
      secondNumber = accumulator;
    }


//     if (type === "dot") {
//       if (!input.textContent) return;
//       if (input.textContent.includes(".")) return;
// // add the dot to first, second and accumulator, and the reflect in on the screen (input and history)
//     }



    if (type === "equals") {
        if (firstNumber && operator && secondNumber) {
          result = operate(firstNumber,operator,secondNumber);
          input.textContent = result;
          history.textContent = firstNumber + " " + operator + " " + secondNumber + " = ";
          counter = true;
          accumulator = result;
          
          if (operator === "*") operator = "X";
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
    if (event.key === "/" || event.key === "*" || event.key === "-" || event.key === "+") {
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





  // TODO FIRST
  // PRIORITY. Operate multiple operations without pressing "="

  // . When history has a symbols and the input has a number
  // . Floating Point when I get a decimal like 0.888888. Fix it to two decimals
  
  // TODO LAST
  // . Equals actions in keyboard and mouse. Add enter button event listener
  // . Add functionality to the DOT Button

