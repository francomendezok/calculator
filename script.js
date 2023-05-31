// FUNCTIONS //
function add (num,num2) {
	return num + num2;
};

function substract (num, num2) {
	return num - num2;
};

function sum (array) {
	var total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];    
  }
  return total;
};

function multiply (nums) {
    var totalMultiply = 1;
  
    for (let i = 0; i < nums.length; i++) {
      totalMultiply *= nums[i];
    }
    return totalMultiply;
  };


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
  



buttons.forEach(option => option.addEventListener("click", function () {
    var type = option.classList[1];
    var buttonID = option.id;
    var storedValue;

    if (type === "number")  input.textContent += option.id;
    
    // if (type === "symbol") {
    //     history.textContent += input.textContent;

    // }
        // USE A VARIABLE TO STORE THE VALUE // 
        return buttonID;
        // ADD SPACE BETWEEN OPERATION //
  }));

    
    
    
    
    
    
    
    
    
    var arrayNumbers = ["1","2","3","4","5","6","7","8","9","0"]
    var arraySymbols = [".","/","*","-","+","="];

  window.addEventListener("keydown", function(event) {
    if (arrayNumbers.includes(event.key)) input.textContent += event.key;
    if (arraySymbols.includes(event.key)) {
        if (!input.textContent.includes(event.key))
        input.textContent += event.key;
    }
});
// WINDOW NOT READY YET // 







