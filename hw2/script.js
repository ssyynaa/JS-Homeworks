//Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = prompt("Введите значение переменной a");

// switch (true) {
//     case (+a > 0):
//         console.log(`Верно`);
//     break;

//     default:
//         console.log(`Неверно`);
// }


//Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно.

// let d = prompt('Введите число от 1 до 365');
// let years = d / 365;
// let months = d / 31;
// let weeks = d / 7;
// let hours = d * 24;
// let minutes = hours * 60;
// let seconds = minutes * 60;

// if (d < 7) {
//     console.log(`Меньше года, меньше месяца, меньше недели, ${hours} часов, ${minutes} минут, ${seconds} секунд`)
// } else if (d >=7 && d < 31) {
//     console.log(`Меньше года, меньше месяца, ${weeks} недель, ${hours} часов, ${minutes} минут, ${seconds} секунд`)
// } else if (d>=31 && d < 365) {
//     console.log(`Меньше года, ${months} месяцев, ${weeks} недель, ${hours} часов, ${minutes} минут, ${seconds} секунд`)
// } else if (d >= 365) {
//     console.log(`${years} лет, ${months} месяцев, ${weeks} недель, ${hours} часов, ${minutes} минут, ${seconds} секунд`)
// }


//Напишите скрипт, который по введенному дню (исп. значение переменной из 8 задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch.

// let day = prompt("Введите число от 1 до 365");

// if (day >= 1 && day <= 31) {
//     console.log(`Январь`)
// } else if (day >= 32 && day <= 59) {
//     console.log(`Февраль`)
// } else if (day >= 60 && day <= 90) {
//     console.log(`Март`)
// } else if (day >= 91 && day <= 120) {
//     console.log(`Апрель`)
// } else if (day >= 121 && day <= 151) {
//     console.log(`Май`)
// } else if (day >= 152 && day <= 181) {
//     console.log(`Июнь`)
// } else if (day >= 182 && day <= 212) {
//     console.log(`Июль`);
// } else if (day >= 213 && day <= 243) {
//     console.log(`Август`)
// } else if (day >= 244 && day <= 273) {
//     console.log(`Сентябрь`)
// } else if (day >= 274 && day <= 304) {
//     console.log(`Октябрь`)
// } else if (day >= 305 && day <= 334) {
//     console.log(`Ноябрь`)
// } else if (day >= 335 && day <= 365) {
//     console.log(`Декабрь`)
// } else {
//     console.log(`${day} не входит в диапазон допустимых чисел`)
// }

// switch (true) {
//     case (day >= 1 && day <= 59 && day >= 335 && day <= 365):
//         console.log('Зима');
//     break;

//     case (day >= 60 && day <= 151):
//         console.log('Весна');
//     break;

//     case (day >= 152 && day <= 243):
//         console.log('Лето');
//     break;

//     case (day >= 244 && day <= 334):
//         console.log('Осень');
//     break;

//     default:
//         console.log('Нельзя определить пору года');
// }


//Необходимо написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа через promt. Затем вводит результат умножения и в результате должен увидеть на экране правильно он ответил или нет (результат вывести в alert)

// let x1 = prompt('Введите первое значение');
// let x2 = prompt('Введите второе значение');
// let multUser = prompt('Введите результат умножения');
// let multRight = x1 * x2;

// if (multUser == multRight) {
//     alert('Верно');
// } else if (multUser != multRight) {
//     alert(`Неверно, это ${multRight}`);
// }


//Дана строка состоящая из символов, например ‘abcde’. Проверить, что первым символом этой строки является буква ‘a’. Если это так вывести слова ‘да’, в противном случае выведите ‘нет’

// let string = 'abcde';

// switch (true) {
//     case (string[0] == 'a'):
//         console.log('Да');
//     break;

//     default:
//         console.log('Нет');
// }


//У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто «лягут» на третью и треугольника не получится. Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

let m = prompt('Введите значение первой стороны треугольника');
let k = prompt('Введите значение второй стороны треугольника');
let l = prompt('Введите значение третьей стороны треугольника');

let rule1 = 'm + k > l';
let rule2 = 'l + k > m';
let rule3 = 'm + l > k';

if (rule1 == true && rule2 == true && rule3 == true) {
    console.log('Треугольник может существовать при введенных длинах сторон')
} else {
    console.log('Треугольник НЕ может существовать при введенных длинах сторон')
}