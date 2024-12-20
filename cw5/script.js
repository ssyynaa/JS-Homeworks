/*Найдите сумму элементов массива*/

let arr = [3, -5, "23", 0, "0", 1, -9],
    sum = null;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

// Посчитайте кол-во отрицательных, положительных элементов

let countNeg = 0,
    countPos = 0;

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > 0) {
        countPos++;
    } else if (+arr[i] < 0) {
        countNeg++;
    }
}

console.log(countPos);
console.log(countNeg);


// Найдите максимальный и минимальный элементы массива [23, 2, 0, , -2, 56, 12, 11]. Выведите эти элементы

let arr1 = [23, 2, 0, , -2, 56, 12, 11],
    amin = Infinity,
    amax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > amax) {
        amax = arr[i];
    } else if (+arr[i] < amin) {
        amin = arr[i];
    }
}

console.log(amax);
console.log(amin);

//Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0]

let arr2 = [0, `N`, 98, `Text`, 3, 5],
    arr2Reversed = [],
    counter = 0;

while (arr2Reversed.length !== arr2.length) {
    arr2Reversed.unshift(arr2[counter]);
    counter++;
}

console.log(arr2Reversed);

// Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6].

let Arr1 = [12,4,0],
    Arr2 = [8,7,6],
    Arr3 = [];

for (i = 0; i < Arr1.length; i++) {
    Arr3.push(Arr1[i] + Arr2[i]);
}

console.log(Arr3);

// Дан массив целых чисел (минимум 6 элементов). Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторов”.

let arr4 = [45, -9, 4, 0, 2, 11, -7, -4],
    check = false;

for (let i = 0; i < arr4.length; i++) {
    let index = arr4.indexOf(arr4[i]);
    if (index != -1 && index != i) check = true;
}

console.log(check? "повтор есть" : "повторов нет");

// Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.

let arrNames = ["Nikita", "Kate", "Polina", "Oleg", "Nina"],
    firstLetter = prompt("Введите первую букву");

for (let i = 0; i < arrNames.length; i++) {
    if (arrNames[i][0] == firstLetter) {
        console.log(arrNames[i]);
    }
}

// Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина

let arr5 = [44, 15, -10, 2, 2, 2, 5, -6, 23],
    r = false;

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == arr5[i + 1] && arr5[i + 1] == arr5[i + 2]) {
        r = true;
    }
}

console.log(r);

// Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей. Выведите оба массива и удаленные элементы.

/*1. Создаем два массива с услугами и ценами.
2. Задаем значение переменной N с ценой, товары по которой будем удалять.
3. Создаем цикл для массива price
4. Выполняем поиск значения N в массиве price. В случае если эл. найден, то мы его удалям из массива, запоминая его index.
5. Сохраняем элемент по index в переменную для вывода на экран.
6. Из массива services удаляем элемент под индексом из index.
7. Выводим оба массива и удаленный элемент ввиде: 

"Услуга 1: $4"
"Услуга 2: $23"
"Удалена Услуга 5: $82"*/

let n = 400;
    services = ['Car-wash', 'Web-site creation', 'Cleaning', 'Catering'],
    prices = [200, 1500, 400, 800];

let indexPrice = prices.indexOf(n);

if (indexPrice) {
    let servicesDel = services[indexPrice];

    services.splice(indexPrice, 1);
    prices.splice(indexPrice, 1);

    for (let i = 0; i < services.length; i++) {
        console.log(`${services[i]}: $${prices[i]}\n`);
    }

    console.log(`Удалено: ${servicesDel}: $${n}`);
}