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