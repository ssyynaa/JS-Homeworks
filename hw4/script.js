// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > -10 && arr1[i] < -3) {
        console.log(arr1[i]);;
    }
}

// 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.

let arr2 = [];
// let arr3 = [];

for (let i = 23, j = 0; i <= 57 ; i++, j++) {
    arr2[j] = i; 
}

console.log(arr2);

// let i = 23;

// while (i <= 57) {
//     arr3[i] = i;
//     i++;
// }

// console.log(arr3);

let result = 0;

for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
}

console.log(result);

// 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr3 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr3.length; i++) {
    if (+arr3[i][0] == 1 || +arr3[i][0] == 2 || +arr3[i][0] == 5) {
        console.log(arr3[i]);
    }
}

// 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let arrWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrWeek.length; i++) {
    if (i == 5 && i == 6) {
        document.write(`<br> <b> ${arrWeek[i]}`);
    } else {
        document.write(`<br> ${arrWeek[i]}`);
    }
}

// 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length

let arr4 = [2, 4, 8, 16, 32, 64, 128, 256];

arr4.push(512);
console.log(arr4[arr4.length-1]);

// 7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.

let n,
    arrPrompt = [];

while (n != "") {
    n = prompt("Введите число");
    arrPrompt.push(+n);
}

console.log(arrPrompt);

arrPrompt.sort((a,b) => a - b);
console.log(arrPrompt);

// 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.

//while
// let arrNormal = [12, false, 'Текст', 4, 2, -5, 0],
//     arrReversed = [],
//     j = arrNormal.length - 1;

// while (j >= 0) {
//     arrReversed.push(arrNormal[j]);
//     j--;
// }

// console.log(arrReversed);

//reverse
let arrNormal = [12, false, 'Текст', 4, 2, -5, 0];
arrNormal.reverse();

console.log(arrNormal);

// 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]

let arrEmpty = [5, 9, 21, , , 9, 78, , , , 6],
    a = 0;

for (let i = 0; i < arrEmpty.length; i++) {
    if (arrEmpty[i] == undefined) {
        a++;
    }

    console.log(a);
}

// 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].

let arr0 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    first = arr0.indexOf(0),
    last = arr0.lastIndexOf(0);
    sum = 0;

for (let i = first; i <= last; i++) {
    sum += arr0[i];
}

console.log(`Сумма элементов массива между двумя нулями ${sum}`);

// 11. Нарисовать равнобедренный треугольник из символов ^. Высоту задает пользователь.

let h = 5;
let ch = '^';

for (let i = 1; i <= 5; i++) {
    let line = '';

    for (let j = 1; j <=(h - i); j++) {
        line += ' ';
    }

    for (let j = 1; j <= ((i * 2) - 1); j++) {
        line += ch;
    }

    console.log(line);
}

//допы
// Найдите сумму элементов массива.

let array = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
}

console.log(sum1);

// Найти номер и значение первого найденного отрицательного элемента массива.

let arrNeg = [0, 14, -5, 23, -16, 100];

for (let j = 0; j < arrNeg.length; j++) {
    if (arrNeg[j] < 0) {
        console.log(j, arrNeg[j]);
        break;
    }
}

// Найдите максимальный и минимальный элементы массива. Выведите эти элементы и их сумму.

let arrSum = [48, 9, 4, 21, 2, 1, 8, 84, 76, 8, 4, 13, 2],
    sumEl = 0,
    amin = Infinity,
    amax = -Infinity;

for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] > amax) {
        amax = arrSum[i];
    } else if (arrSum[i] < amin) {
        amin = arrSum[i];
    }

    sumEl = amin + amax;
}

console.log(amax, amin, sumEl);

// Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0]

let arrRandom = [0, `N`, 98, `Text`, 3, 5],
    arrRandomReversed = [],
    counter = 0;

while (arrRandomReversed.length !== arrRandom.length) {
    arrRandomReversed.unshift(arrRandom[counter]);
    counter++;
}

console.log(arrRandomReversed);

// Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6].

let Arr1 = [12,4,0],
    Arr2 = [8,7,6],
    Arr3 = [];

for (i = 0; i < Arr1.length; i++) {
    Arr3.push(Arr1[i] + Arr2[i]);
}

console.log(Arr3);

// Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].

let arrVice = [1, -5, 0, 3, -4];

for (let i = 0; i < arrVice.length; i++) {
    arrVice[i] = -arrVice[i];
}

console.log(arrVice);

// Поменяйте местами максимальный и минимальных элементы в массиве.

let arrVice1 = [1, -5, 0, 3, -4],
    maxIndex = 0, 
    minIndex = 0; 

for (let i = 0; i < arrVice1.length; i++) {
    if (arrVice1[i] > arrVice1[maxIndex]) {
        maxIndex = i;
    }
    if (arrVice1[i] < arrVice1[minIndex]) {
        minIndex = i;
    }
}

let temp = arrVice1[maxIndex];
arrVice1[maxIndex] = arrVice1[minIndex];
arrVice1[minIndex] = temp;

console.log(arrVice1);

// Посчитайте кол-во отрицательных, положительных элементов, а также  элементов со строчным типом данных.

let arrDiff = [1, -5, 0, 3, -4, 'bear', 'twice', -7, 8],
    sumPos = 0,
    sumNeg = 0,
    sumStr = 0;

for (let i = 0; i < arrDiff.length; i++) {
    if (typeof arrDiff[i] === "number") {
        if (arrDiff[i] > 0) {
            sumPos++;
        } else if (arrDiff[i] < 0) {
            sumNeg++;
        }
    } else if (typeof arrDiff[i] === "string") {
        sumStr++;
    }
}

console.log(`${sumPos} положительных`, `${sumNeg} отрицательных`, `${sumStr} строк`);

// Дан массив целых чисел (минимум 6 элементов). Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторов”.

let arrRep = [45, -9, 4, 2, 2, 11, -7, -4],
    check = false;

for (let i = 0; i < arrRep.length; i++) {
    let index = arrRep.indexOf(arrRep[i]);
    if (index != -1 && index != i) check = true;
}

console.log(check? "повтор есть" : "повторов нет");

// Выполните сортировку массива с разными числовыми элементами.
//по возрастанию
arraySort = [48, 9, 7, 21, 2, 1, 8, 84, 76, 99, 4, 13, 21];
let compareEl = (a, b) => a - b;

arraySort.sort(compareEl);

console.log(arraySort);

// Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.

let arrNames = ["Nikita", "Kate", "Polina", "Oleg", "Nina"],
    firstLetter = prompt("Введите первую букву");

for (let i = 0; i < arrNames.length; i++) {
    if (arrNames[i][0] == firstLetter) {
        console.log(arrNames[i]);
    }
}

// Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина.

let arr5 = [44, 15, -10, 2, 2, 2, 5, -6, 23],
    r = false;

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == arr5[i + 1] && arr5[i + 1] == arr5[i + 2]) {
        r = true;
    }
}

console.log(r);

// Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей. Выведите оба массива и удаленные элементы. 

let b = 400;
    services = ['Car-wash', 'Web-site creation', 'Cleaning', 'Catering'],
    prices = [200, 1500, 400, 800];

let indexPrice = prices.indexOf(b);

if (indexPrice) {
    let servicesDel = services[indexPrice];

    services.splice(indexPrice, 1);
    prices.splice(indexPrice, 1);

    for (let i = 0; i < services.length; i++) {
        console.log(`${services[i]}: $${prices[i]}\b`);
    }

    console.log(`Удалено: ${servicesDel}: $${b}`);
}