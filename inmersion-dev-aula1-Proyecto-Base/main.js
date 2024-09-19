let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let aviso = document.querySelector('.aviso__parrafo');
let validacion = document.querySelector('.validacion__fortaleza');
let inputResultado = document.getElementById('resultado');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

cantidad.focus();

function generar() {
    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8) {
        aviso.textContent = "La cantidad de caracteres tiene que ser mayor que 8.";
        cantidad.focus();
        validacion.style.display = 'none';       
        return;
    }

    aviso.textContent = "";
       

    let password = '';

    for(let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)];

        password += caracterAleatorio;
    }

    contrasena.value = password;

    if (validarFortaleza(contrasena.value)) {
        validacion.textContent = "Contraseña fuerte";
        validacion.style.color = "green";
    } else {
        validacion.textContent = "Contraseña débil. Debe contener mayúsculas, minúsculas, números y caracteres especiales.";
        validacion.style.color = "red";
    }
    
    validacion.style.display = 'block';
}

function borrarContrasena() {
    document.querySelector('#cantidad').value = "";
    document.querySelector('#contrasena').value = "";
    validacion.style.display = 'none';
    cantidad.focus();
}

function validarFortaleza(contrasena) {
    const validarMinusculas = /[a-z]/;
    const validarMayusculas = /[A-Z]/;
    const validarNumeros = /[0-9]/;
    const validarCaracteres = /[!@#$%^&*()]/;

    return  validarMinusculas.test(contrasena) &&
            validarMayusculas.test(contrasena) &&
            validarNumeros.test(contrasena) &&
            validarCaracteres.test(contrasena);
}






