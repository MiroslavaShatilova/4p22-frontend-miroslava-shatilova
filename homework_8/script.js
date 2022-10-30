'use strict'

const firstNumber = document.getElementById('first-number');
const sign = document.getElementById('sign');
const secondNumber = document.getElementById('second-number');
const calcButton = document.getElementById('calc');


calcButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (firstNumber.value == '') {
        console.log('Первое число не указано');
        return;
    } 
    if (secondNumber.value == '') {
        console.log('Второе число не указано');
        return;
    }
    if (isNaN(Number(firstNumber.value)) || isNaN(Number(secondNumber.value))) {
        console.log('Некорректный ввод чисел');
        return;
    }
    if (sign.value === '/' && Number(secondNumber.value) === 0) {
        console.log('Операция некорректна');
        return;
    }
    switch (sign.value) {
        case '': console.log('Знак не введен'); break;
        case '+': console.log(Number(firstNumber.value) + Number(secondNumber.value)); break;
        case '-': console.log(Number(firstNumber.value) - Number(secondNumber.value)); break;
        case '*': console.log(Number(firstNumber.value) * Number(secondNumber.value)); break;
        case '/': console.log(Number(firstNumber.value) / Number(secondNumber.value)); break;
        default: console.log('Программа не поддерживает такую операцию');
    }
});