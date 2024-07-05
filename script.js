// function add (a,b){
//     return a + b
// }
// function subtract (a,b){
//     return a - b
// }
// function multiply (a,b){
//     return a * b
// }
// function divide (a,b){
//     return a / b
// }

// Variables
const display = document.querySelector(".display")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const num3 = document.querySelector("#num3")
const num4 = document.querySelector("#num4")
const num5 = document.querySelector("#num5")
const num6 = document.querySelector("#num6")
const num7 = document.querySelector("#num7")
const num8 = document.querySelector("#num8")
const num9 = document.querySelector("#num9")
const num0 = document.querySelector("#num0")
const period = document.querySelector("#period")
const AC = document.querySelector("#AC")
const negative = document.querySelector("#negative")
const percentage = document.querySelector("#percentage")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")
const equals = document.querySelector("#equals")
// let firstNum;
// let operator;
// let lastNum;
let math = [];

// Step 3
function operate (){
    let brother = math.toString()
    let dude = brother.replaceAll(",","")
    let wtf = eval(dude)
    console.log(wtf)
}
num1.addEventListener("click", function (e){
    display.textContent = `${num1.textContent}`
    math.push(num1.textContent)
})
num2.addEventListener("click", function (e){
    display.textContent = `${num2.textContent}`
    math.push(num2.textContent)
})
num3.addEventListener("click", function (e){
    display.textContent = `${num3.textContent}`
    math.push(num3.textContent)
})
num4.addEventListener("click", function (e){
    display.textContent = `${num4.textContent}`
    math.push(num4.textContent)
})
num5.addEventListener("click", function (e){
    display.textContent = `${num5.textContent}`
    math.push(num5.textContent)
})
num6.addEventListener("click", function (e){
    display.textContent = `${num6.textContent}`
    math.push(num6.textContent)
})
num7.addEventListener("click", function (e){
    display.textContent = `${num7.textContent}`
    math.push(num7.textContent)
})
num8.addEventListener("click", function (e){
    display.textContent = `${num8.textContent}`
    math.push(num8.textContent)
})
num9.addEventListener("click", function (e){
    display.textContent = `${num9.textContent}`
    math.push(num9.textContent)
})
num0.addEventListener("click", function (e){
    display.textContent = `${num0.textContent}`
    math.push(num0.textContent)
})
