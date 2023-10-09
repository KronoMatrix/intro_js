// OBJETO CUENTA
class Cuenta {
    constructor(nombre, saldo, password){
        this.Nombre = nombre;
        this.Saldo = saldo;
        this.Password = password;
    }
}

// Instancias
let cuenta1 = new Cuenta('Erick', 900, '1234');
let cuenta2 = new Cuenta('Melissa', 1000, '2345');
let cuenta3 = new Cuenta('Goku', 100, '6789');
let cuentas = [cuenta1,cuenta2,cuenta3];
let cuentaActual = 0;

document.addEventListener('DOMContentLoaded', e => { 
    pintarCuentas();
    pintarLogin(cuentaActual);

    // Le agrego event listener a cada boton de cuentas
    let btnCuentas = document.querySelectorAll(".cuenta");
    btnCuentas.forEach((btn, index) => {
        btn.addEventListener('click', () =>
        {
            // Le quito .selected al que esté ahora
            btnSelected = document.querySelector('.selected');
            btnSelected.classList.toggle('selected');
            // Se la pongo al que fue seleccionado
            btn.classList.toggle('selected');
            // La cuenta actual es igual al index de los botones
            cuentaActual = index;
            // Pinto el login de nuevo
            pintarLogin(cuentaActual);
        })
    })
});


function pintarCuentas(){
    let ctnr_cuentas = document.querySelector(".container-cuentas");
    let template = '';
    cuentas.forEach((user, index) => {
        template += `
            <article class="cuenta cuenta${index+1} ${index == 0 ? 'selected' : ''}">
            <img src="img/${index+1}.jpg" alt="foto perfil ${index+1}">
            <p>${user.Nombre}</p>
            </article>
        `;
    })
    ctnr_cuentas.innerHTML = template;
}

function pintarLogin(index){
    const cuenta_top = document.querySelector('.cuenta-top');
    template = `
        <img src="img/${index+1}.jpg" alt="foto perfil ${index}">
        <p>${cuentas[index].Nombre}</p>
    `
    cuenta_top.innerHTML = template;
}

function validarLogin(){
    const input = document.getElementById('inputPassword5').value;
    // Si no está vacio realizar
    if(input !== ''){
        if (input === cuentas[cuentaActual].Password){
            swal("Bienvenido", "Ingresaste a tu cuenta", "success").then((value) => {
                localStorage.setItem('usuario', JSON.stringify(cuentas[cuentaActual]));
                localStorage.setItem('index', cuentaActual);
                window.location.assign("index.html");
              });;
        }
        else{
            swal("Rayos", "Te equivocaste de contraseña", "error");
        }
    }
    else{
        swal("Vaya...", "No has ingresado contraseña", "warning");
    }
}



