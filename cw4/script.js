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

// {
//     let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

//     let min = Infinity;
//     let max = -Infinity;

//     let number = '';

//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] != ' ' && str[i] != undefined) {
//             number += str[i];
//         } else {
//             number = +number;

//             if (number > max) max = number;
//             if (number < min) min = number;

//             // console.log(number);
//             number = '';
//         }
//     }

//     console.log(min, max);
// }


// console.log('-------------')


// Напишите программу, которая проверяет правильность ввода пароля от пользователя. Важно, чтобы пароль соотв. сл. требованиям: длина пароля от 6 символов; пароль должен состоять только из лат. символов; содержать минимум 1 число, 1 большой символ и любой знак из списка: _*&-#$.

// {
//     let pass = prompt('Введите пароль: ', 's052_Y');
//     let check = false;

//     let strTrueChars = '_*&-#$0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//     let strTrueUppChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';

//     let passCheck = '';

//     for (let i = 0; i < pass.length; i++) {
//         let char = pass[i];

//         for (let j = 0; j < strTrueChars.length; j++) {
//             if (char == strTrueChars[j]) {
//                 passCheck += char;
//             }
//         }
//     }

//     let checkUppChar;

//     for (let i = 0; i < pass.length; i++) {
//         let char = pass[i];

//         for (let j = 0; j < strTrueUppChars.length; j++) {
//             if (char == strTrueUppChars[j]) {
//                 checkUppChar = true;
//                 break;
//             }
//         }
//     }

//     if (pass.length >= 6 && passCheck == pass && checkUppChar == true) {
//         console.log('Пароль верный');
//     } else {
//         console.log('Пароль неверный');
//     }
// }


// Найти число с максимальной суммой цифр среди чисел: 56,987,103,9011,45.

// {
//     let strNums = '56,987,103,9011,45',
//         max = -Infinity,
//         num = '',
//         maxNum;

//     for (let i = 0; i < strNums.length; i++) {
//         if (strNums[i] != ',' && strNums[i] != undefined) {
//             num += strNums[i];
//         } else {

//             let sum = 0;
//             for (let j = 0; j < num.length; j++) {
//                 sum += +num[j];
//             }

//             if (sum > max) {
//                 max = sum;
//                 maxNum = num;
//             }

//             console.log(num, ` = ${sum}`);
//             num = '';
//         }
//     }

//     console.log(`Max number ${maxNum}, ${max}`);
// }


// Вывести на экран «прямоугольник», образованный из двух видов символов. Контур прямоугольника должен состоять из одного символа, а в «заливка» — из другого.

/*
##############################
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
##############################
*/

/*
1. Сколько строк? => 6
2. Сколько символов в одной строке? => 30
3. Какой символ рамки? => "#"
4. Какой символ заполнения? => "0"
5. Создаем цикл для создания строк (6шт)
6. Создаем переменную для формирования каждой строки из симоволов длиной 30
    6.1 Если первая и последняя строка, то символы в строке должны быть "#"
    6.2 В остальных строках: каждая начинается и заканчивает #, а ост. символы 0
*/

{
    let h = 6,
        l = 30,
        chB = '#',
        chF = '0';

    let result = '';    
    for (let i = 1; i <= h; i++) {
        // console.log(i);
        
        let line = '';
        for (j = 1; j <= l; j++) {
            if (i == 1 || i == h) {
                line += chB;
            } else {        
                if (j == 1 || j == l) line += chB;
                else line += chF;
            }
        }

        document.write(line + '<br>');
        // console.log(line);

        result += line + '\n';
    }

    console.log(result);
}