const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display-digits");
const modeSwitch = document.querySelector(".switch img");

let calculation = [];
let calculationString;

function calculate(btn){
    const value = btn.textContent;

    if(value == 'C'){

        calculation = [];

        display.textContent = '0';

    } else if(value === '='){

        display.textContent = eval(calculationString);

        calculation = [];

    } else {

    calculation.push(value);

    calculationString = calculation.join('');

    display.textContent = calculationString;
    }

}

buttons.forEach(btn => btn.addEventListener("click", ()=> calculate(btn)))


//DARK/LIGHT MODE SWITCH

let darkMode = true;

modeSwitch.addEventListener("click", () => {
    if(darkMode){
        modeSwitch.src = "icons/brightness.png";
        darkMode = false;
    } else {
        modeSwitch.src = "icons/moon.png";
        darkMode = true;
    }
})