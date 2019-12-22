let alcoAge = prompt('Сколько Вам лет?');
if (alcoAge >= 18) {
  alert('Одобрено');
} else {
  alert('Отказано в доступе: нет 18');
}


let alcoAge = prompt('Сколько Вам лет?');
if (alcoAge >= 18) {
  alert('Одобрено');
} else if (alcoAge == 16) {
  alert('Почти, но еще рано');
} else if (alcoAge == 12) {
  alert('Очень рано');
} else if (alcoAge == 8) {
  alert('Вам пора спать');
} else {
  alert('Отказано в доступе');
}


let alcoAge = prompt('Сколько Вам лет?');
let message = (alcoAge >= 18) ? alert('Одобрено') :
    (alcoAge == 16) ? alert('Почти, но еще рано') :
        (alcoAge == 12) ? alert('Очень рано') :
            (alcoAge == 8) ? alert('Вам пора спать') :
                alert('Отказано в доступе');


let alcoAge = prompt('Сколько Вам лет?');
let message = (alcoAge >= 18) ? alert('Одобрено') : alert('Отказано в' +
    ' доступе: нет 18');


let year = prompt('В каком году был выпущен ES5?');
let message = (year > 2015) ? alert('Раньше') :
    (year < 2015) ? alert('Позже') :
        alert('Верно');


let year = prompt('В каком году был выпущен ES5?');
let message = (year == 2015) ? alert('Верно') : alert('Неверно');


let company = prompt('Какая компания выпустила седан M5 F90?');
(company == 'BMW') || (company == 'bmw') || (company == 'Bmw') ?
    alert('Верно') : alert('Неверно');


let founder = prompt('Кто является основателем Microsoft?');
(founder == 'Билл Гейтс') || (founder == 'Bill Gates') ? alert('Верно') : alert('Неверно');


let x = prompt('Введите Х');
// let y = prompt('Введите Y');
// (x > y) ? alert('x больше, чем y') : alert('x не больше, чем y');


let x = prompt('Введите число');
(x % 2 === 0) ? alert('Это число-четное') : alert('Это число-нечетное');


let x = prompt('Введите число');
if (x % 2 === 0) {
  alert('Это число-четное')
} else {
  alert('Это число-нечетное')
}


let x = prompt('Введите точку X'), y = prompt('Введите точку Y');
(x <= 20) && (y <= 20) ? alert('Точка лежит внутри окружности') : alert('Точка' +
    ' лежит вне окружности');


let x = 14,
    y = 14,
    z = 27;
if ((x + y > z) && (y + z > x) && (z + x > y)) {
  alert('Такой треугольник может существовать')
} else {
  alert('Такой треугольник не может существовать')
}


let a = prompt('Введите любое слово, кроме JS');
if (a != 'JS') {
  alert('Хорошо')
} else {
  alert('Введите другое слово')
}


let age = prompt('Введите число от 14 до 90 включительно');
if (age >= 14 && age <= 90) {
  alert('Одобрено')
} else {
  alert('Отказано')
}


let login = prompt('Введите логин');
let password = '';
if (login === 'Админ') {
  password = prompt('Введите пароль')
} else if (!login) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}


let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}


let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);


let sum = '';
let x = 0;
while (x < 10) {
  x = x + 1;
  sum = parseInt(sum + x);
}
alert(sum);


let sum = '';
let x = 0;
do {
  x = x + 1;
  sum = parseInt(sum + x);
} while (x < 10);
alert(sum);
//

for (let x = 0; x <= 10; x++) {
  console.log(x)
}


for (let x = ''; x <= 100;) {
  x = prompt('Введите число, большее 100');
  if (x == undefined) {
    break
  }
}


let x = prompt('Введите простое число');
if (x % 2 === 0 || x % 3 === 0 || x % 5 === 0 || x % 7 === 0 || x % 9 === 0) {
  alert('Это сложное число')
} else {
  alert('Это простое число')
}


let resultSum = '';
let i = 0;
do {
  i = i + 1;
  resultSum = parseInt(resultSum + i);
} while (i < 100);
alert(resultSum);


