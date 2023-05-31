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
      add(num,num2);
      break;
    case "-":
      substract(num,num2);
      break;
    case "*":
      multiply(num,num2);
      break;
    case "/":
      divide(num,num2);
      break;    
  }
}


var firstNumber;
var operator;
var secondNumber;
var accumulator = "";

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
  })

deleteOne.addEventListener("click", function forDelete () {
  let currentInput = input.textContent;
  currentInput = currentInput.slice(0, -1); 
  input.textContent = currentInput; 
});
  


// MAIN BUTTONS // 
buttons.forEach(option => option.addEventListener("click", function () {
    var type = option.classList[1];
    var buttonID = option.id;
    
    if (type === "number")  {
      if (input.textContent === "0" && buttonID === "0") return;
      if (input.textContent === "0") {
        input.textContent = "";
      }
      accumulator += option.id;
      input.textContent += option.id;
    }
    

    if (type === "symbol") {
        accumulator += option.id;
        input.textContent += option.id
        history.textContent += input.textContent;
        input.textContent = "";
    }
    console.log(accumulator);
        // USE A VARIABLE TO STORE THE VALUE // 
        return buttonID;
        // ADD SPACE BETWEEN OPERATION //
  }));
    
    
// KEYBOARD INPUTS //     
    var arrayNumbers = ["1","2","3","4","5","6","7","8","9","0"]
    var arraySymbols = [".","/","*","-","+","="];

  window.addEventListener("keydown", function(event) {
    if (arrayNumbers.includes(event.key)) input.textContent += event.key;
    if (arraySymbols.includes(event.key)) {
        if (!input.textContent.includes(event.key))
        input.textContent += event.key;
    }

    if (event.key === "Backspace") {
      let currentInput = input.textContent;
      currentInput = currentInput.slice(0, -1); 
      input.textContent = currentInput; 
    };

    if (event.key === "Delete") {
      input.textContent = "";
      history.textContent = "";
    }
  });







