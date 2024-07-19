function add (a,b){
    let x = parseFloat(a) + parseFloat(b) 
    return x = (Math.round(x * 100) / 100).toString().substring(0, 10) 
}
function subtract (a,b){
    let x = parseFloat(a) - parseFloat(b) 
    return x = (Math.round(x * 100) / 100).toString().substring(0, 10) 
}
function multiply (a,b){
    let x = parseFloat(a) * parseFloat(b) 
    return x = (Math.round(x * 100) / 100).toString().substring(0, 10) 
}
function divide (a,b){
    let x = parseFloat(a) / parseFloat(b) 
    return x = (Math.round(x * 100) / 100).toString().substring(0, 10) 
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
const negative = document.querySelector("#negative")
const C = document.querySelector("#C")
const del = document.querySelector("#del")
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
if (lastNum == ""){
} else if (operator == "+"){
    display.textContent = `${add(firstNum , lastNum)}`
    firstNum = display.textContent
    lastNum = ""
    operator = undefined
} else if (operator == "-"){
    display.textContent = `${subtract(firstNum , lastNum)}`
    firstNum = display.textContent
    lastNum = ""
    operator = undefined
} else if (operator == "x"){
    display.textContent = `${multiply(firstNum , lastNum)}`
    firstNum = display.textContent
    lastNum = ""
    operator = undefined
} else if (operator == "/"){
    display.textContent = `${divide(firstNum , lastNum)}`
    firstNum = display.textContent
    lastNum = ""
    operator = undefined
}
}
//                                              NUMBERS
// 
num1.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("1").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("1").substring(0, 10)
    display.textContent = `${lastNum}`
}
})
num2.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("2").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("2").substring(0, 10)
    display.textContent = `${lastNum}`
}
})
num3.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("3").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("3").substring(0, 10)
    display.textContent = `${lastNum}`
}    
})
num4.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("4").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("4").substring(0, 10)
    display.textContent = `${lastNum}`
}    
})
num5.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("5").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("5").substring(0, 10)
    display.textContent = `${lastNum}`
}    
})
num6.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("6").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("6").substring(0, 10)
    display.textContent = `${lastNum}`
}   
})
num7.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("7").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("7").substring(0, 10)
    display.textContent = `${lastNum}`
}    
})
num8.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("8").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("8").substring(0, 10)
    display.textContent = `${lastNum}`
}   
})
num9.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("9").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("9").substring(0, 10)
    display.textContent = `${lastNum}`
}
})
num0.addEventListener("click", function (e){
if (operator == undefined){
    firstNum = firstNum.concat("0").substring(0, 10)
    display.textContent = `${firstNum}`
} else {
    lastNum = lastNum.concat("0").substring(0, 10)
    display.textContent = `${lastNum}`
}
})
period.addEventListener("click", function (e){
    if (operator == undefined){
        if (firstNum.indexOf(".") == -1){
            firstNum = firstNum.concat(".").substring(0, 10)
            display.textContent = `${firstNum}`
        } else {}
    } else {
        if (lastNum.indexOf(".") == -1){
        lastNum = lastNum.concat(".").substring(0, 10)
        display.textContent = `${lastNum}`
        } else {}
    }
})
//                                              Other buttons
// 
negative.addEventListener("click", function (e){

})
addition.addEventListener("click", function (e){
    if (operator !== undefined){
        operate()
        operator = "+"
    } else {
        operator = "+"
    }
})
subtraction.addEventListener("click", function (e){
    if (operator !== undefined){
        operate()
        operator = "-"
    } else {
        operator = "-"
    }
})
division.addEventListener("click", function (e){
    if (operator !== undefined){
        operate()
        operator = "/"
    } else {
        operator = "/"
    }
})
multiplication.addEventListener("click", function (e){
    if (operator !== undefined){
        operate()
        operator = "x"
    } else {
        operator = "x"
    }
})

equals.addEventListener("click", function (e){
    operate()
})
C.addEventListener("click", function (e){
    operator = undefined
    firstNum = ""
    lastNum = ""
    display.textContent = ""
})
del.addEventListener("click", function (e){
    if (operator == undefined){
        firstNum = firstNum.slice(0,-1)
        display.textContent = firstNum
    } else {
        lastNum = lastNum.slice(0,-1)
        display.textContent = lastNum
    }
})
