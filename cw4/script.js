// Определите наибольшее число из двух.

// let a = 57,
//     b = 20;

// let min; // undefined
// let max; // undefined

// if (a > b) {
//     max = a;
//     min = b;
// } else {
//     max = b;
//     min = a;
// }

// console.log(`Max: ${max}`);


// Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

// через массив:
// let arrNums = [4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36, 8, 57];

// let min = Infinity;
// let max = -Infinity;

// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > max) max = arrNums[i];
//     if (arrNums[i] < min) min = arrNums[i];
// }

// console.log(min, max);

{
    let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

    let min = Infinity;
    let max = -Infinity;

    let number = '';

    for (let i = 0; i <= str.length; i++) {
        if (str[i] != ' ' && str[i] != undefined) {
            number += str[i];
        } else {
            number = +number;

            if (number > max) max = number;
            if (number < min) min = number;

            // console.log(number);
            number = '';
        }
    }

    console.log(min, max);
}


// Напишите программу, которая проверяет правильность ввода пароля от пользователя. Важно, чтобы пароль соотв. сл. требованиям: длина пароля от 6 символов; пароль должен состоять только из лат. символов; содержать минимум 1 число, 1 большой символ и любой знак из списка: _*&-#$.

