/*

while(true) {
    //code
}

do {
    //code
} while(true); всегда выполняется один раз, даже при неверных условиях

for(let a = 2, ..; true;) {
    //code
    //break/continue;
}

break;
continue;

*/

let count = 0;

while(count <= 3) {
    console.log('Привет');

    count++; //count = count + 1;
}


let count2 = 4;

do {
    console.log('Hello');

    count2++;

} while(count2 <= 3);


let count3 = 0;

for (; count3 <= 3;) {
    console.log('Куку');

    count3++;
}


for(let count4 = 0; count4 <=3; count4++) {
    console.log('Hi');
}


let a = 0;

while(a < 5) {
    console.log(a);

    a++;
}


console.log(`------`);

// i, j, k, n, m - для циклов

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

//console.log(i); //не существует вне цикла; способ не повторяться переменными в коде

console.log(`------`);


// 0 == false
// '' == false
//undefined == false
// 'a' == true
// 1 == true

for(let i = 1; i <= 10; i++) {
    if (i == 4) continue; //пропускает конкретную итерацию

    console.log(i);
}

console.log(`------`);


for(let i = 1; i <= 5; i++) {
    // if (i % 2 == 0) console.log(i);

    if (i % 2) continue;

    console.log(i);
}

console.log(`------`);


for(let i = 1; ; i++) {
    if (i > 6) break;

    console.log(i);
}

console.log(`------`);


//Вывести с помощью цикла на экран числа от 50 до 1. Использовать циклы while и for.

for(let i = 50; i >= 1; i--) {
    console.log(i);
}

let i = 50;

while(i >= 1) {
    console.log(i);
    i--;
}

console.log(`------`);


//Выведите числа от 1 до 50 и от 35 до 8.

for (let j = 1; j <= 50; j++) {
    console.log(j);
}

let j = 35;

while(j >= 8) {
    console.log(j);
    j--;
}

console.log(`------`);


//Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку.

let m = 89;

while(m >= 11) {
    document.write(m + "<br/>");

    m--;
}

console.log(`------`);


//Выведите на экран числа от 15 до 78 исключая четные

for(let i = 15; i <= 78; i++) {
    if (i % 2 == 0) continue;

    console.log(i);
}

console.log(`------`);


//Необходимо вывести на экран числа от 50 до 1 с шагом 5 и 10.

for(let j = 50; j >= 1; j -= 5) {
    console.log(j);
}

for(let j = 50; j >= 1; j -= 10) {
    console.log(j);
}

console.log(`------`);


//Выведите в консоль фразу "Hello World!" в обратном порядке.

let str = "Hello World!";
let n = str.length - 1;

while(n >= 0) {
    console.log(str[n]);

    n--;
} //вывод символов

let strReverse = '';

for(let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    strReverse += str[i];
}

console.log(strReverse); //вывод фразы

console.log(`------`);


//Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274).

// let num = '472';
// let numReverse = '';
// let k = num.length - 1;

// while(k >= 0) {
//     numReverse += num[k];
//     k--;
// }

// console.log(+numReverse);

let num = 12345;
num = String(num);
let k = (num.length - 1);
let numReverse = '';

while(k >= 0) {
    numReverse += num[k];

    k--;
}

console.log(+numReverse);

console.log('-------');


//Найти сумму чисел от 1 до 20

let sum = 0;

for(i = 1; i <= 20; i++) {
    sum += i;
}

console.log(sum);

console.log('-------');


//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?

for(let n = 1000; ; n /= 2) {
    if (n < 50) break;

    console.log(n);
}