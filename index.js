const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password ="";
let passwordlength = 15;
let checkout = 1;
handleSlider();
//set strength circle color to grey 
//set password length
function handleSlider() {
    inputSlider.value = passwordlength;
    lengthDisplay.innerText = passwordlength
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordlength - min)*100/(max - min)) + "% 100%"
}
function setIndicator(color){
    indicator.style.backgroundclor = color;
}

function getRndInteger (min,max){
    return Math.floor(Math.random() * (max-min))+ min;
}
function generateRandomNumber(){
    return getRndInteger(0,9);
}
function generateLowerCase (){
    return string.fromCharCode (getRndInteger(97,123));
}
function generateUpperCase(){
    return string.fromCharCode (getRndInteger(65,91)); 
}