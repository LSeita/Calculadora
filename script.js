const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let operand1, operand2, operator;
let displayValue = 0;
let opSigns = ["/", "*", "+", "-"];

updateDisplay();

buttons.forEach(button => {
    button.addEventListener("click", () => {
        //If button pressed is part of the "Number" group
        if(button.classList.contains("number")){
            //First operand input
            if(!operand1){
                let stringDisplay = String(displayValue);
                //First character
                if(displayValue == 0){
                     displayValue = button.value
                }
                else{
                    //Decimal filter
                    if(button.value == "."){
                        if(!stringDisplay.includes(".")){
                            displayValue += button.value;
                        }
                    }
                    else{
                     displayValue += button.value;
                    }
                }
                updateDisplay();
            //Second operand input
            }else{
                displayValue == operand1 ? displayValue = button.value
                                         : displayValue += button.value;
                updateDisplay();
            }
        }

        //If button pressed is part of the "Operator" group
        if(button.classList.contains("operator")){
            if(opSigns.includes(button.value)){
                switch(!operand1){
                    //Archives first part of the operation
                    case true:
                        operand1 = displayValue;
                        operator = button.value;
                        break;
                    //Realizes the operation
                    case false:
                        operand2 = displayValue
                        displayValue = operate(operand1, operand2, operator);
                        updateDisplay();
                        operand1 = displayValue;
                        operator = button.value;
                        break;
                }
            }
            //Reset the operations upon pressing "="
            if(button.value === "="){
                if(operand1){
                    operand2 = displayValue;
                    displayValue = operate(operand1, operand2, operator);
                    updateDisplay();
                    resetValues();
                }
            }
        }

        //If button pressed is part of the "Special" group
        if(button.classList.contains("special")){
            switch(button.value){
                case "AC":
                    resetValues();
                    updateDisplay();
                    break;

                case "+/-":
                    displayValue *= -1;
                    updateDisplay();
                    break;
                
                case "%":
                    displayValue /= 100;
                    updateDisplay();
                    break;
            }
        }
    })
})

//Changes the value displayed on calculator screen
function updateDisplay(){
    if(displayValue === ".") displayValue = "0.";
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

