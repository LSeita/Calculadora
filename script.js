const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let operand1, operand2, operator;
let displayValue = 0;
let opSigns = ["/", "*", "+", "-"];

updateDisplay();

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.classList.contains("number")){
            if(!operand1){
                displayValue == 0 ? displayValue = button.value 
                                  : displayValue += button.value;
                updateDisplay();
            }else{
                displayValue == operand1 ? displayValue = button.value
                                         : displayValue += button.value;
                updateDisplay();
            }
        }
        if(button.classList.contains("operator")){
            if(opSigns.includes(button.value)){
                switch(!operand1){
                    case true:
                        operand1 = displayValue;
                        operator = button.value;
                        break;
                    case false:
                        operand2 = displayValue
                        displayValue = operate(operand1, operand2, operator);
                        updateDisplay();
                        operand1 = displayValue;
                        operator = button.value;
                        break;
                }
            }
            if(button.value === "="){
                if(operand1){
                    operand2 = displayValue;
                    displayValue = operate(operand1, operand2, operator);
                    updateDisplay();
                    resetValues();
                }
            }
        }
        if(button.classList.contains("special")){
            if(button.value === "AC"){
                resetValues();
                updateDisplay();
            }
        }
    })
})

function updateDisplay(){
    display.textContent = displayValue;
    if(displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    }
}

function resetValues(){
    displayValue = 0;
    operand1 = null;
    operand2 = null;
    operator = null;
}


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

//Operations
let divide = (num1, num2) => num1/num2;
let subtract = (num1, num2) => num1-num2;
let multiply = (num1, num2) => num1 * num2;
let add = (num1, num2) => (+num1) + (+num2);

