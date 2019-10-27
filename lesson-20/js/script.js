let alcoAge = prompt('Сколько Вам лет?');
switch (true) {
  case (alcoAge >= 18):
    alert('Одобрено');
    break;
  case (alcoAge == 16):
    alert('Почти, но еще рано');
    break;
  case (alcoAge == 12):
    alert('Очень рано');
    break;
  case (alcoAge == 8):
    alert('Вам пора спать');
    break;
  case (alcoAge == 4):
    alert('Позовите маму');
    break;
  default:
    alert('Отказано в доступе');
}


let randomNumber = +prompt('Угадайте число от 0 до 7');
switch (randomNumber) {
  case 4:
    alert('Далеко');
    break;
  case 5:
    alert('Близко');
    break;
  case 6:
    alert('Очень близко');
    break;
  case 7:
    alert('Вы угадали!');
    break;
  default:
    alert('Подумайте еще...');
}


let randomNumber = +prompt('Угадайте число от 0 до 7');
switch (randomNumber) {
  case 3:
  case 4:
    alert('Далеко');
    break;
  case 5:
  case 6:
    alert('Близко');
    break;
  case 7:
    alert('Вы угадали!');
    break;
  default:
    alert('Подумайте еще...');
}


let browser = prompt('Введите Ваш браузер');
if (browser == 'Edge') {
  alert('У вас Edge!');
} else if (browser == 'IE') {
  alert('У вас Internet Explorer!');
} else if (browser == 'Chrome') {
  alert('У вас Chrome!');
} else if (browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert('Хорошо, нет проблем');
} else {
  alert('Надеемся, что эта страница отображается корректно');
}


const NUMBER = +prompt('Введите число между 0 и 3');
switch (NUMBER) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2 или 3');
    break;
  default:
    alert('Вы ввели другое число (не из диапазона)');
}


let carBrand = prompt('Введите марку Вашего автомобиля');
switch (carBrand) {
  case 'BMW':
    alert('Мы обслуживаем такие авто');
    break;
  case 'Audi':
    alert('Мы обслуживаем только двигатели авто данной марки');
    break;
  case 'Mercedes':
    alert('Мы обслуживаем только коробки передач авто данной марки');
    break;
  default:
    alert('Извините, мы не работаем с такими авто');
}


function howOld() {
  prompt('Сколько Вам лет?')
}

howOld();


function yourCar(brand = 'BMW', model = 'M3', body = 'E92', color = 'black', year = '2008') {
  alert(brand + ' ' + model + ' ' + body + ' ' + color + ' ' + year);
}

yourCar('BMW', 'M8 Competition', 'G15', 'Blue', '2019');


function yourData(gender = 'Male', age = '30', nationality = 'Russian') {
  alert(gender + ' ' + age + ' ' + nationality);
}

yourData('Male', '22', 'Belarus');


function sum(a, b) {
  return a + b;
}

let result = sum(5, 10);
alert(result);


function product(a, b, c) {
  return a * b * c;
}

let result = product(2, 3, 3);
alert(result);


function getFizzBuzzOutput(n, fizzNumber = '3', buzzNumber = '5') {
  let output = '';
  for (let i = 1; i <= n; i++) {
    output += getFizzBuzz(i, fizzNumber, buzzNumber);
  }
  return output;
}

function getFizzBuzz(n, fizzNumber, buzzNumber) {
  if (n % fizzNumber === 0 && n % buzzNumber === 0) {
    return '  ' + 'fizzBuzz';
  } else if (n % fizzNumber === 0) {
    return '  ' + 'fizz';
  } else if (n % buzzNumber === 0) {
    return '  ' + 'buzz';
  } else {
    return '  ' + n;
  }
}

let result = getFizzBuzzOutput(100);
console.log(result);


let yourCar = function (brand = 'BMW', model = 'M3', body = 'E92', color = 'black', year = '2008') {
  alert(brand + ' ' + model + ' ' + body + ' ' + color + ' ' + year);
};
yourCar('BMW', 'M8 Competition', 'G15', 'Blue', '2019');


function getAge(age) {
  prompt('Сколько Вам лет?');
  age();
}

function verifyAge() {
  confirm('Точно?');
}

getAge(verifyAge);


let sum = function(a, b) {
  return a + b;
};

let sum = (a, b) => a + b;
alert(sum(3, 5));


let sum = (a, b) => {
  let result = a + b;
  return (result);
};
alert(sum(4, 3));























