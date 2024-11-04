// hw4, ex 11

// Нарисовать равнобедренный треугольник из символов ^. Высоту задает пользователь.

// let h = 5;
// let ch = '*';

// for (let i = 1; i <= 5; i++) {
//     let line = '';

//     for (let j = 1; j <=(h - i); j++) {
//         line += ' ';
//     }

//     for (let j = 1; j <= ((i * 2) - 1); j++) {
//         line += ch;
//     }

//     console.log(line);
// }


// function sum(a, b) {
//     // code

//     return (a + b);
// }

// let result = sum(5, 2);

// console.log(result);


//Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

// let a = 4;
// let b = 7;
// let c = 9;

// function calculateNumbers(num1, num2, num3) {
//     return(num1 - num2 / num3)
// }

// console.log(calculateNumbers(4, 7, 9));


// Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

// function maxNumber(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b
//     }
// }

// console.log(maxNumber(4,8));

// function minNumber(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b
//     }
// }

// console.log(minNumber(4,8));


// Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

// let arr = [];

// for (let i = 5; i <= 15; i++) {
//     arr.push(i);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

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


// Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Используйте цикл for, чтобы найти и вывести наименьшее число в массиве. используйте внутри функции уже созданные функции для создания массива и поиска мин значения

// function getMinInArray(a, b) {
//     let array = [];

//     for (let i = a; i <= b; i++) {
//         array.push(i);
//     }

//     return array;

//     function findMin(array) {
//         let min = array[0];
        
//         for (let j = 1; j < array.length; j++) {
//             if (array[j] < min) {
//                 min = array[j];
//             }
//         }

//         return min;
//     }
// }

// console.log

// function min(a, b) {
//     return a > b ? b : a;
// }

// function createArr(a, b) {
//     let arr = [];

//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     }

//     return arr;
// }

// function getMinInArr(arr) {
//     let minNumber = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         minNumber = min(minNumber, arr[i]);
//     }

//     return minNumber;
// }

// let myArr = createArr(-5, 6);
// console.log(getMinInArr(myArr));


// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(3));
// console.log(isEven(8));


// Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательные функции isEven и createArr из предыдущих задач.

// function createArr(a, b) {
//     let arr = [];

//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     }

//     return arr;
// }

// function isEven(number) {
//     return number % 2 === 0;
// }

// function newArray(arr) {
//     let evenArray = [];

//     for (i = 0; i < arr.length; i++) {
//         if (isEven(arr[i])) {
//             evenArray.push(arr[i]);
//         }
//     }

//     return evenArray;
// }

// let myArr = createArr(1, 10);
// console.log(newArray(myArr));


// "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию"
// Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findLongestWord(str) {
    let strMaxWord = '';

    let strArr = str.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > strMaxWord.length) {
            strMaxWord = strArr[i];
        }
    }

    console.log(strMaxWord);
}

let str = 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию';
findLongestWord(str);