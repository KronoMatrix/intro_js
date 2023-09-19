/*
Condicional IF
let isPremium = true;

if(isPremium === false) {
    console.log('Anuncio!');
}
console.log('reproduciendo video');
*/

// Condicional IF-ELSE
/*let isPremium = true;

if(isPremium === false) {
    console.log('Anuncio!');
    console.log('reproduciendo video');
} else {
    console.log('reproduciendo video');
}*/
/*
let age = 12;
if(age >= 18) {
    console.log('Quieres un vino?');
} else {
    console.log('Quieres awita?');
}
*/
/*
let semaforo = prompt('de qué color está el semaforo?');
if (semaforo) {
    if (semaforo === 'verde') {
        console.log('avanza!');
    } else if (semaforo === 'amarillo') {
        console.log('PISALE POR QUE YA SE VA A PONER EN ROJO');
    } else if (semaforo === 'rojo') {
        console.log('detente');
    } else {
        alert('Escribe en minúsculas y un color válido!');
    }
} else {
    alert('ingresa un color!');
}*/

// si es un numero NO valido -> true
// si es un numero valido -> false
/*
let num = Number(prompt('dime un numero!'));
// if (!isNaN(num)) {
if (num) {
    if (num % 2 === 0) {
        console.log('el número', num, 'es par');
        console.log(`El número ${num} es par`);
    } else {
        console.log('el número '+ num + ' es impar');
        console.log(`El número ${num} es impar`);
    }
} else {
    console.log('ingresa un numero válido');
}
*/

/*
const age = 20;
let drink;

if(age >= 18) {
    drink = 'vino';
} else {
    drink = 'awita';
}

//          condición      true     false
let drinkOT = age >= 18 ? 'vino' : 'awita';

console.log(drink);
console.log(`A mi me gusta tomar ${drinkOT}`);
console.log(`A mi me gusta tomar ${age >= 18 ? 'vino' : 'awita'}`);
*/

const avgPopulation = 33;
const mxPopulation = 100;
let isMxAbove = mxPopulation >= avgPopulation ?
                        'encima':
                        'debajo';

console.log(`México tiene una población por ${isMxAbove} del promedio`);











