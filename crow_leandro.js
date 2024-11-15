// ==UserScript==
// @name         Siempre Prueba de server Full
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ejemplo
// @author       Tu Nombre
// @match        https://crowdtap.com/*
// @match        https://www.google.com/
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.ipify.org
// @connect      worldnamegenerator.com
// @connect      litport.net
// @connect      daisysms.com
// ==/UserScript==

if(window.location.href.includes('google')){
if(!GM_getValue('Data')){
location.href ='https://crowdtap.com/auth/account-create-email';
}
}

else if(window.location.href.includes('dashboard')){

/*setTimeout(data_alaerta,10000)
function data_alaerta() {
var miDiv_12 = document.querySelector("#divContainer > div > div:nth-child(12) > app-tile > button > div.ng-star-inserted > span");
var miDiv_9 = document.querySelector("#divContainer > div > div:nth-child(9) > app-tile > button > div.ng-star-inserted > span");

if(miDiv_12 || miDiv_9){
alert(GM_getValue('Data'));
}else {
setTimeout(data_alaerta,10000)
}
}*/


   setTimeout(keep,10000)

function keep(){
setTimeout(keep ,10000)
var text = document.querySelector("#response")
var existe = document.querySelector(".button-cta")

if (existe){
document.querySelector(".button-cta").click()

setTimeout( function(){
document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
},7000)

}
if (text){
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText
if(spanText === "Crowdtap 101: Question Types" || spanText === "Crowdtap 101: Survey Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"){
}else{
//document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
    }
}

}

var data = GM_getValue('Data')
var palabras = data.split("	");

function calcularEdad(fechaNacimiento) {
    // Convertir la fecha de nacimiento en un objeto Date
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    // Calcular la diferencia en años
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    // Ajustar la edad si el cumpleaños aún no ha pasado este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}
var ventanaa = true
var div = true
setTimeout(function dataa(){
setTimeout(dataa,1000)
let fechaNacimiento = palabras[7]; // Fecha en formato YYYY-MM-DD
        var miDiv = document.querySelector('body > app-root > app-default-layout > div.flex-col.h-screen.hidden.sm\\:flex.ng-tns-c14-0.ng-star-inserted > app-general-header > header > div > a');

        var nuevoTexto = document.createElement('p');
        nuevoTexto.textContent = "Edad: "+calcularEdad(fechaNacimiento)+" ---> "+palabras[7]
        nuevoTexto.style.fontWeight = '700'
        nuevoTexto.style.color = 'green';
        nuevoTexto.style.fontSize = "25px";

 // Ajusta la altura según tus necesidades
      //  miDiv.style.display = "none"
        // Paso 3: Inserta el nuevo elemento justo después del div
       // miDiv.parentNode.insertBefore(nuevoTexto, miDiv.nextSibling);

if(div){
    div = false
 //   miDiv.parentNode.insertBefore(nuevoTexto, miDiv.nextSibling);
  }

var navElement = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p")
var data_green = document.querySelector(".justify-end > div:nth-child(1) > p:nth-child(3)")

if(navElement){
if(ventanaa || !data_green){

ventanaa=false
    nuevoTexto.style.fontSize = "20px";
    navElement.insertAdjacentElement("afterend", nuevoTexto, navElement.nextSibling);
  }
}else{
  ventanaa = true
  }

},1000)

 verifiedd_interval()
function verifiedd_interval(){
var verified = document.querySelector("#divCompleted > app-taskboard-completed > div > div > h3 > span")
var verified1 = document.querySelector("button.ng-tns-c116-3");
if (verified||verified1) {
verifiedd();
}else{
setTimeout(verifiedd_interval,5000);
}
}
function verifiedd(){
document.querySelector("#divContainer > app-unlock-full-experience > div > div.buttons-container > button").click()
setTimeout(function(){

var enter = document.querySelector("#recaptcha-anchor")
if (enter) {
    const enterEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'Enter',
      keyCode: 13
    });

    enter.dispatchEvent(enterEvent);
  }
setTimeout(resolver,3000);
},4000)
function resolver(){
document.querySelector("#solver-button").click()
}
}
var ventana = true
setTimeout(corriendo,10000)
function corriendo(){
setTimeout(corriendo,9000)
var containerText = document.querySelector("#divContainer").textContent
var lines = containerText.split("  ");

var selectedLine1 = lines[0];
var selectedLine2 = lines[1];
var selectedLine3 = lines[2];
var selectedLine4 = lines[3];
var selectedLine5 = lines[4];
var selectedLine6 = lines[5];
var selectedLine7 = lines[6];
    if(ventana){

if (selectedLine1 === "Crowdtap 101: Question Types") {
document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}if (selectedLine3 === "Crowdtap 101: Your Membership") {
document.querySelector("#divContainer > div > div:nth-child(4) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}else if (selectedLine3 === "Crowdtap 101: Survey Types") {
document.querySelector("#divContainer > div > div:nth-child(6) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
  }
 }

var spanElement = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p");
if (spanElement) {
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText
if (spanText === "Crowdtap 101: Getting Rewarded" || spanText === "Crowdtap 101: Your Membership"
    || spanText === "Crowdtap 101: Survey Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"
    || spanText === "Crowdtap 101: The Basics" ){
ventana=false
} else {
/*setTimeout( function(){
document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
setTimeout(task_ready,3000);
    ventana=true
setTimeout(corriendo,3000);
  },3000)*/}
}

function task_ready() {}

}
}else{
function fetchPublicIP(callback) {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://api.ipify.org?format=json&timestamp=' + new Date().getTime(), // Agregar timestamp para evitar la caché
        onload: function(response) {
            if (response.status === 200) {
                const data = JSON.parse(response.responseText);
                callback(data.ip);
            } else {
                console.error('Error al obtener la dirección IP:', response.statusText);
                callback(null);
            }
        },
        onerror: function(error) {
            console.error('Error al realizar la solicitud:', error);
            callback(null);
        }
    });
}

