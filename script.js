const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
display.textContent = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(!isNaN(button.value)) updateDisplay(button.value)
    })
})


function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "/":
            return divide(num1,num2);
        case "*":
            return multiply(num1,num2);
        default:
            return "Not valid!"
    }
}

let updateDisplay = displayValue => {
    if(!isNaN(displayValue)){
        display.textContent == 0 ? display.textContent = displayValue 
                                 : display.textContent += displayValue;
    }
}

//Operations
let divide = (num1, num2) => num1/num2;
let subtract = (num1, num2) => num1-num2;
let multiply = (num1, num2) => num1 * num2;
let add = (num1, num2) => num1 + num2;

