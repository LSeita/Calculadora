
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



let divide = (num1, num2) => num1/num2;
let subtract = (num1, num2) => num1-num2;
let multiply = (num1, num2) => num1 * num2;
let add = (num1, num2) => num1 + num2;

