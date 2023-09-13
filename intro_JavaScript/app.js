/*console.log('Primer console.log');
console.log(2*5);
alert('dale click para continuar!');*/

/*var nombre -> declaracion de variable
    *va a tener propiedades de var
    *se va a llamar "nombre"
    *var nombre = 'Erick'
    * esta variable "nombre va a 
    * tener guardado (asignado) el valo 
    * de Erick"
*/
/*var nombre = 'Erick';
var edad = 38;
var apellido; 
console.log(nombre);
console.log(apellido);
console.log(edad);

let usuario = '@erickjimenez'; /*Primero es const y luego podriamos cambiar a let, ya que const no nos deja cambiar usuario ni edad, y let si*/
/*console.log(usuario);
usuario = '@erick';
console.log(usuario);

console.log("Hola mi nombre es 'Erick'!");
console.log('Hola mi nombre es "Erick"!');

const cinco = '5';
console.log(cinco);
console.log(typeof cinco);

const cincoNum = Number(cinco);
console.log(cincoNum);
console.log(typeof cincoNum);

const cincoString ='cinco';
const cincoNum2 = Number(cincoString);
console.log(cincoNum2); /* esto no es un numero 
un numero valido.*/
/*console.log(typeof cincoNum2);
console.log(isNaN(cincoNum2));
*/


const nombre = '@erick';
let edad;
const insta = null;

console.log(nombre, typeof nombre);
//valor = '@erick' & tipo es String
console.log(edad, typeof edad);
//valor = undefined y tipo es Undefined
console.log(insta, typeof insta);
//valor es "null" & tipo es "objeto"

//Tipos de ARREGLOS.
/*
const students = ['Erick', 'Yanilet', 'Quique', 'Angel'];
console.log(students);
students[3] = 'Angel Santiago';
console.log(students[1]);

let grades = [5,20,8,6];
console.log(grades);

grades [1] = 10;
console.log(grades);
console.log(grades[3]);

let arr= ['@erick', 38, true,
'@erick'];
console.log(arr); //esta es una mala practica.

// esto es el primer arreglo y buena practica al programar.
let user = {
    firstName: 'Erick',
    age: 38,
    isMilenial: true,
};
console.log(user);
console.log(user.firstName);
console.log(uster.isMilenial);

user.age = 39;
console.log(user.age);
*/
/*
const edad = prompt('Dime tu edad');
console.log(edad, typeof edad);
const edadNum = Number(edad);
console.log(edadNum, typeof edadNum);
*/

//! Operadores
console.log(5 + 8);
console.log( 5 - 8);
console.log(5 * 8);
console.log(5 / 8);
console.log(5 ** 8);
console.log(5 % 8);
console.log(15 % 5);
     // *Comparaciones
console.log(5 < 8); //true
console.log(5 <= 8); //true
console.log(8 <= 8); //true

console.log(5 > 8); //false
console.log(5 >= 8);// false
console.log(8 >= 8); //true

     // *Igualdades
console.log('8' == 8); //true
console.log(8 != 8); //false
console.log(7 == 8); //false
console.log(7 != 8); //true 

const ocho = 8;
const ochoStr = '8';
const siete = 7;
const sieteStr = '7';

console.log(ochoStr == ocho); //true
console.log(ochoStr != ocho); //false
console.log(sieteStr == ocho); //false
console.log(sieteStr != ocho); //true

console.log(ochoStr === ocho);//false
console.log(ochoStr !== ocho); //false
console.log(sieteStr === ocho); //false
console.log(sieteStr !== ocho); //true