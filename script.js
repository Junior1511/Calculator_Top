function add (a,b){
    return a + b
}
function subtract (a,b){
    return a - b
}
function multiply (a,b){
    return a * b
}
function divide (a,b){
    return a / b
}

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
const multiplication = document.querySelector("#multiply")
const division = document.querySelector("#divide")
const addition = document.querySelector("#add")
const subtraction = document.querySelector("#subtract")
const equals = document.querySelector("#equals")
let firstNum = [];
let operator;
let lastNum = [];
// Step 3
function operate (){
if (operator == "+"){
    display.textContent= add(firstNum.toString,lastNum.toString)
} else if (operator == "-"){
    display.textContent= subtract(firstNum.toString,lastNum.toString)
} else if (operator == "x"){
    display.textContent= multiply(firstNum.toString,lastNum.toString)
} else if (operator == "/"){
    display.textContent= divide(firstNum.toString,lastNum.toString)
}
}
// 
// 
num1.addEventListener("click", function (e){
if (operator == undefined){
    firstNum.push("1")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("1")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num2.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("2")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("2")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num3.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("3")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("3")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num4.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("4")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("4")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num5.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("5")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("5")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num6.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("6")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("6")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num7.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("7")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("7")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num8.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("8")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("8")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num9.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("9")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("9")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
num0.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push("0")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push("0")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
period.addEventListener("click", function (e){
    if (operator == undefined){
    firstNum.push(".")
    display.textContent = `${firstNum.join().replaceAll(",","")}`
} else {
    lastNum.push(".")
    display.textContent = `${lastNum.join().replaceAll(",","")}`
}
})
// negative.addEventListener("click", function (e){
//     if (operator == undefined){
//     firstNum.push("-")
//     display.textContent = `${firstNum.join().replaceAll(",","")}`
// } else {
//     lastNum.push("-")
//     display.textContent = `${lastNum.join().replaceAll(",","")}`
// }
// })
addition.addEventListener("click", function (e){
    operator = "+"
})

equals.addEventListener("click", function (e){
    operate()
})
