function calcEquation(str) {
    
}

const num1 = document.getElementById('firstNum')
const num2 = document.getElementById('secondNum')
const result = document.getElementById('res')
const loadButton = document.getElementById('l')
let cond = '+'
const sumButton = document.getElementById('s')
sumButton.onclick = function() {
    cond = '+'
}
const difButton = document.getElementById('df')
difButton.onclick = function() {
    cond = '-'
}
const mulButton = document.getElementById('m')
mulButton.onclick = function() {
    cond = '*'
}
const divButton = document.getElementById('dv')
divButton.onclick = function() {
    cond = '/'
}
loadButton.onclick = function() {
    let sum = 0
    if (cond === '+')
    {
        sum = Number(num1.value) + Number(num2.value)
    }
    else if (cond === '-')
    {
        sum = Number(num1.value) - Number(num2.value)
    }
    else if (cond === '*')
    {
        sum = Number(num1.value) * Number(num2.value)
    }
    else if (cond === '/')
    {
        if (Number(num2.value) === 0)
        {
            sum = 'Division by zero!'
        }
        else
        {
            sum = Number(num1.value) / Number(num2.value)
        }
    }
    result.textContent = sum
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        loadButton.onclick()
    }
})
const clearButton = document.getElementById('c')
clearButton.onclick = function() {
    num1.value = '0'
    num2.value = '0'
    result.textContent = '0'
    cond = '+'
}