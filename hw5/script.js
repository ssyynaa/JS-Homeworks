// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

function calculateNumbers(num1, num2, num3) {
    return(num1 - num2 / num3)
}

console.log(calculateNumbers(14, 7, 1));

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

function numbersDegree (number) {
    return {
        square: number ** 2,
        cube: number ** 3
    };
}

console.log(numbersDegree(2));

// 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function maxNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

console.log(maxNumber(4,8));

function minNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b
    }
}

console.log(minNumber(4,8));

// 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

// let start = prompt("Введите начальное значение диапазона");
// let end = prompt("Введите последнее значение диапазона");

// function arrayCreate(start, end) {
//     let array = [];

//     for (let i = start; i <= end; i++) {
//         array.push(i);
//     }

//     return array;
// }

// function arrayDisplay(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// let finalArray = arrayCreate(start, end);
// arrayDisplay(finalArray);

// 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));

// 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

function createArr(a, b) {
    let arr = [];

    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    return arr;
}

function newArray(arr) {
    let evenArray = [];

    for (i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            evenArray.push(arr[i]);
        }
    }

    return evenArray;
}

let myArr = createArr(1, 10);
console.log(newArray(myArr));

/* 7.  Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например:
*
**
***
****
*****
******
*******
********
********* */

