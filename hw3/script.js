/*1.Выведите числа от 1 до 50 и от 35 до 8.*/

// for(let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// for(let j = 35;j >= 8;j--) {
//     console.log(j);
// }

/*2.Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

// let i = 89;
// while(i >= 11) {
//     document.write (i + "<br />");
//     i--;
// }

/*3.С помощью цикла найдите сумму чисел от 0 до 100.*/
// let sum = 0;
// for(let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

/*4.Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/
// let sum1 = 0;
// for(let i = 1; i <= 5; i++) {
//     sum1 = 0;

//     for(let j = 1; j <= i; j++) { 
//         sum1 += j;
//     }
//     console.log(sum1);
// }

/*5.Выведите чётные числа от 8 до 56. Решить задание через while и for.*/

// for(let i = 8; i <= 56; i++) {
//     if(i % 2 != 0) continue;
//         console.log(i)
//     }

// let a = 8;
// while(a <= 56) {
//     a++; 
//     if(a % 2 == 0) {
//         console.log(a); 
//     }  
// }

/*6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:*/

// for(let i = 2; i <= 10; i += 1) {
//     for(let j = 2; j <= 10; j += 1) {
//         document.write(i + '*' + j + '=' + i * j + '<br />');
//     }
// }

/*7.Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится?*/

//  {let n = 1000;
//  for(; ;) {
//     n /= 2;
//     if(n < 50) break;
//  }

//  console.log(n);
//  }

 /*8.Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.*/

// let sum5 = 0;
// let sumI = 0;
// for(let i = 0; ; i++) {
//     let c = prompt('Введите число');
//     if(c < 0 || c > 0 ) { 
//      sum5 += +c;
//      sumI += 1;
//     }else if(c == 0 || c == undefined) break;
//     else {
//         console.log('Ошибка ввода');     
//     } 
    
// }
// console.log(sum5);
// console.log(sum5 / sumI); 


/*9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
// let num = ' ';
// let min = Infinity;
// let max = -Infinity;
// for(let i = 0; i <= str.length; i++) 
//     if(str[i] != ' ' && str[i] != undefined) {
//         num += str[i]; 
//     }else {
//         for(let j = 0; j <= str.length; j++) {
//             if(num < min) min = num;
//             if(num > max) max = num;  
//         }
//         num = ' ';
// }
// console.log(`Самое большое число : ${max}, самое маленькое число: ${min}`);


/*10.Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n; 
d. меняет порядок цифр числа n на обратный.*/


// let n = 874; 
// let strN = String(n);
// let sum9 = 0;
// let strReverse1 = '';
// for(let i = 0; i <= strN.length-1;i++){
//     console.log(strN[i]);
//     sum9 += Number(strN[i])
      
// }

// for(let i = strN.length - 1; i >= 0; i--) {
//     strReverse1 += strN[i];
    
// }
// console.log(strN.length);
// console.log(sum9);
// console.log(strReverse1);

/* ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ*/

/*1. Выведите с помощью цикла на экран числа от 1 до 50. Решите задачу с помощью while и for*/

// for(i = 0; i <= 50; i++) {
//     console.log(i);
// }
// let a = 0;
// while(a <= 50) {
//     console.log(a);
//     a++;
// }

/*2.Выведите с помощью цикла на экран числа от 50 до 1. Решите задачу с помощью while и for*/

// for(let i = 50; i >= 1; i--) {
//     console.log(i)
// }
// let r = 50;
// while (r >= 1) {
//     console.log(r);
//     r--;
// }

/*3.Необходимо вывести на экран числа от 50 до 1 с шагом 2, 5 и 10.*/

// for(let i = 50; i >= 1; i-=5) {
//     console.log(i);
// }

// for(let i = 50; i >= 1; i-=10) {
//     console.log(i);
    
// }

// let p = 50;
// while(p >= 1) {
//     console.log(p);
//     p -=2;
// }

/*4.Найдите сумму чисел от 1 до 50, а также сумму этих же чисел, исключая четные.*/
// {
//     let sum = 0;
//     for(let i = 1; i <= 50; i++) {
//         sum +=i;
//     }
//     console.log(sum);
// }
// {let sum1 = 0;
//     for (let j = 1; j <= 50; j++) {
//         if(j % 2 == 0) continue;
//         sum1 += j;
//     }
// console.log(sum1);
// }

/*4.1.Выведите на экран числа от 15 до 78 исключая четные*/

// for(let j = 15; j <= 78; j++) {
//     if(j % 2 == 0) continue;
//     console.log(j);
// }

/* 5.Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.*/
// {
//     let sum = 0;
//     let a = prompt ('Введите число');
//     for(let i = 1; i <= a; i++ ) {
//         sum += i;
//     }
//     alert(sum);
// }

/*6.Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274).*/