// Variable para almacenar la dirección IP actual
let currentIP = '';

// Función para verificar cambios en la dirección IP
function checkIPChange() {
    fetchPublicIP(function(newIP) {
        if (newIP !== null && newIP !== currentIP) {
            console.log('La dirección IP ha cambiado:', newIP);
var segundoPaso = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(2) > label")
if(segundoPaso && segundoPaso.textContent.includes("City")){
document.querySelector("#main-content > article > div.center-column > form > section > button.relative.font-bold.text-white.rounded-full.w-68.h-14.bg-blue-dark").click();
}
            currentIP = newIP;
        } else {
            //console.log('La dirección IP sigue siendo la misma:', currentIP);
        }
    });
}

// Verificar cambios cada cierto tiempo (por ejemplo, cada 5 segundos)
setInterval(checkIPChange, 4000);

function create() {
// URL de la página web
var url = "https://www.worldnamegenerator.com/World_Address/get_us_address1/sex/Female/state/NC";

GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(response) {
let datos = ""
const code_correo = Math.round (Math.random() * (999999 - 100000) + 100000);
const code_clave = Math.round (Math.random() * (99999 - 10000) + 10000);
const añoo = Math.round (Math.random() * (1985 - 1981) + 1981);
const mess = Math.round (Math.random() * (12 - 1) + 1);
const diaa = Math.round (Math.random() * (28 - 1) + 1);
   setTimeout(crearboton, 1000);
function crearboton(){
setTimeout(crearboton, 2000);
        (function() {
    var textofinal;
    var prefcorreo = "@hotmail.com"

var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});
var event = new Event('change', {
 bubbles: true
});


var nombrefull = $(response.responseText).find("#main > div > div.col-sm-9.no-padding > div > div:nth-child(4) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2) > b").text();
nombrefull = nombrefull.match(/\b\w{2,}\b/g);
var palabras = nombrefull
var nombre = palabras[0]+" "+palabras[1];

var direccion_response = $(response.responseText).find("#main > div > div.col-sm-9.no-padding > div > table:nth-child(7)").text();
var direccion = direccion_response.split(/[\t\n\r ]{2,}/);


        textofinal = nombre

        textofinal += "\t"+generarcorreo(nombrefull);

        //colocar clave
        textofinal += "\t"+generarclave(nombrefull);


        textofinal += "\t"+generarcalle(direccion);

        //direccion
        textofinal += "\t"+generardireccion(direccion);


var primerPaso = document.querySelector("#main-content > article > div.center-column > form > div.text-center > button")
if(primerPaso){

//correo
var inputCorreo = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(1) > div > input");
inputCorreo.value = generarcorreo(nombrefull);
inputCorreo.dispatchEvent(inputEvent);

//clave
var inputClave = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(2) > div > input")
inputClave.value = generarclave(nombrefull);
inputClave.dispatchEvent(inputEvent);

//nombre
var inputNombre = document.querySelector("#main-content > article > div > form > div:nth-child(3) > div > input")
inputNombre.value = palabras[0];

//apellido
var inputApellido = document.querySelector("#main-content > article > div > form > div:nth-child(4) > div > input")
inputApellido.value = palabras[1];

inputNombre.dispatchEvent(inputEvent);
inputApellido.dispatchEvent(inputEvent);
setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > div.text-center > button").click()},500)
}

var label_existe = document.querySelector("#main-content > article > div > form > div.mb-6.form-row.ng-star-inserted > label")
if(label_existe){
var segundoPaso = document.querySelector("#main-content > article > div > form > div.mb-6.form-row.ng-star-inserted > label").innerText;
if(segundoPaso==='Your Birthday'){

//Your Birthday
var inputFecha = document.querySelector('input[name="dp"]');
var fecha = new Date(añoo, mess - 1, diaa); // Restamos 1 al mes porque los meses en JavaScript van de 0 a 11
var formatoFecha = fecha.toISOString().slice(0, 10);
inputFecha.value = formatoFecha;
textofinal += "\t"+formatoFecha
datos=textofinal
console.log(textofinal)
GM_setValue('Data', datos);
inputFecha.dispatchEvent(inputEvent);

//Your gender preference
var select_gender = document.querySelector('[formcontrolname="gender"]');
var value_female = select_gender.querySelector('option[value="1"]');
value_female.selected = true;
select_gender.dispatchEvent(event);

// raza
var selectElement = document.querySelector('[formcontrolname="ethnicity_id"]');
var opcionSeleccionada = selectElement.querySelector('option[value="3bfcadda-33db-4091-82e2-c3b1d8f86d1b"]');
opcionSeleccionada.selected = true;
selectElement.dispatchEvent(event);
setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > section > button.relative.pl-4.pr-4.font-bold.text-white.rounded-full.bg-blue-dark.h-14.action-btn").click()},500)

//Education
var select_education = document.querySelector('[formcontrolname="education_id"]');
            var ome_high_school = "037cf01a-093c-4a9c-9f37-81b26c9b52c4";
            var High_school_graduate_or_equivalent = "c2e8341e-8078-4e11-a135-6dd1c705dbeb";
            var Trade_or_vocational_school_degree = "a0492057-b8a5-4d14-b362-9aade76e3362"
            var Some_college = "db35b9e4-2a17-49cd-84cf-b8245a016518"
            var Associate_Degree = "b8e10485-169b-4fac-b9cb-a5fd64456e4d"
            var Bachelor_Degree = "90cf49cf-89f4-44a7-bec5-461b3561317f"
            var Graduate_or_professional_degree = "5a1abe67-353f-4101-ba98-f086bfbdf71e"
            var prefer_not_answer = "8ecd787f-6803-4d87-ae9c-3737c55eccf6"
//colocar en value la opcion deseada
var value_option = select_education.querySelector('option[value="90cf49cf-89f4-44a7-bec5-461b3561317f"]');
value_option.selected = true;
select_education.dispatchEvent(event);
}
}
var label_tercero_paso = document.querySelector("#main-content > article > div > form > div:nth-child(1) > div > div > label")
if(label_tercero_paso){
var tercerpaso = document.querySelector("#main-content > article > div > form > div:nth-child(1) > div > div > label").innerText
if(tercerpaso==="Employment status"){
//rotar ip
GM_xmlhttpRequest({
        method: "GET",
        url: "https://litport.net/sys/rotate-ip?key=3ad39fb8d91f4af9c2761b5f97c129ff",
        onload: function(response) {
            console.log(response.responseText);
        },
        onerror: function(error) {
            console.error(error);
        }
    });
setTimeout( function() {
document.querySelector("#main-content > article > div.center-column > form > section > button.relative.font-bold.text-white.rounded-full.w-68.h-14.bg-blue-dark").click();
},50000)



//Employment status
var select_employment = document.querySelector('[formcontrolname="employment_id"]');
    var Employed_full_time = "7aa2e6a4-09c9-4ec6-9420-b167b55428d4"
    var Employed_Part_time = "6d297cd1-d3a6-4542-adff-e44cef89ff4a"
    var Self_employed = "c3de7a69-4964-4511-8d22-e073a762cae2"
    var Unemployed = "b6113a80-4f57-478e-938e-c7adef917070"
    var Student = "0c97b9e1-ae90-441d-8867-1e76287e2afa"
    var Homemaker = "6a0583fc-e6da-4edd-9803-e4e189f27559"
    var Retired = "79945f54-bfd8-4bb3-b55e-526c304fe40f"
    var Unable_to_work = "a9830f20-8b64-419a-bd2a-053a2f868475"
    var prefer_not_to_answer = "485386e7-8102-4b50-85b9-6a2a670c6577"

value_option = select_employment.querySelector('option[value="6d297cd1-d3a6-4542-adff-e44cef89ff4a"]'); // Employed_Part_time POR DEFECTO
value_option.selected = true;
select_employment.dispatchEvent(event);


//Relationship status
var select_relationship_status = document.querySelector('[formcontrolname="relationship_id"]');
    var Married = "9b27945c-a6be-4572-a13d-fd786253de44"
    var Civil_Union_Domestic_Partnership = "19ec1d42-4d33-4f16-a469-9dccacfebc89"
    var Separated = "276bd37a-966d-4720-ada9-f7b5b98cd9d8"
    var Widowed = "0e6062ea-0b14-4181-8384-2fa5b1a36f9b"
    var Divorced = "fd42fecd-8fa9-45fb-8427-0753c9019594"
    var Single_never_married = "9a46f945-8047-4492-b448-8ab4926f66d6"
    var prefer_not_to_answerr = "a40c802b-7acb-4140-af18-ec1dc7aa1cbc"

value_option = select_relationship_status.querySelector('option[value="9b27945c-a6be-4572-a13d-fd786253de44"]'); // Married POR DEFECTO
value_option.selected = true;
select_relationship_status.dispatchEvent(event);


// Size of household
var select_size_of_household = document.querySelector('[formcontrolname="household_id"]');
    var uno = "4fd68f22-7446-4fb3-b291-0e568dd26dc1"
    var dos = "209892b1-9980-4f98-bd5f-cd29ef468396"
    var tres = "06620023-41bd-4b97-92f1-ee2e9df44a62"
    var cuatro = "409ac301-5777-4c23-81dd-8fc098419de0"
    var cinco_mas = "428127c4-34e7-4973-8c7d-f5cbd009031f"

value_option = select_size_of_household.querySelector('option[value="06620023-41bd-4b97-92f1-ee2e9df44a62"]'); // 3 POR DEFECTO
value_option.selected = true;
select_size_of_household.dispatchEvent(event);


// Parenting status
var select_parenting_status = document.querySelector('[formcontrolname="parenting_id"]');
    var I_dont_have_any_children = "a85fba83-46f8-4f5b-9402-d2f124aa397e"
    var I_dont_have_any_children_2 = "718df18e-1619-4381-9733-0cbb6f3c3c36"
    var I_have_children_at_home = "96d17442-51c8-4b92-a44e-22b54c6d4f7d"
    var I_prefer_not_to_answer = "08f3ad6e-acd6-413b-928e-e68515081b00"

value_option = select_parenting_status.querySelector('option[value="96d17442-51c8-4b92-a44e-22b54c6d4f7d"]'); //  I have children at home POR DEFECTO
value_option.selected = true;
select_parenting_status.dispatchEvent(event);

setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > section > button.relative.pl-4.pr-4.font-bold.text-white.rounded-full.bg-blue-dark.h-14.action-btn").click()},500)
 }
}


var label_ultimo_paso = document.querySelector("#main-content > article > div > form > div > label")
if(label_ultimo_paso){
var ultimopaso = document.querySelector("#main-content > article > div > form > div > label").innerText
if(ultimopaso==="Combined household income"){

//Combined household income
var select_combined_household_income = document.querySelector('[formcontrolname="income_level_id"]');
    var Under_$25000 = "007a2ff7-fdc0-46e0-863b-21ecda7b6bce"
    var $25000_$34999 = "e70539de-dbbb-4f24-bba9-10038143d01c"
    var $35000_$44999 = "aa1aa735-53b4-4e54-bb2f-f0eab62ff80b"
    var $45000_$59999 = "c7da83dc-19a0-459d-9a4b-28402ca85af3"
    var $60000_$74999 = "aa6cca88-4925-47c8-9184-f12010f66c2f"
    var $75000_$99999 = "16bad03e-b8f1-4131-89f6-50df8417eae1"
    var $100000_$149999 = "54682b61-85e0-465a-806f-32ab6dc3a374"
    var $150000_or_more = "40c7d945-55e8-4883-8daa-849a7647d4ec"
    var I_prefer_not_to_answerr = "0a64e748-cab4-4f00-8489-e0c280127138"

value_option = select_combined_household_income.querySelector('option[value="54682b61-85e0-465a-806f-32ab6dc3a374"]');
value_option.selected = true;
select_combined_household_income.dispatchEvent(event);


//Ciudad
var inputCiudad = document.querySelector("#main-content > article > div > form > div:nth-child(2) > div > input");
var selectedLine0 = direccion[5]
inputCiudad.value = selectedLine0;
inputCiudad.dispatchEvent(inputEvent);

//Estado
var selectEstado = document.querySelector('[formcontrolname="state_id"]');

var NC="4ff12f39-04ad-463b-a62d-5d29334512b1"
var TX="f36e119e-51c9-4584-a59a-d1ff9a8f0189"
var CA="3997947a-3a51-4045-83f7-b5db880d7a81"

var opcionSeleccionada1 = selectEstado.querySelector('option[value="4ff12f39-04ad-463b-a62d-5d29334512b1"]'); //NC
opcionSeleccionada1.selected = true;
selectEstado.dispatchEvent(event);

//Codigo Postal
var inputCodigo = document.querySelector("#main-content > article > div > form > div:nth-child(4) > div > input");
var selectedLine2 = direccion[11]
inputCodigo.value = selectedLine2;
inputCodigo.dispatchEvent(inputEvent);

//Boton Check
var checkbox = document.getElementById('check-1');
if (checkbox) {
    checkbox.setAttribute('checked', 'true');
    checkbox.checked = true;
    checkbox.dispatchEvent(event);
}
   }
}

       // portapapeles(textofinal);

    function generarcorreo(nombrecompleto){
    var correofinal;

        correofinal = nombrecompleto[0]+nombrecompleto[1]+code_correo+prefcorreo;

     return correofinal;
    }

    function generarclave(nombrecompleto){
    var clavefull;

        clavefull = nombrecompleto[0]+nombrecompleto[1]+"*/-"+code_clave;
    return clavefull;
    }

    function generarcalle(direccion){
        var arr1 = direccion[3];
        var calle = arr1
        return calle
    }

    function generardireccion(direccion){
    var fulldireccion;

var ciudad = direccion[5]
var estado = direccion[7]
var zip = direccion[11]


    return ciudad +"\t"+estado+"\t"+zip
    }

    function getRandomArbitrary(min, max) {
  return Math.round (Math.random() * (max - min) + min);
}

})();

}}
});
}

