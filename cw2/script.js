/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в городе %Город% и работаю в компании %Компания%. Мои контактные данные: %Телефон%, %Почта%.».*/

let name = prompt('Введите имя');
let age = prompt('Введите возраст');
let city = prompt('Введите город проживания');
let company = prompt('Введите название компании');
let phone = prompt('Введите номер телефона');
let email = prompt('Введите почту');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

/*Определите по введенному возрасту (исп. значение из задания 1) год рождения. Выведите на экран «%Имя% родился в %Год% году.».*/

let year = 2024 - age;

console.log(`${name} родился в ${year} году.`);


/*Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

let num = "793846"

let sum1 = +num[0] + +num[1] + +num[2];
let sum2 = +num[3] + +num[4] + +num[5];

// if (sum1 == sum2) {
//     console.log('True');
// } else {
//     console.log('False');
// }

switch (true) {
    case (sum1 == sum2) :
        console.log('True');
    break;

    default :
        console.log('False');
}


/*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.*/

let a = 10,
    b = 2;

let sum = a + b,
    min = a - b,
    mult = a * b,
    div = a / b;

console.log(sum);
console.log(min);
console.log(mult);
console.log(div);
console.log(sum > 1 ? sum * sum : sum);


/*Если переменная a (значение 10) больше 2 и меньше 11, или переменная b (значение 2) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.*/

let A = 10;
let B = 2;

switch (true) {
    case (A > 2 && A < 11):
    case (B >= 6 && B < 14):
        console.log('Верно');

    default :
        console.log('Неверно');
}


/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).  Решить задачу используя (switch)*/

let n = prompt('Введите значение n');

switch (true) {
    case (n >= 0 && n <= 15):
        console.log(`${n} попадает в первую четверть часа`);
    break;

    case (n > 15 && n <= 30):
        console.log(`${n} попадает во вторую четверть часа`);
    break;

    case (n > 30 && n <= 45):
        console.log(`${n} попадает в третью четверть часа`);
    break;

    case (n > 45 && n <= 59):
        console.log(`${n} попадает в четвертую четверть часа`);
    break;

    default:
        console.log(`${n} не входит в диапазон допустимых чисел`);
}


// В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = prompt('Введите число от 1 до 31');

switch (true) {
    case (day >= 1 && day <= 10):
        console.log(`${day} попадает в первую декаду месяца`);
    break;

    case (day >= 11 && day <= 20):
        console.log(`${day} попадает во вторую декаду месяца`);
    break;

    case (day >= 21 && day <= 31):
        console.log(`${day} попадает в третью декаду месяца`);
    break;

    default:
        console.log(`${day} не входит в диапазон допустимых чисел`);
}


/*Если возраст:
 - от 0 до 12 - вывести <name> is a child
 - с 12 до 18 - вывести <name> is a teenager
 иначе 
 - вывести Steve is an adult
 
 Решить задачу 3 способами:
1 if-else
2 switch.
3 Условный (тернарный) оператор*/

if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 12 && age < 18) {
    console.log(`${name} is a teenager`);
} else if (age >= 18) {
    console.log(`${name} is an adult`);
}

switch (true) {
    case (age > 0 && age < 12) :
        console.log(`${name} is a child`);
    break;

    case (age >= 12 && age < 18): 
        console.log(`${name} is a teenager`);
    break;

    default:
        console.log(`${name} is an adult`);
}

console.log(`${name} is a ${(age > 0 && age < 12) ? 'child' : $(age >= 12 && age < 18) ? 'teenager' : 'adult'}`);


/*Пользователь вводит два числа. Найти и вывести (в alert) максимальное из двух чисел. Учтите вариант равенства чисел*/

let k = prompt('Введите значение k');
let l = prompt('Введите значение l');

if (+k > +l) {
    alert(`${k}`);
} else if (+k < +l) {
    alert(`${l}`)
} else if (+k == +l) {
    alert('Значения k и l равны');
}