// let num = 472;
// num = String(num);
// let m = (num.length - 1);
// let numRev = '';
// while(m >= 0) {
//     numRev += num[m];
//     m--;
// }
// num = + numRev;
// console.log(num);

/*7.Найти самую большую цифру в целом числе.*/

// {
//     let b = prompt('Введите число');
//     let maxN = 0;
//     for(let i = 0; i < b.length; i++) {
//         if(maxN < b[i]) {
//             maxN = b[i];
//         } 
        
//     }
//     console.log(maxN);
// }

/*8.Вычислить сумму первой и последней цифр целого числа.*/
// {
//     let c = prompt('Введите число');
//     let sum1 = 0;
//     for(let i = 0; i < c.length; i++) {
//         sum1 = +c[0] +  +c [c.length -1]; 
//     } 
//     alert(sum1);
// }

/*9. Посчитайте и выведете кол-во встречающихся чисел в строке “В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.”*/

// let str = `В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29] Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.`;
// let count = 0;
// for(i = 0; i <= str.length; i++) {
//     if( str[i] == +str[i] && str[i] != ' ') {
//         count ++;
//     }    
// }
// console.log(count);

/*10. Нарисуйте в консоле браузера прямоугольный треугольник заполненный символом #.*/
//  let h = 3;
//  let l = 5;
//  let chB = '#';
//  for(i = 1; i <= h; i++) {
//      let line = ' ';
//      for(j = 1; j <= l; j++) {
//      if(i == 1){
//         line += chB;
//         console.log(line);
//         document.write(`${line}  <br>`);
//     }   
//      }
//  }

/*11. Напишите программу, которая проверяет правильность ввода пароля от пользователя. Важно, чтобы пароль соотв. сл. требованиям: длина пароля от 6 символов; пароль должен состоять только из лат. символов; содержать минимум 1 число, 1 большой символ и любой знак из списка: _*&-#$.*/

// let pass = prompt('Введите пароль', 's052_Y');
// let strTrueChars = '_*&-#$.*/0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
// let strTrueUpChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';

// let passCheck = '';
// for(let i = 0; i < pass.length; i++) {
//     let char = pass[i];
//     for(let j = 0; j < strTrueChars.length; j++) {
//         if(char == strTrueChars[j]) {
//             passCheck += char;   
//         }
//     }
// }
// let checkUpChar = false;
// for(let i = 0; i < pass.length; i++) {
//     let char = pass[i];
//     for(let j = 0; j < strTrueUpChars.length; j++) {
//         if(char == strTrueUpChars[j]) {
//             checkUpChar = true;
//             break; 
//         }
//     }
// }
// if(pass.length >= 6 && passCheck == pass && checkUpChar == true) {
//     console.log('Пароль верный');
// } else {
//     console.log('Пароль неверный');
// }
/*12. Посчитать, сколько раз встречается определенная цифра в введенной последовательности чисел. Количество вводимых чисел и цифра, которую необходимо посчитать вводится пользователем.
7646546546564*/

/*13. Найти число с максимальной суммой цифр среди чисел: 56,987,103,9011,45.*/

// let strNums = '56,987,103,9011,45';
// let max = -Infinity;
// let num = '';
// let maxNum;

// for(let i = 0; i <= strNums.length; i++) {
//     if (strNums[i] != undefined && strNums[i] != ',') {
//         num += strNums[i];
//     } else {
//         let sum = 0;
//         for (let j = 0; j < num.length; j++) {
//             sum += +num[j];
//         }
//         if(sum > max) {
//             max = sum;
//             maxNum = num;
//         }
//         console.log(num, ` = ${sum}`);
//         num = '';
//     }
// }
// console.log(`Max num ${maxNum} = ${max}`);

/*14. Вывести на экран «прямоугольник», образованный из двух видов символов. Контур прямоугольника должен состоять из одного символа, а в «заливка» — из другого.
##############################
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
##############################*/
// let h = 6;
// let l = 30;
// let chB = '#';
// let chF = '0';
// let result = '';
// for(i = 1; i <= h; i++) {
//      let line = ' ';
//      for(j = 1; j <= l; j++) {
//         if(i == 1 || i == h) { 
//             line += chB;
//         }else 
//         if(j == 1 || j == l) line += chB;
//         else line += chF;
//      }
//      document.write(`${line} <br>`);
//      result += line + '\n';
//     }
//     console.log(result);


/*Найдите сумму чисел от 1 до 20*/
// let sum6 = 0;
// for(let i = 1; i <= 20; i++) {
//     sum6 += i;
// }
// console.log(sum6);

/*Выведите в консоль фразу "Hello World!" в обратном порядке.*/
// let str = 'Hello World!';
// let strReverse = '';
// for(let i = str.length - 1; i >= 0; i--) {
//     strReverse += str[i];
// }
// console.log(strReverse);