// Verificar cambios cada cierto tiempo (por ejemplo, cada 5 segundos)
setTimeout(create, 5000);

}

function addClonedButton() {
var originalButton = document.querySelector("#BotonAutoBuscar");
var newButton = originalButton.cloneNode(true);
newButton.setAttribute('title', 'Skip');
newButton.setAttribute('id', 'BotonAutoBuscar');
newButton.setAttribute("style", "background-color: gray !important; z-index: 1055;");
var svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 122.88 122.88">
    <g>
        <path d="M37.95,4.66C45.19,1.66,53.13,0,61.44,0c16.96,0,32.33,6.88,43.44,18c5.66,5.66,10.22,12.43,13.34,19.95
        c3,7.24,4.66,15.18,4.66,23.49c0,16.96-6.88,32.33-18,43.44c-5.66,5.66-12.43,10.22-19.95,13.34c-7.24,3-15.18,4.66-23.49,4.66
        c-8.31,0-16.25-1.66-23.49-4.66c-7.53-3.12-14.29-7.68-19.95-13.34C12.34,99.22,7.77,92.46,4.66,84.93C1.66,77.69,0,69.75,0,61.44
        c0-8.31,1.66-16.25,4.66-23.49C7.77,30.42,12.34,23.66,18,18C23.65,12.34,30.42,7.77,37.95,4.66L37.95,4.66z M50,47.13
        c-2.48-2.52-2.45-6.58,0.08-9.05c2.52-2.48,6.58-2.45,9.05,0.08L77.8,57.13c2.45,2.5,2.45,6.49,0,8.98L59.49,84.72
        c-2.48,2.52-6.53,2.55-9.05,0.08c-2.52-2.48-2.55-6.53-0.08-9.05l13.9-14.13L50,47.13L50,47.13z M42.86,16.55
        c-5.93,2.46-11.28,6.07-15.76,10.55c-4.48,4.48-8.09,9.83-10.55,15.76c-2.37,5.71-3.67,11.99-3.67,18.58
        c0,6.59,1.31,12.86,3.67,18.58c2.46,5.93,6.07,11.28,10.55,15.76c4.48,4.48,9.83,8.09,15.76,10.55c5.72,2.37,11.99,3.67,18.58,3.67
        c6.59,0,12.86-1.31,18.58-3.67c5.93-2.46,11.28-6.07,15.76-10.55c4.48-4.48,8.09-9.82,10.55-15.76c2.37-5.71,3.67-11.99,3.67-18.58
        c0-6.59-1.31-12.86-3.67-18.58c-2.46-5.93-6.07-11.28-10.55-15.76c-4.48-4.48-9.83-8.09-15.76-10.55
        c-5.71-2.37-11.99-3.67-18.58-3.67S48.58,14.19,42.86,16.55L42.86,16.55z"/>
    </g>
</svg>
`;
newButton.innerHTML = svgIcon
originalButton.parentNode.insertBefore(newButton, originalButton.nextSibling);

function autoclose() {
    // Establece el estado inicial del botón según el valor guardado
    const isChecked = GM_getValue('autoclose', false);
    newButton.checked = isChecked;
    newButton.setAttribute("style", `background-color: ${isChecked ? 'rgb(40, 192, 103)' : 'gray'} !important; z-index: 1055;`);

    // Evento para alternar el estado y guardar el nuevo valor
    newButton.addEventListener("click", function() {
        const newState = !newButton.checked; // Alterna el estado
        GM_setValue('autoclose', newState);
        newButton.checked = newState;

        // Cambia el color del botón en función del estado actual
        newButton.setAttribute("style", `background-color: ${newState ? 'rgb(40, 192, 103)' : 'gray'} !important; z-index: 1055;`);
        setTimeout(existe,500);
    });
}

// Llama a la función para iniciar la configuración de autoclose
autoclose();

}

    const observer = new MutationObserver((mutations, obs) => {
        const originalButton = document.querySelector("#BotonAutoBuscar");
        if (originalButton && !document.querySelector('button[title="Skip"]')) {
            addClonedButton();
            existe()
            // obs.disconnect(); // Descomenta esta línea si solo quieres que se ejecute una vez
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

function existe() {
if(GM_getValue('autoclose', true)){
var name_task0 = document.querySelector("div > div > app-action-loader > app-open-ended > div > div.head-container > app-action-modal-header > div > div > p");
var primer_skip = document.querySelector("button.true.text-sm.font-bold.w-36.md\\:text-base.btn.btn-secondary.text-blue-dark.skip.ng-star-inserted");
var campo_text = document.querySelector("#response");
var name_text0 = document.querySelector('div.bg-body-light:nth-child(2)');
if(name_task0 && campo_text){
    var name_task = document.querySelector("div > div > app-action-loader > app-open-ended > div > div.head-container > app-action-modal-header > div > div > p").textContent;
    var name_includes = name_task.substring(0, name_task.length);
    GM_setValue('name_task', name_includes);
//Cerramos la ventana
    document.querySelector("div > div > app-action-loader > app-open-ended > div > div.head-container > app-action-modal-header > div > button").click();
    setTimeout(buscar_skip,5000);

}else if(name_text0 && campo_text){
    var name_text = document.querySelector('div.bg-body-light:nth-child(2)').textContent;
    name_includes = name_text.substring(0, name_text.length / 2);
    GM_setValue('name_task', name_includes);
    setTimeout(buscar_skip,500);
}
else{
    console.log("No Existe");
    setTimeout(existe,2000);
  }
 }
}
function buscar_skip() {
var divContainer = document.querySelector("#divContainer > div");
var elements = divContainer.querySelectorAll("div"); // Seleccionamos todos los div hijos

var text = GM_getValue('name_task');
    console.log(text)
var foundElement = null;

// Recorremos todos los div hijos dentro de #divContainer
for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent.includes(text)) {
        foundElement = elements[i]; // Guardamos el elemento encontrado
        break;
    }
}

if (foundElement) {
    // Obtenemos el siguiente elemento div
    var nextElement = foundElement //.nextElementSibling;

    if (nextElement) {
        // Buscamos el botón dentro del siguiente div
        var button = nextElement.querySelectorAll("button");

        if (button) {
            console.log("Botón encontrado:", button.length);
            button[1].click();; // Hacemos clic en el botón encontrado
            setTimeout(existe,5000);
        } else {
            console.log("No se encontró un botón en el siguiente div.")
            console.log(nextElement)
            setTimeout(existe,5000);
        }
    } else {
        console.log("No hay un siguiente elemento disponible.")
        setTimeout(existe,5000);
    }
} else {
    setTimeout(next_task,1000);
    console.log("No se encontró el texto en ningún elemento.")
    setTimeout(existe,5000);
 }

function next_task() {
var divContainer = document.querySelector("#divContainer > div");
var elements = divContainer.querySelectorAll("div"); // Seleccionamos todos los div hijos
var foundElement = null;
for (var i = 0; i < elements.length; i++) {
    if (elements[i]) {
        foundElement = elements[i]; // Guardamos el elemento encontrado
        break;
    }
}
if (foundElement) {
    // Obtenemos el siguiente elemento div
    var nextElement = foundElement //.nextElementSibling;

    if (nextElement) {
        // Buscamos el botón dentro del siguiente div
        var button = nextElement.querySelector("button");

        if (button) {
            console.log("Botón encontrado:", button.textContent);
            button.click();; // Hacemos clic en el botón encontrado
        }
    }
  }
}

}
