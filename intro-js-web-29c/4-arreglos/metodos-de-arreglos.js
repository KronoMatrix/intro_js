// let frutas = ['manzana', 'platano', 'uvas', 'fresas', 'frambuesas', 'zarzamora', 'zanahoria', 'kiwi'];
//                  0          1        2         3

let verduras = ['cebolla', 'jitomate', 'tomate'];
//                  0          1          2 

// console.log(`Mi fruta favorita es: ${frutas[3]}`);

// frutas[0] = 'frambuesa';
/*console.log(frutas);
console.log(frutas.length); //4
console.log(verduras.length); //3

console.log(verduras.includes('cebolla'));
console.log(verduras.includes('limon'));
console.log(verduras.indexOf('cebolla'));
console.log(verduras.indexOf('limon'));

const verdurasStr = 'cebolla,jitomate,tomate';
const verdurasArr = verdurasStr.split(',');
console.log(verdurasArr);*/


let frutas = ['manzana', 'platano', 'uvas', 'fresas', 'frambuesas', 'zarzamora', 'zanahoria', 'kiwi'];

// arr.slice(start, end)

const newFrutas = frutas.slice(1, 4);
console.log(frutas);
console.log(newFrutas);
