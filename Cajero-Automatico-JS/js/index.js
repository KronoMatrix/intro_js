var usuario;

document.addEventListener('DOMContentLoaded', e => { 
    // Obtengo el localstorage el usuario iniciado
    usuario = JSON.parse(localStorage.getItem('usuario'));
    // También el número de cuenta que es, es como obtener su ID
    let index = localStorage.getItem('index'); 
    // Compruebo si hay usuario, sino es porque no se ha logueado nunca 
    if (usuario === null){
        // Lo mando pal login
        window.location.assign("login.html");
    }
    else{
        // Si hay usuario por lo que pinto el usuario
        pintarUsuario(index);
        // Actualizo el saldo del html
        actualizarSaldo();
    }
    
});


// Función para cerrar sesión
function cerrarSesion(){
    // Borró lo que haya en el localStorage
    localStorage.clear();
    swal(`Cerrando Sesión`, "Se le redirigirá al login", "info").then((value) => {
        window.location.assign("login.html");
    });
    
}

// Pinto el usuario
function pintarUsuario(index){
    const top_screen = document.querySelector('.top-screen');
    let template = `
        <img src="img/${(Number(index)+1)}.jpg" alt="usuario ${index+1}">
        <h2>${usuario.Nombre}</h2>
    `
    top_screen.innerHTML = template;
}

// Le agrego eventlistener a los botones
const botones = document.querySelectorAll('.opcion');
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        // Le quito el .show al que esté ahora
        const screenShowed = document.querySelector('.show');
        screenShowed.classList.toggle('show');
        // Le agrego el .show al que fue elegido
        const screenSelect = document.querySelector(`.${btn.classList[1]}-container`);
        screenSelect.classList.toggle('show');
    })
})

// Función para ingresar saldo
function ingresarSaldo(){
    let dinero = Number(document.getElementById('ingresar-input').value);
    let dineroActualizado = Number(usuario.Saldo) + dinero;
    if (dineroActualizado <= 50000){
        usuario.Saldo = dineroActualizado;
        actualizarSaldo();
        swal(`Monto ingresado = ${dinero}`, `Nuevo saldo en cuenta = ${dineroActualizado}`, "success");
    }
    else{
        swal(`Operación incorrecta`, `Tu saldo actual excedería 50000 pesos por $${dineroActualizado-50000}`, "error");
    } 
}

// Función para retirar saldo
function retirarSaldo(){
    let dinero = Number(document.getElementById('retirar-input').value);
    let dineroActualizado = Number(usuario.Saldo) - dinero;
    if (dineroActualizado >= 0){
        usuario.Saldo = dineroActualizado;
        actualizarSaldo();
        swal(`Monto retirado = ${dinero}`, `Nuevo saldo en cuenta = ${dineroActualizado}`, "success");
    }
    else{
        swal(`Operación incorrecta`, "Eres demasiado pobre, fondos insuficientes", "error");
    }  
}

// Función para actualizar el saldo del html
function actualizarSaldo(){
    const saldoElement = document.querySelector('.saldo-p');
    let template = `$${usuario.Saldo}`;
    saldoElement.innerHTML = template;
}