function add (a,b){
    return parseFloat(a) + parseFloat(b)
}
function subtract (a,b){
    return parseFloat(a) - parseFloat(b)
}
function multiply (a,b){
    return parseFloat(a) * parseFloat(b)
}
function divide (a,b){
    return parseFloat(a) / parseFloat(b)
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
let firstNum = "";
let operator;
let lastNum = "";
// Step 3
function operate (){
if (operator == "+"){
    display.textContent = `${add(firstNum , lastNum)}`
    firstNum = [display.textContent]
} else if (operator == "-"){
    display.textContent = `${subtract(firstNum , lastNum)}`
    firstNum = [display.textContent]
} else if (operator == "x"){
    display.textContent = `${multiply(firstNum , lastNum)}`
    firstNum = [display.textContent]
} else if (operator == "/"){
    display.textContent = `${divide(firstNum , lastNum)}`
    firstNum = [display.textContent]
}
}
// 
// 
num1.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("1")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("1")
    display.textContent = `${lastNum}`
}
})
num2.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("2")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("2")
    display.textContent = `${lastNum}`
}
})
num3.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("3")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("3")
    display.textContent = `${lastNum}`
}    
})
num4.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("4")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("4")
    display.textContent = `${lastNum}`
}    
})
num5.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("5")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("5")
    display.textContent = `${lastNum}`
}    
})
num6.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("6")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("6")
    display.textContent = `${lastNum}`
}   
})
num7.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("7")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("7")
    display.textContent = `${lastNum}`
}    
})
num8.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("8")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("8")
    display.textContent = `${lastNum}`
}   
})
num9.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("9")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("9")
    display.textContent = `${lastNum}`
}
})
num0.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("0")
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("0")
    display.textContent = `${lastNum}`
}
})
period.addEventListener("click", function (e){
    if (operator == undefined){
        firstNum = firstNum.concat(".")
        display.textContent = `${firstNum}`
    } else {
        lastNum = lastNum.concat(".")
        display.textContent = `${lastNum}`
    }
})
negative.addEventListener("click", function (e){

})
addition.addEventListener("click", function (e){
    operator = "+"
})
subtraction.addEventListener("click", function (e){
    operator = "-"
})
division.addEventListener("click", function (e){
    operator = "/"
})
multiplication.addEventListener("click", function (e){
    operator = "x"
})

equals.addEventListener("click", function (e){
    operate()
    operator = undefined
    lastNum = ""
})
