let auto = {
  brand: 'BMW',
  model: 'M4',
  body: 'F80',
  gearbox: 'DCT',
  color: 'yellow',
  year: '2014',
  package: 'M Competition'
};
delete auto.package;
console.log(auto);
alert(auto['gearbox']);
console.log ('year' in auto);


let getBike = prompt('Type your bike brand');
let getBikeType = prompt('Type your bike type');
let bike = {
  brand: getBike,
  type: getBikeType
};
console.log(bike);


let bike = {
  brand: 'Trek',
  model: 'Fuel EX',
  year: '2014'
};
for (let key in bike) {
  console.log(bike.model + '-4')
}


const obj1 = {
  a: 1,
  b: 2,
  c: 3
};
const obj2 = {
  d: 4,
  e: 5,
  f: 6
};
const obj3 = Object.assign({}, obj2);
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);


let bikes = ['Trek', 'Specialized', 'Nukeproof', 'Scott', 'YT'];
bikes.push('NS');
bikes.shift();
bikes.pop();
bikes.unshift('Polygon');
console.log(bikes);


let cars = ['BMW', 'Mercedes', 'Audi'];
cars.push('Porsche');
cars.shift();
cars.pop();
cars.unshift('BMW');
console.log(cars);
alert(cars[0]);


let nums = [1, 2, 3, 4, 5];
for (let value of nums) {
  value *=2;
  console.log(value);
}















