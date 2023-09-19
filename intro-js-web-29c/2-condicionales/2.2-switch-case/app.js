let day = 'sabado';

switch(day) {
    case 'lunes':
        console.log('Sumergirme en mi propia miseria');
        break;
    case 'martes':
        console.log('contemplar el abismo');
        break;
    case 'miercoles':
    case 'jueves':
        console.log('Solucionar el hambruna mundial');
        break;
    case 'viernes':
    case 'sabado':
        console.log('Danza y ejercicio');
        break;
    default:
        console.log('Ese no es un día de la semana');
}

let mes = '2';
switch(mes){
    case 1:
        console.log('Es Enero');
        break;
    case 2:
        console.log('Es Febrero');
        break;
    case 3:
        console.log('Es Marzo');
        break;
    case 4:
        console.log('Es Abril');
        break;
    default:
        console.log('intenta con otro')
}

const operador = prompt('Escribe + o -');
const num1 = Number(prompt('dime el primer num'));
const num2 = Number(prompt('dime el segundo num'));
/*
if(operador === '+') {
    console.log('La suma de ', num1, 'y', num2, 'es igual a ', num1 + num2);
} else if(operador === '-') {
    console.log('La resta de ', num1, 'y', num2, 'es igual a ', num1 - num2);
}*/

switch(operador) {
    case '+':
        console.log('La suma de ', num1, 'y', num2, 'es igual a ', num1 + num2);
        break;
    case '-':
        console.log('La resta de ', num1, 'y', num2, 'es igual a ', num1 - num2);
        break;
    default:
        alert('ingresa un operador válido');
}