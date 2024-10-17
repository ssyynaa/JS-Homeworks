/*Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8, true, «true», соответственно. При помощи оператора определения типа (typeof) убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в консоль (console.log()) типы операторов.*/

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true"

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

/*Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль результат выражений:
5 % 3;
3 % 5;
5 + '3';
'5' – 3;
75 + 'кг';
785 * 653;
100 / 25;
0 * 0;
0 / 2;
89 / 0;
98 + 2;
5 – 98;
(8 + 56 * 4) / 5;
(9 - 12) * 7 / (5 + 2);
+"123";
1 || 0;
false || true;
true > 0.
Проверьте (выведите в консоль) каким типам принадлежат переменные.*/

let a1 = 5 % 3,
	a2 = 3 % 5,
	a3 = 5 + '3',
	a4 = '5' - 3,
	a5 = 75 + 'кг',
	a6 = 785 * 653,
	a7 = 100 / 25,
	a8 = 0 * 0,
	a9 = 0 / 2,
	a10 = 89 / 0,
	a11 = 98 + 2,
	a12 = 5 - 98,
	a13 = (8 + 56 * 4) / 5,
	a14 = (9 - 12) * 7 / (5 + 2),
	a15 = +"123",
	a16 = 1 || 0,
	a17 = false || true,
	a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

/*Напишите скрипт, который находит площадь прямоугольника высотой 23см и шириной 10см, значение высоты и ширины должны хранится в width и height, соответственно, а значение площади должно хранится в числовой переменной SPryam.*/

let width = 10;
let height = 23;

let SPryam = width * height;

console.log(SPryam);

/*Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром основания равным значению переменной a7 из задания 2, результат поместите в переменную VCilindra.*/

let dia = 4;
let hei = 10;
const pi = 3.14;

let VCilindra = pi * ((dia * dia) / 4) * hei;

console.log(VCilindra);

/*Найдите площадь круга (SKruga) с радиусом 5см (r).*/

let r = 5;

let SKruga = pi * r * r;

console.log(SKruga);

/*Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см (h).*/

let a = 5;
let b = 7;
let h = 10;

let STrap = (a + b) * h / 2;

console.log(STrap);

/*Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%), кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной Pereplata.*/

let S = 2000000;
let p = 0.1;
let years = 5;

let Pereplata = S * p * years;

console.log(Pereplata);

/*Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780.*/

let pa = 8;
let pb = 3;

let x1 = (16 - pa + 2 * pb) / 2;
let x2 = (pa - 15 * pb) / (pb - 6);
let x3 = 23780 / (3 + pa + pb);

console.log(x1, x2, x3);

/*Выведите в консоль стихотворение (соблюдайте все переносы и абзацы):

Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою.*/

console.log("Бывало, спит у ног собака,");
console.log("костер занявшийся гудит,");
console.log("и женщина из полумрака");
console.log("глазами зыбкими глядит.");
console.log("");
console.log("Потом под пихтою приляжет");
console.log("на куртку рыжую мою");
console.log("и мне, задумчивая, скажет:");
console.log("");
console.log(`"А ну-ка, спой!.."- и я пою.`);

/*Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по смыслу предложения (1 абзац, переменная text):
1. «индо земля зашаталась под ногами-и вырос,»;
2. «и заревел он голосом диким...»;
3. «блеснула молния и ударил гром,»;
4. «а так какое-то чудище, страшное и мохнатое,»;
5. «как будто из-под земли, перед купцом:»;
6. «Он подошёл и сорвал аленький цветочек.»;
7. «зверь не зверь, человек не человек,»;
8. «В ту же минуту, безо всяких туч,».*/

{
    let str1 = "индо земля зашаталась под ногами-и вырос,";
    let str2 = "и заревел он голосом диким...";
    let str3 = "блеснула молния и ударил гром,";
    let str4 = "а так какое-то чудище, страшное и мохнатое,";
    let str5 = "как будто из-под земли, перед купцом:";
    let str6 = "Он подошёл и сорвал аленький цветочек.";
    let str7 = "зверь не зверь, человек не человек,";
    let str8 = "В ту же минуту, безо всяких туч,";

    let text = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;

    console.log(text);
}


/*Lesson 1:*/

let strNum = '78';

console.log(strNum, typeof strNum);


let name = 'Yana';
let lang = 'Python';
let to = 'Olga';

let text = 'Привет, ' + to + '! Меня зовут ' + name + ', я программист на "' + lang + '".';
let text2 = "Привет, друзья! Меня зовут " + name + ", я программист на JavaScript";
let text3 = 'Привет, друзья! Меня зовут ' + name + ', я программист на JavaScript'

console.log(text);
console.log(text2);
console.log(text3);


/*Создайте две строки: firstName и lastName. Объедините их в одну строку с пробелом между ними и сохраните в новой переменной fullName. Текст переменно должен начинатся с "Меня зовут:.", а заканчиваться "Мне 68 лет."*/

let firstName = 'Яна';
let lastName = 'Сосновская';
let fullName = `Меня зовут ${firstName} ${lastName}. Мне 68 лет.`;

console.log(fullName);


let original = 100;
let copy = original;

original = 200;

console.log(original);
console.log(copy);


let price = 100;
let discount = 0.2;
let newPrice = price - price * discount;

console.log(newPrice + 'руб, вместо' + price + 'руб');


let A = prompt('Введите число А');
let B = prompt('Введите число Б');

console.log(Number(A) + Number(B));