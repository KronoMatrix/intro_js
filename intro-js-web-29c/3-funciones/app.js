// const ageP = Number(prompt('Cuantos años tienes?'));
/*
const age = 19;
const retAge = 85;

function calcRet() {
  console.log(retAge - age);
}

calcRet();
const retAge = 65;

const calcRet = function (age){
  return retAge - age;
}

const yaxRet = calcRet(29);
const ivanRet = calcRet(27);
const josueRet = calcRet(25);

console.log({yaxRet});
console.log({ivanRet});
console.log({josueRet});
*/
/*
const retAge = 65;
const year = 2023;

const calcAge = function (birthYear) {
  return year - birthYear;
}

const yaxAge = calcAge(1993);
console.log(yaxAge)

const calcRet = function (birthYear){
  const userAge = calcAge(birthYear);
  return retAge - userAge;
}

const yaxRet = calcRet(1993);
console.log(yaxRet);
*/

function suma(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
  }
  
  function resta(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
  }
  
  function multiplicacion(a, b) {
    console.log(`${a} x ${b} = ${a * b}`);
  }
  
  function calculadora (operador, a, b) {
    switch (operador) {
      case '+':
        suma(a, b);
        break;
      case '-':
        resta(a, b);
        break;
      case '*':
        multiplicacion(a, b);
        break;
    }
  }
  
  calculadora('+', 'hola', 3);
  calculadora('-', 'hola', 3);
  calculadora('*', 1, 3);
  