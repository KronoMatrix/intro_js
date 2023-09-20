/* console.log('Primer console.log');
console.log(2*5);
alert('un alert!'); */

/* 
    * var nombre -> declaración de variable
        * va a tener propiedades de var
        * se va a llamar "nombre"
    * nombre = 'Yaxche' -> asignación
        * esta variable "nombre" va a tener guardado (asigando) el valor de "Yaxche"
*/
/*
var nombre = 'Yaxche';
var edad = 29;
var apellido; //esta es una mala práctica
console.log(nombre);
console.log(apellido);
console.log(edad);

let usuario = '@yaxchemanrique';
console.log(usuario);
usuario = '@yaxche';
console.log(usuario);

console.log("Hola mi nombre es 'Yaxche'!");
console.log('Hola mi nombre es "Yaxche"!');

const cinco = '5';
console.log(cinco);
console.log(typeof cinco);

const cincoNum = Number(cinco);
console.log(cincoNum);
console.log(typeof cincoNum);

const cincoString = 'cinco';
const cincoNum2 = Number(cincoString);
console.log(cincoNum2); // NaN -> Not a Number! (no es un numero válido!)
console.log(typeof cincoNum2);
console.log(isNaN(cincoNum2));

// Tipos Primitivos
// * number
// * string
// * Boolean
// * null
// * undefined
const nombre = 'Yaxche';
let edad;
const insta = null;

console.log(nombre, typeof nombre); 
//valor = 'Yaxche' & Tipo es String
console.log(edad, typeof edad); 
//valor = undefined & Tipo es undefined
console.log(insta, typeof insta); 
//valor es 'null' & tipo es 'objeto'

// Tipos: Arreglos y Objetos
let students = ['Erick', 'Yanilet', 'Quique', 'Angel'];
console.log(students);
students[3] = 'Angel Santiago';
console.log(students[1]);

let grades = [5, 20, 8, 6];
console.log(grades);

grades[1] = 10;
console.log(grades);
console.log(grades[3]);

let arr = ['Yaxche', 29, true, '@yaxchemanrique'];
console.log(arr);

let user = {
    firstName: 'Yaxche',
    age: 29,
    isMilenial: true,
};
console.log(user);
console.log(user.firstName);
console.log(user.isMilenial);

user.age = 30;
console.log(user.age);
*/

// const edad = prompt('Dime tu edad');
// console.log(edad, typeof edad);
// const edadNum = Number(edad);
// console.log(edadNum, typeof edadNum);


//! Operadores
console.log(5 + 8);
console.log(5 - 8);
console.log(5 * 8);
console.log(5 / 8);
console.log(2 ** 8);
console.log(8 % 5); // 8 / 5 = 1 R3 8%5 = 3
console.log(15 % 5); // 15 / 5 = 3 R0 15%5 = 0

    // *Comparaciones
console.log(5 < 8); //true
console.log(5 <= 8); //true
console.log(8 <= 8); //true

console.log(5 > 8); //false
console.log(5 >= 8); //false
console.log(8 >= 8); //true

    // * Igualdades
console.log(8 == 8); // true
console.log(8 != 8); // false
console.log(7 == 8); // false
console.log(7 != 8); // true

const ocho = 8;
const ochoStr = '8';
const siete = 7;
const sieteStr = '7';

console.log(ochoStr == ocho); // true
console.log(ochoStr != ocho); // false
console.log(sieteStr == ocho); // false
console.log(sieteStr != ocho); // true


console.log(ochoStr === ocho); // false
// valores    8            8
// tipoDato   Str         Num
console.log(ochoStr !== ocho); // true
// valores    8            8
// tipoDato   Str         Num
console.log(sieteStr === ocho); // false
// valores    7            8
// tipoDato   Str         Num
console.log(sieteStr !== ocho); // true
// valores    7            8
// tipoDato   Str         Num

