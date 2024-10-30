// ==UserScript==
// @name         Hotmail
// @namespace    http://tampermonkey.net/
// @version      2024-10-26
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/
// @match        https://signup.live.com/signup*
// @match        https://login.live.com/ppsecure/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

if(window.location.href.includes('ppsecure')){
let next = document.querySelector("#checkboxField")
setTimeout(next_sesion,3000);
function next_sesion() {
if(next){
document.querySelector("#checkboxField").click();
document.querySelector("#acceptButton").click();
    }else{
setTimeout(next_sesion,2000);
 }
}
}
var data = GM_getValue('Data')
var palabras = data.split("	");
console.log(palabras)

var correo = palabras[1].split("@hotmail.com");
var nombre_full = palabras[0].split(" ");
console.log(nombre_full)
var nombre = nombre_full[0]
var apellido = nombre_full[1]
function setMicrosoftEmail4(email) {

    const input = document.getElementById('usernameInput');
    if (!input) return false;

    // Obtener el controlador de validación original
    const originalProto = Object.getPrototypeOf(input);
    const originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    input.value = correo[0]
    input.focus();
    input.click();


   // input.value = email;


    // Disparar una serie de eventos en orden específico
    const events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: email, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

    // Restaurar el controlador original
    if (originalValidation) {
        Object.defineProperty(input, 'value', originalValidation);
    }

    // Forzar la validación del formulario
    input.form?.dispatchEvent(new Event('submit', { cancelable: true }));

    return true;
}

// Ejecutar con retardo para asegurar que la página esté lista
setTimeout(() => {

    set_hotmail();
    setMicrosoftEmail4();
    setTimeout(set_Password,2000);

    // Verificar el resultado
    const input = document.getElementById('usernameInput');
    console.log('Valor final:', input.value);
    console.log('¿Tiene error?:', input.classList.contains('has-error'));
}, 500);

// También intentar detectar y remover validaciones
const observer = new MutationObserver((mutations) => {
    const input = document.getElementById('usernameInput');
    if (input && input.classList.contains('has-error')) {
        input.classList.remove('has-error');
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ['class']
});
function set_hotmail() {

// Obtén el elemento select
const selectElement = document.getElementById("domainSelect");

// Cambia el valor a hotmail.com
selectElement.value = "hotmail.com";

// Crea y despacha un evento para notificar a la página que el valor ha cambiado
const event = new Event("change", { bubbles: true });
selectElement.dispatchEvent(event);
}


function set_Password() {
let pasword = document.getElementById("Password");
if(pasword){
function setMicrosoftEmail0(email) {
    const input = document.getElementById("Password");
    if (!input) return false;

    // Limpiar el valor actual

    // Obtener el controlador de validación original
    const originalProto = Object.getPrototypeOf(input);
    const originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    input.value = palabras[2];
    input.focus();
    input.click();

    // Establecer el valor
  //  input.value = email;

    // Disparar una serie de eventos en orden específico
    const events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: email, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

    // Restaurar el controlador original
    if (originalValidation) {
        Object.defineProperty(input, 'value', originalValidation);
    }

    // Forzar la validación del formulario
    input.form?.dispatchEvent(new Event('submit', { cancelable: true }));

    return true;
}

// Ejecutar con retardo para asegurar que la página esté lista
setTimeout(() => {
    setMicrosoftEmail0();
    setTimeout(set_name,2000);
}, 500);

} else { setTimeout(set_Password,2000);
}
}

function set_name() {
let name = document.querySelector("#firstNameInput");
if(name){
function setMicrosoftEmail(email) {
    const input = document.getElementById("firstNameInput");
    if (!input) return false;

    // Limpiar el valor actual
  //  input.value = nombre;

    // Obtener el controlador de validación original
    const originalProto = Object.getPrototypeOf(input);
    const originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    // Simular interacción de usuario
    input.focus();
    input.click();

    // Establecer el valor
    input.value = nombre;

    // Disparar una serie de eventos en orden específico
    const events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: email, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

    // Restaurar el controlador original
    if (originalValidation) {
        Object.defineProperty(input, 'value', originalValidation);
    }

    // Forzar la validación del formulario
   // input.form?.dispatchEvent(new Event('submit', { cancelable: true }));

    return true;
}

// Ejecutar con retardo para asegurar que la página esté lista
setTimeout(() => {

    setMicrosoftEmail();
    setMicrosoftEmail2()
}, 500);

} else { setTimeout(set_name,2000);
}
}

function setMicrosoftEmail2(email) {
    const input = document.getElementById("lastNameInput");
    if (!input) return false;

    // Limpiar el valor actual
  //  input.value = apellido;

    // Obtener el controlador de validación original
    const originalProto = Object.getPrototypeOf(input);
    const originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    // Simular interacción de usuario
    input.focus();
    input.click();

    // Establecer el valor
    input.value = apellido;

    // Disparar una serie de eventos en orden específico
    const events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: email, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

    // Restaurar el controlador original
    if (originalValidation) {
        Object.defineProperty(input, 'value', originalValidation);
    }

    // Forzar la validación del formulario
    input.form?.dispatchEvent(new Event('submit', { cancelable: true }));

    return true;
}

// Ejecutar con retardo para asegurar que la página esté lista
setTimeout(() => {

    setMicrosoftEmail2();
    setTimeout(set_nacimiento,2000);

}, 500);


function set_nacimiento() {
let nacimiento = document.querySelector('[data-testid="BirthDay"]');
if(nacimiento){


function setMicrosoftEmail3(email) {

function seleccionarDiaAleatorio() {
    // Obtener el elemento select
    const select = document.querySelector('[data-testid="BirthDay"]');

    // Generar un número aleatorio entre 1 y 31
    const diaAleatorio = Math.floor(Math.random() * 31) + 1;

    // Establecer el valor
    select.value = diaAleatorio.toString();

    // Crear y disparar el evento change para que el navegador detecte el cambio
    const evento = new Event('change', {
        bubbles: true,
        cancelable: true,
    });

    // Disparar el evento
    select.dispatchEvent(evento);

    console.log(`Día seleccionado: ${diaAleatorio}`);
}

// Ejecutar la función
seleccionarDiaAleatorio();

function seleccionarMes() {
    // Obtener el elemento select
    const select = document.querySelector('[data-testid="BirthMonth"]');

    // Generar un número aleatorio entre 1 y 31
    const diaAleatorio = Math.floor(Math.random() * 12) + 1;

    // Establecer el valor
    select.value = diaAleatorio.toString();

    // Crear y disparar el evento change para que el navegador detecte el cambio
    const evento = new Event('change', {
        bubbles: true,
        cancelable: true,
    });

    // Disparar el evento
    select.dispatchEvent(evento);

    console.log(`Mes seleccionado: ${diaAleatorio}`);
}

// Ejecutar la función
seleccionarMes();

    const input = document.querySelector("#BirthYear");
    if (!input) return false;

    // Limpiar el valor actual
    input.value = '';

    // Obtener el controlador de validación original
    const originalProto = Object.getPrototypeOf(input);
    const originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    // Simular interacción de usuario
    input.focus();
    input.click();

    // Establecer el valor
    input.value = email;

    // Disparar una serie de eventos en orden específico
    const events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: email, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

    // Restaurar el controlador original
    if (originalValidation) {
        Object.defineProperty(input, 'value', originalValidation);
    }

    // Forzar la validación del formulario
    input.form?.dispatchEvent(new Event('submit', { cancelable: true }));

    return true;
}

setMicrosoftEmail3('1990');
}else{
    setTimeout(set_nacimiento,2000);
}

}
